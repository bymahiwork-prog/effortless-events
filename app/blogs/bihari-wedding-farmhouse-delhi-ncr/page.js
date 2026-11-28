import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Bihari Wedding at a Farmhouse in Delhi NCR: Rituals & Cost",

  description:
    "Planning a Bihari wedding at a farmhouse in Delhi NCR? Tilak to vidaai mapped to venue days, 2027 dates, Maithil customs, the menu and cost estimates.",

  keywords: [
    "Bihari wedding at farmhouse Delhi NCR",
    "Bihari wedding rituals in order",
    "Maithil wedding rituals",
    "Matkor ceremony Bihari wedding",
    "Kohbar in Maithil wedding",
    "Bihari wedding food menu",
    "Bihari wedding cost Delhi",
  ],

  alternates: { canonical: "/blogs/bihari-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Bihari Wedding at a Farmhouse in Delhi NCR: Rituals & Cost",
    description:
      "How to host a Bihari wedding at a Delhi NCR farmhouse: tilak, haldi, matkor, dwarpuja, sindoor daan and kohbar mapped to venue days, 2026–27 dates, Maithil and Bhojpuri customs, menu and cost estimates by guest count.",
    images: ["/decoration-7.webp"],
  },
};

const faqs = [
  {
    q: "What are the rituals of a Bihari wedding in order?",
    a: "A common order is the match and horoscope check, tilak (the bride's family honours the groom), haldi, matkor, mehendi and Gauri puja before the wedding. The wedding day has the baraat, dwarpuja at the gate, jaimala, kanyadaan, pheras and sindoor daan, then kohbar rituals and vidaai. Griha pravesh, mooh dikhai and chauthari follow at the groom's home. Families vary the order.",
  },
  {
    q: "What is Matkor in a Bihari wedding?",
    a: "Matkor is a women-led ritual a day or two before the wedding. Women of the family go out with songs to dig sacred earth and bring water, which is used to make the clay hearth (chulha) for the wedding. At a farmhouse, ask the owner in advance for a small patch of lawn or a soil tray you can use.",
  },
  {
    q: "What is Kohbar in a Maithil wedding?",
    a: "Kohbar is the decorated bridal chamber in a Maithil wedding, traditionally painted with Madhubani-style motifs, where the couple spends time after the wedding with Kohbar songs sung by the women. In Delhi NCR, families often recreate it with a Madhubani-print backdrop in one farmhouse room instead of painting the walls.",
  },
  {
    q: "How many days is a Bihari wedding?",
    a: "Traditionally the rituals run from the tilak, often a week or more earlier, through haldi and matkor to the wedding and the visits that follow. In Delhi NCR most families book a farmhouse for one to two days: haldi, matkor and mehendi on the first day, then the baraat, wedding and vidaai the next morning.",
  },
  {
    q: "How is a Maithil wedding different from a Bhojpuri wedding?",
    a: "Both share the tilak, haldi, baraat, kanyadaan, pheras and sindoor daan. Maithil weddings add customs such as Sampradan, where the bride's maternal uncle stands beside her father, the Kohbar chamber and Madhubani art, and they usually follow the Mithila panchang for dates. Bhojpuri weddings often follow the Banarasi panchang.",
  },
  {
    q: "What food is served at a Bihari wedding?",
    a: "Common choices include puri or kachori with aloo dum, dal, rice, seasonal sabzi, dahi-chura, litti chokha as a live counter, and sweets such as khaja, anarsa, thekua and malpua. Many Maithil families also serve fish curry. Pre-wedding pujas are often vegetarian and sometimes without onion and garlic, so plan the menu function by function.",
  },
  {
    q: "How much does a Bihari wedding at a farmhouse cost in Delhi NCR?",
    a: "As a rough late-2026 planning estimate, a 200-guest Bihari wedding day at a Delhi NCR farmhouse often totals about ₹7–17 lakh for venue and food, mandap and décor, music, photography, lighting and the priest, before clothes, jewellery and gifts. Adding a haldi and matkor day adds roughly ₹2–5 lakh.",
  },
];

