import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Sufi Night at a Farmhouse Wedding in Delhi NCR: Cost & Setup",

  description:
    "Planning a Sufi night for a wedding? Qawwali and Sufi singer prices, baithak setup, sound, timing, the 10 PM rule and a booking checklist for Delhi NCR.",

  keywords: [
    "sufi night at farmhouse wedding Delhi NCR",
    "sufi night for wedding Delhi",
    "qawwali for wedding price Delhi",
    "sufi singer booking price for wedding",
    "sufi night decoration ideas",
    "sufi night vs sangeet",
    "qawwali night at mehendi",
  ],

  alternates: { canonical: "/blogs/sufi-night-farmhouse-wedding-delhi-ncr" },

  openGraph: {
    title: "Sufi Night at a Farmhouse Wedding in Delhi NCR: Cost & Setup",
    description:
      "What a Sufi or qawwali night costs in Delhi NCR, which format to book, how to set up baithak seating and sound at a farmhouse, timing and the 10 PM rule.",
    images: ["/decoration-1.webp"],
  },
};

const faqs = [
  {
    q: "What is a Sufi night at a wedding?",
    a: "A Sufi night is a wedding function built around live Sufi music or qawwali, usually performed by a lead singer with harmonium, tabla or dholak and a small chorus. Guests sit close to the stage, often on low baithak seating, and the evening is about listening and joining in rather than choreographed dances. Families hold it as its own night or fold it into the mehendi, cocktail or reception.",
  },
  {
    q: "How much does a Sufi night cost in Delhi?",
    a: "The music alone varies widely. One 2026 Indian price guide (Buddy On Stage) puts professional Sufi or qawwali singers at about ₹40,000 to ₹1,25,000, and StarClinch's Delhi NCR qawwali page lists professional wedding acts at roughly ₹80,000 to ₹3,50,000+ and well-known Sufi artists from ₹3,50,000 upwards. Add sound, stage, seating décor and lighting, which can bring a mid-sized farmhouse Sufi night to roughly ₹2–4 lakh before venue and food (estimate).",
  },
  {
    q: "What is the difference between a Sufi night and a sangeet?",
    a: "A sangeet is a performance and dance night where family members do rehearsed numbers and everyone dances to a DJ. A Sufi night is a listening night led by live musicians, with guests seated around the stage. Many Delhi NCR families now combine them: a Sufi or qawwali set for the first part of the evening, then the DJ.",
  },
  {
    q: "How long does a qawwali or Sufi performance last at a wedding?",
    a: "Most wedding bookings run about 1.5 to 2 hours, often in two sets with a short break, according to one 2026 Indian singer-pricing guide. Artist listings on StarClinch show sets from 60 to 180 minutes. Agree the exact length and the overtime rate in writing.",
  },
  {
    q: "Can a Sufi night go on after 10 PM at a farmhouse in Delhi?",
    a: "Not on outdoor loudspeakers, as a rule. India's noise rules bar loudspeakers and sound systems in open areas between 10 PM and 6 AM except with specific permission, and Delhi Police has required prior permission for loudspeaker use. Start by 7 to 7:30 PM so the main set finishes before 10 PM.",
  },
  {
    q: "Does the singer's fee include the sound system?",
    a: "Often not. One 2026 pricing guide notes that a singer's quoted fee usually excludes sound, and lists separate rentals of about ₹8,000–₹15,000 for a solo PA and ₹20,000–₹50,000 for a full band setup. Some farmhouses have an in-house sound partner, so ask the venue and the artist who provides what.",
  },
  {
    q: "Do you need a music licence for a Sufi night at a wedding?",
    a: "For music at a marriage function, generally no. In 2023 the commerce ministry's DPIIT told copyright societies not to collect royalties for music at wedding functions, citing Section 52(1)(za) of the Copyright Act. Corporate, ticketed or commercial events are treated differently.",
  },
];

