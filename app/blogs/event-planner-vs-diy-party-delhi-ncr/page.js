import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Event Planner vs DIY Party in Delhi NCR: Which to Choose?",

  description:
    "Should you hire an event planner or DIY your party in Delhi NCR? Compare fees, time, guest-count rules and occasions, plus a checklist to decide.",

  keywords: [
    "event planner vs DIY party Delhi NCR",
    "is it worth hiring an event planner for a birthday party",
    "party planner cost Delhi",
    "how much do event planners charge in India",
    "day-of coordinator for party Delhi",
    "DIY farmhouse party planning",
    "birthday party planner Delhi NCR",
  ],

  alternates: { canonical: "/blogs/event-planner-vs-diy-party-delhi-ncr" },

  openGraph: {
    title: "Event Planner vs DIY Party in Delhi NCR: Which to Choose?",

    description:
      "A decision guide for Delhi NCR hosts: DIY vs day-of coordinator vs full planner, fee estimates, occasion-by-occasion advice and questions to ask before hiring.",

    images: ["/event-management.jpg"],
  },
};

const faqs = [
  {
    q: "Is it worth hiring an event planner for a birthday party?",
    a: "It is worth it when the party has more than about 60–80 guests, several vendors, a farmhouse venue or a surprise element, or when the hosts have little time in the two to three weeks before. For a small home or restaurant birthday with one caterer and a cake, planning it yourself is usually enough.",
  },
  {
    q: "How much does an event planner charge in India?",
    a: "Planners in India commonly charge a flat project fee, a per-guest rate or a percentage of the event budget; one Indian small-business guide puts the percentage model at about 15–20% of total event cost. For a private party in Delhi NCR, a rough estimate is ₹10,000–₹30,000 for day-of coordination and ₹40,000–₹1.5 lakh or more for full planning.",
  },
  {
    q: "What is the difference between an event planner and a day-of coordinator?",
    a: "A full planner works with you for weeks: budget, venue search, vendor booking, design and the timeline. A day-of coordinator steps in near the end, takes over your plan and vendor list, and runs the event on the day so the hosts can be with guests.",
  },
  {
    q: "Can I plan a party myself without an event planner?",
    a: "Yes. Most small private parties in Delhi NCR are planned by the hosts. The key is to start four to six weeks early, keep the vendor count low, get everything in writing, and give one trusted friend or relative the job of handling vendors on the day.",
  },
  {
    q: "How far in advance should I hire a party planner?",
    a: "For a November–December party in Delhi NCR, hire a planner six to eight weeks ahead, because the same planners, decorators and DJs are also working wedding functions from late November. For a weekday or January date, three to five weeks is usually enough.",
  },
  {
    q: "Do event planners get discounts from vendors?",
    a: "Often, yes. Planners who book the same caterers, decorators and venues repeatedly can get better rates or extras, which can offset part of their fee. Ask the planner to show vendor quotes openly and to say whether they earn any commission from vendors.",
  },
  {
    q: "Should I book a farmhouse directly or through a planner?",
    a: "You can do either. Booking directly can be cheaper when you already know a trusted owner. Booking through a planner or venue-discovery service helps when you need a shortlist fast, want rules checked before paying, or are worried about fake listings.",
  },
];

const glanceRows = [
  ["DIY (you plan and run it)", "Up to ~50", "15–25 hours over 3–6 weeks", "₹0 extra", "Small house parties, kitty lunches, close-family dinners"],
  ["DIY + day-of coordinator", "40–150", "10–20 hours", "~₹10,000–₹30,000", "Hosts who can plan but want to enjoy the day"],
  ["Partial planning", "60–200", "5–10 hours", "~₹25,000–₹75,000", "Busy hosts who want vendors booked but decisions kept"],
  ["Full event planner", "100+ or complex", "2–5 hours (approvals)", "~₹40,000–₹1.5 lakh+ or a % of budget", "Milestone parties, wedding functions, surprises, out-of-town hosts"],
];

const occasionRows = [
  ["Kitty party or friends' lunch (15–30)", "DIY", "One caterer and a few games; little can go wrong"],
  ["Kids' birthday at a farmhouse (30–80)", "DIY + day-of help", "Children need watching; one adult should own pool, gate and activity safety"],
  ["Anniversary or 60th birthday (60–150)", "Partial or full planner", "Older guests, a surprise reveal and photos all need someone in charge"],
  ["New Year's Eve or bonfire night (25–60)", "DIY with written vendor terms", "Simple format, but confirm music cut-off, heaters and overnight rules"],
  ["Sangeet, mehendi or reception (150+)", "Full planner", "Many vendors, stage, sound and family logistics running at once"],
  ["Office Christmas or team party (50–200)", "Planner or coordinator", "HR rarely has time; a single owner avoids budget creep"],
];

