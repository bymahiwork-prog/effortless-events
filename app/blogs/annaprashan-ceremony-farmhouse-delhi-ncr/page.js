import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Annaprashan Ceremony at a Farmhouse in Delhi NCR: Cost",

  description:
    "Planning an annaprashan at a farmhouse in Delhi NCR? Dec 2026–Feb 2027 muhurats, the right month for boys and girls, cost estimates, menu and a checklist.",

  keywords: [
    "annaprashan ceremony at farmhouse Delhi NCR",
    "annaprashan ceremony venue Delhi",
    "annaprashan muhurat December 2026",
    "annaprashan muhurat January 2027",
    "annaprashan ceremony cost Delhi NCR",
    "annaprashan in which month for baby boy and girl",
    "annaprashan menu and decoration ideas",
  ],

  alternates: { canonical: "/blogs/annaprashan-ceremony-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Annaprashan Ceremony at a Farmhouse in Delhi NCR: Cost",

    description:
      "Annaprashan dates for Dec 2026–Feb 2027, ritual-plus-lunch formats by guest count, cost estimates, a baby-friendly menu, a day plan and a checklist.",

    images: ["/decoration-6.webp"],
  },
};

const faqs = [
  {
    q: "In which month is annaprashan done for a baby boy and a baby girl?",
    a: "The common custom is an even month for boys (the 6th or 8th) and an odd month for girls (the 5th or 7th). Both VedicFeed and Wikipedia's Annaprashana article describe this rule, but many families simply follow their own priest's advice.",
  },
  {
    q: "What is the first food given at annaprashan?",
    a: "Usually a few grains of sweet rice kheer (payesh in Bengali homes), offered first to the deity and then fed to the baby as prasad with a silver spoon or a ring. It is a token taste, not a full meal.",
  },
  {
    q: "Can annaprashan be done at home or in a temple instead of a venue?",
    a: "Yes. The ritual itself is small and is often done at home or in a temple; Shri Jagannath Mandir in New Delhi, for example, lists anna prasana among its rituals. A farmhouse makes sense when you also want a lunch for 30–100 guests.",
  },
  {
    q: "Can annaprashan be done during Kharmas?",
    a: "Customs differ. Many families avoid ceremonies during Kharmas (16 December 2026 to 14 January 2027, per Hindupad), yet VedicFeed's annaprashan calendar still lists 11 and 14 January 2027. Let your family priest decide.",
  },
  {
    q: "Who feeds the baby first at annaprashan?",
    a: "It depends on the community. In Bengali families the maternal uncle (mama) or grandfather usually feeds the first bite; in many North Indian families it is the father or mother. Agree on this before the day so the photographer is ready.",
  },
  {
    q: "What objects are kept in front of the baby at annaprashan?",
    a: "Families place a few objects such as a book, a pen, coins, soil and food on a plate or banana leaf, and the first one the baby reaches for is said to hint at future interests. It is a playful custom, not a prediction.",
  },
  {
    q: "How much does an annaprashan ceremony cost in Delhi NCR?",
    a: "As a rough planning estimate, an annaprashan with puja and lunch for about 50 guests at a farmhouse often costs ₹1,20,000–₹3,75,000, covering venue, food, décor, pandit and photos. A close-family puja at home or in a temple costs far less.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const link = "text-black underline font-semibold";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="annaprashan-ceremony-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-17"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-6.webp"
          width={736}
          height={1012}
          fetchPriority="high"
          decoding="async"
          alt="Annaprashan ceremony at a farmhouse in Delhi NCR: a long lunch table with white flowers, candles and large white balloons, set for a family celebration"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Annaprashan Ceremony at a Farmhouse in Delhi NCR: Dates, Cost and a
          Baby-Friendly Plan
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
          An annaprashan ceremony at a farmhouse in Delhi NCR lets a family
          hold the baby&apos;s first-rice puja, a relaxed lunch and the
          blessings in one private, open space, instead of fitting forty
          relatives into a flat. This guide covers the right month, the
          muhurat dates listed for December 2026 to February 2027, what the
          day typically costs and how to keep a six-month-old comfortable.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Hold annaprashan in the 6th or 8th month for a boy and the 5th or
            7th month for a girl, on a muhurat your pandit confirms. Listed
            Dec 2026–Feb 2027 dates fall on weekdays, so many families do the
            ritual on the muhurat and host a weekend farmhouse lunch. Budget
            roughly ₹2,400–₹7,500 per guest (estimate).
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Annaprashan: At a Glance
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
                <td className={td}>Baby&apos;s age</td>
                <td className={td}>
                  Boys in the 6th or 8th month, girls in the 5th or 7th month
                  (common custom)
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse format</td>
                <td className={td}>
                  Puja and first feeding late morning, then lunch and blessings
                  for 30–100 guests
                </td>
              </tr>
              <tr>
                <td className={td}>Timing</td>
                <td className={td}>
                  About 10:30 AM–3:30 PM, built around the baby&apos;s nap
                </td>
              </tr>
              <tr>
                <td className={td}>Listed muhurats</td>
                <td className={td}>
                  3 and 14 Dec 2026; 11, 14, 15 and 20 Jan 2027; 8, 11, 18 and
                  19 Feb 2027 (VedicFeed)
                </td>
              </tr>
              <tr>
                <td className={td}>Cost for 50 guests*</td>
                <td className={td}>
                  About ₹1,20,000–₹3,75,000 for venue, food, décor, pandit and
                  photos
                </td>
              </tr>
              <tr>
                <td className={td}>Book ahead</td>
                <td className={td}>
                  3–6 weeks; longer for December weekends, when weddings fill
                  many properties
                </td>
              </tr>
              <tr>
                <td className={td}>Must-checks</td>
                <td className={td}>
                  Warm, quiet room for mother and baby; clean washroom; havan
                  allowed; daytime slot
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
          What Is Annaprashan and When Is It Done?
        </h2>

        <p className="mb-8">
          Annaprashan is the Hindu ceremony in which a baby is fed its first
          solid food, usually a little sweet rice. It is done when the baby is
          about five to eight months old. The widely followed rule, described
          by{" "}
          <a
            href="https://vedicfeed.com/annaprasana-rice-feeding-ceremony"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            VedicFeed
          </a>{" "}
          and the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Annaprashana"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Wikipedia article on Annaprashana
          </a>
          , is an even month (6th or 8th) for boys and an odd month (5th or
          7th) for girls.
        </p>

        <p className="mb-8">
          The age also lines up with ordinary baby-feeding advice. The{" "}
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            World Health Organization
          </a>{" "}
          recommends introducing complementary foods from six months, so for
          most babies the first feeding is a token taste of something they are
          about to start anyway. If your baby is younger or has a feeding
          concern, check with your paediatrician what is safe to offer.
        </p>

        <p className="mb-8">
          Delhi NCR has families from many regions, and the ceremony goes by
          different names: mukhe bhaat in Bengali homes, choroonu in Kerala,
          bhaat khulai in parts of the hills, and pasni in Nepali families.
          The core is the same everywhere: a puja, the food offered as
          prasad, and the baby&apos;s first taste in front of the family.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Annaprashan Muhurat Dates: December 2026 to February 2027
        </h2>

        <p className="mb-8">
          These are the dates listed on{" "}
          <a
            href="https://vedicfeed.com/muhurat/annaprashan-muhurat/january-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            VedicFeed&apos;s annaprashan muhurat calendar
          </a>{" "}
          for the coming winter. Note that none of them falls on a Saturday or
          Sunday.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Date</th>
                <th className={th}>Day</th>
                <th className={th}>Listed window</th>
                <th className={th}>Farmhouse fit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>3 Dec 2026</td>
                <td className={td}>Thursday</td>
                <td className={td}>7:29 AM–12:18 PM</td>
                <td className={td}>Ritual at home; lunch Sat 5 or Sun 6 Dec</td>
              </tr>
              <tr>
                <td className={td}>14 Dec 2026</td>
                <td className={td}>Monday</td>
                <td className={td}>No window given</td>
                <td className={td}>Lunch Sat 12 or Sun 13 Dec, or after</td>
              </tr>
              <tr>
                <td className={td}>11 Jan 2027</td>
                <td className={td}>Monday</td>
                <td className={td}>7:17–8:30 AM</td>
                <td className={td}>Inside Kharmas; check with pandit</td>
              </tr>
              <tr>
                <td className={td}>14 Jan 2027</td>
                <td className={td}>Thursday</td>
                <td className={td}>3:09–5:42 PM</td>
                <td className={td}>Last day of Kharmas; check with pandit</td>
              </tr>
              <tr>
                <td className={td}>15 Jan 2027</td>
                <td className={td}>Friday</td>
                <td className={td}>9:54–11:08 AM; 1:14–2:10 PM</td>
                <td className={td}>Good for a full Friday function</td>
              </tr>
              <tr>
                <td className={td}>20 Jan 2027</td>
                <td className={td}>Wednesday</td>
                <td className={td}>9:55–11:09 AM; 1:53–4:13 PM</td>
                <td className={td}>Ritual on the day; lunch Sat 23 Jan</td>
              </tr>
              <tr>
                <td className={td}>8 Feb 2027</td>
                <td className={td}>Monday</td>
                <td className={td}>9:52–11:09 AM; 12:37–1:55 PM</td>
                <td className={td}>Lunch Sat 6 or Sun 7 Feb</td>
              </tr>
              <tr>
                <td className={td}>11 Feb 2027</td>
                <td className={td}>Thursday</td>
                <td className={td}>8:28–9:46 AM; 11:14 AM–1:55 PM</td>
                <td className={td}>Ritual on the day; lunch Sat 13 Feb</td>
              </tr>
              <tr>
                <td className={td}>18 Feb 2027</td>
                <td className={td}>Thursday</td>
                <td className={td}>3:26–6:10 PM</td>
                <td className={td}>Evening ritual; lunch Sat 20 Feb</td>
              </tr>
              <tr>
                <td className={td}>19 Feb 2027</td>
                <td className={td}>Friday</td>
                <td className={td}>6:58–8:18 AM; 9:47–11:07 AM</td>
                <td className={td}>Good for a full Friday function</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Treat this as a starting list. Other calendars give different dates,
          and many families avoid Kharmas, which{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Hindupad lists
          </a>{" "}
          as 16 December 2026 to 14 January 2027. Ask your pandit to check the
          date against your baby&apos;s birth details and the right month for
          a boy or girl before you pay a venue advance.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Can you hold the lunch on a different day from the muhurat?
        </h3>

        <p className="mb-8">
          Yes, and it is the most practical answer to weekday muhurats. Many
          families feed the baby the first bite at home or in a temple during
          the muhurat with grandparents present, then host the wider family at
          a farmhouse on the nearest weekend. Others choose a Friday muhurat
          (15 January or 19 February) and ask guests to take a half day. Check
          with your priest whether your family custom allows the split.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Hold an Annaprashan at a Farmhouse?
        </h2>

        <p className="mb-8">
          The ritual itself fits in a living room. The problem is everything
          around it: thirty to eighty relatives, a havan in a closed room, no
          parking and a mother who ends up hosting instead of sitting with her
          baby. A banquet hall gives you space but often comes with fixed
          menus, tight slots and a louder function next door. A private
          farmhouse sits in between.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Open-air havan:</strong> smoke stays outdoors and away from
            the baby.
          </li>
          <li>
            <strong>A room of your own:</strong> most properties have at least
            one bedroom where the baby can nap, feed and change in quiet.
          </li>
          <li>
            <strong>Your menu:</strong> many farmhouses allow an outside
            caterer, so a home-style or regional menu is easy (confirm first).
          </li>
          <li>
            <strong>Privacy:</strong> the property is yours for the slot, with
            no DJ next door during the puja.
          </li>
          <li>
            <strong>Parking:</strong> elders get dropped close to the seating
            instead of walking from a street.
          </li>
        </ul>

        <p className="mb-8">
          Farmhouse belts that suit a daytime family function include
          Chattarpur and Mehrauli in South Delhi, Bijwasan near the airport,
          Sohna Road and Gwal Pahari in Gurgaon, and the Noida Expressway belt
          around Sector 135. Choose the one closest to the grandparents, since
          they are the guests who matter most and travel least.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Annaprashan Format Fits Your Guest List?
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Format</th>
                <th className={th}>Guests</th>
                <th className={th}>Best venue</th>
                <th className={th}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Close-family puja</td>
                <td className={td}>10–25</td>
                <td className={td}>Home or temple</td>
                <td className={td}>Ritual and a simple meal; lowest cost</td>
              </tr>
              <tr>
                <td className={td}>Puja plus lunch</td>
                <td className={td}>30–80</td>
                <td className={td}>Farmhouse day slot</td>
                <td className={td}>
                  The most common farmhouse format: ritual, first feeding,
                  lunch, blessings
                </td>
              </tr>
              <tr>
                <td className={td}>Annaprashan plus baby&apos;s welcome</td>
                <td className={td}>80–150</td>
                <td className={td}>Larger farmhouse lawn</td>
                <td className={td}>
                  For families who skipped a bigger naming function earlier
                </td>
              </tr>
              <tr>
                <td className={td}>Split days</td>
                <td className={td}>10 + 50–100</td>
                <td className={td}>Home, then farmhouse</td>
                <td className={td}>
                  First bite on a weekday muhurat; lunch on the weekend
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          If the baby&apos;s naming ceremony was small, the annaprashan is
          often the first time friends meet the baby, so many families fold
          the two into one bigger lunch. Our{" "}
          <Link href="/blogs/naming-ceremony-farmhouse-delhi-ncr" className={link}>
            naming ceremony at a farmhouse guide
          </Link>{" "}
          covers that earlier function and its dates.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does an Annaprashan Ceremony Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          For about 50 guests at a farmhouse, an annaprashan with puja and
          lunch typically lands between ₹1,20,000 and ₹3,75,000 (estimate).
          Venue and food make up most of it; the ritual itself is a small
          share. As a reference for pandit fees,{" "}
          <a
            href="https://www.smartpuja.com/pandit-in-delhi"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            SmartPuja&apos;s Delhi NCR page
          </a>{" "}
          lists a Satyanarayan Katha with samagri from ₹4,100 (November 2026),
          which is a similar scale of home puja.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item</th>
                <th className={th}>Typical range (estimate)</th>
                <th className={th}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Farmhouse day slot</td>
                <td className={td}>₹30,000–₹1,00,000</td>
                <td className={td}>Weekday slots are often cheaper</td>
              </tr>
              <tr>
                <td className={td}>Food (50 guests)</td>
                <td className={td}>₹45,000–₹1,10,000</td>
                <td className={td}>About ₹900–₹2,200 per plate, veg lunch</td>
              </tr>
              <tr>
                <td className={td}>Pandit and samagri</td>
                <td className={td}>₹3,100–₹11,000</td>
                <td className={td}>Plus dakshina as per family custom</td>
              </tr>
              <tr>
                <td className={td}>Décor</td>
                <td className={td}>₹15,000–₹60,000</td>
                <td className={td}>Floral backdrop, baby&apos;s chair, table</td>
              </tr>
              <tr>
                <td className={td}>Photography</td>
                <td className={td}>₹15,000–₹40,000</td>
                <td className={td}>4–5 hours; one candid shooter is enough</td>
              </tr>
              <tr>
                <td className={td}>Silver set and return gifts</td>
                <td className={td}>₹8,000–₹35,000</td>
                <td className={td}>Bowl and spoon, sweets boxes</td>
              </tr>
              <tr>
                <td className={td}>Heaters and covered seating</td>
                <td className={td}>₹5,000–₹20,000</td>
                <td className={td}>December–January only</td>
              </tr>
              <tr className="bg-gray-50">
                <td className={td}>
                  <strong>Total for about 50 guests</strong>
                </td>
                <td className={td}>
                  <strong>₹1,20,000–₹3,75,000</strong>
                </td>
                <td className={td}>Roughly ₹2,400–₹7,500 per guest</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-8">
          Estimates only. A 25-guest lunch might cost about ₹70,000–₹1,60,000;
          a 100-guest function about ₹2,20,000–₹5,50,000, mostly because food
          scales with headcount while venue cost does not.
        </p>

        <p className="mb-8">
          To keep the bill down, pick a weekday or Friday muhurat (venues
          charge less), keep the menu to one main course and two sweets, and
          share the décor setup with a family photo session. Our{" "}
          <Link href="/blogs/farmhouse-party-catering-menu-delhi-ncr" className={link}>
            farmhouse catering guide
          </Link>{" "}
          explains per-plate pricing and how much food to order.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Happens at an Annaprashan? A Farmhouse Day Plan
        </h2>

        <p className="mb-8">
          The ritual lasts roughly one to two hours. A pandit-led puja and
          small havan come first; the food is offered to the deity; then the
          baby is fed a few grains as prasad. In Bengali families the maternal
          uncle or grandfather usually feeds the first bite, while in many
          North Indian homes it is the father or mother. Then comes the
          object-picking game, lunch and blessings.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>9:00 AM:</strong> décor team and caterer arrive; heaters
            and the havan kund set up.
          </li>
          <li>
            <strong>10:30 AM:</strong> family arrives; baby rests in the warm
            room.
          </li>
          <li>
            <strong>11:00 AM:</strong> puja and havan begin (shift this to
            match your muhurat).
          </li>
          <li>
            <strong>12:00 PM:</strong> first feeding of kheer, then the
            object-picking moment.
          </li>
          <li>
            <strong>12:30 PM:</strong> blessings and family photos while the
            baby is still awake.
          </li>
          <li>
            <strong>1:00 PM:</strong> lunch; baby naps indoors.
          </li>
          <li>
            <strong>3:00–3:30 PM:</strong> return gifts and send-off before
            the winter chill sets in.
          </li>
        </ol>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          What is kept on the object-picking plate?
        </h3>

        <p className="mb-8">
          Families usually set out a book, a pen, a few coins, a little soil
          and some food on a banana leaf or silver plate. Whatever the baby
          grabs first is said to hint at future interests. Keep everything
          large enough not to be swallowed, and lift the plate away as soon as
          the photo is taken.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What to Serve at an Annaprashan Lunch
        </h2>

        <p className="mb-8">
          Kheer is the centre of the day, since it is the baby&apos;s first
          food. For guests, most families serve a satvik or plain vegetarian
          lunch, because the event is religious. A Delhi-style menu might be
          puri or kachori, two sabzis, dal, jeera rice, raita and a halwa;
          Bengali families often add payesh, fried rice, cholar dal and
          mishti. Many skip alcohol for a daytime family puja.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Ask the caterer for a separate, plain kheer for the ritual.</li>
          <li>Keep a hot tea and soup counter in December and January.</li>
          <li>Seat elders close to the buffet or arrange plated service.</li>
          <li>Order sweet boxes as return gifts to save on separate favours.</li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How to Keep the Baby Comfortable in Winter
        </h2>

        <p className="mb-8">
          A six-month-old has a short attention span and a strict nap clock,
          so plan the day around the baby rather than the guests. December
          and January mornings in Delhi NCR are cold and often foggy, which is
          why a late-morning start works better than an early muhurat at the
          venue.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            Reserve a heated, smoke-free bedroom near the lawn for feeds and
            naps.
          </li>
          <li>Keep the havan downwind of the seating and away from the baby.</li>
          <li>
            Limit passing the baby around; ask guests to bless from a chair.
          </li>
          <li>
            Pack spare clothes, wipes, sanitiser and the baby&apos;s usual
            blanket.
          </li>
          <li>Keep speakers soft; a bhajan playlist is enough.</li>
          <li>
            Have an indoor plan B in case of fog, rain or poor air quality.
          </li>
        </ul>

        <p className="mb-8">
          Winter air-quality restrictions can affect generators and some
          cooking setups at farmhouses. Our{" "}
          <Link href="/blogs/grap-rules-weddings-parties-delhi-ncr" className={link}>
            GRAP rules guide for parties
          </Link>{" "}
          explains what each stage means for a daytime function.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Annaprashan Décor Ideas
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            A low floral backdrop with the baby&apos;s name and &quot;Annaprashan&quot;
            in Hindi or Bengali script.
          </li>
          <li>
            A decorated baby chair or a cushion seat on a low chowki for the
            feeding.
          </li>
          <li>Banana leaves, marigold torans and brass or silver serveware.</li>
          <li>
            Pastel or white balloons and flowers on the lunch table for
            daylight photos.
          </li>
          <li>Skip candles and loose petals within the baby&apos;s reach.</li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask the Farmhouse Owner Before Booking
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Is a small havan allowed on the lawn?</li>
          <li>Can we bring our own caterer and pandit?</li>
          <li>Which bedroom can the mother and baby use, and is it heated?</li>
          <li>Is there a clean washroom close to the seating?</li>
          <li>Is the generator allowed to run during our slot?</li>
          <li>What time can the décor team enter, and when must we leave?</li>
          <li>Is there covered seating if it is foggy or cold?</li>
          <li>What does the security deposit cover, and when is it refunded?</li>
        </ul>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          family functions such as annaprashan, naming and mundan ceremonies,
          birthdays and weddings, and can shortlist properties with a warm
          indoor room and daytime slots. When your child is a little older,
          our{" "}
          <Link href="/blogs/mundan-ceremony-farmhouse-delhi-ncr" className={link}>
            mundan ceremony at a farmhouse guide
          </Link>{" "}
          covers the next family milestone.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Annaprashan Checklist
        </h2>

        <ul className="space-y-3 mb-12">
          <li>☐ Baby&apos;s month and muhurat confirmed with the pandit</li>
          <li>☐ Kharmas and family customs checked</li>
          <li>☐ Decide: one-day function or ritual first, lunch on the weekend</li>
          <li>☐ Guest list fixed (count elders and children separately)</li>
          <li>☐ Farmhouse booked for a daytime slot, havan allowed</li>
          <li>☐ Warm, quiet bedroom reserved for mother and baby</li>
          <li>☐ Pandit and puja samagri booked</li>
          <li>☐ Plain kheer for the ritual and lunch menu confirmed</li>
          <li>☐ Silver bowl and spoon (or ring) ready; who feeds first agreed</li>
          <li>☐ Object-picking plate prepared with safe, large items</li>
          <li>☐ Photographer briefed on the first-bite moment</li>
          <li>☐ Heaters or covered seating for December–January</li>
          <li>☐ Return gifts and sweet boxes ordered</li>
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
            Planning Your Baby&apos;s Annaprashan?
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