const glanceRows = [
  ["What it is", "A seated live-music night of Sufi songs or qawwali, as its own function or part of the mehendi, cocktail or reception"],
  ["Who performs", "Solo Sufi singer, a Sufi fusion band, or a qawwali party (lead singer, harmonium, tabla/dholak, chorus)"],
  ["Artist fee (listed ranges)", "≈ ₹40,000–₹1,25,000 for professional Sufi/qawwali singers (Buddy On Stage, 2026); well-known artists ₹3.5 lakh+ (StarClinch)"],
  ["Set length", "Usually 1.5–2 hours, often in two sets"],
  ["Sound", "Often not included: ≈ ₹8,000–₹50,000 extra depending on line-up (2026 guide)"],
  ["Guest count that works best", "About 50–250 guests seated close to the stage (estimate)"],
  ["Start time", "7–7:30 PM so the main set ends before the 10 PM outdoor loudspeaker cut-off"],
  ["Book", "4–8 weeks ahead for late-November, December and January–February muhurat weekends"],
];

const formatRows = [
  ["Standalone Sufi night", "A full evening of Sufi music, dinner after the main set", "Families who want one calm, seated function among louder ones", "Needs its own venue night and décor"],
  ["Sufi + mehendi", "Afternoon mehendi rolls into an evening Sufi set", "Saving a venue day; older relatives", "Mehendi décor must suit evening lighting"],
  ["Sufi set, then DJ", "A 60–90 minute Sufi or qawwali set, then dancing", "Mixed-age guest lists; replacing part of a sangeet", "Two sound plans; change-over time"],
  ["Sufi at the cocktail", "Acoustic Sufi or ghazal set during drinks and dinner", "Smaller, adult guest lists", "Bar rules and permits apply"],
  ["Sufi at the reception dinner", "Low-volume Sufi music while guests eat and greet the couple", "Receptions with stage photos and a long dinner", "Keep volume low so guests can talk"],
];

const artistRows = [
  ["Solo Sufi singer with tracks or 1–2 musicians", "1–3 people", "Intimate nights, cocktails, dinner music", "Small stage; simple PA"],
  ["Sufi fusion band (guitar, keys, tabla, harmonium)", "4–7 people (typical)", "Mixed-age crowds, Sufi-then-Bollywood sets", "Larger stage and full band sound"],
  ["Traditional qawwali party", "6–10 people (typical): lead singers, harmonium, tabla/dholak, chorus", "A classic qawwali night with clapping and call-and-response", "Floor-level baithak stage, many vocal mics"],
  ["Well-known Sufi artist with own band", "Varies", "Signature function for a large wedding", "Rider: stage, sound spec, green room, travel and stay"],
];

const costRows = [
  ["Sufi singer or qawwali group", "≈ ₹40,000–₹1,25,000 (professional tier, Buddy On Stage 2026); ₹80,000–₹3,50,000+ for professional wedding acts on StarClinch Delhi NCR", "Line-up size, set length, date and how well known the artist is"],
  ["Sound system", "≈ ₹8,000–₹15,000 solo PA; ₹20,000–₹50,000 full band (Buddy On Stage 2026)", "Ask if the artist or farmhouse supplies it"],
  ["Stage and baithak seating décor", "≈ ₹40,000–₹1,50,000 (estimate)", "Floor-level stage, gaddas, bolsters, rugs, low tables"],
  ["Lighting (warm lights, lanterns, diyas-style LEDs)", "≈ ₹15,000–₹50,000 (estimate)", "Often bundled with décor"],
  ["Winter warmth (patio heaters, shawls)", "≈ ₹10,000–₹40,000 (estimate)", "Needed for open lawns in December–January"],
  ["Artist travel and stay (if outstation)", "≈ ₹5,000–₹15,000 travel plus ₹2,000–₹5,000 per night per person (2026 guide)", "Multiply for each band member"],
  ["Overtime", "Quoted per 30 minutes; guides vary from ₹5,000 to ₹25,000", "Fix the rate in the contract"],
];

