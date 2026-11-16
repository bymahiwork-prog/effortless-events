import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Tilak Ceremony at a Farmhouse in Delhi NCR: Cost & Dates",

  description:
    "Planning a tilak ceremony at a farmhouse in Delhi NCR? 2026–27 dates, rituals and gifts, tilak vs roka, cost estimates, a day plan and a booking checklist.",

  keywords: [
    "tilak ceremony at farmhouse Delhi NCR",
    "tilak ceremony venue Delhi",
    "tilak ceremony cost Delhi NCR",
    "tilak ceremony rituals",
    "tilak ceremony gifts for groom",
    "tilak vs roka vs engagement",
    "tilak ceremony dates December 2026",
    "who performs tilak ceremony",
  ],

  alternates: {
    canonical: "/blogs/tilak-ceremony-farmhouse-delhi-ncr",
  },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Tilak Ceremony at a Farmhouse in Delhi NCR: Cost & Dates",
    description:
      "When to hold the tilak for a 2026–27 wedding, what happens and who attends, what a farmhouse tilak costs, a day plan and a booking checklist.",
    images: ["/weddings.webp"],
  },
};

const faqs = [
  {
    q: "What is a tilak ceremony in a Hindu wedding?",
    a: "The tilak is a pre-wedding ritual, common in Bihar, Jharkhand, Uttar Pradesh and parts of Rajasthan, in which the bride's family formally accepts the groom. The bride's father or a senior male relative applies a tilak of kumkum or chandan with rice on the groom's forehead after a short puja, followed by gifts and a meal.",
  },
  {
    q: "Who performs the tilak ceremony?",
    a: "Usually the bride's father applies the tilak, and her brother, maternal uncle or another senior male relative may also do so. The bride's brother often ties a sacred thread (kalawa) on the groom's wrist. A pandit leads the puja and sets the muhurat.",
  },
  {
    q: "Where is the tilak ceremony held?",
    a: "Traditionally at the groom's home, with the bride's family arriving as the 'tilak party'. In Delhi NCR many families now hold it at a farmhouse, banquet hall or temple because a flat cannot seat 50–200 guests, a dhol arrival and a sit-down meal.",
  },
  {
    q: "Is tilak the same as roka or engagement?",
    a: "Not exactly. Roka is usually the first informal 'yes' between families, and the engagement or sagai is the ring exchange. The tilak is the bride's side formally honouring the groom. Some families combine tilak with sagai or a ring ceremony on one day, and some sources use the names loosely.",
  },
  {
    q: "How many days before the wedding is the tilak done?",
    a: "There is no fixed rule. Some families hold it weeks or even months before; in Delhi NCR it is now common to hold it a few days to two weeks before the wedding so outstation relatives travel once. The pandit fixes the exact muhurat.",
  },
  {
    q: "What gifts are given in a tilak ceremony?",
    a: "The bride's side typically brings clothes for the groom, sweets, dry fruits, fruit and sometimes jewellery, with gifts for his close relatives. The groom's side often sends clothes, sweets and jewellery back for the bride. Gifts should be voluntary; demanding dowry is an offence under the Dowry Prohibition Act, 1961.",
  },
  {
    q: "Do women attend the tilak ceremony?",
    a: "Customs vary. In older practice the bride and many women of her family did not travel with the tilak party, but today women and children from both sides usually attend, and the bride sometimes joins too. Ask both families early, because it changes the guest count.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const link = "text-black underline font-semibold";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="tilak-ceremony-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-15"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/weddings.webp"
          width={801}
          height={1001}
          fetchPriority="high"
          decoding="async"
          alt="Tilak ceremony at a farmhouse in Delhi NCR: an outdoor lawn set up for a family ceremony with a flower-decked stage, white sofas for elders and rows of guest chairs"
          className="w-full max-w-2xl mx-auto rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Tilak Ceremony at a Farmhouse in Delhi NCR: Dates, Rituals, Cost and
          a Day Plan
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
          A tilak ceremony at a farmhouse in Delhi NCR solves the problem most
          families hit first: the groom&apos;s flat cannot hold the tilak
          party, the dhol, the puja and a sit-down lunch for 50 to 200 people.
          With the 2026–27 wedding season under way, this guide covers what
          the tilak is, when to hold it, what a farmhouse tilak typically
          costs, the gifts, and a day plan you can hand to your caterer.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Hold the tilak on a muhurat your pandit fixes, usually a few days
            to two weeks before the wedding. Book a farmhouse day slot of
            about 11 AM–5 PM with a puja stage, a heated indoor hall and
            parking. For 100 guests, budget roughly ₹2.5–₹6 lakh (estimate,
            excluding gifts), and book 4–8 weeks ahead in peak season.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Tilak Ceremony: At a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Question</th>
                <th className={th}>Short answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Who hosts?</td>
                <td className={td}>
                  Traditionally the groom&apos;s family hosts; the bride&apos;s
                  family arrives as the tilak party with gifts
                </td>
              </tr>
              <tr>
                <td className={td}>Who applies the tilak?</td>
                <td className={td}>
                  Bride&apos;s father, brother or a senior male relative
                </td>
              </tr>
              <tr>
                <td className={td}>Typical guest count</td>
                <td className={td}>50–200 across both sides (estimate)</td>
              </tr>
              <tr>
                <td className={td}>Best time of day in winter</td>
                <td className={td}>
                  Late morning to afternoon, puja by about 1 PM
                </td>
              </tr>
              <tr>
                <td className={td}>2026–27 date windows</td>
                <td className={td}>
                  Late November to about 12 December 2026, then mid-January to
                  February 2027
                </td>
              </tr>
              <tr>
                <td className={td}>Cost for 100 guests</td>
                <td className={td}>
                  Roughly ₹2.5–₹6 lakh excluding gifts (estimate)
                </td>
              </tr>
              <tr>
                <td className={td}>Book the farmhouse</td>
                <td className={td}>4–8 weeks ahead in Nov–Feb</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-500">
          All prices in this guide are planning estimates for Delhi NCR and
          vary by area, date, menu and vendor. Get written quotes before you
          pay an advance.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is a Tilak Ceremony and Who Performs It?
        </h2>

        <p className="mb-8">
          The tilak is a pre-wedding ritual in which the bride&apos;s family
          formally accepts and honours the groom. It is most closely
          associated with Bihar, Jharkhand and Uttar Pradesh, and also appears
          in Rajasthani weddings, so it is common among the many Delhi NCR
          families with roots in those states.
        </p>

        <p className="mb-8">
          Aza Fashions&apos;{" "}
          <a
            href="https://www.azafashions.com/blog/tilak-ceremony-bihar-jharkhand-wedding-meaning-significance-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Bihar and Jharkhand guide
          </a>{" "}
          describes the bride&apos;s father or a senior male relative (an
          uncle or brother) applying the tilak at the groom&apos;s home after a
          puja to Ganesha and the family deity, with gifts and a feast to
          follow. Pernia&apos;s Pop-Up Shop&apos;s{" "}
          <a
            href="https://www.perniaspopupshop.com/wedding-encyclopedia/uttar-pradesh/tilak"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Uttar Pradesh entry
          </a>{" "}
          adds that a priest may perform a havan, the tilak is kumkum with a
          few grains of rice, the fathers exchange garlands, and some families
          hold it in a temple instead of at home.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          The usual order of the ritual
        </h3>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            The bride&apos;s family arrives as the tilak party, often with dhol
            or shehnai, carrying sweets, dry fruits and gift trays.
          </li>
          <li>The groom is seated on a low chowki facing the pandit.</li>
          <li>Ganesh puja, sometimes a short havan.</li>
          <li>
            The bride&apos;s father applies the tilak; brothers and uncles
            follow, and a kalawa thread may be tied on the groom&apos;s wrist.
          </li>
          <li>Gifts are presented and the fathers exchange garlands.</li>
          <li>Blessings, photos and a meal for both families.</li>
        </ol>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Is Tilak the Same as Roka or Engagement?
        </h2>

        <p className="mb-8">
          Not quite, although families and even style guides use the names
          loosely. Manyavar&apos;s{" "}
          <a
            href="https://www.manyavar.com/en-in/blog-tilak-ceremony-meaning-and-significance-in-indian-weddings.html"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            explainer
          </a>{" "}
          says the North Indian version is often called sagan or roka, while
          Pernia&apos;s separates roka (the groom&apos;s family accepting the
          match) from tilak (the bride&apos;s family accepting the groom). In
          practice the difference matters for one reason: who hosts and who
          travels. This is how the three usually compare:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Function</th>
                <th className={th}>What it marks</th>
                <th className={th}>Usual host</th>
                <th className={th}>Typical size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Roka</td>
                <td className={td}>First formal &quot;yes&quot; between families</td>
                <td className={td}>Either side, often small and at home</td>
                <td className={td}>10–40 guests</td>
              </tr>
              <tr>
                <td className={td}>Tilak</td>
                <td className={td}>Bride&apos;s family honours the groom</td>
                <td className={td}>Groom&apos;s side; bride&apos;s side visits</td>
                <td className={td}>50–200 guests</td>
              </tr>
              <tr>
                <td className={td}>Sagai / engagement</td>
                <td className={td}>Ring exchange between bride and groom</td>
                <td className={td}>Either or both sides</td>
                <td className={td}>50–300 guests</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Many families now hold the tilak in the morning and a ring ceremony
          in the evening at the same farmhouse, which saves a second venue
          booking. If that is your plan, read our{" "}
          <Link
            href="/blogs/engagement-ceremony-farmhouse-delhi-ncr"
            className={link}
          >
            engagement ceremony at a farmhouse guide
          </Link>{" "}
          for the evening half.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should the Tilak Be Held for a 2026–27 Wedding?
        </h2>

        <p className="mb-8">
          Hold it on a muhurat fixed by the family pandit, usually a few days
          to two weeks before the wedding. Aza&apos;s guide notes it can also
          be weeks or months earlier; Delhi NCR families increasingly keep it
          close to the wedding so outstation relatives travel once.
        </p>

        <p className="mb-8">
          VedicFeed&apos;s{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            December 2026 calendar
          </a>{" "}
          lists vivah muhurats on 2–6, 11 and 12 December, and its{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/january-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            January 2027
          </a>{" "}
          list restarts on 15 January, with more dates in{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/february-2027"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            February 2027
          </a>
          . The gap is Kharmas, which{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Hindupad
          </a>{" "}
          places from 16 December 2026 to 14 January 2027, and many families
          avoid auspicious functions then. Calendars differ, so go by your own
          pandit. Working from those dates:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Wedding date</th>
                <th className={th}>Likely tilak window</th>
                <th className={th}>Watch out for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Early December 2026 (2–6 Dec)</td>
                <td className={td}>Last week of November</td>
                <td className={td}>
                  Farmhouses busy with weddings on the same dates; book now
                </td>
              </tr>
              <tr>
                <td className={td}>11–12 December 2026</td>
                <td className={td}>Late November to about 8 December</td>
                <td className={td}>Fog and peak traffic on Saturday evenings</td>
              </tr>
              <tr>
                <td className={td}>Mid-to-late January 2027</td>
                <td className={td}>
                  Either before mid-December or after Kharmas ends
                </td>
                <td className={td}>
                  If after, only a few days between tilak and wedding
                </td>
              </tr>
              <tr>
                <td className={td}>February 2027</td>
                <td className={td}>Mid-January to early February</td>
                <td className={td}>
                  Clashes with other families&apos; wedding functions for
                  vendors
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Hold a Tilak at a Farmhouse Instead of at Home?
        </h2>

        <p className="mb-8">
          Because the tilak party arrives in numbers, with music and gift
          trays, and expects to be fed. A farmhouse gives you a gate for the
          dhol arrival, a lawn or hall for the puja, a separate room for the
          groom to get ready, a kitchen area for the caterer and parking for
          30–60 cars, all within one day slot.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Option</th>
                <th className={th}>Works well when</th>
                <th className={th}>Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Groom&apos;s home</td>
                <td className={td}>Under 40 guests, independent house</td>
                <td className={td}>Parking, catering space, neighbours</td>
              </tr>
              <tr>
                <td className={td}>Banquet hall</td>
                <td className={td}>100+ guests, fixed per-plate package</td>
                <td className={td}>
                  Tight time slots, shared lobbies, less room for a dhol
                  arrival
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse day slot</td>
                <td className={td}>
                  50–200 guests who want lawn, puja space and a long lunch
                </td>
                <td className={td}>
                  Need to arrange heaters, sound and sometimes catering
                </td>
              </tr>
              <tr>
                <td className={td}>Temple hall</td>
                <td className={td}>Ritual-first, small, simple meal</td>
                <td className={td}>Limited décor, timings and parking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          For a tilak, the most practical areas are the ones closest to where
          the groom&apos;s family lives: Chattarpur and Bijwasan in South and
          South West Delhi, Najafgarh for West Delhi, Sohna Road and Gwal
          Pahari for Gurgaon, the Noida Expressway belt for Noida and
          Faridabad for families on that side.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Tilak Ceremony at a Farmhouse Cost?
        </h2>

        <p className="mb-8">
          As a planning estimate, a 100-guest farmhouse tilak in Delhi NCR
          typically costs about ₹2.5–₹6 lakh before gifts. Food is the biggest
          line, followed by the farmhouse slot and décor. These line items are
          estimates, not quotes:
        </p>

        <div className="overflow-x-auto mb-8">
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
                <td className={td}>₹60,000–₹2,50,000</td>
                <td className={td}>
                  Higher on wedding-muhurat weekends; some venues charge per
                  plate instead
                </td>
              </tr>
              <tr>
                <td className={td}>Lunch catering</td>
                <td className={td}>₹900–₹2,500 per plate</td>
                <td className={td}>
                  Pure-veg satvik menus are common for the tilak lunch
                </td>
              </tr>
              <tr>
                <td className={td}>Stage, puja setup and flowers</td>
                <td className={td}>₹40,000–₹1,50,000</td>
                <td className={td}>Chowki, mandap-style backdrop, marigold</td>
              </tr>
              <tr>
                <td className={td}>Pandit and puja samagri</td>
                <td className={td}>₹5,000–₹21,000</td>
                <td className={td}>Plus dakshina as per family custom</td>
              </tr>
              <tr>
                <td className={td}>Dhol or shehnai</td>
                <td className={td}>₹8,000–₹40,000</td>
                <td className={td}>For the tilak party arrival</td>
              </tr>
              <tr>
                <td className={td}>Photo and video</td>
                <td className={td}>₹25,000–₹80,000</td>
                <td className={td}>Half-day coverage</td>
              </tr>
              <tr>
                <td className={td}>Heaters, sound and generator</td>
                <td className={td}>₹15,000–₹60,000</td>
                <td className={td}>Check GRAP rules for generators</td>
              </tr>
              <tr>
                <td className={td}>Return gifts and mithai boxes</td>
                <td className={td}>₹200–₹1,000 per box</td>
                <td className={td}>For the visiting tilak party</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Budget by guest count (estimate, excluding gifts)
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>50 guests:</strong> about ₹1.5–₹3.5 lakh, a smaller lawn or
            hall slot and a simple marigold backdrop.
          </li>
          <li>
            <strong>100 guests:</strong> about ₹2.5–₹6 lakh, a full day slot,
            dhol arrival and a proper stage.
          </li>
          <li>
            <strong>200 guests:</strong> about ₹5–₹11 lakh, a larger farmhouse,
            more heaters and two serving lines.
          </li>
        </ul>

        <p className="mb-8">
          Who pays is a family decision. Since the groom&apos;s side
          traditionally hosts, it usually books the venue and lunch, while
          the bride&apos;s side covers the tilak gifts. Agree on the split in
          writing before anyone pays an advance.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Gifts Are Given in a Tilak Ceremony?
        </h2>

        <p className="mb-8">
          The bride&apos;s side typically brings clothes for the groom, sweets,
          dry fruits, fruit and sometimes jewellery, plus gifts for his
          parents and close relatives. Pernia&apos;s UP entry notes the
          groom&apos;s side often sends sweets, clothes and jewellery back for
          the bride. A common tray list:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Outfit for the groom (kurta set, sherwani or dhoti-kurta)</li>
          <li>Coconut, roli, rice, kalawa and supari for the puja thali</li>
          <li>Mithai and dry-fruit trays, often in odd numbers (5, 7, 11)</li>
          <li>Fruit baskets and a gift for the groom&apos;s parents</li>
          <li>Shagun envelope, as the families agree</li>
        </ul>

        <p className="mb-8">
          Gifts should stay voluntary and symbolic. Giving, taking or
          demanding dowry is an offence under the Dowry Prohibition Act, 1961,
          so keep the tray list about blessings, not bargaining.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Should You Set Up a Farmhouse for a Winter Tilak?
        </h2>

        <p className="mb-8">
          Plan the tilak as a daytime function with a warm fallback. Delhi
          NCR mornings in December and January can be foggy and cold, so put
          the puja on a stage near a covered or indoor area and keep the meal
          close by.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Puja stage:</strong> a raised chowki for the groom, a low
            seat for the pandit and enough stage width for the bride&apos;s
            father, brothers and uncles to stand together for photos.
          </li>
          <li>
            <strong>Elders first:</strong> sofas or cushioned chairs in the
            front two rows, with heaters pointed at them, not at the stage.
          </li>
          <li>
            <strong>Arrival lane:</strong> a clear path from the gate to the
            stage for the dhol and gift trays.
          </li>
          <li>
            <strong>Gift table:</strong> a covered table beside the stage so
            trays are displayed, photographed and then locked in a room.
          </li>
          <li>
            <strong>Warmth:</strong> gas patio heaters or electric heaters
            rather than wood fires. Our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className={link}
            >
              GRAP rules guide
            </Link>{" "}
            explains what each pollution stage means for generators, tandoors
            and open fires.
          </li>
          <li>
            <strong>Menu:</strong> a satvik or pure-veg lunch suits most tilak
            families; regional favourites such as litti-chokha, puri-sabzi,
            kheer or malpua make the visiting side feel at home.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Day Plan for a Farmhouse Tilak
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
                <td className={td}>9:00 AM</td>
                <td className={td}>
                  Décor, heaters, sound check; caterer sets up
                </td>
              </tr>
              <tr>
                <td className={td}>10:30 AM</td>
                <td className={td}>
                  Groom&apos;s family arrives; tea and snacks
                </td>
              </tr>
              <tr>
                <td className={td}>11:30 AM</td>
                <td className={td}>Tilak party arrives with dhol at the gate</td>
              </tr>
              <tr>
                <td className={td}>12:00 PM</td>
                <td className={td}>Ganesh puja and tilak on the muhurat</td>
              </tr>
              <tr>
                <td className={td}>12:45 PM</td>
                <td className={td}>Gifts, garlands, family photos</td>
              </tr>
              <tr>
                <td className={td}>1:30 PM</td>
                <td className={td}>Lunch, elders served first</td>
              </tr>
              <tr>
                <td className={td}>3:30 PM</td>
                <td className={td}>Mithai boxes and send-off</td>
              </tr>
              <tr>
                <td className={td}>5:00 PM</td>
                <td className={td}>
                  Slot ends, or reset for an evening ring ceremony
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask the Farmhouse Owner Before Booking
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Is there a covered or indoor hall that seats all guests if it is foggy or cold?</li>
          <li>Are a havan and puja allowed, and where can the fire be lit safely?</li>
          <li>Can we bring our own caterer and pandit, or are they fixed?</li>
          <li>How many cars can park inside, and is there a drop-off at the gate?</li>
          <li>Is the slot fixed (for example 10 AM–5 PM), and what does overtime cost?</li>
          <li>Can we reset the same lawn for an evening function?</li>
          <li>Is there a lockable room for gifts and jewellery?</li>
          <li>What is the generator setup, and is it GRAP-compliant?</li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Tilak Ceremony Booking Checklist
        </h2>

        <ul className="space-y-3 mb-12">
          <li>☐ Muhurat confirmed by the family pandit</li>
          <li>☐ Guest count agreed by both sides, including women and children</li>
          <li>☐ Who pays for what agreed in writing</li>
          <li>☐ Farmhouse day slot booked near the groom&apos;s home</li>
          <li>☐ Caterer, pandit, dhol and photographer confirmed</li>
          <li>☐ Puja samagri and thali ready</li>
          <li>☐ Gift trays packed and listed</li>
          <li>☐ Heaters and indoor backup booked</li>
          <li>☐ Mithai boxes for the tilak party ordered</li>
          <li>☐ Directions and parking details shared with both families</li>
        </ul>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          wedding functions such as the tilak, haldi, mehendi and sangeet. If
          the tilak is one of several functions, our{" "}
          <Link href="/blogs/haldi-mehendi-farmhouse-delhi-ncr" className={link}>
            haldi and mehendi at a farmhouse guide
          </Link>{" "}
          helps you plan the next ones in the same venue, and our guide to a{" "}
          <Link href="/blogs/mata-ki-chowki-farmhouse-delhi-ncr" className={link}>
            mata ki chowki at a farmhouse
          </Link>{" "}
          covers the devotional evening many families hold before the wedding.
        </p>
      </article>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-black text-4xl font-bold mb-10">
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
            Planning a Tilak Ceremony?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share the muhurat, guest count, preferred area and budget.
            Effortless Events can help you find a farmhouse with a day slot, a
            puja-ready lawn and a warm hall for both families.
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
