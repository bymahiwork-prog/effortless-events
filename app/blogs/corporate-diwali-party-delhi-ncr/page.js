import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Corporate Diwali Party in Delhi NCR: Venue & Planning Guide",

  description:
    "Planning a corporate Diwali party in Delhi NCR? Dates, venue options, per-head budget estimates, ideas employees enjoy and a 4-week checklist for 2026.",

  keywords: [
    "corporate Diwali party Delhi NCR",
    "office Diwali party venue Gurgaon",
    "Diwali party for employees",
    "corporate Diwali party ideas",
    "office Diwali party budget per head",
    "corporate Diwali party at farmhouse",
    "Diwali office celebration Noida",
  ],

  alternates: { canonical: "/blogs/corporate-diwali-party-delhi-ncr" },

  openGraph: {
    title: "Corporate Diwali Party in Delhi NCR: Venue & Planning Guide",

    description:
      "Dates, venue options, per-head budget estimates, employee-friendly ideas and a 4-week checklist for an office Diwali party in Delhi NCR.",

    images: ["/corporate.jpg"],
  },
};

const faqs = [
  {
    q: "When should companies hold their Diwali party in 2026?",
    a: "Diwali (Lakshmi Puja) falls on Sunday, 8 November 2026, so most office Diwali parties will be held between Friday 23 October and Friday 6 November. Many teams pick the last working Friday before the festival or a weekday evening so employees can travel home for Diwali.",
  },
  {
    q: "How much does a corporate Diwali party cost per head in Delhi NCR?",
    a: "As a rough planning estimate, an in-office celebration with catering can work out to around ₹600–₹1,500 per person, while an evening at a hotel, banquet or private farmhouse with dinner, décor, music and transport often lands around ₹2,000–₹5,000+ per person. Date, menu, alcohol and transport move the number most, so always compare written quotes.",
  },
  {
    q: "How early should we book a venue for an office Diwali party?",
    a: "Book four to six weeks ahead. The weeks before Diwali overlap with family card parties and the start of Delhi NCR's wedding season, so Friday and Saturday evenings at popular venues, caterers and decorators fill quickly.",
  },
  {
    q: "What are good Diwali party ideas for employees?",
    a: "Ideas that work well include a diya-painting or rangoli competition between teams, an ethnic-wear dress code with awards, a tambola round, a short recognition segment, live food counters and a DJ set that ends before the venue's music cut-off. Keep activities optional and inclusive so every employee feels welcome.",
  },
  {
    q: "Is a farmhouse a good venue for a corporate Diwali party?",
    a: "A private farmhouse suits teams of roughly 30–150 people who want exclusive use of a lawn, flexible décor and an informal evening away from the office. For very large headcounts, strict AV needs or guests travelling by metro, a hotel or banquet in a central location can be easier.",
  },
  {
    q: "Can we serve alcohol at an office Diwali party in Delhi NCR?",
    a: "Only within the rules that apply to the venue. In Delhi, a party at a venue without a bar licence generally needs an occasional P-10 licence from the Excise Department; Gurgaon and Faridabad follow Haryana's rules and Noida follows Uttar Pradesh's. Many companies keep the party dry or limit it to a managed bar with a clear cut-off time.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="corporate-diwali-party-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-06"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/corporate.jpg"
          alt="Corporate Diwali party in Delhi NCR with a staged dinner setup for employees"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Corporate Diwali Party in Delhi NCR: Venue, Budget and Planning
          Guide for 2026
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Corporate Events • Last updated: October 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A corporate Diwali party in Delhi NCR is often the one evening of
          the year when the whole team — sales in Gurgaon, tech in Noida,
          leadership in Delhi — is in the same place. Most guides list fun
          ideas; this one is for the HR lead, office manager or founder who
          actually has to pick a date, book a venue and stay within a
          per-head budget in the busiest few weeks of the year.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Diwali falls on Sunday, 8 November 2026, so hold the office party
            between 23 October and 6 November, ideally on a Friday evening.
            Book the venue four to six weeks ahead, set a per-head budget
            first, choose between an in-office, banquet or private farmhouse
            format, and get music, alcohol and power-backup rules in writing.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Corporate Diwali Party at a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Decision
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What works for most Delhi NCR teams
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Best dates</td>
                <td className="border border-gray-300 p-4">
                  Fri 23 Oct, Fri 30 Oct, Thu 5 Nov or Fri 6 Nov 2026
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">When to book</td>
                <td className="border border-gray-300 p-4">
                  4–6 weeks before; earlier for 50+ guests or Fridays
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Format</td>
                <td className="border border-gray-300 p-4">
                  Evening event, roughly 6:30 PM to 10:30 PM
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Budget (estimate)
                </td>
                <td className="border border-gray-300 p-4">
                  Around ₹600–₹1,500 per head in-office; ₹2,000–₹5,000+ per
                  head at an outside venue
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Pick the venue area by
                </td>
                <td className="border border-gray-300 p-4">
                  Where most employees work and live, plus metro or cab access
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Must confirm in writing
                </td>
                <td className="border border-gray-300 p-4">
                  Headcount, music cut-off, alcohol, power backup, outside
                  vendors, cancellation terms
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Hold a Corporate Diwali Party in 2026?
        </h2>

        <p className="mb-8">
          Hold it in the two weeks before Diwali, on a working day if
          possible.{" "}
          <a
            href="https://en.wikipedia.org/wiki/Diwali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Diwali (Lakshmi Puja)
          </a>{" "}
          falls on Sunday, 8 November 2026, with Dhanteras on Friday, 6
          November. Weekends close to the festival belong to family puja,
          shopping and card parties, so a Saturday office party competes with
          everything else on employees' calendars.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Which dates work best for an office party?
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Friday, 30 October:</strong> the sweet spot for most teams
            — close enough to feel festive, early enough that nobody has left
            for their hometown.
          </li>
          <li>
            <strong>Friday, 23 October:</strong> easier venue availability and
            often better rates; good for larger companies booking late.
          </li>
          <li>
            <strong>Thursday, 5 November:</strong> works for teams whose
            offices close early on Dhanteras. Expect some leave-related
            drop-off.
          </li>
          <li>
            <strong>Lunch or afternoon slots:</strong> useful for teams with
            long commutes or many employees travelling home before the
            festival.
          </li>
        </ul>

        <p className="mb-8">
          Before fixing the date, check the leave calendar. In Delhi NCR,
          many employees travel out of the city for Diwali, and a party after people have left will feel half
          empty.
        </p>

        {/* =====================================================
            VENUE OPTIONS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Best Venue Options for an Office Diwali Party?
        </h2>

        <p className="mb-8">
          There are four common formats for a corporate Diwali party in
          Delhi NCR. The right one depends mainly on headcount, budget per
          head and how far employees are willing to travel after work.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Format</th>
                <th className="border border-gray-300 p-4 text-left">Best for</th>
                <th className="border border-gray-300 p-4 text-left">
                  Indicative cost per head*
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Watch out for
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  In-office celebration
                </td>
                <td className="border border-gray-300 p-4">
                  Small teams, tight budgets, lunch or early-evening events
                </td>
                <td className="border border-gray-300 p-4">₹600–₹1,500</td>
                <td className="border border-gray-300 p-4">
                  Building rules on décor, open flames and music
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Restaurant or lounge buyout
                </td>
                <td className="border border-gray-300 p-4">
                  20–60 people who want a relaxed dinner
                </td>
                <td className="border border-gray-300 p-4">₹1,500–₹3,500</td>
                <td className="border border-gray-300 p-4">
                  Minimum-spend rules and limited décor freedom
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Hotel or banquet hall
                </td>
                <td className="border border-gray-300 p-4">
                  100+ guests, stage, awards and formal AV
                </td>
                <td className="border border-gray-300 p-4">₹2,000–₹4,500+</td>
                <td className="border border-gray-300 p-4">
                  Package lock-ins and taxes added on top
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Private farmhouse
                </td>
                <td className="border border-gray-300 p-4">
                  30–150 people wanting an exclusive, open-air evening
                </td>
                <td className="border border-gray-300 p-4">₹2,000–₹5,000+</td>
                <td className="border border-gray-300 p-4">
                  Transport, music cut-off, cold nights, power backup
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          *Indicative planning ranges for venue, food, décor and music
          combined, before alcohol, gifts and GST. They are not quotes; real
          prices vary widely with date, menu and venue, so compare written
          quotes from at least three options.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Why are more teams choosing farmhouses for Diwali?
        </h3>

        <p className="mb-8">
          A farmhouse gives a company exclusive use of the whole property for
          the evening — no other parties next door, freedom to decorate the
          lawn with diyas and marigolds, and space for a stage, food counters
          and a dance floor in one place. Farmhouses in Chattarpur and along
          the Mehrauli–Gurgaon Road belt, on Sohna Road, and in Noida and Greater Noida
          are usually within an hour of most offices. For a deeper comparison,
          see our guide to{" "}
          <Link
            href="/blogs/farmhouse-vs-resort-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse vs resort in Delhi NCR
          </Link>
          .
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          How do you choose the right area?
        </h3>

        <p className="mb-8">
          Map where your employees work and live before shortlisting. A
          Gurgaon-heavy team will not enjoy a 90-minute drive to Greater Noida
          on a weekday evening. If the team is split across the region, a
          central Delhi venue near a metro line — or a farmhouse with company
          buses from two pick-up points — keeps attendance high.
        </p>

        {/* =====================================================
            BUDGET
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Corporate Diwali Party Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          Set a per-head budget first, then fit the venue to it, not the
          other way round. As a rough estimate, a corporate Diwali party at
          an outside venue in Delhi NCR often works out to around ₹2,000 to
          ₹5,000+ per person, depending on format, menu and whether alcohol
          is served. Here is an illustrative breakdown for 80 employees at a
          private farmhouse on a weekday evening.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Cost head
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Illustrative estimate (80 guests)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Farmhouse venue (evening)</td>
                <td className="border border-gray-300 p-4">₹40,000–₹1,00,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Catering (₹800–₹1,500 per head, non-alcoholic)
                </td>
                <td className="border border-gray-300 p-4">₹64,000–₹1,20,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Festive décor and lighting
                </td>
                <td className="border border-gray-300 p-4">₹20,000–₹60,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  DJ, sound and basic stage
                </td>
                <td className="border border-gray-300 p-4">₹15,000–₹40,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Emcee, games and prizes
                </td>
                <td className="border border-gray-300 p-4">₹10,000–₹30,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Staff transport (buses or cabs)
                </td>
                <td className="border border-gray-300 p-4">₹15,000–₹40,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Contingency (about 10%)
                </td>
                <td className="border border-gray-300 p-4">₹16,000–₹39,000</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="border border-gray-300 p-4">Total</td>
                <td className="border border-gray-300 p-4">
                  ₹1,80,000–₹4,29,000 (about ₹2,250–₹5,350 per head)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          These are illustrative estimates, not quotes, and exclude alcohol,
          Diwali gifts and GST. The biggest savers are a Thursday or Sunday
          date, a menu built around live counters rather than a long
          multi-course dinner, and décor focused on the entrance, stage and
          photo wall instead of the whole property. For how planners price
          their own work on top of this, read{" "}
          <Link
            href="/blogs/how-much-does-event-management-cost-delhi-ncr"
            className="text-black underline font-semibold"
          >
            how much event management costs in Delhi NCR
          </Link>
          .
        </p>

        {/* =====================================================
            IDEAS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Corporate Diwali Party Ideas Do Employees Actually Enjoy?
        </h2>

        <p className="mb-8">
          The ideas that land best are short, optional and involve teams
          mixing with each other. Long speeches and compulsory performances
          are what employees remember for the wrong reasons.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Activities that mix teams
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Inter-team rangoli or diya-painting contest with a 30-minute timer</li>
          <li>Tambola with festive prizes, so non-dancers have something to join</li>
          <li>Ethnic-wear dress code with &quot;best dressed&quot; awards by vote</li>
          <li>A ten-minute recognition segment for the year&apos;s standout work</li>
          <li>Photo wall with marigolds, brass urlis and the company logo</li>
          <li>Short mehendi or caricature artist corner during dinner</li>
          <li>Bonfire or heater lounge for quieter conversations later on</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Food that works for a mixed office crowd
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Live chaat, tikki and golgappa counters as the evening opens</li>
          <li>Clearly labelled vegetarian, Jain and vegan options</li>
          <li>A hot jalebi and mithai counter instead of plated desserts</li>
          <li>Masala chai and coffee for cool late-October evenings</li>
          <li>Festive mocktails, with any bar managed and time-limited</li>
        </ul>

        <p className="mb-8">
          Keep the celebration inclusive. Not every employee celebrates
          Diwali, so frame the evening as a festive get-together and keep any
          puja or aarti moment short and optional. For more formats you can
          adapt — awards nights, themed parties, gala dinners — see our list
          of{" "}
          <Link
            href="/blogs/corporate-event-ideas-delhi-ncr"
            className="text-black underline font-semibold"
          >
            corporate event ideas in Delhi NCR
          </Link>
          . If your team prefers a smaller, informal card party among
          friends, our{" "}
          <Link
            href="/blogs/diwali-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            Diwali farmhouse party guide
          </Link>{" "}
          covers that format.
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Confirm With the Venue Before Signing?
        </h2>

        <p className="mb-8">
          Confirm music timings, alcohol, power backup, headcount limits and
          cancellation terms in writing before paying an advance. Late
          October and November bring rules and risks that ordinary corporate
          events don&apos;t face.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Until what time can music play?
        </h3>

        <p className="mb-8">
          India&apos;s noise rules generally restrict loudspeakers in open
          spaces between 10 PM and 6 AM, and many venues set an earlier
          cut-off. Plan speeches and the DJ set before 10 PM and keep
          anything after that low-volume or indoors.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Is alcohol allowed, and who arranges the licence?
        </h3>

        <p className="mb-8">
          In Delhi, serving liquor at a venue without a bar licence generally
          requires an{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-excise-dept-relaxes-norms-to-apply-for-p-10-licence-required-to-serve-liquor-at-parties-320091"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            occasional P-10 licence
          </a>{" "}
          from the Excise Department. Gurgaon and Faridabad venues follow
          Haryana&apos;s rules and Noida venues follow Uttar Pradesh&apos;s.
          Agree with the venue who applies for any licence, and decide your
          company policy on drink limits and safe rides home in advance.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What about air quality and power backup?
        </h3>

        <p className="mb-8">
          Air quality in Delhi NCR often worsens around Diwali. In 2025, the
          Commission for Air Quality Management{" "}
          <a
            href="https://visionias.in/current-affairs/news-today/2025-10-22/environment/caqm-invokes-stage-ii-of-graded-response-action-plan-grap-in-entire-ncr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            invoked Stage II of the Graded Response Action Plan (GRAP)
          </a>{" "}
          across NCR in October, and GRAP stages can restrict activities such
          as diesel generator use. Ask the venue how it provides power backup
          if restrictions apply, and make sure there is an indoor or covered
          area with heaters you can move into if the evening turns smoky or
          cold.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Are crackers part of the plan?
        </h3>

        <p className="mb-8">
          For most corporate parties, the simple answer is no. Firecracker
          rules in Delhi NCR are set by court and government orders each
          year — for Diwali 2025 the{" "}
          <a
            href="https://ddnews.gov.in/en/sc-permits-sale-and-use-of-green-crackers-in-delhi-ncr-during-diwali/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Supreme Court allowed only certified green crackers
          </a>{" "}
          on specific days and time slots — and many venues ban them
          outright. Put that budget into lighting, which is safer and looks
          better in photos.
        </p>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          4-Week Corporate Diwali Party Planning Checklist
        </h2>

        <p className="mb-8">
          If your party is on Friday, 30 October, you need to start planning
          in the first week of October. Use this countdown to keep the
          approvals, bookings and communication on track.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          4 weeks before
        </h3>

        <ul className="space-y-3 mb-8">
          <li>☐ Budget per head approved by finance</li>
          <li>☐ Date fixed after checking the leave calendar</li>
          <li>☐ Expected headcount and format agreed</li>
          <li>☐ Three venues shortlisted and quotes requested</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          3 weeks before
        </h3>

        <ul className="space-y-3 mb-8">
          <li>☐ Venue booked with timings, music cut-off and terms in writing</li>
          <li>☐ Caterer, décorator, DJ and emcee confirmed</li>
          <li>☐ Save-the-date sent with dress code</li>
          <li>☐ Alcohol policy and any licence decided</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          2 weeks before
        </h3>

        <ul className="space-y-3 mb-8">
          <li>☐ RSVP form closed and final headcount shared with caterer</li>
          <li>☐ Menu tasting done; dietary needs collected</li>
          <li>☐ Transport plan and pick-up points shared</li>
          <li>☐ Activities, prizes and award list finalised</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Final week
        </h3>

        <ul className="space-y-3 mb-12">
          <li>☐ Run-of-show shared with venue, vendors and emcee</li>
          <li>☐ Power backup, heaters and indoor fallback checked</li>
          <li>☐ Point of contact named for the venue on the day</li>
          <li>☐ Late-night cab plan for employees confirmed</li>
          <li>☐ Payment schedule and GST invoices sorted for finance</li>
        </ul>

        <p className="mb-8">
          Most corporate events that go wrong do so because of late
          bookings, unclear headcounts or a missing point of contact. Our
          list of{" "}
          <Link
            href="/blogs/corporate-event-planning-mistakes"
            className="text-black underline font-semibold"
          >
            corporate event planning mistakes
          </Link>{" "}
          covers the common ones.
        </p>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan Your Office Diwali Party With Effortless Events
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
          businesses and individuals book farmhouses, villas and venues for
          corporate events, festive parties, private celebrations and
          weddings.
        </p>

        <p className="mb-8">
          For a corporate Diwali party, that means one team to shortlist
          venues by headcount, budget and office location, and to coordinate
          catering, décor, music and transport around the venue&apos;s rules
          — so HR can focus on the guest list instead of chasing vendors.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          A good office Diwali party comes down to three early decisions: a
          date before people leave town, a per-head budget everyone has
          signed off, and a venue that is easy to reach after work. Make
          those this week, get the venue rules in writing, and the rest —
          lights, food, music and a few friendly contests — falls into place.
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
            Book Your Team&apos;s Diwali Venue Before the Rush
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your preferred date, headcount, office location and budget
            per head. Effortless Events can help you find the venue and plan
            the evening around it.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Plan My Corporate Event
            </Link>

            <Link
              href="/venues"
              className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Venues
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
