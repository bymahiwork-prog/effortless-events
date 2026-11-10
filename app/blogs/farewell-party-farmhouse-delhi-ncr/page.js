import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Farewell Party at a Farmhouse in Delhi NCR: Cost & Ideas",

  description:
    "Planning a school, college or office farewell at a farmhouse in Delhi NCR? Best dates for 2027, cost per person, ideas, games, rules and a checklist.",

  keywords: [
    "farewell party at farmhouse Delhi NCR",
    "farewell party venue Delhi",
    "class 12 farewell party ideas",
    "college farewell party venue Gurgaon",
    "office farewell party for colleague",
    "farewell party cost per person Delhi",
    "farewell party games and activities",
  ],

  alternates: { canonical: "/blogs/farewell-party-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Farewell Party at a Farmhouse in Delhi NCR: Cost & Ideas",
    description:
      "School, college and office farewells at a Delhi NCR farmhouse: when to book for 2027, cost per person, a sample plan, games, safety rules and a checklist.",
    images: ["/hp-3.webp"],
  },
};

const faqs = [
  {
    q: "Where can we celebrate a farewell party in Delhi NCR?",
    a: "The usual options are a restaurant or café with a private area, a banquet hall, a hotel room, or a farmhouse booked for the day or evening. A farmhouse suits groups of 30–150 that want the whole space to themselves, an open lawn for games and photos, and a fixed slot. Chattarpur, Gurgaon, Noida and Faridabad all have farmhouses that take farewell bookings.",
  },
  {
    q: "How much does a farewell party cost per person in Delhi NCR?",
    a: "As a rough estimate, a farmhouse farewell often works out to about ₹800–1,800 per student for a school farewell without alcohol, ₹1,000–2,500 per head for a college batch, and ₹1,500–3,500 per head for an office farewell with a bar. Guest count, the menu and the day of the week change the number most.",
  },
  {
    q: "When are school farewell parties held in Delhi?",
    a: "Class 12 farewells are usually held in late January or early February, after pre-boards and before board exams. CBSE's 2027 board exams begin on 16 February 2027, so most school farewells will fall in the last week of January and the first week of February. Book a venue in December if you want a weekend slot.",
  },
  {
    q: "How do you organise a farewell party for seniors?",
    a: "Form a small committee, agree a budget per student, and get permission from the school and parents if the party is off campus. Then book the venue with timings in writing, arrange buses, choose food, music and a short programme of speeches and titles, and assign teachers or parent volunteers to supervise.",
  },
  {
    q: "What games can we play at a farewell party?",
    a: "Popular farewell games include senior titles and sashes, a memory slideshow, 'guess the teacher or colleague' from childhood photos, a message wall, dumb charades, musical chairs, a treasure hunt across the farmhouse lawn and a short dance-off. Keep games to 45–60 minutes so there is time for food, photos and goodbyes.",
  },
  {
    q: "Can alcohol be served at a farewell party at a farmhouse?",
    a: "Not at a school farewell: students are under the legal drinking age, which is 25 in Delhi and 21 in Haryana and Uttar Pradesh. At an office or college farewell where all drinkers are of age, the venue still needs the right permit, such as a P-10 in Delhi, and the bar should check IDs.",
  },
  {
    q: "Can Effortless Events help plan a farewell party?",
    a: "Yes. Effortless Events can shortlist farmhouses in Delhi NCR that fit your group size, budget and timing, check the owner's rules on music, alcohol and guest limits, and coordinate food, a DJ, décor, photography and transport for a school, college or office farewell.",
  },
];

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="farewell-party-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-10"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/hp-3.webp"
          width={1024}
          height={682}
          fetchPriority="high"
          decoding="async"
          alt="Farewell party at a farmhouse in Delhi NCR: a rooftop lounge with white seating, cushions and glowing paper lanterns at sunset over the trees"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Farewell Party at a Farmhouse in Delhi NCR: Cost, Ideas and Planning
          Guide
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
          A farewell party at a farmhouse in Delhi NCR gives a school batch,
          college class or office team something a restaurant cannot: the whole
          place to yourselves, a lawn for games and photos, and enough time to
          say goodbye properly. This guide covers all three kinds of farewell,
          with the dates that matter for 2027, cost estimates per person, a
          sample plan, game ideas and the rules to check before you pay an
          advance.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            To plan a farewell party at a farmhouse in Delhi NCR, book a day or
            evening slot 4–6 weeks ahead, fix a per-person budget (about
            ₹800–1,800 for a school farewell and ₹1,500–3,500 for an office
            farewell with a bar, as estimates), keep loud music within the 10
            PM cut-off, arrange transport, and keep alcohol away from anyone
            under the legal drinking age.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Farewell Party in Delhi NCR at a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Farewell type
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Usual timing
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Group size
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Best slot
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Cost per head (estimate)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  School (Class 12)
                </td>
                <td className="border border-gray-300 p-4">
                  Late January to early February
                </td>
                <td className="border border-gray-300 p-4">60–250 students</td>
                <td className="border border-gray-300 p-4">
                  Day slot, about 11 AM–5 PM
                </td>
                <td className="border border-gray-300 p-4">₹800–1,800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">College batch</td>
                <td className="border border-gray-300 p-4">
                  March–May, before final exams
                </td>
                <td className="border border-gray-300 p-4">40–200 students</td>
                <td className="border border-gray-300 p-4">
                  Afternoon into evening, 2–10 PM
                </td>
                <td className="border border-gray-300 p-4">₹1,000–2,500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Office or colleague
                </td>
                <td className="border border-gray-300 p-4">
                  Any time; often a Friday evening
                </td>
                <td className="border border-gray-300 p-4">15–80 colleagues</td>
                <td className="border border-gray-300 p-4">
                  Evening, 6–10 PM
                </td>
                <td className="border border-gray-300 p-4">₹1,500–3,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The ranges above are planning estimates for food, venue share, music
          and simple décor. They are not quotes: weekend dates, premium
          properties, a live act or an open bar push the number up, while a
          weekday slot and a simple menu bring it down.
        </p>

        {/* =====================================================
            WHEN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Are Farewell Parties Held in Delhi NCR?
        </h2>

        <p className="mb-8">
          School farewells for Class 12 usually happen in the last week of
          January or the first week of February. That window sits after
          pre-boards and practicals and before the board exams. CBSE has
          announced that its 2027 Class 10 and 12 board exams begin on 16
          February 2027 (
          <a
            href="https://newsonair.gov.in/cbse-releases-2027-board-exam-date-sheet-exams-begin-16th-february/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            News on AIR
          </a>
          ), so the most-wanted farewell dates are the Saturdays of 23 and 30
          January and 6 February 2027. Those dates also overlap with the
          January–February wedding season, when many farmhouses are held for
          weddings, so committees that book in December get the best choice.
        </p>

        <p className="mb-8">
          College farewells usually run from March to May, before final
          semester exams, depending on each university&apos;s calendar. Office
          farewells happen whenever a colleague leaves, and a team send-off
          for a senior manager or a long-serving colleague is often planned as
          a Friday evening or a Saturday lunch.
        </p>

        <h3 className="text-black text-2xl font-bold mt-8 mb-4">
          How Far Ahead Should You Book?
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>School farewell (late Jan–early Feb):</strong> book in
            December; weekend dates compete with wedding bookings.
          </li>
          <li>
            <strong>College farewell (Mar–May):</strong> book 4–6 weeks ahead;
            Holi weekend and long weekends fill first.
          </li>
          <li>
            <strong>Office farewell:</strong> 1–3 weeks is often enough for a
            weekday evening for 20–40 people.
          </li>
        </ul>

        {/* =====================================================
            WHY FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Choose a Farmhouse for a Farewell Party?
        </h2>

        <p className="mb-8">
          A farmhouse works for a farewell because the group gets the whole
          property instead of a corner of a restaurant. For a school batch,
          that means teachers can see every student in one fenced space. For a
          college class, it means room for a stage, a dance floor and a lawn
          for photos. For an office team, it means a private evening where
          speeches can be heard.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Venue
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Good for
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Watch out for
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Farmhouse</td>
                <td className="border border-gray-300 p-4">
                  Private space, lawn games, photos, flexible food and décor
                </td>
                <td className="border border-gray-300 p-4">
                  Travel time, transport, music cut-off, winter evenings
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Restaurant or café
                </td>
                <td className="border border-gray-300 p-4">
                  Small groups, short budget, no setup
                </td>
                <td className="border border-gray-300 p-4">
                  Shared space, limited games, fixed menus
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Banquet hall</td>
                <td className="border border-gray-300 p-4">
                  Large batches, indoor stage, central locations
                </td>
                <td className="border border-gray-300 p-4">
                  Little outdoor space, can feel formal
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  School or office premises
                </td>
                <td className="border border-gray-300 p-4">
                  Lowest cost, easy supervision
                </td>
                <td className="border border-gray-300 p-4">
                  Feels routine, tighter rules on music and food
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          If you are unsure whether to book for a few hours or overnight, our
          guide to{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            day-use vs overnight farmhouse bookings
          </Link>{" "}
          explains how slots and pricing usually work. For school farewells, a
          day slot is almost always the right choice.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Farewell Party at a Farmhouse Cost?
        </h2>

        <p className="mb-8">
          A farmhouse farewell in Delhi NCR typically costs about ₹800–3,500
          per head, as an estimate, depending on the type of farewell and
          whether a bar is involved. Farmhouses price in two ways: a flat rent
          for the slot, with food and services added, or a per-plate rate that
          bundles the venue with catering. Larger school batches usually get a
          better deal on per-plate packages; small office groups often do
          better with a flat-rent farmhouse and outside catering, if the owner
          allows it.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Line item
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Typical range (estimate)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Farmhouse rent, day or evening slot
                </td>
                <td className="border border-gray-300 p-4">
                  ₹15,000–60,000 for 30–100 guests; more for large lawns and
                  weekends
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Food (snacks plus buffet)
                </td>
                <td className="border border-gray-300 p-4">
                  ₹500–1,200 per plate veg; ₹700–1,600 with non-veg
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">DJ and sound</td>
                <td className="border border-gray-300 p-4">
                  ₹10,000–35,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Décor, stage backdrop, photo booth
                </td>
                <td className="border border-gray-300 p-4">
                  ₹10,000–50,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Photographer or videographer
                </td>
                <td className="border border-gray-300 p-4">
                  ₹8,000–30,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Sashes, titles, mementos
                </td>
                <td className="border border-gray-300 p-4">
                  ₹100–400 per person
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Buses or tempo travellers
                </td>
                <td className="border border-gray-300 p-4">
                  ₹5,000–15,000 per vehicle for a local round trip
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Bar (office or college, of-age guests only)
                </td>
                <td className="border border-gray-300 p-4">
                  Liquor plus bartender and permit; see our alcohol guide
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-bold mt-8 mb-4">
          Sample Budgets
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>School farewell, 120 students, day slot:</strong> roughly
            ₹1.2–2 lakh in total (about ₹1,000–1,700 per student) for venue,
            veg lunch and snacks, DJ, simple décor, sashes, a photographer and
            two buses.
          </li>
          <li>
            <strong>College farewell, 80 students, afternoon to evening:</strong>{" "}
            roughly ₹1–1.8 lakh (about ₹1,250–2,250 per head) with a stage,
            DJ, photo booth and dinner.
          </li>
          <li>
            <strong>Office farewell, 30 colleagues, Friday evening:</strong>{" "}
            roughly ₹55,000–1 lakh (about ₹1,800–3,300 per head) with a bar,
            dinner and a small gift for the person leaving.
          </li>
        </ul>

        <p className="mb-8">
          If drinks are part of an office or college farewell, our guide on{" "}
          <Link
            href="/blogs/how-much-alcohol-for-party-delhi-ncr"
            className="text-black underline font-semibold"
          >
            how much alcohol to buy for a party
          </Link>{" "}
          has bottle counts by guest number and the permit rules for Delhi,
          Haryana and Uttar Pradesh.
        </p>

        {/* =====================================================
            SCHOOL FAREWELL
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Organise a School Farewell at a Farmhouse?
        </h2>

        <p className="mb-8">
          A school farewell off campus needs permission first and fun second.
          Most Class 12 students are under 18, so the school, the parents and
          the venue all need to agree on the plan before any money is
          collected.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>Get written approval</strong> from the school and a
            consent form from each parent, with the date, venue, timings and
            transport plan.
          </li>
          <li>
            <strong>Form a committee</strong> of 5–8 Class 11 students, one or
            two teachers and a parent representative to handle money and
            bookings.
          </li>
          <li>
            <strong>Fix the per-student contribution</strong> and keep a
            shared record of every payment and expense.
          </li>
          <li>
            <strong>Book a day slot</strong> so everyone is home before dark;
            January evenings in Delhi NCR are cold and often foggy.
          </li>
          <li>
            <strong>Make it a no-alcohol, no-smoking event</strong> and write
            that into the booking with the farmhouse owner.
          </li>
          <li>
            <strong>Use school-arranged buses</strong> rather than private
            cars or bikes, with a headcount at pick-up and drop.
          </li>
          <li>
            <strong>Assign supervisors</strong>: roughly one teacher or parent
            volunteer for every 15–20 students, with someone posted at the
            pool or water features if the farmhouse has them.
          </li>
        </ol>

        {/* =====================================================
            COLLEGE + OFFICE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Is a College or Office Farewell Different?
        </h2>

        <p className="mb-8">
          College and office farewells give the group more freedom, but the
          same basics apply: confirm the guest limit, the music cut-off and
          the alcohol rules with the owner before you pay. A college batch can
          run later into the evening and often wants a stage for performances
          and a proper DJ set. If you are choosing between a DJ and live
          musicians, our{" "}
          <Link
            href="/blogs/dj-or-live-band-farmhouse-party-delhi-ncr"
            className="text-black underline font-semibold"
          >
            DJ vs live band guide
          </Link>{" "}
          compares cost and setup.
        </p>

        <p className="mb-8">
          An office farewell is usually smaller and more personal. The centre
          of the evening is the person leaving: a few short speeches, a
          slideshow of team moments, a group gift and a good dinner. Keep the
          speeches before the bar opens properly, and give the guest of honour
          a quiet moment to reply.
        </p>

        {/* =====================================================
            SAMPLE PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Farewell Party Plan for a Farmhouse
        </h2>

        <p className="mb-8">
          This is a day-slot plan for a school or college farewell. For an
          office farewell, shift everything to start at 6 PM and end by 10 PM.
        </p>

        <div className="overflow-x-auto mb-12">
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
                <td className="border border-gray-300 p-4">10:30 AM</td>
                <td className="border border-gray-300 p-4">
                  Buses arrive, headcount, welcome drinks and photo booth
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">11:30 AM</td>
                <td className="border border-gray-300 p-4">
                  Welcome speech, juniors&apos; performance, teachers&apos;
                  messages
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">12:30 PM</td>
                <td className="border border-gray-300 p-4">
                  Lawn games and the memory slideshow
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">1:30 PM</td>
                <td className="border border-gray-300 p-4">Lunch buffet</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">2:30 PM</td>
                <td className="border border-gray-300 p-4">
                  Senior titles and sashes, Mr and Ms Farewell
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">3:15 PM</td>
                <td className="border border-gray-300 p-4">
                  DJ and dance floor
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">4:30 PM</td>
                <td className="border border-gray-300 p-4">
                  Group photo, snacks and tea
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">5:00 PM</td>
                <td className="border border-gray-300 p-4">
                  Headcount and buses leave before dark
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            IDEAS AND GAMES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are Good Farewell Party Ideas and Games?
        </h2>

        <p className="mb-8">
          The best farewell ideas give everyone a moment and a memory. A
          farmhouse helps because you can spread activities across the lawn,
          the patio and an indoor room instead of doing everything on one
          stage.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Senior titles and sashes:</strong> a fun title for every
            student or colleague, chosen by juniors or the team.
          </li>
          <li>
            <strong>Memory slideshow:</strong> old class or team photos
            collected over WhatsApp a week before.
          </li>
          <li>
            <strong>Message wall or slam book:</strong> a board or a large
            canvas everyone signs, given to the batch or the person leaving.
          </li>
          <li>
            <strong>Guess who:</strong> baby photos of teachers or colleagues
            projected on screen.
          </li>
          <li>
            <strong>Lawn games:</strong> tug of war, three-legged race, a
            treasure hunt or cricket, which a farmhouse lawn makes easy.
          </li>
          <li>
            <strong>Dumb charades and musical chairs:</strong> simple, loud
            and work for any group size.
          </li>
          <li>
            <strong>Theme or dress code:</strong> sarees and suits, retro
            Bollywood or all-white make the group photos look planned.
          </li>
          <li>
            <strong>Time capsule:</strong> notes to open at the first reunion.
          </li>
        </ul>

        <p className="mb-8">
          For more group activities that suit a farmhouse, see our list of{" "}
          <Link
            href="/blogs/best-farmhouse-activities-for-groups"
            className="text-black underline font-semibold"
          >
            farmhouse activities for groups
          </Link>
          .
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Rules Apply to a Farewell Party at a Farmhouse?
        </h2>

        <p className="mb-8">
          Three rules cause most problems at farewell parties: music timing,
          alcohol and guest limits. Loudspeakers in open areas are generally
          not allowed between 10 PM and 6 AM under India&apos;s noise rules,
          so plan the DJ to finish by 10 PM. The legal drinking age is 25 in
          Delhi and 21 in Haryana (Gurgaon, Faridabad, Manesar) and Uttar
          Pradesh (Noida, Greater Noida, Ghaziabad), which rules out alcohol
          at any school farewell. Where an office or college farewell does
          serve drinks, the venue needs the right permit: in Delhi, that is a
          P-10 for each event.
        </p>

        <p className="mb-8">
          In winter, also check how the current GRAP stage affects generators
          and open fires, and keep an indoor or covered space ready. Before
          paying an advance, run through our{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse rules checklist
          </Link>{" "}
          and get the guest limit, timings, deposit and cancellation terms in
          writing.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farewell Party Checklist
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Date fixed around exams and pre-boards (school: late Jan–early Feb 2027)</li>
          <li>School approval and parent consent forms collected (school farewells)</li>
          <li>Per-person contribution agreed, with a shared expense record</li>
          <li>Farmhouse booked with slot, guest limit, music cut-off and deposit in writing</li>
          <li>No-alcohol rule agreed for school farewells; permit and ID checks for others</li>
          <li>Menu fixed, with veg and Jain options and enough water</li>
          <li>DJ, sound and a microphone for speeches</li>
          <li>Stage backdrop, photo booth and sashes or mementos</li>
          <li>Buses or cabs booked, with pick-up and drop headcounts</li>
          <li>Supervisors assigned and someone posted near any pool</li>
          <li>First-aid kit and a list of emergency contacts</li>
          <li>Winter plan: heaters or an indoor space, and a fog plan for the drive home</li>
        </ul>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan Your Farewell Party With Effortless Events
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
          people book farmhouses, villas and venues for farewell parties,
          private celebrations and corporate events.
        </p>

        <p className="mb-8">
          For a farewell, that means shortlisting farmhouses that fit your
          group size, budget and slot, checking the owner&apos;s music,
          alcohol and guest rules before you pay, and coordinating food, a DJ,
          décor, photography and transport so the committee can enjoy the day
          too.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          A good farewell is remembered for the moments, not the spend: the
          titles, the slideshow, the group photo and a chance to say goodbye
          properly. Book early, keep the plan safe and simple, and let the
          farmhouse lawn do the rest. With school farewells clustered in late
          January and wedding season taking many weekends, December is the
          time to lock in a date.
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
            Find a Farmhouse for Your Farewell
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, area, group size and budget. Effortless Events can
            help you find the right farmhouse and plan a farewell your batch or
            team will remember.
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
              Plan Your Farewell Party
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
