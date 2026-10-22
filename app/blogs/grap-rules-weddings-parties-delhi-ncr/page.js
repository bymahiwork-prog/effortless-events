import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "GRAP Rules for Weddings & Parties in Delhi NCR (2026)",

  description:
    "Are weddings allowed under GRAP? What each stage means for generators, tandoors, bonfires, guest cars and vendor trucks at Delhi NCR events + a checklist.",

  keywords: [
    "GRAP rules for weddings and parties Delhi NCR",
    "are weddings allowed during GRAP stage 4",
    "can you use a generator at a wedding during GRAP",
    "is tandoor allowed during GRAP",
    "farmhouse party during pollution Delhi",
    "GRAP stage 3 car restrictions for wedding guests",
    "outdoor wedding AQI Delhi",
  ],

  alternates: { canonical: "/blogs/grap-rules-weddings-parties-delhi-ncr" },

  openGraph: {
    title: "GRAP Rules for Weddings & Parties in Delhi NCR (2026)",

    description:
      "A stage-by-stage guide for wedding and party hosts in Delhi NCR: generators, tandoors, bonfires, firecrackers, guest cars, vendor trucks and a pre-event checklist.",

    images: ["/party-venues.jpg"],
  },
};

const faqs = [
  {
    q: "Are weddings allowed during GRAP Stage 4 in Delhi?",
    a: "Yes. None of the published GRAP stages bans weddings or private parties as such. What GRAP restricts are things around the event: diesel generators, coal and wood tandoors, open burning, older vehicles, truck entry and construction work, so the event goes ahead but the setup may need to change.",
  },
  {
    q: "Can you use a diesel generator at a wedding during GRAP?",
    a: "Only if it meets CAQM rules. Under the revised 2026 GRAP schedule, generator restrictions start from Stage I, and CAQM directions allow DG sets in the NCR mainly when they run in dual-fuel mode or have certified emission-control devices, with capacity-based conditions. Ask the farmhouse for grid power with enough sanctioned load, or rent a compliant generator and get that in writing.",
  },
  {
    q: "Is a tandoor allowed at a wedding or party during GRAP?",
    a: "A gas or electric tandoor is the safe choice. GRAP lists a ban on coal and firewood tandoors at hotels, restaurants and open eateries from Stage I, and in December 2025 the Delhi Pollution Control Committee ordered these establishments to use only electric or gas tandoors. Ask your caterer to confirm the fuel in writing.",
  },
  {
    q: "Is a bonfire allowed at a farmhouse party when GRAP is in force?",
    a: "Assume a wood bonfire is risky. Open burning of biomass and waste is prohibited from GRAP Stage I and enforcement is strict through winter. Patio heaters, electric heaters or a gas fire pit are safer ways to keep guests warm.",
  },
  {
    q: "Which cars cannot be driven in Delhi NCR under GRAP Stage 3?",
    a: "At Stage III, BS-III petrol and BS-IV diesel four-wheelers face restrictions in Delhi and in Gurugram, Faridabad, Ghaziabad and Gautam Buddh Nagar, and the 2026 revision extends this to Sonipat. Guests with older cars should check their fuel type and emission norm before the event and plan a cab or shared ride if needed.",
  },
  {
    q: "Will GRAP affect my wedding vendors and deliveries?",
    a: "It can. Non-BS-VI commercial goods vehicles registered outside Delhi are barred from entering the city, with CNG, LNG and electric vehicles exempt, and higher GRAP stages add truck-entry curbs. Ask tent, décor, sound and catering vendors whether their vehicles are compliant, especially if they are coming into Delhi from Haryana or Uttar Pradesh.",
  },
  {
    q: "Should I move an outdoor wedding indoors if the AQI is bad?",
    a: "Not always, but keep a plan B. Book a farmhouse or venue with a covered or indoor hall that can take at least the elderly guests and children, check the AQI forecast three to five days ahead, and decide on the layout two days before the event.",
  },
];

