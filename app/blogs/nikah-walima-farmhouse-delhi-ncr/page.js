import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Nikah & Walima at a Farmhouse in Delhi NCR: Cost & Dates",

  description:
    "Planning a nikah or walima at a farmhouse in Delhi NCR? Dates before Ramadan 2027, cost estimates, halal catering checks, registration and a checklist.",

  keywords: [
    "nikah at farmhouse Delhi NCR",
    "nikah venue Delhi",
    "walima venue Delhi NCR",
    "nikah ceremony cost Delhi",
    "halal catering for wedding Delhi",
    "Muslim marriage registration Delhi",
    "nikah before Ramadan 2027",
  ],

  alternates: { canonical: "/blogs/nikah-walima-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Nikah & Walima at a Farmhouse in Delhi NCR: Cost & Dates",

    description:
      "When to book before Ramadan 2027, nikah vs walima formats, cost estimates by guest count, halal catering and venue checks, registration notes and a checklist.",

    images: ["/farm-70.webp"],
  },
};

const faqs = [
  {
    q: "Can a nikah be done at a farmhouse or at home?",
    a: "Yes. A nikah does not have to take place in a mosque; many Delhi NCR families hold it at home, in a banquet hall or at a farmhouse. What matters is the offer and acceptance, the agreed mehr, the witnesses and a qazi or maulana to conduct it, so confirm the details with the qazi you book.",
  },
  {
    q: "How many witnesses are needed for a nikah?",
    a: "In Sunni (Hanafi) practice, common in Delhi, two adult Muslim witnesses are needed: two men, or one man and two women. Practice differs between schools and in Shia families, so ask your qazi in advance and make sure the witnesses bring ID for the nikahnama.",
  },
  {
    q: "What is the difference between nikah and walima?",
    a: "The nikah is the marriage contract itself, usually a small ceremony with family, the qazi and witnesses. The walima is the feast the groom's family hosts after the marriage to celebrate it, and it is often the larger event with more guests.",
  },
  {
    q: "When is the walima held after the nikah?",
    a: "Many families hold the walima a day or two after the nikah and rukhsati, though some combine it with the nikah day or hold it later for practical reasons. At a farmhouse, a common pattern is an afternoon nikah and a walima dinner the next evening.",
  },
  {
    q: "Can a nikah be held during Ramadan?",
    a: "A nikah is not forbidden in Ramadan, but most families avoid large wedding feasts while guests are fasting. With Ramadan 2027 likely to begin around 9 or 10 February in India, many Delhi NCR families are fixing nikah and walima dates for December 2026 to early February 2027.",
  },
  {
    q: "How much does a nikah and walima cost in Delhi NCR?",
    a: "As a rough planning estimate, a farmhouse nikah for about 75 guests often costs ₹1,50,000–₹4,00,000, and a walima dinner for about 200 guests ₹4,00,000–₹10,00,000, covering venue, halal catering, décor, sound and photos. Menu and date drive most of the difference.",
  },
  {
    q: "Is registering a nikah compulsory in Delhi?",
    a: "Delhi's 2014 compulsory registration order covers all marriages, but in 2024 the Delhi High Court found there was no clear procedure to register Muslim marriages under it and directed the government to enable online registration. Keep the signed nikahnama safe and check the current option on the Delhi e-District portal or with a lawyer.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const link = "text-black underline font-semibold";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="nikah-walima-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-13"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farm-70.webp"
          width={1382}
          height={921}
          fetchPriority="high"
          decoding="async"
          alt="Nikah at a farmhouse in Delhi NCR: a wide private lawn with a stone path, palms and potted plants, ready to be set up for a nikah ceremony and walima dinner"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Nikah and Walima at a Farmhouse in Delhi NCR: Dates, Cost and a
          Planning Checklist
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
          A nikah at a farmhouse in Delhi NCR gives a family one private,
          open space for the ceremony, separate seating if you want it, a
          quiet corner for prayers and a lawn big enough for the walima feast.
          This guide covers when to book before Ramadan 2027, how a nikah and
          walima can be split across a farmhouse, what each typically costs,
          what to check on halal catering, and where registration in Delhi
          currently stands.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Yes, a nikah can be held at a farmhouse. Fix the date with your
            qazi and elders first; with Ramadan 2027 likely to start around 9–10
            February, the busiest window is December 2026 to early February.
            Book the farmhouse 6–10 weeks ahead, confirm halal catering and an
            alcohol-free setup, and budget roughly ₹2,000–₹5,000 per guest
            (estimate).
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Nikah at a Farmhouse: At a Glance
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
                <td className={td}>Format</td>
                <td className={td}>
                  Afternoon nikah for 50–150 guests; walima dinner for 150–400
                  the next evening
                </td>
              </tr>
              <tr>
                <td className={td}>Best window</td>
                <td className={td}>
                  Late Nov 2026 to early Feb 2027, before Ramadan; then after
                  Eid al-Fitr (likely around 9–10 Mar 2027)*
                </td>
              </tr>
              <tr>
                <td className={td}>Book ahead</td>
                <td className={td}>
                  6–10 weeks; December and January weekends overlap with peak
                  wedding season
                </td>
              </tr>
              <tr>
                <td className={td}>Cost**</td>
                <td className={td}>
                  Nikah for ~75 guests ₹1.5–4 lakh; walima for ~200 guests ₹4–10
                  lakh
                </td>
              </tr>
              <tr>
                <td className={td}>Must-checks</td>
                <td className={td}>
                  Halal kitchen and caterer; alcohol-free property; separate
                  seating; prayer space and wazu water
                </td>
              </tr>
              <tr>
                <td className={td}>Paperwork</td>
                <td className={td}>
                  Signed nikahnama with witnesses&apos; details; check Delhi
                  registration route
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-10">
          *Ramadan and Eid dates depend on moon sighting; see the sources
          below. **All prices in this guide are indicative planning estimates
          based on typical Delhi NCR quotes, not fixed rates, unless a source is
          named. Actual costs depend on the property, date, menu and vendors.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can a Nikah Be Held at a Farmhouse?
        </h2>

        <p className="mb-8">
          Yes. A nikah does not need to happen in a mosque; what makes it
          valid is the offer and acceptance (ijab and qubool), the mehr agreed
          between the families, the required witnesses and, in practice, a
          qazi or maulana who conducts it and fills in the nikahnama. Many
          Delhi families already hold the nikah at home or in a banquet hall,
          and a farmhouse simply gives more room and more privacy. Customs on
          witnesses, the wali and seating differ between schools and
          communities, so agree the details with your qazi before you book.
        </p>

        <p className="mb-8">
          A farmhouse works especially well when the family wants:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Separate seating:</strong> two lawns, or a lawn and a hall,
            make men&apos;s and women&apos;s areas easy without heavy partitions.
          </li>
          <li>
            <strong>A quiet room for the bride:</strong> bedrooms double as a
            getting-ready room and a private space when the qazi seeks her
            consent.
          </li>
          <li>
            <strong>Space to pray:</strong> a clean covered area for Zuhr, Asr or
            Maghrib, with water for wazu, keeps guests on site.
          </li>
          <li>
            <strong>No other party next door:</strong> no shared banquet floor
            with loud music or a bar.
          </li>
          <li>
            <strong>Nikah and walima in one place:</strong> some families book
            two days, so décor and furniture stay put.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When to Book: Nikah Dates Before Ramadan 2027
        </h2>

        <p className="mb-8">
          Muslim weddings do not follow a Hindu muhurat calendar, but they do
          cluster around Ramadan. According to{" "}
          <a
            href="https://ummid.com/news/2026/11/1/100-days-until-ramadan-2027-countdown-begins.html"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Ummid.com (1 November 2026)
          </a>
          , Ramadan 2027 is likely to begin on 9 or 10 February in India,
          depending on moon sighting, with Eid al-Fitr likely on 9 or 10
          March;{" "}
          <a
            href="https://www.timeanddate.com/holidays/india/ramadan-begins"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Timeanddate
          </a>{" "}
          lists Tuesday 9 February 2027 as a tentative start. Because most
          families avoid big wedding feasts during the fasting month, nikah and
          walima dates are being pulled into the weeks before it, the same
          weeks Hindu weddings fill Delhi NCR farmhouses.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Window</th>
                <th className={th}>What to expect at farmhouses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Late Nov – mid Dec 2026</td>
                <td className={td}>
                  Peak wedding season overall; weekends book fast, so look at
                  Friday or weekday dates
                </td>
              </tr>
              <tr>
                <td className={td}>Late Dec 2026 – Jan 2027</td>
                <td className={td}>
                  Coldest, foggiest weeks; plan heaters and an indoor plan B;
                  Christmas and New Year weekends cost more
                </td>
              </tr>
              <tr>
                <td className={td}>1 Feb – about 7 Feb 2027</td>
                <td className={td}>
                  Last week before Ramadan; milder days, high demand from
                  families who left it late
                </td>
              </tr>
              <tr>
                <td className={td}>About 9 Feb – 9 Mar 2027</td>
                <td className={td}>
                  Ramadan (expected); few nikah feasts; some families hold a
                  small nikah with an iftar instead
                </td>
              </tr>
              <tr>
                <td className={td}>Mid-March 2027 onwards</td>
                <td className={td}>
                  After Eid; spring weather suits lawn walimas before the
                  summer heat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Friday is a popular day for the nikah itself in many families; plan
          the timing around Jumu&apos;ah prayer so the men can attend. If a
          weekday nikah is easier for the qazi and close family, a weekend
          walima lets working guests and relatives from outside Delhi attend.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Nikah, Walima or Both: Which Format Fits?
        </h2>

        <p className="mb-8">
          The nikah is the marriage contract, usually smaller and more
          personal; the walima is the feast the groom&apos;s family hosts
          after it, and it is usually the bigger guest list. How you split them
          decides what kind of farmhouse and how many days you need.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Format</th>
                <th className={th}>Guests</th>
                <th className={th}>Farmhouse fit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Small nikah and family lunch</td>
                <td className={td}>30–75</td>
                <td className={td}>
                  Compact farmhouse or villa with one lawn and a hall; daytime
                  slot
                </td>
              </tr>
              <tr>
                <td className={td}>Nikah and rukhsati, same evening</td>
                <td className={td}>100–250</td>
                <td className={td}>
                  Two seating areas, a stage, a dinner area and a bridal room
                </td>
              </tr>
              <tr>
                <td className={td}>Walima only (nikah done elsewhere)</td>
                <td className={td}>150–400</td>
                <td className={td}>
                  Large lawn with a dinner buffet, stage for photos, heaters in
                  winter
                </td>
              </tr>
              <tr>
                <td className={td}>Nikah day 1, walima day 2</td>
                <td className={td}>75 then 250</td>
                <td className={td}>
                  Two-day booking; décor and furniture stay; rooms for close
                  family overnight
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          A walima runs much like a reception, so our{" "}
          <Link
            href="/blogs/wedding-reception-farmhouse-delhi-ncr"
            className={link}
          >
            wedding reception at a farmhouse guide
          </Link>{" "}
          is useful for stage, seating and run-of-show ideas. If relatives are
          flying in, see our guide to{" "}
          <Link
            href="/blogs/wedding-guest-accommodation-delhi-ncr"
            className={link}
          >
            wedding guest accommodation in Delhi NCR
          </Link>
          .
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Nikah and Walima Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A farmhouse nikah for about 75 guests typically costs ₹1,50,000–
          ₹4,00,000, and a walima dinner for about 200 guests ₹4,00,000–
          ₹10,00,000 (estimates). Food is the biggest line: a non-vegetarian
          Mughlai or Awadhi menu usually costs more per plate than a vegetarian
          one. There is no fixed Delhi rate for the qazi; as one reference
          point, the Chhattisgarh Waqf Board{" "}
          <a
            href="https://www.patrika.com/en/raipur-news/cg-waqf-board-caps-nikah-nazarana-at-%E2%82%B91100-19645073"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            capped the nikah nazarana at ₹1,100
          </a>{" "}
          in that state in December 2025. In Delhi NCR, a fee plus travel to a
          farmhouse is usually agreed directly with the qazi.
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
                <td className={td}>Farmhouse, day or evening slot</td>
                <td className={td}>₹50,000–₹2,50,000</td>
                <td className={td}>
                  Area, size and date; Dec–Jan weekends at the top end
                </td>
              </tr>
              <tr>
                <td className={td}>Halal catering</td>
                <td className={td}>₹1,200–₹3,000 per plate</td>
                <td className={td}>
                  Biryani, kebab and live counters push it up; plus tea and
                  snacks
                </td>
              </tr>
              <tr>
                <td className={td}>Qazi and nikahnama</td>
                <td className={td}>₹2,100–₹11,000</td>
                <td className={td}>
                  Fee, nazrana and travel to the farmhouse vary widely
                </td>
              </tr>
              <tr>
                <td className={td}>Décor and stage</td>
                <td className={td}>₹40,000–₹3,00,000</td>
                <td className={td}>
                  Nikah stage, floral partitions or drapes, entrance, lighting
                </td>
              </tr>
              <tr>
                <td className={td}>Photo and video</td>
                <td className={td}>₹30,000–₹1,50,000</td>
                <td className={td}>
                  Brief the team on separate seating and family preferences
                </td>
              </tr>
              <tr>
                <td className={td}>Sound and lights</td>
                <td className={td}>₹10,000–₹50,000</td>
                <td className={td}>
                  Mic for the qazi and khutbah; soft background music if wanted
                </td>
              </tr>
              <tr>
                <td className={td}>Heaters and winter extras</td>
                <td className={td}>₹10,000–₹60,000</td>
                <td className={td}>Patio heaters, side-covers, shawls basket</td>
              </tr>
              <tr>
                <td className={td}>Sweets, dry fruits, return gifts</td>
                <td className={td}>₹100–₹800 per family</td>
                <td className={td}>
                  Chhuare (dates) and mishri are common after the nikah
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Budget by guest count
        </h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Event</th>
                <th className={th}>Guests</th>
                <th className={th}>Total (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Small nikah and lunch</td>
                <td className={td}>40</td>
                <td className={td}>₹1,00,000–₹2,50,000</td>
              </tr>
              <tr>
                <td className={td}>Nikah and dinner</td>
                <td className={td}>75–100</td>
                <td className={td}>₹1,50,000–₹4,50,000</td>
              </tr>
              <tr>
                <td className={td}>Walima dinner</td>
                <td className={td}>200</td>
                <td className={td}>₹4,00,000–₹10,00,000</td>
              </tr>
              <tr>
                <td className={td}>Walima dinner</td>
                <td className={td}>350–400</td>
                <td className={td}>₹7,50,000–₹18,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          How to check halal catering at a farmhouse
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            Ask whether the farmhouse insists on its in-house caterer, and if
            so, where its meat comes from and whether it can be fully halal.
          </li>
          <li>
            If outside caterers are allowed, confirm whether there is a kitchen
            fee and whether your caterer can use the kitchen or must set up a
            separate cooking area.
          </li>
          <li>
            Ask for the supplier and slaughter details in writing; many
            families prefer a caterer from their own community whom they
            already trust.
          </li>
          <li>
            Check that no alcohol, pork or non-halal stock from a previous
            event will be on site, and that utensils are cleaned before use.
          </li>
          <li>
            Plan a vegetarian counter for guests who want one, and
            dates and water ready if any guests are keeping a voluntary fast.
          </li>
        </ul>

        <p className="mb-8">
          For quantities per guest and live-counter ideas, see our{" "}
          <Link
            href="/blogs/farmhouse-party-catering-menu-delhi-ncr"
            className={link}
          >
            farmhouse catering guide
          </Link>
          .
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should a Farmhouse Have for a Nikah?
        </h2>

        <p className="mb-8">
          A farmhouse that is perfect for a cocktail party may not suit a
          nikah. Walk the property with these needs in mind:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Need</th>
                <th className={th}>What to check</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Separate seating</td>
                <td className={td}>
                  Two lawns, a lawn and a hall, or room for drapes and floral
                  partitions
                </td>
              </tr>
              <tr>
                <td className={td}>Bride&apos;s room</td>
                <td className={td}>
                  Private, heated, with an attached washroom, close to the nikah
                  area
                </td>
              </tr>
              <tr>
                <td className={td}>Prayer space</td>
                <td className={td}>
                  Clean covered area with mats; know the qibla direction (almost
                  due west, slightly south, from Delhi)
                </td>
              </tr>
              <tr>
                <td className={td}>Wazu</td>
                <td className={td}>
                  Taps or a wash area with warm water in winter, near the
                  prayer space
                </td>
              </tr>
              <tr>
                <td className={td}>Alcohol-free</td>
                <td className={td}>
                  No bar set-up or leftover stock; no other event booked the
                  same day
                </td>
              </tr>
              <tr>
                <td className={td}>Washrooms</td>
                <td className={td}>
                  Enough for both seating areas, cleaned between nikah and
                  walima
                </td>
              </tr>
              <tr>
                <td className={td}>Parking and access</td>
                <td className={td}>
                  Space for elders&apos; cars near the gate; drop-off for the
                  rukhsati car
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Is Nikah Registration Required in Delhi?
        </h2>

        <p className="mb-8">
          The Delhi (Compulsory Registration of Marriage) Order, 2014 applies
          to marriages of all communities, but registering a nikah under it has
          been difficult in practice. In July 2024, as{" "}
          <a
            href="https://theprint.in/india/enable-online-registration-of-marriages-under-compulsory-registration-order-delhi-hc/2180220/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            ThePrint (PTI)
          </a>{" "}
          reported, the Delhi High Court found no established procedure for
          registering marriages under Muslim personal law and directed the
          Delhi government to enable it on the online portal. In November
          2024, the court asked the Chief Secretary to ensure this was done in
          a time-bound way, according to{" "}
          <a
            href="https://livelaw.in/high-court/delhi-high-court/delhi-high-court-muslim-marriage-online-registration-274754"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            LiveLaw
          </a>
          , and a 2025 public-interest case on compulsory registration of all
          marriages is also before the court.
        </p>

        <p className="mb-8">What this means for your planning:</p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            Make sure the nikahnama is filled in fully: names, mehr, witnesses
            and the qazi&apos;s details. Keep several copies.
          </li>
          <li>
            Ask witnesses to bring photo ID on the day; you may need them again
            for registration.
          </li>
          <li>
            Check the current options on the Delhi e-District portal before
            you apply; couples who need a certificate quickly for a visa or
            passport often take a lawyer&apos;s advice on the right route.
          </li>
          <li>
            If the nikah is in Gurugram, Faridabad, Noida or Ghaziabad, ask the
            local registrar about Haryana or Uttar Pradesh rules, which differ
            from Delhi&apos;s.
          </li>
        </ul>

        <p className="mb-8">
          This is general information, not legal advice; procedures change, so
          confirm with the registrar or a lawyer.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Music, Fireworks and Winter Air Rules
        </h2>

        <p className="mb-8">
          Many nikah functions are quiet by choice, but a walima may have
          background music or a qawwali. Outdoor loudspeakers in Delhi NCR
          generally have to stop by 10 PM, so plan any performance early.
          Firecrackers are restricted across Delhi NCR in winter, and if air
          quality worsens, the Graded Response Action Plan can limit
          generators, tandoors and open fires; our{" "}
          <Link
            href="/blogs/grap-rules-weddings-parties-delhi-ncr"
            className={link}
          >
            GRAP rules guide
          </Link>{" "}
          explains each stage. Charcoal kebab and tandoor counters are the
          item most likely to be hit, so ask your caterer for an electric or
          gas fallback.
        </p>

        <p className="mb-8">
          Planning a Sufi evening around the walima? Our{" "}
          <Link
            href="/blogs/sufi-night-farmhouse-wedding-delhi-ncr"
            className={link}
          >
            Sufi night guide
          </Link>{" "}
          covers qawwali fees, seating and sound.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Plan: Nikah Day and Walima Evening
        </h2>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Day 1: Nikah (afternoon)
        </h3>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>11:00 AM:</strong> décor, seating and sound checked;
            bride&apos;s room heated; prayer area and wazu water ready.
          </li>
          <li>
            <strong>1:00 PM:</strong> close family arrives; bride gets ready.
          </li>
          <li>
            <strong>2:30 PM:</strong> baraat arrives; welcome drinks and
            sherbet.
          </li>
          <li>
            <strong>3:00–4:00 PM:</strong> qazi arrives; consent, nikahnama
            signed, khutbah and dua; chhuare and mishri shared.
          </li>
          <li>
            <strong>4:00 PM:</strong> Asr prayer for those who wish; family
            photos.
          </li>
          <li>
            <strong>5:30–8:00 PM:</strong> dinner; Maghrib prayer break.
          </li>
          <li>
            <strong>8:30 PM:</strong> rukhsati; guests leave.
          </li>
        </ol>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Day 2: Walima (evening)
        </h3>

        <ol className="list-decimal pl-8 space-y-3 mb-12">
          <li>
            <strong>4:00 PM:</strong> lawn reset; heaters, stage and buffet
            set up; washrooms cleaned.
          </li>
          <li>
            <strong>7:00 PM:</strong> couple and groom&apos;s family welcome
            guests.
          </li>
          <li>
            <strong>7:30–9:30 PM:</strong> stage photos and blessings; dinner
            opens around 8 PM.
          </li>
          <li>
            <strong>9:45 PM:</strong> any music winds down before 10 PM.
          </li>
          <li>
            <strong>10:30 PM:</strong> dessert, sweet boxes; guests leave.
          </li>
        </ol>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask the Farmhouse Owner Before Booking
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Can we bring our own halal caterer? Is there a kitchen fee?</li>
          <li>Will any other event, or any bar set-up, be on site that day?</li>
          <li>Which areas can be used for separate seating?</li>
          <li>Is there a heated private room for the bride?</li>
          <li>Where can guests pray, and is warm water available for wazu?</li>
          <li>Can we book two consecutive days for nikah and walima?</li>
          <li>What are the music cut-off time and the generator rules?</li>
          <li>
            What does the security deposit cover, and are cancellation terms
            written into the agreement?
          </li>
        </ul>

        <p className="mb-8">
          Before you pay, read our guide on{" "}
          <Link
            href="/blogs/how-to-book-farmhouse-safely-delhi-ncr"
            className={link}
          >
            how to book a farmhouse safely
          </Link>{" "}
          to avoid hidden charges and fake listings.
        </p>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          weddings and family functions, including nikah ceremonies and walima
          dinners, and can shortlist properties that allow outside halal
          caterers and offer separate seating areas.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Nikah and Walima Checklist
        </h2>

        <ul className="space-y-3 mb-12">
          <li>☐ Date agreed with the qazi and both families (Ramadan dates checked)</li>
          <li>☐ Decide: nikah and walima same day, or two days</li>
          <li>☐ Guest list split for nikah and walima</li>
          <li>☐ Farmhouse booked; alcohol-free and no other event that day</li>
          <li>☐ Separate seating, bride&apos;s room and prayer area confirmed</li>
          <li>☐ Halal caterer confirmed; meat source and kitchen rules in writing</li>
          <li>☐ Qazi booked; fee, travel and timing agreed</li>
          <li>☐ Witnesses chosen and asked to bring ID</li>
          <li>☐ Mehr agreed between families before the day</li>
          <li>☐ Nikahnama copies kept; registration route checked</li>
          <li>☐ Décor, stage, sound and photographer briefed</li>
          <li>☐ Chhuare, mishri and sweet boxes ordered</li>
          <li>☐ Heaters and indoor plan B for fog, cold or poor air quality</li>
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
            Planning a Nikah or Walima Before Ramadan?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count, preferred area and budget. Effortless
            Events can help you find a farmhouse with separate seating, space
            for prayers and room for your own halal caterer.
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
