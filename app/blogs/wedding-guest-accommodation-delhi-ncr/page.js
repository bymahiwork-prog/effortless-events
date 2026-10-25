import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Wedding Guest Accommodation in Delhi NCR: 2026 Guide",

  description:
    "Hotel rooms, villas or a farmhouse with rooms? Plan wedding guest accommodation in Delhi NCR: room counts, 2026 cost estimates, timeline and checklist.",

  keywords: [
    "wedding guest accommodation Delhi NCR",
    "hotel room block for wedding guests Delhi",
    "villa for wedding guests Gurgaon",
    "farmhouse with rooms for wedding Delhi",
    "how many rooms to book for wedding guests",
    "outstation wedding guests stay Delhi",
  ],

  alternates: { canonical: "/blogs/wedding-guest-accommodation-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Wedding Guest Accommodation in Delhi NCR: 2026 Guide",

    description:
      "Hotel rooms vs villas vs a farmhouse with rooms for out-of-town wedding guests in Delhi NCR — room maths, cost estimates, timeline and checklist.",

    images: ["/farm-33.webp"],
  },
};

const faqs = [
  {
    q: "How many rooms should I book for out-of-town wedding guests?",
    a: "A common rule of thumb is one room for every two travelling guests plus a 10% buffer. Indian families often share, so in Delhi NCR plan roughly one room per two to three guests, then adjust for elderly relatives, couples who need privacy and children.",
  },
  {
    q: "When should we book hotel rooms for a November or December wedding in Delhi?",
    a: "As early as possible — ideally as soon as the muhurat and venue are fixed. For the 2026 season, which reopens on 20 November, book guest rooms in October so you are not competing for the last rooms on peak Saturdays, when rates typically climb.",
  },
  {
    q: "Who pays for wedding guests' accommodation in India?",
    a: "In many North Indian weddings the host family pays for close outstation relatives, and the baraat side's stay is often arranged by the bride's family by custom. Practice varies by family and community, so agree early who covers which guests and for how many nights.",
  },
  {
    q: "Is a villa cheaper than hotel rooms for wedding guests?",
    a: "Often, for groups. A 4–6 bedroom villa or farmhouse with rooms can sleep a whole family branch for one nightly rate, which usually works out cheaper per head than several hotel rooms in peak season. Hotels win on daily housekeeping, 24-hour front desk and breakfast.",
  },
  {
    q: "Can wedding guests stay at the farmhouse venue in Delhi NCR?",
    a: "Some farmhouses have bedrooms or cottages that can be booked for the couple, immediate family or a small group, usually at an extra charge. Most wedding lawns have only a few getting-ready rooms, so plan separate stays for the wider guest list.",
  },
  {
    q: "What is a courtesy room block for a wedding?",
    a: "A courtesy block is a set of rooms a hotel holds at an agreed rate until a cut-off date, with no penalty for rooms guests do not book. A contracted block guarantees more rooms but usually requires a deposit and commits you to paying for a share of them.",
  },
  {
    q: "Where should out-of-town wedding guests stay in Delhi NCR?",
    a: "Stay close to the venue, not the airport. Chattarpur and Mehrauli weddings suit stays in South Delhi or MG Road Gurgaon; Sohna Road weddings suit Golf Course Extension or Sohna Road itself; Noida and Greater Noida weddings suit the expressway sectors.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="wedding-guest-accommodation-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-11"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farm-33.webp"
          width={750}
          height={938}
          fetchPriority="high"
          decoding="async"
          alt="Farmhouse with rooms and a large lawn in Delhi NCR, an option for wedding guest accommodation"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Wedding Guest Accommodation in Delhi NCR: The 2026 Guide
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
          Wedding guest accommodation in Delhi NCR is the line item most
          families fix last and regret most. Once the farmhouse and caterer
          are booked, there are still relatives flying in from Mumbai,
          Bengaluru or abroad, a baraat arriving from another city and
          grandparents who need a ground-floor room — all during the busiest
          hotel weeks of the year. This guide compares hotel rooms, villas and
          farmhouses with rooms for out-of-town guests, shows how many rooms
          to book, and gives 2026 cost estimates and a booking timeline.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a Delhi NCR wedding, book guest accommodation as soon as the
            date is fixed — ideally in October for a November–December 2026
            muhurat. Plan about one room per two to three outstation guests,
            use a hotel block for scattered relatives and a villa or farmhouse
            with rooms for large family groups, and stay within 20–30 minutes
            of the venue.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Wedding Guest Accommodation Options at a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Option
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Best for
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Typical cost (estimate, peak season)
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Main trade-off
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Hotel room block
                </td>
                <td className="border border-gray-300 p-4">
                  Many small families, elderly guests, NRI relatives
                </td>
                <td className="border border-gray-300 p-4">
                  ₹5,000–₹15,000 per room per night (mid-range)
                </td>
                <td className="border border-gray-300 p-4">
                  Peak-date rates and minimum commitments
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Villa or Airbnb-style home
                </td>
                <td className="border border-gray-300 p-4">
                  One family branch of 8–15 people
                </td>
                <td className="border border-gray-300 p-4">
                  ₹15,000–₹50,000 per night for 3–6 bedrooms
                </td>
                <td className="border border-gray-300 p-4">
                  No daily housekeeping or front desk at many homes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Serviced apartment
                </td>
                <td className="border border-gray-300 p-4">
                  Couples and small families staying 3+ nights
                </td>
                <td className="border border-gray-300 p-4">
                  ₹5,000–₹12,000 per night for 1–3 BHK
                </td>
                <td className="border border-gray-300 p-4">
                  Units can be spread across buildings
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Farmhouse with rooms
                </td>
                <td className="border border-gray-300 p-4">
                  Couple, immediate family, pre-wedding functions on site
                </td>
                <td className="border border-gray-300 p-4">
                  ₹40,000–₹1.5 lakh+ per night for the property
                </td>
                <td className="border border-gray-300 p-4">
                  Limited bedrooms; overnight rules vary
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Costs are Effortless Events planning estimates for Delhi NCR in the
          November–December 2026 wedding season, before taxes. Rates vary
          widely by area, date and property — treat them as a range for
          budgeting, not a quote.
        </p>

        {/* =====================================================
            WHY IT IS HARD
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Is Wedding Guest Accommodation Hard to Find in Delhi NCR?
        </h2>

        <p className="mb-8">
          Rooms are scarce in wedding season because Delhi has a small branded
          hotel stock and December is its busiest month. A{" "}
          <a
            href="https://newskarnataka.com/finance/delhi-hotel-rates-skyrocket-as-weddings-winter-travel-and-flight-chaos-collide/13122025/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            December 2025 report
          </a>{" "}
          put Delhi at roughly 17,000–18,000 branded hotel rooms (about
          32,000–34,000 across NCR), with occupancy already around 76–80% and
          last-available rooms selling 10–25% higher, partly because families
          were booking whole properties for weddings.
        </p>

        <p className="mb-8">
          The 2026 calendar makes this sharper. The wedding season reopens
          after Dev Uthani Ekadashi on 20 November, and the main muhurats
          fall on 21 and 24–26 November and 1–4 and 11–13 December. With only
          a handful of dates, hundreds of weddings land on the same weekends,
          and guests from every one of them need beds near Chattarpur,
          Gurgaon or Noida on the same nights.
        </p>

        {/* =====================================================
            HOW MANY ROOMS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Rooms Should You Book for Wedding Guests?
        </h2>

        <p className="mb-8">
          Start with one room for every two travelling guests, then add a 10%
          buffer. That is the standard formula used by{" "}
          <a
            href="https://engine.com/blog/how-many-hotel-rooms-to-block-for-a-wedding-faq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            hotel room-block guides
          </a>
          : multiply out-of-town invitees by expected attendance, divide by
          two and round up. Indian family groups often share — parents with a
          child, cousins three to a room — so in Delhi NCR one room per two to
          three guests is a realistic planning range.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>List only outstation guests.</strong> Relatives who live
            in Delhi NCR go home, even after a late phera.
          </li>
          <li>
            <strong>Estimate attendance.</strong> Close family will almost all
            come; distant relatives and friends often come at 60–80%.
          </li>
          <li>
            <strong>Group by household.</strong> Count rooms per family, not
            per person — a family of four may need one large room or two.
          </li>
          <li>
            <strong>Flag special needs.</strong> Elderly guests, wheelchair
            users and families with infants need lift access or ground-floor
            rooms.
          </li>
          <li>
            <strong>Add 10% buffer.</strong> Late confirmations and
            plus-ones always appear in the last week.
          </li>
        </ol>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Worked example</p>
          <p>
            80 outstation invitees × 75% expected attendance = 60 guests. At
            about 2.5 guests per room, that is 24 rooms; with a 10% buffer,
            plan for 26–27 rooms. If 20 of those guests are one family branch,
            a 6-bedroom villa can replace 8 hotel rooms and keep them together.
          </p>
        </div>

        {/* =====================================================
            HOTEL VS VILLA
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Hotel Rooms or a Villa: Which Is Better for Wedding Guests?
        </h2>

        <p className="mb-8">
          Hotels are better for scattered guests who value service; villas
          and group homes are better for large families who want to stay
          together. Most Delhi NCR weddings with more than 50 outstation
          guests end up using both: a hotel block near the venue plus one or
          two villas for the closest family.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Factor
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Hotel room block
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Villa or group home
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Cost per head</td>
                <td className="border border-gray-300 p-4">
                  Higher in peak season, per room
                </td>
                <td className="border border-gray-300 p-4">
                  Often lower for groups of 8+
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Family togetherness
                </td>
                <td className="border border-gray-300 p-4">
                  Rooms on different floors
                </td>
                <td className="border border-gray-300 p-4">
                  Shared living room, kitchen and lawn
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Service</td>
                <td className="border border-gray-300 p-4">
                  Front desk, housekeeping, breakfast
                </td>
                <td className="border border-gray-300 p-4">
                  Caretaker; cleaning and food vary by home
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Getting ready
                </td>
                <td className="border border-gray-300 p-4">
                  Small rooms, salon on site at some hotels
                </td>
                <td className="border border-gray-300 p-4">
                  Space for make-up artists, outfits and photos
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Pre-wedding functions
                </td>
                <td className="border border-gray-300 p-4">
                  Needs a banquet booking
                </td>
                <td className="border border-gray-300 p-4">
                  Small mehendi or dinner possible on site, if allowed
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Elderly and NRI guests
                </td>
                <td className="border border-gray-300 p-4">
                  Lifts, room service, 24-hour help
                </td>
                <td className="border border-gray-300 p-4">
                  Check stairs, geysers and heating
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Group stays have other benefits too. Our guide on{" "}
          <Link
            href="/blogs/why-booking-an-airbnb-is-the-smart-choice"
            className="text-black underline font-semibold"
          >
            why an Airbnb works for group stays
          </Link>{" "}
          covers the space and kitchen advantages that make a villa useful for
          a family staying three or four nights.
        </p>

        {/* =====================================================
            FARMHOUSE WITH ROOMS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can Wedding Guests Stay at the Farmhouse Venue?
        </h2>

        <p className="mb-8">
          Sometimes, but rarely the whole guest list. Large Chattarpur and
          Kapashera wedding lawns usually have only two to four getting-ready
          rooms for the couple and parents. Smaller private farmhouses on
          Sohna Road, in Noida or in Faridabad may have four to eight
          bedrooms, which suits an intimate wedding or a family that wants to
          host the haldi, mehendi and wedding at one property over two or
          three days.
        </p>

        <p className="mb-8">
          Before you plan on overnight guests at the venue, confirm in writing
          how many people may stay, check-in and check-out times, whether
          rooms are included in the wedding package or charged separately,
          and whether the property allows guests to stay after a late
          function. Our list of{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse rules to check before booking
          </Link>{" "}
          covers overnight and guest-limit questions in detail.
        </p>

        {/* =====================================================
            WHERE TO STAY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Where Should Out-of-Town Wedding Guests Stay in Delhi NCR?
        </h2>

        <p className="mb-8">
          Book stays within 20–30 minutes of the venue, not near the airport
          or the family home. Late-night wedding traffic, fog on winter
          nights and long baraat processions make a short drive back the most
          valuable thing you can give tired guests.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Venue area
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Where guests usually stay
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Chattarpur, Mehrauli, Sainik Farms
                </td>
                <td className="border border-gray-300 p-4">
                  South Delhi (Saket, Vasant Kunj), MG Road and Sultanpur in
                  Gurgaon
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Kapashera, Bijwasan, Rajokri
                </td>
                <td className="border border-gray-300 p-4">
                  Aerocity, Dwarka, NH-48 corridor (useful for flying guests)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Sohna Road, Golf Course Extension
                </td>
                <td className="border border-gray-300 p-4">
                  Sohna Road, Golf Course Extension Road, Sector 48–49
                  Gurgaon
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Noida, Greater Noida
                </td>
                <td className="border border-gray-300 p-4">
                  Noida–Greater Noida Expressway sectors, Sector 18 area
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  GT Karnal Road, North Delhi
                </td>
                <td className="border border-gray-300 p-4">
                  Model Town, Pitampura, Murthal side stays
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Aerocity hotels were among the most expensive in December 2025,
          according to the report linked above, so use them only for guests
          on early flights.
        </p>

        {/* =====================================================
            COST & WHO PAYS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does Wedding Guest Accommodation Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          For 25 rooms over two nights in peak season, budget roughly ₹2.5–7.5
          lakh at mid-range hotels (an Effortless Events planning estimate
          before taxes). Swapping eight of those rooms for one or two villas
          for close family can bring the total down and keep relatives
          together.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Nights:</strong> most outstation guests need two nights;
            close family arriving for the haldi or mehendi may need three or
            four.
          </li>
          <li>
            <strong>Dates:</strong> Saturday muhurats such as 21 November and
            12 December will cost more than weekday dates like 24 November or
            2 December.
          </li>
          <li>
            <strong>Extras:</strong> breakfast, airport pickups, a hospitality
            desk and welcome hampers add to the per-room figure.
          </li>
          <li>
            <strong>Who pays:</strong> in many North Indian weddings the hosts
            cover close outstation relatives and the baraat side&apos;s stay,
            but customs differ — agree it between both families early.
          </li>
        </ul>

        <p className="mb-8">
          Guest stays are usually budgeted outside the main venue cost. Our{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse wedding cost guide
          </Link>{" "}
          breaks down the venue, food, décor and on-ground costs so you can
          see the full budget in one place.
        </p>

        {/* =====================================================
            BLOCKS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is a Hotel Room Block and How Do You Negotiate One?
        </h2>

        <p className="mb-8">
          A room block is a set of rooms a hotel holds for your guests at an
          agreed rate. A <strong>courtesy block</strong> holds rooms until a
          cut-off date — usually three to four weeks before arrival — and
          releases unsold rooms with no penalty. A{" "}
          <strong>contracted block</strong> guarantees more rooms but needs a
          deposit and an attrition clause that commits you to paying for a
          share of them, often around 80%.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Ask for the same rate across all wedding nights</li>
          <li>Get the cut-off date and attrition percentage in writing</li>
          <li>Ask for complimentary early check-in for the haldi day</li>
          <li>Request a hospitality desk space in the lobby</li>
          <li>Check whether breakfast and taxes are included</li>
          <li>Negotiate a complimentary room for every 10–15 booked</li>
          <li>Confirm cancellation terms if the muhurat moves</li>
        </ul>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Booking Timeline for a November–December 2026 Wedding
        </h2>

        <p className="mb-8">
          For a muhurat between 21 November and 13 December 2026, you are
          already inside the booking window. Use this countdown so the guest
          list, rooms and transport stay in sync.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>Now (6–8 weeks out):</strong> count outstation guests,
            shortlist two or three hotels and villas near the venue, and
            secure the close-family villa first.
          </li>
          <li>
            <strong>5–6 weeks out:</strong> sign the hotel block, share
            booking details with guests and set an RSVP deadline.
          </li>
          <li>
            <strong>3–4 weeks out:</strong> chase RSVPs before the block
            cut-off; release or add rooms.
          </li>
          <li>
            <strong>2 weeks out:</strong> build a rooming list, assign
            airport and station pickups, and plan shuttles to the venue.
          </li>
          <li>
            <strong>1 week out:</strong> send each guest their room,
            check-in time, function schedule and a local contact.
          </li>
          <li>
            <strong>Wedding week:</strong> run a hospitality desk with
            welcome kits, keys and a printed schedule for every function.
          </li>
        </ol>

        <p className="mb-8">
          If the haldi and mehendi are at a different property, keep guests
          near that venue for the first night. Our guide to{" "}
          <Link
            href="/blogs/haldi-mehendi-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            haldi and mehendi at a farmhouse
          </Link>{" "}
          covers how families schedule pre-wedding days around one location.
        </p>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas, apartments and
          venues for weddings, parties and group stays, and coordinate the
          vendors around them.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Wedding Guest Accommodation Checklist
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Outstation guest list with expected attendance</li>
          <li>Rooms per household, with elderly and infant needs flagged</li>
          <li>Stays within 20–30 minutes of every function venue</li>
          <li>Hotel block type, rate, cut-off and attrition in writing</li>
          <li>Villa bedrooms, beds, bathrooms, geysers and room heaters</li>
          <li>Overnight guest limits and check-out times confirmed</li>
          <li>Who pays for which guests, agreed between both families</li>
          <li>Airport, station and venue transport planned</li>
          <li>Rooming list shared with hotel and villa caretakers</li>
          <li>Hospitality desk, welcome kits and a guest helpline</li>
        </ul>

        <p className="mb-8">
          Sorting guest stays early is one of the kindest things a host family
          can do. Relatives arrive rested, nobody is stuck in late-night
          traffic after the pheras, and you are not paying last-minute rates
          on the busiest wedding weekends of 2026.
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
            Find Stays for Your Wedding Guests
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your venue, dates and number of outstation guests.
            Effortless Events can help you shortlist villas, apartments and
            farmhouses with rooms near your wedding venue across Delhi NCR.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/apartments"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Explore Stays
            </Link>

            <Link
              href="/farmhouses"
              className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Farmhouses
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
