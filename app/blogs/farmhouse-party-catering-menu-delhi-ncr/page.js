import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Farmhouse Party Catering in Delhi NCR: Menu, Quantity & Cost",

  description:
    "Planning farmhouse party catering in Delhi NCR? Per-plate cost estimates, food per guest, buffet vs live counters vs BBQ and a caterer checklist.",

  keywords: [
    "farmhouse party catering menu Delhi NCR",
    "party catering cost per plate Delhi",
    "how much food per person for a party",
    "live counter ideas for party",
    "buffet vs live counters vs BBQ",
    "can I bring an outside caterer to a farmhouse",
    "winter party menu ideas Delhi",
  ],

  alternates: { canonical: "/blogs/farmhouse-party-catering-menu-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Farmhouse Party Catering in Delhi NCR: Menu, Quantity & Cost",

    description:
      "Per-plate cost estimates, food quantities per guest, buffet vs live counters vs BBQ, staff counts, winter menu ideas and a caterer checklist for Delhi NCR farmhouse parties.",

    images: ["/catering.webp"],
  },
};

const faqs = [
  {
    q: "How much does party catering cost per plate in Delhi NCR?",
    a: "As a rough planning estimate, party catering in Delhi NCR often costs about ₹500–₹800 per plate for a simple vegetarian buffet, ₹800–₹1,300 for a standard menu with starters and two or three live counters, and ₹1,300–₹2,000 or more for premium or non-vegetarian spreads. Headcount, date, menu and whether staff and crockery are included change the price most.",
  },
  {
    q: "How much food do I need per person for a party?",
    a: "A common caterer rule of thumb for an Indian buffet dinner is about 6–8 starter pieces per guest when dinner follows, two or three main dishes, one dal, one rice, breads and one or two desserts. Plan more starters, about 10–14 pieces, if the party is snacks-only.",
  },
  {
    q: "Can I bring my own caterer to a farmhouse?",
    a: "Many farmhouses in Delhi NCR allow outside caterers, but some work only with their own kitchen or a list of approved vendors, and some charge a kitchen or outside-vendor fee. Confirm the catering policy, kitchen access, gas and power arrangements and any extra charges in writing before you pay the advance.",
  },
  {
    q: "How many live counters do I need for 100 guests?",
    a: "For 100 guests, two or three live counters are usually enough alongside a regular buffet, for example one chaat counter, one tandoor or grill counter and one dessert counter such as jalebi with rabri. As a rough guide, plan about one live counter for every 40–60 guests so queues stay short.",
  },
  {
    q: "How many waiters are needed for a party of 100?",
    a: "For a buffet, caterers commonly plan about one server for every 20–25 guests, so four or five people for 100 guests, plus one cook per live counter and someone for clearing and dishwashing. Passed starters and seated service need more staff, often one server for every 10–15 guests.",
  },
  {
    q: "How far in advance should I book a caterer for a party?",
    a: "Book a caterer three to six weeks ahead for a regular weekend party, and six to eight weeks ahead for dates between late November and early January, when wedding season, office Christmas parties and New Year's Eve keep good caterers busy. Share the final headcount three to five days before the party.",
  },
  {
    q: "Can a caterer use a coal tandoor at a party in Delhi?",
    a: "It is safer to ask for a gas or electric tandoor. In December 2025 the Delhi Pollution Control Committee banned coal and firewood in tandoors at hotels, restaurants and open eateries, and similar curbs apply under the Graded Response Action Plan (GRAP) in winter. Confirm the fuel your caterer will use and what the farmhouse allows.",
  },
];

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="farmhouse-party-catering-menu-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-14"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/catering.webp"
          width={1200}
          height={1799}
          fetchPriority="high"
          decoding="async"
          alt="Farmhouse party catering in Delhi NCR: a buffet and live food counters set up for guests"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Farmhouse Party Catering in Delhi NCR: Menu, Food Quantity, Cost Per
          Plate and a Caterer Checklist
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Planning Guides • Last updated: October 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          Farmhouse party catering in Delhi NCR is the part of the plan guests
          remember most and the part hosts most often get wrong: too little
          food at 9 PM, a cold buffet on a December night, or a caterer who
          finds out on the day that the farmhouse kitchen has no gas. From
          Diwali card parties to wedding functions, office Christmas parties
          and New Year&apos;s Eve, late October to January is the busiest
          catering season of the year, so the menu decisions you make now
          decide how the night goes.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a farmhouse party in Delhi NCR, confirm the farmhouse&apos;s
            catering policy first, then choose a format: buffet, live
            counters, BBQ or a mix. Budget roughly ₹800–₹1,300 per plate for a
            standard menu (estimate), plan 6–8 starter pieces per guest before
            dinner, use one server per 20–25 guests, and book the caterer 3–8
            weeks ahead.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Party Catering: At a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Decision
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What works for most Delhi NCR farmhouse parties
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">First check</td>
                <td className="border border-gray-300 p-4">
                  Outside caterer allowed? Kitchen, gas, water and power
                  available? Any vendor fee?
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Cost per plate*</td>
                <td className="border border-gray-300 p-4">
                  ₹500–₹800 basic veg; ₹800–₹1,300 standard; ₹1,300–₹2,000+
                  premium
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Starters</td>
                <td className="border border-gray-300 p-4">
                  6–8 pieces per guest before dinner; 10–14 if snacks-only
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Live counters</td>
                <td className="border border-gray-300 p-4">
                  About 1 per 40–60 guests; 2–3 for a party of 100
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Staff</td>
                <td className="border border-gray-300 p-4">
                  1 server per 20–25 guests (buffet) + 1 cook per live counter
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Book the caterer</td>
                <td className="border border-gray-300 p-4">
                  3–6 weeks ahead; 6–8 weeks for late Nov–early Jan dates
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Final headcount</td>
                <td className="border border-gray-300 p-4">
                  3–5 days before; most caterers charge on the guaranteed
                  number
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-10">
          *All prices and quantities in this guide are indicative planning
          estimates and common caterer rules of thumb for Delhi NCR, not fixed
          rates. Actual figures depend on the caterer, menu, date, headcount
          and what is included.
        </p>

        {/* =====================================================
            POLICY FIRST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can You Bring Your Own Caterer to a Farmhouse?
        </h2>

        <p className="mb-8">
          Often yes, but not always, so ask before you pay anything. Farmhouses
          in Delhi NCR usually follow one of three catering models, and each
          changes your menu and budget:
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Model</th>
                <th className="border border-gray-300 p-4 text-left">
                  How it works
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What to ask
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Open (outside caterer allowed)
                </td>
                <td className="border border-gray-300 p-4">
                  You hire any caterer; the farmhouse provides the space
                </td>
                <td className="border border-gray-300 p-4">
                  Kitchen or cooking area, gas, water, power backup, waste
                  disposal, any outside-vendor fee
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Approved vendor list
                </td>
                <td className="border border-gray-300 p-4">
                  You choose from caterers the property already works with
                </td>
                <td className="border border-gray-300 p-4">
                  Sample menus and per-plate rates from at least two of them
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  In-house catering only
                </td>
                <td className="border border-gray-300 p-4">
                  Venue and food sold as one package
                </td>
                <td className="border border-gray-300 p-4">
                  Minimum guarantee, extra-plate rate, tasting, what is not
                  included (bar, live counters, cake)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Get the answer in writing alongside music timings, alcohol rules and
          the security deposit. Our guide to{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse rules to check before booking
          </Link>{" "}
          lists the full set of questions to ask the owner.
        </p>

        {/* =====================================================
            FORMAT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Buffet, Live Counters or BBQ: Which Is Best for a Farmhouse Party?
        </h2>

        <p className="mb-8">
          For most farmhouse parties of 30–150 guests, a buffet dinner with two
          or three live counters works best: the buffet keeps cost and timing
          predictable, and the counters add hot, freshly made food and a bit
          of theatre. Pure BBQ suits smaller, informal groups. Here is how the
          formats compare:
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Format
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Best for
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Watch-outs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Buffet</td>
                <td className="border border-gray-300 p-4">
                  Family functions, Diwali parties, 50–300 guests, mixed ages
                </td>
                <td className="border border-gray-300 p-4">
                  Food cools fast outdoors in winter; ask for chafing dishes
                  and a covered serving area
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Live counters</td>
                <td className="border border-gray-300 p-4">
                  Winter evenings, cocktail-style parties, sangeets, office
                  parties
                </td>
                <td className="border border-gray-300 p-4">
                  Each counter needs a cook, space, gas or power; queues if
                  too few
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">BBQ / grill</td>
                <td className="border border-gray-300 p-4">
                  Groups of 15–50, pool and bonfire nights, bachelorettes
                </td>
                <td className="border border-gray-300 p-4">
                  Slow for large groups; check fuel and fire rules in winter
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Passed starters + plated or family-style dinner
                </td>
                <td className="border border-gray-300 p-4">
                  Small premium dinners,{" "}
                  <Link
                    href="/blogs/anniversary-party-farmhouse-delhi-ncr"
                    className="text-black underline font-semibold"
                  >
                    anniversary parties
                  </Link>
                  , intimate weddings
                </td>
                <td className="border border-gray-300 p-4">
                  Needs more staff (often 1 server per 10–15 guests)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Snacks-only / high tea
                </td>
                <td className="border border-gray-300 p-4">
                  Afternoon kids&apos; parties, day outings, short gatherings
                </td>
                <td className="border border-gray-300 p-4">
                  Guests treat it as dinner if it runs past 7 PM; plan more
                  pieces per head
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            QUANTITY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Food Do You Need Per Person for a Party?
        </h2>

        <p className="mb-8">
          For an Indian buffet dinner, plan about 6–8 starter pieces per guest,
          two or three main dishes, one dal, one rice, breads and one or two
          desserts. These are common caterer rules of thumb, so use them to sense-check
          a quote rather than as exact recipes:
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Course</th>
                <th className="border border-gray-300 p-4 text-left">
                  Per adult guest (estimate)
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  For 100 guests (estimate)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Starters (dinner follows)
                </td>
                <td className="border border-gray-300 p-4">
                  6–8 pieces across 3–5 varieties
                </td>
                <td className="border border-gray-300 p-4">600–800 pieces</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Starters (snacks-only party)
                </td>
                <td className="border border-gray-300 p-4">
                  10–14 pieces across 5–7 varieties
                </td>
                <td className="border border-gray-300 p-4">
                  1,000–1,400 pieces
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Main dishes (paneer, sabzi, meat)
                </td>
                <td className="border border-gray-300 p-4">
                  About 100–150 g of each of 2–3 dishes
                </td>
                <td className="border border-gray-300 p-4">
                  10–15 kg per dish
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Dal</td>
                <td className="border border-gray-300 p-4">About 100–120 g</td>
                <td className="border border-gray-300 p-4">10–12 kg</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Rice / biryani
                </td>
                <td className="border border-gray-300 p-4">
                  About 80–120 g (more if biryani is the main)
                </td>
                <td className="border border-gray-300 p-4">8–12 kg cooked</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Breads</td>
                <td className="border border-gray-300 p-4">2–3 pieces</td>
                <td className="border border-gray-300 p-4">200–300 pieces</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Desserts</td>
                <td className="border border-gray-300 p-4">
                  1–2 servings (about 80–120 g)
                </td>
                <td className="border border-gray-300 p-4">
                  100–200 servings
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Soft drinks, water, chai
                </td>
                <td className="border border-gray-300 p-4">
                  3–4 drinks over an evening, plus water
                </td>
                <td className="border border-gray-300 p-4">
                  300–400 servings
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What changes the quantities
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Long parties eat more:</strong> a 2 PM–10 PM party needs a
            high-tea round as well as dinner.
          </li>
          <li>
            <strong>Children:</strong> count children under about 10 as half a
            plate, and ask whether the caterer has a child rate.
          </li>
          <li>
            <strong>Alcohol:</strong> guests who drink eat more starters and
            eat dinner later, so increase starters by a couple of pieces.
          </li>
          <li>
            <strong>Winter:</strong> soups, hot snacks and chai go faster on
            cold nights; cold salads and ice cream go slower.
          </li>
          <li>
            <strong>Buffer:</strong> tell the caterer the confirmed number and
            agree an extra-plate rate, rather than ordering 20% more food you
            pay for regardless.
          </li>
        </ul>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does Farmhouse Party Catering Cost Per Plate in Delhi NCR?
        </h2>

        <p className="mb-8">
          Party catering in Delhi NCR typically costs about ₹500–₹2,000 or
          more per plate (estimate), with most standard farmhouse party menus
          landing around ₹800–₹1,300. The menu tier, non-vegetarian dishes,
          number of live counters and the date matter most:
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Menu tier
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Typically includes
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Per plate*
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  100 guests*
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Basic</td>
                <td className="border border-gray-300 p-4">
                  Veg; 2–3 starters, 2 mains, dal, rice, breads, 1 dessert
                </td>
                <td className="border border-gray-300 p-4">₹500–₹800</td>
                <td className="border border-gray-300 p-4">
                  ₹50,000–₹80,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Standard</td>
                <td className="border border-gray-300 p-4">
                  Veg or mixed; 4–5 starters, 3 mains, 2 live counters, 2
                  desserts, mocktails
                </td>
                <td className="border border-gray-300 p-4">₹800–₹1,300</td>
                <td className="border border-gray-300 p-4">
                  ₹80,000–₹1,30,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Premium</td>
                <td className="border border-gray-300 p-4">
                  Non-veg and veg; passed starters, 3–4 live counters,
                  international dishes, dessert station
                </td>
                <td className="border border-gray-300 p-4">₹1,300–₹2,000+</td>
                <td className="border border-gray-300 p-4">₹1,30,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Before comparing quotes, check what each one includes. Two quotes at
          the same per-plate price can differ by tens of thousands of rupees
          once you add the extras below. For venue, décor and DJ costs to go
          with your food budget, see{" "}
          <Link
            href="/blogs/how-much-does-a-farmhouse-party-cost-in-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            how much a farmhouse party costs in Delhi NCR
          </Link>
          .
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Hidden catering costs to ask about
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Service staff, chefs for live counters and their travel</li>
          <li>Crockery, cutlery, chafing dishes, tables and buffet décor</li>
          <li>Gas cylinders, generator or extra power for counters and heaters</li>
          <li>Transport of food and equipment to the farmhouse</li>
          <li>Minimum plate guarantee and the rate for extra plates</li>
          <li>Overtime if dinner runs late</li>
          <li>Taxes: ask whether the per-plate price includes GST</li>
          <li>Waste removal and clean-up of the cooking area</li>
        </ul>

        {/* =====================================================
            WINTER MENU
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Serve at a Winter Farmhouse Party?
        </h2>

        <p className="mb-8">
          At a winter farmhouse party in Delhi NCR, serve hot food from live
          counters, keep the main buffet under cover, and add a hot drinks
          station; evenings from December to January are cold and often foggy,
          so anything left out on an open lawn cools within minutes. Live
          counter ideas that work well from November to February:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Soup and shorba counter:</strong> served as guests arrive.
          </li>
          <li>
            <strong>Chaat counter:</strong> aloo tikki, palak patta chaat,
            golgappe.
          </li>
          <li>
            <strong>Tandoor or grill counter:</strong> paneer tikka, mushroom,
            kebabs, made on a gas or electric tandoor.
          </li>
          <li>
            <strong>Punjabi winter counter:</strong> sarson ka saag with makki
            ki roti, made fresh.
          </li>
          <li>
            <strong>Pasta or stir-fry counter:</strong> a good option for
            children and guests who skip spicy food.
          </li>
          <li>
            <strong>Hot dessert counter:</strong> jalebi with rabri, gajar ka
            halwa, moong dal halwa, gulab jamun.
          </li>
          <li>
            <strong>Chai and coffee station:</strong> masala chai, kulhad
            coffee and hot chocolate, running all evening.
          </li>
        </ul>

        <p className="mb-8">
          If the party includes a bonfire, plan the BBQ and hot drinks around
          it. Our guide to a{" "}
          <Link
            href="/blogs/winter-bonfire-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            winter bonfire party at a farmhouse
          </Link>{" "}
          covers heaters, fire rules and seating.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Tandoors, fuel and winter pollution rules
        </h3>

        <p className="mb-8">
          Ask your caterer what fuel the tandoor and grill will use. In
          December 2025 the Delhi Pollution Control Committee ordered hotels,
          restaurants and open eateries to stop using coal and firewood in
          tandoors and switch to electric or gas models,{" "}
          <a
            href="https://www.theweek.in/wire-updates/national/2025/12/09/des63-dl-coal-tandoor-ban.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline"
          >
            as PTI reported
          </a>
          , building on a measure already listed under GRAP. For the 2026
          season, the revised GRAP schedule also moves rules on diesel
          generator sets to Stage I,{" "}
          <a
            href="https://sundayguardianlive.com/india/grap-rules-from-october-1-2026-no-pucc-no-fuel-new-vehicle-curbs-bs-iv-entry-restrictions-morewhat-changes-in-delhi-ncr-heres-all-you-need-to-know-296399/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline"
          >
            according to the Sunday Guardian
          </a>
          . In practice, that means asking for gas or electric tandoors, and
          checking whether the farmhouse has grid power for counters and
          heaters rather than relying on a generator.
        </p>

        {/* =====================================================
            STAFF
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Waiters and Live Counters Do You Need?
        </h2>

        <p className="mb-8">
          For a buffet, plan about one server for every 20–25 guests and one
          cook per live counter, plus at least one person for clearing and
          dishwashing. Use this as a starting point when you check a
          caterer&apos;s staffing plan (rule-of-thumb estimates):
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Guests</th>
                <th className="border border-gray-300 p-4 text-left">
                  Live counters
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Servers (buffet)
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Starter varieties
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">25–40</td>
                <td className="border border-gray-300 p-4">1 (often BBQ)</td>
                <td className="border border-gray-300 p-4">2</td>
                <td className="border border-gray-300 p-4">3–4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">50–75</td>
                <td className="border border-gray-300 p-4">1–2</td>
                <td className="border border-gray-300 p-4">2–3</td>
                <td className="border border-gray-300 p-4">4–5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">100</td>
                <td className="border border-gray-300 p-4">2–3</td>
                <td className="border border-gray-300 p-4">4–5</td>
                <td className="border border-gray-300 p-4">5–6</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">150–200</td>
                <td className="border border-gray-300 p-4">3–4</td>
                <td className="border border-gray-300 p-4">6–10</td>
                <td className="border border-gray-300 p-4">6–8</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            CHOOSING A CATERER
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Choose a Caterer for a Farmhouse Party?
        </h2>

        <p className="mb-8">
          Choose a caterer who has cooked at farmhouses before, can show a
          valid food-safety registration, gives an itemised written quote and
          agrees to a tasting. Steps that help:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>Shortlist three caterers</strong> and ask each for a
            sample menu at your budget for your headcount.
          </li>
          <li>
            <strong>Check food-safety registration.</strong> Caterers are
            among the food businesses that need FSSAI registration or a
            licence (basic registration covers turnover under ₹12 lakh, as{" "}
            <a
              href="https://www.cleartax.in/s/fssai-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline"
            >
              ClearTax summarises
            </a>
            ). Ask for the number and keep it with the booking.
          </li>
          <li>
            <strong>Ask about outdoor experience:</strong> have they worked at
            farmhouses, and do they bring their own cooking setup, gas and
            water?
          </li>
          <li>
            <strong>Do a tasting</strong> of the dishes you plan to serve,
            especially the live counters.
          </li>
          <li>
            <strong>Get an itemised quote</strong> with per-plate rate,
            minimum guarantee, extra-plate rate, staff count, inclusions and
            GST.
          </li>
          <li>
            <strong>Agree the advance and cancellation terms</strong> in
            writing, and pay to a business account where possible.
          </li>
          <li>
            <strong>Share a site plan</strong> showing where the buffet,
            counters and cooking area will go, and the farmhouse contact for
            the day.
          </li>
        </ol>

        <p className="mb-8">
          Plan dietary needs early: label vegetarian, Jain and non-vegetarian
          dishes, keep vegetarian and non-vegetarian counters apart for family
          events, and ask guests about allergies such as nuts or gluten in the
          RSVP.
        </p>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Book a Caterer for a Party in Delhi NCR?
        </h2>

        <p className="mb-8">
          Book a caterer 3–6 weeks ahead for a regular weekend, and 6–8 weeks
          ahead for dates from late November to early January. The 2026
          wedding season reopens on 20 November, and Diwali (Sunday 8
          November), office Christmas parties and New Year&apos;s Eve all fall
          in the same stretch, so experienced outdoor caterers get booked
          early. A simple countdown:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>6–8 weeks out:</strong> confirm the farmhouse catering
            policy; shortlist caterers.
          </li>
          <li>
            <strong>4–6 weeks out:</strong> tasting, final menu, itemised
            quote, advance paid.
          </li>
          <li>
            <strong>2 weeks out:</strong> share the site plan; confirm live
            counters, staff, crockery, gas and power.
          </li>
          <li>
            <strong>3–5 days out:</strong> give the guaranteed headcount and
            the serving times.
          </li>
          <li>
            <strong>On the day:</strong> caterer arrives 3–4 hours before
            guests; check the setup, labels and hot-holding before the first
            arrivals.
          </li>
        </ul>

        <p className="mb-8">
          Hosting a festive get-together? Our{" "}
          <Link
            href="/blogs/diwali-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            Diwali party at a farmhouse guide
          </Link>{" "}
          has a full menu, timeline and checklist for card parties.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Party Catering Checklist
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Farmhouse catering policy and any vendor fee confirmed in writing</li>
          <li>Kitchen or cooking area, gas, water and power checked</li>
          <li>Format chosen: buffet, live counters, BBQ or a mix</li>
          <li>Per-plate budget and expected headcount fixed</li>
          <li>Three quotes compared on the same inclusions</li>
          <li>Caterer&apos;s FSSAI registration or licence number noted</li>
          <li>Tasting done; final menu signed off</li>
          <li>Veg, Jain and non-veg dishes labelled; allergies collected</li>
          <li>Gas or electric tandoor confirmed for winter dates</li>
          <li>Staff count, crockery and chafing dishes included in the quote</li>
          <li>Covered serving area or plan for cold, fog or rain</li>
          <li>Guaranteed headcount shared 3–5 days before</li>
          <li>Leftover packing and waste removal agreed</li>
        </ul>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan Your Farmhouse Party Food With Effortless Events
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
          people book farmhouses, villas and venues for birthday parties,
          family gatherings, festive celebrations, corporate events and
          weddings.
        </p>

        <p className="mb-8">
          For catering, that means checking a farmhouse&apos;s food policy and
          kitchen setup before you book, and coordinating the caterer, live
          counters and serving plan with the venue, so the food arrives hot
          and on time while you spend the evening with your guests. See our{" "}
          <Link
            href="/services/catering-bar-services"
            className="text-black underline font-semibold"
          >
            catering and bar services
          </Link>{" "}
          for details.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          Good farmhouse party catering comes down to a few early decisions:
          check what the farmhouse allows, pick a format that suits your
          headcount and the season, sense-check quantities and staff against
          the rules of thumb above, and compare quotes on the same inclusions.
          In winter, keep the food hot and covered and ask for gas or electric
          tandoors. Do that, and the food will be the easy part of the night.
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
            Book a Farmhouse That Works for Your Menu
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, headcount, preferred menu style and per-plate
            budget. Effortless Events can help you find a farmhouse with the
            right catering setup and plan the food for the day.
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
              Plan My Party
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