const runRows = [
  ["6:00 PM", "Sound check; seating, lights and heaters ready"],
  ["7:00 PM", "Guests arrive; tea, kahwa and snacks"],
  ["7:30 PM", "First Sufi or qawwali set (45–60 minutes)"],
  ["8:30 PM", "Short break; dinner counters open"],
  ["8:45 PM", "Second set, with requests and family singing along"],
  ["9:45 PM", "Last song; outdoor sound ends before 10 PM"],
  ["10:00 PM", "Dinner continues quietly, or the party moves indoors at low volume"],
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="sufi-night-farmhouse-wedding-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-11"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-1.webp"
          width={800}
          height={989}
          fetchPriority="high"
          decoding="async"
          alt="Sufi night at a farmhouse wedding in Delhi NCR: a lawn under strings of fairy lights with a floral stage, white seating and lounge sofas set for an evening of live music"
          className="w-full max-w-2xl mx-auto rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Sufi Night at a Farmhouse Wedding in Delhi NCR: Cost, Setup and Timing
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
          A Sufi night at a farmhouse wedding in Delhi NCR has become the
          function many families add when they want one evening that is about
          music and togetherness rather than choreography. Planning one comes
          down to four choices: which kind of act to book, how to seat guests,
          how to handle sound and cold on an open lawn, and how to finish
          before the 10 PM outdoor music cut-off. With wedding dates clustered
          in late November, early December and January–February 2027, good
          qawwali groups are booking up now. This guide gives listed price
          ranges, formats, a setup plan and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            A Sufi night is a seated live-music function of Sufi songs or
            qawwali. In Delhi NCR, professional Sufi or qawwali acts are listed
            at roughly ₹40,000 to ₹3.5 lakh, with sound, stage and seating
            extra. Book 4–8 weeks ahead, seat guests close to a low stage,
            start by 7:30 PM and end outdoor sound before 10 PM.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sufi Night at a Farmhouse: At a Glance
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

        <p className="mb-8 text-base text-gray-600">
          Prices are listed figures from the sources linked below (checked
          November 2026) or clearly labelled estimates. Artist fees change by
          date and demand, so always get a written quote.
        </p>

        {/* =====================================================
            WHAT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is a Sufi Night at a Wedding?
        </h2>

        <p className="mb-8">
          A Sufi night is a wedding function centred on live Sufi music or
          qawwali, where guests sit close to the performers and listen, clap
          and sing along. A traditional qawwali party has one or two lead
          singers, a harmonium, tabla or dholak and a chorus that keeps the
          rhythm with hand claps; a Sufi singer or fusion band mixes Sufi
          classics with well-known film songs in the same mood.
        </p>

        <p className="mb-8">
          It is different from a sangeet. A sangeet is a performance and dance
          night, with family members doing rehearsed numbers and a DJ for
          everyone else. A Sufi night is a listening night first. That is why
          it suits families with many older relatives, couples who want a
          quieter function between a loud sangeet and the wedding, and
          winter evenings when guests would rather stay seated near heaters.
          You do not have to pick one or the other: many families use a Sufi
          set to open the evening and hand over to the DJ afterwards.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Which Sufi night format suits your wedding?
        </h3>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Format</th>
                <th className="border border-gray-300 p-4 text-left">How it runs</th>
                <th className="border border-gray-300 p-4 text-left">Best for</th>
                <th className="border border-gray-300 p-4 text-left">Watch out for</th>
              </tr>
            </thead>
            <tbody>
              {formatRows.map(([a, b, c, d]) => (
                <tr key={a}>
                  <td className="border border-gray-300 p-4 font-semibold">{a}</td>
                  <td className="border border-gray-300 p-4">{b}</td>
                  <td className="border border-gray-300 p-4">{c}</td>
                  <td className="border border-gray-300 p-4">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* =====================================================
            WHEN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Book a Sufi Night for a 2026–27 Wedding?
        </h2>

        <p className="mb-8">
          Book 4–8 weeks before your date, and earlier if your wedding falls on
          a peak muhurat weekend. The 2026 season reopens after Dev Uthani
          Ekadashi in late November, and{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            VedicFeed&apos;s December 2026 marriage calendar
          </a>{" "}
          lists muhurats on 2–6, 11 and 12 December, before Kharmas pauses
          most weddings from mid-December to mid-January. The next wave runs
          from late January into February 2027. Pre-wedding functions fall a
          day or two before these dates, so the same qawwali groups and Sufi
          bands are asked for several evenings in a row. Panchangs differ, so
          confirm your date with your family priest.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Sufi Night Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          The artist is the biggest variable. A{" "}
          <a
            href="https://buddyonstage.com/blogs/singer-booking-price-india"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2026 Indian singer-pricing guide from Buddy On Stage
          </a>{" "}
          puts professional Sufi or qawwali singers at about ₹40,000 to
          ₹1,25,000 and notes a premium for mehendi and cocktail nights. On{" "}
          <a
            href="https://starclinch.com/book-singer-online/qawwali/l--delhi-ncr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            StarClinch&apos;s Delhi NCR qawwali page
          </a>
          , professional wedding acts are listed at roughly ₹80,000 to
          ₹3,50,000+, and well-known Sufi artists with a band at ₹3,50,000 to
          ₹15,00,000+. The same pricing guide says the singer&apos;s fee
          usually does not include sound, and that 30–50% is typically paid as
          an advance.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Line item</th>
                <th className="border border-gray-300 p-4 text-left">Price range</th>
                <th className="border border-gray-300 p-4 text-left">What changes it</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map(([a, b, c]) => (
                <tr key={a}>
                  <td className="border border-gray-300 p-4 font-semibold">{a}</td>
                  <td className="border border-gray-300 p-4">{b}</td>
                  <td className="border border-gray-300 p-4">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample budget: a 150-guest Sufi night at a farmhouse (estimate)
        </h3>

        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li>Professional qawwali group or Sufi band, two sets: ≈ ₹80,000–₹1,50,000</li>
          <li>Sound with enough vocal mics and a sound engineer: ≈ ₹20,000–₹50,000</li>
          <li>Baithak stage, gaddas, bolsters, rugs and low tables: ≈ ₹60,000–₹1,20,000</li>
          <li>Warm lighting and lanterns: ≈ ₹20,000–₹40,000</li>
          <li>Patio heaters for a December or January lawn: ≈ ₹15,000–₹30,000</li>
          <li><strong>Total before venue and food: ≈ ₹1.95–3.9 lakh</strong></li>
        </ul>

        <p className="mb-8">
          Food, drinks and farmhouse rent come on top; our{" "}
          <Link href="/blogs/farmhouse-wedding-cost-delhi-ncr" className="underline">
            farmhouse wedding cost guide
          </Link>{" "}
          explains per-plate and flat-rent pricing. To save money, hold the
          Sufi night at the same farmhouse as the mehendi or wedding so the
          venue, generator and part of the décor are shared.
        </p>

        {/* =====================================================
            WHICH ACT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Qawwali Group, Sufi Singer or Sufi Band: Which Should You Book?
        </h2>

        <p className="mb-8">
          Book a traditional qawwali party if you want the classic clapping,
          call-and-response evening; book a Sufi singer or fusion band if your
          crowd wants Sufi classics mixed with film songs. The size of the act
          also decides your stage and sound, so choose it before you finalise
          décor.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Act</th>
                <th className="border border-gray-300 p-4 text-left">Line-up</th>
                <th className="border border-gray-300 p-4 text-left">Best for</th>
                <th className="border border-gray-300 p-4 text-left">Stage and sound</th>
              </tr>
            </thead>
            <tbody>
              {artistRows.map(([a, b, c, d]) => (
                <tr key={a}>
                  <td className="border border-gray-300 p-4 font-semibold">{a}</td>
                  <td className="border border-gray-300 p-4">{b}</td>
                  <td className="border border-gray-300 p-4">{c}</td>
                  <td className="border border-gray-300 p-4">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          If you are still deciding between live music and a DJ for the rest
          of your functions, our{" "}
          <Link href="/blogs/dj-or-live-band-farmhouse-party-delhi-ncr" className="underline">
            DJ or live band guide
          </Link>{" "}
          compares costs and sound setups.
        </p>

        {/* =====================================================
            SETUP
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Set Up a Sufi Night at a Farmhouse?
        </h2>

        <p className="mb-8">
          Keep the performers low and the guests close. A Sufi night works
          when the audience can see the singers&apos; faces and hear every
          word, so a floor-level or low stage with seating in a semicircle
          beats a tall stage with rows of chairs far away. A farmhouse lawn or
          covered pavilion gives you room to do this, plus space for dinner
          counters away from the music.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Seating and décor ideas that suit a Sufi night
        </h3>

        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li><strong>Baithak seating:</strong> gaddas, bolsters and rugs in front, with sofas or chairs behind for elders who cannot sit on the floor.</li>
          <li><strong>Low stage:</strong> a raised platform of about 1–2 feet with carpets and cushions for a qawwali party that performs seated.</li>
          <li><strong>Warm light:</strong> lanterns, fairy lights in the trees, candle-style LEDs and soft amber washes rather than coloured moving heads.</li>
          <li><strong>Mughal or Rajasthani touches:</strong> jharokha-style backdrops, marigold and rose strings, brass urlis and low tables for chai and kahwa.</li>
          <li><strong>A clear walkway:</strong> keep aisles between seating blocks so waiters can serve without crossing in front of the stage.</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sound, cold and power on an open lawn
        </h3>

        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li><strong>Mics:</strong> a qawwali party needs several vocal and instrument mics; share the artist&apos;s input list with the sound vendor a week ahead.</li>
          <li><strong>Sound engineer:</strong> insist on one who stays through both sets; feedback is the most common problem with harmonium and tabla outdoors.</li>
          <li><strong>Heaters:</strong> December and January nights in Delhi NCR are cold on open lawns; place heaters along the seating, never right next to fabric or the stage drapes.</li>
          <li><strong>Power:</strong> confirm the farmhouse&apos;s grid connection and backup. During higher GRAP stages, diesel generator use can be restricted, so read our{" "}
            <Link href="/blogs/grap-rules-weddings-parties-delhi-ncr" className="underline">
              GRAP rules for weddings guide
            </Link>{" "}
            before relying on one.
          </li>
          <li><strong>Covered option:</strong> if fog or rain is forecast, ask whether a pavilion, hall or tent is available on the same night.</li>
        </ul>

        {/* =====================================================
            TIMING
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Time Should a Sufi Night Start, and How Long Does It Last?
        </h2>

        <p className="mb-8">
          Start the music by 7:30 PM so the main performance finishes before
          10 PM. The Buddy On Stage guide says most wedding bookings run 1.5–2
          hours in two sets with a short break, and artist listings on
          StarClinch show sets of 60 to 180 minutes. A sample run-of-show:
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Time</th>
                <th className="border border-gray-300 p-4 text-left">What happens</th>
              </tr>
            </thead>
            <tbody>
              {runRows.map(([t, w]) => (
                <tr key={t}>
                  <td className="border border-gray-300 p-4 font-semibold">{t}</td>
                  <td className="border border-gray-300 p-4">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Rules Apply to a Sufi Night at a Delhi NCR Farmhouse?
        </h2>

        <p className="mb-8">
          The main rule is the 10 PM outdoor sound cut-off. As{" "}
          <a
            href="https://nyaaya.org/legal-explainer/loudspeakers-and-public-address-system/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Nyaaya&apos;s explainer on the noise rules
          </a>{" "}
          sets out, loudspeakers and public address systems cannot be used in
          open areas between 10 PM and 6 AM except with specific permission. In
          April 2025,{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Delhi Police made prior permission mandatory for loudspeaker use
          </a>
          , with fines for violations. Ask the farmhouse who applies for
          permission and what their own music cut-off is.
        </p>

        <p className="mb-8">
          Copyright is simpler. In a{" "}
          <a
            href="https://www.verdictum.in/news/section-52-1za-copyright-act-1957-department-of-promotion-of-industry-internal-trade-1486660"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2023 public notice reported by Verdictum
          </a>
          , DPIIT told copyright societies not to collect royalties for music
          at wedding functions, citing Section 52(1)(za) of the Copyright Act.
          If you serve alcohol, the usual party liquor permit rules apply; our{" "}
          <Link href="/blogs/cocktail-party-farmhouse-delhi-ncr" className="underline">
            cocktail party at a farmhouse guide
          </Link>{" "}
          covers the Delhi, Haryana and UP permits.
        </p>

        {/* =====================================================
            QUESTIONS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Ask a Sufi or Qawwali Artist Before Booking?
        </h2>

        <ol className="list-decimal pl-8 mb-8 space-y-2">
          <li>How many performers come, and who are the lead singers on the day?</li>
          <li>How long is each set, how many breaks, and what is the overtime rate per 30 minutes?</li>
          <li>Is sound included? If not, what is your input list and stage size?</li>
          <li>Can you send recent wedding videos and a sample setlist?</li>
          <li>Will you take requests, and can you add a few Punjabi or film songs for the family?</li>
          <li>What are travel, stay and food requirements for the team?</li>
          <li>How much is the advance, and what happens if either side cancels or the date moves?</li>
        </ol>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sufi Night Planning Checklist
        </h2>

        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li><strong>6–8 weeks before:</strong> fix the format and guest count; shortlist 3 acts and watch their recent videos.</li>
          <li><strong>4–6 weeks before:</strong> book the artist with a written contract (fee, sets, overtime, sound, advance, cancellation).</li>
          <li><strong>3–4 weeks before:</strong> confirm the farmhouse slot, covered backup, power and music cut-off in writing.</li>
          <li><strong>2–3 weeks before:</strong> book sound, baithak décor, lighting and heaters; share the stage plan with all vendors.</li>
          <li><strong>1 week before:</strong> send the artist the family&apos;s song requests and the run-of-show; confirm arrival and sound-check time.</li>
          <li><strong>On the day:</strong> sound check by 6 PM, music by 7:30 PM, outdoor sound off before 10 PM.</li>
        </ul>

        <p className="mb-8">
          Planning the dance night as well? See our{" "}
          <Link href="/blogs/sangeet-night-farmhouse-delhi-ncr" className="underline">
            sangeet at a farmhouse guide
          </Link>{" "}
          and our{" "}
          <Link href="/blogs/haldi-mehendi-farmhouse-delhi-ncr" className="underline">
            haldi and mehendi farmhouse guide
          </Link>{" "}
          if you want to combine the Sufi night with the mehendi. Adding a
          qawwali to a walima? See our{" "}
          <Link href="/blogs/nikah-walima-farmhouse-delhi-ncr" className="underline">
            nikah and walima at a farmhouse guide
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
          For a Sufi night, we can help you find a farmhouse with the right
          lawn or covered space, plan baithak seating, sound and heating, and
          keep the evening on time so the music ends before the cut-off.
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
            Find a Farmhouse for Your Sufi Night
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count, preferred area and budget.
            Effortless Events can help you shortlist farmhouses across Delhi
            NCR with the lawn, covered space and power a live Sufi or qawwali
            night needs, and coordinate the setup on the day.
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
