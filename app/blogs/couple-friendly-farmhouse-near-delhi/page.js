import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Couple-Friendly Farmhouse Near Delhi: Rules, ID & Cost",

  description:
    "Booking a couple-friendly farmhouse near Delhi? What the law says, ID owners ask for, local-ID rules, privacy checks, winter costs and a booking checklist.",

  keywords: [
    "couple friendly farmhouse near Delhi",
    "farmhouse for couples near Delhi",
    "private villa for couples near Delhi",
    "can unmarried couples stay in a farmhouse",
    "couple friendly stay Gurgaon",
    "romantic farmhouse stay Delhi NCR",
    "private pool villa for couples near Delhi",
  ],

  alternates: { canonical: "/blogs/couple-friendly-farmhouse-near-delhi" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Couple-Friendly Farmhouse Near Delhi: Rules, ID & Cost",

    description:
      "How to book a couple-friendly farmhouse or villa near Delhi: what Indian courts have said about unmarried couples, the ID owners ask for, local-ID rules, privacy and safety checks, winter costs and a checklist.",

    images: ["/farmhouse15.webp"],
  },
};

const faqs = [
  {
    q: "Can unmarried couples stay in a farmhouse near Delhi?",
    a: "Yes, if the owner accepts them. No Indian law stops two adults who are not married from staying together; the Madras High Court said so in December 2019. But a private owner can still set their own house rules, so confirm the couple policy in writing before you pay.",
  },
  {
    q: "What ID do couples need for a farmhouse or villa booking?",
    a: "Most owners ask for a government photo ID for every adult guest, such as an Aadhaar card, driving licence, passport or voter ID. Marriage proof is not required by law, but some owners ask for it anyway. Foreign nationals should expect to show a passport and visa.",
  },
  {
    q: "Do farmhouses near Delhi accept local IDs?",
    a: "Some do not. A few owners refuse guests whose ID shows a Delhi, Gurgaon or Noida address, or accept local couples only on weekdays. If both of you have NCR addresses, ask this question first, before you share any other details.",
  },
  {
    q: "How much does a farmhouse for a couple near Delhi cost?",
    a: "As a rough estimate, a small 1–2 bedroom farm stay or villa near Delhi costs about ₹6,000–₹15,000 a night on an ordinary winter weeknight, and a private pool villa about ₹12,000–₹30,000. Christmas, New Year's Eve and Valentine's weekend often cost 1.5–2 times more.",
  },
  {
    q: "Which is the best area near Delhi for a couple's farmhouse stay?",
    a: "Sohna Road and Damdama suit couples who want quiet and Aravalli views; Chattarpur suits a short drive from South Delhi; Manesar and Pataudi Road suit West Gurgaon and Dwarka; and the Noida Expressway belt suits Noida and East Delhi. Pick the belt nearest home so the drive is under two hours.",
  },
  {
    q: "Is a farmhouse safe for a couple's stay?",
    a: "It can be, if you book the whole property through a traceable listing, pay a small advance only, check that bedroom doors lock from inside, and know who else is on site at night. Share your live location with a friend and keep the caretaker's and owner's numbers saved.",
  },
  {
    q: "Can a couple book a farmhouse for just a few hours?",
    a: "Some owners rent a day slot, often around 10 AM to 6 PM, which costs less than an overnight stay. Hour-by-hour bookings are less common for farmhouses than for hotels, so ask for the day-use rate and the exact check-out time.",
  },
];

