import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Mata Ki Chowki at a Farmhouse in Delhi NCR: Cost & Setup",

  description:
    "Planning a mata ki chowki at a farmhouse in Delhi NCR? Chowki vs jagran, timings, mandali prices, cost estimates, samagri, 10 PM rule and a checklist.",

  keywords: [
    "mata ki chowki at farmhouse Delhi NCR",
    "mata ki chowki cost in Delhi",
    "mata ki chowki vs jagran",
    "mata ki chowki samagri list",
    "mata ki chowki before wedding",
    "mata ki chowki timing",
    "jagran party in Delhi NCR",
  ],

  alternates: { canonical: "/blogs/mata-ki-chowki-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Mata Ki Chowki at a Farmhouse in Delhi NCR: Cost & Setup",

    description:
      "Chowki vs jagran, day and evening slots, listed Delhi NCR mandali prices, cost estimates by guest count, darbar setup, samagri, the 10 PM rule and a checklist.",

    images: ["/decoration-1.webp"],
  },
};

const faqs = [
  {
    q: "What is a mata ki chowki?",
    a: "A mata ki chowki is a devotional evening or afternoon in honour of the Goddess, where a bhajan mandali sings in front of a decorated darbar, a jyot is lit, and the event ends with aarti, bhog and prasad. It is a shorter, family-sized version of the night-long Bhagwati jagran.",
  },
  {
    q: "How much does a mata ki chowki cost in Delhi?",
    a: "Delhi NCR mandalis list starting packages from about ₹5,100, and one Delhi NCR provider lists ₹11,000 for a home chowki of up to 50 people and ₹21,000 upwards for 80–500 people. With a farmhouse, satvik dinner, darbar décor and heaters, a 100-guest chowki often totals roughly ₹2–5 lakh (estimate).",
  },
  {
    q: "What is the difference between a mata ki chowki and a jagran?",
    a: "A chowki usually runs 3–4 hours, often about 6–10 PM or as an afternoon slot, and is followed by dinner. A jagran traditionally runs through the night until dawn, with a bigger stage, more singers and jhankis. Many Delhi families now prefer a chowki because guests can attend and still get home at a normal hour.",
  },
  {
    q: "What time should a mata ki chowki start?",
    a: "Evening chowkis usually start between 6 and 7 PM so that bhajans, aarti and bhog finish before 10 PM, when outdoor loudspeakers must stop. An afternoon slot, roughly 12–4 PM, avoids the cut-off altogether and suits winter, when afternoons are the warmest part of the day.",
  },
  {
    q: "What samagri is needed for a mata ki chowki?",
    a: "Mandalis usually send a list after booking. It typically covers a red chunri, coconut, desi ghee and a diya or jyot, flower garlands, kalash, roli and moli, incense, fruit, and bhog such as halwa, sweets or panchmeva, plus prasad packets for guests. Confirm which items the mandali brings and which the family arranges.",
  },
  {
    q: "Can we hold a mata ki chowki before a wedding?",
    a: "Yes. Many North Indian families hold a chowki a few days to a week before the wedding to seek blessings, often on a day suggested by their pandit and kept free of the louder functions. It is also common after a housewarming, a birth, a new business or on a family anniversary.",
  },
  {
    q: "Is a farmhouse suitable for a mata ki chowki?",
    a: "A farmhouse works well when you expect more guests than your home can seat, want parking and a lawn for langar, or cannot play bhajans loudly in a society. Ask the owner for a clean, satvik-friendly day (no bar or non-veg event earlier that day), permission for a jyot, and seating with durries as well as chairs.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "text-black underline font-semibold";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="mata-ki-chowki-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-16"
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
          alt="Mata ki chowki at a farmhouse in Delhi NCR: a farmhouse lawn at dusk with string lights, a flower-decked stage and rows of white chairs that can hold a darbar and guests"
          className="w-full max-h-[640px] object-cover rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Mata Ki Chowki at a Farmhouse in Delhi NCR: Cost, Timings and Setup
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Family Gatherings • Last updated: November
          2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A mata ki chowki at a farmhouse in Delhi NCR suits families whose
          guest list has outgrown the living room, who live in a society
          where bhajans on speakers draw complaints, or who want the chowki,
          the langar and the parking in one place. This guide explains how a
          chowki differs from a jagran, which slot to pick in winter, what
          Delhi NCR mandalis list as prices, what the whole event costs by
          guest count, how to set up the darbar, the 10 PM loudspeaker rule
          and a booking checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Book a bhajan mandali and a farmhouse 3–6 weeks ahead, choose an
            afternoon slot (about 12–4 PM) or an evening slot that starts by
            6–7 PM, and finish bhajans, aarti and bhog before 10 PM. Listed
            Delhi NCR mandali packages start around ₹5,100–₹21,000; a
            100-guest farmhouse chowki with satvik dinner often totals about
            ₹2–5 lakh (estimate).
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Mata Ki Chowki at a Farmhouse: At a Glance
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Decision</th>
                <th className={th}>What works for most Delhi NCR families</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Format</td>
                <td className={td}>
                  Chowki (3–4 hours) rather than an all-night jagran
                </td>
              </tr>
              <tr>
                <td className={td}>Slot</td>
                <td className={td}>
                  Afternoon about 12–4 PM, or evening about 6–10 PM with dinner
                  after
                </td>
              </tr>
              <tr>
                <td className={td}>Guest count</td>
                <td className={td}>
                  50–250; a farmhouse makes sense above roughly 50
                </td>
              </tr>
              <tr>
                <td className={td}>Mandali (listed prices)</td>
                <td className={td}>
                  From about ₹5,100; ₹11,000 for a home chowki up to 50
                  people; ₹21,000+ for 80–500 people
                </td>
              </tr>
              <tr>
                <td className={td}>All-in budget (estimate)</td>
                <td className={td}>
                  About ₹1–2.5 lakh (50 guests), ₹2–5 lakh (100), ₹4–9 lakh
                  (200)
                </td>
              </tr>
              <tr>
                <td className={td}>Food</td>
                <td className={td}>
                  Satvik: halwa-chana or puri-sabzi bhog, then a pure-veg
                  dinner or langar
                </td>
              </tr>
              <tr>
                <td className={td}>Hard limit</td>
                <td className={td}>
                  Outdoor loudspeakers off by 10 PM; open-flame jyot kept
                  sheltered
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Budget figures in this guide are rough estimates based on typical
          Delhi NCR quotes unless a source is linked. Mandali prices are as
          listed on provider websites in November 2026 and change with
          season, date and team size.
        </p>

        {/* =====================================================
            CHOWKI VS JAGRAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is the Difference Between a Mata Ki Chowki and a Jagran?
        </h2>

        <p className="mb-6">
          A chowki is a shorter devotional gathering of about 3–4 hours,
          while a jagran (jagrata) traditionally runs through the night until
          dawn. Both have a darbar of the Goddess, a lit jyot, a bhajan
          mandali, aarti and bhog. The jagran adds more singers, a bigger
          stage and often jhankis, where artists dress as deities.
        </p>

        <p className="mb-8">
          A 2018 blog on{" "}
          <a
            href="https://www.thequint.com/voices/blogs/goodbye-jagrans-enter-mata-ki-chowki"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            The Quint
          </a>{" "}
          described how night-long jagrans faded in Delhi as working
          routines made staying up till dawn hard, and the chowki, roughly 7
          to 10 PM followed by dinner, took their place. The format is
          getting fresh attention: in October 2026{" "}
          <a
            href="https://curlytales.com/india/trending/gen-z-turns-mata-ki-chowki-into-a-festive-night-of-bhajans-dancing-punya-points/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Curly Tales
          </a>{" "}
          reported on a young host&apos;s chowki with live guitar and cajon
          alongside the bhajans, shared from his Instagram.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Point</th>
                <th className={th}>Mata ki chowki</th>
                <th className={th}>Jagran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Duration</td>
                <td className={td}>About 3–4 hours</td>
                <td className={td}>Through the night</td>
              </tr>
              <tr>
                <td className={td}>Typical guests</td>
                <td className={td}>Family, neighbours, close friends</td>
                <td className={td}>Larger community gatherings</td>
              </tr>
              <tr>
                <td className={td}>Stage</td>
                <td className={td}>Darbar on a low platform or chowki</td>
                <td className={td}>Raised stage, lights, jhanki space</td>
              </tr>
              <tr>
                <td className={td}>Sound</td>
                <td className={td}>Small to medium system</td>
                <td className={td}>Larger system, more speakers</td>
              </tr>
              <tr>
                <td className={td}>Fit with the 10 PM rule</td>
                <td className={td}>Easy if it starts by 6–7 PM</td>
                <td className={td}>
                  Needs an enclosed hall with low volume after 10 PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The same planning applies to a Sai Sandhya, a Khatu Shyam bhajan
          sandhya or a kirtan: a devotional stage, a sound system, seating on
          the floor and chairs, bhog and a meal.
        </p>

        {/* =====================================================
            WHEN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Do Families Hold a Mata Ki Chowki?
        </h2>

        <p className="mb-6">
          Families hold a chowki whenever they want to give thanks or seek
          blessings, so there is no single season. The common occasions in
          Delhi NCR are:
        </p>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>
            <strong>Before a wedding:</strong> a few days to a week before the
            pheras, kept apart from the louder functions. With{" "}
            <a
              href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              VedicFeed
            </a>{" "}
            listing December 2026 wedding dates on 2–6, 11 and 12 December,
            pre-wedding chowkis fall in late November and early December.
          </li>
          <li>
            <strong>After a wedding or a birth:</strong> to welcome the bride
            or the baby into the family.
          </li>
          <li>
            <strong>Housewarming, a new business or a new car:</strong> often
            on the first weekend after the move or opening.
          </li>
          <li>
            <strong>Anniversaries and wishes fulfilled:</strong> a recovery, a
            job, an admission or a family milestone.
          </li>
          <li>
            <strong>Navratri:</strong> the traditional peak, in spring and
            autumn.
          </li>
        </ul>

        <p className="mb-8">
          Some families avoid fresh auspicious beginnings during Kharmas,
          which{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Hindupad
          </a>{" "}
          dates to 16 December 2026–14 January 2027, while others see a
          devotional chowki as fine at any time. Ask your family pandit
          before fixing a date in that window. If the chowki is part of a
          wedding week, our{" "}
          <Link
            href="/blogs/tilak-ceremony-farmhouse-delhi-ncr"
            className={linkClass}
          >
            tilak ceremony at a farmhouse guide
          </Link>{" "}
          shows how to fit the family functions around the muhurat.
        </p>

        {/* =====================================================
            VENUE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse, Home, Banquet or Temple: Which Venue Fits?
        </h2>

        <p className="mb-6">
          Choose a farmhouse when the guest list is above about 50, parking
          is a problem at home, or society rules limit sound. Stay at home
          for a small chowki of 25–40 people, where it feels most personal.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Venue</th>
                <th className={th}>Best for</th>
                <th className={th}>Watch out for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Home or society hall</td>
                <td className={td}>25–60 guests, lowest cost</td>
                <td className={td}>
                  Parking, neighbours, society sound rules, kitchen load
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse</td>
                <td className={td}>
                  60–250 guests, langar on the lawn, family stays over
                </td>
                <td className={td}>
                  Previous-night parties, liquor and non-veg policy, cold
                  evenings
                </td>
              </tr>
              <tr>
                <td className={td}>Banquet hall</td>
                <td className={td}>Enclosed hall, fixed per-plate pricing</td>
                <td className={td}>
                  Tight slot times, in-house caterer may not do satvik well
                </td>
              </tr>
              <tr>
                <td className={td}>Temple or dharamshala hall</td>
                <td className={td}>Devotional setting, modest budgets</td>
                <td className={td}>
                  Limited dates, own rules on sound, food and timings
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Around Delhi NCR, farmhouse belts that families commonly use for
          functions include Chattarpur and the Mehrauli–Gurgaon Road side in
          South Delhi, Bijwasan and Kapashera near Dwarka, Alipur on GT
          Karnal Road, Faridabad, Sohna Road and the Noida Expressway. Pick
          the one closest to most of your elders, because a chowki skews
          older and an hour&apos;s drive back after dark in December fog is
          the main reason relatives skip it.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Mata Ki Chowki Cost in Delhi NCR?
        </h2>

        <p className="mb-6">
          The mandali is the smallest part of the bill; the venue and food
          make up most of it. Listed Delhi NCR mandali prices start low:{" "}
          <a
            href="https://jagrankiparty.in/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Jagran Ki Party
          </a>{" "}
          advertises packages from ₹5,100 across Delhi, Noida, Gurugram and
          Faridabad, and{" "}
          <a
            href="https://bookingevents.in/mata-ki-chowki/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Booking Events
          </a>{" "}
          lists about ₹11,000 for a home chowki of up to 50 people (darbar,
          sound, singers and musicians) and from ₹21,000 for 80–500 people
          with a lit murti darbar and a bigger sound setup, with an overall
          range of roughly ₹11,000 to ₹1 lakh depending on the team.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Line item</th>
                <th className={th}>Typical range (estimate)</th>
                <th className={th}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Bhajan mandali</td>
                <td className={td}>₹5,100–₹1,00,000</td>
                <td className={td}>
                  Listed prices above; known singers cost more
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse (afternoon or evening slot)</td>
                <td className={td}>₹40,000–₹2,00,000</td>
                <td className={td}>
                  Depends on area, lawn size and day of week
                </td>
              </tr>
              <tr>
                <td className={td}>Satvik dinner or langar</td>
                <td className={td}>₹500–₹1,400 per guest</td>
                <td className={td}>Pure veg, often no onion or garlic</td>
              </tr>
              <tr>
                <td className={td}>Darbar décor and flowers</td>
                <td className={td}>₹15,000–₹75,000</td>
                <td className={td}>Marigold, roses, backdrop, lighting</td>
              </tr>
              <tr>
                <td className={td}>Jhanki artists</td>
                <td className={td}>₹5,000–₹25,000</td>
                <td className={td}>Optional; confirm with the mandali</td>
              </tr>
              <tr>
                <td className={td}>Seating (durries, chairs, shamiana)</td>
                <td className={td}>₹10,000–₹40,000</td>
                <td className={td}>Floor seating in front, chairs behind</td>
              </tr>
              <tr>
                <td className={td}>Heaters (winter evenings)</td>
                <td className={td}>₹8,000–₹30,000</td>
                <td className={td}>Check generator and GRAP limits</td>
              </tr>
              <tr>
                <td className={td}>Bhog, prasad packets, chunris</td>
                <td className={td}>₹5,000–₹25,000</td>
                <td className={td}>Return gifts are optional</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample budget: evening chowki for 100 guests (estimate)
        </h3>

        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Farmhouse evening slot: ₹75,000</li>
          <li>Bhajan mandali with sound and darbar: ₹31,000</li>
          <li>Darbar flowers and lights: ₹35,000</li>
          <li>Satvik dinner, 100 × ₹900: ₹90,000</li>
          <li>Durries, chairs and shamiana: ₹20,000</li>
          <li>Heaters: ₹15,000</li>
          <li>Bhog, prasad and chunris: ₹15,000</li>
          <li>Buffer for extras and tips: ₹20,000</li>
        </ul>

        <p className="mb-8">
          <strong>Total: about ₹3 lakh.</strong> A 50-guest afternoon chowki
          at a smaller farmhouse can come in near ₹1–1.5 lakh, while 200
          guests with a well-known singer and jhankis can pass ₹8 lakh. For
          menu ideas that work for a mixed-age crowd, see our{" "}
          <Link
            href="/blogs/farmhouse-party-catering-menu-delhi-ncr"
            className={linkClass}
          >
            farmhouse party catering guide
          </Link>
          .
        </p>

        {/* =====================================================
            SETUP AND SAMAGRI
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Set Up the Darbar and What Samagri Is Needed?
        </h2>

        <p className="mb-6">
          Set the darbar at one end of the lawn or hall, facing the guests,
          on a low platform with a sheltered spot for the jyot. Put durries
          and cushions in front for those who sit on the floor and chairs
          behind for elders.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Typical samagri list (confirm with your mandali)
        </h3>

        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Red chunri for the Goddess, plus chunris for guests if you wish</li>
          <li>Coconut, kalash, mango leaves, roli, moli and rice</li>
          <li>Desi ghee, a jyot or diya, cotton wicks and matches</li>
          <li>Flower garlands, loose petals and incense</li>
          <li>Fruit, dry fruit or panchmeva for bhog</li>
          <li>Halwa, chana and puri, or sweets, for the main bhog</li>
          <li>Prasad packets and a donation box or thali</li>
        </ul>

        <p className="mb-8">
          Booking Events notes that its mandali shares a samagri list (chunri,
          coconut, desi ghee, mala and bhog) after booking. Many mandalis
          bring the darbar, pictures or murtis and sound, while the family
          provides the bhog and flowers. Write down who brings what, because
          the missing item on the day is usually the ghee or the matches.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Farmhouse-specific setup points
        </h3>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>
            <strong>Clean, satvik day:</strong> ask that no bar or non-veg
            event runs at the property earlier the same day, and that the
            lawn is cleaned before the darbar goes up.
          </li>
          <li>
            <strong>Jyot safety:</strong> place the flame away from drapes and
            dry flowers, inside a glass chimney if it is windy, with a fire
            extinguisher nearby.
          </li>
          <li>
            <strong>Power:</strong> sound and lights need a steady supply;
            check whether a diesel generator can run under the current GRAP
            stage.
          </li>
          <li>
            <strong>Warmth:</strong> December and January evenings get cold, so
            add heaters near floor seating and shawls for elders.
          </li>
          <li>
            <strong>Footwear:</strong> keep a shoe area near the entrance to
            the darbar, with a mat or durrie.
          </li>
        </ul>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can You Play Bhajans on Speakers After 10 PM?
        </h2>

        <p className="mb-6">
          No, not outdoors. Under the Noise Pollution Rules, loudspeakers
          cannot be used between 10 PM and 6 AM except in closed premises,
          though a state can relax this to midnight on a limited number of
          days a year for cultural or religious occasions, as{" "}
          <a
            href="https://nyaaya.org/legal-explainer/loudspeakers-and-public-address-system/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Nyaaya explains
          </a>
          . In April 2025 Delhi Police{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            made prior permission mandatory for loudspeaker use
          </a>
          , with fines for violations.
        </p>

        <p className="mb-8">
          In practice: start an evening chowki by 6–7 PM, keep aarti before
          9:30 PM, and switch to unamplified singing or silence after 10 PM.
          If you want a full night jagran, use an enclosed hall and keep the
          volume low. Ask the farmhouse owner whether they handle the
          permission or you do. Our{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className={linkClass}
          >
            farmhouse rules to check before booking
          </Link>{" "}
          guide lists the other terms to confirm, from guest caps to the
          security deposit.
        </p>

        {/* =====================================================
            RUN OF SHOW
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Run-of-Show for an Evening Chowki
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Time</th>
                <th className={th}>What happens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>4:30 PM</td>
                <td className={td}>
                  Mandali arrives, darbar and sound set up, sound check
                </td>
              </tr>
              <tr>
                <td className={td}>6:00 PM</td>
                <td className={td}>Family puja, Ganesh vandana, jyot lit</td>
              </tr>
              <tr>
                <td className={td}>6:30 PM</td>
                <td className={td}>Guests arrive; tea and light snacks</td>
              </tr>
              <tr>
                <td className={td}>7:00–9:00 PM</td>
                <td className={td}>Bhajans; jhankis if booked</td>
              </tr>
              <tr>
                <td className={td}>9:00 PM</td>
                <td className={td}>Aarti, then bhog offered</td>
              </tr>
              <tr>
                <td className={td}>9:20 PM</td>
                <td className={td}>Prasad distributed, chunris given</td>
              </tr>
              <tr>
                <td className={td}>9:30–10:30 PM</td>
                <td className={td}>
                  Satvik dinner; speakers off by 10 PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          For an afternoon chowki, shift everything earlier: puja at 12 PM,
          bhajans 12:30–3 PM, aarti at 3 PM and lunch after. It is warmer,
          easier for elders and avoids the night drive.
        </p>

        {/* =====================================================
            QUESTIONS AND CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask the Mandali and the Farmhouse
        </h2>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>How many singers and musicians come, and for how many hours?</li>
          <li>Does the price include darbar, murtis, lights and sound?</li>
          <li>Which samagri do you bring, and which do we arrange?</li>
          <li>Are jhankis included or extra, and how many?</li>
          <li>What are the travel, overtime and advance terms?</li>
          <li>
            Farmhouse: is the property free of other events that day, and is
            outside satvik catering allowed?
          </li>
          <li>Farmhouse: is an open-flame jyot allowed, and where?</li>
          <li>
            Farmhouse: who handles loudspeaker permission, and what is the
            sound cut-off?
          </li>
          <li>Farmhouse: is backup power available, and are heaters provided?</li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Mata Ki Chowki Booking Checklist
        </h2>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>
            <strong>4–6 weeks before:</strong> fix the date with your pandit,
            pick afternoon or evening, set the guest count and budget.
          </li>
          <li>
            <strong>3–5 weeks before:</strong> book the mandali and the
            farmhouse; get both quotes in writing on WhatsApp or email.
          </li>
          <li>
            <strong>3 weeks before:</strong> book the satvik caterer, décor
            and seating; send invitations.
          </li>
          <li>
            <strong>1 week before:</strong> get the samagri list, buy bhog
            items and chunris, confirm heaters and power.
          </li>
          <li>
            <strong>2 days before:</strong> reconfirm times with the mandali,
            caterer and owner; share the location pin with elders.
          </li>
          <li>
            <strong>On the day:</strong> check the jyot spot and extinguisher,
            run a sound check, keep the shoe area and prasad table ready.
          </li>
        </ul>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Effortless Events Helps With a Mata Ki Chowki
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          weddings, family functions, private parties and corporate events.
          For a chowki, that means shortlisting farmhouses close to your
          family with a clean, satvik-friendly slot, checking sound and flame
          rules upfront, and lining up the caterer, décor and heaters around
          your mandali.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          A chowki at a farmhouse gives everyone room to sit, sing and eat
          together without worrying about neighbours or parking. Pick a slot
          that ends before 10 PM, book the mandali first, keep the food
          satvik and the jyot safe, and give elders a warm, short drive home.
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
            Find a Farmhouse for Your Mata Ki Chowki
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count, preferred area and budget.
            Effortless Events can help you shortlist farmhouses and plan the
            timings, food and setup around your mandali.
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
              Plan My Chowki
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
