import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Bhaat Ceremony at a Farmhouse in Delhi NCR: Mayra & Cost",

  description:
    "Hosting a bhaat (mayra) ceremony at a farmhouse in Delhi NCR? What happens, bhaat nyotna, gift list, 2026–27 timing, cost estimates and a day plan.",

  keywords: [
    "bhaat ceremony at farmhouse Delhi NCR",
    "mayra ceremony meaning",
    "bhaat nyotna rasam",
    "bhaat ceremony gifts list",
    "bhaat ceremony cost Delhi NCR",
    "mayra ceremony venue Delhi Gurgaon",
    "how many days before wedding is bhaat",
  ],

  alternates: {
    canonical: "/blogs/bhaat-mayra-ceremony-farmhouse-delhi-ncr",
  },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Bhaat Ceremony at a Farmhouse in Delhi NCR: Mayra & Cost",
    description:
      "What the bhaat or mayra is, who brings what, when to hold it for a 2026–27 wedding, what a farmhouse bhaat costs, a day plan and a checklist.",
    images: ["/decoration-5.webp"],
  },
};

const faqs = [
  {
    q: "What is the bhaat or mayra ceremony?",
    a: "Bhaat, also called mayra, is a pre-wedding ritual in Rajasthani, Marwari and many Haryanvi and western UP families. The bride's or groom's maternal uncle (mama) and his family arrive with clothes, jewellery, sweets and shagun for the bride or groom, their parents and siblings, and are welcomed by the sister with tilak and aarti.",
  },
  {
    q: "Who gives the bhaat?",
    a: "The maternal side gives it: the mother's brothers (the bride's or groom's mamas), usually with the maternal grandparents and the mamas' families. Today other maternal relatives often share the gifts, and the amount is a family decision rather than a fixed rule.",
  },
  {
    q: "How many days before the wedding is the bhaat done?",
    a: "Most guides place the mayra one or two days before the wedding, and some families hold it on the wedding day itself. The bhaat nyotna, when the mother invites her brothers, happens earlier on a day the family fixes. Your family elders and pandit decide the exact day.",
  },
  {
    q: "What is bhaat nyotna?",
    a: "Bhaat nyotna (also called battisi in some Marwari families) is the formal invitation. The bride's or groom's mother visits her brothers' home with jaggery, rice and other traditional items, sings invitation songs, applies tilak and asks them to come and fill the bhaat at her child's wedding.",
  },
  {
    q: "What is given in a bhaat ceremony?",
    a: "Commonly clothes for the bride or groom and their parents and siblings, a chunari or saree for the mother, jewellery, sweets, dry fruits and cash shagun. The list varies by community and family. Keep gifts voluntary, and keep a written list of presents as the dowry rules expect.",
  },
  {
    q: "Is the bhaat done at both the bride's and groom's house?",
    a: "Yes. The ceremony happens on both sides: the bride's maternal uncle fills the bhaat at her home or venue, and the groom's maternal uncle does the same at his. Each family plans its own mayra, often on a different day or slot.",
  },
  {
    q: "Can the bhaat ceremony be held at a farmhouse?",
    a: "Yes. The ritual has no fixed venue, so many Delhi NCR families now host it at a farmhouse day slot because a flat cannot fit 50–250 guests, a dhol arrival, gift trays on display and a sit-down meal. Confirm puja, music timings and parking with the owner first.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const link = "text-black underline font-semibold";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="bhaat-mayra-ceremony-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-20"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-5.webp"
          width={736}
          height={1313}
          fetchPriority="high"
          decoding="async"
          alt="Bhaat ceremony at a farmhouse in Delhi NCR: a fairy-light curtain stage with pastel flowers where the maternal uncle's family presents the mayra gifts"
          className="w-full max-w-2xl mx-auto rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Bhaat Ceremony at a Farmhouse in Delhi NCR: Mayra Rituals, Gifts,
          Cost and a Day Plan
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
          A bhaat ceremony at a farmhouse in Delhi NCR has become the easy
          answer for families whose mayra has outgrown the living room. When
          the mamas arrive with a dhol, a line of gift trays and 50 to 200
          relatives who all expect to be fed, a flat or a lane in Rohini,
          Gurgaon or Faridabad simply cannot hold it. This guide explains what
          the bhaat is, the bhaat nyotna invitation, when to hold it for a
          2026–27 wedding, what a farmhouse mayra typically costs and a day
          plan you can share with both sides.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            The bhaat (mayra) is when the maternal uncle&apos;s family brings
            clothes, jewellery, sweets and shagun for the bride or groom,
            usually one or two days before the wedding. For a farmhouse
            bhaat, book an 11 AM–5 PM day slot with a stage, a warm hall and
            parking. For 100 guests, budget roughly ₹2–₹5 lakh (estimate,
            excluding gifts).
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Bhaat Ceremony: At a Glance
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
                <td className={td}>Other names</td>
                <td className={td}>
                  Mayra, myra, bhaat bharna; mameru or mamera in Gujarati
                  families
                </td>
              </tr>
              <tr>
                <td className={td}>Who brings the bhaat?</td>
                <td className={td}>
                  The mother&apos;s brothers (mamas) and the maternal family
                </td>
              </tr>
              <tr>
                <td className={td}>Who hosts?</td>
                <td className={td}>
                  The bride&apos;s or groom&apos;s family; it happens on both
                  sides separately
                </td>
              </tr>
              <tr>
                <td className={td}>When?</td>
                <td className={td}>
                  Usually 1–2 days before the wedding; some families do it on
                  the wedding day
                </td>
              </tr>
              <tr>
                <td className={td}>Typical guest count</td>
                <td className={td}>50–250 (estimate)</td>
              </tr>
              <tr>
                <td className={td}>Best slot in winter</td>
                <td className={td}>Late morning to late afternoon</td>
              </tr>
              <tr>
                <td className={td}>Cost for 100 guests</td>
                <td className={td}>
                  Roughly ₹2–₹5 lakh excluding gifts (estimate)
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
          What Is the Bhaat (Mayra) Ceremony?
        </h2>

        <p className="mb-8">
          The bhaat, or mayra, is a pre-wedding ritual in which the maternal
          side of the family showers the bride or groom with gifts and
          blessings. Pataaree&apos;s{" "}
          <a
            href="https://pataaree.com/blogs/articles/mayra-ceremony-meaning"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            mayra guide
          </a>{" "}
          describes it as most elaborate in Rajasthani and Marwari weddings,
          known as mameru in Gujarati families and observed in a simpler form
          in Haryana and western Uttar Pradesh, which is why it is so common
          across Delhi, Gurgaon, Faridabad, Sonipat and Ghaziabad.
        </p>

        <p className="mb-8">
          Historically the ritual was the brother&apos;s way of supporting
          his sister when her child married. The{" "}
          <a
            href="https://www.thetamarindtree.in/blog/mayra-ceremony/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Tamarind Tree&apos;s explainer
          </a>{" "}
          notes it is now more voluntary, with other maternal relatives often
          sharing the gifts, and that the uncle typically gives to the
          parents and siblings first and then to the bride or groom.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          The usual order of the mayra
        </h3>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            The maternal family arrives at the gate with dhol or folk songs,
            carrying gifts in trays, boxes and baskets.
          </li>
          <li>
            The sister (the bride&apos;s or groom&apos;s mother) welcomes her
            brothers with tilak, aarti and sweets, often singing with the
            women of her family.
          </li>
          <li>
            The brothers drape a chunari or saree over their sister, a moment
            many families treat as the heart of the ritual.
          </li>
          <li>
            The bride or groom sits on a chowki; the mamas apply tilak and
            present clothes, jewellery and shagun.
          </li>
          <li>
            Gifts go to the parents, siblings and other relatives; elders
            bless the couple-to-be.
          </li>
          <li>A festive meal for the maternal family and guests.</li>
        </ol>

        <p className="mb-8">
          Details differ by community. The Maheshwari community&apos;s{" "}
          <a
            href="https://www.reetrivaz.in/en/?p=37"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            ritual guide
          </a>
          , for example, includes the sister measuring her brother with a
          saree at the entrance, sherbet in a silver glass and a separate meal
          she hosts for her brothers. Ask the eldest women on both sides which
          steps your family follows before you brief the décor team.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is Bhaat Nyotna and When Does It Happen?
        </h2>

        <p className="mb-8">
          Bhaat nyotna is the formal invitation to the mamas, and it comes
          first. The mother visits her brothers&apos; home on a day the family
          fixes, applies tilak, offers sweets and invites them to fill the
          bhaat. In the Maheshwari tradition this visit is called battisi, and
          the mother carries traditional items such as jaggery, rice, dry
          fruits and a set of 32 small offerings for each brother.
        </p>

        <p className="mb-8">
          Because it happens at the maternal home, the nyotna rarely needs a
          venue. Plan it at least two to three weeks before the wedding so the
          mamas have time to arrange clothes, jewellery and travel, and so
          they can tell you their guest count for the main bhaat.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Hold the Bhaat for a 2026–27 Wedding?
        </h2>

        <p className="mb-8">
          Hold the mayra one or two days before the wedding, which is what
          most guides describe; some families, as a{" "}
          <a
            href="https://www.bollywoodshaadis.com/articles/rajasthani-groom-receives-huge-wedding-gifts-during-bhaat-ceremony-63306"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            May 2025 BollywoodShaadis report
          </a>{" "}
          on a viral Rajasthan bhaat shows, hold it on the wedding day itself. So the bhaat date follows the wedding muhurat.
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
          places from 16 December 2026 to 14 January 2027. Calendars differ,
          so confirm with your own pandit. Working from those dates:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Wedding date</th>
                <th className={th}>Likely bhaat date</th>
                <th className={th}>What to watch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>2–6 December 2026</td>
                <td className={td}>30 November to 5 December</td>
                <td className={td}>
                  Weekday slots, but farmhouses are busy; book this week
                </td>
              </tr>
              <tr>
                <td className={td}>11–12 December 2026</td>
                <td className={td}>9–11 December</td>
                <td className={td}>
                  Friday and Saturday slots clash with weddings; consider a
                  daytime bhaat at the wedding venue
                </td>
              </tr>
              <tr>
                <td className={td}>Mid-to-late January 2027</td>
                <td className={td}>1–2 days before, after 14 January</td>
                <td className={td}>
                  Fog mornings; keep the start after 11 AM
                </td>
              </tr>
              <tr>
                <td className={td}>February 2027</td>
                <td className={td}>1–2 days before</td>
                <td className={td}>
                  Pleasant afternoons; good month for an outdoor lawn bhaat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Hold the Bhaat at a Farmhouse?
        </h2>

        <p className="mb-8">
          Because the mayra is an arrival, a display and a meal in one, and a
          farmhouse handles all three. You get a gate and driveway for the
          dhol and tray procession, a stage where the gifts can be shown and
          photographed, a lockable room for jewellery and cash, a kitchen
          area for the caterer and parking for 30–80 cars.
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
                <td className={td}>Family home</td>
                <td className={td}>Under 40 guests, independent house</td>
                <td className={td}>
                  Parking, cooking space, neighbours, no room for a dhol
                  arrival
                </td>
              </tr>
              <tr>
                <td className={td}>Banquet hall</td>
                <td className={td}>150+ guests, fixed per-plate package</td>
                <td className={td}>
                  Tight slots and shared lobbies; less space for the gate
                  welcome
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse day slot</td>
                <td className={td}>
                  50–250 guests who want a lawn, stage and long lunch
                </td>
                <td className={td}>
                  You arrange heaters, sound and sometimes catering
                </td>
              </tr>
              <tr>
                <td className={td}>Wedding venue, earlier slot</td>
                <td className={td}>
                  Bhaat on the wedding day or the day before at the same
                  property
                </td>
                <td className={td}>
                  Décor reset time; only works with a multi-day booking
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Pick the area closest to the hosting family. Families in West and
          South West Delhi often look at Najafgarh and Bijwasan, Gurgaon
          families at Sohna Road and Gwal Pahari, and families on the
          Haryana side at Faridabad or Sonipat, where many relatives also
          live. If you are hosting two or three functions together, our{" "}
          <Link
            href="/blogs/haldi-mehendi-farmhouse-delhi-ncr"
            className={link}
          >
            haldi and mehendi at a farmhouse guide
          </Link>{" "}
          shows how to run them from one booking.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Bhaat Ceremony at a Farmhouse Cost?
        </h2>

        <p className="mb-8">
          As a planning estimate, a 100-guest farmhouse bhaat in Delhi NCR
          typically costs about ₹2–₹5 lakh for the function itself, before
          the gifts the maternal family brings. Food is the biggest line,
          then the venue and décor. These are estimates, not quotes:
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
                <td className={td}>₹50,000–₹2,00,000</td>
                <td className={td}>
                  Higher on muhurat weekends; some venues charge per plate
                </td>
              </tr>
              <tr>
                <td className={td}>Lunch catering</td>
                <td className={td}>₹800–₹2,200 per plate</td>
                <td className={td}>
                  Rajasthani or Haryanvi menus are popular; pure veg is common
                </td>
              </tr>
              <tr>
                <td className={td}>Stage, gift display and flowers</td>
                <td className={td}>₹30,000–₹1,20,000</td>
                <td className={td}>Chowki, backdrop, gift table, marigold</td>
              </tr>
              <tr>
                <td className={td}>Dhol or folk group</td>
                <td className={td}>₹8,000–₹40,000</td>
                <td className={td}>For the mamas&apos; arrival at the gate</td>
              </tr>
              <tr>
                <td className={td}>Photo and video</td>
                <td className={td}>₹20,000–₹70,000</td>
                <td className={td}>Half-day coverage; gift moments matter</td>
              </tr>
              <tr>
                <td className={td}>Heaters, sound and generator</td>
                <td className={td}>₹15,000–₹50,000</td>
                <td className={td}>Check GRAP rules for generators</td>
              </tr>
              <tr>
                <td className={td}>Return gifts for the maternal family</td>
                <td className={td}>₹300–₹1,500 per family</td>
                <td className={td}>Mithai boxes, coconut and shagun</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Budget by guest count (estimate, excluding gifts)
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>50 guests:</strong> about ₹1.2–₹2.8 lakh with a small lawn
            or hall slot and a simple marigold stage.
          </li>
          <li>
            <strong>100 guests:</strong> about ₹2–₹5 lakh with a full day slot,
            dhol arrival and a proper gift display.
          </li>
          <li>
            <strong>250 guests:</strong> about ₹5–₹11 lakh with a larger
            farmhouse, two serving lines and more heaters.
          </li>
        </ul>

        <p className="mb-8">
          The hosting family (the sister&apos;s side) usually pays for the
          venue and meal, and the maternal family pays for the gifts. Agree on
          this, and the guest count from the mamas&apos; side, before you pay
          an advance.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is Given in the Bhaat? A Practical Gift List
        </h2>

        <p className="mb-8">
          The maternal family usually brings clothes, jewellery, sweets, dry
          fruits and cash shagun for the bride or groom and close family. A
          common list, which every family adapts:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            Wedding outfit for the bride (lehenga or ghaghra-odhna) or groom
            (sherwani, safa)
          </li>
          <li>A chunari or saree for the mother, draped by her brothers</li>
          <li>Clothes for the father and siblings</li>
          <li>Jewellery such as bangles, a nath or a chain</li>
          <li>Mithai and dry-fruit trays, coconut and a puja thali</li>
          <li>Shagun envelopes for the bride or groom and relatives</li>
        </ul>

        <p className="mb-8">
          Some bhaats make news for their size: Punjab Kesari{" "}
          <a
            href="https://english.punjabkesari.com/health/2024/12/19/viral-video-of-rajasthans-grand-bhaat-ceremony-triggers-online-controversy"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            reported in December 2024
          </a>{" "}
          on a viral Rajasthan video where a maternal uncle reportedly gave
          ₹1.11 crore plus jewellery and land papers, and the reaction online
          was split. There is no &quot;right&quot; amount. Gifts must stay
          voluntary: demanding dowry is an offence under the Dowry
          Prohibition Act, 1961, and the rules under it expect a signed list
          of wedding presents, as{" "}
          <a
            href="https://nyaaya.org/legal-explainer/maintaining-a-list-of-gifts-during-marriage/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Nyaaya explains
          </a>
          . Ask someone to note each gift and giver on the day.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Should You Set Up a Farmhouse for a Winter Bhaat?
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Gate welcome:</strong> keep the driveway clear for the
            dhol and the tray procession; place the aarti thali, sweets and
            chunari at the entrance.
          </li>
          <li>
            <strong>Stage:</strong> a chowki for the bride or groom, a sofa
            for the parents and enough width for four or five mamas and their
            wives to stand together for photos.
          </li>
          <li>
            <strong>Gift display:</strong> a covered table beside the stage,
            then a lockable room. Assign one trusted person to the keys.
          </li>
          <li>
            <strong>Elders first:</strong> cushioned chairs in the front rows,
            with heaters aimed at them.
          </li>
          <li>
            <strong>Warmth and air:</strong> gas or electric heaters rather
            than wood fires. Our{" "}
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
            <strong>Menu:</strong> dal-baati-churma, gatte ki sabzi, kadhi,
            bajra roti with white butter, halwa or churma ladoo suit most
            maternal families.
          </li>
          <li>
            <strong>Music:</strong> folk songs and dhol in the day; if it runs
            into the evening, keep amplified music within the 10 PM
            loudspeaker limit.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Day Plan for a Farmhouse Bhaat
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
                <td className={td}>Décor, heaters, sound check; caterer sets up</td>
              </tr>
              <tr>
                <td className={td}>10:30 AM</td>
                <td className={td}>
                  Hosting family arrives; tea, snacks and women&apos;s songs
                </td>
              </tr>
              <tr>
                <td className={td}>11:30 AM</td>
                <td className={td}>
                  Maternal family arrives with dhol; welcome at the gate
                </td>
              </tr>
              <tr>
                <td className={td}>12:00 PM</td>
                <td className={td}>Tilak, aarti and chunari for the mother</td>
              </tr>
              <tr>
                <td className={td}>12:30 PM</td>
                <td className={td}>
                  Mayra for the bride or groom on stage; gifts to family
                </td>
              </tr>
              <tr>
                <td className={td}>1:30 PM</td>
                <td className={td}>Lunch, maternal elders served first</td>
              </tr>
              <tr>
                <td className={td}>3:30 PM</td>
                <td className={td}>Return gifts, photos and send-off</td>
              </tr>
              <tr>
                <td className={td}>5:00 PM</td>
                <td className={td}>
                  Slot ends, or reset for an evening mehendi or sangeet
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask the Farmhouse Owner
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Is there an indoor or covered hall for all guests if it is foggy or cold?</li>
          <li>Can a dhol play at the gate, and until what time is music allowed?</li>
          <li>Is there a lockable room for jewellery and cash?</li>
          <li>Can we bring our own caterer, or is catering fixed?</li>
          <li>How many cars fit inside, and is there a drop-off at the gate?</li>
          <li>Is the slot fixed (for example 10 AM–5 PM), and what does overtime cost?</li>
          <li>Can the same lawn be reset for an evening function?</li>
          <li>What is the generator setup, and is it GRAP-compliant?</li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Bhaat Ceremony Planning Checklist
        </h2>

        <ul className="space-y-3 mb-12">
          <li>☐ Bhaat date fixed with elders, based on the wedding muhurat</li>
          <li>☐ Bhaat nyotna done 2–3 weeks ahead</li>
          <li>☐ Guest count from the maternal side confirmed</li>
          <li>☐ Who pays for the venue and meal agreed</li>
          <li>☐ Farmhouse day slot booked near the hosting family</li>
          <li>☐ Caterer, dhol, photographer and décor confirmed</li>
          <li>☐ Aarti thali, chunari, chowki and sweets ready at the gate</li>
          <li>☐ Gift list keeper and lockable room arranged</li>
          <li>☐ Heaters and indoor backup booked</li>
          <li>☐ Return gifts for the maternal family packed</li>
          <li>☐ Location pin and parking details shared with both sides</li>
        </ul>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          wedding functions such as the bhaat, tilak, haldi, mehendi and
          sangeet. If the groom&apos;s side is also planning a{" "}
          <Link
            href="/blogs/tilak-ceremony-farmhouse-delhi-ncr"
            className={link}
          >
            tilak ceremony at a farmhouse
          </Link>
          , the same day-slot approach works for both.
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
            Planning a Bhaat Ceremony?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share the wedding date, guest count, preferred area and budget.
            Effortless Events can help you find a farmhouse with a day slot, a
            stage for the mayra and a warm hall for both families.
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