const rituals = [
  ["Kuanr Bhet / Ghatkaiti", "Families meet and agree the match (Ghatkaiti is the Maithil matchmaking step)", "Months earlier; home"],
  ["Janam Patri Milan", "Horoscopes are matched and the date is fixed", "Months earlier; with the family priest"],
  ["Cheka / ring ceremony", "Engagement at the bride's home with shagun gifts", "Weeks earlier; home or a small venue"],
  ["Tilak", "The bride's brother or father applies tilak to the groom and presents gifts", "1–2 weeks before; groom's home or a farmhouse lunch"],
  ["Satyanarayan katha", "A puja at the bride's home before the functions begin", "Days before; usually at home"],
  ["Haldi (Pithi in Maithili)", "Turmeric paste applied with songs; the two mothers' sides exchange paste", "Day 1 morning at the farmhouse"],
  ["Matkor", "Women dig sacred earth and fetch water with songs to make the wedding hearth", "Day 1 afternoon; needs a patch of lawn or a soil tray"],
  ["Mandappachadan", "The mandap is set up and blessed", "Day 1, before the evening"],
  ["Mehendi", "Henna for the bride and women of the family", "Day 1 evening"],
  ["Gauri puja", "The bride's women-only prayer on the eve", "Day 1 evening, in a quiet room"],
  ["Imli ghutai", "The maternal uncle and groom share a short ritual on the wedding morning", "Day 2 morning, groom's side"],
  ["Baraat and Dwarpuja", "Groom arrives; aarti, tilak and sweets at the gate; brothers may ask for a gate gift", "Day 2 evening, at the farmhouse entrance"],
  ["Jaimala", "Garland exchange", "Day 2 evening, on stage"],
  ["Kanyadaan and Sampradan", "Father gives the bride away; in Maithil weddings the maternal uncle stands with him", "Day 2 night, in the mandap"],
  ["Pheras and Sindoor Daan", "Seven rounds of the fire, then the groom applies sindoor", "Day 2 night, in the mandap"],
  ["Kohbar", "Couple taken to the decorated Kohbar room; women sing Kohbar songs", "After the pheras, in a farmhouse room"],
  ["Vidaai", "Bride's farewell, throwing rice back over her shoulder", "Day 3 morning, before checkout"],
  ["Griha pravesh, mooh dikhai, chauthari", "Welcome at the groom's home, gifts and a puja", "At the groom's home after the wedding"],
];

const dates = [
  ["December 2026", "2, 3, 4, 5, 6, 11, 12 Dec", "Sat 5, Sun 6, Sat 12 Dec"],
  ["January 2027", "15, 18, 19, 20, 24, 26, 27, 30, 31 Jan", "Sun 24, Sat 30, Sun 31 Jan"],
  ["February 2027", "2, 3, 9, 10, 11, 14, 15, 21, 22, 25, 26, 27, 28 Feb", "Sun 14, Sun 21, Sat 27, Sun 28 Feb"],
];

const formats = [
  ["Wedding night only", "Baraat, dwarpuja, jaimala, pheras, sindoor daan, kohbar, early vidaai", "1 day + overnight", "Haldi and matkor at home; smaller budget"],
  ["Two-day farmhouse wedding", "Day 1 haldi, matkor, mehendi, Gauri puja; Day 2 baraat to kohbar; vidaai next morning", "2 days + 1–2 nights", "Most Delhi NCR families"],
  ["Three days with tilak", "Tilak lunch on day 1, haldi and matkor on day 2, wedding on day 3", "3 days", "Families who want everything in one place"],
];

