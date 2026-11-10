import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "German Hangar Tent for Wedding in Delhi NCR: Cost & Size",

  description:
    "Booking a German hangar for a farmhouse wedding? Per sq ft rates, tent size for 100–500 guests, hangar vs pagoda, setup days, Delhi fire rules, checklist.",

  keywords: [
    "German hangar tent for wedding Delhi NCR",
    "German hanger tent price per sq ft Delhi",
    "wedding tent size for 300 guests",
    "German hangar vs pagoda tent",
    "enclosed tent for winter wedding at farmhouse",
    "wedding tent fire safety rules Delhi",
  ],

  alternates: { canonical: "/blogs/german-hangar-tent-wedding-delhi-ncr" },

  openGraph: {
    title: "German Hangar Tent for Wedding in Delhi NCR: Cost & Size",
    description:
      "Per sq ft rates, the right tent size for your guest count, hangar vs pagoda vs open lawn, setup days, Delhi Fire Service pandal rules and a booking checklist.",
    images: ["/decoration-3.webp"],
  },
};

const faqs = [
  {
    q: "What is a German hangar tent?",
    a: "A German hangar is a clear-span event structure made of an aluminium frame covered with PVC fabric. It has no poles in the middle, so the whole floor is usable, and it can be closed on all sides with fabric or glass walls, which makes it the usual choice for large covered wedding functions at farmhouses.",
  },
  {
    q: "How much does a German hangar cost for a wedding in Delhi?",
    a: "Delhi listings on IndiaMART quote structure-only rental at about ₹30–32 per sq ft. Once flooring, ceiling lining, side walls, lights and décor are added, a dressed hangar typically works out to roughly ₹100–250 per sq ft, and AC or glass-walled setups can go higher. Always ask what a per sq ft quote includes.",
  },
  {
    q: "What size tent do I need for 200 or 300 guests?",
    a: "Allow about 10–12 sq ft per guest for a buffet with some seating, then add 30–40% for the stage, counters and bar. That gives roughly 3,000 sq ft for 200 guests and 4,500 sq ft for 300 guests, for example a 20 m x 15 m hangar for 200 and a 30 m x 15 m hangar for 300 (estimates).",
  },
  {
    q: "How long does it take to set up a German hangar?",
    a: "A small hangar can go up in about a day, while large wedding structures usually need two to three days to erect and about a day to dismantle, and very large ones longer. Budget for the extra farmhouse days, because many owners charge for set-up and teardown days.",
  },
  {
    q: "Which is better for a wedding: German hangar or pagoda tent?",
    a: "Use a German hangar when you need one large covered hall for 150 or more guests, such as a reception or sangeet. Use pagoda tents for smaller zones like entrances, food counters, bars or lounges. Many farmhouse weddings combine one hangar with a few pagodas.",
  },
  {
    q: "Is a German hangar warm enough for a winter wedding?",
    a: "It is far warmer than an open lawn once the side walls are closed, because it blocks wind, dew and fog. You still need heaters for December and January nights. Keep gas heaters well away from drapes and fabric walls, and keep some ventilation open.",
  },
  {
    q: "Do you need fire safety approval for a wedding tent in Delhi?",
    a: "The Delhi Fire Service publishes safety rules for pandals and temporary structures, covering ceiling height, distance from buildings, exit width, extinguishers and kitchen separation. Its page does not set a size above which a tent needs a separate NOC, so ask your tent vendor and the farmhouse who handles compliance, and follow the DFS rules either way.",
  },
];

const glanceRows = [
  ["What it is", "Clear-span aluminium frame with a PVC roof; no centre poles; walls can be fabric, PVC or glass"],
  ["When you need one", "Covered night functions for about 150+ guests, rain or fog backup, or a farmhouse whose lawn is bigger than its indoor hall"],
  ["Space per guest", "About 10–12 sq ft for buffet with some seating, 12–15 sq ft fully seated; add 30–40% for stage, counters and bar"],
  ["Structure-only rate", "About ₹30–32 per sq ft in Delhi IndiaMART listings (November 2026)"],
  ["Dressed hangar (estimate)", "Roughly ₹100–250 per sq ft with flooring, lining, walls and lights; more with AC, glass walls or heavy décor"],
  ["Setup time", "About 1 day for small structures; 2–3 days for a large wedding hangar plus about 1 day to dismantle"],
  ["Book", "4–8 weeks before a peak muhurat date; earlier for late-November and early-December weekends"],
];

