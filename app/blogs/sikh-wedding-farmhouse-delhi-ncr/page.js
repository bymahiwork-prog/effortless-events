import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Sikh Wedding at a Farmhouse in Delhi NCR: Anand Karaj Rules",

  description:
    "Planning a Sikh wedding at a farmhouse in Delhi NCR? What the Akal Takht says on Anand Karaj, the gurdwara-plus-farmhouse plan, costs and a checklist.",

  keywords: [
    "Sikh wedding at farmhouse Delhi NCR",
    "can Anand Karaj be done at farmhouse",
    "Anand Karaj outside gurdwara",
    "Akal Takht destination wedding ban",
    "Sikh wedding reception farmhouse Delhi",
    "Anand marriage registration Delhi",
    "Sikh wedding cost Delhi NCR",
  ],

  alternates: { canonical: "/blogs/sikh-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Sikh Wedding at a Farmhouse in Delhi NCR: Anand Karaj Rules",
    description:
      "Akal Takht directives on where Anand Karaj can be held, how Delhi NCR families pair a gurdwara ceremony with a farmhouse jaggo and reception, cost estimates and a checklist.",
    images: ["/decoration.webp"],
  },
};

const faqs = [
  {
    q: "Can Anand Karaj be done at a farmhouse?",
    a: "Not according to the Akal Takht. In December 2025 the Five Singh Sahiban directed that Anand Karaj be performed only in gurdwaras and prohibited taking the Guru Granth Sahib saroop to commercial venues, naming marriage palaces, resorts, beaches and farmhouses. Families who follow this hold the Anand Karaj at a gurdwara and use the farmhouse for the jaggo, mehendi, lunch or reception.",
  },
  {
    q: "Can Anand Karaj be done in a hotel, banquet hall or resort?",
    a: "No, under the Akal Takht directives. An October 2023 directive banned installing the Guru Granth Sahib for Anand Karaj at beaches, resorts and destination weddings, and restated an earlier ban on hotels, banqueting suites, clubs, marriage palaces and bars. The December 2025 directive said Anand Karaj can only be performed in gurdwaras.",
  },
  {
    q: "What did the Akal Takht say about destination weddings?",
    a: "On 16 October 2023 the Five Singh Sahiban at the Akal Takht banned taking the Guru Granth Sahib saroop for Anand Karaj at destination weddings, resorts and beaches, as reported by ThePrint and The Tribune. On 28 December 2025 they restricted Anand Karaj to gurdwaras and warned of Panthic action against those who provide the saroop, the ragis and the venue owners.",
  },
  {
    q: "Can we have a farmhouse reception after an Anand Karaj in a gurdwara?",
    a: "Yes. The directives are about where the Anand Karaj with the Guru Granth Sahib takes place, not about receptions. Many Delhi NCR families hold the Anand Karaj at their local gurdwara in the morning and host a lunch the same day or a reception that evening or later at a farmhouse.",
  },
  {
    q: "How long does an Anand Karaj take?",
    a: "As a general guide, the ceremony itself, with kirtan, the ardas and the four laavan, often takes about one to two hours. Allow extra time for the milni, tea and breakfast before it and langar or photographs after, so most families block the whole morning at the gurdwara.",
  },
  {
    q: "How do you register a Sikh marriage in Delhi?",
    a: "Delhi notified rules for registering Sikh marriages under the Anand Marriage Act on 9 February 2018, as reported by The Week. Couples married by Anand Karaj in a gurdwara can register under these rules. Ask your gurdwara for a marriage certificate on the day and check current documents and fees with the Delhi Revenue Department before you apply.",
  },
  {
    q: "How much does a Sikh wedding with a farmhouse reception cost in Delhi NCR?",
    a: "As a rough 2026 planning estimate, a gurdwara Anand Karaj plus a 200-guest farmhouse reception in Delhi NCR often totals about ₹7–16 lakh, before a bar and before outfits and jewellery. Adding a jaggo or mehendi night at the same farmhouse typically adds ₹2.5–8 lakh.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="sikh-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-18"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration.webp"
          width={700}
          height={700}
          fetchPriority="high"
          decoding="async"
          alt="Sikh wedding reception at a farmhouse in Delhi NCR: a white floral stage with a sofa for the couple, chandeliers and a flower-lined aisle on an open lawn"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Sikh Wedding at a Farmhouse in Delhi NCR: Anand Karaj Rules,
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
          Planning a Sikh wedding at a farmhouse in Delhi NCR this winter? The
          first question most families now ask is whether the Anand Karaj
          itself can happen on the farmhouse lawn. The Akal Takht has answered
          that clearly, and it changes how the whole wedding day is planned.
          This guide explains the directives, the formats that work, travel
          between gurdwara and farmhouse, cost estimates and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            No, under current Akal Takht directives the Anand Karaj should be
            held in a gurdwara, not a farmhouse. A December 2025 directive
            restricted Anand Karaj to gurdwaras and named farmhouses, resorts,
            marriage palaces and beaches as venues where the Guru Granth Sahib
            saroop must not be taken. The farmhouse is still ideal for the
            jaggo, mehendi, lunch and reception.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sikh Wedding at a Farmhouse: At a Glance
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
                <td className={td}>Anand Karaj venue</td>
                <td className={td}>
                  A gurdwara, per Akal Takht directives of October 2023 and
                  December 2025
                </td>
              </tr>
              <tr>
                <td className={td}>Farmhouse functions</td>
                <td className={td}>
                  Jaggo, mehendi, chooda or haldi-style morning, post-wedding
                  lunch, reception, cocktail
                </td>
              </tr>
              <tr>
                <td className={td}>Best timing</td>
                <td className={td}>
                  Morning Anand Karaj, then a farmhouse lunch or evening
                  reception (same day or later)
                </td>
              </tr>
              <tr>
                <td className={td}>Travel buffer</td>
                <td className={td}>
                  Pick a farmhouse within about 30–60 minutes of the gurdwara
                  (estimate)
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>
                  About ₹7–16 lakh for a gurdwara ceremony plus a 200-guest
                  farmhouse reception, before bar
                </td>
              </tr>
              <tr>
                <td className={td}>Paperwork</td>
                <td className={td}>
                  Gurdwara marriage certificate; registration under the Delhi
                  Anand Marriage rules (2018)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            CAN ANAND KARAJ BE HELD AT A FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can Anand Karaj Be Held at a Farmhouse?
        </h2>

        <p className="mb-8">
          Under the Akal Takht&apos;s directives, no. The Anand Karaj is
          performed in the presence of the Guru Granth Sahib, and the
          Akal Takht, the highest temporal seat of Sikh authority, has
          repeatedly said the saroop should not be taken to commercial venues
          for weddings. These are religious directives, not a civil law, but
          gurdwara committees, granthis and ragi jathas who follow them are
          likely to decline a farmhouse Anand Karaj, so in practice families
          plan around them.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What did the October 2023 directive say?
        </h3>

        <p className="mb-8">
          On 16 October 2023 the Five Singh Sahiban at Amritsar announced a
          complete ban on installing the Guru Granth Sahib for Anand Karaj at
          beaches, resorts and destination weddings, as reported by{" "}
          <a
            href="https://theprint.in/india/akal-takht-bans-installing-guru-granth-sahib-for-destination-weddings/1806427/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            ThePrint (PTI)
          </a>{" "}
          and{" "}
          <a
            href="https://www.tribuneindia.com/news/punjab/akal-takht-bans-taking-guru-granth-sahib-saroop-outdoor-for-destination-weddings-553803/amp"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            The Tribune
          </a>
          . The Tribune noted that it restated an older ban on taking the
          saroop to hotels, banqueting suites, clubs, marriage palaces and
          bars, and that the saroop must not be present where alcohol,
          non-vegetarian food or tobacco is served.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What did the December 2025 directive add?
        </h3>

        <p className="mb-8">
          On 28 December 2025, according to{" "}
          <a
            href="https://babushahi.com/full-news.php?id=215306"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Babushahi
          </a>
          , the Five Singh Sahiban said Anand Karaj can only be performed in
          gurdwaras and prohibited taking the saroop to commercial venues,
          naming marriage palaces, resorts, beaches and farmhouses. It warned
          of Panthic action against those who provide the saroop, the ragi
          jathas and the owners of venues where such ceremonies are held. The{" "}
          <a
            href="https://en.wikipedia.org/wiki/Anand_Karaj"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Wikipedia entry on Anand Karaj
          </a>{" "}
          summarises the position the same way: Anand Karaj only in a
          gurdwara, not at destination or resort venues.
        </p>

        <p className="mb-8 text-base text-gray-600">
          Report wording differs slightly (one passage says &quot;commercial
          farmhouses&quot;). If your family is considering a private family
          property or a path at home, ask your gurdwara&apos;s granthi or
          management committee first rather than assuming it is allowed.
        </p>

        {/* =====================================================
            FORMATS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do Delhi NCR Families Combine a Gurdwara and a Farmhouse?
        </h2>

        <p className="mb-8">
          The usual answer is a split day or a split weekend: the Anand Karaj
          at the gurdwara, and everything social at the farmhouse. Effortless
          Events is a Delhi NCR event planning and venue discovery company
          that helps families book farmhouses, villas and venues for the
          functions around a Sikh wedding, such as the jaggo, mehendi, lunch
          and reception, while the Anand Karaj stays at the gurdwara. These
          four formats cover most weddings.
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
                <td className={td}>Gurdwara + farmhouse lunch</td>
                <td className={td}>
                  Morning Anand Karaj, then a 1–5 PM lunch at a nearby
                  farmhouse
                </td>
                <td className={td}>
                  Day weddings; 100–250 guests; elders who prefer daytime
                </td>
              </tr>
              <tr>
                <td className={td}>Gurdwara + same-night reception</td>
                <td className={td}>
                  Anand Karaj and langar in the morning; rest in the
                  afternoon; reception 7–10 PM
                </td>
                <td className={td}>
                  One-day weddings with outstation guests
                </td>
              </tr>
              <tr>
                <td className={td}>Gurdwara, reception later</td>
                <td className={td}>
                  Small Anand Karaj first; farmhouse reception a day to a few
                  weeks later
                </td>
                <td className={td}>
                  Large guest lists; colleagues and friends
                </td>
              </tr>
              <tr>
                <td className={td}>Full farmhouse weekend</td>
                <td className={td}>
                  Jaggo or mehendi on Friday night, Anand Karaj Saturday
                  morning, reception Saturday night or Sunday
                </td>
                <td className={td}>
                  Families who want one base for all functions
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          For the night-before celebration, see our guide to a{" "}
          <Link
            href="/blogs/jaggo-ceremony-farmhouse-delhi-ncr"
            className={linkClass}
          >
            jaggo ceremony at a farmhouse
          </Link>
          , and for the evening event, our guide to a{" "}
          <Link
            href="/blogs/wedding-reception-farmhouse-delhi-ncr"
            className={linkClass}
          >
            wedding reception at a farmhouse
          </Link>
          .
        </p>

        {/* =====================================================
            DAY PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Does a Gurdwara-to-Farmhouse Wedding Day Look Like?
        </h2>

        <p className="mb-8">
          A sample same-day plan is below. Timings are a guide only; your
          gurdwara will tell you when the hall is free and how long the
          ceremony runs.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>8:00–9:00 AM:</strong> baraat arrives at the gurdwara;
            milni between the families; tea and breakfast.
          </li>
          <li>
            <strong>9:30–11:30 AM:</strong> Anand Karaj in the darbar hall:
            kirtan, ardas and the four laavan, then the hukamnama and karah
            prasad.
          </li>
          <li>
            <strong>11:30 AM–12:30 PM:</strong> langar and family photographs
            at the gurdwara.
          </li>
          <li>
            <strong>12:30–2:00 PM:</strong> travel to the farmhouse; couple
            changes and rests in a dressing room.
          </li>
          <li>
            <strong>2:00–5:00 PM:</strong> lunch on the lawn in winter sun, or
            rest before an evening reception.
          </li>
          <li>
            <strong>7:00–10:00 PM:</strong> reception, with amplified music
            wound down by 10 PM.
          </li>
          <li>
            <strong>10:00–11:00 PM:</strong> doli and send-off; guest cars
            and cabs leave in batches.
          </li>
        </ol>

        <p className="mb-8">
          Many Sikh families fix the date by family and gurdwara convenience
          rather than a panchang muhurat, so weekends through December, which
          some Hindu calendars leave empty, can be easier to book for both the
          gurdwara slot and the farmhouse.
        </p>

        {/* =====================================================
            WHERE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Far Should the Farmhouse Be From the Gurdwara?
        </h2>

        <p className="mb-8">
          Keep the farmhouse within roughly 30–60 minutes of the gurdwara on
          a weekend morning, because the baraat, elders and the couple all
          make the trip in wedding clothes. These pairings are common
          starting points; actual drive times vary a lot with traffic.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>If the family gurdwara is in</th>
                <th className={th}>Farmhouse belts to look at</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>South Delhi</td>
                <td className={td}>
                  <Link
                    href="/blogs/farmhouse-in-chattarpur-for-party"
                    className={linkClass}
                  >
                    Chattarpur
                  </Link>
                  , Mehrauli, Westend Greens and Rajokri
                </td>
              </tr>
              <tr>
                <td className={td}>West Delhi</td>
                <td className={td}>
                  Bijwasan, Kapashera and the Najafgarh side
                </td>
              </tr>
              <tr>
                <td className={td}>North and North-West Delhi</td>
                <td className={td}>
                  GT Karnal Road, Alipur and Kundli
                </td>
              </tr>
              <tr>
                <td className={td}>Gurgaon</td>
                <td className={td}>
                  Sohna Road, Gwal Pahari and Manesar
                </td>
              </tr>
              <tr>
                <td className={td}>Noida and Greater Noida</td>
                <td className={td}>
                  Noida Expressway belt (Sector 135 and beyond) and Greater
                  Noida
                </td>
              </tr>
              <tr>
                <td className={td}>Faridabad</td>
                <td className={td}>
                  Surajkund and Faridabad farm belts
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Sikh Wedding with a Farmhouse Reception Cost?
        </h2>

        <p className="mb-8">
          As a rough 2026 estimate, a gurdwara Anand Karaj plus a 200-guest
          farmhouse reception in Delhi NCR often totals about ₹7–16 lakh
          before a bar, outfits and jewellery. The gurdwara side is usually
          the smaller part: families typically make offerings and contribute
          to langar and the ragi jatha, and the amounts vary by gurdwara, so
          ask the committee. The figures below are planning estimates, not
          quotes.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item (estimate)</th>
                <th className={th}>100 guests</th>
                <th className={th}>200 guests</th>
                <th className={th}>350 guests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  Gurdwara offerings, langar and ragi contribution
                </td>
                <td className={td}>₹0.2–0.75 lakh</td>
                <td className={td}>₹0.3–1 lakh</td>
                <td className={td}>₹0.5–1.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  Farmhouse reception venue and food (₹1,500–₹3,000 per
                  plate)
                </td>
                <td className={td}>₹1.5–3 lakh</td>
                <td className={td}>₹3–6 lakh</td>
                <td className={td}>₹5.25–10.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Stage, décor and lighting</td>
                <td className={td}>₹0.75–2 lakh</td>
                <td className={td}>₹1.5–4 lakh</td>
                <td className={td}>₹2.5–6 lakh</td>
              </tr>
              <tr>
                <td className={td}>Sound, DJ or live music</td>
                <td className={td}>₹0.4–1 lakh</td>
                <td className={td}>₹0.5–1.5 lakh</td>
                <td className={td}>₹0.75–2 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photo and video (ceremony + reception)</td>
                <td className={td}>₹0.75–2 lakh</td>
                <td className={td}>₹1–2.5 lakh</td>
                <td className={td}>₹1.5–3 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  Transport, heaters, power backup and on-ground team
                </td>
                <td className={td}>₹0.3–0.75 lakh</td>
                <td className={td}>₹0.5–1 lakh</td>
                <td className={td}>₹0.75–1.75 lakh</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong>Total (before bar)</strong>
                </td>
                <td className={td}>
                  <strong>About ₹4–9.5 lakh</strong>
                </td>
                <td className={td}>
                  <strong>About ₹7–16 lakh</strong>
                </td>
                <td className={td}>
                  <strong>About ₹11–25 lakh</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Per-plate band matches the range used in our farmhouse reception
          guide. Peak December weekends, premium caterers and large stage
          builds push totals higher. A jaggo or mehendi night at the same
          farmhouse typically adds ₹2.5–8 lakh (estimate).
        </p>

        {/* =====================================================
            FOOD AND BAR
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Should the Farmhouse Reception Be Vegetarian or Dry?
        </h2>

        <p className="mb-8">
          That is a family decision, and Delhi NCR Sikh weddings go both ways.
          The rule reported in 2023 is about the Guru Granth Sahib: the saroop
          must not be present where alcohol, non-vegetarian food or tobacco
          is served. Keeping the Anand Karaj at the gurdwara and the
          reception at a separate farmhouse keeps these two spaces apart.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Vegetarian, dry reception:</strong> common in more
            observant families and with many elders attending; tell the
            farmhouse early so no other event&apos;s bar setup is left on site.
          </li>
          <li>
            <strong>Reception with a bar:</strong> in Delhi a farmhouse event
            with alcohol needs a P-10 licence; Haryana and UP farmhouses need
            their own state permits. Use our{" "}
            <Link
              href="/blogs/how-much-alcohol-for-party-delhi-ncr"
              className={linkClass}
            >
              alcohol quantity guide
            </Link>{" "}
            to size it.
          </li>
          <li>
            <strong>Separate cocktail night:</strong> some families keep the
            wedding-day events dry and move the bar to a cocktail evening on
            another date.
          </li>
        </ul>

        {/* =====================================================
            FARMHOUSE CHECKS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Check Before Booking the Farmhouse?
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            Written confirmation that the booking is for a jaggo, lunch or
            reception, not the Anand Karaj, so expectations are clear on both
            sides.
          </li>
          <li>
            Arrival time on the wedding day, since guests may come straight
            from the gurdwara around midday.
          </li>
          <li>
            A warm dressing room for the bride and a second room for the
            groom&apos;s side; space for turbans to be re-tied and outfits
            changed.
          </li>
          <li>
            Covered or tented seating, patio heaters and power backup for
            December and January evenings (check current GRAP stage limits on
            diesel generators).
          </li>
          <li>
            Parking for the baraat cars plus guest cars, and a drop-off point
            close to the lawn for elders.
          </li>
          <li>
            Music cut-off: amplified sound outdoors generally has to stop by
            10 PM, so plan dhol and bhangra early.
          </li>
          <li>
            Kitchen access and whether outside caterers (for example a
            Punjabi caterer you already trust) are allowed, and at what
            charge.
          </li>
          <li>
            Firecrackers: none. Plan cold pyro or confetti only if the venue
            and current rules allow.
          </li>
        </ul>

        {/* =====================================================
            REGISTRATION
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Register a Sikh Marriage in Delhi?
        </h2>

        <p className="mb-8">
          Couples married by Anand Karaj can register under the Anand
          Marriage Act. According to{" "}
          <a
            href="https://www.theweek.in/news/india/sikhs-in-delhi-now-have-their-own-marriage-rules.html"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            The Week
          </a>
          , the Delhi government notified rules for this on 9 February 2018;
          before that, Sikh marriages in Delhi were registered under the Hindu
          Marriage Act. Collect the gurdwara&apos;s marriage certificate and
          ceremony photographs on the day, and check the current documents,
          fees and process with the Delhi Revenue Department before you
          apply. Couples in Haryana or UP should check their own state&apos;s
          process.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sikh Wedding Checklist: Gurdwara and Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>10–12 weeks out:</strong> fix the date with the gurdwara
            committee; book the ragi jatha if the gurdwara does not arrange
            one.
          </li>
          <li>
            <strong>8–10 weeks out:</strong> shortlist farmhouses within
            30–60 minutes of the gurdwara; visit at the time of day you will
            use them.
          </li>
          <li>
            <strong>6–8 weeks out:</strong> book caterer, décor, photographer
            and dhol; decide veg or non-veg and whether there is a bar.
          </li>
          <li>
            <strong>4–6 weeks out:</strong> apply for any liquor licence;
            confirm heaters, generator plan and music cut-off in writing.
          </li>
          <li>
            <strong>2–3 weeks out:</strong> share the gurdwara dress code
            (head covering, shoes off) with non-Sikh guests; plan cars from
            gurdwara to farmhouse.
          </li>
          <li>
            <strong>Week of:</strong> final headcount to caterer; run-of-show
            to every vendor; fog plan for outstation guests.
          </li>
          <li>
            <strong>Day after:</strong> collect the gurdwara certificate and
            start marriage registration.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses near your gurdwara and
          plan the jaggo, lunch or reception around the ceremony time, so the
          family can focus on the Anand Karaj itself.
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
            Find a Farmhouse Near Your Gurdwara
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your gurdwara, date and guest count. Effortless Events can
            shortlist farmhouses across Delhi NCR for your jaggo, lunch or
            reception and help plan food, décor and logistics.
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
              Plan Your Wedding Functions
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
