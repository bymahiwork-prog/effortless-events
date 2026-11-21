import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Christian Wedding at a Farmhouse in Delhi NCR: Rules & Cost",

  description:
    "Planning a Christian wedding at a farmhouse in Delhi NCR? What church law allows, the Lent 2027 cut-off, church-to-farmhouse formats, cost and a checklist.",

  keywords: [
    "Christian wedding at farmhouse Delhi NCR",
    "Christian wedding reception venue Delhi",
    "can Christian marriage be held outside church India",
    "church wedding and farmhouse reception Delhi",
    "Catholic wedding outside church India",
    "Christian wedding cost Delhi NCR",
    "Christian wedding before Lent 2027",
  ],

  alternates: { canonical: "/blogs/christian-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Christian Wedding at a Farmhouse in Delhi NCR: Rules & Cost",
    description:
      "What the Indian Christian Marriage Act and church rules say about where you can marry, how Delhi NCR couples pair a church service with a farmhouse reception, cost estimates and a checklist.",
    images: ["/decoration-1.webp"],
  },
};

const faqs = [
  {
    q: "Can a Christian wedding be held outside a church in India?",
    a: "Sometimes, but it depends on your church. The Indian Christian Marriage Act, 1872 allows a marriage in a church, in a private dwelling or before a marriage registrar, but Church of England clergy must marry in a church unless there is no church within five miles or the bishop gives a special licence. Catholic weddings are normally held in a church, and an outside venue needs diocesan permission, so most Delhi NCR couples marry in church and hold the reception at a farmhouse.",
  },
  {
    q: "Can a Catholic wedding take place in a garden or farmhouse?",
    a: "Usually not. The Catholic Church strongly prefers weddings in a church, ideally during Mass, and permission to marry elsewhere is given only by diocesan authority in some pastoral or interfaith situations. Ask your parish priest before you book a farmhouse for the ceremony itself.",
  },
  {
    q: "What time can a Christian marriage take place in India?",
    a: "Under Section 10 of the Indian Christian Marriage Act, 1872, a marriage is generally solemnised between 6 AM and 7 PM. Clergy of some churches can marry outside these hours under their church's rules and, in some cases, with a bishop's licence. This is why most couples hold the church service in the morning or afternoon and the farmhouse reception in the evening.",
  },
  {
    q: "Can Christians get married during Lent?",
    a: "Many parishes discourage or limit weddings during Lent, the penitential season before Easter, and some will not allow flowers, music or large celebrations. In 2027 Lent begins on Ash Wednesday, 10 February, and Easter is Sunday 28 March, so couples who want a full church wedding and big reception often aim for December 2026 to early February 2027 or after Easter. Check your parish's rules.",
  },
  {
    q: "How early should we approach the parish for a church wedding?",
    a: "Start at least three months before the date. Catholic parishes typically ask for a recent baptism certificate, a marriage preparation course certificate and a pre-nuptial enquiry, and banns are read on consecutive Sundays in both parishes. Protestant churches have their own notice rules, so ask your pastor early.",
  },
  {
    q: "How much does a Christian wedding with a farmhouse reception cost in Delhi NCR?",
    a: "As a rough 2026 planning estimate, a church service plus a 150-guest farmhouse reception in Delhi NCR often totals about ₹5.5–14 lakh, before a bar, the gown, suits and rings. Smaller 60-guest weddings can come in around ₹2.5–7 lakh.",
  },
  {
    q: "Can we serve wine and have a bar at a farmhouse reception in Delhi?",
    a: "Yes, if you get the right licence. In Delhi a farmhouse event that serves alcohol needs a P-10 licence from the Excise Department, and Haryana and UP farmhouses need their own state permits. Plan the toast, the wine and the bar size early and apply a few weeks in advance.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="christian-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-21"
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
          alt="Christian wedding reception at a farmhouse in Delhi NCR: a lawn under strings of fairy lights with white chairs, white flowers and a draped stage for the couple"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Christian Wedding at a Farmhouse in Delhi NCR: Church Rules,
          Formats and Cost
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
          Planning a Christian wedding at a farmhouse in Delhi NCR this
          winter? The fairy-lit lawn, the white chairs and the cake table are
          easy to picture. The harder question is whether the vows themselves
          can be said on that lawn, or whether the service has to stay in
          church. This guide explains what Indian law and church rules say,
          why the Lent 2027 date matters, the formats that work, cost
          estimates and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Most Christian couples in Delhi NCR say their vows in church and
            celebrate at a farmhouse. Indian law allows a marriage in a
            church, a private dwelling or before a registrar, generally
            between 6 AM and 7 PM, but Catholic and Anglican rules normally
            require a church. Aim to marry before Lent begins on 10 February
            2027.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Christian Wedding at a Farmhouse: At a Glance
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
                <td className={td}>Ceremony venue</td>
                <td className={td}>
                  Usually your parish church; an outside venue only with your
                  church&apos;s permission
                </td>
              </tr>
              <tr>
                <td className={td}>Ceremony hours</td>
                <td className={td}>
                  Generally 6 AM–7 PM (Section 10, Indian Christian Marriage
                  Act, 1872)
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse functions</td>
                <td className={td}>
                  Reception, wedding lunch, rehearsal dinner, bridal shower,
                  bachelor or cocktail night
                </td>
              </tr>
              <tr>
                <td className={td}>Season window</td>
                <td className={td}>
                  December 2026 to early February 2027; Lent runs 10 Feb–28
                  Mar 2027
                </td>
              </tr>
              <tr>
                <td className={td}>Lead time with the parish</td>
                <td className={td}>
                  At least 3 months for documents, course and banns (typical
                  Catholic practice)
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>
                  About ₹5.5–14 lakh for a church service plus a 150-guest
                  farmhouse reception, before bar
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            CAN IT BE HELD AT A FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can a Christian Wedding Be Held at a Farmhouse?
        </h2>

        <p className="mb-8">
          Legally it can be possible, but your church usually decides. The
          Indian Christian Marriage Act, 1872 governs how Christian marriages
          are solemnised in most of India, including Delhi, Haryana and UP.
          The church you belong to then adds its own rules on top, and those
          are what most couples run into first.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What does the Indian Christian Marriage Act say?
        </h3>

        <p className="mb-8">
          According to this{" "}
          <a
            href="https://nyaaya.org/legal-explainer/when-and-where-can-a-christian-marriage-be-performed/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Nyaaya legal explainer
          </a>
          , a Christian marriage can take place in a church, in a private
          dwelling or in the presence of a marriage registrar, and generally
          between 6 AM and 7 PM. Church of England clergy must marry couples
          in a church unless there is no church within five miles or the
          bishop has granted a special licence. The{" "}
          <a
            href="https://en.wikipedia.org/wiki/Indian_Christian_Marriage_Act,_1872"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Wikipedia summary of the Act
          </a>{" "}
          adds that it must be performed by an authorised person, such as an
          ordained minister or a marriage registrar, with two witnesses, and
          that the certificate is recorded with the government registrar.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Can a Catholic wedding be held outside a church?
        </h3>

        <p className="mb-8">
          Usually not. A May 2026 piece from{" "}
          <a
            href="https://catholicconnect.in/news/why-cant-catholics-get-married-anywhere-they-want"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Catholic Connect
          </a>{" "}
          explains that the Church strongly prefers marriage in a church,
          ideally within Mass, because it is a sacrament. Diocesan authority
          can permit another place in some pastoral or interfaith situations,
          but the priest or deacon, two witnesses and formal permission are
          still required. In practice, Catholic couples in Delhi NCR marry in
          their parish church and book the farmhouse for everything after.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What about Protestant and other churches?
        </h3>

        <p className="mb-8">
          Rules differ by denomination and by congregation. Some pastors will
          conduct a service at a private venue; others will not. Ask your own
          pastor before you pay a farmhouse advance for the ceremony, and get
          the answer in writing if the vows will be on the lawn.
        </p>

        <p className="mb-8 text-base text-gray-600">
          This section is general information, not legal advice. Kerala
          couples should note that the Act does not apply in some areas that
          were part of Travancore-Cochin, and interfaith couples may also
          look at civil marriage under the Special Marriage Act.
        </p>

        {/* =====================================================
            WHEN: LENT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Plan a Christian Wedding in Delhi NCR?
        </h2>

        <p className="mb-8">
          The best window this season is December 2026 to early February
          2027. Delhi winters suit an afternoon church service followed by a
          lawn reception, and Lent, which many parishes treat as a quiet
          season for weddings, begins on Ash Wednesday,{" "}
          <a
            href="https://www.calendardate.com/ash_wednesday_2027.htm"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            10 February 2027
          </a>
          , with Easter on 28 March 2027.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Early to mid December:</strong> good weather for an
            evening lawn reception with heaters; Advent is under way, so ask
            how your parish handles flowers and music.
          </li>
          <li>
            <strong>Christmas to New Year:</strong> popular with families
            flying home, but churches are busy with Christmas services and
            many farmhouses price New Year&apos;s Eve as a premium night.
          </li>
          <li>
            <strong>January:</strong> coldest and foggiest month; prefer a
            daytime lunch reception and plan for flight delays.
          </li>
          <li>
            <strong>Up to 9 February 2027:</strong> last weekend before Lent
            is Saturday 6 February.
          </li>
          <li>
            <strong>After Easter (from April 2027):</strong> possible, but
            the heat pushes receptions late into the evening.
          </li>
        </ul>

        <p className="mb-8">
          For cold-weather planning, see our guide to a{" "}
          <Link
            href="/blogs/winter-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            winter wedding at a farmhouse
          </Link>
          .
        </p>

        {/* =====================================================
            FORMATS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do Couples Combine a Church Service and a Farmhouse?
        </h2>

        <p className="mb-8">
          The usual answer is: vows in church, celebration at the farmhouse.
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps couples book farmhouses, villas and venues for
          the receptions, lunches and pre-wedding events around a church
          wedding. These four formats cover most Christian weddings.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Format</th>
                <th className={th}>How the day runs</th>
                <th className={th}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Morning church + farmhouse lunch</td>
                <td className={td}>
                  Service around 11 AM; lunch reception 1:30–5 PM in winter
                  sun
                </td>
                <td className={td}>
                  Elders, families with children, January dates
                </td>
              </tr>
              <tr>
                <td className={td}>Afternoon church + evening reception</td>
                <td className={td}>
                  Service around 3–4 PM; reception 7–10 PM with first dance
                  and cake
                </td>
                <td className={td}>
                  Classic &quot;white wedding&quot;; 100–300 guests
                </td>
              </tr>
              <tr>
                <td className={td}>Ceremony at the farmhouse</td>
                <td className={td}>
                  Vows on the lawn before 7 PM, then reception on site
                </td>
                <td className={td}>
                  Only where your church or minister has agreed in writing
                </td>
              </tr>
              <tr>
                <td className={td}>Church, then reception later</td>
                <td className={td}>
                  Small church wedding first; farmhouse reception days or
                  weeks later
                </td>
                <td className={td}>
                  Large guest lists, interfaith families, NRI schedules
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            DAY PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Does a Church-to-Farmhouse Wedding Day Look Like?
        </h2>

        <p className="mb-8">
          Here is a sample plan for an afternoon service and evening
          reception. Timings are a guide only; your parish will tell you
          when the church is free and how long the service runs.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>1:00–2:30 PM:</strong> bride and groom get ready; flowers
            and cake delivered to the farmhouse.
          </li>
          <li>
            <strong>3:00–4:15 PM:</strong> church service: processional, Bible
            readings, sermon, vows, rings, signing of the register with two
            witnesses.
          </li>
          <li>
            <strong>4:15–5:00 PM:</strong> confetti exit and family
            photographs outside the church.
          </li>
          <li>
            <strong>5:00–6:30 PM:</strong> travel to the farmhouse; couple
            shoot on the lawn at golden hour (sunset is around 5:25–5:35 PM in
            December).
          </li>
          <li>
            <strong>7:00–8:00 PM:</strong> grand entry, toast, cake cutting
            and first dance.
          </li>
          <li>
            <strong>8:00–10:00 PM:</strong> dinner and dancing, with
            amplified music wound down by 10 PM.
          </li>
          <li>
            <strong>10:00–11:00 PM:</strong> send-off; guest cars and cabs
            leave in batches.
          </li>
        </ol>

        <p className="mb-8">
          Keep the farmhouse within about 30–60 minutes of the church
          (estimate). A South Delhi parish pairs naturally with{" "}
          <Link
            href="/blogs/farmhouse-in-chattarpur-for-party"
            className={linkClass}
          >
            Chattarpur
          </Link>{" "}
          or Westend Greens; Gurgaon churches with Sohna Road or Gwal Pahari;
          Noida churches with the Expressway farm belt; and West Delhi with
          Bijwasan or Kapashera.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Christian Wedding with a Farmhouse Reception Cost?
        </h2>

        <p className="mb-8">
          As a rough 2026 estimate, a church service plus a 150-guest
          farmhouse reception in Delhi NCR often totals about ₹5.5–14 lakh,
          before a bar, the gown, suits and rings. The church side is usually
          small: a fee or offering, the choir or organist and church flowers,
          which vary by parish. The figures below are planning estimates, not
          quotes.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item (estimate)</th>
                <th className={th}>60 guests</th>
                <th className={th}>150 guests</th>
                <th className={th}>300 guests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  Church offering, choir or organist, church flowers
                </td>
                <td className={td}>₹0.15–0.6 lakh</td>
                <td className={td}>₹0.25–0.8 lakh</td>
                <td className={td}>₹0.3–1 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  Farmhouse venue and food (₹1,500–₹3,000 per plate)
                </td>
                <td className={td}>₹0.9–1.8 lakh</td>
                <td className={td}>₹2.25–4.5 lakh</td>
                <td className={td}>₹4.5–9 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  Décor: aisle, stage, fairy lights, table flowers
                </td>
                <td className={td}>₹0.5–1.5 lakh</td>
                <td className={td}>₹1.25–3.5 lakh</td>
                <td className={td}>₹2.5–7 lakh</td>
              </tr>
              <tr>
                <td className={td}>Tiered wedding cake</td>
                <td className={td}>₹0.1–0.3 lakh</td>
                <td className={td}>₹0.2–0.6 lakh</td>
                <td className={td}>₹0.35–1 lakh</td>
              </tr>
              <tr>
                <td className={td}>Live band, DJ and sound</td>
                <td className={td}>₹0.3–0.8 lakh</td>
                <td className={td}>₹0.5–1.5 lakh</td>
                <td className={td}>₹0.75–2 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photo and video (church + reception)</td>
                <td className={td}>₹0.5–1.25 lakh</td>
                <td className={td}>₹0.75–2 lakh</td>
                <td className={td}>₹1.25–3 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  Cars, heaters, power backup and on-ground team
                </td>
                <td className={td}>₹0.2–0.5 lakh</td>
                <td className={td}>₹0.3–0.8 lakh</td>
                <td className={td}>₹0.6–1.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Total (before bar)</strong>
                </td>
                <td className={td}>
                  <strong>About ₹2.5–7 lakh</strong>
                </td>
                <td className={td}>
                  <strong>About ₹5.5–14 lakh</strong>
                </td>
                <td className={td}>
                  <strong>About ₹10–24 lakh</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Peak December Saturdays, premium caterers and large stage builds
          push totals higher. A bar, a rehearsal dinner or a second-day
          lunch are extra. For a full breakdown of reception costs, see our{" "}
          <Link
            href="/blogs/wedding-reception-farmhouse-delhi-ncr"
            className={linkClass}
          >
            wedding reception at a farmhouse
          </Link>{" "}
          guide.
        </p>

        {/* =====================================================
            RECEPTION ELEMENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Makes a Christian Wedding Reception Different?
        </h2>

        <p className="mb-8">
          A Christian reception runs on a few set moments, and the farmhouse
          layout needs to suit each one. Brief the venue and your caterer on
          these before the day.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Grand entry and aisle:</strong> a clear central path from
            the gate to the stage, lit for photographs.
          </li>
          <li>
            <strong>Toast:</strong> wine or a non-alcoholic sparkling drink
            for every table, poured before speeches begin.
          </li>
          <li>
            <strong>Cake cutting:</strong> a stable table on level ground,
            shaded from heaters so the icing holds.
          </li>
          <li>
            <strong>First dance:</strong> a dance floor or flat deck, not
            uneven grass, plus a band or DJ who knows the order of events.
          </li>
          <li>
            <strong>Bouquet and garter toss:</strong> optional, but leave
            open space near the stage.
          </li>
          <li>
            <strong>Menu:</strong> many families mix a continental or Goan,
            Kerala or Anglo-Indian spread with North Indian dishes; confirm
            whether outside caterers are allowed.
          </li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Do you need a licence for wine and a bar?
        </h3>

        <p className="mb-8">
          Yes, in most cases. In Delhi a farmhouse event that serves alcohol
          needs a P-10 licence; Haryana and UP farmhouses need their own state
          permits. Our{" "}
          <Link
            href="/blogs/how-much-alcohol-for-party-delhi-ncr"
            className={linkClass}
          >
            alcohol quantity guide
          </Link>{" "}
          helps you size the toast wine and the bar.
        </p>

        {/* =====================================================
            FARMHOUSE CHECKS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Check Before Booking the Farmhouse?
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            Arrival time on the day: guests may come straight from a 4 PM
            church service, so the venue must be ready by 5 PM.
          </li>
          <li>
            If the vows will be on site: written approval from your
            minister, a quiet ceremony area, a table for signing the register
            and a finish before 7 PM.
          </li>
          <li>
            A warm, well-lit dressing room for the bride and a second room
            for the groom.
          </li>
          <li>
            Covered or tented seating, patio heaters and power backup for
            December and January evenings (check current GRAP limits on
            diesel generators).
          </li>
          <li>
            A level dance floor and a stable cake table.
          </li>
          <li>
            Music cut-off: amplified sound outdoors generally has to stop by
            10 PM.
          </li>
          <li>
            Firecrackers and sparklers: none. Plan a confetti or bubble
            send-off instead.
          </li>
          <li>
            Parking for guest cars and a drop-off point close to the lawn for
            elders.
          </li>
        </ul>

        {/* =====================================================
            PAPERWORK
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Paperwork Do You Need for a Church Wedding?
        </h2>

        <p className="mb-8">
          Start with your parish at least three months before the date.
          Requirements vary by church and diocese, but a Catholic parish
          will typically ask for the following, going by published parish
          guidance such as{" "}
          <a
            href="https://www.standrewchurch.in/sacraments-1/matrimony"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            this Mumbai parish&apos;s marriage page
          </a>
          :
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>A recent baptism certificate (often dated within six months).</li>
          <li>A marriage preparation course certificate.</li>
          <li>A pre-nuptial enquiry form, filed with your priest.</li>
          <li>
            Banns read on two consecutive Sundays in both parishes, with the
            result returned to the parish where you marry.
          </li>
          <li>
            For a mixed or interfaith marriage, extra documents such as proof
            of birth and an affidavit from the non-Catholic partner.
          </li>
        </ul>

        <p className="mb-8">
          Confirm the Delhi, Gurgaon or Noida process with your own parish,
          as rules differ. After the service, collect the marriage
          certificate and keep copies for passports, visas and bank records.
          Couples who are not marrying in church can compare other routes in
          our{" "}
          <Link
            href="/blogs/intimate-farmhouse-wedding-delhi-ncr"
            className={linkClass}
          >
            intimate farmhouse wedding
          </Link>{" "}
          guide.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Christian Wedding Checklist: Church and Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>12+ weeks out:</strong> meet your priest or pastor; fix
            the date and time; book the marriage preparation course.
          </li>
          <li>
            <strong>10–12 weeks out:</strong> shortlist farmhouses within
            30–60 minutes of the church; visit at the time of day you will
            use them.
          </li>
          <li>
            <strong>8–10 weeks out:</strong> book caterer, baker, décor,
            photographer and band; order the gown and suits.
          </li>
          <li>
            <strong>6–8 weeks out:</strong> submit parish documents; banns
            are read; choose readings and hymns with the choir.
          </li>
          <li>
            <strong>4–6 weeks out:</strong> apply for a liquor licence if
            there is a bar; confirm heaters, power plan and the 10 PM cut-off
            in writing.
          </li>
          <li>
            <strong>1–2 weeks out:</strong> rehearsal at the church; final
            headcount; run-of-show to every vendor; fog plan for outstation
            guests.
          </li>
          <li>
            <strong>Day after:</strong> collect the marriage certificate and
            settle vendor balances.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses near your church and
          plan the reception around the service time, so you can focus on
          the vows.
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
            Find a Farmhouse Near Your Church
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your church, date and guest count. Effortless Events can
            shortlist farmhouses across Delhi NCR for your reception or
            wedding lunch and help plan food, décor and logistics.
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
              Plan Your Wedding Reception
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
