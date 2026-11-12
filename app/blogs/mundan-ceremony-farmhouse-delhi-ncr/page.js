import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Mundan Ceremony at a Farmhouse in Delhi NCR: Cost & Dates",

  description:
    "Planning a mundan ceremony at a farmhouse in Delhi NCR? Late-2026 and 2027 muhurat dates, cost estimates, a toddler-safe setup, day plan and checklist.",

  keywords: [
    "mundan ceremony at farmhouse Delhi NCR",
    "mundan ceremony venue Delhi",
    "mundan muhurat December 2026",
    "mundan muhurat 2027",
    "mundan ceremony cost Delhi NCR",
    "mundan pandit charges Delhi",
    "at what age mundan should be done",
  ],

  alternates: { canonical: "/blogs/mundan-ceremony-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Mundan Ceremony at a Farmhouse in Delhi NCR: Cost & Dates",

    description:
      "Mundan dates for Dec 2026 and early 2027, puja-plus-lunch formats by guest count, cost estimates, toddler comfort checks, a day plan and a checklist.",

    images: ["/event-gallery-1.webp"],
  },
};

const faqs = [
  {
    q: "At what age should mundan be done?",
    a: "Most families hold the mundan in the child's first, third or fifth year, and some in the seventh. Published calendars do not fully agree: VedicFeed's 2027 page names the 1st, 3rd, 5th or 7th year, while its monthly pages mention the second or fourth year, so follow your family custom and pandit.",
  },
  {
    q: "Which day is good for a mundan ceremony?",
    a: "VedicFeed advises avoiding Tuesday and Saturday, and AstroSight also lists Sunday as a day to avoid. Morning hours after sunrise are generally preferred. Because weekend dates are rare in published lists, many families hold the ritual on the muhurat morning and the lunch on the nearest weekend.",
  },
  {
    q: "Can mundan be done in December?",
    a: "Sources disagree. VedicFeed lists five December 2026 dates (4, 14, 19, 25 and 31 December), while AstroSight lists none and says Drik Panchang allows mundan only once the Sun enters Capricorn in mid-January. Many families also avoid Kharmas (16 December 2026 to 14 January 2027, per Hindupad), so ask your pandit.",
  },
  {
    q: "Can mundan be done at home?",
    a: "Yes. Many Delhi NCR families do the ritual at home, at a temple or at a pilgrimage site with only close family, then host relatives for lunch later. A farmhouse suits the second part, or both together when 40 or more guests are coming.",
  },
  {
    q: "What do you do with the hair after mundan?",
    a: "Customs vary. Many families collect the hair in a cloth or atta (dough) and offer it at a temple or immerse it in a river, as the pandit advises. Agree beforehand who will collect it so it is not left on the lawn.",
  },
  {
    q: "How much does a mundan ceremony cost in Delhi NCR?",
    a: "As a rough planning estimate, a mundan with puja and lunch at a farmhouse for about 50 guests often costs ₹1,10,000–₹3,00,000, covering venue, food, décor, pandit, barber and photos. SmartPuja lists Delhi mundan pandit packages at about ₹4,000–₹5,200; a home ritual for close family costs far less.",
  },
  {
    q: "Is mundan done for girls too?",
    a: "In many families, yes; the mundan sanskar is traditionally for all children. Some families shave the head fully for boys and only trim a lock of hair for girls, so it is a family choice. The venue and food plan stay the same.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const link = "text-black underline font-semibold";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="mundan-ceremony-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-12"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/event-gallery-1.webp"
          width={1166}
          height={656}
          fetchPriority="high"
          decoding="async"
          alt="Mundan ceremony at a farmhouse in Delhi NCR: a flower-covered entrance arch leading to a private farmhouse garden, set up for a daytime family function"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Mundan Ceremony at a Farmhouse in Delhi NCR: Muhurat Dates, Cost and
          a Toddler-Safe Plan
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Private Parties • Last updated: November 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A mundan ceremony at a farmhouse in Delhi NCR gives a family one
          private place for the head-shaving ritual, the havan, a relaxed
          lunch and plenty of photos, without packing every relative into a
          flat. This guide covers which muhurat dates are listed for December
          2026 and early 2027 (and where calendars disagree), what a farmhouse
          mundan typically costs, and how to keep a restless toddler calm and
          warm through the day.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Fix the muhurat with your pandit first, since published calendars
            disagree on December dates. Then book a farmhouse for a morning
            slot of about 9 AM–3 PM, with a warm indoor room, a havan-friendly
            lawn and a clean washroom. Book 3–6 weeks ahead and budget roughly
            ₹2,200–₹6,000 per guest (estimate) for a puja-plus-lunch function.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Mundan Ceremony: At a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Decision</th>
                <th className={th}>What works for most Delhi NCR families</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Child&apos;s age</td>
                <td className={td}>
                  Usually the 1st, 3rd or 5th year; follow family custom
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse format</td>
                <td className={td}>
                  Puja and mundan in the morning, then lunch and blessings for
                  30–100 guests
                </td>
              </tr>
              <tr>
                <td className={td}>Timing</td>
                <td className={td}>
                  Morning muhurat after sunrise; guests leave by mid-afternoon
                </td>
              </tr>
              <tr>
                <td className={td}>Listed dates*</td>
                <td className={td}>
                  Dec 2026 (disputed), 15 and 20 Jan 2027, five dates in Feb
                  2027
                </td>
              </tr>
              <tr>
                <td className={td}>Cost for 50 guests**</td>
                <td className={td}>
                  About ₹1,10,000–₹3,00,000 for venue, food, décor, pandit,
                  barber and photos
                </td>
              </tr>
              <tr>
                <td className={td}>Book ahead</td>
                <td className={td}>
                  3–6 weeks; longer for December weekends, when weddings take
                  many properties
                </td>
              </tr>
              <tr>
                <td className={td}>Must-checks</td>
                <td className={td}>
                  Havan allowed; warm room for the child; hot water for the
                  bath; washroom near seating
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-10">
          *Dates are from VedicFeed&apos;s published calendar; confirm with your
          pandit. **All prices in this guide are indicative planning estimates
          based on typical Delhi NCR quotes, not fixed rates, unless a source
          is named. Actual costs depend on the property, date, menu and
          vendors.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          At What Age Should Mundan Be Done?
        </h2>

        <p className="mb-8">
          Most families hold the mundan sanskar, the child&apos;s first
          ceremonial haircut, in an odd year of age: the first, third or
          fifth, and sometimes the seventh. Published sources are not fully
          consistent. VedicFeed&apos;s{" "}
          <a
            href="https://vedicfeed.com/muhurat/mundan-muhurat/2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            2027 mundan calendar
          </a>{" "}
          names the 1st, 3rd, 5th or 7th year, while its monthly pages mention
          the second or fourth year, and{" "}
          <a
            href="https://astrosight.ai/muhurat/mundan-muhurat-2026/december"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            AstroSight
          </a>{" "}
          points to odd years. The practical answer is to follow your
          family&apos;s custom and let the pandit pick the date.
        </p>

        <p className="mb-8">
          Age also shapes the event. A one-year-old needs naps, feeds and a
          quiet room; a three-year-old is more aware of the razor and may need
          distraction. Either way, keep the ritual short and the guest list
          close to the child for the shaving itself, and save the big
          gathering for the lunch.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Mundan Muhurat Dates: December 2026 and Early 2027
        </h2>

        <p className="mb-8">
          This is where planning gets tricky. VedicFeed&apos;s{" "}
          <a
            href="https://vedicfeed.com/muhurat/mundan-muhurat/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            December 2026 page
          </a>{" "}
          lists five mundan dates, but AstroSight lists none for December and
          says Drik Panchang allows mundan only when the Sun is in Capricorn,
          Aquarius, Aries, Taurus or Gemini, which in practice means from mid-
          January onwards. Many families also pause ceremonies during Kharmas,
          which{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Hindupad
          </a>{" "}
          places from 16 December 2026 to 14 January 2027.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Date (VedicFeed)</th>
                <th className={th}>Day</th>
                <th className={th}>Farmhouse planning note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>4 Dec 2026</td>
                <td className={td}>Friday</td>
                <td className={td}>
                  Before Kharmas; a Friday puja can lead into a Saturday lunch
                </td>
              </tr>
              <tr>
                <td className={td}>14 Dec 2026</td>
                <td className={td}>Monday</td>
                <td className={td}>
                  Last listed date before Kharmas; weekday guest list
                </td>
              </tr>
              <tr>
                <td className={td}>19 Dec 2026</td>
                <td className={td}>Saturday</td>
                <td className={td}>
                  Inside Kharmas, and a Saturday, which the same page says to
                  avoid
                </td>
              </tr>
              <tr>
                <td className={td}>25 and 31 Dec 2026</td>
                <td className={td}>Friday, Thursday</td>
                <td className={td}>
                  Holidays, but inside Kharmas and peak party days for venues
                </td>
              </tr>
              <tr>
                <td className={td}>15 and 20 Jan 2027</td>
                <td className={td}>Friday, Wednesday</td>
                <td className={td}>
                  After Kharmas; short early-morning windows; coldest, foggiest
                  weeks
                </td>
              </tr>
              <tr>
                <td className={td}>8, 13, 16, 18, 24 Feb 2027</td>
                <td className={td}>Mixed</td>
                <td className={td}>
                  Milder days for a lawn lunch; check unusual night-time
                  windows with your pandit
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Two patterns help. First, if the muhurat falls on a weekday, do the
          shaving and puja that morning at home or a temple with close family,
          and host the farmhouse lunch on the following weekend. Second, if
          your pandit follows the mid-January rule, late January and February
          2027 are the comfortable window: the days are milder and the
          wedding rush is thinner than in December, so farmhouse daytime slots
          are easier to find.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Hold a Mundan at a Farmhouse?
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Space for the havan:</strong> an open lawn takes the smoke
            away from guests, which is hard in a flat or a closed banquet hall.
          </li>
          <li>
            <strong>Privacy for the ritual:</strong> a toddler crying through
            the shave is normal; a private property means no other party next
            door.
          </li>
          <li>
            <strong>A room to rest:</strong> most farmhouses have bedrooms, so
            the child can bathe, nap and change after the shave.
          </li>
          <li>
            <strong>One place, one day:</strong> puja, lunch, photos and play
            area together, with parking for relatives.
          </li>
          <li>
            <strong>Easy pairing:</strong> some families combine the mundan
            with a first or third birthday lunch on the same day.
          </li>
        </ul>

        <p className="mb-8">
          If you are weighing a daytime slot against an overnight booking for
          relatives coming from outside Delhi, our guide to{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className={link}
          >
            day-use vs overnight farmhouses
          </Link>{" "}
          compares cost and timing.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Mundan Ceremony Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A farmhouse mundan for about 50 guests typically costs ₹1,10,000–
          ₹3,00,000 (estimate). Food and venue take most of the budget; the
          ritual itself is a small share. For the pandit,{" "}
          <a
            href="https://www.smartpuja.com/blog/?p=6607"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            SmartPuja
          </a>{" "}
          lists Delhi mundan puja packages at about ₹4,000–₹4,200 for a Hindi-
          speaking pandit with havan and ₹5,000–₹5,200 for some regional
          languages, each with one pandit for 1.5–2 hours.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item</th>
                <th className={th}>Typical range (estimate)</th>
                <th className={th}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Farmhouse, daytime slot</td>
                <td className={td}>₹25,000–₹1,00,000</td>
                <td className={td}>
                  Depends on area, size and date; December weekends cost more
                </td>
              </tr>
              <tr>
                <td className={td}>Lunch (satvik or vegetarian)</td>
                <td className={td}>₹700–₹1,800 per plate</td>
                <td className={td}>Plus tea and snacks on arrival</td>
              </tr>
              <tr>
                <td className={td}>Pandit and havan</td>
                <td className={td}>₹4,000–₹5,200 package</td>
                <td className={td}>
                  SmartPuja Delhi listing; samagri and dakshina may be extra
                </td>
              </tr>
              <tr>
                <td className={td}>Barber (nai)</td>
                <td className={td}>₹1,100–₹5,100</td>
                <td className={td}>
                  Many families add a shagun; confirm travel and timing
                </td>
              </tr>
              <tr>
                <td className={td}>Décor</td>
                <td className={td}>₹15,000–₹60,000</td>
                <td className={td}>Havan area, backdrop, entrance, seating</td>
              </tr>
              <tr>
                <td className={td}>Photographer</td>
                <td className={td}>₹15,000–₹40,000</td>
                <td className={td}>Half-day, edited photos</td>
              </tr>
              <tr>
                <td className={td}>Return gifts and sweets</td>
                <td className={td}>₹150–₹600 per family</td>
                <td className={td}>Sweet boxes, dry fruit or small gifts</td>
              </tr>
              <tr>
                <td className={td}>Heaters, sound, extras</td>
                <td className={td}>₹5,000–₹25,000</td>
                <td className={td}>Patio heaters in Dec–Jan; soft bhajans</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Budget by guest count
        </h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Guests</th>
                <th className={th}>Best format</th>
                <th className={th}>Total (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>15–25</td>
                <td className={td}>
                  Ritual at home or a small villa, simple lunch
                </td>
                <td className={td}>₹40,000–₹1,10,000</td>
              </tr>
              <tr>
                <td className={td}>40–60</td>
                <td className={td}>Farmhouse puja and lunch</td>
                <td className={td}>₹1,10,000–₹3,00,000</td>
              </tr>
              <tr>
                <td className={td}>80–120</td>
                <td className={td}>
                  Farmhouse with caterer, décor and photographer
                </td>
                <td className={td}>₹2,50,000–₹6,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          For menu ideas and per-plate quantities, see our{" "}
          <Link
            href="/blogs/farmhouse-party-catering-menu-delhi-ncr"
            className={link}
          >
            farmhouse catering guide
          </Link>
          . Most families keep the mundan lunch vegetarian and alcohol-free,
          as it follows a puja.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How to Keep the Child Comfortable and Safe
        </h2>

        <p className="mb-8">
          The shave is the moment that can go wrong, so plan it like the main
          event. Ask your paediatrician first if the child has any scalp
          condition, and use the checks below on the day.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Check</th>
                <th className={th}>Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>New, sealed blade; barber washes hands</td>
                <td className={td}>Basic hygiene on a young scalp</td>
              </tr>
              <tr>
                <td className={td}>Shave after a feed or nap</td>
                <td className={td}>A rested, fed child sits more calmly</td>
              </tr>
              <tr>
                <td className={td}>Child on a parent&apos;s lap, in shade</td>
                <td className={td}>
                  Less wriggling; no harsh sun on a freshly shaved head
                </td>
              </tr>
              <tr>
                <td className={td}>Few people around the child</td>
                <td className={td}>
                  Crowding makes toddlers anxious; guests watch from seating
                </td>
              </tr>
              <tr>
                <td className={td}>Hot water and a warm room for the bath</td>
                <td className={td}>
                  Winter mornings are cold; dress the child warmly straight
                  after
                </td>
              </tr>
              <tr>
                <td className={td}>Cap or soft scarf ready</td>
                <td className={td}>Keeps the head warm in Dec–Feb</td>
              </tr>
              <tr>
                <td className={td}>Havan away from the child&apos;s room</td>
                <td className={td}>Keeps smoke out where the child rests</td>
              </tr>
              <tr>
                <td className={td}>Pool fenced or covered</td>
                <td className={td}>
                  Toddlers move fast; assign an adult to watch children
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Winter air can also change plans. If the Graded Response Action Plan
          tightens, generators, tandoors and open fires may be restricted; our{" "}
          <Link
            href="/blogs/grap-rules-weddings-parties-delhi-ncr"
            className={link}
          >
            GRAP rules guide
          </Link>{" "}
          explains what each stage means, and why you should confirm with the
          owner that a small havan is allowed on your date.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Day Plan for a Farmhouse Mundan
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-12">
          <li>
            <strong>8:00 AM:</strong> close family and pandit arrive; havan
            kund and seating set up; water heater switched on.
          </li>
          <li>
            <strong>8:30 AM:</strong> child arrives, feeds and settles in the
            warm room.
          </li>
          <li>
            <strong>9:00–10:30 AM:</strong> puja and havan in the muhurat
            window; the barber shaves the head with the child on a
            parent&apos;s lap; hair collected as the pandit advises.
          </li>
          <li>
            <strong>10:30 AM:</strong> bath, fresh clothes, cap; rest or nap.
          </li>
          <li>
            <strong>11:30 AM:</strong> wider guests arrive; tea and snacks;
            blessings and family photos.
          </li>
          <li>
            <strong>12:30–2:30 PM:</strong> lunch; optional cake if you are
            pairing it with a birthday.
          </li>
          <li>
            <strong>2:30–3:00 PM:</strong> return gifts and sweet boxes; guests
            leave before the evening chill.
          </li>
        </ol>

        <p className="mb-8">
          Pairing the mundan with a birthday? Our{" "}
          <Link href="/blogs/kids-birthday-party-farmhouse-delhi-ncr" className={link}>
            kids&apos; birthday party at a farmhouse guide
          </Link>{" "}
          covers games, a play area and safety for a young crowd. If a newer
          baby in the family is due a namkaran, see our{" "}
          <Link href="/blogs/naming-ceremony-farmhouse-delhi-ncr" className={link}>
            naming ceremony guide
          </Link>
          ; many of the same planning steps apply.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask the Farmhouse Owner Before Booking
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Is a small havan fire allowed on the lawn or a covered area?</li>
          <li>Can we bring our own pandit, barber and caterer?</li>
          <li>Which room is heated, with hot water for the child&apos;s bath?</li>
          <li>How early can we enter for a morning muhurat?</li>
          <li>Is the pool fenced or can it be covered?</li>
          <li>Where is the generator, and will it run during our slot?</li>
          <li>Is there an indoor or covered area if it is foggy or cold?</li>
          <li>
            What does the security deposit cover, and who cleans up the havan
            area?
          </li>
        </ul>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          family functions such as mundan ceremonies, naming ceremonies,
          birthdays and weddings, and can shortlist properties that allow a
          havan and offer early morning slots.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Mundan Ceremony Checklist
        </h2>

        <ul className="space-y-3 mb-12">
          <li>☐ Muhurat confirmed with the pandit (and Kharmas checked)</li>
          <li>☐ Decide: ritual and lunch same day, or ritual first, lunch on the weekend</li>
          <li>☐ Guest list fixed (count children separately)</li>
          <li>☐ Farmhouse booked for a morning slot, havan allowed</li>
          <li>☐ Warm room and hot water confirmed for the child</li>
          <li>☐ Pandit, samagri and barber booked; new blade requested</li>
          <li>☐ Cloth or atta ready to collect the hair; plan for offering it</li>
          <li>☐ Vegetarian lunch menu and caterer confirmed</li>
          <li>☐ Décor, seating and shade for the ritual area</li>
          <li>☐ Photographer briefed on the shave and blessings</li>
          <li>☐ Return gifts and sweet boxes ordered</li>
          <li>☐ Cap, spare clothes, towel and snacks for the child packed</li>
          <li>☐ Heaters or indoor plan B for fog, cold or poor air quality</li>
        </ul>
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
            Planning Your Child&apos;s Mundan Ceremony?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your muhurat date, guest count, preferred area and budget.
            Effortless Events can help you find a farmhouse with an early
            morning slot, space for the havan and a warm room for your child.
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
              Plan My Event
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
