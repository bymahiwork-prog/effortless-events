import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Cocktail Party at a Farmhouse in Delhi NCR: Cost & Rules",

  description:
    "Planning a wedding cocktail or private cocktail party at a farmhouse in Delhi NCR? Dates, cost estimates, the new P-10 rule, bar setup and a checklist.",

  keywords: [
    "cocktail party at farmhouse Delhi NCR",
    "wedding cocktail party venue Delhi",
    "cocktail party cost Delhi NCR",
    "P-10 licence for farmhouse party Delhi",
    "cocktail night before wedding",
    "cocktail party ideas for wedding",
    "farmhouse for cocktail party Gurgaon",
  ],

  alternates: { canonical: "/blogs/cocktail-party-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Cocktail Party at a Farmhouse in Delhi NCR: Cost & Rules",
    description:
      "When to hold it, what it costs, the October 2026 P-10 rule for farmhouses, bar and menu planning, a run-of-show and a checklist for Delhi NCR hosts.",
    images: ["/decoration-7.webp"],
  },
};

const faqs = [
  {
    q: "What is a cocktail party in an Indian wedding?",
    a: "It is a pre-wedding evening function, usually for the couple's friends and younger relatives, built around a bar, music, dancing and finger food rather than rituals. In Delhi NCR it is often held at a farmhouse the night before the wedding or combined with the sangeet, with a dress code such as Indo-western or black-tie.",
  },
  {
    q: "Is the cocktail party before or after the wedding?",
    a: "Usually before. Most Delhi families hold the cocktail one or two nights before the wedding, after the mehendi or alongside the sangeet. Some couples hold it after the wedding as an after-party for friends instead of, or as well as, a formal reception.",
  },
  {
    q: "How much does a cocktail party cost in Delhi NCR?",
    a: "As a rough estimate, a 100–150 guest farmhouse cocktail party in Delhi NCR often totals ₹4–10 lakh including venue, food, bar service and liquor, DJ, lighting and décor. A 40–60 guest friends-only cocktail night can be done for about ₹1.5–3.5 lakh. Liquor and the venue are usually the two biggest lines.",
  },
  {
    q: "Do you need a licence to serve alcohol at a farmhouse party in Delhi?",
    a: "Yes. A Delhi Excise notice dated 22 October 2026 says every banquet hall and farmhouse hosting a wedding, party or social function in Delhi needs a P-10 permit for each event where liquor is served, at ₹15,000 per event. Gurgaon and Noida farmhouses follow Haryana and Uttar Pradesh rules, so ask the owner which permit applies.",
  },
  {
    q: "What is the difference between a sangeet and a cocktail party?",
    a: "A sangeet is a music-and-dance function with family performances, choreography and a stage, and all ages attend. A cocktail party is a looser social evening centred on the bar, a DJ and conversation, and is usually aimed at friends. Many families now combine both on one night to save a venue booking.",
  },
  {
    q: "What time should a cocktail party end in Delhi NCR?",
    a: "Plan for outdoor music to stop by 10 PM, because noise rules bar loudspeakers in open areas between 10 PM and 6 AM unless the authorities give permission. Starting at 7 PM gives three hours of music; after 10 PM, move guests indoors with low-volume music or wind down with dinner.",
  },
  {
    q: "Can Effortless Events help plan a cocktail party at a farmhouse?",
    a: "Yes. Effortless Events can shortlist farmhouses in Chattarpur, Gurgaon, Noida and other parts of Delhi NCR that fit your guest count, check the owner's liquor, music and timing rules, and coordinate the bar, DJ, lighting, décor and catering for the evening.",
  },
];

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="cocktail-party-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-09"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-7.webp"
          width={800}
          height={1200}
          fetchPriority="high"
          decoding="async"
          alt="Cocktail party at a farmhouse in Delhi NCR: a lit dance floor on the lawn under string lights and paper lanterns, with dinner tables set behind it"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Cocktail Party at a Farmhouse in Delhi NCR: Cost, Rules and Planning
          Guide
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
          A cocktail party at a farmhouse in Delhi NCR is the most relaxed
          function of the wedding week: friends, a well-run bar, a DJ on the
          lawn and food that keeps coming. It is also the function most likely
          to run into trouble, because liquor permits, the 10 PM music cut-off
          and winter weather all land on the same evening. This guide is for
          couples, families and friend groups planning a wedding cocktail or a
          private cocktail night between late November 2026 and February 2027.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            To plan a cocktail party at a farmhouse in Delhi NCR, book the
            venue 4–8 weeks ahead, confirm the liquor permit (in Delhi, a P-10
            for every farmhouse event, ₹15,000 per event), start at 7 PM so
            music can run until the 10 PM cut-off, and budget roughly ₹4–10
            lakh (estimate) for 100–150 guests, including bar and liquor.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Cocktail Party in Delhi NCR at a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Decision
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What works in Delhi NCR
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">When</td>
                <td className="border border-gray-300 p-4">
                  1–2 nights before the wedding; friends-only cocktails on
                  December and January weekends
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Timing</td>
                <td className="border border-gray-300 p-4">
                  Guests 7 PM, bar opens 7:30 PM, outdoor music off by 10 PM,
                  dinner 9:30–11 PM
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Guest count</td>
                <td className="border border-gray-300 p-4">
                  Typically 50–200; most farmhouse cocktails are 80–150
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Budget (estimate)</td>
                <td className="border border-gray-300 p-4">
                  ₹1.5–3.5 lakh for 40–60 guests; ₹4–10 lakh for 100–150
                  guests; ₹12 lakh+ for 200+ with a live act
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Liquor permit</td>
                <td className="border border-gray-300 p-4">
                  Delhi: P-10 per event, ₹15,000 (Oct 2026 notice). Gurgaon
                  and Noida: Haryana or UP permit, ask the owner
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Must-checks</td>
                <td className="border border-gray-300 p-4">
                  Permit, drinking age (25 in Delhi, 21 in Haryana and UP),
                  music cut-off, heaters, GRAP rules, drivers for guests
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            WHEN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Hold the Cocktail Party?
        </h2>

        <p className="mb-8">
          Most Delhi NCR families hold the cocktail party one or two nights
          before the wedding, so guests are not tired on the main day and the
          couple can enjoy a night with friends before the rituals begin. The
          late-2026 wedding dates most Hindu calendars list cluster around 21
          and 24–26 November and 1–4 and 11–13 December, which puts cocktail
          nights roughly between 19 November and 12 December. Those are the
          evenings when farmhouses, bartenders and DJs are hardest to book.
        </p>

        <p className="mb-8">
          Weddings pause from mid-December to mid-January in most calendars,
          but that gap is when friends-only cocktail nights, year-end parties
          and post-wedding after-parties fill farmhouse weekends instead. If
          your wedding is in January or February 2027, book your cocktail
          venue in December before the next round of dates fills.
        </p>

        <p className="mb-8">
          Three common formats work well at a farmhouse:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Standalone cocktail night:</strong> its own evening, with
            a dress code, bar and DJ. Best when you have a big friend circle
            and the sangeet is for family.
          </li>
          <li>
            <strong>Sangeet plus cocktail:</strong> performances first, then
            the bar and dance floor open. It saves a venue night and one round
            of décor and sound. Our{" "}
            <Link
              href="/blogs/sangeet-night-farmhouse-delhi-ncr"
              className="text-black underline font-semibold"
            >
              sangeet night guide
            </Link>{" "}
            covers the stage, performances and combined run-of-show.
          </li>
          <li>
            <strong>Post-wedding after-party:</strong> a smaller cocktail for
            friends a night or two after the wedding, often with an overnight
            stay at the same farmhouse.
          </li>
        </ul>

        {/* =====================================================
            P-10 RULE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Do You Need a P-10 Licence for a Cocktail Party at a Delhi Farmhouse?
        </h2>

        <p className="mb-8">
          Yes. In Delhi, serving liquor at a farmhouse event needs a P-10
          permit for that event. A notice from the Delhi Excise
          Department&apos;s permit branch dated 22 October 2026 says all
          banquet halls and farmhouses hosting marriages, parties or other
          social functions must obtain a P-10 permit for each event where
          liquor is served, and sets the fee at ₹15,000 per event (see the{" "}
          <a
            href="https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/special_camp_p-10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Delhi Excise notice
          </a>
          ). What it means for a cocktail host:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>One permit per event and per space.</strong> The notice
            asks for a separate permit for each hall or space where liquor is
            served, so a bar on the lawn and another indoors may need checking
            with the owner.
          </li>
          <li>
            <strong>Applying is not the same as having it.</strong> The notice
            states that only submitting an application does not allow liquor
            to be bought or served at an unlicensed premises. Get the issued
            permit before the bar opens.
          </li>
          <li>
            <strong>Keep the bills.</strong> Owners must keep permit records
            and invoices showing the liquor was bought from a licensed vend in
            Delhi, so buy from a licensed shop and keep the receipts.
          </li>
          <li>
            <strong>Faster permits for registered venues.</strong> The Excise
            office is running a special camp from 27 October to 16 November
            2026 for farmhouses to register once on the e-Abkari portal, after
            which later P-10 permits can be issued straight away. Ask your
            farmhouse whether it has registered.
          </li>
          <li>
            <strong>Age and dry days.</strong> The legal drinking age is 25 in
            Delhi, and the bar must close on notified dry days, so check the
            date against the Excise dry-day list.
          </li>
        </ul>

        <p className="mb-8">
          Farmhouses in Gurgaon, Sohna Road, Manesar and Faridabad follow
          Haryana&apos;s excise rules, and those in Noida, Greater Noida and
          Ghaziabad follow Uttar Pradesh&apos;s, where the drinking age is 21.
          Each state has its own one-day or occasional permit, so ask the
          owner which one applies and who files it. Our{" "}
          <Link
            href="/blogs/how-much-alcohol-for-party-delhi-ncr"
            className="text-black underline font-semibold"
          >
            alcohol quantity and licence guide
          </Link>{" "}
          has the bottle-by-bottle stock plan and the state-wise rules.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Cocktail Party at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A farmhouse cocktail party for 100–150 guests in Delhi NCR typically
          costs about ₹4–10 lakh all-in (estimate). The venue and the bar
          (service plus liquor) usually make up more than half of it. The
          ranges below are planning estimates based on typical Delhi NCR
          quotes for late 2026; actual prices vary with the area, date, brand
          of liquor and how many guests drink.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Line item
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  100–150 guests (estimate)
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What drives the price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Farmhouse (evening)</td>
                <td className="border border-gray-300 p-4">₹75,000 – ₹3,00,000</td>
                <td className="border border-gray-300 p-4">
                  Area, peak wedding date, lawn size, overnight rooms
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Food (snacks + dinner)</td>
                <td className="border border-gray-300 p-4">₹1,200 – ₹2,500 per guest</td>
                <td className="border border-gray-300 p-4">
                  Live counters, passed canapés, cuisines
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Liquor</td>
                <td className="border border-gray-300 p-4">₹60,000 – ₹1,50,000</td>
                <td className="border border-gray-300 p-4">
                  Share of guests who drink, premium vs standard brands
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Bar service and mixologists</td>
                <td className="border border-gray-300 p-4">₹20,000 – ₹75,000</td>
                <td className="border border-gray-300 p-4">
                  Number of bartenders, cocktail menu, bar counter, glassware
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">P-10 permit (Delhi)</td>
                <td className="border border-gray-300 p-4">₹15,000 per event</td>
                <td className="border border-gray-300 p-4">
                  Official fee; Haryana and UP permits differ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">DJ, sound and dance floor</td>
                <td className="border border-gray-300 p-4">₹30,000 – ₹1,20,000</td>
                <td className="border border-gray-300 p-4">
                  LED dance floor, lights, live percussion or saxophone
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Décor and lighting</td>
                <td className="border border-gray-300 p-4">₹50,000 – ₹2,50,000</td>
                <td className="border border-gray-300 p-4">
                  Fairy lights, lounges, bar backdrop, florals
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Heaters and winter add-ons</td>
                <td className="border border-gray-300 p-4">₹10,000 – ₹40,000</td>
                <td className="border border-gray-300 p-4">
                  Patio heaters, side curtains, a covered lounge
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          To keep it in budget, serve two signature cocktails plus a short
          standard bar instead of a long cocktail menu, choose passed snacks
          over many live counters, and pick a farmhouse that already has
          lights and lawn furniture so décor can focus on the bar and dance
          floor.
        </p>

        {/* =====================================================
            BAR
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Plan the Bar for a Farmhouse Cocktail Party?
        </h2>

        <img
          src="/decoration-8.webp"
          width={683}
          height={1024}
          loading="lazy"
          decoding="async"
          alt="A dark wooden bar counter decorated with pink and red flowers under black drapes, set up for a cocktail party"
          className="w-full md:w-2/3 mx-auto rounded-xl mb-8"
        />

        <p className="mb-8">
          Plan the bar around how many guests will drink, not the total
          invite list, and keep queues short. As a working rule, one
          bartender per 40–50 drinking guests keeps service moving; add a
          mixologist if you want made-to-order cocktails rather than pre-batched
          ones.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          What should be on a cocktail party bar menu?
        </h3>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>Two signature cocktails</strong> named after the couple or
            the theme, one strong and one light. Pre-batch them so they pour
            in seconds.
          </li>
          <li>
            <strong>A standard bar:</strong> whisky, vodka, gin, beer and a red
            and white wine cover most Delhi NCR guest lists.
          </li>
          <li>
            <strong>Two good mocktails</strong> for non-drinkers, older
            relatives and drivers, served at the same counter so nobody feels
            left out.
          </li>
          <li>
            <strong>Winter warmers:</strong> hot toddy, mulled wine or a
            masala chai station work well on December and January nights.
          </li>
          <li>
            <strong>Water, ice and glassware</strong> in excess. Running out of
            ice is the most common bar failure at farmhouse parties.
          </li>
        </ol>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          What food works best at a cocktail party?
        </h3>

        <p className="mb-8">
          Cocktail parties need food that guests can eat standing with a glass
          in one hand. Plan passed snacks (kebabs, tikkas, sliders, chaat
          cups, dim sum) from the start, then open a short dinner buffet around
          9:30 PM. Serving food early slows drinking and keeps the evening
          safer.
        </p>

        {/* =====================================================
            RUN OF SHOW
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Does a Farmhouse Cocktail Party Run-of-Show Look Like?
        </h2>

        <p className="mb-8">
          A good cocktail evening at a Delhi NCR farmhouse runs for about four
          hours, with the loud part finished by 10 PM. Noise rules bar
          loudspeakers in open areas between 10 PM and 6 AM unless the
          authorities give specific permission, so build the night around that.
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
                <td className="border border-gray-300 p-4">5:00 PM</td>
                <td className="border border-gray-300 p-4">
                  Bar setup, sound check, heaters tested, permit on site
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">7:00 PM</td>
                <td className="border border-gray-300 p-4">
                  Guests arrive, welcome drink, passed snacks, lounge music
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">7:45 PM</td>
                <td className="border border-gray-300 p-4">
                  Couple&apos;s entry, short toast by a friend or sibling
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">8:00–10:00 PM</td>
                <td className="border border-gray-300 p-4">
                  DJ set and dance floor; optional live percussion for 30
                  minutes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">9:30 PM</td>
                <td className="border border-gray-300 p-4">
                  Dinner opens; last call for cocktails announced
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">10:00 PM</td>
                <td className="border border-gray-300 p-4">
                  Outdoor music off; move indoors with low-volume music in an
                  indoor lounge
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">11:00 PM</td>
                <td className="border border-gray-300 p-4">
                  Bar closes; drivers and cabs arranged for guests leaving
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            IDEAS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Cocktail Party Ideas That Suit a Farmhouse
        </h2>

        <p className="mb-8">
          A farmhouse gives you open lawn, privacy and space to style the
          evening your way. Ideas that work well in Delhi NCR winters:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>A clear dress code:</strong> black-tie, Indo-western,
            all-white or sequins. It makes photos look planned.
          </li>
          <li>
            <strong>Lounge clusters</strong> with rugs, low seating and patio
            heaters, so guests who do not dance still have a place to sit.
          </li>
          <li>
            <strong>A bar backdrop</strong> with the couple&apos;s monogram, it
            doubles as the main photo spot.
          </li>
          <li>
            <strong>A short live act</strong> such as a saxophonist or dhol
            with the DJ for the first hour, before the dance floor fills.
          </li>
          <li>
            <strong>Friends&apos; toasts</strong> capped at three, two minutes
            each, before the dance floor opens.
          </li>
          <li>
            <strong>A late-night snack</strong> such as maggi, chai or
            parathas after 10:30 PM, when music is low and guests linger.
          </li>
        </ul>

        {/* =====================================================
            WINTER / GRAP
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Winter and Air-Quality Rules Affect a Farmhouse Cocktail Night?
        </h2>

        <p className="mb-8">
          November to January nights in Delhi NCR are cold and often smoggy,
          so plan heating and power with the current GRAP stage in mind. Under
          the stricter GRAP stages, diesel generators and open burning face
          restrictions, which affects backup power, wood bonfires and coal
          tandoors. Ask the owner what power backup the farmhouse uses, choose
          electric or gas patio heaters, and keep a covered or indoor area
          ready in case the air or weather turns bad. Before paying an
          advance, go through our{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse rules checklist
          </Link>{" "}
          for music, liquor, guest and deposit terms.
        </p>

        <p className="mb-8">
          Cocktail parties also need a plan for getting guests home. Book
          drivers or cabs in advance, share the farmhouse pin and gate details
          with them, and make sure nobody who has been drinking drives back,
          especially on foggy nights on the Mehrauli–Gurgaon Road, Sohna Road
          or the Noida Expressway.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Cocktail Party Checklist
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Date fixed 1–2 nights before the wedding, or a free weekend in the off-season</li>
          <li>Farmhouse booked with music cut-off, guest limit and timings in writing</li>
          <li>Liquor permit confirmed: P-10 in Delhi, Haryana or UP permit elsewhere</li>
          <li>Liquor bought from a licensed shop, with bills kept</li>
          <li>Bartenders booked (about one per 40–50 drinking guests), ice and glassware covered</li>
          <li>Signature cocktails and mocktails chosen and tasted</li>
          <li>Passed snacks from 7 PM; dinner from 9:30 PM</li>
          <li>DJ, sound and dance floor booked, with the 10 PM plan agreed</li>
          <li>Heaters, power backup and an indoor or covered fallback space</li>
          <li>Dress code shared with the invite</li>
          <li>Drivers or cabs arranged for guests leaving late</li>
          <li>ID check for younger guests (25 in Delhi; 21 in Haryana and UP)</li>
        </ul>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan Your Cocktail Party With Effortless Events
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
          people book farmhouses, villas and venues for wedding functions,
          cocktail parties, private parties and corporate events.
        </p>

        <p className="mb-8">
          For a cocktail night, that means shortlisting farmhouses that fit
          your guest count and area, checking the owner&apos;s liquor, music
          and timing rules before you pay an advance, and coordinating the
          bar, DJ, lighting, décor and catering so you can enjoy the evening
          with your friends.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          The best farmhouse cocktail parties feel effortless because the
          boring parts were settled early: the permit, the music timing, the
          heaters and the ride home. Fix those first, keep the bar menu short
          and the snacks flowing, and the evening will look after itself. With
          wedding-season dates filling fast, start booking now.
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
            Find a Farmhouse for Your Cocktail Night
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, area, guest count and budget. Effortless Events
            can help you find the right farmhouse and plan a cocktail party
            your friends will talk about.
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
              Plan Your Cocktail Party
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
