import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Corporate Family Day in Delhi NCR: Venue, Cost & Ideas",

  description:
    "Plan a corporate family day in Delhi NCR: best winter dates, office vs farmhouse venues, per-head cost estimates, activities for every age and a checklist.",

  keywords: [
    "corporate family day Delhi NCR",
    "corporate family day venue Gurgaon",
    "family day event ideas for employees",
    "family day activities for kids and adults",
    "corporate family day cost per person",
    "family day at farmhouse near Delhi",
    "how to plan a family day for employees",
  ],

  alternates: { canonical: "/blogs/corporate-family-day-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Corporate Family Day in Delhi NCR: Venue, Cost & Ideas",
    description:
      "Dates that avoid fog, school breaks and board exams, office vs farmhouse vs resort venues, per-head cost estimates, activities for every age and a family day checklist for HR teams.",
    images: ["/farm-70.webp"],
  },
};

const faqs = [
  {
    q: "What is a corporate family day?",
    a: "A corporate family day is a company event where employees bring their spouses, children and sometimes parents for a day of food, games and entertainment. It can be held at the office or at an outside venue such as a farmhouse, resort or club, and is usually run once a year to build goodwill with employees' families.",
  },
  {
    q: "When is the best time to hold a family day in Delhi NCR?",
    a: "Mid-November to early March is the comfortable outdoor window. The best dates are usually weekends in late January and from mid-February to early March, which avoid Christmas and New Year travel, the early-January school break and the worst of the fog. Families with Class 10 or 12 children may skip dates near board exams, which start on 16 February 2027 for CBSE.",
  },
  {
    q: "How much does a corporate family day cost per person?",
    a: "As a rough planning estimate, a family day at an outside venue in Delhi NCR often costs around ₹1,200–₹2,500 per adult and ₹600–₹1,200 per child for food, venue share and basic games, and ₹2,500–₹4,500+ per adult with a kids' zone, rides, a stage show, transport and photography. Guest count, venue type and entertainment move the number most.",
  },
  {
    q: "What activities can we plan for a corporate family day?",
    a: "Mix age groups: a supervised kids' zone with a bouncy castle, crafts and a magic or puppet show; mixed family games like tug of war, treasure hunts and sack races; quieter options for parents and grandparents such as tambola, a photo booth and live music; and one stage moment such as a family talent round or prize draw.",
  },
  {
    q: "Should a family day be held at the office or an outside venue?",
    a: "Hold it at the office when the main goal is showing families where employees work and numbers are modest. Choose a farmhouse, resort or club when you want open lawns, space for rides and games, parking and a full day out. Many companies combine both with an office tour in the morning and lunch outside, but that adds transport.",
  },
  {
    q: "How many guests should we plan for per employee?",
    a: "A common planning assumption is 2.5–3.5 guests per attending employee, counting the employee, a spouse and one or two children. Collect RSVPs with the number and ages of children so you can size food, the kids' zone and seating, and plan for 10–20% of RSVPs not turning up.",
  },
  {
    q: "Is a farmhouse a good venue for a corporate family day?",
    a: "Yes, for roughly 100–600 guests, if the farmhouse has a large lawn, enough washrooms, parking, a covered fallback area, power backup and a fenced or staffed pool. Book a day slot, ask for a written guest cap and confirm whether outside vendors for rides and catering are allowed.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="corporate-family-day-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-18"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farm-70.webp"
          width={1382}
          height={921}
          fetchPriority="high"
          decoding="async"
          alt="Corporate family day venue in Delhi NCR: a wide farmhouse lawn with a stone path, palms and open space for kids' games and family activities"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Corporate Family Day in Delhi NCR: Venue, Cost, Dates and Ideas
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Corporate Events • Last updated: November 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A corporate family day in Delhi NCR is one of the few company events
          where the guest list includes toddlers, teenagers and grandparents
          as well as employees. That changes everything about the venue, the
          food, the timing and the safety plan. This guide is for HR, admin
          and culture teams planning a family day for winter or early spring
          2027.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            To plan a corporate family day in Delhi NCR, pick a weekend
            between late January and early March, book a venue with a big lawn,
            covered fallback, parking and plenty of washrooms, and run it in
            daylight (about 11 AM to 5 PM). Budget roughly ₹1,200–₹2,500 per
            adult and ₹600–₹1,200 per child as a basic estimate, and plan
            activities for every age group.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Corporate Family Day at a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Item</th>
                <th className="border border-gray-300 p-4 text-left">
                  What to plan for
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Best dates</td>
                <td className="border border-gray-300 p-4">
                  Weekends from late January to early March 2027; mid-November
                  to mid-December also works
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Lead time</td>
                <td className="border border-gray-300 p-4">
                  6–10 weeks for 200–600 guests; earlier for wedding-season
                  weekends
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Guests</td>
                <td className="border border-gray-300 p-4">
                  Plan about 2.5–3.5 guests per attending employee (estimate)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Timing</td>
                <td className="border border-gray-300 p-4">
                  About 11 AM to 5 PM; winter sunset in Delhi is around 5:25
                  PM
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Venue types</td>
                <td className="border border-gray-300 p-4">
                  Office or campus, farmhouse, resort, club or sports ground
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Cost (estimate)
                </td>
                <td className="border border-gray-300 p-4">
                  ₹1,200–₹2,500 per adult and ₹600–₹1,200 per child basic;
                  ₹2,500–₹4,500+ per adult with rides, shows and transport
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Must-haves</td>
                <td className="border border-gray-300 p-4">
                  Kids&apos; zone with supervisors, first aid, lost-child
                  point, nursing room, covered fallback, fenced or staffed
                  pool
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            WHAT IS IT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is a Corporate Family Day and Why Do Companies Hold One?
        </h2>

        <p className="mb-8">
          A corporate family day is a company-hosted day out for employees and
          their families. Unlike an{" "}
          <Link
            href="/blogs/corporate-annual-day-award-night-delhi-ncr"
            className="underline"
          >
            annual day or award night
          </Link>
          , it is not about stage awards or speeches. Unlike a{" "}
          <Link
            href="/blogs/corporate-team-outing-farmhouse-delhi-ncr"
            className="underline"
          >
            team outing
          </Link>
          , it is not only for employees. The aim is simple: let spouses,
          children and parents meet colleagues, understand the company and
          enjoy a relaxed day together.
        </p>

        <p className="mb-8">
          Indian companies have run these for years. Nagarro, which is
          headquartered in Gurugram, described an annual family day held
          since 2015 at its offices in Gurugram, Noida and other cities, with
          a magic show, puppet show, craft corner and photo booth for
          children, in a{" "}
          <a
            href="https://www.nagarro.com/en/news-press-release/nagarro-celebrates-family-day"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            January 2020 press release
          </a>
          . HR publication{" "}
          <a
            href="https://www.hrkatha.com/practice/cipla-celebrates-family-day-for-better-employee-connect/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            HRKatha reported
          </a>{" "}
          that Cipla&apos;s December 2016 family day in Mumbai drew more than
          1,000 families, framed as a way to make families proud of and
          comfortable with the employee&apos;s workplace.
        </p>

        <p className="mb-8">
          The demand is visible in Delhi NCR too. Venue platform{" "}
          <a
            href="https://www.venuelook.com/corporate-family-day-venues-in-gurgaon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            VenueLook
          </a>{" "}
          runs a separate &quot;corporate family day venues&quot; category for
          Gurgaon, with locality pages for areas such as Gwal Pahari, Manesar
          and Udyog Vihar, and similar pages for Noida and Delhi (as seen in
          November 2026).
        </p>

        {/* =====================================================
            WHEN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is the Best Time for a Family Day in Delhi NCR?
        </h2>

        <p className="mb-8">
          The best window is a weekend from late January to early March,
          because the weather is pleasant, the fog has mostly lifted and the
          holiday rush is over. Mid-November to mid-December also works if
          you can avoid busy wedding dates. Here is how the season breaks
          down.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Window
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Fit for a family day
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Watch out for
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Late Nov – mid-Dec 2026
                </td>
                <td className="border border-gray-300 p-4">Good</td>
                <td className="border border-gray-300 p-4">
                  Wedding-season weekends push up venue and vendor rates; air
                  quality can be poor
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Late Dec – mid-Jan
                </td>
                <td className="border border-gray-300 p-4">Weak</td>
                <td className="border border-gray-300 p-4">
                  Christmas and New Year travel, school winter break, cold
                  mornings and dense fog
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Late Jan – early Feb 2027
                </td>
                <td className="border border-gray-300 p-4">Very good</td>
                <td className="border border-gray-300 p-4">
                  Pre-board exams for Class 10 and 12 students; Republic Day
                  weekend travel
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Mid-Feb – early Mar 2027
                </td>
                <td className="border border-gray-300 p-4">Best weather</td>
                <td className="border border-gray-300 p-4">
                  CBSE board exams; financial-year-end workloads
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>School winter break.</strong> Delhi&apos;s Directorate of
            Education set the 2025–26 winter vacation from 1 to 15 January
            2026, according to{" "}
            <a
              href="https://www.outlookindia.com/education/winter-vacation-202526-state-wise-school-holiday-schedule-and-reopening-dates"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Outlook India
            </a>
            . Many families travel then, so attendance drops.
          </li>
          <li>
            <strong>Board exams.</strong> CBSE&apos;s 2027 Class 10 and 12
            exams begin on 16 February 2027, as{" "}
            <a
              href="https://newsonair.gov.in/cbse-releases-2027-board-exam-date-sheet-exams-begin-16th-february/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              All India Radio reported
            </a>
            . Employees with exam-year children may skip February dates, so
            survey your team before you lock a date.
          </li>
          <li>
            <strong>Fog and daylight.</strong> Delhi&apos;s winter sunset is
            around 5:24 PM in early December, per{" "}
            <a
              href="https://www.drikpanchang.com/panchang/sunrise/panchang-sunrise.html?date=08%2F12%2F2026"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Drik Panchang
            </a>
            . Fog can make early-morning and late-evening drives slow, so
            start late morning and finish before dark.
          </li>
        </ul>

        {/* =====================================================
            VENUE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Office, Farmhouse or Resort: Which Family Day Venue Works Best?
        </h2>

        <p className="mb-8">
          Choose the office when the goal is showing families the workplace
          and numbers are small. Choose a farmhouse, resort or club when you
          want open lawns, rides and a full day out. Use this comparison to
          decide.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Venue
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Best for
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Trade-offs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Office or campus
                </td>
                <td className="border border-gray-300 p-4">
                  Office tours, 50–300 guests, low venue cost
                </td>
                <td className="border border-gray-300 p-4">
                  Little open space, building security rules, limited parking
                  on weekends
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Private farmhouse
                </td>
                <td className="border border-gray-300 p-4">
                  100–600 guests, lawns for rides and games, full privacy
                </td>
                <td className="border border-gray-300 p-4">
                  Need to bring in catering, tents and rides; check washrooms
                  and power
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Resort near Delhi
                </td>
                <td className="border border-gray-300 p-4">
                  Packaged day outings, in-house food, indoor fallback
                </td>
                <td className="border border-gray-300 p-4">
                  Shared with other guests; less control over layout and
                  vendors
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Club or sports ground
                </td>
                <td className="border border-gray-300 p-4">
                  Sports-day style family events, very large groups
                </td>
                <td className="border border-gray-300 p-4">
                  Often basic washrooms and little shade; food and décor must
                  be brought in
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Which areas of Delhi NCR suit a family day?
        </h3>

        <p className="mb-8">
          Pick the area closest to where most employees live, not where the
          office is, because families travel from home on a weekend. Gurgaon
          teams often look at Sohna Road, Gwal Pahari and Manesar. Delhi teams
          look at Chattarpur and Bijwasan. Noida teams look at the Noida
          Expressway farm belt and Greater Noida. Keep the drive under about
          an hour for families with small children, and share a map pin and
          parking plan in advance.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What should a family day venue have?
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>A large flat lawn for games, rides and a kids&apos; zone.</li>
          <li>
            A covered or indoor fallback for lunch and the stage if it rains
            or the air quality is bad.
          </li>
          <li>
            Enough clean washrooms (separate ones for children if possible) and
            a quiet room for nursing mothers and napping toddlers.
          </li>
          <li>
            A pool that is fenced, covered or staffed by a lifeguard, or kept
            out of bounds.
          </li>
          <li>
            Parking for one car per family, a drop-off point and a plan for
            buses if you run shuttles.
          </li>
          <li>
            Power backup, step-free paths for grandparents and prams, and a
            nearby hospital you have noted in advance.
          </li>
        </ul>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Corporate Family Day Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A family day at an outside venue in Delhi NCR typically costs around
          ₹1,200–₹2,500 per adult and ₹600–₹1,200 per child for a basic day,
          and ₹2,500–₹4,500+ per adult with rides, a stage show, transport and
          photography. These are planning estimates; venue type, guest count
          and entertainment move the number most.
        </p>

        <p className="mb-8">
          For reference, venue cards on{" "}
          <a
            href="https://www.venuelook.com/corporate-family-day-venues-in-gurgaon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            VenueLook&apos;s Gurgaon family day page
          </a>{" "}
          showed starting per-plate prices from roughly ₹750 to ₹3,000 across
          hotels, banquets, clubs and farms in November 2026. Listed prices
          are a starting point; confirm the menu, taxes and minimum guarantee
          in writing.
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
                  Farmhouse day rent
                </td>
                <td className="border border-gray-300 p-4">
                  Can range from ₹50,000 to ₹3 lakh+ by size, area and date
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Food (welcome drinks, lunch, evening snacks)
                </td>
                <td className="border border-gray-300 p-4">
                  Around ₹800–₹2,000 per adult; ₹400–₹900 per child
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Kids&apos; zone (bouncy castle, crafts, supervisors)
                </td>
                <td className="border border-gray-300 p-4">
                  Often ₹30,000–₹1.5 lakh
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Rides and fun-fair stalls
                </td>
                <td className="border border-gray-300 p-4">
                  Often ₹50,000–₹3 lakh by number of rides
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Anchor, magician or puppet show
                </td>
                <td className="border border-gray-300 p-4">
                  Often ₹15,000–₹75,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Tents, seating, stage and sound
                </td>
                <td className="border border-gray-300 p-4">
                  Often ₹50,000–₹2.5 lakh
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Photography and photo booth
                </td>
                <td className="border border-gray-300 p-4">
                  Often ₹25,000–₹1 lakh
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Shuttle buses
                </td>
                <td className="border border-gray-300 p-4">
                  Often ₹8,000–₹20,000 per bus per day
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  First aid, security and return gifts
                </td>
                <td className="border border-gray-300 p-4">
                  Often ₹20,000–₹1 lakh+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample budget: 120 employees and families at a farmhouse
        </h3>

        <p className="mb-8">
          Assume 120 employees attend with families, about 380 guests in
          total (240 adults and 140 children). A mid-range day with lunch, a
          kids&apos; zone, a few rides, an anchor, photography and two
          shuttle buses could land around ₹7–₹12 lakh, or roughly ₹1,800–₹3,200
          per guest. This is an illustrative estimate, not a quote; the
          biggest swings come from venue rent, rides and the menu.
        </p>

        {/* =====================================================
            ACTIVITIES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Activities Work Best for a Corporate Family Day?
        </h2>

        <p className="mb-8">
          The best family days plan something for every age at the same time,
          so no group is waiting around. Run three zones in parallel and bring
          everyone together for one or two shared moments.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Age group
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Activity ideas
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Toddlers (1–4)</td>
                <td className="border border-gray-300 p-4">
                  Soft-play area, ball pool, bubble show, colouring corner,
                  shaded seating for parents
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Kids (5–12)</td>
                <td className="border border-gray-300 p-4">
                  Bouncy castle, magic or puppet show, tattoo and face
                  painting, treasure hunt, mini sports races
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Teens (13–17)</td>
                <td className="border border-gray-300 p-4">
                  Box cricket, archery, gaming zone, DIY photo booth, quiz
                  rounds
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Adults and families
                </td>
                <td className="border border-gray-300 p-4">
                  Tug of war, three-legged and sack races, couple games,
                  family talent round, cooking contest
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Grandparents
                </td>
                <td className="border border-gray-300 p-4">
                  Tambola, antakshari, live acoustic music, sunny seating with
                  tea and snacks
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Keep the shared moments short: a welcome by a senior leader, a
          family group photo by team and a prize draw before people leave. For
          more ideas for the children&apos;s area, see our guide to a{" "}
          <Link
            href="/blogs/kids-birthday-party-farmhouse-delhi-ncr"
            className="underline"
          >
            kids&apos; party at a farmhouse
          </Link>
          , which covers entertainers, supervision and food for children.
        </p>

        {/* =====================================================
            DAY PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Does a Family Day Run-of-Show Look Like?
        </h2>

        <p className="mb-8">
          A winter family day works best in daylight, from late morning to
          late afternoon. Here is a sample plan you can adapt.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>10:30 AM:</strong> Gates open, registration desk,
            wristbands for children with a parent&apos;s phone number, welcome
            drinks.
          </li>
          <li>
            <strong>11:15 AM:</strong> Short welcome by the anchor and a senior
            leader; kids&apos; zone and games open.
          </li>
          <li>
            <strong>11:30 AM – 1:30 PM:</strong> Parallel zones: kids&apos;
            activities, family races, tambola for elders.
          </li>
          <li>
            <strong>1:30 – 2:45 PM:</strong> Lunch, with a separate kids&apos;
            counter and clearly labelled veg, Jain and allergen items.
          </li>
          <li>
            <strong>3:00 PM:</strong> Magic or puppet show on the main stage.
          </li>
          <li>
            <strong>3:45 PM:</strong> Family talent round or team tug of war
            final, prize draw.
          </li>
          <li>
            <strong>4:30 PM:</strong> Tea and snacks, return gifts, group
            photos.
          </li>
          <li>
            <strong>5:00 PM:</strong> Close and shuttle departures before
            dark.
          </li>
        </ol>

        {/* =====================================================
            SAFETY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Keep Children Safe at a Family Day?
        </h2>

        <p className="mb-8">
          Plan safety as carefully as entertainment, because a single
          incident can undo the goodwill of the whole day. Assign named owners
          for each of these.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            Wristbands with a parent&apos;s mobile number for every child, and
            one clearly marked lost-child point.
          </li>
          <li>
            Trained supervisors in the kids&apos; zone (a common planning
            ratio is one adult for every 8–10 children), plus a rule that
            parents stay on site.
          </li>
          <li>
            Pool fenced, covered or closed, with a lifeguard if it is open.
          </li>
          <li>
            A first-aid desk with a nurse or paramedic and the nearest
            hospital noted in the run-of-show.
          </li>
          <li>
            Ride vendors who show safety checks and keep age and height limits.
          </li>
          <li>
            Ask parents for consent before posting children&apos;s photos on
            company social media.
          </li>
          <li>
            A bad-air plan: in winter, check the AQI and the current GRAP
            stage, which can limit generators, open fires and some vehicles.
            Our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className="underline"
            >
              GRAP rules guide
            </Link>{" "}
            explains what each stage means for events.
          </li>
        </ul>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Who Can Help Plan a Corporate Family Day in Delhi NCR?
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          private parties, weddings and corporate events, including family
          days. Share your date, expected headcount and budget, and Effortless
          Events can shortlist suitable venues and help coordinate catering,
          kids&apos; entertainment and logistics.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Corporate Family Day Checklist
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            8–10 weeks before: set the budget, survey employees on dates and
            pick a weekend.
          </li>
          <li>
            6–8 weeks before: book the venue with a written guest cap, timings
            and vendor policy.
          </li>
          <li>
            5–6 weeks before: book catering, kids&apos; zone, rides, anchor,
            photography and shuttles.
          </li>
          <li>
            4 weeks before: open RSVPs with number and ages of children and
            dietary needs.
          </li>
          <li>
            2 weeks before: finalise the layout, run-of-show, safety owners
            and rain or bad-air fallback.
          </li>
          <li>
            1 week before: share the map pin, parking, shuttle times and what
            to bring (caps, sunscreen, a warm layer).
          </li>
          <li>
            On the day: registration desk, wristbands, first-aid desk,
            lost-child point and a headcount on every shuttle.
          </li>
        </ul>

        <p className="mb-8">
          If you are feeding a large crowd, our{" "}
          <Link
            href="/blogs/farmhouse-party-catering-menu-delhi-ncr"
            className="underline"
          >
            farmhouse catering guide
          </Link>{" "}
          explains quantities per person and buffet vs live counters.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          A good corporate family day in Delhi NCR feels easy for families:
          a short drive, a daylight slot, something for every age and a venue
          with space, shade and clean washrooms. Lock a late-January to
          early-March weekend now, collect RSVPs with children&apos;s ages,
          and plan safety as carefully as the fun.
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
            Book Your Family Day Venue Before the Best Weekends Go
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Tell us your preferred date, headcount and area. Effortless Events
            can shortlist farmhouses and venues across Delhi NCR and help plan
            food, kids&apos; activities and logistics.
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
              Plan Your Family Day
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