const typeRows = [
  ["German hangar", "One large covered hall: reception, sangeet, dinner", "150–1,000+", "Fully closable; best in rain, wind and fog", "Highest cost; needs 1–3 set-up days and truck access"],
  ["Pagoda tent", "Entrance, bar, food counters, lounge, small pheras", "10–50 per unit", "Covered but small; sides can be added", "Too small for a main hall unless several are joined"],
  ["Shamiana / traditional tent", "Daytime haldi, mehendi, small pujas", "50–300", "Shade and light rain only; cloth can leak", "Centre poles block views; not ideal for winter nights"],
  ["Open lawn with heaters", "Early-December evenings, cocktail hours", "Any", "No cover from dew, fog or rain", "Cheapest, but weather is a gamble"],
  ["Farmhouse indoor hall", "Small functions up to the hall's capacity", "Depends on hall", "Fully protected", "Capacity is fixed; check it fits your list"],
];

const sizeRows = [
  ["100", "1,100–1,200", "1,500–1,700", "15 m x 10 m (approx. 1,600 sq ft)"],
  ["200", "2,200–2,400", "2,900–3,300", "20 m x 15 m (approx. 3,200 sq ft)"],
  ["300", "3,300–3,600", "4,300–5,000", "30 m x 15 m (approx. 4,800 sq ft)"],
  ["500", "5,500–6,000", "7,200–8,400", "40 m x 20 m (approx. 8,600 sq ft)"],
];

