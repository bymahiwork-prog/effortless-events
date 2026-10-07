import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Intimate Farmhouse Wedding in Delhi NCR: 2026 Planning Guide",

  description:
    "Planning a small farmhouse wedding in Delhi NCR? 2026 muhurat dates, guest-count tiers, budget estimates, rules to confirm and a 10-week booking checklist.",

  keywords: [
    "intimate farmhouse wedding Delhi NCR",
    "small wedding at farmhouse Delhi",
    "farmhouse wedding for 50 to 100 guests",
    "intimate wedding cost Delhi NCR",
    "small wedding venue Gurgaon farmhouse",
    "court marriage and farmhouse reception Delhi",
    "wedding dates November December 2026",
  ],

  alternates: { canonical: "/blogs/intimate-farmhouse-wedding-delhi-ncr" },

  openGraph: {
    title: "Intimate Farmhouse Wedding in Delhi NCR: 2026 Planning Guide",

    description:
      "Muhurat dates, guest-count tiers, budget estimates, venue rules and a 10-week checklist for a small farmhouse wedding in Delhi NCR.",

    images: ["/event-gallery-2.jpeg"],
  },
};

const faqs = [
  {
    q: "How much does a small farmhouse wedding cost in Delhi NCR?",
    a: "As a rough planning estimate, an intimate farmhouse wedding for 50–100 guests in Delhi NCR often lands somewhere around ₹4 lakh to ₹13 lakh for the main day, covering venue, catering, décor, music, photography and coordination. Peak muhurat dates, alcohol, an overnight stay and premium décor push it higher, so compare written quotes.",
  },
  {
    q: "How many guests count as an intimate wedding?",
    a: "There is no fixed rule, but in Delhi NCR an intimate wedding usually means roughly 30 to 150 guests — close family and friends rather than the 300–800 guests common at large Indian weddings. Most private farmhouses are comfortable in the 50–150 range.",
  },
  {
    q: "What are the auspicious wedding dates in November and December 2026?",
    a: "Widely published muhurat calendars list 21, 24, 25 and 26 November and 1–4 and 11–13 December 2026, after Dev Uthani Ekadashi on 20 November reopens the wedding season. Muhurats vary by panchang and community, so confirm your date with your family priest before booking.",
  },
  {
    q: "Can we have a court marriage and then a reception at a farmhouse?",
    a: "Yes, and many couples do. Under the Special Marriage Act, a notice of intended marriage is issued and objections can be filed within 30 days, so start the registration process at least five to six weeks before the farmhouse celebration. Couples marrying under the Hindu Marriage Act register after the ceremony instead.",
  },
  {
    q: "Until what time can music play at a farmhouse wedding in Delhi?",
    a: "Plan for amplified music outdoors to end by 10 PM. Delhi Police requires prior permission for loudspeakers, including at weddings, and night-time noise limits apply from 10 PM to 6 AM, so keep the baraat and DJ set early and move later celebrations indoors at low volume.",
  },
  {
    q: "How far in advance should we book a farmhouse for a wedding?",
    a: "For November–December muhurat dates, book eight to twelve weeks ahead at minimum; weekend muhurats at popular farmhouses can go months earlier. Weekday muhurats, January–February dates and day-only bookings are easier to secure at shorter notice.",
  },
  {
    q: "Is a farmhouse cheaper than a banquet hall for a small wedding?",
    a: "Not always. A banquet hall bundles venue, food and basic décor into a per-plate price, while a farmhouse is usually rented as a whole and you add caterers, décor and power backup separately. For under about 80 guests a banquet can be cheaper; a farmhouse wins on privacy, open-air space and control over every detail.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="intimate-farmhouse-wedding-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-06"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/event-gallery-2.jpeg"
          alt="Intimate farmhouse wedding in Delhi NCR with a floral mandap on an open lawn"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Intimate Farmhouse Wedding in Delhi NCR: The Complete 2026
          Planning Guide
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Weddings • Last updated: October 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          An intimate farmhouse wedding in Delhi NCR gives you something a
          600-guest banquet never can: a whole property, a lawn under the
          winter sky, and time to actually talk to the people you invited.
          This guide is for couples and families planning a small wedding of
          roughly 30 to 150 guests this season — when to book, what it
          realistically costs, which rules catch people out, and how to plan
          it week by week.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            To plan an intimate farmhouse wedding in Delhi NCR, fix a guest
            list of about 30–150 people, pick a muhurat (the 2026 season opens
            after 20 November), and book the farmhouse eight to twelve weeks
            ahead. Budget roughly ₹4–13 lakh for the main day as an estimate,
            and get music cut-off, alcohol, power backup and vendor rules in
            writing.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Intimate Farmhouse Wedding at a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Decision
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What works for most small Delhi NCR weddings
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Guest count</td>
                <td className="border border-gray-300 p-4">
                  30–150 guests; 60–100 is the comfortable middle for most
                  private farmhouses
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Popular 2026 dates
                </td>
                <td className="border border-gray-300 p-4">
                  21, 24–26 Nov and 1–4, 11–13 Dec (confirm with your
                  panchang)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">When to book</td>
                <td className="border border-gray-300 p-4">
                  8–12 weeks ahead; earlier for weekend muhurats
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Budget (estimate)
                </td>
                <td className="border border-gray-300 p-4">
                  Around ₹4–13 lakh for the main day, before alcohol, outfits,
                  jewellery and GST
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Popular areas</td>
                <td className="border border-gray-300 p-4">
                  Chattarpur and Mehrauli, Sohna Road, Noida and Greater
                  Noida, Faridabad
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Must confirm in writing
                </td>
                <td className="border border-gray-300 p-4">
                  Music cut-off, alcohol licence, fire for pheras, power
                  backup, outside vendors, stay rooms, cancellation terms
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            WHY A FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Choose a Farmhouse for a Small Wedding in Delhi NCR?
        </h2>

        <p className="mb-8">
          A farmhouse gives a small wedding exclusive use of the whole venue,
          so the pheras, dinner and dance floor all happen in one private
          space with no other wedding next door. That matters more for 80
          guests than for 800: in a large banquet complex, a small wedding
          can feel lost, while on a farmhouse lawn the same group fills the
          space and the day feels personal.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Privacy:</strong> one event on the property, your own
            entry and parking, no shared corridors.
          </li>
          <li>
            <strong>Several functions, one venue:</strong>{" "}
            <Link
              href="/blogs/haldi-mehendi-farmhouse-delhi-ncr"
              className="text-black underline font-semibold"
            >
              haldi and mehendi at the farmhouse
            </Link>{" "}
            in the morning, pheras at the muhurat and dinner on the lawn
            without moving guests.
          </li>
          <li>
            <strong>Control:</strong> many farmhouses let you choose your own
            caterer, décorator and photographer instead of fixed packages.
          </li>
          <li>
            <strong>Winter weather:</strong> late November to February is
            the most comfortable time for open-air ceremonies in Delhi NCR.
          </li>
          <li>
            <strong>Stay options:</strong> some properties have rooms for the
            couple and close family, so getting ready and the after-party
            happen on site.
          </li>
        </ul>

        <p className="mb-8">
          The trade-offs are real too. You usually manage more vendors, guests
          need cars or arranged transport, and you must plan for cold nights,
          power backup and an early music cut-off. If you are still deciding
          between formats, our comparison of{" "}
          <Link
            href="/blogs/farmhouse-vs-resort-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse vs resort in Delhi NCR
          </Link>{" "}
          walks through the differences.
        </p>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is the Best Time for an Intimate Wedding in 2026?
        </h2>

        <p className="mb-8">
          The 2026 wedding season in North India opens with Dev Uthani
          Ekadashi on 20 November, when the four-month Chaturmas period ends,
          according to a{" "}
          <a
            href="https://happyfares.in/blog/wedding-season-flights-november-2026-muhurat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            2026 wedding-season overview
          </a>
          . Published muhurat lists such as{" "}
          <a
            href="https://theweddingfocus.com/blog/wedding-dates-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            this 2026 calendar
          </a>{" "}
          show no muhurats in August, September or October, followed by a
          tight cluster in late November and early December.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Month</th>
                <th className="border border-gray-300 p-4 text-left">
                  Commonly listed muhurat dates
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What it means for booking
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">November 2026</td>
                <td className="border border-gray-300 p-4">
                  Sat 21, Tue 24, Wed 25, Thu 26
                </td>
                <td className="border border-gray-300 p-4">
                  First dates after the break; Saturday 21 is the most
                  contested
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">December 2026</td>
                <td className="border border-gray-300 p-4">
                  Tue 1 – Fri 4, Fri 11 – Sun 13
                </td>
                <td className="border border-gray-300 p-4">
                  The 11–13 December weekend will be in very high demand
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  January–February 2027
                </td>
                <td className="border border-gray-300 p-4">
                  Dates from 18 January onwards and through February
                </td>
                <td className="border border-gray-300 p-4">
                  More choice and often better rates; colder evenings
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Muhurat dates differ by panchang, region and community. Treat this
          table as a starting point and confirm your date with your family
          priest before paying any advance.
        </p>

        <p className="mb-8">
          A small wedding has one big advantage here: you can choose a
          weekday muhurat. Tuesday 24 November or Wednesday 2 December will
          be far easier to book than Saturday 21 November, and vendors are
          often more flexible on price mid-week.
        </p>

        {/* =====================================================
            GUEST COUNT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Guests Can a Farmhouse Wedding Host?
        </h2>

        <p className="mb-8">
          Most private farmhouses in Delhi NCR are comfortable hosting an
          intimate wedding of about 50 to 150 guests; very small weddings of
          30–50 work beautifully at boutique properties. Your guest number
          decides the property size, layout and how many functions you can
          realistically hold on one day.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Guest tier
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Typical format
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What to look for in the farmhouse
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">30–50 guests</td>
                <td className="border border-gray-300 p-4">
                  Pheras plus a seated family dinner
                </td>
                <td className="border border-gray-300 p-4">
                  Boutique property, rooms for close family, one long dining
                  table setup
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">50–100 guests</td>
                <td className="border border-gray-300 p-4">
                  Haldi or mehendi by day, pheras and dinner by night
                </td>
                <td className="border border-gray-300 p-4">
                  Two separate areas (lawn plus covered or indoor space),
                  parking for 30–40 cars
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">100–150 guests</td>
                <td className="border border-gray-300 p-4">
                  Pheras, buffet dinner, DJ and dance floor
                </td>
                <td className="border border-gray-300 p-4">
                  Large lawn, generator backup, adequate washrooms, valet or
                  marshalled parking
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Always ask the venue for its comfortable capacity rather than its
          maximum. A lawn that technically fits 200 standing guests may only
          seat 100 for dinner once the mandap, stage and food counters are
          in place.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does an Intimate Farmhouse Wedding Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          As a rough estimate, an intimate farmhouse wedding in Delhi NCR for
          about 75 guests often costs around ₹4 lakh to ₹13 lakh for the main
          wedding day. Venue rent on a muhurat date, the catering menu and
          décor make up most of the bill. Here is an illustrative breakdown.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Cost head
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Illustrative estimate (75 guests, one day)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Farmhouse rent (full day, muhurat date)
                </td>
                <td className="border border-gray-300 p-4">
                  ₹1,00,000–₹3,50,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Catering (₹1,500–₹3,000 per head, non-alcoholic)
                </td>
                <td className="border border-gray-300 p-4">
                  ₹1,12,500–₹2,25,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Mandap, florals, lighting and stage décor
                </td>
                <td className="border border-gray-300 p-4">
                  ₹75,000–₹2,50,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Photography and video
                </td>
                <td className="border border-gray-300 p-4">
                  ₹50,000–₹1,50,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  DJ, sound, dhol and lighting rig
                </td>
                <td className="border border-gray-300 p-4">₹25,000–₹75,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Pandit, puja samagri and ceremony items
                </td>
                <td className="border border-gray-300 p-4">₹15,000–₹40,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Heaters, generator and power backup
                </td>
                <td className="border border-gray-300 p-4">₹15,000–₹50,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Planning and on-day coordination
                </td>
                <td className="border border-gray-300 p-4">
                  ₹40,000–₹1,50,000
                </td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="border border-gray-300 p-4">Total</td>
                <td className="border border-gray-300 p-4">
                  About ₹4,32,500–₹12,90,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          These are illustrative planning ranges, not quotes. They exclude
          alcohol, outfits, jewellery, invitations, guest stays and GST, and
          real prices vary widely by property, date and menu. Compare written
          quotes from at least three options.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Where can you save without it showing?
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Choose a weekday muhurat instead of a Saturday</li>
          <li>Hold haldi, pheras and dinner at one venue on one day</li>
          <li>
            Focus décor on the mandap, entrance and photo spot rather than
            the whole lawn
          </li>
          <li>
            Use live counters and a shorter menu instead of a long buffet
          </li>
          <li>Book a property that already has heaters and backup power</li>
        </ul>

        <p className="mb-8">
          For a sense of how smaller farmhouse events are priced, see our
          breakdown of{" "}
          <Link
            href="/blogs/how-much-does-a-farmhouse-party-cost-in-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            farmhouse party costs in Delhi NCR
          </Link>
          .
        </p>

        {/* =====================================================
            LEGAL + RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Rules Should You Check Before Booking a Wedding Farmhouse?
        </h2>

        <p className="mb-8">
          Before paying an advance, confirm music timings, loudspeaker
          permission, alcohol, open fire for the havan, power backup and
          vendor rules in writing. These are the points where small weddings
          most often run into last-minute trouble.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Until what time can music play?
        </h3>

        <p className="mb-8">
          In Delhi, police{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            require prior permission for loudspeakers
          </a>
          , including at wedding functions, and stricter noise limits apply
          between 10 PM and 6 AM, with fines for violations. Ask the
          farmhouse who arranges the permission, schedule the baraat and DJ
          set before 10 PM, and plan any late-night celebration indoors at
          low volume. Gurgaon, Faridabad and Noida follow their own local
          enforcement, so ask the venue what applies there.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Is alcohol allowed?
        </h3>

        <p className="mb-8">
          In Delhi, serving liquor at a venue without a bar licence generally
          needs an{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-excise-dept-relaxes-norms-to-apply-for-p-10-licence-required-to-serve-liquor-at-parties-320091"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            occasional P-10 licence
          </a>{" "}
          from the Excise Department. Haryana rules apply in Gurgaon and
          Faridabad, and Uttar Pradesh rules in Noida and Greater Noida. Agree
          in writing who applies for the licence and who runs the bar.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What else should be in the contract?
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Whether an open havan fire is allowed and where</li>
          <li>Outside caterer and décorator policy, and any vendor fees</li>
          <li>Generator capacity and fuel cost — winter nights run long</li>
          <li>Number of rooms for the couple and family, and check-out time</li>
          <li>Access time for décor set-up the day before or morning of</li>
          <li>Parking capacity and who manages it</li>
          <li>Cancellation, date-change and refund terms</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Planning a court marriage plus a farmhouse celebration?
        </h3>

        <p className="mb-8">
          Many couples pair a registered marriage with a small farmhouse
          ceremony or reception. According to Delhi&apos;s{" "}
          <a
            href="https://revenue.delhi.gov.in/hi/node/7684"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Revenue Department
          </a>
          , a marriage under the Special Marriage Act starts with a notice of
          intended marriage at the SDM office, and objections can be filed
          within 30 days of that notice; a Hindu Marriage Act registration
          happens after the ceremony. If you are going the Special Marriage
          Act route, file the notice at least five to six weeks before your
          farmhouse date. This is general information, not legal advice.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          10-Week Intimate Farmhouse Wedding Checklist
        </h2>

        <p className="mb-8">
          If your muhurat is in late November or early December 2026, your
          planning should start now. This countdown keeps bookings,
          approvals and guest communication on track.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          10–8 weeks before
        </h3>

        <ul className="space-y-3 mb-8">
          <li>☐ Muhurat confirmed with the family priest</li>
          <li>☐ Guest list capped and total budget agreed</li>
          <li>☐ Three farmhouses visited in daylight and after dark</li>
          <li>☐ Venue booked with rules and terms in writing</li>
          <li>☐ Special Marriage Act notice filed, if applicable</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          7–5 weeks before
        </h3>

        <ul className="space-y-3 mb-8">
          <li>☐ Caterer, décorator, photographer and DJ confirmed</li>
          <li>☐ Pandit booked and ceremony items listed</li>
          <li>☐ Invitations or WhatsApp e-invites sent with location pin</li>
          <li>☐ Alcohol plan and any licence decided</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          4–2 weeks before
        </h3>

        <ul className="space-y-3 mb-8">
          <li>☐ Menu tasting done; dietary needs collected</li>
          <li>☐ Décor mock-up and lighting plan approved</li>
          <li>☐ Guest transport and parking plan shared</li>
          <li>☐ Rooms allocated for the couple and close family</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Final week
        </h3>

        <ul className="space-y-3 mb-12">
          <li>☐ Final headcount sent to caterer and venue</li>
          <li>☐ Run-of-day shared with all vendors and one family contact</li>
          <li>☐ Heaters, generator and indoor fallback checked</li>
          <li>☐ Payment schedule and balance amounts settled</li>
          <li>☐ Late-night cab plan for older guests confirmed</li>
        </ul>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan Your Intimate Farmhouse Wedding With Effortless Events
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
          people book farmhouses, villas and venues for weddings, private
          celebrations, festive parties and corporate events.
        </p>

        <p className="mb-8">
          For a small wedding, that means help shortlisting farmhouses that
          match your guest count, muhurat and budget, and coordinating
          catering, décor, music and on-day logistics around each
          venue&apos;s rules. If you want a planner to handle the whole day,
          our guide on{" "}
          <Link
            href="/blogs/how-to-choose-perfect-wedding-planner-delhi"
            className="text-black underline font-semibold"
          >
            choosing a wedding planner in Delhi
          </Link>{" "}
          explains what to ask before you hire.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          An intimate farmhouse wedding works best when three decisions are
          made early: a firm guest list, a muhurat you can actually book, and
          a farmhouse whose rules you have read before paying. With the 2026
          season opening on 20 November and only a handful of dates before
          mid-December, the couples who shortlist venues in October get the
          widest choice — and the calmest wedding week.
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
            Find Your Wedding Farmhouse Before the Muhurats Fill Up
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your muhurat, guest count, preferred area and budget.
            Effortless Events can help you shortlist farmhouses and plan the
            day around them.
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
              Plan My Wedding
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
