import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Farmhouse Rules to Check Before Booking in Delhi NCR",

  description:
    "Booking a farmhouse in Delhi NCR? Check music cut-offs, liquor licences, guest limits, timings and deposits first. Includes 15 questions to ask the owner.",

  keywords: [
    "farmhouse rules before booking Delhi NCR",
    "questions to ask farmhouse owner before booking",
    "P-10 licence for farmhouse party Delhi",
    "farmhouse party music timing Delhi",
    "farmhouse security deposit rules",
    "farmhouse guest limit and overnight stay rules",
    "farmhouse booking checklist",
  ],

  alternates: { canonical: "/blogs/farmhouse-rules-before-booking-delhi-ncr" },

  openGraph: {
    title: "Farmhouse Rules to Check Before Booking in Delhi NCR",

    description:
      "Music cut-offs, liquor licences, guest limits, timings, outside vendors and deposits: the farmhouse rules to confirm in writing before you pay an advance in Delhi NCR.",

    images: ["/farmhouse04.jpg"],
  },
};

const faqs = [
  {
    q: "Do I need a licence to serve alcohol at a farmhouse party in Delhi?",
    a: "Usually yes. In Delhi, serving liquor at a private function in a farmhouse without its own bar licence generally needs an occasional P-10 licence from the Excise Department, which was reported at ₹15,000 for farmhouses, banquet halls and motels. Gurgaon and Faridabad follow Haryana's excise rules and Noida follows Uttar Pradesh's, so ask the owner which permit applies and who applies for it.",
  },
  {
    q: "Until what time can you play music at a farmhouse in Delhi NCR?",
    a: "Loudspeakers and DJ systems in open areas are generally not allowed between 10 PM and 6 AM under India's noise rules. State governments can relax this until midnight on up to 15 notified festival days a year, but a private party is not automatically covered, so plan loud music to end by 10 PM and confirm the venue's own cut-off.",
  },
  {
    q: "Is it legal to have a party at a farmhouse in Delhi?",
    a: "Yes, private parties at farmhouses are common and legal when the host follows the rules: a liquor permit where alcohol is served, noise limits and the 10 PM loudspeaker cut-off, no firecrackers outside permitted windows, and the property's own guest and timing limits. Most problems come from skipping the liquor permit or running music late.",
  },
  {
    q: "How much security deposit do farmhouses charge for a party?",
    a: "There is no fixed rate. Many Delhi NCR farmhouses ask for a refundable deposit on top of the booking amount, and as a rough estimate it often ranges from ₹5,000 to ₹50,000 depending on the property and guest count. Ask what can be deducted, how damage is assessed and how many days the refund takes, and get it in writing.",
  },
  {
    q: "Can guests stay overnight at a farmhouse after a party?",
    a: "Only if the booking includes a stay. Many farmhouses sell day-use slots that end by a fixed time and charge separately for an overnight stay, often with a cap on how many people can sleep there based on the number of rooms. Confirm check-out time, room count and the overnight headcount before you book.",
  },
  {
    q: "What questions should I ask before booking a farmhouse?",
    a: "Ask about the exact entry and exit times, the maximum guest count, the music cut-off and sound limits, whether alcohol is allowed and who arranges the licence, whether outside caterers and decorators are allowed, power backup, parking, the deposit and cancellation terms, and what is included in the price. Get every answer in writing.",
  },
  {
    q: "Can I bring my own caterer or decorator to a farmhouse?",
    a: "It depends on the property. Some farmhouses allow any outside vendor, some charge an outside-vendor or kitchen-use fee, and some work only with an in-house or empanelled caterer. Ask before comparing prices, because a cheaper farmhouse with a mandatory caterer can end up costing more.",
  },
];

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="farmhouse-rules-before-booking-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-10"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farmhouse04.jpg"
          alt="Private farmhouse in Delhi NCR with a pool and lawn seating, the kind of venue whose rules to check before booking"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Farmhouse Rules to Check Before Booking in Delhi NCR: Music,
          Alcohol, Guests and Timings
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Planning Guides • Last updated: October 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          Checking farmhouse rules before booking in Delhi NCR is the step
          most hosts skip — and the one that causes the most party-night
          trouble. The lawn, pool and photos sell the property; the rules on
          music, alcohol, guest count, timings and outside vendors decide
          whether your evening actually runs the way you planned. With Diwali
          card parties, wedding functions, office Christmas parties and New
          Year&apos;s Eve all competing for the same weekends, October and
          November are when most of these bookings are made in a hurry.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Before paying an advance, confirm five rules in writing: the
            music cut-off (loudspeakers generally stop at 10 PM), whether
            alcohol is allowed and who gets the liquor licence, the maximum
            guest and overnight headcount, exact entry and exit times, and
            whether outside caterers and decorators are allowed. Then read
            the deposit, damage and cancellation terms line by line.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Booking Rules at a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Rule</th>
                <th className="border border-gray-300 p-4 text-left">
                  What to confirm
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Why it matters
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Music</td>
                <td className="border border-gray-300 p-4">
                  Cut-off time, outdoor vs indoor, DJ allowed, sound limits
                </td>
                <td className="border border-gray-300 p-4">
                  Loudspeakers are generally barred 10 PM–6 AM; police
                  complaints end parties early
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Alcohol</td>
                <td className="border border-gray-300 p-4">
                  Allowed or not, which permit, who applies, corkage
                </td>
                <td className="border border-gray-300 p-4">
                  Serving without a permit can lead to raids and seizure
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Guest count</td>
                <td className="border border-gray-300 p-4">
                  Maximum guests, extra-guest charge, overnight cap
                </td>
                <td className="border border-gray-300 p-4">
                  Gate staff can refuse entry above the agreed number
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Timings</td>
                <td className="border border-gray-300 p-4">
                  Entry, exit, set-up and teardown time, overtime rate
                </td>
                <td className="border border-gray-300 p-4">
                  Overtime is often billed by the hour
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Vendors</td>
                <td className="border border-gray-300 p-4">
                  Outside caterer, decorator, DJ allowed; any fee
                </td>
                <td className="border border-gray-300 p-4">
                  A mandatory in-house caterer changes the real cost
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Money</td>
                <td className="border border-gray-300 p-4">
                  Advance, deposit, deductions, refund days, cancellation
                </td>
                <td className="border border-gray-300 p-4">
                  Most disputes are about deposits and cancellations
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            MUSIC
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Until What Time Can You Play Music at a Farmhouse in Delhi NCR?
        </h2>

        <p className="mb-8">
          Plan loud music to end by 10 PM. Under the Noise Pollution
          (Regulation and Control) Rules, 2000, loudspeakers and public
          address systems are generally not allowed in open areas between
          10 PM and 6 AM. A state government can relax this until midnight
          for up to 15 days a year during cultural or religious festivals —{" "}
          <a
            href="https://vajiramandravi.com/current-affairs/delhi-loudspeaker-rules-extended-for-festivals-legal-framework-court-rulings/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Delhi used this provision in 2025 for events like Ramlila and
            Durga Puja
          </a>{" "}
          — but a private farmhouse party is not automatically covered by
          such a notification.
        </p>

        <p className="mb-8">
          Delhi Police also tightened enforcement in April 2025. Its order,{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            as reported by India TV
          </a>
          , requires prior police approval for loudspeakers at public
          gatherings, asks sound and tent suppliers to check for written
          approval, limits privately owned sound systems to 5 dB(A) above
          ambient noise at the boundary, and lists a ₹10,000 fine plus
          seizure of equipment for improper loudspeaker use.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What to ask the farmhouse owner about music
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>What is your music cut-off — 10 PM or earlier?</li>
          <li>Can the DJ move indoors after the cut-off at low volume?</li>
          <li>Are there neighbouring residences that have complained before?</li>
          <li>Do you supply the sound system, or can we bring our own DJ?</li>
          <li>Who deals with the police if there is a complaint?</li>
        </ul>

        {/* =====================================================
            ALCOHOL
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Do You Need a Liquor Licence for a Farmhouse Party?
        </h2>

        <p className="mb-8">
          In most cases, yes. In Delhi, serving alcohol at a private function
          held at a farmhouse without its own bar licence generally requires
          an occasional <strong>P-10 licence</strong> from the Excise
          Department. In December 2023, the department reminded hosts of
          wedding parties to take this licence, and{" "}
          <a
            href="https://www.deccanherald.com/amp/story/india%2Fdelhi%2Fdelhi-govts-excise-dept-asks-people-to-get-p-10-license-for-serving-liquor-in-weddings-2806602"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Deccan Herald reported
          </a>{" "}
          the fee at ₹15,000 for parties at farmhouses, banquet halls and
          motels and ₹5,000 at other places. The same report noted that
          8,237 P-10 licences were issued between October 2022 and February
          2023 — the festive and wedding months are when most are taken.
        </p>

        <p className="mb-8">
          Conditions reported for the P-10 licence include keeping the
          function screened from public view, serving only guests above the
          legal drinking age of 25 in Delhi, and buying liquor from
          authorised Delhi sources; a{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-excise-dept-relaxes-norms-to-apply-for-p-10-licence-required-to-serve-liquor-at-parties-320091"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            2021 relaxation reported by The Tribune
          </a>{" "}
          let hosts apply up to seven days before the function. Fees and
          procedures change, so confirm current rules on the Delhi Excise
          portal before you apply.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What about Gurgaon, Faridabad and Noida?
        </h3>

        <p className="mb-8">
          Gurgaon and Faridabad farmhouses fall under Haryana&apos;s excise
          rules, and Noida and Greater Noida farmhouses fall under Uttar
          Pradesh&apos;s, each with its own event permit and fee. Police do
          act on unlicensed parties — for example,{" "}
          <a
            href="https://etvbharat.com/english/state/haryana/6-held-for-illegal-liquor-party-at-gurgaon-farmhouse/na20190923171106777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            ETV Bharat reported arrests over an illegal liquor party at a
            Gurgaon farmhouse
          </a>
          . Ask the owner which permit applies to the property, whether they
          handle it, and whether liquor bought in another state is allowed
          on the premises (usually it is not).
        </p>

        {/* =====================================================
            GUESTS AND TIMINGS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Guest Limits and Timings Should You Confirm?
        </h2>

        <p className="mb-8">
          Confirm the maximum number of guests, the overnight headcount and
          the exact entry and exit times — in writing, with the overtime and
          extra-guest charges. These three numbers are where most
          party-night arguments with farmhouse caretakers start.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Guest count
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Day-use cap:</strong> the number of guests allowed on the
            lawn and inside for the event.
          </li>
          <li>
            <strong>Overnight cap:</strong> usually tied to the number of
            rooms; extra mattresses may cost extra or not be allowed.
          </li>
          <li>
            <strong>Extra-guest charge:</strong> a per-head fee for anyone
            above the agreed count, and whether gate staff keep a list.
          </li>
          <li>
            <strong>Vendors and drivers:</strong> whether DJ, catering staff
            and drivers count towards the limit.
          </li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Timings
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Entry time for the host, and separately for décor and catering set-up</li>
          <li>Exit or check-out time, and how teardown is handled</li>
          <li>Overtime rate per hour if the party runs late</li>
          <li>Whether day-use and overnight stays are separate bookings</li>
        </ul>

        <p className="mb-8">
          If you are still choosing between a day-use slot and a full stay,
          build the decision into your budget early — our{" "}
          <Link
            href="/blogs/how-much-does-a-farmhouse-party-cost-in-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            farmhouse party cost guide for Delhi NCR
          </Link>{" "}
          breaks down what changes the price.
        </p>

        {/* =====================================================
            VENDORS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can You Bring Outside Caterers, Decorators and a DJ?
        </h2>

        <p className="mb-8">
          It depends on the property, so ask before you compare prices. Some
          farmhouses allow any outside vendor, some charge an
          outside-vendor or kitchen-use fee, and some insist on an in-house
          or empanelled caterer. A farmhouse that looks cheaper on rent can
          cost more overall once a mandatory catering package is added.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Catering:</strong> outside caterer allowed? Kitchen
            access, gas and water included? Any per-plate fee?
          </li>
          <li>
            <strong>Décor:</strong> are nails, tape, confetti, smoke machines
            or cold pyros allowed? Who clears up?
          </li>
          <li>
            <strong>Music:</strong> own DJ allowed or in-house sound only?
          </li>
          <li>
            <strong>Fire:</strong> are bonfires, tandoors and firecrackers
            allowed on your date? (These change with air-quality rules in
            winter.)
          </li>
        </ul>

        <p className="mb-8">
          Owners are strict about crackers for a reason. Under a{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhiites-to-pay-up-to-rs1l-fine-for-noise-pollution-under-new-rules-281296"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            2021 Delhi Pollution Control Committee order reported by The
            Tribune
          </a>
          , bursting crackers beyond limits at a marriage function can make
          both the organiser and the premises owner pay ₹20,000 each for a
          first violation, rising with repeat offences. The same order lists
          fines from ₹10,000 for diesel generators run without proper noise
          controls — so ask how the farmhouse provides power backup.
        </p>

        {/* =====================================================
            MONEY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Deposit, Damage and Cancellation Terms Are Normal?
        </h2>

        <p className="mb-8">
          Expect an advance to block the date, the balance before or on the
          day, and often a separate refundable security deposit. There is no
          standard rate; as a rough estimate, deposits at Delhi NCR
          farmhouses often range from ₹5,000 to ₹50,000 depending on the
          property, guest count and whether alcohol or a pool is involved.
          What matters more than the amount is what can be deducted from it.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Term</th>
                <th className="border border-gray-300 p-4 text-left">
                  Good sign
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Red flag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Advance</td>
                <td className="border border-gray-300 p-4">
                  Paid to a business account with a receipt
                </td>
                <td className="border border-gray-300 p-4">
                  Full payment upfront to a personal number, no receipt
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Security deposit</td>
                <td className="border border-gray-300 p-4">
                  Written list of deductions and a refund timeline
                </td>
                <td className="border border-gray-300 p-4">
                  &quot;We&apos;ll see after the party&quot;
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Damage</td>
                <td className="border border-gray-300 p-4">
                  Joint walk-through with photos at check-in and check-out
                </td>
                <td className="border border-gray-300 p-4">
                  Damage judged only by the caretaker after you leave
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Cancellation</td>
                <td className="border border-gray-300 p-4">
                  Clear slabs by days before the event, incl. weather or
                  government restrictions
                </td>
                <td className="border border-gray-300 p-4">
                  &quot;Non-refundable&quot; with no date change option
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Inclusions</td>
                <td className="border border-gray-300 p-4">
                  Electricity, backup, cleaning, staff and taxes spelled out
                </td>
                <td className="border border-gray-300 p-4">
                  Extra bills for power, cleaning or &quot;staff tips&quot;
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Ranges above are indicative planning estimates, not quotes. Before
          paying, visit the property or ask for a recent video walk-through,
          and match the listing photos to what you see.
        </p>

        {/* =====================================================
            QUESTIONS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          15 Questions to Ask a Farmhouse Owner Before Booking
        </h2>

        <p className="mb-8">
          Copy this list into a message to every farmhouse on your
          shortlist. Owners who answer clearly and in writing are usually
          the ones who run smooth events.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>What are the exact entry and exit times, and the overtime rate?</li>
          <li>What is the maximum guest count for the event and for an overnight stay?</li>
          <li>What is the music cut-off, and can music continue indoors after it?</li>
          <li>Can we bring our own DJ and sound system?</li>
          <li>Is alcohol allowed? Which licence applies, and who applies for it?</li>
          <li>Is there a corkage or bar-setup fee?</li>
          <li>Can we bring an outside caterer? Is there a kitchen-use fee?</li>
          <li>What décor is allowed — nails, tape, confetti, smoke, cold pyros?</li>
          <li>Are bonfires, tandoors or firecrackers allowed on our date?</li>
          <li>What power backup is there, and is it included in the price?</li>
          <li>How many cars can park inside, and is there a valet or guard?</li>
          <li>Is the pool open for our slot, and is a lifeguard or attendant present?</li>
          <li>What is the security deposit, what can be deducted, and when is it refunded?</li>
          <li>What is the cancellation and date-change policy?</li>
          <li>Will you share a written booking confirmation with all of the above?</li>
        </ol>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Booking Checklist: Before You Pay the Advance
        </h2>

        <ul className="space-y-3 mb-8">
          <li>☐ Music cut-off and sound rules confirmed in writing</li>
          <li>☐ Alcohol policy and liquor-licence responsibility agreed</li>
          <li>☐ Guest and overnight headcount caps written into the booking</li>
          <li>☐ Entry, exit, set-up and overtime terms noted</li>
          <li>☐ Outside-vendor rules and fees checked</li>
          <li>☐ Fire, cracker and décor restrictions understood</li>
          <li>☐ Power backup, parking and pool access confirmed</li>
          <li>☐ Deposit deductions, refund timeline and cancellation slabs in writing</li>
          <li>☐ Property visited or recent video walk-through seen</li>
          <li>☐ Payment made to a business account against a receipt</li>
        </ul>

        <p className="mb-8">
          Once the rules are clear, the rest of the planning — theme, food,
          décor and the guest list — gets much easier. Our{" "}
          <Link
            href="/blogs/how-to-plan-farmhouse-party-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            step-by-step farmhouse party planning guide
          </Link>{" "}
          picks up from here, and if you are booking for 31 December, the{" "}
          <Link
            href="/blogs/new-year-eve-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            New Year&apos;s Eve farmhouse party guide
          </Link>{" "}
          covers the extra rules that come with the busiest night of the
          year.
        </p>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Book a Farmhouse With the Rules Checked Upfront
        </h2>

        <p className="mb-8">
          <a
            href="https://effortlessevents.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Effortless Events
          </a>{" "}
          is a Delhi NCR event planning and venue discovery company that helps
          people book farmhouses, villas and venues for private parties,
          festive celebrations, corporate events and weddings.
        </p>

        <p className="mb-8">
          When you share your date, guest count and plans for music and
          alcohol, Effortless Events can shortlist farmhouses whose rules
          actually fit your event, and help coordinate catering, décor and
          entertainment around them — so there are no surprises at the gate.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          The best farmhouse for your party is not the one with the biggest
          lawn; it is the one whose rules match your plans. Ask about music,
          alcohol, guest count, timings, vendors and money before you pay
          anything, get the answers in writing, and you will spend the
          evening with your guests instead of negotiating with the
          caretaker.
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
            Find a Farmhouse Whose Rules Fit Your Party
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Tell us your date, guest count, area and plans for music and
            alcohol. Effortless Events can shortlist farmhouses that allow
            what you need and help you plan the rest.
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