const costs = [
  ["Farmhouse rent (per day)", "₹1.5–5 lakh", "Higher on Saturdays in December and February"],
  ["Catering (per plate)", "₹1,200–2,500", "Wedding dinner; haldi lunch usually cheaper"],
  ["Mandap and décor", "₹1–4 lakh", "Mandap, stage, entrance, flowers"],
  ["Haldi and matkor setup", "₹30,000–1 lakh", "Seating, marigold backdrop, soil tray, puja items"],
  ["Kohbar room", "₹15,000–60,000", "Madhubani-print panels, lights, seating"],
  ["Band or dhol for the baraat", "₹25,000–1 lakh", "Depends on band size and hours"],
  ["DJ and sound", "₹30,000–1 lakh", "Must finish outdoors by 10 PM"],
  ["Photography and video", "₹1–3 lakh", "Two days of coverage"],
  ["Priest and samagri", "₹11,000–51,000", "Both families' pujas"],
  ["Heaters and lighting", "₹30,000–1.5 lakh", "Patio heaters, warm lighting, power backup"],
];

const totals = [
  ["100 guests", "₹4–10 lakh", "₹1.5–3.5 lakh"],
  ["200 guests", "₹7–17 lakh", "₹2–5 lakh"],
  ["350 guests", "₹12–28 lakh", "₹3–7 lakh"],
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

function ExtLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {children}
    </a>
  );
}