const cell = "border border-gray-300 p-4";

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((h) => (
              <th key={h} className={`${cell} text-left`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((c, i) => (
                <td
                  key={i}
                  className={i === 0 ? `${cell} font-semibold text-black` : cell}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const glanceRows = [
  ["Is it legal?", "Yes. No Indian law bars two consenting adults from staying together; the owner's house rules still apply"],
  ["What to ask first", "\"Do you accept couples, and do you accept local NCR IDs?\" — before sharing anything else"],
  ["ID to carry", "Original government photo ID for both adults (Aadhaar, driving licence, passport or voter ID)"],
  ["Best stay type", "Whole private farm stay or villa (1–2 bedrooms), not a party farmhouse or shared resort"],
  ["Cost (estimate)", "About ₹6,000–₹15,000 a night for a small farm stay; ₹12,000–₹30,000 with a private pool"],
  ["Peak winter dates", "Christmas (Fri 25 Dec 2026), New Year's Eve (Thu 31 Dec 2026), Valentine's weekend (Sat 13–Sun 14 Feb 2027)"],
  ["Get in writing", "Couple policy, ID rules, who stays on site, check-in/out times, extras, refund and deposit terms"],
];

const areaRows = [
  ["Sohna Road / Damdama", "Gurgaon, South Delhi", "Quiet, larger plots, Aravalli views, small pool villas", "Dark, isolated lanes at night; arrive before sunset"],
  ["Chattarpur / Mehrauli", "Central and South Delhi", "Shortest drive; easy one-night escape", "Many farms are party-first; ask about weddings or parties next door"],
  ["Manesar / Pataudi Road", "West Gurgaon, Dwarka", "Bigger farmhouses with private pools", "Often sized for groups, so you may pay for rooms you will not use"],
  ["Noida Expressway (Sec 135, 150, 168)", "Noida, East Delhi", "Compact pool farms, short drive", "Many listings target parties; check the couple and local-ID rule"],
  ["Greater Noida / Yamuna Expressway", "Noida, Ghaziabad", "Open land, calmer weekends", "Fewer staffed stays; plan food in advance"],
  ["Faridabad / Surajkund", "South Delhi, Faridabad", "Aravalli setting, short drive", "Check the property's land status and caretaker arrangement"],
];

const costRows = [
  ["1–2 BHK farm stay or cottage, ordinary winter weeknight", "₹6,000–₹15,000 a night (estimate)"],
  ["Private pool villa for two, ordinary night", "₹12,000–₹30,000 a night (estimate)"],
  ["Same stay on Christmas, New Year's Eve or Valentine's weekend", "Often 1.5–2x the ordinary rate (estimate)"],
  ["Day-use slot (about 10 AM–6 PM)", "Often 50–70% of the night rate (estimate)"],
  ["Pool heating in Dec–Jan, if available", "₹3,000–₹10,000 a night extra (estimate)"],
  ["Caretaker cooking, bonfire or heater", "₹500–₹3,000 each (estimate)"],
  ["Simple room or lawn décor (balloons, flowers, candles)", "₹3,000–₹15,000 (estimate)"],
  ["Refundable security deposit", "Commonly ₹2,000–₹10,000 (estimate)"],
];

const safetyRows = [
  ["Listing", "Book through a traceable listing or a company you can call back; avoid pages with only a WhatsApp number"],
  ["Payment", "Pay a small advance first and the balance at check-in, with a written receipt"],
  ["Who is on site", "Ask whether the caretaker lives on the property, and whether any other part is rented to another group"],
  ["Doors and locks", "Bedroom and bathroom doors lock from inside; no shared corridor with other guests"],
  ["Cameras", "CCTV should cover only gates and outdoor areas; ask where every camera points"],
  ["Getting there", "Arrive before dark the first time; save the exact map pin, not just the area name"],
  ["Phone", "Check mobile signal on arrival; share your live location with a friend"],
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="couple-friendly-farmhouse-near-delhi"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-12"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farmhouse15.webp"
          width={1382}
          height={921}
          fetchPriority="high"
          decoding="async"
          alt="Couple-friendly farmhouse near Delhi: a small brick-and-stone farm cottage with a balcony and garden lights at sunset"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Couple-Friendly Farmhouse Near Delhi: Rules, ID, Cost and Safety
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Stays • Last updated: November 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A couple-friendly farmhouse near Delhi gives two people something a
          city hotel rarely does: a whole private property, a lawn, maybe a
          pool, and no front desk asking awkward questions. Winter is the
          busiest time for these stays, with Christmas, New Year&apos;s Eve and
          Valentine&apos;s weekend all inside the next three months.
        </p>

        <p className="mb-8">
          But &quot;couple-friendly&quot; on a listing does not always mean
          the same thing. Some owners welcome any adult couple; others want a
          marriage certificate, refuse local IDs, or only rent to families.
          This guide explains what the law says, the ID you will be asked
          for, which areas suit a quiet stay, what it typically costs, the
          privacy and safety checks to run, and the exact questions to ask
          before you pay.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Yes, couples can book farmhouses near Delhi: no Indian law stops
            two adults who are not married from staying together. But each
            owner sets their own rules, so ask first whether they accept
            couples and local NCR IDs, carry original photo ID for both of
            you, and book a whole 1–2 bedroom farm stay. Expect roughly
            ₹6,000–₹15,000 a night (estimate).
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Couple-Friendly Farmhouse Near Delhi: At a Glance
        </h2>

        <Table headers={["Question", "Short answer"]} rows={glanceRows} />

        {/* =====================================================
            LAW
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can Unmarried Couples Legally Stay Together in a Farmhouse?
        </h2>

        <p className="mb-8">
          Yes. There is no law in India that makes it an offence for two
          unmarried adults to stay in the same room or the same rented
          property. In December 2019 the Madras High Court said there is
          nothing illegal about unmarried couples occupying a hotel room
          together, as{" "}
          <a
            href="https://www.barandbench.com/news/not-illegal-to-permit-unmarried-couples-to-occupy-hotel-rooms-madras-high-court"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Bar and Bench reported
          </a>
          . A{" "}
          <a
            href="https://kvia.com/entertainment/cnn-style/2025/01/14/hotel-policy-change-highlights-struggles-faced-by-unmarried-couples-looking-for-privacy-in-india/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CNN report from January 2025
          </a>{" "}
          also notes a 2015 Bombay High Court view that police raids on
          couples in hotels intruded on their privacy.
        </p>

        <p className="mb-8">
          What the law does not do is force a private owner to accept you.
          Hotels and homestay owners have long used their own &quot;right of
          admission&quot;, and a farmhouse is someone&apos;s private property.
          The same CNN report describes how, in early January 2025, OYO let
          its partner hotels in Meerut — about 80 km from Delhi — refuse
          unmarried couples at their discretion, and how local-ID guests were
          the ones most likely to be turned away.
        </p>

        <p className="mb-8">
          In practice, that means three things for a farmhouse booking near
          Delhi:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Ask before you pay.</strong> Once you have paid an advance
            on the basis of a written &quot;yes, couples welcome&quot;, you have
            a much stronger case for a full refund if you are refused at the
            gate; before that, the owner can simply say no.
          </li>
          <li>
            <strong>Both guests must be adults.</strong> Every owner will ask
            for proof that both of you are over 18.
          </li>
          <li>
            <strong>Alcohol has its own age rule.</strong> The legal drinking
            age is 25 in Delhi and 21 in Haryana (Gurgaon, Sohna, Manesar,
            Faridabad) and Uttar Pradesh (Noida, Greater Noida), as covered
            in our{" "}
            <Link
              href="/blogs/how-much-alcohol-for-party-delhi-ncr"
              className="underline"
            >
              guide to alcohol for parties in Delhi NCR
            </Link>
            .
          </li>
        </ul>

        <p className="mb-8 text-base text-gray-500">
          This section is general information, not legal advice. Effortless
          Events is not a law firm.
        </p>

        {/* =====================================================
            ID
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What ID Do Couples Need to Check In?
        </h2>

        <p className="mb-8">
          Carry an original government photo ID for both adults — an Aadhaar
          card, driving licence, passport or voter ID. Most owners ask for a
          photo or copy of it on WhatsApp before check-in, and the caretaker
          checks the original at the gate. A marriage certificate is not a
          legal requirement, but a few owners ask for one anyway; if that is
          a deal-breaker for you, ask at the very start.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Why some farmhouses refuse local IDs
        </h3>

        <p className="mb-8">
          Some owners do not accept guests whose ID shows a Delhi, Gurgaon,
          Noida or Faridabad address. Their usual reasons are worries about
          neighbourhood complaints or local parties being booked under the
          name of a &quot;stay&quot;. Others accept local couples only on
          weeknights, or only with a higher deposit. If both of you have NCR
          addresses, make &quot;Do you accept local IDs?&quot; your first
          question, before you share any personal details.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Protect your ID when you share it
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            Share ID only after the owner confirms the booking terms in
            writing, never to an unknown number before that.
          </li>
          <li>
            Use a masked Aadhaar (only the last four digits visible), which
            you can download from UIDAI, or another ID instead.
          </li>
          <li>
            Add a short watermark on the copy, such as &quot;For [property
            name] stay on [date] only&quot;.
          </li>
        </ul>

        {/* =====================================================
            WHERE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Where Is the Best Couple-Friendly Farmhouse Near Delhi?
        </h2>

        <p className="mb-8">
          The best area is the farm belt nearest your home, so the drive stays
          under about two hours and you are not driving back in fog. Each
          belt has a different feel, and the main difference for couples is
          how many of its farmhouses are built for big parties rather than
          quiet stays.
        </p>

        <Table
          headers={["Area", "Easy from", "Good for", "Watch out for"]}
          rows={areaRows}
        />

        <p className="mb-8">
          Whichever belt you pick, look for a small farm stay, cottage or
          1–2 bedroom villa rather than a 6-bedroom party farmhouse. A big
          property costs more, and it is more likely to have a wedding, DJ
          night or group party on the same weekend — or next door.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Farmhouse Stay for Two Cost Near Delhi?
        </h2>

        <p className="mb-8">
          As a rough estimate, a small farm stay for two near Delhi costs
          about ₹6,000–₹15,000 a night on an ordinary winter weeknight, and
          a private pool villa about ₹12,000–₹30,000. Holiday nights cost
          more. These are typical ranges based on how such stays are commonly
          listed, not quotes; the actual price depends on the area, the size
          of the property and the date.
        </p>

        <Table headers={["Item", "Typical range"]} rows={costRows} />

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Sample budget: one winter night for two
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Simple weeknight escape:</strong> ₹8,000 farm stay +
            ₹1,500 caretaker-cooked dinner + ₹1,000 bonfire ≈ ₹10,500
            (estimate).
          </li>
          <li>
            <strong>Valentine&apos;s weekend with a pool:</strong> ₹25,000
            pool villa (holiday rate) + ₹6,000 pool heating + ₹8,000 décor
            + ₹3,000 food ≈ ₹42,000 (estimate).
          </li>
        </ul>

        <p className="mb-8">
          A swim in December or January is only realistic with a heated
          pool. Our{" "}
          <Link
            href="/blogs/farmhouse-with-heated-pool-near-delhi"
            className="underline"
          >
            heated pool farmhouse guide
          </Link>{" "}
          explains heating methods, heat-up time and what to ask the owner.
          If you do not need to stay the night, a day-use slot can cut the
          cost noticeably — see{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className="underline"
          >
            day-use vs overnight farmhouse
          </Link>
          .
        </p>

        {/* =====================================================
            WHEN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should Couples Book for Christmas, New Year and Valentine&apos;s?
        </h2>

        <p className="mb-8">
          Book holiday nights 3–6 weeks ahead. Small farm stays have only one
          or two bedrooms, so each property has very few couple bookings to
          offer on the same night, and these dates go first:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Christmas:</strong> Friday 25 December 2026, giving a
            Friday–Sunday long weekend (25–27 December).
          </li>
          <li>
            <strong>New Year&apos;s Eve:</strong> Thursday 31 December 2026;
            1 January 2027 is a Friday, so many couples book 31 Dec–2 Jan.
            Expect fireworks and parties around many farm belts that night.
          </li>
          <li>
            <strong>Valentine&apos;s Day:</strong> Sunday 14 February 2027, so
            the Saturday night (13 February) is the hardest to get.
          </li>
          <li>
            <strong>Ordinary winter weeknights:</strong> the easiest to book
            and often the cheapest, with local-ID rules more relaxed.
          </li>
        </ul>

        <p className="mb-8">
          Winter brings two extra checks. Dense fog can make late-night
          drives on the outer roads slow and risky, so plan to arrive before
          dark. And when GRAP pollution rules are in force, open fires and
          diesel generators can be restricted — ask how the owner handles a
          bonfire or a power cut that week.
        </p>

        {/* =====================================================
            SAFETY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Check a Farmhouse Is Private and Safe for a Couple?
        </h2>

        <p className="mb-8">
          Book the whole property through a traceable listing, pay a small
          advance only, and confirm who else will be on site at night. Then
          check the rooms on arrival. Use this table as a walk-through:
        </p>

        <Table headers={["Check", "What to look for"]} rows={safetyRows} />

        <p className="mb-8">
          Fake farmhouse listings and advance-payment scams are common around
          Delhi NCR, especially on holiday dates when people are in a hurry.
          Our{" "}
          <Link
            href="/blogs/how-to-book-farmhouse-safely-delhi-ncr"
            className="underline"
          >
            guide to booking a farmhouse safely
          </Link>{" "}
          covers the warning signs and how to verify an owner before you pay.
        </p>

        {/* =====================================================
            IDEAS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Can Couples Do at a Farmhouse in Winter?
        </h2>

        <p className="mb-8">
          Most couples spend a farmhouse stay slowly: a late lunch on the
          lawn, a bonfire or heater in the evening, a movie on a projector and
          a long breakfast. A few ideas that work well in winter:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Sunset on the lawn</strong> with tea or hot chocolate;
            Delhi winter sunsets are around 5:30 PM, so plan for it.
          </li>
          <li>
            <strong>Bonfire or patio heater dinner</strong>, cooked by the
            caretaker or ordered in advance (ask whether a fire is allowed
            that week).
          </li>
          <li>
            <strong>Outdoor movie night</strong> with a projector, blankets
            and floor cushions.
          </li>
          <li>
            <strong>Heated pool swim</strong> in the warmest hours, roughly
            noon to 4 PM.
          </li>
          <li>
            <strong>Morning Aravalli walk</strong> if you stay on Sohna Road,
            Damdama or near Surajkund.
          </li>
          <li>
            <strong>A planned surprise</strong> — birthday, anniversary or
            proposal décor set up before you arrive. If you are planning to
            pop the question, see our{" "}
            <Link
              href="/blogs/proposal-at-farmhouse-delhi-ncr"
              className="underline"
            >
              proposal at a farmhouse guide
            </Link>
            .
          </li>
        </ul>

        {/* =====================================================
            QUESTIONS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Ask the Owner Before Booking?
        </h2>

        <p className="mb-8">
          Ask these questions on WhatsApp so the answers are in writing:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>Do you accept unmarried adult couples?</li>
          <li>Do you accept guests with local Delhi NCR IDs?</li>
          <li>Which IDs do you need, and when do you need them?</li>
          <li>Is the whole property ours, or is any part rented to others?</li>
          <li>Where does the caretaker stay at night?</li>
          <li>Where are the CCTV cameras, and do any face indoor areas?</li>
          <li>Exact check-in and check-out times, and the early or late fee.</li>
          <li>Is the pool heated, and what does heating cost per night?</li>
          <li>Are a bonfire, heater and music allowed, and until what time?</li>
          <li>Is there a wedding or party on the property or next door that night?</li>
          <li>What is the deposit, and what can be deducted from it?</li>
          <li>What is the cancellation and refund policy, especially for fog or a GRAP order?</li>
        </ol>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Couple-friendly farmhouse booking checklist
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>3–6 weeks out (holiday dates):</strong> pick the nearest
            farm belt; shortlist small whole-property stays; ask the couple
            and local-ID questions first.
          </li>
          <li>
            <strong>Before paying:</strong> get the couple policy, ID rules,
            who is on site, times and refund terms in writing; pay a small
            advance only.
          </li>
          <li>
            <strong>1 week out:</strong> confirm pool heating, food, décor and
            any surprise set-up; check the GRAP stage and fog forecast.
          </li>
          <li>
            <strong>Day of:</strong> carry original IDs; arrive before dark;
            share your live location with a friend.
          </li>
          <li>
            <strong>On arrival:</strong> check locks, cameras and phone
            signal; photograph the rooms for the deposit.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Effortless Events Can Help
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          stays, private celebrations, weddings and corporate events. For a
          couple&apos;s stay, we can help you shortlist small private
          properties in the right area, confirm the couple and ID policy with
          the owner before you pay, and arrange décor or a surprise set-up if
          you are celebrating something.
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
            Find a Private Farmhouse for Two Near Delhi
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your dates, where you live and your budget. Effortless
            Events can help you shortlist couple-friendly farm stays and
            villas near Delhi, with the rules confirmed before you book.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/farmhouses"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Explore Farmhouses &amp; Villas
            </Link>

            <Link
              href="/services"
              className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Plan My Stay
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
