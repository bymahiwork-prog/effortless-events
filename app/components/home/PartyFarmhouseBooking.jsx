import Link from "next/link";

/* =========================================================
   Party farmhouse booking section (homepage)
   Targets: "farmhouse booking for party in Delhi NCR",
   "farmhouse for party", "party farmhouse booking" and
   occasion / area variants, with internal links to the
   guides that cover each one.
========================================================= */

const occasions = [
  {
    label: "Farmhouse for Birthday Party",
    text: "Lawns, music and space for cake, games and dinner.",
    href: "/blogs/best-farmhouses-delhi-ncr-birthday-parties-2026",
  },
  {
    label: "Farmhouse for Private Party",
    text: "Your own property for friends, family or a house-party crowd.",
    href: "/blogs/best-farmhouses-villas-private-parties-delhi-ncr",
  },
  {
    label: "Farmhouse for Pool Party",
    text: "Farmhouses with a private pool for day or night parties.",
    href: "/blogs/best-farmhouses-delhi-ncr-pool-parties-2026",
  },
  {
    label: "Farmhouse for Corporate Party",
    text: "Team outings, offsites and office parties outside the city.",
    href: "/blogs/corporate-team-outing-farmhouse-delhi-ncr",
  },
  {
    label: "Farmhouse for Kitty Party",
    text: "Daytime slots with seating, food and games for the group.",
    href: "/blogs/kitty-party-farmhouse-delhi-ncr",
  },
  {
    label: "Farmhouse for Bachelorette Party",
    text: "Overnight stays with rooms, music and a pool.",
    href: "/blogs/bachelorette-party-farmhouse-delhi-ncr",
  },
  {
    label: "Farmhouse for New Year Party",
    text: "Book early: 31 December dates go first.",
    href: "/blogs/new-years-eve-party-farmhouse-delhi-ncr",
  },
  {
    label: "Farmhouse for Haldi & Mehendi",
    text: "Open lawns for daytime wedding functions.",
    href: "/blogs/haldi-mehendi-farmhouse-delhi-ncr",
  },
];

const areas = [
  { label: "Farmhouse for Party in Chattarpur", href: "/blogs/farmhouse-in-chattarpur-for-party" },
  { label: "Farmhouse for Party in Gurgaon", href: "/blogs/best-farmhouses-gurgaon-private-parties-2026" },
  { label: "Farmhouse for Party in Noida", href: "/blogs/best-farmhouses-noida-private-parties-celebrations" },
  { label: "Farmhouse for Party in Greater Noida", href: "/blogs/farmhouse-in-greater-noida-for-party" },
  { label: "Farmhouse for Party in Faridabad", href: "/blogs/farmhouse-in-faridabad-for-party" },
  { label: "Farmhouse for Party on Sohna Road", href: "/blogs/farmhouse-on-sohna-road-for-party" },
];

const steps = [
  {
    title: "Share your party details",
    text: "Date, guest count, area and budget, through the form, a call or WhatsApp.",
  },
  {
    title: "Get a farmhouse shortlist",
    text: "Party farmhouses that fit, with photos, rates, timings and what is included.",
  },
  {
    title: "Visit, confirm and celebrate",
    text: "Site visit or video tour, written booking terms, then a part advance to lock the date.",
  },
];

const WHATSAPP =
  "https://wa.me/917838008069?text=Hi%20Effortless%20Events%2C%20I%20want%20to%20book%20a%20farmhouse%20for%20a%20party.%20Date%3A%20%20Guests%3A%20%20Area%3A%20";

export default function PartyFarmhouseBooking() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="party-farmhouse-booking">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Intro */}
        <p className="text-sm uppercase tracking-[0.18em] text-[#8A7A66] font-medium mb-6">
          Party Farmhouse Booking
        </p>

        <h2
          id="party-farmhouse-booking"
          className="text-4xl md:text-6xl font-semibold text-[#1F1F1F] leading-tight max-w-5xl"
        >
          Book a Farmhouse for Your Party in Delhi NCR
        </h2>

        <div className="mt-8 max-w-4xl space-y-6">
          <p className="text-lg md:text-xl leading-8 text-[#5C5C5C]">
            Looking for a farmhouse for a birthday, private party or office
            get-together? Tell us your date, guest count and budget and we will
            shortlist party farmhouses across Delhi NCR, from South Delhi and
            Chattarpur to Gurgaon, Noida and Faridabad.
          </p>
          <p className="text-lg md:text-xl leading-8 text-[#5C5C5C]">
            Book a farmhouse for a day party or an overnight stay, and add
            décor, food, a DJ or full event planning only if you want it. One
            team handles the booking from first message to check-out.
          </p>
        </div>

        {/* Occasions */}
        <h3 className="mt-16 text-2xl md:text-3xl font-semibold text-[#1F1F1F]">
          Farmhouse booking for every kind of party
        </h3>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-[#E8DFD3] bg-[#F7F3EE] p-6 transition-colors hover:border-[#C9A34A] hover:bg-white"
              >
                <span className="text-lg font-semibold text-[#1F1F1F] group-hover:text-[#8d6a31]">
                  {item.label}
                </span>
                <span className="mt-2 text-sm leading-6 text-[#5C5C5C]">
                  {item.text}
                </span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#8d6a31]">
                  See guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Areas */}
        <h3 className="mt-16 text-2xl md:text-3xl font-semibold text-[#1F1F1F]">
          Party farmhouses by area
        </h3>

        <ul className="mt-6 flex flex-wrap gap-3">
          {areas.map((area) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="inline-block rounded-full border border-[#E8DFD3] px-5 py-2.5 text-sm md:text-base font-medium text-[#1F1F1F] transition-colors hover:border-[#C9A34A] hover:text-[#8d6a31]"
              >
                {area.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* How booking works */}
        <h3 className="mt-16 text-2xl md:text-3xl font-semibold text-[#1F1F1F]">
          How farmhouse booking works
        </h3>

        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-[#E8DFD3] pt-6">
              <span className="text-sm font-semibold text-[#C9A34A]">
                0{i + 1}
              </span>
              <p className="mt-2 text-lg font-semibold text-[#1F1F1F]">
                {step.title}
              </p>
              <p className="mt-2 text-base leading-7 text-[#5C5C5C]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/farmhouses"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1F1F1F] text-white font-semibold hover:bg-black transition-colors"
          >
            Browse Party Farmhouses
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#1F1F1F]/20 text-[#1F1F1F] font-semibold hover:bg-[#F7F3EE] transition-colors"
          >
            Get Farmhouse Options on WhatsApp
          </a>
          <Link
            href="/blogs/how-much-does-a-farmhouse-party-cost-in-delhi-ncr-2026"
            className="inline-flex items-center justify-center px-8 py-4 text-[#8d6a31] font-semibold underline underline-offset-4"
          >
            Farmhouse party cost guide
          </Link>
        </div>

      </div>
    </section>
  );
}