const stageRows = [
  [
    "Stage I",
    "201–300 (Poor)",
    "No open burning; no coal or wood tandoors at hotels, restaurants and eateries; generator rules now start here (2026 revision); PUCC checks on vehicles",
    "Confirm gas/electric tandoor, heaters instead of a wood bonfire, and a compliant power plan",
  ],
  [
    "Stage II",
    "301–400 (Very Poor)",
    "Stage I rules continue, with extra dust-control measures such as more mechanised road cleaning and water sprinkling",
    "Recheck generator paperwork; brief guests that outdoor time may be shortened",
  ],
  [
    "Stage III",
    "401–450 (Severe)",
    "BS-III petrol and BS-IV diesel cars restricted in Delhi, Gurugram, Faridabad, Ghaziabad, Gautam Buddh Nagar and Sonipat; non-essential construction curbs",
    "Tell guests with older cars to use cabs; keep indoor backup ready",
  ],
  [
    "Stage IV",
    "Above 450 (Severe+)",
    "Truck entry curbs except essential goods or CNG/electric/BS-VI; school and office measures",
    "Get vendors to confirm vehicles and timings; move key moments under cover",
  ],
];

const checkRows = [
  ["Farmhouse or venue", "Grid power and sanctioned load; generator make, fuel mode and retrofit status; indoor or covered space and its capacity; heater options"],
  ["Caterer", "Tandoor and grill fuel (gas or electric only); no coal angithis at counters; chafing-dish fuel"],
  ["Decorator and tent vendor", "Vehicle emission norm and registration state; set-up timings; no civil or digging work"],
  ["Sound, lights and DJ", "Power draw in kW so the venue can confirm load; backup plan if the generator cannot run"],
  ["Guests", "Old-car advisory, cab or shuttle options, masks for elderly guests, an indoor seating plan"],
];