function Table({ head, rows }) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
        <thead>
          <tr className="bg-gray-100">
            {head.map((h) => (
              <th key={h} className={th}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i} className={td}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="bihari-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-28"
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
          alt="Bihari wedding at a farmhouse in Delhi NCR: a lawn with paper lanterns, string lights, a lit dance floor and dinner tables set for the wedding night"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Bihari Wedding at a Farmhouse in Delhi NCR: Rituals, Dates and Cost
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
          Planning a Bihari wedding at a farmhouse in Delhi NCR? Delhi has a
          very large Purvanchali community, with families from Bihar and
          eastern Uttar Pradesh;{" "}
          <ExtLink href="https://www.freepressjournal.in/india/25-of-total-voters-dominant-in-17-to-20-seats-significance-of-purvanchali-voters-in-delhi-assembly-elections-2025">
            Free Press Journal (January 2025)
          </ExtLink>{" "}
          cited reports putting Purvanchali voters at about a quarter of
          Delhi&apos;s electorate. Many of these families now move the haldi,
          matkor and wedding night from the home courtyard to a farmhouse. This
          guide maps each Bihari ritual, including Maithil customs such as
          Sampradan and Kohbar, to a farmhouse slot, and covers 2026–27 dates,
          how many days to book, a two-day plan, the menu, cost estimates and
          a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a Bihari wedding in Delhi NCR, keep the tilak and
            Satyanarayan katha at home and book a farmhouse for two days:
            haldi, matkor and mehendi on day one, then the baraat, pheras,
            sindoor daan and kohbar on day two, with vidaai the next morning. Budget roughly ₹7–17 lakh for 200 guests and book
            now for January–February 2027.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Bihari Wedding at a Farmhouse: At a Glance
        </h2>

        <Table
          head={["Item", "What to plan for"]}
          rows={[
            ["Booking length", "2 days plus 1–2 nights for most families; 1 day if haldi stays at home"],
            ["Functions at the farmhouse", "Haldi, matkor, mehendi, baraat and dwarpuja, jaimala, kanyadaan, pheras, sindoor daan, kohbar, vidaai"],
            ["Usually at home", "Match and horoscope, cheka, Satyanarayan katha, griha pravesh, chauthari"],
            ["Dates this season", "Early December 2026, then 15 January to February 2027 (Maithil families: check the Mithila panchang)"],
            ["Must-have spaces", "A lawn patch or soil tray for matkor, a covered mandap with a safe havan spot, one room to dress as the Kohbar, heated rooms for both families"],
            ["Biggest rule to plan around", "Amplified music off outdoors by 10 PM; pheras can run later quietly"],
            ["Cost (estimate)", "About ₹7–17 lakh for a 200-guest wedding day"],
          ]}
        />

        {/* =====================================================
            RITUALS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Rituals of a Bihari Wedding, in Order?
        </h2>

        <p className="mb-8">
          A Bihari wedding moves from the tilak, where the bride&apos;s family
          honours the groom, to haldi and matkor, to the wedding night with
          dwarpuja and sindoor daan, and then to the welcome at the
          groom&apos;s home. The order below draws on{" "}
          <ExtLink href="https://www.azafashions.com/blog/bihar-jharkhand-wedding-traditions-rituals-guide-2026/">
            Aza Fashions&apos; Bihar and Jharkhand wedding guide
          </ExtLink>{" "}
          and{" "}
          <ExtLink href="https://www.weddingwire.in/wedding-tips/bihari-wedding--c2615">
            WeddingWire India (updated August 2025)
          </ExtLink>
          . The two list some rituals in a different order, and customs vary
          between Maithil, Bhojpuri and Magahi families, so treat this as a
          planning map and let your family priest settle the details.
        </p>

        <Table head={["Ritual", "What happens", "Farmhouse slot"]} rows={rituals} />

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          How Is a Maithil Wedding Different From a Bhojpuri Wedding?
        </h3>

        <p className="mb-8">
          The core is shared: tilak, haldi, baraat, kanyadaan, pheras and
          sindoor daan. Maithil weddings from the Mithila region add customs
          that affect the venue plan. Aza Fashions describes Sampradan, where
          the bride&apos;s maternal uncle stands beside her father as a
          co-guardian before kanyadaan, the Maithili name Pithi for haldi, and
          the Kohbar, a bridal chamber decorated with Madhubani-style art where
          women sing Kohbar songs. WeddingWire&apos;s Maithil section also
          mentions Ghatkaiti (matchmaking) and Naina-Jogin, where the groom has
          to pick out the bride. For a farmhouse, this means one extra room to
          dress as the Kohbar and a mandap with space for the maternal uncle.
          Bhojpuri families more often add a louder baraat with a band and
          dhol, so the 10 PM music rule matters more.
        </p>

        {/* =====================================================
            HOW MANY DAYS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Days Should You Book a Farmhouse for a Bihari Wedding?
        </h2>

        <p className="mb-8">
          Most Delhi NCR families book two days with one or two nights. That
          keeps haldi, matkor and mehendi in the same place as the wedding,
          gives the bride&apos;s side rooms to rest and dress, and lets the
          vidaai happen the next morning instead of at 2 AM in the cold.
        </p>

        <Table
          head={["Format", "What happens where", "Booking", "Suits"]}
          rows={formats}
        />

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Are the Bihari Wedding Dates in 2026–27?
        </h2>

        <p className="mb-8">
          Bihari families fix the date and lagna with their own priest, so
          general lists are only a starting point. Most Hindu calendars give two
          windows this winter: early December 2026, and mid-January to February
          2027. Between them sits Kharmas, which{" "}
          <ExtLink href="https://hindupad.com/khar-maas/">
            Hindupad gives as about 16 December to 14 January
          </ExtLink>
          , when weddings are usually avoided.
        </p>

        <Table head={["Month", "Listed dates", "Weekend dates"]} rows={dates} />

        <p className="mb-8">
          These are VedicFeed&apos;s New Delhi lists for{" "}
          <ExtLink href="https://vedicfeed.com/shubh-marriage-dates/december-2026/">
            December 2026
          </ExtLink>
          ,{" "}
          <ExtLink href="https://vedicfeed.com/shubh-marriage-dates/january-2027/">
            January 2027
          </ExtLink>{" "}
          and{" "}
          <ExtLink href="https://vedicfeed.com/shubh-marriage-dates/february-2027">
            February 2027
          </ExtLink>
          . Maithil families usually follow the Mithila panchang, which can give
          noticeably fewer dates. For example, for the 2025–26 season{" "}
          <ExtLink href="https://patnapress.com/vivah-muhurat-13-dates-nov-dec-17-in-february/">
            Patna Press
          </ExtLink>{" "}
          listed 17 February dates under the Banarasi panchang but only 9 under
          the Mithila panchang. Confirm your date before you pay a farmhouse
          advance. The weekend dates in January and February are where Delhi
          NCR farmhouses fill first.
        </p>

        {/* =====================================================
            SAMPLE PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Does a Two-Day Bihari Wedding at a Farmhouse Look Like?
        </h2>

        <p className="mb-6">
          This sample plan assumes a winter wedding with an evening baraat and
          a lagna around 10–11 PM. Move it earlier if your priest gives a day
          lagna.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>Day 1, 10 AM:</strong> check-in; the décor team finishes
            the haldi area and starts the mandap.
          </li>
          <li>
            <strong>Day 1, 11 AM–1 PM:</strong> haldi (Pithi) for the bride
            with folk songs, in the sunniest part of the lawn.
          </li>
          <li>
            <strong>Day 1, 1–2:30 PM:</strong> lunch.
          </li>
          <li>
            <strong>Day 1, 3–4 PM:</strong> matkor: the women walk to the
            marked patch of lawn with songs, dig the earth and bring back water
            for the hearth, while there is still daylight.
          </li>
          <li>
            <strong>Day 1, 6–9:30 PM:</strong> mehendi and a family music
            evening, finishing amplified music by 10 PM; Gauri puja in a quiet
            room.
          </li>
          <li>
            <strong>Day 2, morning:</strong> rest, imli ghutai on the
            groom&apos;s side, final décor and the Kohbar room setup.
          </li>
          <li>
            <strong>Day 2, 7–8 PM:</strong> baraat arrives; dwarpuja at the
            gate.
          </li>
          <li>
            <strong>Day 2, 8–9:45 PM:</strong> jaimala, photos and dinner; band
            and DJ wrap up before 10 PM.
          </li>
          <li>
            <strong>Day 2, 10 PM onwards:</strong> kanyadaan, Sampradan for
            Maithil families, pheras and sindoor daan in the mandap, with
            heaters on; then the Kohbar rituals.
          </li>
          <li>
            <strong>Day 3, 8–10 AM:</strong> breakfast, vidaai and checkout.
          </li>
        </ol>

        {/* =====================================================
            MENU
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Food Is Served at a Bihari Wedding?
        </h2>

        <p className="mb-6">
          Guests from Bihar notice the food first, so brief your caterer on
          the dishes your family expects. Many Delhi NCR caterers can cook these
          if asked, but book a tasting. Plan by function:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Haldi and matkor lunch:</strong> puri or kachori with aloo
            dum, dal, rice, kadhi or seasonal sabzi, and dahi-chura with gur.
            Some families keep pre-wedding meals free of onion and garlic, so
            ask.
          </li>
          <li>
            <strong>Mehendi evening:</strong> a litti chokha live counter, chaat
            and hot snacks work well in winter.
          </li>
          <li>
            <strong>Wedding dinner:</strong> a full North Indian spread plus
            Bihari touches such as kathal (jackfruit) sabzi, and fish curry for
            many Maithil families.
          </li>
          <li>
            <strong>Sweets:</strong> khaja, anarsa, thekua, malpua, gulab
            jamun and kheer.
          </li>
          <li>
            <strong>Vidaai morning:</strong> poha or chura matar, jalebi and
            tea before checkout.
          </li>
        </ul>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Bihari Wedding at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A 200-guest Bihari wedding day at a Delhi NCR farmhouse often costs
          about ₹7–17 lakh as a rough late-2026 estimate. The figures below are
          our planning estimates, not quotes; your final cost depends on the
          date, area, guest count and menu.
        </p>

        <Table
          head={["Item", "Typical range (estimate)", "Notes"]}
          rows={costs}
        />

        <Table
          head={["Guests", "Wedding day (estimate)", "Add a haldi and matkor day (estimate)"]}
          rows={totals}
        />

        <p className="mb-8">
          Not included above: outfits, jewellery, tilak and other gifts, a bar,
          and rooms for outstation relatives. If you plan a bar at a Delhi
          farmhouse, the{" "}
          <ExtLink href="https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/special_camp_p-10.pdf">
            Delhi Excise notice dated 22 October 2026
          </ExtLink>{" "}
          sets the P-10 permit at ₹15,000 per event; Gurgaon, Faridabad and
          Noida farmhouses follow Haryana and Uttar Pradesh rules. Our{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className={linkClass}
          >
            farmhouse wedding cost guide
          </Link>{" "}
          breaks down per-plate and rent quotes in more detail.
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Rules Apply to a Farmhouse Wedding in Delhi NCR This Winter?
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Music by 10 PM:</strong>{" "}
            <ExtLink href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918">
              India TV&apos;s April 2025 report on Delhi Police rules
            </ExtLink>{" "}
            says loudspeakers need prior permission and outdoor use is not
            allowed between 10 PM and 6 AM. Plan the baraat for 7–8 PM so the
            band and DJ finish first; the pheras and mantras can continue
            quietly.
          </li>
          <li>
            <strong>No firecrackers:</strong> the Supreme Court{" "}
            <ExtLink href="https://www.scconline.com/blog/post/2026/11/04/supreme-court-green-crackers-delhi-ncr-diwali-2026/">
              restored the firecracker ban in Delhi-NCR from 9 November 2026
            </ExtLink>
            , so plan the dwarpuja welcome without them.
          </li>
          <li>
            <strong>Bad-air days:</strong> diesel generators, coal tandoors and
            open burning can be restricted under GRAP. Ask the caterer to cook
            on gas and the farmhouse for grid power. Our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className={linkClass}
            >
              GRAP rules guide
            </Link>{" "}
            explains each stage.
          </li>
          <li>
            <strong>Gifts, not dowry:</strong> tilak gifts should be voluntary.
            Demanding dowry is an offence under the Dowry Prohibition Act,
            1961.
          </li>
        </ul>

        {/* =====================================================
            FARMHOUSE CHECKS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Ask the Farmhouse Before Booking?
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            Can we dig a small patch of lawn for matkor, or should we bring a
            soil tray?
          </li>
          <li>
            Is a havan fire allowed in the mandap, and is the mandap covered
            for a foggy night?
          </li>
          <li>
            Which room can we dress as the Kohbar, and can we put up panels
            without nails or paint?
          </li>
          <li>
            Are outside or specialist caterers allowed, and is there a kitchen
            for live counters?
          </li>
          <li>
            How many heated rooms are there, and can both families stay
            overnight?
          </li>
          <li>
            What is the music finish time, who applies for loudspeaker
            permission, and is there an overtime charge for a late lagna?
          </li>
          <li>
            What is the checkout time after vidaai, and is breakfast
            included?
          </li>
        </ol>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Bihari Wedding Checklist for a Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>8–10 weeks before:</strong> fix the date and lagna with
            your priest (Mithila or Banarasi panchang); book the farmhouse.
          </li>
          <li>
            <strong>6–8 weeks before:</strong> book the caterer with a tasting,
            décor, photographer, band or dhol, and mehendi artist.
          </li>
          <li>
            <strong>4 weeks before:</strong> tilak and invitations; book rooms
            for relatives travelling from Bihar.
          </li>
          <li>
            <strong>2 weeks before:</strong> confirm the menu per function,
            loudspeaker permission, any bar permit, matkor spot and Kohbar
            panels.
          </li>
          <li>
            <strong>Wedding week:</strong> Satyanarayan katha at home; walk the
            site with the décor team and caterer.
          </li>
          <li>
            <strong>After:</strong> griha pravesh, mooh dikhai and chauthari,
            then register the marriage.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          weddings and functions such as the tilak, haldi and baraat. If the
          tilak is a separate lunch, our{" "}
          <Link
            href="/blogs/tilak-ceremony-farmhouse-delhi-ncr"
            className={linkClass}
          >
            tilak ceremony at a farmhouse guide
          </Link>{" "}
          covers it in detail, our{" "}
          <Link
            href="/blogs/baraat-at-farmhouse-wedding-delhi-ncr"
            className={linkClass}
          >
            baraat at a farmhouse guide
          </Link>{" "}
          helps with the band and timing, and our{" "}
          <Link
            href="/blogs/winter-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            winter wedding guide
          </Link>{" "}
          covers heaters and fog plans.
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
            Find a Farmhouse for Your Bihari Wedding
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, lagna time, guest count and functions. Effortless
            Events can shortlist farmhouses across Delhi NCR with space for
            matkor, a covered mandap, a room for the Kohbar and rooms for both
            families, and help plan the menu and décor.
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