const feeRows = [
  ["Flat project fee", "One agreed fee for a defined scope", "Clear budget; most common in India"],
  ["Percentage of budget", "A share of the total event spend", "Common for business events; ask what counts in the total"],
  ["Per-guest rate", "A fixed amount per guest", "Small dinners and day events"],
  ["Vendor commission", "Planner is paid by vendors instead of you", "Least transparent; ask directly"],
  ["Hourly", "Billed by the hour", "Rare for private parties in India"],
];

const cell = "border border-gray-300 p-4";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="event-planner-vs-diy-party-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-21"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/event-management.jpg"
          alt="Event planner vs DIY party in Delhi NCR: a decoration crew on ladders lifting a pink canopy into a floral ceiling during event setup"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Event Planner vs DIY Party in Delhi NCR: Which Should You Choose?
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Party Planning • Last updated: October 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          Choosing between an event planner and a DIY party in Delhi NCR comes
          down to three things: how many guests are coming, how many vendors
          you need to manage, and how much time you have before the date. This
          guide is for hosts in Delhi, Gurgaon, Noida and Faridabad planning a
          birthday, anniversary, family function, festive party or office
          get-together this winter, and wondering whether paying for help is
          worth it.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            DIY works well for parties under about 50 guests with one or two
            vendors. Between roughly 50 and 150 guests, plan it yourself but
            hire a day-of coordinator (estimated ₹10,000–₹30,000). Above 150
            guests, at a farmhouse with many vendors, or for a surprise or
            wedding function, a full event planner usually saves more stress,
            time and money than it costs.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Event Planner vs DIY: At a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Option</th>
                <th className={`${cell} text-left`}>Guest count it suits</th>
                <th className={`${cell} text-left`}>Your time</th>
                <th className={`${cell} text-left`}>Planner fee*</th>
                <th className={`${cell} text-left`}>Best for</th>
              </tr>
            </thead>
            <tbody>
              {glanceRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => (
                    <td key={i} className={cell}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-10">
          *Fees and hours are indicative planning estimates based on typical
          Delhi NCR private-party scopes, not fixed rates. Planner fees are
          separate from venue, food, décor and entertainment costs, and vary
          with date, scope and inclusions; check whether quotes include GST.
        </p>

        {/* =====================================================
            DECISION
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Should You Hire an Event Planner or DIY Your Party?
        </h2>

        <p className="mb-6">
          Hire help if two or more of these are true. If none or only one is
          true, a DIY party is usually fine.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Guest count above about 80:</strong> seating, parking,
            food counters and arrival waves get hard to manage alone.
          </li>
          <li>
            <strong>Four or more vendors:</strong> caterer, decorator, DJ,
            photographer, bar and tent each need briefing, timings and
            payment follow-ups.
          </li>
          <li>
            <strong>A farmhouse or open venue:</strong> unlike a banquet, you
            often arrange power backup, heaters, washrooms, lighting and
            cleaning yourself.
          </li>
          <li>
            <strong>Less than three weeks of free time:</strong> if work or
            travel fills the weeks before the party, the follow-ups slip.
          </li>
          <li>
            <strong>A surprise, a reveal or elderly guests:</strong> someone
            has to keep the guest of honour away, cue the moment and look
            after older relatives.
          </li>
          <li>
            <strong>Peak dates:</strong> November–December Saturdays clash
            with wedding season, so good vendors are booked early and a
            planner&apos;s contacts help.
          </li>
          <li>
            <strong>You want to be a guest at your own party:</strong> the
            most common reason hosts give for hiring help.
          </li>
        </ul>

        <p className="mb-8">
          The honest trade-off: DIY saves the planner&apos;s fee but costs
          your time and, often, some money lost to rushed vendor choices.
          A planner costs a fee but can win back part of it through vendor
          rates, fewer last-minute fixes and a tighter budget.
        </p>

        {/* =====================================================
            WHAT A PLANNER DOES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Does an Event Planner Do for a Private Party?
        </h2>

        <p className="mb-6">
          A party planner turns your idea, guest count and budget into a
          booked venue, a set of confirmed vendors and a minute-by-minute
          plan, and then runs the day. For a typical Delhi NCR farmhouse
          party, that includes:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>Budget and brief:</strong> splitting the budget across
            venue, food, décor, music and photos before anything is booked.
          </li>
          <li>
            <strong>Venue shortlist and checks:</strong> finding farmhouses in
            the right area and confirming music timing, guest limits,
            outside-vendor and alcohol rules before you pay.
          </li>
          <li>
            <strong>Vendor booking:</strong> comparing quotes and booking the
            caterer, decorator, DJ or band, photographer and bar service.
          </li>
          <li>
            <strong>Design and layout:</strong> stage, seating, lighting,
            dance floor, food counters and a heater plan for winter nights.
          </li>
          <li>
            <strong>Timeline and run-of-show:</strong> vendor arrival times,
            guest arrival, cake or toast, dinner and the music cut-off.
          </li>
          <li>
            <strong>On-the-day management:</strong> setup checks, vendor
            coordination, handling delays, and wrap-up and deposit return.
          </li>
        </ol>

        <p className="mb-8">
          If you plan to do these steps yourself, our{" "}
          <Link
            href="/blogs/how-to-plan-farmhouse-party-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            guide to planning a farmhouse party in Delhi NCR
          </Link>{" "}
          walks through each one in order.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Party Planner Cost in Delhi NCR?
        </h2>

        <p className="mb-6">
          For a private party in Delhi NCR, a rough estimate is ₹10,000–₹30,000
          for day-of coordination, ₹25,000–₹75,000 for partial planning and
          ₹40,000–₹1.5 lakh or more for full planning, on top of what you
          spend on the venue and vendors. The fee depends on guest count,
          date, number of vendors and how much design work is involved.
        </p>

        <p className="mb-6">
          How the fee is structured matters as much as the amount. An{" "}
          <a
            href="https://okcredit.in/blog/methods-to-charge-for-services-for-an-event-planner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Indian small-business guide to event-planner pricing
          </a>{" "}
          describes flat fees as the most common model, with percentage
          commissions of about 15–20% of total event cost used mainly for
          business events. The common models are:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Fee model</th>
                <th className={`${cell} text-left`}>How it works</th>
                <th className={`${cell} text-left`}>What to watch</th>
              </tr>
            </thead>
            <tbody>
              {feeRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => (
                    <td key={i} className={cell}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          For smaller birthday parties, many cities have budget planners who
          sell fixed packages. As a reference point from another metro, a{" "}
          <a
            href="https://knowledge.digirake.com/events/birthday-party/birthday-party-planners-bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            November 2025 roundup of Bangalore birthday planners
          </a>{" "}
          quoted rough package ranges from about ₹3,000 for a simple home
          party to ₹35,000 or more for larger events. These packages usually
          bundle décor and entertainment rather than full planning, so
          compare what is included, not just the price.
        </p>

        <p className="mb-8">
          For a full breakdown of what planners charge for corporate and
          larger events, see{" "}
          <Link
            href="/blogs/how-much-does-event-management-cost-delhi-ncr"
            className="text-black underline font-semibold"
          >
            how much event management costs in Delhi NCR
          </Link>
          .
        </p>

        {/* =====================================================
            DAY-OF COORDINATOR
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is a Day-Of Coordinator, and Do You Need One?
        </h2>

        <p className="mb-6">
          A day-of coordinator runs your party on the day using the plan and
          vendors you have already booked. It is the middle path for hosts who
          enjoy planning but do not want to spend the party on the phone with
          the decorator or caterer.
        </p>

        <p className="mb-6">A good day-of coordinator will typically:</p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Take over your vendor list and confirm timings a week before.</li>
          <li>Be on site for setup and check décor, sound, power and heaters.</li>
          <li>Handle late vendors, food timing and guest-flow problems.</li>
          <li>Cue key moments: cake, speeches, surprise entry, first dance.</li>
          <li>Oversee pack-up, count rentals and protect your security deposit.</li>
        </ul>

        <p className="mb-8">
          You likely need one for a 50–150 guest farmhouse party where the
          hosts are also the guests of honour&apos;s family, such as a
          parent&apos;s 60th birthday or an anniversary. If you skip it,
          give the job to one reliable friend or cousin, not to &ldquo;whoever
          is free&rdquo;.
        </p>

        {/* =====================================================
            WHEN DIY WINS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is a DIY Party the Better Choice?
        </h2>

        <p className="mb-6">
          A DIY party is the better choice when the format is simple and the
          hosts have time. It works best when:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>The guest list is under about 50 and mostly close friends or family.</li>
          <li>The venue provides food or has a tie-up caterer, so there is one main vendor.</li>
          <li>The format is a lunch, bonfire night or house-party style evening, not a staged event.</li>
          <li>You have four to six weeks and enjoy comparing vendors.</li>
          <li>The budget is tight and every rupee should go to food and venue.</li>
        </ul>

        <p className="mb-8">
          Real Delhi hosts weigh this too. In a{" "}
          <a
            href="https://www.teamblind.com/post/need-recommendations-for-moms-60th-birthday-in-style-in-india-thqdrgkf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            forum thread about a mother&apos;s 60th birthday for about 100
            guests
          </a>
          , replies suggested renting a farmhouse near Chattarpur directly
          and hiring the caterer and bartender separately, while one reply
          estimated the total at ₹4–5 lakh rather than the ₹2–3 lakh first
          planned. That is the DIY route in practice: it can work well, but
          the budget needs room for everything a planner would normally
          list.
        </p>

        {/* =====================================================
            BY OCCASION
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Planner or DIY: Which Works Best for Each Occasion?
        </h2>

        <p className="mb-6">
          Here is a practical recommendation by occasion for Delhi NCR
          farmhouse and private parties:
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Occasion (typical guests)</th>
                <th className={`${cell} text-left`}>Recommended</th>
                <th className={`${cell} text-left`}>Why</th>
              </tr>
            </thead>
            <tbody>
              {occasionRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => (
                    <td key={i} className={cell}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* =====================================================
            HOW TO DIY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How to DIY a Farmhouse Party Without the Stress
        </h2>

        <p className="mb-6">
          If you decide to plan it yourself, these steps cover what a planner
          would otherwise handle:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>Fix the budget split first.</strong> Decide roughly what
            share goes to venue, food, décor, music and photos before you
            visit any farmhouse.
          </li>
          <li>
            <strong>Check the venue rules before paying.</strong> Music
            cut-off, guest and overnight limits, outside caterer and
            decorator policy, alcohol permits and the deposit terms. Our{" "}
            <Link
              href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
              className="text-black underline font-semibold"
            >
              farmhouse rules checklist
            </Link>{" "}
            lists the questions to ask.
          </li>
          <li>
            <strong>Keep vendors to four or fewer.</strong> Choose a caterer
            who also handles crockery and service staff, and a decorator who
            also does lighting.
          </li>
          <li>
            <strong>Put everything in writing.</strong> Arrival time, setup
            area, inclusions, overtime rates and payment schedule for every
            vendor, on WhatsApp at minimum.
          </li>
          <li>
            <strong>Write a one-page run-of-show.</strong> Share it with all
            vendors and your helper a week before.
          </li>
          <li>
            <strong>Appoint a day-of captain.</strong> One person, not the
            host, who answers vendor calls on the day.
          </li>
          <li>
            <strong>Plan for winter.</strong> For November–February evenings,
            arrange heaters, a covered area and enough lighting for the drive
            out.
          </li>
        </ol>

        {/* =====================================================
            QUESTIONS TO ASK
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask Before Hiring a Party Planner
        </h2>

        <p className="mb-6">
          If you do hire help, ask these before you sign or pay an advance:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Is the fee flat, a percentage or per guest, and what exactly is included?</li>
          <li>Do you earn commission from any vendor or venue you suggest?</li>
          <li>Can I see vendor quotes directly and pay vendors myself?</li>
          <li>Who from your team will be on site on the day, and from what time?</li>
          <li>How many other events are you handling on the same date?</li>
          <li>Can you show photos or contacts from similar parties you have run?</li>
          <li>What is the cancellation and refund policy for your fee?</li>
        </ul>

        <p className="mb-8">
          The answer to the same-date question matters most in Delhi NCR&apos;s
          November–December wedding season, when many planners run several
          events on one Saturday.
        </p>

        {/* =====================================================
            TIMING
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Decide: Now or Later?
        </h2>

        <p className="mb-8">
          Decide now if your party falls between late November and early
          January. Delhi NCR&apos;s wedding season reopens around 20 November
          2026, and the same farmhouses, decorators, DJs and planners also
          serve sangeets, receptions, office Christmas parties and New
          Year&apos;s Eve. As an estimate, book a planner six to eight weeks
          ahead for a November–December Saturday, and three to five weeks
          ahead for a weekday or a January date. A DIY host needs roughly the
          same lead time for the venue and the main vendors.
        </p>

        {/* =====================================================
            ENTITY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan Your Party With Effortless Events
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
          people book farmhouses, villas and venues for private parties,
          wedding functions and corporate events.
        </p>

        <p className="mb-8">
          Whether you want a farmhouse shortlist for a DIY party or a team to
          handle vendors and the day itself, Effortless Events can help you
          check venue rules before you pay and keep the plan within budget.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          There is no single right answer. Small, simple parties are easy to
          plan yourself; large, multi-vendor or emotional milestone events
          usually run better with a planner or at least a day-of coordinator.
          Count your guests and vendors, be honest about your free time, and
          decide early if your date falls in the winter rush.
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
            Planning a Party This Winter?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count, area and budget. Effortless Events
            can help you find the right farmhouse or plan the whole party with
            you.
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
              Get Planning Help
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
