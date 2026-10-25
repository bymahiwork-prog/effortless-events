import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "How to Book a Farmhouse Safely in Delhi NCR (Avoid Scams)",

  description:
    "How to book a farmhouse safely in Delhi NCR: red flags of fake listings, verifying the owner, paying the advance safely and what to do if scammed.",

  keywords: [
    "how to book a farmhouse safely Delhi NCR",
    "farmhouse booking scam Delhi",
    "fake farmhouse listing Instagram",
    "is it safe to pay advance for farmhouse booking",
    "how to verify farmhouse owner before booking",
    "online booking fraud complaint 1930",
  ],

  alternates: { canonical: "/blogs/how-to-book-farmhouse-safely-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "How to Book a Farmhouse Safely in Delhi NCR (Avoid Scams)",

    description:
      "Fake listings, cloned websites and vanishing 'owners': how to spot a farmhouse booking scam in Delhi NCR, verify the property and pay the advance safely.",

    images: ["/farmhouse03.webp"],
  },
};

const faqs = [
  {
    q: "How do I know if a farmhouse listing is genuine?",
    a: "A genuine listing can be tied to a real, findable property: the exact address or map pin matches the photos, the owner or manager agrees to a site visit or a live video call walking through the property, and the payee name matches the business or owner you are dealing with. If any of these fail, do not pay.",
  },
  {
    q: "Is it safe to pay an advance for a farmhouse booking?",
    a: "Paying an advance is normal, but only after you have verified the property and received written booking terms. Pay a part-advance rather than the full amount, use a traceable method such as a bank transfer or UPI to an account whose name matches the business, and keep the receipt and chat history.",
  },
  {
    q: "Is it safe to book a farmhouse through Instagram or WhatsApp?",
    a: "It can be, since many real farmhouses market on Instagram and take enquiries on WhatsApp, but these channels are also where fake listings with copied photos appear. Treat an Instagram page as a lead, not proof: verify the property in person or on a live video call and check who the money is going to before paying.",
  },
  {
    q: "What should I do if I paid an advance to a fake farmhouse?",
    a: "Act immediately. Call the national cyber-fraud helpline 1930 or file a complaint at cybercrime.gov.in, inform your bank or UPI app so it can try to hold the money, and keep screenshots of the listing, chats, payment reference and phone numbers. Report the page or number to the platform where you found it.",
  },
  {
    q: "How much advance should I pay to book a farmhouse?",
    a: "There is no fixed rule. As a rough estimate, many Delhi NCR hosts pay a part-advance (often around a quarter to half of the rent) to block a date and the balance closer to the event or on arrival. Be wary of anyone who insists on 100% upfront, especially to a personal account, before you have seen the property.",
  },
  {
    q: "Is it safer to book a farmhouse through a platform or a planner?",
    a: "Generally yes, because a platform or an established planner has a verifiable identity, written terms and someone accountable if things go wrong. Platforms such as Airbnb ask guests to pay only through the platform; paying the host directly outside it usually removes that protection.",
  },
];

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="how-to-book-farmhouse-safely-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-12"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farmhouse03.webp"
          width={1600}
          height={1066}
          fetchPriority="high"
          decoding="async"
          alt="How to book a farmhouse safely in Delhi NCR: a private farmhouse lawn to verify before paying an advance"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          How to Book a Farmhouse Safely in Delhi NCR: Spot Scams, Verify
          the Owner and Pay Safely
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
          Learning how to book a farmhouse safely in Delhi NCR matters most
          between October and December, when Diwali card parties, wedding
          functions, office Christmas parties and New Year&apos;s Eve all
          chase the same weekends. Pressure to grab a date fast is exactly
          what fake listings exploit: copied photos, a low price, an
          &quot;only one slot left&quot; message and a request for the full
          amount by UPI. This guide shows how the common scams work, the
          red flags to look for, and a simple verification and payment
          routine that protects your money.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            To book a farmhouse safely, verify the property before paying:
            match the address or map pin to the photos, do a site
            visit or a live video walk-through, and confirm the payee name
            matches the owner or business. Then pay only a part-advance
            against written terms and a receipt. If you are pushed to pay
            in full instantly, walk away.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Booking Safety at a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Check</th>
                <th className="border border-gray-300 p-4 text-left">
                  Safe sign
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Red flag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Property</td>
                <td className="border border-gray-300 p-4">
                  Exact address or map pin that matches the photos
                </td>
                <td className="border border-gray-300 p-4">
                  &quot;Location shared after booking&quot;; only a vague area name
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Visit</td>
                <td className="border border-gray-300 p-4">
                  Site visit or live video walk-through offered readily
                </td>
                <td className="border border-gray-300 p-4">
                  Excuses for no visit; only pre-recorded videos
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Price</td>
                <td className="border border-gray-300 p-4">
                  In line with similar farmhouses in the same area
                </td>
                <td className="border border-gray-300 p-4">
                  Far below market for a peak-season Saturday
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Payment</td>
                <td className="border border-gray-300 p-4">
                  Part-advance to a matching business account, with receipt
                </td>
                <td className="border border-gray-300 p-4">
                  100% upfront to a personal or mismatched UPI ID
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Paperwork</td>
                <td className="border border-gray-300 p-4">
                  Written terms: timings, guests, deposit, cancellation
                </td>
                <td className="border border-gray-300 p-4">
                  &quot;Everything is fine, just pay&quot; — nothing in writing
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Urgency</td>
                <td className="border border-gray-300 p-4">
                  Reasonable hold on the date while you verify
                </td>
                <td className="border border-gray-300 p-4">
                  &quot;Another party is paying in 10 minutes&quot;
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            HOW SCAMS WORK
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do Farmhouse and Villa Booking Scams Work?
        </h2>

        <p className="mb-8">
          Most booking scams follow the same script: a convincing listing,
          a fast conversation on phone or WhatsApp, an advance paid by UPI,
          and then silence. In April 2025 the Indian Cybercrime
          Coordination Centre (I4C) under the Ministry of Home Affairs{" "}
          <a
            href="https://www.newsonair.gov.in/i4c-issues-alert-on-online-booking-frauds-targeting-pilgrims-and-tourists-warns-against-fake-websites-and-ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            warned about fake booking websites, social media pages,
            WhatsApp accounts and paid search ads
          </a>{" "}
          used to sell guest houses, hotels and tour packages that do not
          exist. The same tactics are used for farmhouses and villas.
        </p>

        <p className="mb-6">The four patterns to know:</p>

        <ol className="list-decimal pl-8 space-y-4 mb-10">
          <li>
            <strong>Fake social media listings.</strong> A page uses photos
            and videos lifted from a real property, adds a low price and
            takes &quot;booking amounts&quot; over WhatsApp. In one{" "}
            <a
              href="https://www.punekarnews.in/?p=154609"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-semibold"
            >
              2023 Pune case reported by Punekar News
            </a>
            , a man paid ₹40,000 for a villa advertised on Instagram and
            never received a confirmation.
          </li>
          <li>
            <strong>Cloned websites and fake helplines.</strong> A copy of a
            real brand&apos;s website, or a fake number placed in search
            results, takes the call. In a case{" "}
            <a
              href="https://www.theweek.in/wire-updates/national/2025/07/10/des40-dl-cyber-fraud-arrest.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-semibold"
            >
              Delhi Police announced in July 2025
            </a>
            , a victim found a fake site imitating a hotel chain, was asked
            for 50% and then talked into paying the full ₹33,000 by UPI
            because &quot;split payments&quot; were supposedly not accepted.
          </li>
          <li>
            <strong>Middlemen who do not control the property.</strong> A
            broker collects advances for a farmhouse they have no agreement
            with, or sells the same date to more than one group. You arrive
            to find another party already there, or a caretaker who has
            never heard of you.
          </li>
          <li>
            <strong>Bait pricing.</strong> The property is real, but the
            low quote leaves out guest-count charges, music or overtime
            fees and the deposit, which appear at the gate when you cannot
            walk away. This is less a fraud than a pricing trap, and written
            terms are the cure.
          </li>
        </ol>

        {/* =====================================================
            RED FLAGS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Red Flags of a Fake Farmhouse Listing?
        </h2>

        <p className="mb-6">
          The clearest red flag is pressure to pay in full before you can
          verify the property. Watch for any of these:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>A price far below similar farmhouses in Chattarpur, Sohna Road, Noida or Greater Noida for the same date.</li>
          <li>The exact location is &quot;shared after booking&quot;, or the map pin does not match the photos.</li>
          <li>No site visit allowed and no live video call — only edited reels or old videos.</li>
          <li>The same photos appear on other pages under different names (a reverse image search often shows this).</li>
          <li>A new or recently renamed page with many followers but generic, repetitive comments.</li>
          <li>Payment requested to a personal UPI ID whose name does not match the business or owner.</li>
          <li>Urgency scripts: &quot;last slot&quot;, &quot;another group is paying now&quot;, &quot;offer valid for 10 minutes&quot;.</li>
          <li>Refusal to put timings, guest limits, deposit and cancellation terms in writing.</li>
          <li>Requests to scan a QR code or enter your UPI PIN to &quot;receive&quot; a refund — you never need a PIN to receive money.</li>
        </ul>

        {/* =====================================================
            VERIFY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How to Verify a Farmhouse Before You Pay an Advance
        </h2>

        <p className="mb-6">
          Verify in this order; it takes about a day and filters out
          almost every fake listing.
        </p>

        <ol className="list-decimal pl-8 space-y-4 mb-10">
          <li>
            <strong>Get the exact address and map pin.</strong> Check the
            pin on Google Maps, look at the street view or satellite view,
            and compare gates, lawn and pool with the listing photos.
          </li>
          <li>
            <strong>Visit, or do a live video walk-through.</strong> A site
            visit is best for any party or wedding function. If you cannot
            visit, ask for a live video call where the person walks from the
            gate to the lawn, rooms and pool, and shows something you name
            on the spot.
          </li>
          <li>
            <strong>Confirm who controls the property.</strong> Ask whether
            you are dealing with the owner, a manager or a broker. If it is a
            broker, ask the property itself (caretaker or manager) to
            confirm your date and name before paying.
          </li>
          <li>
            <strong>Cross-check the identity.</strong> Look for the same
            business on a maps listing with older reviews, a website, or a
            platform profile. Run a reverse image search on two or three
            photos.
          </li>
          <li>
            <strong>Get written terms.</strong> Entry and exit times, guest
            count, music and alcohol rules, deposit, deductions and
            cancellation slabs. Our guide to{" "}
            <Link
              href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
              className="text-black underline font-semibold"
            >
              farmhouse rules to check before booking
            </Link>{" "}
            lists the questions to send.
          </li>
          <li>
            <strong>Match the payee name.</strong> Before you send money,
            check the name your UPI app or bank shows for the account. It
            should match the business or owner on your written terms.
          </li>
        </ol>

        {/* =====================================================
            PAYMENT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Advance Is Safe to Pay, and How Should You Pay It?
        </h2>

        <p className="mb-8">
          Pay a part-advance to block the date, not the full amount, and
          only after verification. As a rough estimate, many Delhi NCR hosts
          pay around a quarter to half of the rent as advance and settle
          the balance closer to the event or on arrival, with a separate
          refundable security deposit; terms vary by property, so treat
          these as typical ranges, not rules. To see what a fair total
          looks like before you negotiate, compare quotes against our{" "}
          <Link
            href="/blogs/how-much-does-a-farmhouse-party-cost-in-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            farmhouse party cost guide
          </Link>
          .
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Payment practice
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Safer
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Riskier
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Amount</td>
                <td className="border border-gray-300 p-4">
                  Part-advance; balance after check-in or close to the date
                </td>
                <td className="border border-gray-300 p-4">
                  100% upfront weeks ahead
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Account</td>
                <td className="border border-gray-300 p-4">
                  Business current account or verified owner, name matches
                </td>
                <td className="border border-gray-300 p-4">
                  Personal UPI ID with an unrelated name
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Method</td>
                <td className="border border-gray-300 p-4">
                  Bank transfer, UPI or card with a reference number
                </td>
                <td className="border border-gray-300 p-4">
                  Cash to a stranger; gift cards or crypto
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Proof</td>
                <td className="border border-gray-300 p-4">
                  Receipt or invoice plus written booking confirmation
                </td>
                <td className="border border-gray-300 p-4">
                  &quot;Screenshot is enough&quot;
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Platform</td>
                <td className="border border-gray-300 p-4">
                  Pay inside the platform where you found the listing
                </td>
                <td className="border border-gray-300 p-4">
                  Host asks you to pay outside the platform &quot;for a discount&quot;
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The platform point matters. Airbnb, for example, tells guests to{" "}
          <a
            href="https://www.airbnb.com/help/article/209/paying-and-communicating-through-airbnb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            pay and communicate through Airbnb
          </a>
          ; a host who moves you to WhatsApp and a direct transfer usually
          takes you outside the platform&apos;s protection.
        </p>

        {/* =====================================================
            COMPARE CHANNELS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Owner, Platform or Planner: Which Is the Safest Way to Book?
        </h2>

        <p className="mb-8">
          Each route can be safe if you verify it; the difference is who is
          accountable when something goes wrong.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Route</th>
                <th className="border border-gray-300 p-4 text-left">
                  Pros
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Watch out for
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Direct owner</td>
                <td className="border border-gray-300 p-4">
                  No commission; flexible terms
                </td>
                <td className="border border-gray-300 p-4">
                  Hard to verify; few remedies if a deal goes wrong
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Booking platform
                </td>
                <td className="border border-gray-300 p-4">
                  Reviews, on-platform payment, written policies
                </td>
                <td className="border border-gray-300 p-4">
                  Party rules and guest caps often stricter than for a stay
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Social media page or broker
                </td>
                <td className="border border-gray-300 p-4">
                  Wide choice, quick replies
                </td>
                <td className="border border-gray-300 p-4">
                  Highest scam risk; may not control the property
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Event planner or venue company
                </td>
                <td className="border border-gray-300 p-4">
                  Known business, site visits, vendors coordinated, one point
                  of contact
                </td>
                <td className="border border-gray-300 p-4">
                  Check their own track record and what the fee covers
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            IF SCAMMED
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Do If You Paid a Fake Farmhouse?
        </h2>

        <p className="mb-6">
          Report it immediately — speed improves the chance of the money
          being held before it moves on. The I4C advisory points victims to
          the national helpline and portal:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>Call <strong>1930</strong>, the national cyber-fraud helpline, or file a complaint at <strong>cybercrime.gov.in</strong>.</li>
          <li>Inform your bank or UPI app through its official app or number, and share the transaction reference.</li>
          <li>Save evidence: listing screenshots, page link, phone numbers, chats, payment receipt and the payee UPI ID.</li>
          <li>Report the page or profile on the platform where you found it, so others are warned.</li>
          <li>Do not pay any &quot;refund processing&quot; or &quot;recovery&quot; fee to anyone who contacts you afterwards.</li>
        </ol>

        {/* =====================================================
            SEASON
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Is October to December the Riskiest Time to Book?
        </h2>

        <p className="mb-8">
          Demand is highest and decisions are rushed. Diwali falls on 8
          November 2026, the wedding season reopens around 20 November, and
          New Year&apos;s Eve is a Thursday this year, so groups compete for
          the same Saturdays and long weekends. A fake listing that offers
          the &quot;last available&quot; farmhouse at a good price lands
          well when everything else is booked. If you are planning for 31
          December, start verification early — our{" "}
          <Link
            href="/blogs/new-years-eve-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            New Year&apos;s Eve farmhouse party guide
          </Link>{" "}
          has a booking timeline that leaves time for a site visit.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How to Book a Farmhouse Safely: Final Checklist
        </h2>

        <ul className="space-y-3 mb-8">
          <li>☐ Exact address and map pin match the listing photos</li>
          <li>☐ Site visit done, or live video walk-through from the gate</li>
          <li>☐ Owner, manager or broker identified; property confirmed your date</li>
          <li>☐ Reverse image search shows no copies under other names</li>
          <li>☐ Price checked against similar farmhouses in the same area</li>
          <li>☐ Timings, guest count, music, alcohol, deposit and cancellation in writing</li>
          <li>☐ Payee name matches the business or owner</li>
          <li>☐ Part-advance only, with receipt and booking confirmation</li>
          <li>☐ No payment outside the platform you booked on</li>
          <li>☐ Helpline 1930 and cybercrime.gov.in saved, just in case</li>
        </ul>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Book Through a Team That Knows the Property
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
          Share your date, area, guest count and budget, and Effortless
          Events can shortlist farmhouses, arrange site visits, put the
          terms in writing and coordinate catering, décor and entertainment
          — so you deal with one accountable team instead of an unknown
          number on WhatsApp.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          A safe farmhouse booking comes down to three habits: verify the
          property before you pay, pay only a part-advance to a name that
          matches, and get the terms in writing. A real owner will not mind
          any of these checks; a scammer will try to rush you past them.
          Slow down by a day, and your party date — and your money — will
          be there when you arrive.
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
            Book a Verified Farmhouse Without the Guesswork
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Tell us your date, area and guest count. Effortless Events can
            shortlist farmhouses, set up site visits and plan the rest of
            your event with you.
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
