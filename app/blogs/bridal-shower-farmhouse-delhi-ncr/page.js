import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Bridal Shower at a Farmhouse in Delhi NCR: Cost & Ideas",

  description:
    "Planning a bridal shower at a farmhouse in Delhi NCR? Dates for 2026–27 weddings, cost estimates, theme and game ideas, a day plan and a booking checklist.",

  keywords: [
    "bridal shower at farmhouse Delhi NCR",
    "bridal shower venue Delhi",
    "bridal shower venue Gurgaon",
    "bridal shower ideas India",
    "bridal shower cost Delhi NCR",
    "bridal shower vs bachelorette",
    "bridal shower games for Indian brides",
    "who hosts a bridal shower in India",
    "when to have a bridal shower before wedding",
  ],

  alternates: {
    canonical: "/blogs/bridal-shower-farmhouse-delhi-ncr",
  },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Bridal Shower at a Farmhouse in Delhi NCR: Cost & Ideas",
    description:
      "When to hold a bridal shower for a 2026–27 wedding, what a farmhouse shower costs, themes and games that work, a day plan and a checklist.",
    images: ["/decoration-2.webp"],
  },
};

const faqs = [
  {
    q: "What is a bridal shower in India?",
    a: "A bridal shower is a relaxed party for the bride-to-be, usually hosted by her sisters, cousins or close friends, with games, food, gifts and blessings. In India it is newer than haldi or mehendi and is often family-friendly, daytime and alcohol-light, unlike a bachelorette.",
  },
  {
    q: "How many days before the wedding should a bridal shower be?",
    a: "Most hosts aim for 2–6 weeks before the wedding, so it does not clash with haldi, mehendi and sangeet in the final week. For a December 2026 wedding that means a late-November or early-December weekend; for a February 2027 wedding, a January weekend.",
  },
  {
    q: "Who organises and pays for a bridal shower?",
    a: "Usually the bride's sisters, cousins, best friends or bridesmaids organise it and split the cost between them. Sometimes the bride's family or the groom's sisters host. The bride is normally not asked to pay, though she can share her guest list and preferences.",
  },
  {
    q: "What is the difference between a bridal shower and a bachelorette party?",
    a: "A bridal shower is usually a daytime party with family and friends, gifts, games and blessings. A bachelorette is a friends-only night or weekend out, often with music and drinks. Many Delhi NCR brides now have both, a few weeks apart.",
  },
  {
    q: "How much does a bridal shower cost in Delhi NCR?",
    a: "As a planning estimate, a 20–30 guest farmhouse bridal shower typically costs about ₹70,000–₹2,00,000 including a day slot, food, décor, cake, photos and favours. Listing site VenueLook shows most Delhi bridal shower venues at about ₹600–₹1,400 per plate.",
  },
  {
    q: "What games can be played at an Indian bridal shower?",
    a: "Popular choices are a 'How well do you know the bride' quiz, couple trivia, bridal bingo with gifts, a desi song antakshari, dumb charades with wedding-film titles and a blessings jar. Pick games that elders and younger guests can play together.",
  },
  {
    q: "Can men attend a bridal shower?",
    a: "Traditionally it is a women-only party, but co-ed showers with the groom and friends from both sides are increasingly common. If the groom is invited, plan a couple's quiz and keep the guest list balanced so it does not turn into a second sangeet.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const link = "text-black underline font-semibold";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="bridal-shower-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-14"
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
          alt="Bridal shower at a farmhouse in Delhi NCR: a pastel floral arch with peach and pink flowers over petal-strewn seating, set up for an afternoon celebration for the bride"
          className="w-full max-w-2xl mx-auto rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Bridal Shower at a Farmhouse in Delhi NCR: Dates, Cost, Ideas and a
          Day Plan
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
          A bridal shower at a farmhouse in Delhi NCR gives the bride&apos;s
          sisters and friends a private lawn, a warm indoor room and a full
          afternoon to celebrate her, without restaurant time limits or a
          cramped living room. With the 2026–27 wedding season under way, this
          guide covers when to hold the shower, how it differs from a
          bachelorette, what a farmhouse shower typically costs, and the
          themes, games and day plan that work best.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Hold the bridal shower 2–6 weeks before the wedding, on a weekend
            afternoon, so it does not clash with haldi, mehendi or sangeet.
            Book a farmhouse day slot of about 12 PM–6 PM for 15–40 guests,
            with a lawn and a heated indoor room. Budget roughly
            ₹3,000–₹7,000 per guest (estimate) and book 3–5 weeks ahead.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Bridal Shower: At a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Decision</th>
                <th className={th}>What works for most Delhi NCR hosts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>When</td>
                <td className={td}>
                  2–6 weeks before the wedding, on a Saturday or Sunday
                </td>
              </tr>
              <tr>
                <td className={td}>Time slot</td>
                <td className={td}>
                  Brunch or afternoon (about 12 PM–6 PM) in winter, when the
                  lawn is sunny and warm
                </td>
              </tr>
              <tr>
                <td className={td}>Guests</td>
                <td className={td}>
                  15–40: sisters, cousins, close friends, a few aunts
                </td>
              </tr>
              <tr>
                <td className={td}>Hosted by</td>
                <td className={td}>
                  Bridesmaids, sisters or cousins, who usually split the cost
                </td>
              </tr>
              <tr>
                <td className={td}>Cost for 25 guests*</td>
                <td className={td}>
                  About ₹75,000–₹1,75,000 for venue, food, décor, cake, photos
                  and favours
                </td>
              </tr>
              <tr>
                <td className={td}>Book ahead</td>
                <td className={td}>
                  3–5 weeks; earlier for late-November and early-December
                  weekends, when weddings take many properties
                </td>
              </tr>
              <tr>
                <td className={td}>Must-checks</td>
                <td className={td}>
                  Day-slot price, heated indoor room, décor rules, outside
                  caterer allowed, alcohol permit if serving drinks
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-10">
          *All prices in this guide are indicative planning estimates based on
          typical Delhi NCR quotes, not fixed rates, unless a source is named.
          Actual costs depend on the property, date, menu and vendors.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is a Bridal Shower, and How Is It Different from a Bachelorette?
        </h2>

        <p className="mb-8">
          A bridal shower is a celebration of the bride-to-be, hosted by the
          people closest to her, with food, games, gifts and blessings. The
          custom came to India from the West, but Delhi NCR families have
          made it their own: it is usually daytime, often includes mothers
          and aunts, and sits alongside the traditional pre-wedding
          functions rather than replacing them.
        </p>

        <p className="mb-8">
          It is not the same as a bachelorette. A bachelorette is a
          friends-only night or weekend, while a bridal shower is softer,
          shorter and family-friendly. If you are planning the other one too,
          see our{" "}
          <Link
            href="/blogs/bachelorette-party-farmhouse-delhi-ncr"
            className={link}
          >
            bachelorette party at a farmhouse guide
          </Link>
          .
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Function</th>
                <th className={th}>Who comes</th>
                <th className={th}>Typical timing</th>
                <th className={th}>Mood</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Bridal shower</td>
                <td className={td}>
                  Close friends, sisters, cousins, sometimes mothers and aunts
                </td>
                <td className={td}>2–6 weeks before; afternoon</td>
                <td className={td}>Gifts, games, blessings, photos</td>
              </tr>
              <tr>
                <td className={td}>Bachelorette</td>
                <td className={td}>Bride&apos;s friends only</td>
                <td className={td}>2–6 weeks before; night or weekend</td>
                <td className={td}>Music, dancing, often drinks</td>
              </tr>
              <tr>
                <td className={td}>Haldi / mehendi</td>
                <td className={td}>Both families and wider relatives</td>
                <td className={td}>1–3 days before</td>
                <td className={td}>Ritual, dholki, family songs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Because haldi and mehendi already crowd the last days before the
          wedding, the shower works best as a separate, earlier event. Our{" "}
          <Link href="/blogs/haldi-mehendi-farmhouse-delhi-ncr" className={link}>
            haldi and mehendi at a farmhouse guide
          </Link>{" "}
          covers those functions.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Hold a Bridal Shower for a 2026–27 Wedding?
        </h2>

        <p className="mb-8">
          Hold the shower on a weekend 2–6 weeks before the wedding date. That
          is close enough to feel part of the wedding run-up, but far enough
          that the bride is not juggling fittings, haldi and out-of-town
          guests the same week.
        </p>

        <p className="mb-8">
          VedicFeed&apos;s{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            December 2026 calendar
          </a>{" "}
          lists vivah muhurats on 2–6, 11 and 12 December, with none after
          that, as weddings usually pause for Kharmas from mid-December to
          mid-January. Its{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/january-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            January 2027
          </a>{" "}
          list restarts on 15 January, and its{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/february-2027"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            February 2027
          </a>{" "}
          list has 13 dates. Calendars differ, so always go by the
          family&apos;s own pandit. Working back from those dates gives these
          shower windows:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Wedding date</th>
                <th className={th}>Good shower weekends</th>
                <th className={th}>Watch out for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Early December 2026 (2–6 Dec)</td>
                <td className={td}>Sat 21 or Sun 22 Nov; Sat 28 or Sun 29 Nov</td>
                <td className={td}>
                  Peak wedding weekends; farmhouses and decorators book fast
                </td>
              </tr>
              <tr>
                <td className={td}>Mid-December 2026 (11–12 Dec)</td>
                <td className={td}>Sat 21 Nov to Sun 29 Nov</td>
                <td className={td}>
                  Avoid the 5–6 Dec weekend if guests attend other weddings
                </td>
              </tr>
              <tr>
                <td className={td}>Late January 2027 (from 15 Jan)</td>
                <td className={td}>
                  Sat 19 or Sun 20 Dec; Sat 2 or Sat 9 Jan
                </td>
                <td className={td}>
                  Christmas, New Year&apos;s Eve and Lohri (13 Jan) weekends
                </td>
              </tr>
              <tr>
                <td className={td}>February 2027</td>
                <td className={td}>Sat 9 Jan to Sun 31 Jan</td>
                <td className={td}>
                  Board exams for younger cousins from mid-February
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-10">
          Shower weekends are our planning suggestions, not muhurats. A shower
          does not need an auspicious date, but it does need to fit around
          the wedding calendar.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Choose a Farmhouse for a Bridal Shower?
        </h2>

        <p className="mb-8">
          A farmhouse suits a bridal shower because you get the whole
          property to yourselves for an afternoon: a sunny lawn for games and
          photos, an indoor room for when it gets cold, and freedom over
          décor, food and music. Cafés and banquet halls are simpler but come
          with fixed menus, time limits and other diners.
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Venue type</th>
                <th className={th}>Best for</th>
                <th className={th}>Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Private farmhouse (day slot)</td>
                <td className={td}>
                  15–60 guests, themed décor, lawn games, photos, privacy
                </td>
                <td className={td}>
                  You arrange food, décor and clean-up (or hire a planner)
                </td>
              </tr>
              <tr>
                <td className={td}>Café or restaurant private area</td>
                <td className={td}>10–25 guests, low effort</td>
                <td className={td}>
                  Fixed menu, time limits, limited décor and noise
                </td>
              </tr>
              <tr>
                <td className={td}>Banquet hall or hotel room</td>
                <td className={td}>40+ guests, elders, AC comfort</td>
                <td className={td}>
                  Less personal; décor and outside vendors often restricted
                </td>
              </tr>
              <tr>
                <td className={td}>Home</td>
                <td className={td}>Under 15 guests, smallest budget</td>
                <td className={td}>
                  Space, parking and the host family does all the work
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Popular farmhouse belts for a daytime shower include Chattarpur and
          Bijwasan in Delhi, Sohna Road and Gwal Pahari in Gurgaon, and the
          Noida Expressway belt around Sector 135. Choose the one closest to
          most guests: an afternoon party loses energy when half the group
          drives 90 minutes each way.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Bridal Shower Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A farmhouse bridal shower for 20–30 guests typically costs about
          ₹70,000–₹2,00,000 as a planning estimate, depending on the property,
          menu and décor. For comparison, listing site{" "}
          <a
            href="https://www.venuelook.com/bridal-shower-venues-in-delhi"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            VenueLook
          </a>{" "}
          shows most Delhi bridal shower venues (banquets, restaurants, clubs
          and farmhouses) at about ₹600–₹1,400 per plate as of November 2026.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item</th>
                <th className={th}>Typical range (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Farmhouse day slot (6–8 hours)</td>
                <td className={td}>₹20,000–₹70,000</td>
              </tr>
              <tr>
                <td className={td}>Food: brunch, high tea or lunch</td>
                <td className={td}>₹900–₹2,000 per guest</td>
              </tr>
              <tr>
                <td className={td}>
                  Décor: floral arch, backdrop, table styling, balloons
                </td>
                <td className={td}>₹10,000–₹60,000</td>
              </tr>
              <tr>
                <td className={td}>Photographer (3–4 hours)</td>
                <td className={td}>₹10,000–₹30,000</td>
              </tr>
              <tr>
                <td className={td}>Cake and dessert table</td>
                <td className={td}>₹3,000–₹15,000</td>
              </tr>
              <tr>
                <td className={td}>Games, props, sash and favours</td>
                <td className={td}>₹200–₹800 per guest</td>
              </tr>
              <tr>
                <td className={td}>Music: speaker and playlist, or a DJ</td>
                <td className={td}>₹0–₹25,000</td>
              </tr>
              <tr>
                <td className={td}>Heaters, cleaning, staff tips</td>
                <td className={td}>₹3,000–₹12,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample budget for 25 guests
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Farmhouse day slot: ₹35,000</li>
          <li>Brunch with a live chaat counter, 25 × ₹1,400: ₹35,000</li>
          <li>Floral arch, backdrop and table décor: ₹20,000</li>
          <li>Photographer for 3 hours: ₹15,000</li>
          <li>Cake and desserts: ₹6,000</li>
          <li>Games, sash, props and favours, 25 × ₹400: ₹10,000</li>
          <li>Heaters, cleaning and tips: ₹6,000</li>
          <li>
            <strong>Total: about ₹1,27,000</strong>, or roughly ₹5,000 per
            guest (estimate)
          </li>
        </ul>

        <p className="mb-8">
          To bring this down, pick a smaller farmhouse on a Sunday, serve
          high tea instead of lunch and do your own table styling. Our{" "}
          <Link
            href="/blogs/farmhouse-party-decoration-ideas-budget-delhi-ncr"
            className={link}
          >
            budget farmhouse décor ideas
          </Link>{" "}
          cover setups that look good in photos without a big spend.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are Good Bridal Shower Themes for a Farmhouse?
        </h2>

        <p className="mb-8">
          The best themes use what a farmhouse already has, a lawn, daylight
          and space, so you spend on a few strong touches instead of covering
          every wall. These suit winter afternoons in Delhi NCR:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Pastel garden brunch:</strong> a floral arch, long table on
            the lawn, peach and blush flowers, mimosas or mocktails.
          </li>
          <li>
            <strong>Winter picnic:</strong> rugs, low tables, cushions and
            lanterns in the sun, with hot chocolate and a chaat counter.
          </li>
          <li>
            <strong>Desi high tea:</strong> kulhad chai, samosas, mini kachoris
            and a mithai dessert table, styled in marigold and pink.
          </li>
          <li>
            <strong>Spa and self-care:</strong> a nail and mehendi-tattoo
            corner, face masks and robes for a relaxed, calm afternoon.
          </li>
          <li>
            <strong>Bollywood bride:</strong> everyone dresses as a film
            character; quiz and dumb charades with wedding-film titles.
          </li>
          <li>
            <strong>All-white with one colour:</strong> guests in white, the
            bride in her signature colour, for clean group photos.
          </li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Bridal shower games that work for mixed ages
        </h3>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            &quot;How well do you know the bride&quot; quiz, with answers
            collected from the groom in advance.
          </li>
          <li>
            Couple trivia: who said &quot;I love you&quot; first, first date,
            first fight.
          </li>
          <li>Bridal bingo filled in while the bride opens gifts.</li>
          <li>Antakshari with only wedding and romance songs.</li>
          <li>
            Blessings jar: every guest writes one piece of advice or a wish
            for the bride to read after the wedding.
          </li>
          <li>Guess the baby photo of each guest.</li>
        </ol>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Who Hosts and Who Pays for a Bridal Shower?
        </h2>

        <p className="mb-8">
          In most Delhi NCR families the bride&apos;s sisters, cousins or
          closest friends host the shower and split the cost. The bride
          normally does not pay, but she should share her guest list so no
          one important is missed. If the bride&apos;s mother or the
          groom&apos;s family wants to host, a smaller daytime shower with
          elders can work well, with a separate friends-only bachelorette.
        </p>

        <p className="mb-8">
          A practical split: one person handles the venue and food, one
          handles décor and photos, and one runs games and the gift table.
          Collect contributions before paying any advance, so one host is not
          left carrying the bill.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          A Sample Day Plan for a Farmhouse Bridal Shower
        </h2>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Time</th>
                <th className={th}>What happens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>9:30 AM</td>
                <td className={td}>Decorator and caterer arrive; hosts check heaters and sound</td>
              </tr>
              <tr>
                <td className={td}>12:00 PM</td>
                <td className={td}>Guests arrive; welcome drinks and photo booth</td>
              </tr>
              <tr>
                <td className={td}>12:45 PM</td>
                <td className={td}>Bride&apos;s entry with sash and flower crown</td>
              </tr>
              <tr>
                <td className={td}>1:00 PM</td>
                <td className={td}>Brunch or lunch on the lawn</td>
              </tr>
              <tr>
                <td className={td}>2:15 PM</td>
                <td className={td}>Games: quiz, couple trivia, bingo</td>
              </tr>
              <tr>
                <td className={td}>3:30 PM</td>
                <td className={td}>Gift opening and blessings jar; cake cutting</td>
              </tr>
              <tr>
                <td className={td}>4:15 PM</td>
                <td className={td}>Golden-hour photos while the light is soft</td>
              </tr>
              <tr>
                <td className={td}>5:00 PM</td>
                <td className={td}>Chai and snacks indoors as it gets cold; music</td>
              </tr>
              <tr>
                <td className={td}>6:00 PM</td>
                <td className={td}>Guests leave; décor removed and property checked</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Rules Should You Check Before Booking?
        </h2>

        <p className="mb-8">
          Most farmhouse bridal showers are low-risk, but a few rules still
          apply. Amplified music outdoors generally has to stop by 10 PM in
          Delhi NCR, which an afternoon shower avoids. Serving alcohol at a
          private farmhouse event in Delhi needs a P-10 party licence, while
          Haryana and Uttar Pradesh have their own permits; our{" "}
          <Link href="/blogs/cocktail-party-farmhouse-delhi-ncr" className={link}>
            cocktail party at a farmhouse guide
          </Link>{" "}
          explains them. In winter, GRAP pollution stages can limit diesel
          generators, coal tandoors and open fires, so ask the owner what
          runs the heaters and lights.
        </p>

        <p className="mb-6">Questions to ask the farmhouse owner:</p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>What is the price for a 6–8 hour day slot, not a full night?</li>
          <li>Can we bring our own caterer, decorator and cake?</li>
          <li>Are confetti, balloons, candles or smoke props allowed?</li>
          <li>Which indoor room is heated, and are heaters included?</li>
          <li>How many washrooms are close to the seating area?</li>
          <li>How early can the decorator enter, and by when must we leave?</li>
          <li>What does the security deposit cover, and who cleans up?</li>
          <li>Is the pool fenced or covered if children are coming?</li>
        </ul>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          pre-wedding functions such as bridal showers, bachelorettes, haldi,
          mehendi and sangeet, and can shortlist properties that offer
          afternoon day slots at a fair price.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Bridal Shower Checklist
        </h2>

        <ul className="space-y-3 mb-12">
          <li>☐ Wedding date confirmed; shower weekend picked 2–6 weeks before</li>
          <li>☐ Hosts agreed and budget split collected</li>
          <li>☐ Guest list checked with the bride (surprise or not)</li>
          <li>☐ Farmhouse booked for a day slot; terms in writing</li>
          <li>☐ Theme, colour palette and dress code shared with guests</li>
          <li>☐ Caterer, cake and décor confirmed</li>
          <li>☐ Games, props, sash and favours bought</li>
          <li>☐ Groom&apos;s answers collected for the quiz</li>
          <li>☐ Heaters and an indoor backup room confirmed</li>
          <li>☐ Photographer briefed on group and golden-hour shots</li>
          <li>☐ Cab or parking plan shared; route pin sent a day before</li>
          <li>☐ Clean-up and deposit return checked before leaving</li>
        </ul>
      </article>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-black text-4xl font-bold mb-10">
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
            Planning a Bridal Shower?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share the wedding date, guest count, preferred area and budget.
            Effortless Events can help you find a farmhouse with an afternoon
            day slot, a sunny lawn and a warm room for the bride&apos;s
            celebration.
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
