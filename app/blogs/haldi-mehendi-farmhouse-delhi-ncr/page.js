import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Haldi & Mehendi at a Farmhouse in Delhi NCR: 2026 Guide",

  description:
    "Planning a haldi or mehendi at a farmhouse in Delhi NCR? Same-day schedules, guest-count fit, budget estimates, décor ideas and a checklist for 2026 dates.",

  keywords: [
    "haldi and mehendi venue farmhouse Delhi NCR",
    "haldi ceremony at farmhouse Delhi",
    "mehendi function farmhouse Gurgaon",
    "haldi and mehendi on same day",
    "haldi ceremony venue cost Delhi NCR",
    "pre-wedding function venue Delhi NCR",
  ],

  alternates: { canonical: "/blogs/haldi-mehendi-farmhouse-delhi-ncr" },

  openGraph: {
    title: "Haldi & Mehendi at a Farmhouse in Delhi NCR: 2026 Guide",

    description:
      "Same-day schedules, guest-count fit, budget estimates, décor ideas and a booking checklist for haldi and mehendi functions at Delhi NCR farmhouses.",

    images: ["/decoration-2.jpg"],
  },
};

const faqs = [
  {
    q: "Can haldi and mehendi be held on the same day?",
    a: "Yes. Many Delhi NCR families now hold haldi in the late morning and mehendi from the afternoon into the evening at the same farmhouse. Keep a two- to three-hour gap for the bride to bathe, rest and change, and ideally set the two functions up in different parts of the property.",
  },
  {
    q: "Which comes first, haldi or mehendi?",
    a: "Customs differ by family and community, so there is no single rule. In many North Indian weddings mehendi happens a day or two before the wedding and haldi is held on the wedding morning or the day before; when both are on one day, haldi usually goes first so the turmeric is washed off before the mehendi is applied.",
  },
  {
    q: "How many days before the wedding are haldi and mehendi held?",
    a: "Most families hold them one to two days before the wedding, and haldi is sometimes on the wedding morning itself. For a late November or early December 2026 muhurat, that means booking the farmhouse for the day or two before your wedding date as well.",
  },
  {
    q: "How much does a farmhouse for a haldi or mehendi cost in Delhi NCR?",
    a: "As a rough estimate, day-use rent for a private farmhouse for a 50–150 guest haldi or mehendi often falls around ₹40,000 to ₹2,00,000, before food, décor and artists. Rates rise sharply on muhurat weekends, so get written quotes from at least three properties.",
  },
  {
    q: "How long does bridal mehendi take?",
    a: "Detailed bridal mehendi on hands and feet commonly takes around four to six hours, depending on the design and the artist. Start the bride's mehendi early, often in the morning or the day before, and let guests' mehendi run alongside the main function.",
  },
  {
    q: "Is a farmhouse good for a haldi ceremony?",
    a: "A farmhouse suits haldi well because the function is messy, daytime and outdoors: a lawn, open sky, space to play with turmeric and water, and no hotel carpets to protect. Check that the venue allows colours and water play on the lawn and has enough washrooms and changing rooms.",
  },
  {
    q: "What should we confirm with the farmhouse before a haldi or mehendi?",
    a: "Confirm in writing whether turmeric, flower petals, water play and colours are allowed and what cleaning charges apply, the music cut-off time, outside caterer and décorator rules, changing rooms, power backup and parking. Also check whether a deposit is deducted for stains on furniture.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="haldi-mehendi-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-07"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-2.jpg"
          alt="Haldi and mehendi farmhouse venue in Delhi NCR with a floral arch and petal-covered seating"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Haldi &amp; Mehendi at a Farmhouse in Delhi NCR: The 2026 Planning
          Guide
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
          A haldi and mehendi venue at a farmhouse in Delhi NCR gives the
          pre-wedding functions what a banquet hall cannot: sunlight, an open
          lawn, room to get messy with turmeric and petals, and a private
          space where family can relax before the big day. This guide is for
          families and couples planning haldi, mehendi or both for a late
          November, December or early 2027 wedding — how to schedule them,
          how many guests a farmhouse suits, what it may cost and what to
          confirm before you pay an advance.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a haldi or mehendi at a farmhouse in Delhi NCR, book day-use
            of a private property for one to two days before the wedding,
            ideally six to ten weeks ahead for 2026 muhurat dates. Most
            farmhouses suit 50–150 guests. Hold haldi in the late morning and
            mehendi from the afternoon, and get rules on turmeric, water
            play, music and cleaning charges in writing.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Haldi and Mehendi at a Farmhouse: At a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Decision
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What works for most Delhi NCR families
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">When to hold it</td>
                <td className="border border-gray-300 p-4">
                  1–2 days before the wedding; haldi sometimes on the wedding
                  morning
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Best time of day</td>
                <td className="border border-gray-300 p-4">
                  Haldi 10 AM–1 PM in winter sun; mehendi 3 PM onwards into
                  the evening
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Guest count</td>
                <td className="border border-gray-300 p-4">
                  Usually 40–150; smaller than the wedding itself
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">When to book</td>
                <td className="border border-gray-300 p-4">
                  6–10 weeks ahead for November–December 2026 dates
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Budget (estimate)
                </td>
                <td className="border border-gray-300 p-4">
                  Around ₹2–7 lakh for both functions on one day for about 80
                  guests, before outfits and GST
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
                  Turmeric, colours and water play on the lawn, cleaning
                  charges, music cut-off, changing rooms, outside vendors
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            WHY A FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Is a Farmhouse a Good Venue for Haldi and Mehendi?
        </h2>

        <p className="mb-8">
          A farmhouse works for haldi and mehendi because both are daytime,
          informal, family-first functions that need open space more than
          formal halls. Haldi involves turmeric paste, flower petals and
          often water, which many hotels and banquets restrict indoors.
          Mehendi needs long, comfortable seating, good daylight for the
          artists and space for music and dancing.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Natural light:</strong> winter sun on a lawn is ideal for
            haldi photos and for mehendi artists working on detailed designs.
          </li>
          <li>
            <strong>Room to get messy:</strong> turmeric, petal showers and
            water play are easier to manage on grass than on carpet.
          </li>
          <li>
            <strong>Two zones on one property:</strong> a lawn for haldi and
            a covered or shaded area for mehendi lets you run both on the
            same day without a full re-set.
          </li>
          <li>
            <strong>Privacy:</strong> one booking on the property, so the
            family can be informal, dance and relax.
          </li>
          <li>
            <strong>Changing rooms:</strong> many farmhouses have rooms or a
            villa where the bride, groom and close family can bathe and
            change between functions.
          </li>
        </ul>

        <p className="mb-8">
          The trade-offs are distance from the city, the need for your own
          caterer and décorator at many properties, and cold evenings from
          December onwards. If the wedding itself is small, you can even hold
          everything at one property — our guide to an{" "}
          <Link
            href="/blogs/intimate-farmhouse-wedding-delhi-ncr"
            className="text-black underline font-semibold"
          >
            intimate farmhouse wedding in Delhi NCR
          </Link>{" "}
          covers that format.
        </p>

        {/* =====================================================
            SAME DAY SCHEDULE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can You Hold Haldi and Mehendi on the Same Day?
        </h2>

        <p className="mb-8">
          Yes — holding haldi and mehendi on the same day at one farmhouse is
          now common in Delhi NCR because it saves a second venue booking,
          one round of décor and one extra day of guest travel. The key is a
          clear gap between the two so the turmeric is washed off before
          mehendi is applied, and two separate set-ups on the property.
        </p>

        <p className="mb-8">
          Here is a sample schedule for a winter date. Adjust it to your
          family&apos;s customs and your priest&apos;s timings.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Time</th>
                <th className="border border-gray-300 p-4 text-left">
                  What happens
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">8:00–10:00 AM</td>
                <td className="border border-gray-300 p-4">
                  Décor set-up on the haldi lawn; bridal mehendi can start
                  indoors if the artist needs a long session
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">10:30 AM–1:00 PM</td>
                <td className="border border-gray-300 p-4">
                  Haldi ceremony, petal shower, light brunch and music
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">1:00–3:30 PM</td>
                <td className="border border-gray-300 p-4">
                  Bath, rest and change; lawn cleaned; lunch for family
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">3:30–8:00 PM</td>
                <td className="border border-gray-300 p-4">
                  Mehendi for bride and guests, dhol or DJ, chaat and live
                  counters
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">8:00–10:00 PM</td>
                <td className="border border-gray-300 p-4">
                  Dinner, dancing or a short sangeet; amplified music wraps up
                  by 10 PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          This is an illustrative schedule, not a rule. Bridal mehendi often
          takes four to six hours, so many brides start it the day before or
          early in the morning. If the evening becomes a full sangeet, see our{" "}
          <Link
            href="/blogs/sangeet-night-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            sangeet night at a farmhouse guide
          </Link>{" "}
          for stage, sound and music cut-off planning.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Which comes first, haldi or mehendi?
        </h3>

        <p className="mb-8">
          Customs vary by family and community, so follow what your elders
          and priest advise. When both fall on one day, haldi usually goes
          first: turmeric paste can stain fresh mehendi and the bride needs to
          bathe after haldi, which would smudge a design applied earlier.
        </p>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Book a Farmhouse for Haldi and Mehendi in 2026?
        </h2>

        <p className="mb-8">
          Book six to ten weeks before your wedding, because the farmhouse is
          needed on the day or two before a muhurat — exactly when other
          families want it too. Published 2026 muhurat lists such as{" "}
          <a
            href="https://theweddingfocus.com/blog/wedding-dates-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            this wedding-dates calendar
          </a>{" "}
          show a short burst of dates in late November and early December,
          followed by many more in January and February 2027.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Wedding (muhurat) dates
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Likely haldi / mehendi dates
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Booking pressure
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Sat 21 Nov 2026
                </td>
                <td className="border border-gray-300 p-4">Thu 19 – Fri 20 Nov</td>
                <td className="border border-gray-300 p-4">
                  High — first muhurat of the season
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Tue 24 – Thu 26 Nov 2026
                </td>
                <td className="border border-gray-300 p-4">Sun 22 – Wed 25 Nov</td>
                <td className="border border-gray-300 p-4">
                  Moderate; Sunday 22 is popular for functions
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Tue 1 – Fri 4 Dec 2026
                </td>
                <td className="border border-gray-300 p-4">Sun 29 Nov – Thu 3 Dec</td>
                <td className="border border-gray-300 p-4">
                  Moderate to high
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Fri 11 – Sun 13 Dec 2026
                </td>
                <td className="border border-gray-300 p-4">Wed 9 – Sat 12 Dec</td>
                <td className="border border-gray-300 p-4">
                  Very high — weekend muhurats
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  January–February 2027
                </td>
                <td className="border border-gray-300 p-4">
                  1–2 days before each date
                </td>
                <td className="border border-gray-300 p-4">
                  More choice; colder mornings, so plan heaters
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Muhurat dates differ by panchang, region and community. Confirm
          your wedding date with your family priest before booking any
          function venue.
        </p>

        {/* =====================================================
            GUEST COUNT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Guests Does a Haldi or Mehendi Farmhouse Need to Fit?
        </h2>

        <p className="mb-8">
          Haldi and mehendi guest lists are usually smaller than the wedding —
          often close family, cousins and friends, around 40 to 150 people.
          Choose the farmhouse for the larger of the two functions, usually
          mehendi, and check seated capacity rather than the maximum standing
          figure.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Guests
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Typical format
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What the farmhouse needs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Up to 50</td>
                <td className="border border-gray-300 p-4">
                  Family-only haldi and mehendi, floor seating, one artist
                  team
                </td>
                <td className="border border-gray-300 p-4">
                  Boutique lawn, 2–3 rooms for changing, 3–4 washrooms
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">50–100</td>
                <td className="border border-gray-300 p-4">
                  Both functions on one day with DJ or dhol and live counters
                </td>
                <td className="border border-gray-300 p-4">
                  Two separate zones (lawn plus covered area), parking for
                  about 25–40 cars
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">100–150</td>
                <td className="border border-gray-300 p-4">
                  Mehendi with sangeet-style dancing and a full dinner
                </td>
                <td className="border border-gray-300 p-4">
                  Large lawn, stage area, generator backup, more washrooms and
                  managed parking
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Plan roughly one mehendi artist for every 10–15 guests who want
          designs, plus a senior artist dedicated to the bride. That is a
          common planning rule of thumb, so ask your artist how many people
          their team can cover in your time window.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Haldi and Mehendi at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          As a rough estimate, holding haldi and mehendi on one day at a
          private farmhouse in Delhi NCR for about 80 guests often costs
          around ₹2 lakh to ₹7 lakh. Farmhouse rent on a pre-muhurat date,
          food and décor make up most of the spend. Here is an illustrative
          breakdown.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Cost head
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Illustrative estimate (80 guests, both functions, one day)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Farmhouse rent (day use)
                </td>
                <td className="border border-gray-300 p-4">
                  ₹40,000–₹2,00,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Food: brunch plus evening snacks and dinner (₹1,000–₹2,000
                  per head)
                </td>
                <td className="border border-gray-300 p-4">
                  ₹80,000–₹1,60,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Haldi and mehendi décor (marigold, drapes, seating, swings,
                  photo spots)
                </td>
                <td className="border border-gray-300 p-4">
                  ₹40,000–₹1,50,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Mehendi artists (bride plus guests)
                </td>
                <td className="border border-gray-300 p-4">
                  ₹15,000–₹60,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Dhol, DJ and sound
                </td>
                <td className="border border-gray-300 p-4">₹15,000–₹50,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Photography and video
                </td>
                <td className="border border-gray-300 p-4">₹25,000–₹80,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Cleaning, heaters and power backup
                </td>
                <td className="border border-gray-300 p-4">₹10,000–₹30,000</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="border border-gray-300 p-4">Total</td>
                <td className="border border-gray-300 p-4">
                  About ₹2,25,000–₹7,30,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          These are illustrative planning ranges, not quotes. They exclude
          outfits, favours, alcohol, guest stays and GST, and real prices vary
          widely by property, date, menu and décor. Compare written quotes
          from at least three options.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          How can you keep the cost down?
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Hold both functions on one day at one farmhouse</li>
          <li>
            Pick a weekday before a weekday muhurat rather than the Saturday
            rush
          </li>
          <li>
            Reuse the haldi backdrop for mehendi by swapping fabric and
            florals instead of building a second stage
          </li>
          <li>Serve chaat and live counters instead of a full buffet at lunch</li>
          <li>
            Book a property that already has rooms, heaters and backup power
          </li>
        </ul>

        <p className="mb-8">
          For how general farmhouse events are priced across Delhi NCR, see
          our breakdown of{" "}
          <Link
            href="/blogs/how-much-does-a-farmhouse-party-cost-in-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            farmhouse party costs in Delhi NCR
          </Link>
          .
        </p>

        {/* =====================================================
            DECOR + FOOD
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Décor and Food Work Best for a Farmhouse Haldi and Mehendi?
        </h2>

        <p className="mb-8">
          Keep haldi décor bright, simple and stain-friendly, and mehendi
          décor comfortable and colourful, because guests will sit for hours
          while artists work. Spend on the two or three places that appear in
          every photo rather than decorating the whole lawn.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Haldi décor ideas
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Marigold and genda-phool backdrop with yellow and white drapes</li>
          <li>Low seating or a decorated chowki for the bride or groom</li>
          <li>Washable or disposable covers on chairs and cushions</li>
          <li>Petal baskets and a dedicated area for a petal or water shower</li>
          <li>Umbrellas or a canopy for shade on bright days</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Mehendi décor ideas
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Floor cushions, bolsters and low tables in pinks, greens and oranges</li>
          <li>A floral swing or jhoola for the bride as the photo spot</li>
          <li>Fairy lights and lanterns for the evening</li>
          <li>Bangle, paan or kulfi counters as small activity stations</li>
          <li>Patio heaters near seating once the sun goes down</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Food that suits both functions
        </h3>

        <p className="mb-8">
          Light brunch for haldi — poori-aloo, chole kulche, fruit and chai —
          and finger food for mehendi, since guests with wet mehendi cannot
          eat easily. Chaat counters, tikkas on skewers and kulfi work well;
          arrange for someone to feed the bride while her mehendi dries.
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Confirm With the Farmhouse Before Booking?
        </h2>

        <p className="mb-8">
          Before paying an advance, confirm in writing what the farmhouse
          allows on the lawn and inside, what cleaning will cost and when
          music must stop. Haldi stains and petal clean-up are where
          pre-wedding bookings most often end in deposit disputes.
        </p>

        <ul className="space-y-3 mb-10">
          <li>☐ Turmeric, petals, colours and water play allowed — and where</li>
          <li>☐ Cleaning charges and any security deposit for stains</li>
          <li>☐ Rooms for changing and bathing between functions</li>
          <li>☐ Number of washrooms for your guest count</li>
          <li>☐ Outside caterer, décorator and mehendi artist policy</li>
          <li>☐ Set-up access time in the morning</li>
          <li>☐ Generator capacity, heaters and evening lighting</li>
          <li>☐ Parking capacity and who manages it</li>
          <li>☐ Music cut-off and loudspeaker permission</li>
          <li>☐ Cancellation and date-change terms</li>
        </ul>

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
          , including at wedding functions, and stricter night-time limits
          apply from 10 PM to 6 AM. Schedule the dhol and DJ for the daytime
          and early evening, ask the farmhouse who arranges permission, and
          check local enforcement in Gurgaon, Faridabad and Noida with the
          venue.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          8-Week Haldi and Mehendi Farmhouse Checklist
        </h2>

        <p className="mb-8">
          If your wedding falls in late November or December 2026, start
          now. This countdown keeps the venue, artists and family plans on
          track.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          8–6 weeks before
        </h3>

        <ul className="space-y-3 mb-8">
          <li>☐ Function dates fixed around the muhurat</li>
          <li>☐ Guest list for each function agreed</li>
          <li>☐ Two or three farmhouses visited in daylight</li>
          <li>☐ Venue booked with lawn, cleaning and music rules in writing</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          5–3 weeks before
        </h3>

        <ul className="space-y-3 mb-8">
          <li>☐ Mehendi artists booked with team size confirmed</li>
          <li>☐ Décorator, caterer, dhol or DJ and photographer confirmed</li>
          <li>☐ Colour theme and dress code shared with family</li>
          <li>☐ Haldi paste, petals and ceremony items listed</li>
          <li>
            ☐ Friends&apos; party fixed away from function dates — see our{" "}
            <Link
              href="/blogs/bachelorette-party-farmhouse-delhi-ncr"
              className="text-black underline font-semibold"
            >
              farmhouse bachelorette party guide
            </Link>
          </li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          2–1 weeks before
        </h3>

        <ul className="space-y-3 mb-8">
          <li>☐ Run-of-day shared with vendors and one family contact</li>
          <li>☐ Final headcount sent to caterer and venue</li>
          <li>☐ Towels, old clothes and slippers arranged for haldi</li>
          <li>☐ Heaters and indoor fallback checked for the evening</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          On the day
        </h3>

        <ul className="space-y-3 mb-12">
          <li>☐ Bridal mehendi started early</li>
          <li>☐ Lawn cleaned between haldi and mehendi</li>
          <li>☐ Someone assigned to feed and look after the bride</li>
          <li>☐ Music wound down before 10 PM</li>
        </ul>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan Your Haldi and Mehendi With Effortless Events
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
          people book farmhouses, villas and venues for weddings, pre-wedding
          functions, private celebrations and corporate events.
        </p>

        <p className="mb-8">
          For haldi and mehendi, that means help shortlisting farmhouses that
          fit your guest count, dates and budget, and coordinating décor,
          food, artists and music around each venue&apos;s rules. If you are
          new to booking a farmhouse, our step-by-step guide on{" "}
          <Link
            href="/blogs/how-to-plan-farmhouse-party-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            how to plan a farmhouse party in Delhi NCR
          </Link>{" "}
          covers the basics that apply to any function.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          Haldi and mehendi are the functions families remember for their
          warmth rather than their scale, and a farmhouse gives them the
          sunlight, space and privacy they need. Fix your dates around the
          muhurat, choose a property with two usable zones and rooms to
          change, and get the lawn and cleaning rules in writing. With the
          2026 season opening in late November, October is the month to book.
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
            Find a Farmhouse for Your Haldi and Mehendi
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your wedding date, guest count, preferred area and budget.
            Effortless Events can help you shortlist farmhouses and plan both
            functions around them.
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
              Plan My Wedding Functions
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
