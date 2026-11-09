import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "How Much Alcohol for 100 Guests? Delhi NCR Party Guide",

  description:
    "Bottles, pegs, beer, ice and mixers for 25 to 200 guests, bartender cost estimates, and the P-10 and party licence rules for Delhi, Gurgaon and Noida.",

  keywords: [
    "how much alcohol for 100 guests",
    "how much alcohol for a party Delhi NCR",
    "how many bottles of whisky for 50 guests",
    "how many pegs in a 750 ml bottle",
    "alcohol calculator for party India",
    "bartender cost for party Delhi",
    "how much ice for a party",
    "liquor licence for farmhouse party Delhi NCR",
    "cocktail party bar planning Delhi",
  ],

  alternates: {
    canonical: "/blogs/how-much-alcohol-for-party-delhi-ncr",
  },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "How Much Alcohol for 100 Guests? Delhi NCR Party Guide",
    description:
      "A bottle-by-bottle bar plan for 25 to 200 guests, with pegs, beer, wine, ice, mixers, bartender estimates and the licence rules for Delhi, Haryana and UP.",
    images: ["/private-events.webp"],
  },
};

const faqs = [
  {
    q: "How much alcohol do I need for 100 guests?",
    a: "For a four-hour evening where about 60 of the 100 guests drink, plan roughly 17 bottles (750 ml) of spirits, 50 bottles of beer (650 ml) and 7 bottles of wine, including a 10% buffer. Adjust up for a younger crowd or a longer bar and down for a family function. These are planning estimates.",
  },
  {
    q: "How many pegs are there in a 750 ml bottle?",
    a: "A 750 ml bottle holds 25 small pegs of 30 ml or 12.5 large pegs of 60 ml. Most party planners count 12 large drinks per bottle to allow for spillage and generous pours.",
  },
  {
    q: "How many bottles of whisky do I need for 50 guests?",
    a: "If about 30 of 50 guests drink for four hours and spirits make up most of the bar, plan around 9 bottles of spirits in total, of which whisky is usually the largest share in Delhi NCR, often 5 to 7 bottles. Add beer and wine on top. These are estimates, not rules.",
  },
  {
    q: "Do I need a licence to serve alcohol at a farmhouse party in Delhi?",
    a: "Usually yes. Delhi requires an occasional P-10 licence for parties at farmhouses, banquet halls and similar premises unless the venue holds its own licence, and guests must be over 25. Gurgaon and Noida farmhouses follow Haryana and Uttar Pradesh rules instead, so ask the owner which permit applies.",
  },
  {
    q: "How much does a bartender cost for a party in Delhi NCR?",
    a: "A basic bartender for a house or farmhouse party typically costs about ₹3,000–₹8,000 for an evening, while a mixologist with a cocktail menu and bar counter can cost ₹15,000 or more. Plan one bartender for every 50–75 drinking guests. These are market estimates; get written quotes.",
  },
  {
    q: "How much ice do I need for a party?",
    a: "A common planning figure is about 1 kg of ice per drinking guest for a winter evening and closer to 1.5 kg in summer, plus extra if beer and wine are chilled in tubs. For 100 guests that is roughly 60–90 kg.",
  },
  {
    q: "What is the legal drinking age in Delhi, Gurgaon and Noida?",
    a: "The legal drinking age is 25 in Delhi and 21 in Haryana (Gurgaon, Faridabad, Manesar) and Uttar Pradesh (Noida, Greater Noida, Ghaziabad). Tell the bartender to ask for ID if younger guests are present.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="how-much-alcohol-for-party-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-05"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/private-events.webp"
          width={800}
          height={800}
          fetchPriority="high"
          decoding="async"
          alt="How much alcohol for 100 guests: guests holding drinks at an evening cocktail party in a chandelier-lit hall"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          How Much Alcohol for 100 Guests? A Delhi NCR Party Bar Guide
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Party Planning • Last updated: November 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          Working out how much alcohol you need for 100 guests is the bar
          question every Delhi NCR host faces in wedding season and before
          Christmas and New Year&apos;s Eve. Order too little and the bar runs
          dry at 10 PM; order too much and you are left with cases you cannot
          return. This guide gives you a bottle count for 25 to 200 guests in
          Indian pegs, plus beer, wine, mixers and ice, rough costs, how many
          bartenders to hire and the licence rules for Delhi, Gurgaon and
          Noida farmhouses.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For 100 guests at a four-hour evening party in Delhi NCR, assume
            about 60 drinkers having five drinks each, or 300 drinks. That
            works out to roughly 17 bottles of spirits (750 ml), 50 bottles of
            beer (650 ml) and 7 bottles of wine with a 10% buffer, plus about
            35 litres of mixers and 60–90 kg of ice. These are planning
            estimates.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Party Bar Planning at a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Question
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Short answer
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Drinks per drinking guest
                </td>
                <td className="border border-gray-300 p-4">
                  About 2 in the first hour, then 1 per hour (rule of thumb)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Pegs in a 750 ml bottle
                </td>
                <td className="border border-gray-300 p-4">
                  25 small (30 ml) or 12.5 large (60 ml); plan on 12 drinks
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Spirits for 100 guests
                </td>
                <td className="border border-gray-300 p-4">
                  About 17 bottles (estimate, 4-hour bar)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Bartenders</td>
                <td className="border border-gray-300 p-4">
                  One per 50–75 drinking guests
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Ice</td>
                <td className="border border-gray-300 p-4">
                  About 1 kg per drinking guest in winter, 1.5 kg in summer
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Licence</td>
                <td className="border border-gray-300 p-4">
                  Delhi: P-10 unless the venue is licensed; Haryana and UP:
                  their own one-day permits
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Drinking age</td>
                <td className="border border-gray-300 p-4">
                  25 in Delhi; 21 in Haryana and Uttar Pradesh
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Calculate Alcohol for a Party?
        </h2>

        <p className="mb-8">
          Calculate the bar in four steps: count the drinkers, multiply by
          drinks per person, split the total between spirits, beer and wine,
          then convert each share into bottles. This is the method most
          caterers and bar services in Delhi NCR use, and it takes five
          minutes with a phone calculator.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Count drinkers, not invitees.</strong> At a mixed family
            function, assume around half to 60% of adults drink. At a
            friends&apos; party, cocktail night or bachelor party, it can be
            80% or more. Leave out children and guests you know do not drink.
          </li>
          <li>
            <strong>Multiply by drinks per person.</strong> A widely used rule
            of thumb is two drinks in the first hour and one per hour after
            that. A four-hour bar is therefore about five drinks per drinker.
          </li>
          <li>
            <strong>Split by drink type.</strong> In Delhi NCR, spirits
            (mostly whisky, then vodka and rum) usually carry the bar. A
            starting split of 60% spirits, 30% beer and 10% wine works for
            most mixed crowds.
          </li>
          <li>
            <strong>Convert to bottles.</strong> Count 12 large pegs per 750 ml
            bottle of spirits, about 2 glasses per 650 ml bottle of beer and 5
            glasses per 750 ml bottle of wine. Add a 10% buffer and round up.
          </li>
        </ul>

        <p className="mb-8">
          Worked example for 100 guests: 60 drinkers × 5 drinks = 300 drinks.
          Spirits: 180 drinks ÷ 12 = 15 bottles, or 17 with the buffer. Beer:
          90 drinks ÷ 2 = 45 bottles, or 50 with the buffer. Wine: 30 glasses
          ÷ 5 = 6 bottles, or 7 with the buffer.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Alcohol Do You Need for 25, 50, 100, 150 or 200 Guests?
        </h2>

        <p className="mb-8">
          The table below applies the same method to common Delhi NCR party
          sizes: 60% of guests drinking, a four-hour bar, a 60/30/10 split and
          a 10% buffer. Treat it as a starting point, not a rule, and adjust
          using the factors in the next section.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Guests
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Drinkers (est.)
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Spirits (750 ml)
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Beer (650 ml)
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Wine (750 ml)
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Mixers / ice (est.)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">25</td>
                <td className="border border-gray-300 p-4">15</td>
                <td className="border border-gray-300 p-4">5</td>
                <td className="border border-gray-300 p-4">13</td>
                <td className="border border-gray-300 p-4">2</td>
                <td className="border border-gray-300 p-4">10 L / 15–25 kg</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">50</td>
                <td className="border border-gray-300 p-4">30</td>
                <td className="border border-gray-300 p-4">9</td>
                <td className="border border-gray-300 p-4">25</td>
                <td className="border border-gray-300 p-4">4</td>
                <td className="border border-gray-300 p-4">18 L / 30–45 kg</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">100</td>
                <td className="border border-gray-300 p-4">60</td>
                <td className="border border-gray-300 p-4">17</td>
                <td className="border border-gray-300 p-4">50</td>
                <td className="border border-gray-300 p-4">7</td>
                <td className="border border-gray-300 p-4">35 L / 60–90 kg</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">150</td>
                <td className="border border-gray-300 p-4">90</td>
                <td className="border border-gray-300 p-4">25</td>
                <td className="border border-gray-300 p-4">75</td>
                <td className="border border-gray-300 p-4">10</td>
                <td className="border border-gray-300 p-4">
                  50 L / 90–135 kg
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">200</td>
                <td className="border border-gray-300 p-4">120</td>
                <td className="border border-gray-300 p-4">33</td>
                <td className="border border-gray-300 p-4">100</td>
                <td className="border border-gray-300 p-4">14</td>
                <td className="border border-gray-300 p-4">
                  66 L / 120–180 kg
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Mixers are estimated at about 2 litres of soda, cola, tonic or juice
          per bottle of spirits. Add roughly one litre of drinking water per
          guest, drinker or not, especially for a long dinner or a dance floor.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          How many bottles of whisky for 50 guests?
        </h3>

        <p className="mb-8">
          For 50 guests with about 30 drinkers, the table suggests 9 bottles
          of spirits. In Delhi NCR, whisky usually takes the biggest share, so
          a typical order is 5–7 bottles of whisky with the rest in vodka, rum
          or gin. If your crowd is mostly whisky drinkers, move the beer
          budget into whisky rather than adding to the total.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Changes the Amount You Need?
        </h2>

        <p className="mb-8">
          The same 100 guests can drink twice as much at one party as at
          another. Adjust the base numbers for these factors before you buy.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Bar hours.</strong> Each extra hour adds about one drink
            per drinker. A cocktail night running 7 PM to 1 AM needs roughly
            40% more than a four-hour dinner bar.
          </li>
          <li>
            <strong>Type of event.</strong> Bachelor parties, sangeet and
            cocktail nights and New Year&apos;s Eve run heavier. Haldi,
            religious functions and kitty lunches run lighter or dry.
          </li>
          <li>
            <strong>Season.</strong> Winter crowds lean towards whisky, rum
            and hot toddies; summer and pool parties shift demand to beer,
            vodka and white wine.
          </li>
          <li>
            <strong>Food timing.</strong> If dinner opens late (after 10 PM),
            guests drink more before eating. Starters served from the first
            hour slow the bar down.
          </li>
          <li>
            <strong>Cocktail menu.</strong> A signature cocktail uses 45–60
            ml of spirit plus liqueurs and syrups, so a cocktail-heavy bar
            needs more spirit bottles and a mixologist rather than a basic
            bartender.
          </li>
          <li>
            <strong>Overnight stay.</strong> At an overnight farmhouse booking,
            guests often keep drinking after the main party. Keep a small
            reserve rather than opening everything at once.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Party Bar Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          For 100 guests, a mid-range self-supplied bar with hired bartenders
          typically costs about ₹55,000–₹1,15,000 before any licence fee,
          depending mainly on the brands you choose. The breakdown below uses
          market estimates; retail prices differ between Delhi, Haryana and
          UP and change with each state&apos;s excise policy.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Item</th>
                <th className="border border-gray-300 p-4 text-left">
                  Quantity (100 guests)
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Estimated cost
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Spirits</td>
                <td className="border border-gray-300 p-4">17 × 750 ml</td>
                <td className="border border-gray-300 p-4">
                  ₹20,000–₹51,000 (about ₹1,200–₹3,000 a bottle)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Beer</td>
                <td className="border border-gray-300 p-4">50 × 650 ml</td>
                <td className="border border-gray-300 p-4">₹7,500–₹12,500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Wine</td>
                <td className="border border-gray-300 p-4">7 × 750 ml</td>
                <td className="border border-gray-300 p-4">₹5,500–₹10,500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Mixers, ice, water, garnish
                </td>
                <td className="border border-gray-300 p-4">
                  35 L mixers, 60–90 kg ice
                </td>
                <td className="border border-gray-300 p-4">₹6,000–₹12,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Bartenders</td>
                <td className="border border-gray-300 p-4">2</td>
                <td className="border border-gray-300 p-4">₹8,000–₹16,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Bar counter, glassware, chillers
                </td>
                <td className="border border-gray-300 p-4">1 bar setup</td>
                <td className="border border-gray-300 p-4">₹5,000–₹12,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Party licence</td>
                <td className="border border-gray-300 p-4">1</td>
                <td className="border border-gray-300 p-4">
                  Varies by state and event; check the excise portal
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Some farmhouses and caterers offer a per-head bar package instead.
          Compare it against the self-supplied total above, and ask whether
          the package caps the number of drinks, the brands or the hours. For
          the food side of the budget, see our{" "}
          <Link
            href="/blogs/farmhouse-party-catering-menu-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse party catering menu guide
          </Link>
          .
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Bartenders Do You Need?
        </h2>

        <p className="mb-8">
          Plan one bartender for every 50–75 drinking guests, and add a
          helper for ice, glass collection and restocking once you pass about
          100 guests. A basic bartender pours, mixes simple drinks and keeps
          count; a mixologist runs a cocktail menu and usually brings the bar
          counter, tools and syrups.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Confirm the bartender&apos;s hours and the overtime rate.</li>
          <li>
            Ask whether glassware, ice buckets, jiggers and a bar counter are
            included.
          </li>
          <li>
            Agree on a 30 ml or 60 ml pour so the bottles last as planned.
          </li>
          <li>
            Ask the bartender to check ID if any guests may be under the legal
            age.
          </li>
          <li>
            Keep a bottle log at the bar so unopened bottles come back to you
            at the end of the night.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Do You Need a Licence to Serve Alcohol at a Farmhouse Party?
        </h2>

        <p className="mb-8">
          In most cases, yes. The permit depends on the state the farmhouse
          is in, not where you live, so a party in Chattarpur follows Delhi
          rules while a party on Sohna Road follows Haryana&apos;s. Rules and
          fees change, so always confirm with the owner and the excise
          department before you buy stock.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Delhi (Chattarpur, Bijwasan, Mehrauli, North Delhi)
        </h3>

        <p className="mb-8">
          Delhi requires an occasional P-10 licence to serve liquor at a
          party or wedding held at premises such as a farmhouse, banquet hall
          or motel, according to a{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-excise-dept-relaxes-norms-to-apply-for-p-10-licence-required-to-serve-liquor-at-parties-320091"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Tribune report on the Delhi Excise Department&apos;s rules
          </a>
          . The same report notes that the bar must be screened from public
          view, liquor can be served only to guests over 25 and stock must be
          bought from authorised Delhi sources, so do not plan on bottles
          bought in Gurgaon or Noida. For a wedding cocktail night, see our{" "}
          <Link
            href="/blogs/cocktail-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse cocktail party guide
          </Link>
          . Venues that hold their own excise
          licence do not need a separate permit for each event, as{" "}
          <a
            href="https://www.indiatvnews.com/business/news-delhi-licensed-venues-won-t-need-separate-permit-to-serve-liquor-at-weddings-parties-744660"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            India TV reported
          </a>
          ; ask the owner which applies.
        </p>

        <p className="mb-8">
          Also check the{" "}
          <a
            href="https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/drydayorder_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Delhi Excise dry-day order
          </a>{" "}
          for your date. Republic Day (26 January) is on the 2026 list, which
          matters for long-weekend parties.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Haryana (Gurgaon, Sohna Road, Manesar, Faridabad)
        </h3>

        <p className="mb-8">
          Haryana farmhouses follow Haryana excise rules. Third-party guides
          describe a one-day L-12A permit for private functions; ask the
          owner whether the property arranges it and confirm with the local
          excise office at least a week ahead. The legal drinking age in
          Haryana is 21, per the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Alcohol_laws_of_India"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            state-by-state summary of India&apos;s alcohol laws
          </a>
          .
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Uttar Pradesh (Noida, Greater Noida, Ghaziabad)
        </h3>

        <p className="mb-8">
          UP&apos;s excise department issues one-day occasional bar licences
          for parties; ask the owner who applies and confirm with the
          district excise office before the event. The legal drinking age is 21. For
          the other house rules worth confirming (music cut-off, guest limit,
          outside caterers), see our guide to{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse rules to check before booking
          </Link>
          .
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Party Bar Checklist: What to Do and When
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">When</th>
                <th className="border border-gray-300 p-4 text-left">Task</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">3–4 weeks before</td>
                <td className="border border-gray-300 p-4">
                  Confirm the venue&apos;s liquor policy and which permit
                  applies; book bartenders or a bar service
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">2 weeks before</td>
                <td className="border border-gray-300 p-4">
                  Firm up the guest count and drinker estimate; fix the
                  spirits/beer/wine split and brands
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">7–10 days before</td>
                <td className="border border-gray-300 p-4">
                  Apply for the party licence; check dry days for your date
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">2–3 days before</td>
                <td className="border border-gray-300 p-4">
                  Buy stock from authorised shops in the venue&apos;s state;
                  order mixers, water and garnish
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Party day</td>
                <td className="border border-gray-300 p-4">
                  Ice delivered 2–3 hours before; set up the bar away from the
                  pool and the fire; open bottles in batches
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">End of night</td>
                <td className="border border-gray-300 p-4">
                  Count unopened bottles; arrange drivers or cabs for guests
                  who drank
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Keep the Bar Safe at a Farmhouse?
        </h2>

        <p className="mb-8">
          A safe bar plan protects your guests and your security deposit.
          Most farmhouse damage and late-night trouble starts at the bar, so
          build these rules in from the start.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            Close the pool once the bar opens, or post a lifeguard if guests
            will swim.
          </li>
          <li>
            Keep the bar well away from bonfires, fire pits and heaters.
          </li>
          <li>Serve food from the first hour and keep water on every table.</li>
          <li>
            Set a last call 30–45 minutes before the venue&apos;s cut-off.
          </li>
          <li>
            Book drivers or cabs in advance; many NCR farmhouses are far from
            the metro and late-night cabs can be slow.
          </li>
        </ul>

        <p className="mb-8">
          Planning a year-end party? Our{" "}
          <Link
            href="/blogs/new-years-eve-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            New Year&apos;s Eve farmhouse party guide
          </Link>{" "}
          covers timings, music rules and overnight stays for 31 December.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Planning a Bar With Effortless Events
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          private parties, family celebrations, weddings and corporate events.
          For a party with a bar, we can help you shortlist farmhouses whose
          liquor policy fits your plan, check which permit applies before
          you pay, and coordinate caterers, bartenders and décor.
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
            Find a Farmhouse That Fits Your Party Bar
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count, preferred area and budget.
            Effortless Events can help you shortlist farmhouses across Delhi
            NCR with the right liquor policy, space for a bar and a team to
            run the evening.
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
