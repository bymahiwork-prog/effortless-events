import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Naming Ceremony at a Farmhouse in Delhi NCR: 2026 Guide",

  description:
    "Planning a naming ceremony (namkaran) at a farmhouse in Delhi NCR? Late-2026 muhurat dates, cost estimates, baby-safety tips, a day plan and a checklist.",

  keywords: [
    "naming ceremony at farmhouse Delhi NCR",
    "namkaran ceremony venue Delhi",
    "namkaran muhurat December 2026",
    "naming ceremony cost Delhi NCR",
    "on which day is namkaran done",
    "naming ceremony decoration ideas",
    "baby welcome party venue Gurgaon",
  ],

  alternates: { canonical: "/blogs/naming-ceremony-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Naming Ceremony at a Farmhouse in Delhi NCR: 2026 Guide",

    description:
      "Namkaran dates for late 2026 and early 2027, puja-plus-lunch formats by guest count, cost estimates, baby-comfort checks, a day plan and a checklist.",

    images: ["/decoration-1.webp"],
  },
};

const faqs = [
  {
    q: "On which day is the namkaran ceremony done?",
    a: "Traditionally the namkaran is held on the 11th or 12th day after birth. Published guides such as SmartPuja and Astrosight say that if that day is missed, families can hold it on another auspicious day, often the 21st day or any suitable muhurat before the baby's first birthday.",
  },
  {
    q: "Can the naming ceremony be done after one month?",
    a: "Yes. Many Delhi NCR families now do a small home ritual on the 11th or 12th day and hold a bigger naming ceremony or baby welcome party later, once the mother has recovered and the baby is a little older. Ask your family priest for a muhurat that fits your custom.",
  },
  {
    q: "Is Sunday good for a namkaran ceremony?",
    a: "Sources disagree. VedicFeed's 2026–27 namkaran calendar lists several Sundays, while Astrosight names Tuesday, Saturday and Sunday as days to avoid. Since weekend dates matter for guests, ask your pandit to check the exact date against the baby's birth nakshatra before you book a venue.",
  },
  {
    q: "Can namkaran be done during Kharmas?",
    a: "Customs differ. Many families avoid big ceremonies during Kharmas (16 December 2026 to 14 January 2027, per Hindupad), yet some published namkaran calendars, such as VedicFeed's, still list dates in that window. Your family priest's advice should decide it.",
  },
  {
    q: "Who whispers the baby's name in the ear?",
    a: "In most families the father whispers the name into the baby's right ear during the puja. In some communities the father's sister (bua) has this honour; SmartPuja notes that in Gujarati and Maharashtrian traditions the paternal aunt names or whispers the name.",
  },
  {
    q: "How much does a naming ceremony cost in Delhi NCR?",
    a: "As a rough planning estimate, a naming ceremony with puja and lunch at a farmhouse for about 50 guests often costs ₹1,25,000–₹3,50,000, covering the venue, food, décor, pandit and samagri, and photography. A close-family puja for 15–25 people at home costs far less.",
  },
  {
    q: "What should be served at a naming ceremony lunch?",
    a: "Most families serve a satvik or plain vegetarian lunch after the puja, as the event is religious: puri or kachori, two or three sabzis, dal, rice, raita and a sweet such as halwa or kheer, plus tea and snacks on arrival. Many skip alcohol for the daytime ceremony.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const link = "text-black underline font-semibold";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="naming-ceremony-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-08"
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
          alt="Naming ceremony at a farmhouse in Delhi NCR: a white floral stage on a green lawn under string lights, with white chairs set out for family guests"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Naming Ceremony at a Farmhouse in Delhi NCR: Namkaran Dates, Budget
          and Baby-Safe Planning
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
          A naming ceremony at a farmhouse in Delhi NCR lets a family hold the
          namkaran puja, a relaxed lunch and a proper welcome for the baby in
          one private place, without squeezing fifty relatives into a flat.
          This guide covers when to hold it, which dates are listed for late
          2026 and early 2027, what it typically costs, and how to keep a
          newborn and a recovering mother comfortable through the day.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Hold the core namkaran ritual on the 11th or 12th day at home if
            your family follows that custom, then book a farmhouse for a
            bigger puja-plus-lunch on a later muhurat before the first
            birthday. Pick a 10 AM–3 PM slot, a warm indoor room for the baby,
            and book 3–6 weeks ahead. Budget roughly ₹2,500–₹7,000 per guest
            (estimate).
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Naming Ceremony: At a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Decision</th>
                <th className={th}>What works for most Delhi NCR families</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>When after birth</td>
                <td className={td}>
                  Traditionally the 11th or 12th day; if missed, the 21st day
                  or any muhurat before the first birthday
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse format</td>
                <td className={td}>
                  Usually the later, larger function: puja, naming, lunch and
                  blessings for 30–100 guests
                </td>
              </tr>
              <tr>
                <td className={td}>Timing</td>
                <td className={td}>
                  Daytime, about 10 AM–3 PM; puja in the morning muhurat,
                  lunch after
                </td>
              </tr>
              <tr>
                <td className={td}>Best season outdoors</td>
                <td className={td}>
                  Mid-November to February on sunny afternoons, with an indoor
                  room for the baby
                </td>
              </tr>
              <tr>
                <td className={td}>Cost for 50 guests*</td>
                <td className={td}>
                  About ₹1,25,000–₹3,50,000 for venue, food, décor, pandit and
                  photos
                </td>
              </tr>
              <tr>
                <td className={td}>Book ahead</td>
                <td className={td}>
                  3–6 weeks; more for late-November and December weekends,
                  when weddings take many properties
                </td>
              </tr>
              <tr>
                <td className={td}>Must-checks</td>
                <td className={td}>
                  Warm, quiet, smoke-free room for mother and baby; clean
                  washroom; short walk from parking; havan allowed
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-10">
          *All prices in this guide are indicative planning estimates based on
          typical Delhi NCR quotes, not fixed rates. Actual costs depend on
          the property, date, menu and vendors.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          On Which Day Is the Namkaran Ceremony Done?
        </h2>

        <p className="mb-8">
          Traditionally, the namkaran is performed on the 11th or 12th day
          after birth. Guides published by{" "}
          <a
            href="https://www.smartpuja.com/blog/namakaran-sanskar/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            SmartPuja
          </a>{" "}
          and{" "}
          <a
            href="https://astrosight.ai/muhurat/namkaran-muhurat-2026/december"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Astrosight
          </a>{" "}
          both say that if that day is missed, the ceremony can move to the
          21st day or to any auspicious day before the child&apos;s first
          birthday.
        </p>

        <p className="mb-8">
          In practice, many Delhi NCR families now split it in two. A short
          home puja happens on the traditional day with grandparents and the
          pandit. The bigger naming ceremony, the one with cousins, friends
          and a lunch, follows a few weeks or months later, once the mother
          has recovered and the baby has settled into a routine. That second
          function is where a farmhouse makes sense.
        </p>

        <p className="mb-8">
          The ritual itself is short. SmartPuja describes a pandit-led havan
          and puja of about 1.5–2 hours, after which the father (or, in some
          families, the bua) whispers the chosen name into the baby&apos;s
          right ear. Many families choose a name that starts with the
          syllable linked to the baby&apos;s birth nakshatra, so ask your
          pandit for the syllable before you print anything with the name on
          it.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Namkaran Muhurat Dates: Late 2026 and Early 2027
        </h2>

        <p className="mb-8">
          Weekend dates matter most for a farmhouse function, because that is
          when relatives can travel. The table below lists the weekend and
          holiday dates that appear in{" "}
          <a
            href="https://vedicfeed.com/muhurat/namakaran-muhurat/2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            VedicFeed&apos;s namkaran calendar
          </a>{" "}
          for the next three months.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Date</th>
                <th className={th}>Day</th>
                <th className={th}>Planning note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>22 Nov 2026</td>
                <td className={td}>Sunday</td>
                <td className={td}>
                  Two days after the wedding season reopens; book early
                </td>
              </tr>
              <tr>
                <td className={td}>29 Nov 2026</td>
                <td className={td}>Sunday</td>
                <td className={td}>Peak wedding weekend; expect higher rents</td>
              </tr>
              <tr>
                <td className={td}>12–13 Dec 2026</td>
                <td className={td}>Saturday, Sunday</td>
                <td className={td}>
                  Good cold-weather daytime slot; last weekend before Kharmas
                </td>
              </tr>
              <tr>
                <td className={td}>20 Dec 2026</td>
                <td className={td}>Sunday</td>
                <td className={td}>Falls inside Kharmas; check family custom</td>
              </tr>
              <tr>
                <td className={td}>25 Dec 2026</td>
                <td className={td}>Friday (Christmas)</td>
                <td className={td}>
                  Holiday; relatives from abroad may be home; Kharmas applies
                </td>
              </tr>
              <tr>
                <td className={td}>3 and 10 Jan 2027</td>
                <td className={td}>Sundays</td>
                <td className={td}>
                  Coldest, foggiest weeks; plan indoors; Kharmas until 14 Jan
                </td>
              </tr>
              <tr>
                <td className={td}>31 Jan, 7 Feb, 28 Feb 2027</td>
                <td className={td}>Sundays</td>
                <td className={td}>
                  Milder days; good for a lawn lunch after Kharmas
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Treat these as a starting list, not a final answer. Muhurat
          calendars disagree: for December 2026, Astrosight says Drik
          Panchang shows no namkaran muhurat at all, while VedicFeed and
          SmartPuja each list several dates. Astrosight also names Tuesday,
          Saturday and Sunday as days to avoid, while VedicFeed lists many
          Sundays. Many families also skip ceremonies during Kharmas, which{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Hindupad lists
          </a>{" "}
          as 16 December 2026 to 14 January 2027. Ask your pandit to confirm
          the date against the baby&apos;s nakshatra before you pay a venue
          advance.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Hold a Naming Ceremony at a Farmhouse?
        </h2>

        <p className="mb-8">
          A home works well for ten people around a havan. It gets difficult
          at forty: no parking, a smoky living room, a baby who cannot nap,
          and a mother who ends up hosting. A banquet hall solves space but
          often comes with fixed menus, back-to-back slots and loud
          neighbouring functions. A private farmhouse sits in between.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Open-air havan:</strong> the fire and smoke stay outside,
            away from the baby, which is hard to manage indoors at home.
          </li>
          <li>
            <strong>A private room for the baby:</strong> most farmhouses have
            at least one bedroom, so mother and baby can rest, feed and change
            in quiet.
          </li>
          <li>
            <strong>Your own caterer and menu:</strong> many properties allow
            an outside caterer for a satvik lunch (confirm first).
          </li>
          <li>
            <strong>No clash with other events:</strong> the whole property
            is yours for the slot, so there is no DJ next door during the
            puja.
          </li>
          <li>
            <strong>Parking for relatives:</strong> elders can be dropped
            close to the seating instead of walking from a street.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Format Fits Your Guest List?
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Format</th>
                <th className={th}>Guests</th>
                <th className={th}>Timing</th>
                <th className={th}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Close-family puja</td>
                <td className={td}>15–30</td>
                <td className={td}>10 AM–1 PM</td>
                <td className={td}>
                  The traditional-day ritual moved out of a small flat
                </td>
              </tr>
              <tr>
                <td className={td}>Puja and lunch</td>
                <td className={td}>30–70</td>
                <td className={td}>10 AM–3 PM</td>
                <td className={td}>
                  The most common farmhouse format: ritual, naming, lunch,
                  blessings
                </td>
              </tr>
              <tr>
                <td className={td}>Naming plus welcome party</td>
                <td className={td}>70–150</td>
                <td className={td}>11 AM–4 PM</td>
                <td className={td}>
                  Families combining the naming with a big welcome for friends
                  and colleagues
                </td>
              </tr>
              <tr>
                <td className={td}>Naming plus first Lohri</td>
                <td className={td}>40–100</td>
                <td className={td}>Puja at noon, bonfire at dusk</td>
                <td className={td}>
                  Babies born in autumn whose families hold both in January
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          If your baby&apos;s first Lohri falls this January, our{" "}
          <Link href="/blogs/lohri-party-farmhouse-delhi-ncr" className={link}>
            first Lohri party guide
          </Link>{" "}
          covers the 2027 dates and bonfire rules, which can sit neatly after
          an afternoon naming puja.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Naming Ceremony Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          For about 50 guests at a farmhouse, a naming ceremony with puja and
          lunch typically lands between ₹1,25,000 and ₹3,50,000 (estimate).
          The venue and food make up most of it; the ritual itself is a small
          share.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item</th>
                <th className={th}>Typical range for ~50 guests*</th>
                <th className={th}>What changes the price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Farmhouse (day slot)</td>
                <td className={td}>₹35,000–₹1,25,000</td>
                <td className={td}>
                  Area, lawn size, weekend vs weekday, wedding-season demand
                </td>
              </tr>
              <tr>
                <td className={td}>Satvik lunch and tea</td>
                <td className={td}>₹35,000–₹1,00,000</td>
                <td className={td}>
                  Roughly ₹700–₹2,000 per plate; live counters cost more
                </td>
              </tr>
              <tr>
                <td className={td}>Pandit and puja samagri</td>
                <td className={td}>₹5,000–₹21,000</td>
                <td className={td}>
                  Length of havan, family priest vs booked pandit, travel
                </td>
              </tr>
              <tr>
                <td className={td}>Décor and name board</td>
                <td className={td}>₹15,000–₹60,000</td>
                <td className={td}>
                  Fresh vs artificial flowers, stage, cradle, balloon work
                </td>
              </tr>
              <tr>
                <td className={td}>Photography</td>
                <td className={td}>₹15,000–₹45,000</td>
                <td className={td}>Photo only vs photo and video, hours</td>
              </tr>
              <tr>
                <td className={td}>Return gifts and sweets</td>
                <td className={td}>₹10,000–₹40,000</td>
                <td className={td}>Per-family box vs per-guest gift</td>
              </tr>
              <tr>
                <td className={td}>Heaters, tent or misc.</td>
                <td className={td}>₹5,000–₹30,000</td>
                <td className={td}>Cold-day cover, extra staff, cleaning</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-8">
          *Planning estimates only, based on typical Delhi NCR quotes; not
          fixed rates.
        </p>

        <p className="mb-8">
          For food quantities, menu styles and per-plate tiers, see our{" "}
          <Link href="/blogs/farmhouse-party-catering-menu-delhi-ncr" className={link}>
            farmhouse party catering guide for Delhi NCR
          </Link>
          . For a naming lunch, most families keep it simple: puri or
          kachori, two or three sabzis, dal, rice, raita and halwa or kheer.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Keep a Newborn Safe and Comfortable at a Farmhouse?
        </h2>

        <p className="mb-8">
          Plan the day around the baby, not the guests. The baby will be
          small, will need to feed and sleep, and will be passed around by
          many hands. A few choices at booking time make the day calmer. Ask
          your paediatrician about anything specific to your baby, especially
          on high-pollution days.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Check</th>
                <th className={th}>Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>A warm, quiet bedroom near the lawn</td>
                <td className={td}>
                  For feeds, naps and nappy changes away from noise and cold
                </td>
              </tr>
              <tr>
                <td className={td}>Havan seated away from the baby&apos;s room</td>
                <td className={td}>
                  Keeps smoke out of the room; bring the baby out only for the
                  naming moment
                </td>
              </tr>
              <tr>
                <td className={td}>No generator, tandoor or bonfire upwind</td>
                <td className={td}>
                  Exhaust and smoke drift; ask where the DG set is parked
                </td>
              </tr>
              <tr>
                <td className={td}>Hand sanitiser at the entrance</td>
                <td className={td}>
                  Many guests will want to hold the baby
                </td>
              </tr>
              <tr>
                <td className={td}>Soft, low-volume music only</td>
                <td className={td}>
                  Bhajans or instrumental background suits a daytime puja
                </td>
              </tr>
              <tr>
                <td className={td}>Indoor plan B</td>
                <td className={td}>
                  Fog, cold and poor-AQI days are common in Nov–Jan in Delhi
                  NCR
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Pollution can change plans at short notice in winter. If the
          Graded Response Action Plan tightens, generators, tandoors and open
          fires may be restricted; our{" "}
          <Link href="/blogs/grap-rules-weddings-parties-delhi-ncr" className={link}>
            GRAP rules guide for family functions
          </Link>{" "}
          explains what each stage means for your event.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Day Plan for a Naming Ceremony
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-12">
          <li>
            <strong>8:30 AM:</strong> family arrives; pandit sets up the havan
            kund; décor team finishes the name board.
          </li>
          <li>
            <strong>9:30 AM:</strong> mother and baby arrive straight to the
            warm bedroom; first feed.
          </li>
          <li>
            <strong>10:00 AM:</strong> guests arrive; tea, juice and light
            snacks.
          </li>
          <li>
            <strong>10:30 AM–12:00 PM:</strong> puja and havan in the muhurat
            window; the baby joins for the naming and the name is whispered.
          </li>
          <li>
            <strong>12:00 PM:</strong> name reveal on the board or cake;
            elders bless the baby; family photos in good light.
          </li>
          <li>
            <strong>12:30–2:30 PM:</strong> lunch; mother and baby rest
            inside between visits.
          </li>
          <li>
            <strong>2:30–3:00 PM:</strong> return gifts and sweet boxes;
            guests leave before the cold sets in at sunset.
          </li>
        </ol>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Naming Ceremony Decoration Ideas That Photograph Well
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            A floral or fabric backdrop with the baby&apos;s name, revealed
            after the naming rather than before.
          </li>
          <li>
            A decorated cradle (palna) as the centrepiece for the blessing
            photos.
          </li>
          <li>
            Marigold and mango-leaf torans at the entrance, a natural fit for
            a puja.
          </li>
          <li>
            A &quot;guess the name&quot; card or name-meaning board for guests.
          </li>
          <li>
            Pastel or white florals in daylight; skip candles and open flames
            near the cradle.
          </li>
        </ul>

        <p className="mb-8">
          Many of the same décor choices work for a godh bharai. If you are
          planning one for a relative, our{" "}
          <Link href="/blogs/baby-shower-farmhouse-delhi-ncr" className={link}>
            baby shower at a farmhouse guide
          </Link>{" "}
          covers dates, budget and comfort tips for the mother-to-be.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask the Farmhouse Owner Before Booking
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Is a havan with a small fire allowed on the lawn?</li>
          <li>Can we bring our own caterer and pandit?</li>
          <li>Which bedroom can the mother and baby use, and is it heated?</li>
          <li>Is there a clean washroom close to the seating?</li>
          <li>Where is the generator, and will it run during our slot?</li>
          <li>What time can our décor team enter, and when must we leave?</li>
          <li>Is there a covered or indoor area if it is foggy or cold?</li>
          <li>What does the security deposit cover, and when is it refunded?</li>
        </ul>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          family functions such as naming ceremonies, baby showers, birthdays
          and weddings, and can shortlist properties with a warm indoor room
          and daytime slots.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Naming Ceremony Checklist
        </h2>

        <ul className="space-y-3 mb-12">
          <li>☐ Muhurat and baby&apos;s name syllable confirmed with the pandit</li>
          <li>☐ Kharmas and family customs checked</li>
          <li>☐ Guest list fixed (count elders and children separately)</li>
          <li>☐ Farmhouse booked for a daytime slot, havan allowed</li>
          <li>☐ Warm, quiet bedroom reserved for mother and baby</li>
          <li>☐ Pandit and puja samagri booked</li>
          <li>☐ Satvik lunch menu and caterer confirmed</li>
          <li>☐ Name board, cradle and décor ordered</li>
          <li>☐ Photographer briefed on the naming moment</li>
          <li>☐ Return gifts and sweet boxes ordered</li>
          <li>☐ Heaters or covered area arranged for cold days</li>
          <li>☐ Sanitiser, baby bag and spare clothes packed</li>
          <li>☐ Indoor plan B agreed for fog or poor air quality</li>
        </ul>
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
            Planning Your Baby&apos;s Naming Ceremony?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your muhurat date, guest count, preferred area and budget.
            Effortless Events can help you find a farmhouse with a daytime
            slot, a warm room for the baby and space for the havan and lunch.
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
              Plan My Event
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
