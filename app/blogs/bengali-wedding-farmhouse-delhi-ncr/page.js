import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Bengali Wedding at a Farmhouse in Delhi NCR: Dates & Cost",

  description:
    "Planning a Bengali wedding at a farmhouse in Delhi NCR? 2026–27 panjika dates, which rituals fit, bou bhaat plans, cost estimates and a full checklist.",

  keywords: [
    "Bengali wedding at farmhouse Delhi NCR",
    "Bengali wedding venue Delhi",
    "Bengali marriage dates December 2026",
    "Bengali wedding dates 2027",
    "bou bhaat reception venue Delhi NCR",
    "Bengali wedding cost Delhi",
    "Bengali wedding rituals list",
  ],

  alternates: { canonical: "/blogs/bengali-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Bengali Wedding at a Farmhouse in Delhi NCR: Dates & Cost",
    description:
      "The 2026–27 Bengali marriage dates, which functions suit a farmhouse, how to plan around a late lagna and the 10 PM rule, bou bhaat ideas, cost estimates and a checklist for Delhi NCR families.",
    images: ["/decoration-7.webp"],
  },
};

const faqs = [
  {
    q: "What are the Bengali marriage dates in December 2026 and early 2027?",
    a: "WedMeGood's panjika-based lists give 2, 3, 4 and 12 December 2026, then 14, 15, 18, 24, 26 and 31 January 2027 and a long run of February and early-March 2027 dates. There are no dates between 12 December and 14 January, roughly the Bengali month of Poush. Panjikas can differ, so confirm the date and lagna with your family purohit.",
  },
  {
    q: "What are the main rituals of a Bengali wedding?",
    a: "Before the wedding come aiburobhat (the last unmarried meal at home) and gaye holud (the turmeric ceremony on the wedding morning). The wedding itself includes the bride's entry on a pidi (saat paak), shubho drishti, mala badal, sampradan, the yagna and saptapadi, khoi porano and sindoor daan. After the bride reaches her new home come bou boron and, a day or two later, bou bhaat and the reception.",
  },
  {
    q: "What is bou bhaat?",
    a: "Bou bhaat is the post-wedding ceremony hosted by the groom's family, usually one or two days after the wedding, where the new bride is introduced to relatives and friends. It is usually paired with the reception, and the bride's family arrives as honoured guests with gifts. It is the Bengali function most often held at a farmhouse or banquet in Delhi NCR.",
  },
  {
    q: "How many days does a Bengali wedding take?",
    a: "Typically three to four days of functions: aiburobhat one to three days before, gaye holud and the wedding on the main day, then bou bhaat and the reception one or two days later. Many Delhi NCR families compress this into two venue days, for example a wedding night at the bride's venue and a bou bhaat evening at the groom's.",
  },
  {
    q: "Why are Bengali weddings held at night?",
    a: "The wedding time follows the lagna, the auspicious time window fixed by the purohit from the panjika, and on many dates it falls in the evening or late at night. That is why families often book a farmhouse with an overnight stay and plan the loud music before 10 PM.",
  },
  {
    q: "How much does a Bengali wedding at a farmhouse cost in Delhi NCR?",
    a: "As a rough 2026 planning estimate, a 200-guest Bengali wedding night at a Delhi NCR farmhouse often totals about ₹8–18 lakh for venue, Bengali catering, chhadnatala and décor, purohit, music and photography, before jewellery and clothes. A separate 200-guest bou bhaat reception adds roughly ₹5–12 lakh.",
  },
  {
    q: "Can we burst firecrackers or light a big fire at a farmhouse wedding?",
    a: "No firecrackers: the Supreme Court restored the firecracker ban in Delhi-NCR from 9 November 2026. The small yagna fire for the ceremony is normal, but confirm the spot and fire safety with the farmhouse, and check GRAP curbs on generators and open fires during bad-air days.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="bengali-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-21"
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
          alt="Bengali wedding at a farmhouse in Delhi NCR: a lantern-lit lawn with string lights, dinner tables with white flowers and a dance floor set for the bou bhaat reception"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Bengali Wedding at a Farmhouse in Delhi NCR: Dates, Rituals and
          Cost
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
          Planning a Bengali wedding at a farmhouse in Delhi NCR this winter?
          Families from Chittaranjan Park, Kalkaji, Noida and Gurgaon
          increasingly skip the community hall and take a farmhouse for the
          biye night, the bou bhaat reception or both. This guide covers the
          2026–27 Bengali marriage dates, which functions suit a farmhouse,
          how to handle a late-night lagna, cost estimates, the menu and a
          checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            A Delhi NCR farmhouse works well for a Bengali wedding night and
            the bou bhaat reception. Book one of the panjika dates (2, 3, 4 or
            12 December 2026, or mid-January to early March 2027), choose a
            farmhouse allowing an overnight stay and a yagna fire, and finish
            amplified music by 10 PM. Budget roughly ₹8–18 lakh for 200
            guests.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Bengali Wedding at a Farmhouse: At a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item</th>
                <th className={th}>What to plan for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Best farmhouse functions</td>
                <td className={td}>
                  Biye (wedding night), bou bhaat and reception; also
                  aiburobhat lunches and gaye holud mornings
                </td>
              </tr>
              <tr>
                <td className={td}>Dates this season</td>
                <td className={td}>
                  2, 3, 4, 12 Dec 2026; then 14 Jan–15 Mar 2027 (WedMeGood
                  panjika lists); no dates 13 Dec–13 Jan
                </td>
              </tr>
              <tr>
                <td className={td}>Wedding timing</td>
                <td className={td}>
                  Set by the lagna; often evening or late night, so plan an
                  overnight booking
                </td>
              </tr>
              <tr>
                <td className={td}>Must-have spaces</td>
                <td className={td}>
                  Covered chhadnatala (altar), a safe yagna spot, a bride&apos;s
                  room, a room for the basar ghar
                </td>
              </tr>
              <tr>
                <td className={td}>Rules</td>
                <td className={td}>
                  10 PM loudspeaker limit, firecracker ban, liquor permit if
                  there is a bar, GRAP curbs
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>
                  About ₹8–18 lakh for a 200-guest wedding night; ₹5–12 lakh
                  for a 200-guest bou bhaat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            WHICH FUNCTIONS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Bengali Wedding Functions Can Be Held at a Farmhouse?
        </h2>

        <p className="mb-8">
          All of them can, but the wedding night and the bou bhaat gain the
          most from a farmhouse lawn. A Bengali Hindu wedding runs over
          several days and is hosted by two different families, so it helps
          to see who hosts what. The sequence below follows the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Bengali_Hindu_wedding"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Wikipedia overview of Bengali Hindu weddings
          </a>
          ; customs vary by family, so check with your elders and purohit.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Function</th>
                <th className={th}>When and who hosts</th>
                <th className={th}>Farmhouse fit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Aiburobhat</td>
                <td className={td}>
                  1–3 days before; each family hosts its own, usually lunch
                </td>
                <td className={td}>
                  Good for 40–100 guests as a winter afternoon lunch
                </td>
              </tr>
              <tr>
                <td className={td}>Gaye holud</td>
                <td className={td}>
                  Wedding morning; turmeric sent from the groom&apos;s side
                </td>
                <td className={td}>
                  Easy if the bride&apos;s family is already staying at the
                  farmhouse
                </td>
              </tr>
              <tr>
                <td className={td}>Biye (wedding)</td>
                <td className={td}>
                  Wedding night at the lagna; bride&apos;s family hosts
                </td>
                <td className={td}>
                  Best fit: lawn for dinner, covered chhadnatala for rituals
                </td>
              </tr>
              <tr>
                <td className={td}>Basar ghar and bashi biye</td>
                <td className={td}>
                  Same night and next morning, at the bride&apos;s venue
                </td>
                <td className={td}>
                  Needs rooms, so book the farmhouse overnight
                </td>
              </tr>
              <tr>
                <td className={td}>Bou bhaat and reception</td>
                <td className={td}>
                  1–2 days after; groom&apos;s family hosts
                </td>
                <td className={td}>
                  Very good: an evening reception for 150–400 guests
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What happens on the wedding night?
        </h3>

        <p className="mb-8">
          The groom arrives with the bor jatri and is welcomed by the
          bride&apos;s family. The bride, seated on a low wooden pidi and
          hiding her face behind betel leaves, is carried around the groom by
          her brothers (saat paak). Then come shubho drishti (the first look),
          mala badal (the garland exchange), sampradan, the yagna with
          saptapadi and khoi porano, and finally sindoor daan. The rituals
          take a few hours, and guests usually eat dinner on the lawn while
          the family stays at the chhadnatala.
        </p>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Are the Bengali Marriage Dates in 2026–27?
        </h2>

        <p className="mb-8">
          Bengali families follow the panjika (almanac) rather than the
          generic North Indian muhurat lists. According to WedMeGood&apos;s{" "}
          <a
            href="https://www.wedmegood.com/blog/bengali-panjika-marriage-dates-2026-bengali-wedding-dates-that-you-need-to-save/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            2026 Bengali marriage dates list
          </a>{" "}
          and its{" "}
          <a
            href="https://www.wedmegood.com/blog/bengali-panjika-marriage-dates-2027-bengali-wedding-dates-that-you-need-to-save/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            2027 list
          </a>
          , the dates for this season are:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>December 2026:</strong> 2, 3, 4 and 12 December (Wed,
            Thu, Fri and Sat).
          </li>
          <li>
            <strong>January 2027:</strong> 14, 15, 18, 24, 26 and 31
            January.
          </li>
          <li>
            <strong>February 2027:</strong> 2, 3, 9, 10, 11, 14, 15, 21, 22,
            25, 26, 27 and 28 February.
          </li>
          <li>
            <strong>March 2027:</strong> 1, 2, 3, 4, 10, 11, 14 and 15 March,
            described as the last window before Chaitra, which Bengali
            families usually avoid for weddings.
          </li>
        </ul>

        <p className="mb-8">
          Two things matter for booking. First, there is a gap of about a
          month after 12 December, roughly the Bengali month of Poush, so
          Saturday 12 December 2026 is likely to be the busiest farmhouse
          night of the winter for Bengali families. Second, the lists give no
          lagna times, and different panjikas can disagree, so fix the date
          and time with your purohit before you pay a venue advance. If the
          date falls on a weekday, many families hold the wedding on the date
          and the bou bhaat on the following weekend.
        </p>

        {/* =====================================================
            LATE LAGNA
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What If the Lagna Is Late at Night?
        </h2>

        <p className="mb-8">
          Book the farmhouse overnight and keep amplified music before 10 PM.
          The lagna can fall well after dinner, but a loudspeaker or DJ system
          normally has to stop at 10 PM, and Delhi Police has{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            made prior permission mandatory for loudspeaker use
          </a>
          . The rituals themselves are quiet, so a late lagna and the noise
          rule can live together:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            Put the band, DJ or live singer between 7 and 10 PM, around the
            bor jatri&apos;s arrival and dinner.
          </li>
          <li>
            Keep a soft shehnai track or live acoustic music after 10 PM at
            low volume; the conch and ulu during the rituals need no speakers.
          </li>
          <li>
            Get overnight use, the guest cut-off time and checkout in writing,
            so the basar ghar and the bashi biye next morning are not rushed.
          </li>
          <li>
            Arrange late cabs or drivers for older guests who leave after
            dinner, and rooms or a nearby hotel for close family.
          </li>
        </ul>

        <p className="mb-8">
          Firecrackers are not an option: the Supreme Court{" "}
          <a
            href="https://www.scconline.com/blog/post/2026/11/04/supreme-court-green-crackers-delhi-ncr-diwali-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            restored the firecracker ban in Delhi-NCR from 9 November 2026
          </a>
          . During bad-air spells GRAP curbs can also hit diesel generators
          and open fires; our{" "}
          <Link
            href="/blogs/winter-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            winter wedding at a farmhouse guide
          </Link>{" "}
          covers heaters, fog and power plans in detail.
        </p>

        {/* =====================================================
            BOU BHAAT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Host a Bou Bhaat at a Farmhouse?
        </h2>

        <p className="mb-8">
          Treat it as the groom&apos;s family&apos;s reception with one
          ritual moment at the start. According to the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Bou_Bhat"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Wikipedia entry on bou bhat
          </a>
          , it is held one or two days after the wedding, the groom&apos;s
          family introduces the bride to relatives, friends and neighbours,
          and the bride&apos;s family arrives as honoured guests (kone jatri)
          with gifts.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Afternoon ritual, evening party:</strong> keep the bhaat
            kapor and the bride&apos;s first meal for close family in the
            late afternoon, then open the lawn to guests from about 7 PM.
          </li>
          <li>
            <strong>Welcome the kone jatri:</strong> reserve seating and a
            gift table near the stage for the bride&apos;s family.
          </li>
          <li>
            <strong>Stage for photos:</strong> most guests queue to meet the
            couple, so plan a stage with good light and a clear queue path.
          </li>
          <li>
            <strong>Mixed guest list:</strong> Delhi NCR bou bhaats often
            include colleagues and non-Bengali friends, so add a North Indian
            counter beside the Bengali menu.
          </li>
        </ul>

        <p className="mb-8">
          For stage, lighting and timing ideas, see our{" "}
          <Link
            href="/blogs/wedding-reception-farmhouse-delhi-ncr"
            className={linkClass}
          >
            guide to a wedding reception at a farmhouse
          </Link>
          .
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Bengali Wedding at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A 200-guest Bengali wedding night at a Delhi NCR farmhouse
          typically costs about ₹8–18 lakh before jewellery and clothes. The
          figures below are planning estimates for late 2026, not quotes;
          prices move with date, area and how many dishes you choose. For
          reference, one Delhi caterer that lists a Bengali menu on{" "}
          <a
            href="https://www.wedmegood.com/profile/Swapan-Caterers-685350"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WedMeGood
          </a>{" "}
          shows a starting price of ₹500 per plate for at least 150 guests
          (November 2026); a full wedding spread with fish and mutton costs
          considerably more.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Line item</th>
                <th className={th}>Typical range (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Farmhouse, evening plus overnight</td>
                <td className={td}>₹1.5–6 lakh, by area, date and size</td>
              </tr>
              <tr>
                <td className={td}>Bengali catering</td>
                <td className={td}>
                  ₹1,200–₹2,500 per plate for a full wedding menu
                </td>
              </tr>
              <tr>
                <td className={td}>Chhadnatala, mandap and lawn décor</td>
                <td className={td}>₹1–4 lakh</td>
              </tr>
              <tr>
                <td className={td}>Purohit, samagri and ritual items</td>
                <td className={td}>₹15,000–₹50,000</td>
              </tr>
              <tr>
                <td className={td}>Music (shehnai, singer or DJ till 10 PM)</td>
                <td className={td}>₹40,000–₹2 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photography and video</td>
                <td className={td}>₹1–3 lakh</td>
              </tr>
              <tr>
                <td className={td}>Heaters, lighting and power backup</td>
                <td className={td}>₹40,000–₹1.5 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Guests</th>
                <th className={th}>Wedding night (estimate)</th>
                <th className={th}>Bou bhaat reception (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>100</td>
                <td className={td}>₹5–10 lakh</td>
                <td className={td}>₹3–7 lakh</td>
              </tr>
              <tr>
                <td className={td}>200</td>
                <td className={td}>₹8–18 lakh</td>
                <td className={td}>₹5–12 lakh</td>
              </tr>
              <tr>
                <td className={td}>350</td>
                <td className={td}>₹13–28 lakh</td>
                <td className={td}>₹9–20 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          A bar adds cost and paperwork. A Delhi Excise notice dated 22
          October 2026 sets a{" "}
          <a
            href="https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/special_camp_p-10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            P-10 permit of ₹15,000 per event
          </a>{" "}
          for farmhouses serving liquor in Delhi; Gurgaon and Noida farmhouses
          follow Haryana and UP permits. For a wider breakdown, see our{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className={linkClass}
          >
            farmhouse wedding cost guide
          </Link>
          .
        </p>

        {/* =====================================================
            MENU
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should Be on a Bengali Wedding Menu?
        </h2>

        <p className="mb-8">
          A Bengali wedding menu is served in courses, from bitter and light
          to rich and sweet, and the fish course is the one guests remember.
          Ask caterers whether they have Bengali cooks, not just a
          &quot;Bengali dishes&quot; line on the menu, and arrange a tasting.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Start:</strong> fish fry or fish kabiraji, vegetable
            chop, phuchka counter.
          </li>
          <li>
            <strong>Mains:</strong> luchi or radhaballavi with cholar dal,
            basanti pulao, shukto, bhetki paturi, chingri malaikari, kosha
            mangsho.
          </li>
          <li>
            <strong>Finish:</strong> chutney, papor, mishti doi, rosogolla,
            sandesh, paan.
          </li>
          <li>
            <strong>Veg guests:</strong> chhanar dalna, dhokar dalna and
            paneer dishes so they get a full meal.
          </li>
        </ul>

        <p className="mb-8">
          Many Delhi families still order sweets from Chittaranjan Park
          and have them delivered on the day; agree with the caterer on
          outside sweets before you sign.
        </p>

        {/* =====================================================
            CHOOSING THE FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Check Before Booking the Farmhouse?
        </h2>

        <p className="mb-8">
          Check ritual space, overnight use and travel time first; décor can
          be fixed later. Families based in south Delhi often look at{" "}
          <Link
            href="/blogs/farmhouse-in-chattarpur-for-party"
            className={linkClass}
          >
            Chattarpur farmhouses
          </Link>{" "}
          because they are close to CR Park and Kalkaji, while Noida families
          look along the Expressway and Gurgaon families towards Sohna Road
          and Gwal Pahari.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            A covered or tented chhadnatala that stays warm and dry for a
            late lagna.
          </li>
          <li>
            Written permission for the yagna fire, with sand, water and an
            extinguisher nearby.
          </li>
          <li>
            Overnight stay, number of rooms, and a quiet room for the basar
            ghar.
          </li>
          <li>
            A bride&apos;s room close to the altar for changes between
            rituals.
          </li>
          <li>Heaters and a power plan that works under GRAP curbs.</li>
          <li>
            Outside caterer and outside sweets policy, and any kitchen
            charge.
          </li>
          <li>
            Parking and a drop-off point for the bor jatri, plus the 10 PM
            sound limit in writing.
          </li>
          <li>Liquor permit status if you plan a bar.</li>
        </ol>

        {/* =====================================================
            SAMPLE PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Wedding-Night Plan at a Farmhouse
        </h2>

        <p className="mb-8">
          This example assumes a lagna around 10:30 PM on a December night;
          shift it to match your own time.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Morning:</strong> gaye holud at the farmhouse; décor team
            sets the chhadnatala.
          </li>
          <li>
            <strong>5:00 PM:</strong> heaters on, lights tested, purohit
            arrives to set up.
          </li>
          <li>
            <strong>7:00 PM:</strong> bor jatri arrives; welcome and music.
          </li>
          <li>
            <strong>7:30–9:45 PM:</strong> dinner service and amplified
            music.
          </li>
          <li>
            <strong>10:00 PM:</strong> speakers off; family moves to the
            chhadnatala.
          </li>
          <li>
            <strong>10:30 PM onwards:</strong> saat paak, shubho drishti,
            mala badal, sampradan, yagna and sindoor daan.
          </li>
          <li>
            <strong>After the rituals:</strong> basar ghar indoors; bashi
            biye and bidaai the next morning.
          </li>
        </ul>

        {/* =====================================================
            ENTITY + REGISTRATION
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Who Can Help Plan a Bengali Wedding at a Farmhouse?
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          weddings, receptions and family functions, and coordinate catering,
          décor and logistics. For pre-wedding mornings and lunches, our{" "}
          <Link
            href="/blogs/haldi-mehendi-farmhouse-delhi-ncr"
            className={linkClass}
          >
            haldi and mehendi at a farmhouse guide
          </Link>{" "}
          has setup ideas that work for a gaye holud too.
        </p>

        <p className="mb-8 text-base text-gray-600">
          A Hindu wedding in Delhi should also be registered with the Revenue
          Department after the ceremony. This is general information, not
          legal advice.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Bengali Wedding Checklist for a Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>10–12 weeks out:</strong> fix date and lagna with the
            purohit; decide which functions go to the farmhouse.
          </li>
          <li>
            <strong>8–10 weeks out:</strong> visit farmhouses at night; book
            venue, caterer with Bengali cooks, décor and photographer.
          </li>
          <li>
            <strong>6–8 weeks out:</strong> print invitations; book the
            shehnai or singer; list tattwa and ritual items.
          </li>
          <li>
            <strong>4–6 weeks out:</strong> menu tasting; liquor permit if
            needed; confirm heaters, power and the 10 PM limit in writing.
          </li>
          <li>
            <strong>2 weeks out:</strong> share the run-of-show and lagna time
            with every vendor; book cabs and rooms for family.
          </li>
          <li>
            <strong>Wedding week:</strong> collect sweets and ritual items;
            check the yagna spot and fire safety on site.
          </li>
          <li>
            <strong>After:</strong> host the bou bhaat, then register the
            marriage.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses that allow overnight
          weddings and a yagna fire, and plan the evening around your lagna.
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
            Find a Farmhouse for Your Biye or Bou Bhaat
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, lagna and guest count. Effortless Events can
            shortlist farmhouses across Delhi NCR and help plan the menu,
            décor and logistics for the wedding night and the reception.
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
              Plan Your Wedding
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
