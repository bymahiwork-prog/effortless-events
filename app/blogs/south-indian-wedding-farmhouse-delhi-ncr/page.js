import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "South Indian Wedding at a Farmhouse in Delhi: Dates & Cost",

  description:
    "Planning a South Indian wedding at a farmhouse in Delhi NCR? 2026–27 Tamil muhurtham dates, Margazhi gap, morning setup, cost estimates and a checklist.",

  keywords: [
    "South Indian wedding at farmhouse Delhi NCR",
    "South Indian wedding venue Delhi",
    "Tamil wedding dates 2027",
    "Tamil muhurtham dates December 2026",
    "no weddings in Margazhi",
    "South Indian wedding cost Delhi",
    "morning muhurtham wedding Delhi NCR",
  ],

  alternates: { canonical: "/blogs/south-indian-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "South Indian Wedding at a Farmhouse in Delhi NCR: Dates & Cost",
    description:
      "The 2026–27 Tamil muhurtham dates, why Margazhi has no weddings, how to run a sunrise muhurtham at a Delhi NCR farmhouse, cost estimates for 100–350 guests and a checklist.",
    images: ["/decoration-2.webp"],
  },
};

const faqs = [
  {
    q: "Can a South Indian wedding be held at a farmhouse in Delhi NCR?",
    a: "Yes. Most Tamil, Telugu, Kannada and Malayali Hindu weddings can be performed by your own priest at any venue that allows a mandap and a small homam fire. A farmhouse suits it well because you can set up the mandap the night before, stay overnight and serve a sit-down lunch on the lawn.",
  },
  {
    q: "What are the Tamil wedding muhurtham dates in December 2026 and early 2027?",
    a: "WeddingWire and OneIndia Tamil list 4, 6, 10, 13 and 14 December 2026. The Wedding Company's 2027 list gives 20 and 28 January, then 8, 10, 11, 18, 25 and 26 February and seven dates in March 2027; some panchangams add 1 and 5 February. Confirm the date and timing with your family priest.",
  },
  {
    q: "Why are there no Tamil weddings in Margazhi?",
    a: "Margazhi is treated as a month for prayer, temple visits and early-morning worship, so weddings and housewarmings are usually avoided. In 2026–27 Margazhi runs from about 16 December 2026 to 14 January 2027, and wedding dates resume in Thai, which begins with Pongal on 15 January 2027.",
  },
  {
    q: "What time is a South Indian wedding muhurtham?",
    a: "Tamil and Kannada muhurthams are usually in the early or late morning, often between about 6 AM and 10:30 AM, and the priest fixes the exact window. Telugu lagnams can fall in the morning, evening or late at night, so check yours before booking the farmhouse slot.",
  },
  {
    q: "How much does a South Indian wedding at a farmhouse cost in Delhi NCR?",
    a: "As a rough estimate, a 200-guest morning muhurtham with lunch and an evening reception the day before costs about ₹9–20 lakh in Delhi NCR, depending on the farmhouse, menu and décor. A 100-guest muhurtham with lunch only can come in around ₹4–9 lakh.",
  },
  {
    q: "Where do Delhi families find South Indian caterers, priests and nadaswaram players?",
    a: "Most families ask their local South Indian temple, community association or relatives for priests and nadaswaram players, and use wedding marketplaces for caterers who cook a full banana-leaf meal. Book all three before the venue is final, because the good ones fill up on the few muhurtham dates.",
  },
  {
    q: "Can we have firecrackers or a bar at a South Indian farmhouse wedding?",
    a: "No firecrackers: the Supreme Court restored the firecracker ban in Delhi-NCR from 9 November 2026. A morning muhurtham is usually dry, but if the reception has a bar, a Delhi farmhouse needs a P-10 licence, and Haryana and UP farmhouses need their own state permit.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="south-indian-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-22"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-2.webp"
          width={648}
          height={810}
          fetchPriority="high"
          decoding="async"
          alt="South Indian wedding at a farmhouse in Delhi NCR: a daylight floral mandap with orange, peach and pink flowers, chairs for the couple and petals on the aisle for a morning muhurtham"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          South Indian Wedding at a Farmhouse in Delhi NCR: Dates, Timing and
          Cost
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
          Planning a South Indian wedding at a farmhouse in Delhi NCR this
          winter? Tamil, Telugu, Kannada and Malayali families living in
          Delhi, Noida and Gurgaon often find that banquet halls are built for
          late-night North Indian weddings, not a sunrise muhurtham followed
          by a banana-leaf lunch. This guide covers the 2026–27 muhurtham
          dates, the Margazhi gap, how to run a morning ceremony at a
          farmhouse, cost estimates and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            A Delhi NCR farmhouse works very well for a South Indian wedding.
            Pick a muhurtham date (4–14 December 2026 or from 20 January 2027,
            since Margazhi has none), book the farmhouse from the previous
            afternoon so the mandap is ready by sunrise, and plan heaters for a
            cold 6–10 AM ceremony. Budget roughly ₹9–20 lakh for 200 guests.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          South Indian Wedding at a Farmhouse: At a Glance
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
                <td className={td}>Tamil dates this season</td>
                <td className={td}>
                  4, 6, 10, 13, 14 Dec 2026; 20, 28 Jan 2027; 8, 10, 11, 18,
                  25, 26 Feb 2027 (published lists; confirm with your priest)
                </td>
              </tr>
              <tr>
                <td className={td}>No-wedding window</td>
                <td className={td}>
                  Margazhi, about 16 Dec 2026–14 Jan 2027
                </td>
              </tr>
              <tr>
                <td className={td}>Ceremony timing</td>
                <td className={td}>
                  Usually morning for Tamil and Kannada weddings; Telugu
                  lagnams can be morning, evening or late night
                </td>
              </tr>
              <tr>
                <td className={td}>Booking you need</td>
                <td className={td}>
                  Previous afternoon to wedding afternoon (overnight), so the
                  mandap, kolam and kitchen are ready before sunrise
                </td>
              </tr>
              <tr>
                <td className={td}>Must-haves</td>
                <td className={td}>
                  Covered mandap, safe homam spot, rooms for both families,
                  space for sit-down lunch, kitchen area, heaters
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>
                  About ₹4–9 lakh for 100 guests (muhurtham + lunch); ₹9–20
                  lakh for 200 guests with a reception the evening before
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            CAN IT BE HELD
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can a South Indian Wedding Be Held at a Farmhouse in Delhi NCR?
        </h2>

        <p className="mb-8">
          Yes. A Hindu South Indian wedding is performed by the family&apos;s
          own priest (vadhyar, purohit or pujari) around a mandap and a small
          homam fire, so it does not need a temple or a hall. What it does
          need is time and space before sunrise: the mandap has to be built,
          the kolam drawn, banana stems tied at the entrance and the kitchen
          running while it is still dark. A farmhouse you book overnight gives
          you all of that in one place, plus rooms where the bride and groom
          can dress and both families can rest between rituals.
        </p>

        <p className="mb-8">
          Some families still do the thali or mangalsutra tying at a temple
          and move to a farmhouse for lunch or the reception. Both work; the
          rest of this guide assumes the full wedding happens at the
          farmhouse. Customs differ between communities and even between
          families, so treat the outlines below as a starting point and check
          the details with your elders and priest.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Which format suits your family?
        </h3>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Format</th>
                <th className={th}>How it runs</th>
                <th className={th}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Muhurtham + lunch</td>
                <td className={td}>
                  Rituals from early morning, thali/mangalsutra at the
                  muhurtham, banana-leaf lunch, guests leave by mid-afternoon
                </td>
                <td className={td}>50–150 guests, tighter budgets</td>
              </tr>
              <tr>
                <td className={td}>Reception the evening before + muhurtham</td>
                <td className={td}>
                  Evening reception and dinner on the lawn, family stays
                  overnight, muhurtham and lunch next morning
                </td>
                <td className={td}>
                  150–350 guests; common in Tamil weddings
                </td>
              </tr>
              <tr>
                <td className={td}>Muhurtham + weekend reception</td>
                <td className={td}>
                  Small weekday muhurtham for close family, larger reception
                  on the next Saturday or Sunday
                </td>
                <td className={td}>
                  Weekday muhurtham dates and working guests
                </td>
              </tr>
              <tr>
                <td className={td}>North–South wedding</td>
                <td className={td}>
                  Morning South Indian ceremony, evening sangeet or baraat
                  and pheras for the other side
                </td>
                <td className={td}>
                  Mixed families; needs a full-day or two-day booking
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Tamil Wedding Muhurtham Dates for 2026–27?
        </h2>

        <p className="mb-8">
          For December 2026,{" "}
          <a
            href="https://www.weddingwire.in/wedding-tips/tamil-wedding-dates--c11432"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingWire&apos;s Tamil wedding dates list
          </a>{" "}
          and{" "}
          <a
            href="https://tamil.oneindia.com/tamil-muhurtham-dates.html"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            OneIndia Tamil
          </a>{" "}
          give the same five dates. For 2027 we used{" "}
          <a
            href="https://www.theweddingcompany.com/wedding/auspicious-tamil-wedding-dates-in-2027"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            The Wedding Company&apos;s 2027 Tamil muhurtham list
          </a>{" "}
          (updated November 2026), cross-checked against{" "}
          <a
            href="https://www.dailycalendartamil.com/muhurtham-dates-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Daily Calendar Tamil
          </a>
          . Panchangams can differ, so your family priest has the final word
          on the date and time.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Month</th>
                <th className={th}>Listed dates (weekday)</th>
                <th className={th}>Planning note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>December 2026</td>
                <td className={td}>
                  4 (Fri), 6 (Sun), 10 (Thu), 13 (Sun), 14 (Mon)
                </td>
                <td className={td}>
                  Only two Sundays; venues for 6 and 13 Dec go first
                </td>
              </tr>
              <tr>
                <td className={td}>16 Dec–14 Jan</td>
                <td className={td}>None (Margazhi)</td>
                <td className={td}>
                  Use the gap to shop, plan and confirm vendors
                </td>
              </tr>
              <tr>
                <td className={td}>January 2027</td>
                <td className={td}>20 (Wed), 28 (Thu)</td>
                <td className={td}>
                  Weekday muhurthams; consider a weekend reception
                </td>
              </tr>
              <tr>
                <td className={td}>February 2027</td>
                <td className={td}>
                  8 (Mon), 10 (Wed), 11 (Thu), 18 (Thu), 25 (Thu), 26 (Fri);
                  some panchangams add 1 (Mon) and 5 (Fri)
                </td>
                <td className={td}>
                  The busiest month; Friday 26 Feb suits a weekend-led plan
                </td>
              </tr>
              <tr>
                <td className={td}>March 2027</td>
                <td className={td}>
                  4, 10, 11, 17, 18, 24, 25 (all Wed or Thu)
                </td>
                <td className={td}>
                  Warmer mornings; book by January
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Why are there no weddings in Margazhi?
        </h3>

        <p className="mb-8">
          Margazhi is kept for prayer, temple visits, music and early-morning
          worship, so most families avoid weddings and housewarmings in it.{" "}
          <a
            href="https://hindutone.com/festivals/margazhi-2026-tamil-month-festivals/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Hindutone&apos;s Margazhi 2026 guide
          </a>{" "}
          dates it from 16 December 2026 to 14 January 2027, with Thai and
          Pongal starting on 15 January 2027 (some lists say Margazhi starts on
          17 December). The practical effect for Delhi NCR families is simple:
          if you want a winter wedding with the coldest weeks avoided, it is
          either the first half of December or late January onwards.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What about Telugu, Kannada and Malayali dates?
        </h3>

        <p className="mb-8">
          Telugu, Kannada and Malayali families follow their own panchangams
          and month rules, so the Tamil list above is not a substitute. Ask
          your priest for the date and the exact lagnam or muhurtham window
          first, then book the farmhouse around it. A late-night Telugu lagnam
          changes the plan a lot: you need an overnight booking and a quiet,
          unamplified ceremony after 10 PM (see the rules section below).
        </p>

        {/* =====================================================
            MORNING TIMING
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Run a Morning Muhurtham at a Delhi Farmhouse in Winter?
        </h2>

        <p className="mb-8">
          Plan for the dark and the cold. Drik Panchang puts New Delhi sunrise
          at about{" "}
          <a
            href="https://www.drikpanchang.com/panchang/sunrise/panchang-sunrise.html?date=08%2F12%2F2026"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            7:01 AM on 8 December 2026
          </a>{" "}
          and{" "}
          <a
            href="https://www.drikpanchang.com/panchang/sunrise/panchang-sunrise.html?date=31%2F12%2F2026"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            7:14 AM on 31 December
          </a>
          , so a 6:30 or 7:30 AM muhurtham means early rituals happen before
          daylight. Delhi mornings in January can be very cold too: the{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-experiences-coldest-january-morning-since-2023/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Tribune reported a 3.2°C minimum in January 2026
          </a>
          . A farmhouse helps because the family sleeps on site instead of
          driving across NCR at 4 AM.
        </p>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>
            <strong>Book from the previous afternoon.</strong> Mandap, kolam,
            banana stems, flowers and lighting go up the evening before.
          </li>
          <li>
            <strong>Cover the mandap.</strong> A canopy or tent keeps dew and
            fog off the priest, the homam and the silk sarees.
          </li>
          <li>
            <strong>Heaters and warm seating.</strong> Patio heaters near (not
            beside) the mandap, and shawls or blankets for elders. See our{" "}
            <Link
              href="/blogs/winter-wedding-farmhouse-delhi-ncr"
              className={linkClass}
            >
              winter wedding at a farmhouse guide
            </Link>{" "}
            for heater counts.
          </li>
          <li>
            <strong>Hot drinks from 6 AM.</strong> Filter coffee and tea
            counters for guests arriving in the cold.
          </li>
          <li>
            <strong>Fog plan.</strong> Ask outstation guests to arrive the day
            before; winter fog regularly delays early flights and trains.
          </li>
          <li>
            <strong>Lighting.</strong> Warm lights on the path, parking and
            mandap until the sun is up, plus a backup power source.
          </li>
        </ul>

        <p className="mb-8">
          A morning wedding has real advantages too. It ends long before the
          10 PM loudspeaker limit, lunch is usually cheaper than a dinner
          spread, and photos get soft winter light. For more on daytime
          formats, read our{" "}
          <Link
            href="/blogs/day-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            day wedding at a farmhouse guide
          </Link>
          .
        </p>

        {/* =====================================================
            WHAT THE FARMHOUSE NEEDS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should a Farmhouse Have for a South Indian Wedding?
        </h2>

        <p className="mb-8">
          Most farmhouses are set up for evening parties, so check these
          points on the site visit:
        </p>

        <ol className="list-decimal pl-8 mb-8 space-y-3">
          <li>
            <strong>Overnight access</strong> from the previous afternoon, in
            writing, with a clear check-out time after lunch.
          </li>
          <li>
            <strong>Permission for a homam fire</strong> on a raised or
            protected base, away from drapes, with an extinguisher nearby.
          </li>
          <li>
            <strong>Room for a sit-down meal.</strong> A banana-leaf lunch
            served in rows needs long tables and more floor area than a
            buffet; plan seating in batches if the lawn is small.
          </li>
          <li>
            <strong>Kitchen or cooking area</strong> for a caterer who cooks
            on site, with water, drainage and gas safety.
          </li>
          <li>
            <strong>Rooms for both families,</strong> including a
            bride&apos;s room for saree changes (many brides change into a
            second saree mid-ceremony).
          </li>
          <li>
            <strong>Space for the oonjal (swing)</strong> and a short walk
            for the kasi yatra if your family does it.
          </li>
          <li>
            <strong>Morning-friendly sound</strong> for the nadaswaram and
            the priest&apos;s mic, set at a sensible volume for neighbours.
          </li>
          <li>
            <strong>Parking and drop-off</strong> close to the mandap for
            elders arriving early.
          </li>
        </ol>

        <p className="mb-8">
          Farmhouses in Chattarpur, on Sohna Road and in Noida are usually the
          easiest for families living in south Delhi, Gurgaon and East
          Delhi/Noida respectively. Before you pay a deposit, run through our{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className={linkClass}
          >
            farmhouse rules to check before booking
          </Link>
          .
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a South Indian Wedding at a Farmhouse Cost?
        </h2>

        <p className="mb-8">
          The figures below are our estimates for Delhi NCR in the 2026–27
          season, not quotes. Prices swing with the date (a Sunday muhurtham
          in December costs more than a Wednesday in March), the area and the
          caterer.
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
                <td className={td}>Farmhouse, overnight (eve + morning)</td>
                <td className={td}>₹1.5–6 lakh</td>
              </tr>
              <tr>
                <td className={td}>South Indian veg catering, banana-leaf lunch</td>
                <td className={td}>₹900–₹2,000 per plate</td>
              </tr>
              <tr>
                <td className={td}>Reception dinner (evening before)</td>
                <td className={td}>₹1,200–₹2,800 per plate</td>
              </tr>
              <tr>
                <td className={td}>Mandap, flowers, kolam, banana stems</td>
                <td className={td}>₹1–5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Priest(s) and puja samagri</td>
                <td className={td}>₹25,000–₹1 lakh</td>
              </tr>
              <tr>
                <td className={td}>Nadaswaram and thavil team</td>
                <td className={td}>₹25,000–₹1 lakh plus travel</td>
              </tr>
              <tr>
                <td className={td}>Heaters, canopy, lighting, power backup</td>
                <td className={td}>₹50,000–₹2 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photo and video</td>
                <td className={td}>₹1–4 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample budgets by guest count (estimates)
        </h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Guests</th>
                <th className={th}>Format</th>
                <th className={th}>Rough total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>100</td>
                <td className={td}>Muhurtham + lunch</td>
                <td className={td}>₹4–9 lakh</td>
              </tr>
              <tr>
                <td className={td}>200</td>
                <td className={td}>Reception the evening before + muhurtham + lunch</td>
                <td className={td}>₹9–20 lakh</td>
              </tr>
              <tr>
                <td className={td}>350</td>
                <td className={td}>Reception + muhurtham + lunch, larger décor</td>
                <td className={td}>₹16–35 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          For a full line-by-line breakdown of farmhouse wedding spending, see{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className={linkClass}
          >
            farmhouse wedding cost in Delhi NCR
          </Link>
          .
        </p>

        {/* =====================================================
            MENU AND VENDORS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Food and Vendors Does a South Indian Wedding Need in Delhi?
        </h2>

        <p className="mb-8">
          The meal is often what guests remember most, and it is the hardest
          part to get right in Delhi. Ask for a caterer who regularly cooks
          your community&apos;s wedding meal, not a general caterer with a
          &quot;South Indian counter&quot;. A typical morning flow looks like
          this:
        </p>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>
            <strong>Early morning:</strong> filter coffee, tea and a light
            tiffin (idli, pongal, vada) for family and early guests.
          </li>
          <li>
            <strong>Wedding lunch:</strong> a banana-leaf meal with rice,
            sambar, rasam, poriyal or palya, kootu, appalam, payasam and
            curd rice; Telugu and Kannada menus add their own specials.
          </li>
          <li>
            <strong>For North Indian guests:</strong> a small parallel buffet
            or a few familiar dishes is a kind touch at mixed weddings.
          </li>
        </ul>

        <p className="mb-8">
          Book the priest, the caterer and the nadaswaram team as soon as the
          date is fixed. With only five December dates and two in January,
          the experienced South Indian vendors in Delhi NCR get booked out
          early. Local South Indian temples and community associations are
          usually the best place to ask for recommendations.
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Rules Apply to a South Indian Farmhouse Wedding?
        </h2>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>
            <strong>10 PM loudspeaker limit.</strong> Delhi Police require
            prior permission for loudspeakers and enforce the 10 PM cut-off (
            <a
              href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              India TV, April 2025
            </a>
            ). This matters for the reception the night before and for any
            late-night Telugu lagnam.
          </li>
          <li>
            <strong>No firecrackers.</strong> The Supreme Court restored the
            firecracker ban in Delhi-NCR from 9 November 2026 (
            <a
              href="https://www.scconline.com/blog/post/2026/11/04/supreme-court-green-crackers-delhi-ncr-diwali-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              SCC Online
            </a>
            ).
          </li>
          <li>
            <strong>Liquor licence for a reception bar.</strong> A Delhi
            farmhouse needs a P-10 licence for each event (
            <a
              href="https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/special_camp_p-10.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Delhi Excise notice
            </a>
            ); Haryana and UP have their own permits.
          </li>
          <li>
            <strong>GRAP curbs.</strong> On bad-air days, diesel generators
            and open coal or wood fires can be restricted. The homam is small,
            but confirm the farmhouse&apos;s power backup is allowed under the
            current stage. Our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className={linkClass}
            >
              GRAP rules guide
            </Link>{" "}
            explains each stage.
          </li>
          <li>
            <strong>Register the marriage</strong> afterwards under the Hindu
            Marriage Act with your local SDM office; keep photos and the
            priest&apos;s details handy.
          </li>
        </ul>

        {/* =====================================================
            SAMPLE PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Plan: Reception Evening + Morning Muhurtham
        </h2>

        <p className="mb-8">
          Here is how a two-part farmhouse wedding with a 7:30–9:00 AM
          muhurtham might run. Adjust the rituals and timings to your
          family&apos;s customs and the priest&apos;s window.
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
                <td className={td}>Day 1, 2 PM</td>
                <td className={td}>Check-in; décor and mandap set-up begin</td>
              </tr>
              <tr>
                <td className={td}>Day 1, 5–6 PM</td>
                <td className={td}>
                  Evening rituals your family keeps (for example, a
                  nichayathartham or welcome for the groom&apos;s side)
                </td>
              </tr>
              <tr>
                <td className={td}>Day 1, 7–10 PM</td>
                <td className={td}>
                  Reception and dinner on the lawn; music off by 10 PM
                </td>
              </tr>
              <tr>
                <td className={td}>Day 2, 5 AM</td>
                <td className={td}>
                  Family wakes; coffee; bride and groom get ready; priest sets
                  up the homam
                </td>
              </tr>
              <tr>
                <td className={td}>Day 2, 6–7:30 AM</td>
                <td className={td}>
                  Pre-muhurtham rituals (such as kasi yatra and oonjal) with
                  nadaswaram; guests arrive
                </td>
              </tr>
              <tr>
                <td className={td}>Day 2, 7:30–9 AM</td>
                <td className={td}>
                  Muhurtham: kanyadanam, thali/mangalsutra tying, saptapadi
                </td>
              </tr>
              <tr>
                <td className={td}>Day 2, 11:30 AM–2 PM</td>
                <td className={td}>Banana-leaf lunch in batches</td>
              </tr>
              <tr>
                <td className={td}>Day 2, 3 PM</td>
                <td className={td}>Check-out; vendors pack up</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          weddings, functions and private parties, and can plan the timing,
          décor and vendors around a morning muhurtham.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          South Indian Farmhouse Wedding Checklist
        </h2>

        <ol className="list-decimal pl-8 mb-8 space-y-3">
          <li>
            <strong>8–12 weeks before:</strong> fix the date and muhurtham
            window with your priest; decide on a format and guest count.
          </li>
          <li>
            <strong>8–10 weeks before:</strong> shortlist farmhouses that
            allow overnight access and a homam fire; site-visit early in the
            morning to see light and cold.
          </li>
          <li>
            <strong>6–8 weeks before:</strong> book the priest, caterer,
            nadaswaram team and decorator; get a written menu.
          </li>
          <li>
            <strong>4–6 weeks before:</strong> book rooms or nearby stays for
            outstation relatives; arrange the reception bar licence if any.
          </li>
          <li>
            <strong>2–3 weeks before:</strong> confirm heaters, canopy,
            lighting, power backup and parking; share the timeline with every
            vendor.
          </li>
          <li>
            <strong>1 week before:</strong> check the GRAP stage and fog
            forecast; order flowers, puja items and return gifts.
          </li>
          <li>
            <strong>After the wedding:</strong> settle the farmhouse deposit
            and register the marriage.
          </li>
        </ol>

        <p className="mb-8">
          If the wedding is followed by a bigger reception for colleagues and
          friends, our{" "}
          <Link
            href="/blogs/wedding-reception-farmhouse-delhi-ncr"
            className={linkClass}
          >
            wedding reception at a farmhouse guide
          </Link>{" "}
          covers timing, formats and cost.
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
            Find a Farmhouse for Your Muhurtham
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your muhurtham date, timing and guest count. Effortless
            Events can shortlist farmhouses across Delhi NCR that allow an
            overnight set-up and a homam, and help with the menu, décor and
            logistics.
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
