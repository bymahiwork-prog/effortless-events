import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Pet-Friendly Farmhouse Near Delhi: Stay Guide for Dog Owners",

  description:
    "Booking a pet-friendly farmhouse near Delhi this winter? Which areas suit dogs, pet fees, house rules, safety checks, a packing list and owner questions.",

  keywords: [
    "pet friendly farmhouse near Delhi",
    "dog friendly farmhouse near Delhi",
    "pet friendly villa near Gurgaon",
    "pet friendly stay near Delhi for weekend",
    "farmhouse stay with dog Delhi NCR",
    "pet fee for farmhouse booking",
    "New Year getaway with dog near Delhi",
  ],

  alternates: { canonical: "/blogs/pet-friendly-farmhouse-near-delhi" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Pet-Friendly Farmhouse Near Delhi: Stay Guide for Dog Owners",

    description:
      "How to book a pet-friendly farmhouse or villa near Delhi: which areas suit dogs, pet fees and house rules, gate, pool and winter safety checks, a packing list and questions to ask the owner.",

    images: ["/farm-59.webp"],
  },
};

const faqs = [
  {
    q: "Are farmhouses near Delhi pet-friendly?",
    a: "Some are, many are not. Pet policies are set by each owner, and a listing that says 'pet-friendly' may still limit the number, size or breed of dogs, or keep them out of bedrooms and the pool. Get the exact pet rules in writing before you pay an advance.",
  },
  {
    q: "How much is the pet fee at a farmhouse near Delhi?",
    a: "As a rough estimate, owners who charge for pets usually ask either a flat cleaning fee of about ₹500–₹2,000 per pet per stay or night, or an extra refundable deposit. Some charge nothing. Ask whether the fee is per pet, per night or per stay, and what damage is deducted from the deposit.",
  },
  {
    q: "Where can I go with my dog near Delhi for a weekend?",
    a: "A private farmhouse or villa within about 60–120 minutes of home is the easiest option: Sohna Road and Damdama, Manesar and Pataudi Road, Chattarpur, the Noida Expressway belt, Greater Noida and Faridabad all have farm stays. A whole-property booking avoids other guests and their pets.",
  },
  {
    q: "Can dogs swim in a farmhouse pool?",
    a: "Only if the owner allows it in writing. Many pet-friendly farmhouses keep dogs out of the pool because of hair and filter cleaning, or charge extra for it. In December and January an unheated pool is also too cold, so plan lawn time instead.",
  },
  {
    q: "Is it safe to take a dog to a farmhouse for New Year's Eve?",
    a: "It can be, but fireworks are common around NCR farmhouses on New Year's Eve and during wedding season, and frightened dogs bolt. Keep your dog indoors with you from about 8 PM to 1 AM, on a leash with an ID tag outside, and check the boundary wall and gate on arrival.",
  },
  {
    q: "Can I bring my dog to a farmhouse party?",
    a: "Usually only to a small, quiet gathering, and only with the owner's permission. Loud music, crowds, open gates and food on low tables are stressful and risky for most dogs. For a big party, leave your dog with a sitter or book a separate quiet room for them.",
  },
  {
    q: "What should I carry for my dog on a farmhouse stay?",
    a: "Carry food for every meal plus a day extra, bowls, a leash and harness, an ID tag with your phone number, the dog's own bed or blanket, poop bags, a towel, any medicines, vaccination records and a coat for cold nights. A crate helps if your dog is crate-trained.",
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
  ["Best stay type", "Whole-property private farmhouse or villa, not a shared resort"],
  ["Ideal drive", "About 60–120 minutes from home; shorter for older or anxious dogs"],
  ["Best winter windows", "Weekdays and ordinary weekends Nov–Feb; Christmas weekend (25–27 Dec 2026) and New Year weekend (1–3 Jan 2027) book first"],
  ["Pet fee (estimate)", "Often ₹500–₹2,000 per pet, or an extra refundable deposit; some owners charge nothing"],
  ["Must-check", "Full boundary wall, closing gate, pool fence, resident dogs, indoor rules, nearby vet"],
  ["Fireworks nights", "New Year's Eve and wedding-season dates: keep your dog indoors from about 8 PM to 1 AM"],
  ["Get in writing", "Number and size of pets, indoor and bedroom access, pool rule, fee, deposit deductions"],
];

const areaRows = [
  ["Sohna Road / Damdama", "Gurgaon, South Delhi", "Bigger plots, Aravalli setting, quiet mornings", "Wild areas nearby: check walls, gates and ticks after walks"],
  ["Manesar / Pataudi Road", "West Gurgaon, Dwarka", "Large lawns, pool villas with rooms", "Longer drive from East Delhi and Noida"],
  ["Chattarpur / Mehrauli", "Central and South Delhi", "Shortest drive; good for older dogs", "Party-first farms and wedding fireworks on weekends"],
  ["Noida Expressway (Sec 135, 150, 168)", "Noida, East Delhi", "Small pool farms, easy drive", "Many listings target parties; ask about neighbouring events"],
  ["Greater Noida / Yamuna Expressway", "Noida, Ghaziabad", "Open space, larger lawns", "Fewer staffed stays; check food and a vet nearby"],
  ["Faridabad / Surajkund", "South Delhi, Faridabad", "Aravalli walks, short drive", "Check the property's land status before paying"],
];

const ruleRows = [
  ["Number and size", "Many owners allow one or two dogs; some exclude large breeds or puppies"],
  ["Indoor access", "Some allow dogs indoors but not in bedrooms or on beds and sofas"],
  ["Pool", "Often not allowed, or allowed only with an extra cleaning fee"],
  ["Lawn and garden", "Owner may ask you to keep dogs off flower beds and pick up waste"],
  ["Leash", "May be required outside, especially if staff or resident dogs are around"],
  ["Left alone", "Most owners do not want dogs left alone in the property"],
  ["Damage", "Chewed furniture, stains or scratches are usually deducted from the deposit"],
];

const costRows = [
  ["3–4 BHK farmhouse or villa, ordinary winter night", "₹12,000–₹35,000 a night (estimate)"],
  ["Same property, Christmas or New Year night", "Often 1.5–2x the ordinary rate (estimate)"],
  ["Pet fee", "₹0–₹2,000 per pet per night or stay (estimate)"],
  ["Extra deposit for pets", "Commonly ₹2,000–₹5,000 on top of the usual deposit (estimate)"],
  ["Extra deep-cleaning if needed", "₹1,000–₹3,000 (estimate)"],
];

const safetyRows = [
  ["Boundary", "Full wall or fence with no gaps under it; no open side onto a road or field"],
  ["Gate", "Closes and latches; staff and delivery riders told to keep it shut"],
  ["Pool", "Fence or cover, and steps your dog can climb out of if it falls in"],
  ["Resident dogs", "Ask whether the caretaker keeps dogs and whether they are tied or free"],
  ["Garden", "Ask if the lawn was recently treated with fertiliser or pest spray"],
  ["Rooms", "Heaters and wires out of reach; nothing toxic left at dog height"],
  ["Vet", "Nearest 24-hour vet clinic and the drive time, saved in your phone"],
];

const packRows = [
  ["Food and water", "Usual food for every meal plus one extra day, bowls, treats, bottled water for the drive"],
  ["Walking", "Leash, harness, spare collar with an ID tag and your phone number"],
  ["Comfort", "Own bed or blanket, a favourite toy, a crate if crate-trained"],
  ["Cleaning", "Poop bags, old towels, wipes, an old bedsheet for the sofa"],
  ["Health", "Regular medicines, tick and flea treatment, vaccination record, a small first-aid kit"],
  ["Winter", "Dog coat or sweater for short-haired dogs, extra blanket for night"],
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="pet-friendly-farmhouse-near-delhi"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-07"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farm-59.webp"
          width={1600}
          height={1066}
          fetchPriority="high"
          decoding="async"
          alt="Pet-friendly farmhouse near Delhi: a two-storey farmhouse with a wide open lawn, hedges and a gazebo, room for a dog to run"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Pet-Friendly Farmhouse Near Delhi: A Stay Guide for Dog Owners
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
          A pet-friendly farmhouse near Delhi is often the easiest way to take
          a break without leaving your dog behind. You get a lawn instead of a
          hotel corridor, no other guests&apos; pets, and a drive of an hour
          or two instead of a long road trip. But &quot;pet-friendly&quot; on
          a listing can mean anything from &quot;dogs welcome indoors&quot; to
          &quot;one small dog, lawn only&quot;. This guide covers which areas
          suit dogs, the rules and fees to expect, a safety walk-through,
          winter and fireworks-night tips, a packing list and the questions to
          ask the owner before you pay.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a stay with your dog near Delhi, book a whole private
            farmhouse or villa within about 60–120 minutes of home, with a
            full boundary wall and a gate that closes. Get the pet rules,
            pet fee and deposit terms in writing first. Expect roughly
            ₹500–₹2,000 per pet as a fee (estimate), and keep dogs indoors on
            fireworks nights.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Pet-Friendly Farmhouse Near Delhi: At a Glance
        </h2>

        <Table headers={["Question", "Short answer"]} rows={glanceRows} />

        {/* =====================================================
            WHY FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Is a Farmhouse Better Than a Hotel for a Trip With Your Dog?
        </h2>

        <p className="mb-8">
          A farmhouse is usually better because you book the whole property.
          Your dog gets open space to run, there are no strangers in the
          corridor, and you control the gate, the noise and the meal times.
          Most hotels near Delhi that accept pets limit them to certain rooms
          and keep them out of restaurants and lawns, which means a lot of
          time on a leash in a small room.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Space:</strong> a lawn for fetch and sniffing, which tires
            a dog out in a way city walks rarely do.
          </li>
          <li>
            <strong>Privacy:</strong> no other guests, so a barking or shy dog
            is not a problem.
          </li>
          <li>
            <strong>Short drive:</strong> most farm belts are 60–120 minutes
            from the city, easier on dogs that dislike the car.
          </li>
          <li>
            <strong>Shared with friends:</strong> two or three families can
            split one property, as in our{" "}
            <Link
              href="/blogs/family-staycation-villa-near-delhi"
              className="underline"
            >
              family staycation guide
            </Link>
            .
          </li>
        </ul>

        <p className="mb-8">
          The trade-off is that a farmhouse is a private home, not a pet hotel.
          There is rarely a dog-sitting service, the owner&apos;s rules vary a
          lot, and safety depends on walls and gates you have to check
          yourself.
        </p>

        {/* =====================================================
            WHEN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is the Best Time to Take Your Dog to a Farmhouse Near Delhi?
        </h2>

        <p className="mb-8">
          November to February is the most comfortable season for dogs
          outdoors near Delhi, because the midday sun is mild. Summer heat is
          hard on most breeds, so winter is when many owners plan their first
          farm stay with a dog. The busiest dates are the Christmas weekend
          (Friday 25 to Sunday 27 December 2026) and the New Year weekend
          (Friday 1 to Sunday 3 January 2027), so book those 4–8 weeks ahead.
        </p>

        <p className="mb-8">
          Two things make winter harder. Nights are cold: according to{" "}
          <a
            href="https://weatherspark.com/m/109174/12/Average-Weather-in-December-in-New-Delhi-NCT-India"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WeatherSpark&apos;s December averages
          </a>{" "}
          for New Delhi, lows fall from about 11°C to 8°C through the month,
          so short-haired dogs, puppies and older dogs need a warm indoor spot
          at night. And winter is wedding and party season, which means
          fireworks. In November 2022,{" "}
          <a
            href="https://theprint.in/feature/ncr-dogs-still-missing-after-diwali-army-of-rescuers-on-lookout-using-facebook-instagram/1202188/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ThePrint reported
          </a>{" "}
          that NCR rescuers were still searching for dogs that ran off during
          Diwali fireworks, with some strays found 20–30 km from home. A
          farmhouse with open fields around it can feel just as loud on a
          busy wedding night or on New Year&apos;s Eve.
        </p>

        {/* =====================================================
            AREAS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Area Near Delhi Is Best for a Farm Stay With a Dog?
        </h2>

        <p className="mb-8">
          The best area is usually the closest farm belt to your home, because
          a shorter drive matters more for a dog than the view. Outlook
          Traveller&apos;s{" "}
          <a
            href="https://www.outlooktraveller.com/stay/skip-the-fireworks-6-pet-friendly-stays-near-delhi-for-the-diwali-weekend"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            October 2025 pet-friendly stays list
          </a>{" "}
          suggests keeping trips with older or nervous pets to about two to
          three hours. Drive times below are typical and depend on traffic.
        </p>

        <Table
          headers={["Area", "Easiest from", "Good for", "Check"]}
          rows={areaRows}
        />

        <p className="mb-8">
          Some farmhouses in the Aravalli and Yamuna floodplain belts have
          faced sealing or demolition in recent years. Ask the owner for proof
          the property operates legally, and read our guide to{" "}
          <Link
            href="/blogs/how-to-book-farmhouse-safely-delhi-ncr"
            className="underline"
          >
            booking a farmhouse safely in Delhi NCR
          </Link>{" "}
          before sending an advance.
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Pet Rules Do Farmhouse Owners Usually Set?
        </h2>

        <p className="mb-8">
          Most owners who accept dogs set a few standard rules, and the
          wording on a listing rarely covers all of them. The table shows the
          rules you are most likely to meet. Ask for each one in writing on
          WhatsApp or email, because disputes over pets usually end in a
          deducted deposit.
        </p>

        <Table headers={["Rule", "What owners commonly ask"]} rows={ruleRows} />

        <p className="mb-8">
          These sit alongside the usual farmhouse terms on guest numbers,
          music and check-out times. Our guide to{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="underline"
          >
            farmhouse rules to check before booking
          </Link>{" "}
          covers those in detail.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Pet-Friendly Farmhouse Near Delhi Cost?
        </h2>

        <p className="mb-8">
          A pet-friendly farmhouse usually costs the same nightly rent as any
          other farmhouse of its size, plus a pet fee or extra deposit. As a
          real data point, PartyVillas&apos; listings for{" "}
          <a
            href="https://www.partyvillas.in/noida/farmhouse-for-party-in-sector-135"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            farmhouses in Noida Sector 135
          </a>{" "}
          showed ₹12,000–₹35,000 a night in November 2026. A June 2026{" "}
          <a
            href="https://www.sloshout.com/blog/the-best-pet-friendly-farmhouses-near-delhi-ncr-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            SloShout post on pet-friendly farmhouses
          </a>{" "}
          described the pet charge as usually a cleaning deposit or a small
          per-night fee. The figures
          below are planning estimates, not quotes.
        </p>

        <Table headers={["Item", "Typical range"]} rows={costRows} />

        <p className="mb-8">
          Ask three questions about the fee: is it per pet or per booking, per
          night or per stay, and refundable or not. If the deposit is shared
          between pets and the property, ask what counts as pet damage and
          take photos of sofas, beds and floors when you arrive.
        </p>

        {/* =====================================================
            SAFETY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Check a Farmhouse Is Safe for Your Dog?
        </h2>

        <p className="mb-8">
          Check the boundary, the gate and the pool before anything else. A
          farmhouse that is perfect for a party can still have a gap under the
          fence or a gate that staff leave open. Ask the owner for a video
          walk-through of these points before you pay, then walk the property
          again on arrival with your dog on a leash.
        </p>

        <Table headers={["Area", "What to check"]} rows={safetyRows} />

        <p className="mb-8">
          This is general guidance, not veterinary advice. If your dog is
          very young, old, unwell or not fully vaccinated, ask your vet before
          the trip, especially about ticks and fleas after walks in farm or
          Aravalli areas.
        </p>

        {/* =====================================================
            FIREWORKS + WINTER
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Keep Your Dog Calm on Fireworks Nights and Cold Evenings?
        </h2>

        <p className="mb-8">
          Plan for noise and cold before they happen. Fireworks at nearby
          weddings and on New Year&apos;s Eve are the biggest risk on a winter
          farm stay, because a frightened dog can clear a low wall or slip out
          of an open gate.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            Ask the owner if any events are booked on neighbouring farms on
            your dates, especially on wedding-season Saturdays.
          </li>
          <li>
            Take your dog for a long walk and a final toilet break before
            about 8 PM, then keep them indoors with you until the noise stops.
          </li>
          <li>
            Pick an inner room, close curtains and keep a fan or music on to
            soften bangs; let the dog hide in its bed or crate.
          </li>
          <li>
            Keep the collar and ID tag on all evening, and use a harness for
            any late toilet break.
          </li>
          <li>
            Do not plan a wood bonfire: GRAP bans open burning in winter, and
            sparks and smoke bother dogs anyway. Use a room heater placed out
            of reach, and never leave a dog alone with a running heater.
          </li>
        </ul>

        <p className="mb-8">
          If you are also hosting friends, keep the plan small. A quiet dinner
          on the lawn is fine for most dogs; a DJ night is not. Our{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className="underline"
          >
            day-use vs overnight farmhouse guide
          </Link>{" "}
          helps if you are deciding between a day trip and a night away with
          your dog.
        </p>

        {/* =====================================================
            PACKING + PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Pack for Your Dog on a Farmhouse Stay?
        </h2>

        <p className="mb-8">
          Pack as if there is no pet shop nearby, because often there is not.
          Most farm belts are some distance from a pet store or a 24-hour vet.
        </p>

        <Table headers={["Category", "What to carry"]} rows={packRows} />

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Sample one-night plan with your dog
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>11:00 AM:</strong> leave after the morning fog lifts; one
            short stop on the way.
          </li>
          <li>
            <strong>1:00 PM:</strong> check in, walk the boundary and gate on
            a leash, set up the dog&apos;s bed and water.
          </li>
          <li>
            <strong>2:00–5:00 PM:</strong> lawn time in the sun: fetch,
            sniffing, a nap in the shade.
          </li>
          <li>
            <strong>5:30 PM:</strong> sunset; dinner for the dog, then
            indoors or to a warm patio.
          </li>
          <li>
            <strong>8:00 PM onward:</strong> dog stays inside with you; quiet
            dinner and games.
          </li>
          <li>
            <strong>Next day, 9:30 AM:</strong> morning walk, breakfast, a
            last run on the lawn, check-out walk-through with photos.
          </li>
        </ul>

        {/* =====================================================
            BOOKING
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Ask the Owner Before Booking?
        </h2>

        <p className="mb-8">
          Send these questions before paying anything. A clear, quick answer
          to each is a good sign that the property really does host pets.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>How many dogs, of what size and breed, are allowed?</li>
          <li>Can the dog come indoors, into bedrooms and onto furniture?</li>
          <li>Is the dog allowed in or near the pool?</li>
          <li>What is the pet fee, and is it per pet, per night or per stay?</li>
          <li>What pet damage is deducted from the deposit?</li>
          <li>Is the boundary fully walled, and does the gate latch?</li>
          <li>Do any dogs or other animals live on the property?</li>
          <li>Are other events booked on the property or next door on our dates?</li>
          <li>Where is the nearest vet, and is one open late?</li>
        </ul>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Pet-friendly farmhouse checklist
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>4–8 weeks out:</strong> fix dates; shortlist whole-property
            farmhouses in one nearby area; book holiday weekends early.
          </li>
          <li>
            <strong>2 weeks out:</strong> get pet rules, fee, deposit and pool
            rule in writing; ask for a gate and boundary video.
          </li>
          <li>
            <strong>1 week out:</strong> check your dog&apos;s tick and flea
            treatment and vaccinations; save the nearest vet&apos;s number.
          </li>
          <li>
            <strong>Day before:</strong> pack food, bed, leash, ID tag, towels
            and medicines; check the fog forecast and GRAP stage.
          </li>
          <li>
            <strong>On arrival:</strong> leash walk of the boundary; photos of
            furniture for the deposit; tell staff to keep the gate shut.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Effortless Events Can Help
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          stays, private celebrations, weddings and corporate events. If you
          want to bring your dog, we can help you shortlist properties in the
          right area, confirm the owner&apos;s pet rules and fees in writing,
          and check gates, walls and pool access before you pay.
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
            Find a Farmhouse Where Your Dog Is Welcome
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your dates, how many people and pets are coming, where you
            live and your budget. Effortless Events can help you shortlist
            farmhouses and villas near Delhi with the space, walls and pet
            rules your dog needs.
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