const cell = "border border-gray-300 p-4";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="grap-rules-weddings-parties-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-22"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/party-venues.jpg"
          alt="GRAP rules for weddings and parties in Delhi NCR: an indoor event hall with a floral arch and round tables, a backup when outdoor air quality is poor"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          GRAP Rules for Weddings and Parties in Delhi NCR: What Hosts Need to Know in 2026
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Event Planning • Last updated: October 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          GRAP rules for weddings and parties in Delhi NCR matter again this
          season. On 21 October 2026 the Commission for Air Quality Management
          (CAQM) invoked Stage I of the Graded Response Action Plan across the
          NCR after Delhi&apos;s average AQI reached about 245, according to{" "}
          <a
            href="https://www.businesstoday.in/india/story/grap-1-in-delhi-ncr-what-is-banned-full-list-of-restrictions-562934-2026-10-21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Business Today&apos;s report on GRAP Stage I
          </a>
          . With wedding season reopening around 20 November and winter party
          season right behind it, this guide explains what each GRAP stage
          actually changes for hosts of weddings, sangeets, receptions and
          farmhouse parties.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            GRAP does not ban weddings or private parties at any stage. It
            restricts what surrounds them: diesel generators that are not
            CAQM-compliant, coal and wood tandoors, bonfires and other open
            burning, older BS-III petrol and BS-IV diesel cars at Stage III,
            and truck entry at Stage IV. Hosts should lock in a compliant
            power plan, gas or electric cooking, heaters instead of fires and
            an indoor backup.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          GRAP Stages and Events: At a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Stage</th>
                <th className={`${cell} text-left`}>AQI</th>
                <th className={`${cell} text-left`}>Rules that touch events</th>
                <th className={`${cell} text-left`}>What hosts should do</th>
              </tr>
            </thead>
            <tbody>
              {stageRows.map((row) => (
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
          Summary based on news reports of the revised GRAP schedule approved
          by CAQM in September 2026 and earlier CAQM directions. Each higher
          stage keeps the rules of the stages below it, and CAQM can invoke a
          stage on a forecast before the AQI crosses the threshold. Always
          check the stage in force in the week of your event.
        </p>

        {/* =====================================================
            WHAT IS GRAP
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is GRAP and What Changed in 2026?
        </h2>

        <p className="mb-6">
          GRAP is the NCR&apos;s emergency plan for bad air. It has four
          stages tied to the AQI, and CAQM switches them on and off across
          Delhi, Gurugram, Faridabad, Noida, Greater Noida, Ghaziabad and the
          rest of the region as air quality changes. For event hosts, three
          points from the 2026 revision matter most:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Generator rules start earlier.</strong>{" "}
            <a
              href="https://theprint.in/environment/winter-pollution-playbook-updated-caqm-tightens-grap-2026-for-delhi/3056991/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-semibold"
            >
              ThePrint reported
            </a>{" "}
            that actions on diesel generator sets moved from Stage II to
            Stage I, so they can apply from the first poor-air day.
          </li>
          <li>
            <strong>Older-car curbs cover more area.</strong> Stage III
            restrictions on BS-III petrol and BS-IV diesel cars now also reach
            Sonipat and border areas of Ghaziabad, Faridabad and Gautam Buddh
            Nagar.
          </li>
          <li>
            <strong>More actions overall.</strong> A{" "}
            <a
              href="https://sundayguardianlive.com/india/grap-rules-from-october-1-2026-no-pucc-no-fuel-new-vehicle-curbs-bs-iv-entry-restrictions-morewhat-changes-in-delhi-ncr-heres-all-you-need-to-know-296399/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-semibold"
            >
              Sunday Guardian explainer
            </a>{" "}
            counts 48 actions in the revised schedule, along with a
            &ldquo;No PUCC, No Fuel&rdquo; drive at Delhi fuel stations from
            1 October 2026.
          </li>
        </ul>

        <p className="mb-8">
          Timing matters too. Higher stages usually arrive during wedding
          season: Stage IV was enforced from{" "}
          <a
            href="https://www.newsonair.gov.in/grap-stage-4-to-be-enacted-in-delhi-ncr-from-nov-18-amid-deteriorating-air-quality/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            18 November 2024
          </a>{" "}
          and invoked again in{" "}
          <a
            href="https://www.newsonair.gov.in/caqm-invokes-stage-4-of-grap-in-delhi-ncr-as-aqi-crosses-400"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            January 2026
          </a>
          . If your function falls between mid-November and January, plan as
          if Stage III or IV could be in force.
        </p>

        {/* =====================================================
            ARE WEDDINGS ALLOWED
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Are Weddings and Parties Allowed Under GRAP?
        </h2>

        <p className="mb-6">
          Yes, weddings and private parties are allowed at every GRAP stage.
          The published actions target pollution sources such as vehicles,
          construction dust, generators, open burning and fuel, not
          gatherings. In practice, GRAP changes how an event is run rather
          than whether it can happen:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>The power source for lights, sound and heaters may need to change.</li>
          <li>Live counters cannot use coal or wood.</li>
          <li>Bonfires, angithis and fireworks are off the table.</li>
          <li>Some guests may not be able to drive their own older cars.</li>
          <li>Vendor trucks may face entry limits, especially into Delhi.</li>
        </ul>

        <p className="mb-8">
          Local authorities can add their own curbs on top. In 2023, for
          example, the{" "}
          <a
            href="https://www.tribuneindia.com/news/haryana/mgc-bans-use-of-wood-coal-tandoors-at-hotels-563046"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Municipal Corporation of Gurugram told hotel, resort and banquet
            owners
          </a>{" "}
          not to use wood or coal tandoors during functions under GRAP
          Stage IV. Ask your venue whether any district order applies.
        </p>

        {/* =====================================================
            GENERATORS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can You Use a Generator at a Wedding During GRAP?
        </h2>

        <p className="mb-6">
          You can use only a generator that meets CAQM rules, and from 2026
          those rules can apply from Stage I. This is the biggest practical
          change for farmhouse weddings and parties, which often run lights,
          sound, heaters and food warmers on a hired diesel set.
        </p>

        <p className="mb-6">
          Under CAQM directions, diesel generators in the NCR generally need
          to run in dual-fuel mode or carry certified emission-control
          devices, with conditions by capacity. A{" "}
          <a
            href="https://aceget.in/blog/grap-rules-for-dg-sets-in-delhi-ncr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            2026 explainer on GRAP rules for DG sets
          </a>{" "}
          describes sets above 51 kVA needing dual-fuel or certified
          emission-control devices, and smaller sets needing dual-fuel or
          being limited to emergency backup. When these rules were first
          enforced in 2023,{" "}
          <a
            href="https://www.tribuneindia.com/news/haryana/gurugram-ahead-of-ban-three-teams-formed-to-inspect-dg-sets-548163"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            The Tribune reported
          </a>{" "}
          that only about 150 of over 4,000 registered sets in Gurugram had
          been converted, so many older gensets simply do not qualify.
        </p>

        <p className="mb-6">What to do:</p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>Ask the venue about grid power first.</strong> Get the
            sanctioned load in kW and compare it with your sound, lighting,
            heater and catering load.
          </li>
          <li>
            <strong>If you need a generator, rent a compliant one.</strong>{" "}
            Ask the supplier for the set&apos;s capacity, fuel mode and
            retrofit or certification papers, and keep a copy on site.
          </li>
          <li>
            <strong>Cut the load.</strong> LED lighting, fewer electric
            heaters and gas-based food warmers reduce how much backup you
            need.
          </li>
          <li>
            <strong>Put it in writing.</strong> The venue or vendor, not you,
            should be responsible if a non-compliant set is stopped.
          </li>
        </ol>

        {/* =====================================================
            TANDOORS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Is a Tandoor or Live Grill Allowed During GRAP?
        </h2>

        <p className="mb-6">
          Yes, if it runs on gas or electricity. GRAP lists a ban on coal and
          firewood in tandoors at hotels, restaurants and open eateries as a
          Stage I action, and in December 2025 the{" "}
          <a
            href="https://www.theweek.in/wire-updates/national/2025/12/09/des63-dl-coal-tandoor-ban.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Delhi Pollution Control Committee ordered
          </a>{" "}
          these establishments to switch exclusively to electric or gas
          tandoors.
        </p>

        <p className="mb-8">
          Ask your caterer to confirm in writing that tandoors, grills,
          barbecue and any angithi-style warmers will use gas or electricity,
          not coal or wood. For menu, quantity and counter planning, see our{" "}
          <Link
            href="/blogs/farmhouse-party-catering-menu-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse party catering guide for Delhi NCR
          </Link>
          .
        </p>

        {/* =====================================================
            BONFIRES AND FIREWORKS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Are Bonfires and Fireworks Allowed at Winter Functions?
        </h2>

        <p className="mb-6">
          Plan without either. Open burning of biomass, leaves and waste is
          prohibited from GRAP Stage I, so a wood bonfire or coal angithi at a
          winter function invites trouble. Patio heaters, electric heaters
          and gas fire pits give the same warm glow without smoke. Our{" "}
          <Link
            href="/blogs/winter-bonfire-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            winter bonfire party guide
          </Link>{" "}
          compares heating options and their costs.
        </p>

        <p className="mb-8">
          Fireworks are a separate issue from GRAP. Delhi NCR has allowed
          firecrackers only in limited court-set windows, such as the{" "}
          <a
            href="https://ianslive.in/sc-permits-sale-use-of-green-crackers-in-delhi-ncr-during-diwali--20251015110837"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            green-cracker window the Supreme Court allowed around Diwali 2025
          </a>
          . For a baraat, varmala or reception entry, use cold pyro (spark
          fountains), confetti, lighting effects or a dhol entry instead, and
          confirm the venue permits them.
        </p>

        {/* =====================================================
            VEHICLES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Does GRAP Affect Guests&apos; Cars and Vendor Trucks?
        </h2>

        <p className="mb-6">
          GRAP and related transport rules can stop some guest cars and vendor
          vehicles, so check them a week before the event.
        </p>

        <h3 className="text-black text-2xl font-bold mt-8 mb-4">
          Guests&apos; cars
        </h3>

        <p className="mb-6">
          At Stage III, BS-III petrol and BS-IV diesel four-wheelers are
          restricted in Delhi, Gurugram, Faridabad, Ghaziabad, Gautam Buddh
          Nagar and, from 2026, Sonipat. Some older guests may still drive
          these cars. Send a short note with the invite reminder: check your
          car&apos;s emission norm, carry a valid PUC certificate, and use a
          cab or the family shuttle if the car is affected. For larger
          weddings, a shared shuttle from a metro station or hotel cluster
          also solves farmhouse parking.
        </p>

        <h3 className="text-black text-2xl font-bold mt-8 mb-4">
          Vendor vehicles
        </h3>

        <p className="mb-8">
          Tent, décor, sound and catering vendors move equipment in
          commercial goods vehicles. Under a CAQM direction reported by{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-to-bar-entry-of-non-bs-vi-compliant-vehicles-registered-outside-city-from-november-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            The Tribune
          </a>
          , non-BS-VI commercial goods vehicles registered outside Delhi are
          barred from entering the city, with CNG, LNG and electric vehicles
          exempt; a transitional exemption for BS-IV diesel vehicles ran only
          until 31 October 2026. At Stage IV, truck entry is curbed further.
          If your venue is in Delhi (Chattarpur, Mehrauli, Bijwasan or
          Kapashera) and your vendors are based in Gurugram, Faridabad or
          Noida, ask them to confirm their vehicles in writing.
        </p>

        {/* =====================================================
            CONSTRUCTION AND SETUP
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Does the Construction Ban Affect Tent and Stage Set-Up?
        </h2>

        <p className="mb-8">
          The GRAP construction actions target construction and demolition
          sites, dust control and debris, and the published actions do not
          list temporary event set-up. Delhi&apos;s own winter plan has also
          been reported to include a wider construction ban from 10 December
          to 20 January. To stay clear of both, keep set-up to temporary
          structures: no digging, levelling, brickwork or cement work on the
          lawn, and ask the decorator to cover sand or loose materials and
          clean up dust the same day.
        </p>

        {/* =====================================================
            AQI AND GUESTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Should You Plan an Outdoor Wedding When the AQI Is Bad?
        </h2>

        <p className="mb-6">
          Plan the outdoor wedding as normal, but build in an indoor or
          covered option and decide on the layout two days before the event.
          A simple plan by AQI forecast:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>AQI forecast below 200:</strong> run the outdoor plan as
            designed.
          </li>
          <li>
            <strong>201–300:</strong> keep the event outdoors but seat elderly
            guests and children near the covered area, and keep masks at the
            welcome desk.
          </li>
          <li>
            <strong>301–400:</strong> move dinner and seating under a covered
            or enclosed area, shorten outdoor segments, and run air purifiers
            in indoor rooms used by the family.
          </li>
          <li>
            <strong>Above 400:</strong> move the main function indoors if the
            venue allows, keep only short ceremonies such as the varmala
            outdoors, and tell guests with breathing problems in advance.
          </li>
        </ul>

        <p className="mb-8">
          This is why the venue choice matters in winter. A farmhouse with a
          hall, glass-walled pavilion or rooms, or a banquet with a lawn,
          gives you a fallback that an open lawn alone cannot. Check this
          along with music timing, alcohol permits and guest limits using our{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse rules checklist
          </Link>
          .
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          GRAP Checklist: What to Confirm Before Your Event
        </h2>

        <p className="mb-6">
          Use this checklist one to two weeks before any wedding function or
          party between November and February:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Who to ask</th>
                <th className={`${cell} text-left`}>What to confirm</th>
              </tr>
            </thead>
            <tbody>
              {checkRows.map((row) => (
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

        <p className="mb-8">
          Then, three to five days before the event, check the CAQM or CPCB
          bulletin for the GRAP stage and the AQI forecast, and send vendors
          and guests any changes the same day.
        </p>

        {/* =====================================================
            ENTITY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan a GRAP-Ready Event With Effortless Events
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
          people book farmhouses, villas and venues for weddings, private
          parties and corporate events.
        </p>

        <p className="mb-8">
          For winter functions, Effortless Events can shortlist venues with
          covered or indoor backup space, check power, heating and catering
          arrangements against current GRAP rules before you pay, and
          coordinate vendors if the stage changes close to your date.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          GRAP will not cancel your wedding or party, but it can catch out a
          plan built on a diesel generator, a coal tandoor, a bonfire and an
          open lawn. Settle power, cooking fuel, heating, transport and an
          indoor fallback now, and a change in GRAP stage during the season
          becomes a small adjustment rather than a last-minute crisis.
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
            Planning a Winter Wedding or Party?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count, area and budget. Effortless Events
            can help you find a venue with an indoor backup and plan a
            function that works whatever the GRAP stage.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/venues"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Explore Venues
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
