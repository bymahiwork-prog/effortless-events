import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Arya Samaj Marriage & Farmhouse Reception in Delhi NCR",

  description:
    "Planning an Arya Samaj marriage with a farmhouse reception in Delhi NCR? Validity and registration, documents, cost estimates, a day plan and a checklist.",

  keywords: [
    "Arya Samaj marriage and farmhouse reception Delhi NCR",
    "Arya Samaj marriage cost Delhi",
    "is Arya Samaj marriage valid",
    "Arya Samaj marriage registration Delhi",
    "Arya Samaj marriage vs court marriage",
    "Arya Samaj marriage at home or farmhouse",
    "small wedding reception at farmhouse Delhi",
  ],

  alternates: {
    canonical: "/blogs/arya-samaj-marriage-farmhouse-reception-delhi-ncr",
  },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Arya Samaj Marriage & Farmhouse Reception in Delhi NCR",
    description:
      "How Delhi NCR couples pair a short Arya Samaj ceremony with a farmhouse lunch or reception: legal checks, registration, documents, cost estimates and a same-day plan.",
    images: ["/decoration-3.webp"],
  },
};

const faqs = [
  {
    q: "Is an Arya Samaj marriage legally valid in India?",
    a: "An Arya Samaj marriage between two eligible Hindus (a term that legally includes Sikhs, Jains and Buddhists) is generally treated as a Hindu marriage, with the Arya Marriage Validation Act, 1937 and the Hindu Marriage Act, 1955 cited as its basis. Validity still depends on the legal conditions being met, such as minimum age and no existing spouse, so it is not a shortcut around the law.",
  },
  {
    q: "Is the Arya Samaj certificate enough, or do we need to register the marriage?",
    a: "Register it. In June 2022 the Supreme Court, hearing a bail case, refused to accept an Arya Samaj certificate and remarked that issuing marriage certificates is the job of the authorities, as reported by LiveLaw. In Delhi, couples married under the Hindu Marriage Act register afterwards with the SDM office of the Revenue Department.",
  },
  {
    q: "Can an Arya Samaj marriage be done at home or at a farmhouse?",
    a: "Ask your mandir. Most mandir and wedding-site guides describe the ceremony at the mandir, while at least one older guide says couples can choose the location. The common Delhi NCR pattern is the ceremony at the mandir in the morning and a lunch or reception at a farmhouse afterwards.",
  },
  {
    q: "What documents are needed for an Arya Samaj marriage in Delhi?",
    a: "Mandir pages typically ask for photo ID and address proof for both partners, proof of age (21 for the groom, 18 for the bride), passport-size photographs, two witnesses with ID, and a divorce decree or death certificate if either partner was married before. Confirm the exact list with your mandir a week ahead.",
  },
  {
    q: "How much does an Arya Samaj marriage cost in Delhi?",
    a: "The mandir ceremony itself is the small part: WeddingWire India puts it at roughly ₹5,000 to ₹15,000 depending on the city, mandir and paperwork. As a rough 2026 estimate, adding a 100-guest farmhouse lunch or reception in Delhi NCR brings the total to about ₹4–9.5 lakh before a bar.",
  },
  {
    q: "How long does an Arya Samaj marriage ceremony take?",
    a: "Usually one to two hours, depending on the mandir and how much is explained. A Delhi mandir FAQ estimates about one to two hours including paperwork, and WeddingWire India gives a wider one-to-three-hour range, so block the whole morning before guests head to the farmhouse.",
  },
  {
    q: "Arya Samaj marriage or court marriage: which is better?",
    a: "It depends on who is marrying and what you want on the day. An Arya Samaj ceremony is a same-day Vedic ritual for eligible Hindus, followed by registration. A Special Marriage Act (court) marriage needs a 30-day notice period but does not depend on either partner's religion, which is why many interfaith couples use it. Take legal advice if you are unsure.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="arya-samaj-marriage-farmhouse-reception-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-19"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-3.webp"
          width={736}
          height={840}
          fetchPriority="high"
          decoding="async"
          alt="Farmhouse reception after an Arya Samaj marriage in Delhi NCR: candlelit round tables, white drapes and chandeliers set for an evening dinner"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Arya Samaj Marriage and Farmhouse Reception in Delhi NCR: Rules,
          Cost and Plan
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
          An Arya Samaj marriage with a farmhouse reception is one of the
          simplest ways to marry in Delhi NCR: a short Vedic ceremony in the
          morning, then a relaxed lunch or evening party for the people who
          matter. This guide covers whether the marriage is valid, why you
          must still register it, the documents, a same-day plan, cost
          estimates and what to check before booking the farmhouse.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Hold the Arya Samaj ceremony at an established mandir in the
            morning (about one to two hours), then host a lunch or evening
            reception at a farmhouse within 30–60 minutes. Register the
            marriage with the SDM office afterwards, because a mandir
            certificate alone is not a government registration. For 100
            guests, budget roughly ₹4–9.5 lakh (estimate).
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Arya Samaj Marriage with a Farmhouse Reception: At a Glance
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
                <td className={td}>Ceremony</td>
                <td className={td}>
                  Vedic havan, pheras and saptapadi at an Arya Samaj mandir;
                  about 1–2 hours
                </td>
              </tr>
              <tr>
                <td className={td}>Who can marry this way</td>
                <td className={td}>
                  Two eligible Hindus (legally including Sikhs, Jains and
                  Buddhists); groom 21+, bride 18+
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse function</td>
                <td className={td}>
                  Same-day lunch, same-night reception, or a reception a few
                  weeks later
                </td>
              </tr>
              <tr>
                <td className={td}>Mandir cost</td>
                <td className={td}>
                  Roughly ₹5,000–₹15,000 (WeddingWire India figure)
                </td>
              </tr>
              <tr>
                <td className={td}>Total for 100 guests (estimate)</td>
                <td className={td}>
                  About ₹4–9.5 lakh with a farmhouse lunch or reception, before
                  bar
                </td>
              </tr>
              <tr>
                <td className={td}>After the wedding</td>
                <td className={td}>
                  Register under the Hindu Marriage Act at the SDM office; the
                  mandir certificate is supporting proof only
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            VALIDITY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Is an Arya Samaj Marriage Legally Valid?
        </h2>

        <p className="mb-8">
          Generally yes, for two eligible Hindus, as long as the legal
          conditions are met. Legal explainers such as{" "}
          <a
            href="https://restthecase.com/knowledge-bank/difference-between-court-marriage-and-arya-samaj-marriage"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Rest The Case
          </a>{" "}
          cite the Arya Marriage Validation Act, 1937 and the Hindu Marriage
          Act, 1955 as the basis, with a minimum age of 21 for the groom and
          18 for the bride. The ceremony is a Vedic ritual, so it does not
          replace the conditions of marriage law: no existing spouse, legal
          age and genuine consent all still apply. This is general
          information, not legal advice.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Why is the mandir certificate not enough?
        </h3>

        <p className="mb-8">
          Because it is not a government registration. On 3 June 2022 a
          vacation bench of the Supreme Court, hearing a bail plea in a case
          involving a minor, refused to accept an Arya Samaj certificate and
          remarked that issuing marriage certificates is the business of the
          authorities, according to{" "}
          <a
            href="https://www.livelaw.in/top-stories/arya-samaj-has-no-business-giving-marriage-certificates-supreme-court-200780"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LiveLaw
          </a>
          . Treat the mandir certificate and photographs as supporting proof,
          and complete a proper registration soon after the wedding.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Why does the choice of mandir matter?
        </h3>

        <p className="mb-8">
          Courts have flagged bodies that use the Arya Samaj name to conduct
          marriages without basic checks. In July 2025 the Allahabad High
          Court asked the Uttar Pradesh government to investigate
          &quot;fake&quot; Arya Samaj societies that solemnised marriages
          without verifying the age of the bride or groom, as reported by{" "}
          <a
            href="https://theprint.in/india/allahabad-hc-asks-up-govt-to-crack-down-on-fake-arya-samaj-societies-solemnising-marriages/2704116/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            ThePrint (PTI)
          </a>
          . Choose an established mandir that checks documents properly,
          visit it before the day, and be wary of &quot;same-day marriage,
          no questions asked&quot; advertising.
        </p>

        {/* =====================================================
            AT A FARMHOUSE?
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can the Arya Samaj Ceremony Itself Be Held at a Farmhouse?
        </h2>

        <p className="mb-8">
          Ask your mandir before you plan around it. The mandir FAQs and
          wedding guides we reviewed, including{" "}
          <a
            href="https://www.weddingbazaar.com/blog/arya-samaj-wedding-rituals"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingBazaar
          </a>
          , describe the ceremony at a mandir or Arya Samaj marriage hall,
          while an older{" "}
          <a
            href="https://www.bookeventz.com/blog/arya-samaj-marriage-procedures-rituals"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            BookEventz guide (2018)
          </a>{" "}
          says couples can pick their own location. If a purohit agrees to
          come to a farmhouse, get in writing who checks the documents and
          witnesses and who issues the certificate.
        </p>

        <p className="mb-8">
          In practice most Delhi NCR couples keep the ceremony at the mandir
          and move the celebration to a farmhouse. A real example: a couple
          featured on{" "}
          <a
            href="https://wedmegood.com/blog/graceful-close-knit-arya-samaj-wedding-in-delhi"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WedMeGood
          </a>{" "}
          married at the Arya Samaj temple in Jor Bagh on a January morning in
          2023, served guests breakfast there, and held the reception on
          lawns elsewhere in the city.
        </p>

        {/* =====================================================
            FORMATS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Mandir-Plus-Farmhouse Format Should You Choose?
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps couples book farmhouses, villas and venues for
          the lunch, reception or pre-wedding functions around a short
          ceremony like an Arya Samaj marriage. These four formats cover most
          plans.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Format</th>
                <th className={th}>How it runs</th>
                <th className={th}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Mandir + farmhouse lunch</td>
                <td className={td}>
                  Ceremony 9–11 AM; lunch on the lawn from about 1 PM
                </td>
                <td className={td}>
                  25–150 guests; elders; winter-sun day weddings
                </td>
              </tr>
              <tr>
                <td className={td}>Mandir + same-night reception</td>
                <td className={td}>
                  Morning ceremony, afternoon rest, reception 7–10 PM
                </td>
                <td className={td}>
                  One-day weddings with outstation guests
                </td>
              </tr>
              <tr>
                <td className={td}>Small ceremony, reception later</td>
                <td className={td}>
                  Family-only ceremony and registration first; farmhouse
                  reception weeks later
                </td>
                <td className={td}>
                  Couples who want paperwork done before a big party
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse weekend</td>
                <td className={td}>
                  Haldi or mehendi at the farmhouse on day one; mandir
                  ceremony and reception on day two
                </td>
                <td className={td}>
                  Couples who still want the pre-wedding fun
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          If you want a daytime celebration, our guide to a{" "}
          <Link
            href="/blogs/day-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            day wedding at a farmhouse
          </Link>{" "}
          has brunch and lunch timing ideas; for the evening option, see our{" "}
          <Link
            href="/blogs/wedding-reception-farmhouse-delhi-ncr"
            className={linkClass}
          >
            wedding reception at a farmhouse guide
          </Link>
          .
        </p>

        {/* =====================================================
            DOCUMENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Documents Do You Need for an Arya Samaj Marriage in Delhi?
        </h2>

        <p className="mb-8">
          Mandirs set their own lists, but a{" "}
          <a
            href="https://sites.google.com/view/arya-samaj-mandir-dwarka/faq-page"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Delhi mandir FAQ
          </a>{" "}
          and legal explainers typically ask for the following. Confirm with
          your mandir a week before the date.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            Photo ID for both partners (Aadhaar, voter ID or passport).
          </li>
          <li>
            Proof of age, such as a Class 10 certificate, PAN or passport
            (groom 21+, bride 18+).
          </li>
          <li>Address proof for both partners.</li>
          <li>Several passport-size photographs of each partner.</li>
          <li>Two witnesses with photo ID (check whether yours are required).</li>
          <li>
            A divorce decree or the former spouse&apos;s death certificate, if
            either partner was married before.
          </li>
          <li>Both partners in person; marriages are not done online.</li>
        </ul>

        {/* =====================================================
            RITUALS AND TIME
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Happens in the Ceremony and How Long Does It Take?
        </h2>

        <p className="mb-8">
          Plan for one to two hours at the mandir, and block the full
          morning. The Delhi mandir FAQ above estimates about one to two
          hours including paperwork, while{" "}
          <a
            href="https://www.weddingwire.in/wedding-tips/arya-samaj--c1843"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingWire India
          </a>{" "}
          gives a wider one-to-three-hour range. The core steps, as those
          guides describe them, are:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>Swagat and varmala (welcome and garland exchange).</li>
          <li>Madhuparka, a sweet offering to the groom.</li>
          <li>Havan with Vedic mantras, and kanyadaan.</li>
          <li>Pani grahan, the groom taking the bride&apos;s hand.</li>
          <li>Shilarohan and lajahom (stepping on a stone, puffed-rice offering).</li>
          <li>Pheras around the sacred fire, then saptapadi, the seven steps.</li>
          <li>Sindoor and mangalsutra, then blessings from elders.</li>
        </ol>

        <p className="mb-8">
          WeddingWire notes that the priest usually explains the Sanskrit
          vows as he goes, which many guests appreciate. The Arya Samaj guides
          we reviewed do not list a muhurat or kundli requirement, so ask your
          mandir whether it needs one; this can make December dates easier,
          when traditional calendars thin out.
        </p>

        {/* =====================================================
            DAY PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Does a Mandir-to-Farmhouse Wedding Day Look Like?
        </h2>

        <p className="mb-8">
          A sample same-day plan for a winter wedding is below. Your mandir
          will tell you its slot times; everything else can flex around them.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>8:00–8:45 AM:</strong> couple, families and witnesses
            arrive; document check at the mandir office.
          </li>
          <li>
            <strong>9:00–11:00 AM:</strong> ceremony: varmala, havan, pheras,
            saptapadi and blessings.
          </li>
          <li>
            <strong>11:00–11:45 AM:</strong> tea, a light breakfast and
            photographs; collect the mandir certificate.
          </li>
          <li>
            <strong>11:45 AM–1:00 PM:</strong> drive to the farmhouse; couple
            changes in a warm dressing room.
          </li>
          <li>
            <strong>1:00–4:30 PM:</strong> lunch on the lawn in the winter
            sun, with live music or a dhol.
          </li>
          <li>
            <strong>Optional 7:00–10:00 PM:</strong> evening reception or
            cocktail, with amplified music wound down by 10 PM.
          </li>
        </ol>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does an Arya Samaj Marriage with a Farmhouse Reception
          Cost?
        </h2>

        <p className="mb-8">
          The mandir side is small, roughly ₹5,000–₹15,000 according to
          WeddingWire India; almost all the budget goes on the farmhouse
          function. The table below shows rough 2026 planning estimates for
          Delhi NCR, not quotes.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item (estimate)</th>
                <th className={th}>50 guests</th>
                <th className={th}>100 guests</th>
                <th className={th}>200 guests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  Mandir fee, samagri, tea and breakfast at the mandir
                </td>
                <td className={td}>₹0.15–0.4 lakh</td>
                <td className={td}>₹0.25–0.65 lakh</td>
                <td className={td}>₹0.45–1.15 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  Farmhouse venue and food (₹1,500–₹3,000 per plate)
                </td>
                <td className={td}>₹0.75–1.5 lakh</td>
                <td className={td}>₹1.5–3 lakh</td>
                <td className={td}>₹3–6 lakh</td>
              </tr>
              <tr>
                <td className={td}>Décor, stage and lighting</td>
                <td className={td}>₹0.4–1 lakh</td>
                <td className={td}>₹0.75–2 lakh</td>
                <td className={td}>₹1.5–4 lakh</td>
              </tr>
              <tr>
                <td className={td}>Sound, DJ or live music</td>
                <td className={td}>₹0.25–0.6 lakh</td>
                <td className={td}>₹0.4–1 lakh</td>
                <td className={td}>₹0.5–1.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photo and video (mandir + farmhouse)</td>
                <td className={td}>₹0.5–1.25 lakh</td>
                <td className={td}>₹0.75–2 lakh</td>
                <td className={td}>₹1–2.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  Transport, heaters, power backup and on-ground team
                </td>
                <td className={td}>₹0.2–0.5 lakh</td>
                <td className={td}>₹0.3–0.75 lakh</td>
                <td className={td}>₹0.5–1 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Total (before bar)</strong>
                </td>
                <td className={td}>
                  <strong>About ₹2.25–5.25 lakh</strong>
                </td>
                <td className={td}>
                  <strong>About ₹4–9.5 lakh</strong>
                </td>
                <td className={td}>
                  <strong>About ₹7–16 lakh</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Small groups may face a minimum booking charge at the farmhouse, and
          peak December weekends cost more. A bar adds liquor plus a P-10
          licence in Delhi or the state permit in Haryana or UP. For a fuller
          budget by guest count, see our{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className={linkClass}
          >
            farmhouse wedding cost guide
          </Link>
          .
        </p>

        {/* =====================================================
            VS COURT MARRIAGE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Arya Samaj Marriage or Court Marriage: Which Fits Your Plan?
        </h2>

        <p className="mb-8">
          Both can be followed by a farmhouse party; the difference is the
          route to a legal marriage. Here is a simple comparison. Take legal
          advice for your situation.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Question</th>
                <th className={th}>Arya Samaj marriage</th>
                <th className={th}>Court marriage (Special Marriage Act)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Who it suits</td>
                <td className={td}>
                  Two eligible Hindus who want a short Vedic ceremony
                </td>
                <td className={td}>
                  Any two eligible adults, whatever their religion
                </td>
              </tr>
              <tr>
                <td className={td}>Waiting time</td>
                <td className={td}>
                  Ceremony can be on a chosen day; register afterwards
                </td>
                <td className={td}>
                  Notice to the SDM office, then a 30-day objection period
                </td>
              </tr>
              <tr>
                <td className={td}>Ritual</td>
                <td className={td}>Havan, pheras and saptapadi</td>
                <td className={td}>
                  None required; signing before the marriage officer
                </td>
              </tr>
              <tr>
                <td className={td}>When to book the farmhouse</td>
                <td className={td}>
                  Same day or any time after the ceremony
                </td>
                <td className={td}>
                  At least five to six weeks after filing the notice
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Interfaith couples should be careful: in the 2025 case reported by
          ThePrint, the Allahabad High Court said an Arya Samaj marriage could
          not be valid without a proper conversion. The Special Marriage Act
          exists for marriages across religions. If you are leaning towards a
          registered marriage with a small celebration, our{" "}
          <Link
            href="/blogs/intimate-farmhouse-wedding-delhi-ncr"
            className={linkClass}
          >
            intimate farmhouse wedding guide
          </Link>{" "}
          covers that route.
        </p>

        {/* =====================================================
            REGISTRATION
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Register an Arya Samaj Marriage in Delhi?
        </h2>

        <p className="mb-8">
          Register it under the Hindu Marriage Act after the ceremony.
          According to Delhi&apos;s{" "}
          <a
            href="https://revenue.delhi.gov.in/hi/node/7684"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Revenue Department
          </a>
          , Hindu Marriage Act registration happens after the marriage at the
          SDM office, and the{" "}
          <a
            href="https://theprint.in/india/enable-online-registration-of-marriages-under-compulsory-registration-order-delhi-hc/2180220/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Delhi (Compulsory Registration of Marriage) Order, 2014
          </a>{" "}
          makes registration compulsory in Delhi. Keep the mandir certificate,
          ceremony photographs, wedding card (if any) and your witnesses&apos;
          IDs together, and check the current documents and fees on the Delhi
          e-District portal before applying. Couples living in Haryana or UP
          should follow their own state&apos;s process.
        </p>

        {/* =====================================================
            FARMHOUSE CHECKS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Check Before Booking the Farmhouse?
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Distance:</strong> about 30–60 minutes from the mandir on a
            weekend morning. South Delhi mandirs pair well with{" "}
            <Link
              href="/blogs/farmhouse-in-chattarpur-for-party"
              className={linkClass}
            >
              Chattarpur
            </Link>{" "}
            or Westend Greens; West Delhi with Bijwasan; Gurgaon with Sohna
            Road; Noida with the Expressway belt.
          </li>
          <li>
            <strong>Arrival time:</strong> guests may arrive straight from the
            mandir around noon, so confirm the venue is set and staffed by
            then.
          </li>
          <li>
            <strong>Dressing rooms:</strong> a warm room for the couple to
            change and rest between lunch and an evening function.
          </li>
          <li>
            <strong>Winter comfort:</strong> sunny lawn seating for lunch;
            covered seating, heaters and power backup for the evening (check
            current GRAP limits on diesel generators).
          </li>
          <li>
            <strong>Music:</strong> amplified sound outdoors generally has to
            stop by 10 PM; plan dancing earlier.
          </li>
          <li>
            <strong>Food and bar:</strong> whether outside caterers are
            allowed, minimum billing for small groups, and who arranges any
            liquor licence.
          </li>
          <li>
            <strong>No firecrackers:</strong> plan confetti or cold pyro only
            if the venue and current rules allow.
          </li>
        </ul>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Arya Samaj Marriage and Farmhouse Reception Checklist
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>6–8 weeks out:</strong> visit two or three established
            mandirs; ask about slots, documents, witnesses, fees and whether
            they need a muhurat.
          </li>
          <li>
            <strong>5–7 weeks out:</strong> book the mandir slot and shortlist
            farmhouses within 30–60 minutes; visit at the hour you will use
            them.
          </li>
          <li>
            <strong>4–5 weeks out:</strong> book caterer, décor, photographer
            and music; decide lunch, evening or both.
          </li>
          <li>
            <strong>2–3 weeks out:</strong> gather documents and witness IDs;
            apply for any liquor licence; confirm heaters and the music
            cut-off in writing.
          </li>
          <li>
            <strong>Week of:</strong> final headcount; share the run-of-show
            with the mandir contact, farmhouse and every vendor; plan cars
            from mandir to farmhouse.
          </li>
          <li>
            <strong>Within weeks after:</strong> apply for Hindu Marriage Act
            registration with the mandir certificate and photographs.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses near your mandir and plan
          the lunch or reception around your ceremony time, so the day stays
          simple and the paperwork stays on track.
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
            Find a Farmhouse Near Your Mandir
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your ceremony date, mandir location and guest count.
            Effortless Events can shortlist farmhouses across Delhi NCR for
            your lunch or reception and help plan food, décor and logistics.
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
              Plan Your Reception
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