const costRows = [
  ["Structure only (frame, PVC roof, basic sides)", "₹30–32 per sq ft (Delhi listings)", "≈ ₹1 lakh"],
  ["Flooring (raised base plus carpet)", "Often quoted separately", "≈ ₹50,000–1.5 lakh"],
  ["Ceiling lining and draping", "Separate line item", "≈ ₹50,000–2 lakh"],
  ["Lighting and chandeliers", "Separate line item", "≈ ₹40,000–1.5 lakh"],
  ["Heaters (winter)", "Per unit per night", "≈ ₹20,000–60,000"],
  ["Power: grid load or compliant generator", "Venue or vendor", "≈ ₹30,000–1 lakh"],
  ["Extra farmhouse days for set-up and teardown", "Varies by owner", "≈ 0–2 days' rent"],
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="german-hangar-tent-wedding-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-10"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-3.webp"
          width={736}
          height={840}
          fetchPriority="high"
          decoding="async"
          alt="German hangar tent for a wedding in Delhi NCR: an enclosed clear-span structure with draped ceiling, chandeliers and dinner tables set for guests"
          className="w-full max-w-3xl mx-auto rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          German Hangar Tent for a Wedding in Delhi NCR: Cost, Size and Rules
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
          A German hangar tent for a wedding in Delhi NCR turns an open
          farmhouse lawn into a covered hall that can hold a few hundred guests,
          whatever the weather. With the 2026 wedding season reopening in late
          November and the coldest, foggiest nights arriving in December and
          January, many families now book one for the reception, sangeet or
          main dinner. This guide explains what a hangar costs, how big it
          needs to be for your guest count, how it compares with pagoda tents
          and open lawns, how many set-up days to plan for, and the Delhi Fire
          Service rules for temporary structures.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            A German hangar is a pole-free aluminium and PVC hall that you rent
            by the square foot. In Delhi, structure-only listings start around
            ₹30–32 per sq ft; a fully dressed hangar typically costs far more.
            Plan about 10–12 sq ft per guest plus 30–40% for the stage and
            counters, and allow two to three days for set-up.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          German Hangar for a Wedding in Delhi NCR: At a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Question</th>
                <th className="border border-gray-300 p-4 text-left">Short answer</th>
              </tr>
            </thead>
            <tbody>
              {glanceRows.map(([q, a]) => (
                <tr key={q}>
                  <td className="border border-gray-300 p-4">{q}</td>
                  <td className="border border-gray-300 p-4">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* =====================================================
            WHAT IT IS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is a German Hangar Tent, and When Do You Need One?
        </h2>

        <p className="mb-8">
          A German hangar (often spelt &quot;hanger&quot; by vendors) is a
          clear-span structure: an aluminium frame with a PVC-coated fabric
          roof and no poles in the middle. Because nothing blocks the floor,
          you can place the stage, dance floor and dining tables anywhere, and
          the sides can be closed with fabric, PVC or glass walls. Suppliers
          rent them in standard spans, commonly 10, 15, 20, 25, 30 and 40
          metres wide, and extend the length in bays to fit the lawn.
        </p>

        <p className="mb-6">You probably need one if any of these is true:</p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Your guest list is bigger than the farmhouse hall.</strong>{" "}
            Most farmhouses have a large lawn but a much smaller indoor space.
          </li>
          <li>
            <strong>It is a winter night function.</strong> From mid-December,
            dew, cold wind and fog make an open lawn uncomfortable after dark.
            Our{" "}
            <Link href="/blogs/winter-wedding-farmhouse-delhi-ncr" className="underline">
              winter wedding guide
            </Link>{" "}
            covers heaters and fog plans in detail.
          </li>
          <li>
            <strong>You want a guaranteed rain backup.</strong> Winter rain is
            rare in Delhi NCR but not unheard of, and a hangar removes the risk.
          </li>
          <li>
            <strong>You want a &quot;ballroom&quot; look on a lawn:</strong>{" "}
            draped ceilings, chandeliers and a closed, styled hall.
          </li>
        </ul>

        {/* =====================================================
            TYPES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          German Hangar vs Pagoda vs Shamiana vs Open Lawn: Which to Choose?
        </h2>

        <p className="mb-8">
          Choose a German hangar for one large covered hall, pagoda tents for
          small zones around it, a shamiana for daytime functions, and an open
          lawn only when the weather is mild. Most farmhouse weddings mix two or
          three of these.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Option</th>
                <th className="border border-gray-300 p-4 text-left">Best for</th>
                <th className="border border-gray-300 p-4 text-left">Guests</th>
                <th className="border border-gray-300 p-4 text-left">Weather cover</th>
                <th className="border border-gray-300 p-4 text-left">Watch out for</th>
              </tr>
            </thead>
            <tbody>
              {typeRows.map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) => (
                    <td key={i} className="border border-gray-300 p-4">
                      {i === 0 ? <strong>{c}</strong> : c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Guest ranges are typical planning figures, not supplier limits.
        </p>

        {/* =====================================================
            SIZE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Size Tent Do You Need for 100, 200, 300 or 500 Guests?
        </h2>

        <p className="mb-8">
          Work out the guest area first, then add space for everything else.
          A 2026 wedding tent pricing guide from{" "}
          <a
            href="https://velvetknot.in/wedding-tent-cost-india/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Velvet Knot
          </a>{" "}
          suggests about 6–8 sq ft per guest for a standing cocktail, 10–12 sq
          ft for a buffet with some seating and 12–15 sq ft for a fully seated
          dinner, plus 30–40% for the stage, counters, bar and lounges. Using
          the buffet figure, which suits most Delhi NCR receptions:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Guests</th>
                <th className="border border-gray-300 p-4 text-left">Guest area (sq ft)</th>
                <th className="border border-gray-300 p-4 text-left">With stage and counters (sq ft)</th>
                <th className="border border-gray-300 p-4 text-left">Example hangar size</th>
              </tr>
            </thead>
            <tbody>
              {sizeRows.map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) => (
                    <td key={i} className="border border-gray-300 p-4">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Estimates by Effortless Events. 1 square metre ≈ 10.76 sq ft. For a
          fully seated dinner, add about 20% more area; for a standing cocktail
          you can use less.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Will the hangar fit on the farmhouse lawn?
        </h3>

        <p className="mb-8">
          Measure before you shortlist. The hangar needs the full footprint
          plus clear space around it for exits, heaters and a service lane.
          The Delhi Fire Service also asks for a margin between a pandal and
          any building (see the rules below), so a lawn that looks big enough
          on paper may only take a narrower span. Ask the farmhouse for a site
          plan with lawn dimensions, and check where trees, light poles and
          overhead wires sit.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a German Hangar Cost for a Wedding in Delhi NCR?
        </h2>

        <p className="mb-8">
          Structure-only rental is listed at about ₹30–32 per sq ft in Delhi,
          but the final bill depends on what is added inside. On IndiaMART,
          New Delhi tent suppliers list{" "}
          <a
            href="https://www.indiamart.com/proddetail/german-hanger-tent-rental-26016672862.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            German hanger tent rental at ₹32 per sq ft
          </a>{" "}
          and{" "}
          <a
            href="https://www.indiamart.com/proddetail/german-structure-hanger-tent-rental-services-26511175873.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            German structure hanger rental at ₹30 per sq ft
          </a>{" "}
          (listings seen in November 2026). Those are starting rates for the
          frame and roof. Guides that price a finished wedding hall quote much
          higher: Velvet Knot puts tent structures at roughly ₹150–500 per sq
          ft depending on structure and lining, and a{" "}
          <a
            href="https://sirajdecorator.com/german-hanger-tent-rental-cost-in-mumbai-complete-pricing-guide-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Mumbai decorator&apos;s 2026 guide
          </a>{" "}
          splits it into about ₹25–80 per sq ft for a basic structure and
          ₹80–200+ with premium interiors. The gap is mostly flooring, lining,
          walls, lighting and AC.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Sample budget: 200-guest winter reception (about 3,200 sq ft)
        </h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Line item</th>
                <th className="border border-gray-300 p-4 text-left">How it is priced</th>
                <th className="border border-gray-300 p-4 text-left">Estimate</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) => (
                    <td key={i} className="border border-gray-300 p-4">{c}</td>
                  ))}
                </tr>
              ))}
              <tr className="bg-gray-50 font-semibold">
                <td className="border border-gray-300 p-4">Indicative total</td>
                <td className="border border-gray-300 p-4">Before stage décor and florals</td>
                <td className="border border-gray-300 p-4">≈ ₹3–8 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          All figures except the listed structure rates are Effortless Events
          planning estimates for late 2026. Muhurat dates, distance from the
          vendor&apos;s yard and the number of days on site move prices up.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          What should a hangar quote include?
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Exact span and length in metres, and the total billed sq ft</li>
          <li>Side walls: fabric, PVC or glass, and whether they open</li>
          <li>Base flooring, carpet and stage platform, or none</li>
          <li>Ceiling lining and draping, lighting and chandeliers</li>
          <li>Number of days billed, including set-up and dismantling</li>
          <li>Transport, labour and night-work charges</li>
          <li>Who brings extinguishers, emergency lights and exit signs</li>
          <li>Damage terms for the lawn and the refund policy for cancelled dates</li>
        </ul>

        {/* =====================================================
            SETUP TIME
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Long Does a German Hangar Take to Set Up?
        </h2>

        <p className="mb-8">
          Plan for two to three days to put up a large wedding hangar and about
          a day to take it down. Velvet Knot gives that range for large
          hangars, and a{" "}
          <a
            href="https://germanhangertent.com/german-tent-on-rent-in-mumbai-sizes-cost-setup-guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Mumbai hangar supplier
          </a>{" "}
          says small structures can go up in a day while big ones take three
          to seven. Then décor, lights and sound need their own time inside.
        </p>

        <p className="mb-8">
          This is the hidden cost many families miss: the farmhouse has to be
          yours for those days too. Ask the owner whether set-up and teardown
          days are charged at full rent, a reduced rate or free, and whether
          another booking sits on the day before or after yours. On back-to-back
          muhurat weekends, some farmhouses simply cannot give you the extra
          days, which decides the question for you.
        </p>

        {/* =====================================================
            FIRE RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Fire Safety Rules Apply to a Wedding Tent in Delhi?
        </h2>

        <p className="mb-8">
          The{" "}
          <a
            href="https://dfs.delhi.gov.in/dfs/temporary-structures"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Delhi Fire Service page on temporary structures
          </a>{" "}
          sets out precautions for pandals and tents. In summary:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Ceiling height of at least 3 metres.</li>
          <li>No synthetic materials or synthetic ropes in the structure.</li>
          <li>
            A clear margin from any building or wall: 4.5 metres on the DFS web
            page, and 3 metres in its{" "}
            <a
              href="https://dfs.delhi.gov.in/sites/default/files/generic_multiple_files/precautions2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              older precautions PDF
            </a>
            . Plan for the larger figure.
          </li>
          <li>No structure under a live electrical line, and at least 15 metres from substations or other hazardous sites.</li>
          <li>
            Wide exits on all sides: at least 2.5 metres on the web page (1.5
            metres in the PDF).
          </li>
          <li>Standby emergency lighting, and extinguishers or water buckets inside and outside.</li>
          <li>No straw, wood shavings or other combustibles stored inside or nearby.</li>
          <li>No fireworks or open flames close to the structure.</li>
          <li>The kitchen separated from the tent by non-combustible walls such as GI sheets.</li>
        </ul>

        <p className="mb-8">
          The page does not say above what size a tent needs its own NOC, so
          ask the farmhouse and the tent vendor who is responsible for
          compliance before you sign. The same page also lists fire tender
          cover for private functions, subject to availability and a daily
          charge. For winter, add your own rules: gas heaters well clear of
          drapes and walls, cylinders kept outside the hall, some ventilation
          open, and electrical work with proper breakers and no loose joints.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Does GRAP affect a hangar?
        </h3>

        <p className="mb-8">
          Not the tent itself, but what powers and heats it. Diesel generator
          rules now apply from GRAP Stage I, wood fires and coal angithis are
          out, and at higher stages vendor trucks entering Delhi can be
          restricted. Our{" "}
          <Link href="/blogs/grap-rules-weddings-parties-delhi-ncr" className="underline">
            GRAP guide for weddings
          </Link>{" "}
          explains each stage. Confirm grid load or a compliant generator, and
          heaters that run on gas or electricity, in writing.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          German Hangar Booking Checklist
        </h2>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Questions for the farmhouse owner
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>What are the exact lawn dimensions, and can we see a site plan?</li>
          <li>Is a hangar allowed on the lawn, and how can it be anchored?</li>
          <li>Can a long truck reach the lawn with the aluminium beams?</li>
          <li>Are set-up and teardown days charged, and are they free on our dates?</li>
          <li>What is the sanctioned power load, and is backup GRAP-compliant?</li>
          <li>Who pays for lawn damage, and what counts as damage?</li>
        </ul>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Countdown
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li><strong>8–12 weeks out:</strong> fix the date and guest count; book a farmhouse that can fit the hangar and give you set-up days.</li>
          <li><strong>4–8 weeks out:</strong> get two or three itemised hangar quotes; lock span, walls, flooring and days.</li>
          <li><strong>2–3 weeks out:</strong> share the floor plan (stage, dance floor, buffet, exits, heater spots) with the tent, décor and catering teams.</li>
          <li><strong>1 week out:</strong> check the GRAP stage and forecast; confirm power, heaters and fire safety kit.</li>
          <li><strong>Set-up days:</strong> walk the structure before décor starts; check exits, lights and that the kitchen is outside or walled off.</li>
        </ul>

        <p className="mb-8">
          For how the tent fits into your overall wedding spend, see our{" "}
          <Link href="/blogs/farmhouse-wedding-cost-delhi-ncr" className="underline">
            farmhouse wedding cost guide
          </Link>
          , and for planning a covered dance night, our{" "}
          <Link href="/blogs/sangeet-night-farmhouse-delhi-ncr" className="underline">
            sangeet at a farmhouse guide
          </Link>
          .
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Effortless Events Can Help
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          weddings, private parties, family celebrations and corporate events.
          For a hangar wedding, we can help you find a farmhouse whose lawn,
          access and dates suit the structure, compare itemised tent quotes,
          and coordinate the tent, heaters, décor and caterer on the day.
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
            Find a Farmhouse That Fits Your Hangar
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count, preferred area and budget.
            Effortless Events can help you shortlist farmhouses with the lawn
            space, access and set-up days a German hangar needs across Delhi
            NCR.
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
