import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "DJ or Live Band for a Farmhouse Party in Delhi NCR?",

  description:
    "DJ, live band or both for a farmhouse party in Delhi NCR? Cost estimates, space and power needs, the 10 PM music rule and a checklist before you book.",

  keywords: [
    "DJ or live band for farmhouse party Delhi NCR",
    "DJ cost for party in Delhi",
    "live band for party Delhi price",
    "DJ vs live band for wedding",
    "DJ with dhol for wedding Delhi",
    "can you play DJ after 10 pm in Delhi",
    "music licence for private party India",
  ],

  alternates: { canonical: "/blogs/dj-or-live-band-farmhouse-party-delhi-ncr" },

  openGraph: {
    title: "DJ or Live Band for a Farmhouse Party in Delhi NCR?",

    description:
      "How to choose between a DJ, a live band or both for a Delhi NCR farmhouse party: cost estimates, space, power, sound rules and a booking checklist.",

    images: ["/entertainment.jpg"],
  },
};

const faqs = [
  {
    q: "Is a DJ or a live band better for a party?",
    a: "A DJ is better when the goal is non-stop dancing, the guest list spans many ages and tastes, or the budget is tight. A live band is better for a dinner, cocktail or sangeet evening where the music itself is the experience. Many Delhi NCR hosts book a short live set followed by a DJ to get both.",
  },
  {
    q: "How much does a DJ cost for a party in Delhi NCR?",
    a: "As a rough estimate, a DJ with a basic sound setup for a 40–60 guest farmhouse party typically costs ₹10,000–₹25,000 for about four hours. A larger setup with dance-floor lighting for 100–200 guests can range from ₹25,000–₹60,000, and premium wedding DJs on listing sites quote packages from about ₹1 lakh.",
  },
  {
    q: "How much does a live band cost in Delhi?",
    a: "Estimates vary widely with line-up and reputation. An acoustic duo or trio for a two-hour set typically costs around ₹20,000–₹60,000, while a full five-to-seven piece Bollywood or rock band can range from about ₹60,000 to ₹2 lakh or more, before sound hire, travel and taxes.",
  },
  {
    q: "Can you play a DJ after 10 PM at a farmhouse in Delhi?",
    a: "Generally not on outdoor loudspeakers. India's noise rules bar loudspeakers and public-address systems in open areas between 10 PM and 6 AM unless the authorities specifically permit it, and Delhi Police require prior permission for loudspeaker use. Plan the loud part of the night before 10 PM or move indoors.",
  },
  {
    q: "Do I need a music licence to play songs at a private party or wedding in India?",
    a: "For weddings, no: in July 2023 the Department for Promotion of Industry and Internal Trade (DPIIT) told copyright societies to stop collecting royalties for music at marriage functions, citing Section 52(1)(za) of the Copyright Act. For other events, ask your DJ and the venue how music licensing is handled, as rules for commercial and ticketed events differ.",
  },
  {
    q: "Can you have both a DJ and a live band at one party?",
    a: "Yes, and it is a common format at Delhi NCR farmhouses: an acoustic or Sufi set during cocktails and dinner, then the DJ for dancing, often with dhol players for the entry. Book them as one sound plan so they share a stage, speakers and a sound engineer instead of paying for two systems.",
  },
  {
    q: "How many hours should I book a DJ for?",
    a: "Four hours covers most farmhouse parties: about an hour of background music while guests arrive, then two to three hours of dancing before the 10 PM cut-off. For an afternoon party, a three-hour slot is usually enough. Confirm the overtime rate in writing in case the party runs late indoors.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="dj-or-live-band-farmhouse-party-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-17"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/entertainment.jpg"
          alt="DJ or live band for a farmhouse party in Delhi NCR: a live band performing on an outdoor stage under lantern lights"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          DJ or Live Band for a Farmhouse Party in Delhi NCR: Costs, Space and
          Sound Rules
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
          Choosing a DJ or live band for a farmhouse party in Delhi NCR decides
          how your evening feels, what it costs and how much of the lawn and
          power supply the music will need. With wedding functions, Christmas
          parties and New Year&apos;s Eve all landing between late November and
          December, good DJs and bands get booked weeks ahead. This guide
          compares the options, gives labelled cost estimates and covers the
          rules that affect outdoor music.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Book a DJ if you want guests dancing for hours on a tighter budget;
            book a live band if the music is the centrepiece of a dinner,
            cocktail or sangeet evening. For most farmhouse parties of 50–200
            guests, a short live set followed by a DJ works best. Either way,
            plan the loud part before the 10 PM outdoor loudspeaker cut-off.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          DJ vs Live Band vs Both: At a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Factor</th>
                <th className={th}>DJ</th>
                <th className={th}>Live band</th>
                <th className={th}>Live set + DJ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Best for</td>
                <td className={td}>Dancing, birthdays, NYE, mixed ages</td>
                <td className={td}>Dinners, cocktails, anniversaries, sangeet</td>
                <td className={td}>Wedding functions, 100+ guest parties</td>
              </tr>
              <tr>
                <td className={td}>Typical cost (estimate)</td>
                <td className={td}>₹10,000–₹60,000</td>
                <td className={td}>₹20,000–₹2,00,000+</td>
                <td className={td}>₹40,000–₹2,50,000+</td>
              </tr>
              <tr>
                <td className={td}>Stage or floor space</td>
                <td className={td}>A console table, about 8×4 ft</td>
                <td className={td}>A raised stage, about 16×12 ft for 5 players</td>
                <td className={td}>One shared stage plus a dance floor</td>
              </tr>
              <tr>
                <td className={td}>Song range</td>
                <td className={td}>Almost unlimited, takes requests</td>
                <td className={td}>The band&apos;s rehearsed set list</td>
                <td className={td}>Both</td>
              </tr>
              <tr>
                <td className={td}>Volume control</td>
                <td className={td}>Easy to turn down instantly</td>
                <td className={td}>Drums stay loud even unplugged</td>
                <td className={td}>Acoustic early, DJ for the peak</td>
              </tr>
              <tr>
                <td className={td}>Book ahead (Nov–Dec)</td>
                <td className={td}>3–6 weeks</td>
                <td className={td}>6–10 weeks</td>
                <td className={td}>6–10 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-500">
          Costs and space figures are planning estimates for Delhi NCR in 2026,
          not quotes. Prices rise on peak wedding dates, Christmas weekend and
          New Year&apos;s Eve.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is a DJ the Better Choice?
        </h2>

        <p className="mb-8">
          A DJ is the better choice when your main goal is a full dance floor.
          A good DJ reads the crowd, jumps from Punjabi to Bollywood to
          commercial English in seconds, and plays the exact song the birthday
          girl or the groom&apos;s uncle asks for. No band can match that range.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Mixed age groups:</strong> family parties need old Hindi
            classics for elders and current hits for younger guests in the
            same hour.
          </li>
          <li>
            <strong>Smaller budgets:</strong> one person and one sound system
            cost far less than a five-piece band and its gear.
          </li>
          <li>
            <strong>Tight spaces:</strong> a DJ console fits on a patio or
            beside the pool; a band needs a proper stage.
          </li>
          <li>
            <strong>Volume control:</strong> when a neighbour complains or the
            clock nears 10 PM, a DJ can drop the volume instantly.
          </li>
          <li>
            <strong>Indoor after-party:</strong> once outdoor music stops, a DJ
            can move inside with a smaller speaker setup.
          </li>
        </ul>

        <p className="mb-8">
          This is why DJs dominate birthday parties, bachelorette nights and{" "}
          <Link
            href="/blogs/new-year-eve-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            New Year&apos;s Eve parties at farmhouses
          </Link>
          , where the evening is mostly about dancing.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is a Live Band Worth the Extra Cost?
        </h2>

        <p className="mb-8">
          A live band is worth it when the music is part of the experience,
          not just the background to dancing. Live vocals, a guitar, tabla or
          a saxophone under fairy lights on an open lawn create a feeling that a
          playlist cannot.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Dinner and cocktail evenings:</strong> an acoustic duo or
            trio keeps conversation easy while still feeling special.
          </li>
          <li>
            <strong>Older guest lists:</strong> ghazal, Sufi or retro Bollywood
            sets suit anniversaries and milestone birthdays.
          </li>
          <li>
            <strong>Wedding functions:</strong> a Sufi night, a mehendi with a
            folk ensemble or a cocktail with a Bollywood band are memorable
            centrepieces.
          </li>
          <li>
            <strong>Photos and video:</strong> performers on a lit stage give
            your photographer far better shots than a DJ console.
          </li>
        </ul>

        <p className="mb-8">
          The trade-offs are cost, space and flexibility. A band plays a
          rehearsed set, so it will not take every request, and drums and
          brass stay loud even when the speakers are turned down. If your
          farmhouse has close neighbours or a strict volume policy, an acoustic
          line-up is safer than a full band.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Do DJs and Live Bands Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A DJ for a farmhouse party in Delhi NCR typically costs ₹10,000–₹60,000
          depending on guest count and setup, while live acts range from about
          ₹20,000 for an acoustic duo to ₹2 lakh or more for a full band. On
          WedMeGood, Delhi NCR wedding DJ listings show starting packages from
          about{" "}
          <a
            href="https://www.wedmegood.com/profile/DJ-Himanshu-25637752"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            ₹25,000
          </a>{" "}
          to{" "}
          <a
            href="https://www.wedmegood.com/profile/Dj-Roody-Bajaj-465875"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            ₹1 lakh
          </a>
          , which shows how wide the market is.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Music option</th>
                <th className={th}>Suits</th>
                <th className={th}>Estimated cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Rented speaker and mic, your own playlist</td>
                <td className={td}>Up to 25 guests, daytime</td>
                <td className={td}>₹3,000–₹8,000</td>
              </tr>
              <tr>
                <td className={td}>DJ with basic sound, about 4 hours</td>
                <td className={td}>30–60 guests</td>
                <td className={td}>₹10,000–₹25,000</td>
              </tr>
              <tr>
                <td className={td}>DJ with larger sound, truss and dance-floor lights</td>
                <td className={td}>100–200 guests</td>
                <td className={td}>₹25,000–₹60,000</td>
              </tr>
              <tr>
                <td className={td}>Premium wedding DJ with full production</td>
                <td className={td}>Sangeet, cocktail, 200+ guests</td>
                <td className={td}>₹75,000–₹1,50,000+</td>
              </tr>
              <tr>
                <td className={td}>Dhol players for an entry or baraat</td>
                <td className={td}>Any function, 30–60 minutes</td>
                <td className={td}>₹5,000–₹15,000 for a pair</td>
              </tr>
              <tr>
                <td className={td}>Acoustic duo or trio, about 2 hours</td>
                <td className={td}>Dinners, cocktails, anniversaries</td>
                <td className={td}>₹20,000–₹60,000</td>
              </tr>
              <tr>
                <td className={td}>Sufi, ghazal or folk ensemble</td>
                <td className={td}>Mehendi, Sufi night, older guests</td>
                <td className={td}>₹40,000–₹1,50,000</td>
              </tr>
              <tr>
                <td className={td}>Full Bollywood or rock band, 5–7 players</td>
                <td className={td}>Large parties, wedding functions</td>
                <td className={td}>₹60,000–₹2,00,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-500">
          All figures are estimates for 2026 Delhi NCR private events, not
          quotes. Peak wedding dates, Christmas weekend and 31 December usually
          cost more.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-10 mb-4">
          What costs are often left out of the quote?
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Sound and light hire if the band does not bring its own system</li>
          <li>Stage, truss, dance floor and carpet</li>
          <li>Generator or extra power, if the farmhouse supply is not enough</li>
          <li>Travel to Sohna Road, Greater Noida or other outlying areas</li>
          <li>Overtime per hour beyond the agreed slot</li>
          <li>Meals for the crew and a green room for performers</li>
          <li>GST, if the vendor is registered</li>
        </ul>

        <p className="mb-8">
          For how music fits into the rest of your spend, see our guide to{" "}
          <Link
            href="/blogs/how-much-does-a-farmhouse-party-cost-in-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            how much a farmhouse party costs in Delhi NCR
          </Link>
          .
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Option Suits Your Occasion and Guest Count?
        </h2>

        <p className="mb-8">
          Match the music to what guests will mostly be doing: eating and
          talking, or dancing. This decision table is a starting point for
          common Delhi NCR farmhouse events.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Occasion</th>
                <th className={th}>Guests</th>
                <th className={th}>Recommended music</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Friends&apos; birthday or bachelorette</td>
                <td className={td}>20–50</td>
                <td className={td}>DJ with basic sound</td>
              </tr>
              <tr>
                <td className={td}>New Year&apos;s Eve house party</td>
                <td className={td}>30–80</td>
                <td className={td}>DJ, plus an indoor plan after 10 PM</td>
              </tr>
              <tr>
                <td className={td}>Anniversary or parents&apos; milestone dinner</td>
                <td className={td}>40–100</td>
                <td className={td}>Acoustic or ghazal set, short DJ slot</td>
              </tr>
              <tr>
                <td className={td}>Office Christmas or year-end party</td>
                <td className={td}>50–150</td>
                <td className={td}>DJ with an MC; optional live act</td>
              </tr>
              <tr>
                <td className={td}>Mehendi or haldi</td>
                <td className={td}>50–150</td>
                <td className={td}>Dhol and folk singers, then a DJ</td>
              </tr>
              <tr>
                <td className={td}>Sangeet or cocktail night</td>
                <td className={td}>100–300</td>
                <td className={td}>Live band or Sufi set, then a DJ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Planning a wedding function? Our{" "}
          <Link
            href="/blogs/sangeet-night-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            sangeet night at a farmhouse guide
          </Link>{" "}
          covers stage size, run-of-show and how performances and the DJ share
          the evening.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Space and Power Does Each Option Need?
        </h2>

        <p className="mb-8">
          A DJ needs very little space and power; a live band needs a stage,
          more power points and time to set up and sound-check. Check these
          against the farmhouse before you book the act.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Stage:</strong> a DJ needs a sturdy table under a canopy. A
            five-piece band needs a raised, level stage (about 16×12 ft as a
            rough guide) with a cover in case of dew or drizzle.
          </li>
          <li>
            <strong>Power:</strong> ask every vendor for their power load in kW
            and confirm the farmhouse can supply it on a separate line from the
            kitchen and lights.
          </li>
          <li>
            <strong>Backup power:</strong> winter air-quality curbs under{" "}
            <a
              href="https://outlookindia.com/national/what-are-grap-i-measures-currently-in-effect-in-delhi-over-deteriorating-air-quality"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-semibold"
            >
              GRAP
            </a>{" "}
            can restrict diesel generators, so ask how the venue keeps music
            running during a power cut.
          </li>
          <li>
            <strong>Set-up time:</strong> plan about an hour for a DJ and two to
            three hours for a band, including sound check, before guests
            arrive.
          </li>
          <li>
            <strong>Speaker direction:</strong> point speakers towards the
            property, away from the boundary wall and neighbours.
          </li>
          <li>
            <strong>Indoor fallback:</strong> a hall or covered room where the
            party can continue at low volume after the outdoor cut-off.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can You Play Music After 10 PM at a Farmhouse in Delhi NCR?
        </h2>

        <p className="mb-8">
          Not on outdoor loudspeakers, as a general rule. India&apos;s noise
          rules bar loudspeakers and public-address systems in open areas
          between 10 PM and 6 AM unless the authorities specifically permit
          it, as{" "}
          <a
            href="https://nyaaya.org/legal-explainer/loudspeakers-and-public-address-system/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Nyaaya&apos;s explainer on loudspeaker rules
          </a>{" "}
          sets out, and in 2025 Delhi Police{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            made prior permission mandatory for loudspeaker use
          </a>
          .
        </p>

        <p className="mb-8">
          In practice, this shapes the whole evening. Start the music early,
          put dancing between roughly 7 PM and 10 PM, and agree in writing with
          the farmhouse and the DJ who stops the sound at the cut-off. Many
          properties have their own earlier limits, so read our guide to{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse rules to check before booking
          </Link>{" "}
          before you pay an advance to any performer.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-10 mb-4">
          Do you need a music licence for a private party?
        </h3>

        <p className="mb-8">
          For weddings, the government has said no. In a{" "}
          <a
            href="https://www.verdictum.in/news/section-52-1za-copyright-act-1957-department-of-promotion-of-industry-internal-trade-1486660"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            July 2023 public notice reported by Verdictum
          </a>
          , DPIIT told copyright societies to stop collecting royalties for
          music played at marriage functions, citing Section 52(1)(za) of the
          Copyright Act, which covers processions and other social festivities
          linked to a marriage. For corporate, ticketed or commercial events,
          ask the DJ and venue how licensing is handled, as those are treated
          differently.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How to Combine a Live Set and a DJ in One Evening
        </h2>

        <p className="mb-8">
          The simplest way to get both is to give each act a clear slot and
          share one sound system. This sample plan suits a 7 PM–10 PM outdoor
          party.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Time</th>
                <th className={th}>Music</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>4:30–6:30 PM</td>
                <td className={td}>Set-up and sound check for band and DJ</td>
              </tr>
              <tr>
                <td className={td}>7:00–7:45 PM</td>
                <td className={td}>DJ plays soft background music as guests arrive</td>
              </tr>
              <tr>
                <td className={td}>7:45–8:00 PM</td>
                <td className={td}>Dhol entry for the hosts or couple</td>
              </tr>
              <tr>
                <td className={td}>8:00–9:00 PM</td>
                <td className={td}>Live acoustic, Sufi or Bollywood set with drinks and starters</td>
              </tr>
              <tr>
                <td className={td}>9:00–10:00 PM</td>
                <td className={td}>DJ opens the dance floor; dinner service starts</td>
              </tr>
              <tr>
                <td className={td}>10:00 PM onwards</td>
                <td className={td}>Outdoor sound off; low-volume indoor music if allowed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask Before Booking a DJ or Live Band for a Farmhouse Party
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Can I see a video of a recent outdoor or farmhouse event?</li>
          <li>What exactly is in the package: speakers, mics, lights, hours?</li>
          <li>What is your power load in kW, and do you bring backup?</li>
          <li>How early will you arrive, and how long is the sound check?</li>
          <li>What is the overtime rate per hour?</li>
          <li>Do you take song requests, and can I send a must-play and do-not-play list?</li>
          <li>Who handles the 10 PM cut-off and any police permission?</li>
          <li>Are GST, travel and crew meals included?</li>
          <li>What is the advance, and what happens if the event is cancelled?</li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Party Music Checklist
        </h2>

        <ul className="space-y-3 mb-12">
          <li>☐ Farmhouse music policy and cut-off time confirmed in writing</li>
          <li>☐ Loudspeaker permission arranged, if needed</li>
          <li>☐ DJ, band or both chosen for the occasion and guest count</li>
          <li>☐ Stage, canopy and dance-floor space checked on site</li>
          <li>☐ Power load matched to the farmhouse supply and backup</li>
          <li>☐ Set-up and sound-check time agreed with the venue</li>
          <li>☐ Must-play and do-not-play lists sent</li>
          <li>☐ Run-of-show shared with DJ, band, caterer and photographer</li>
          <li>☐ Indoor fallback for after 10 PM or bad weather</li>
          <li>☐ Overtime rate, GST and cancellation terms in writing</li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan Your Farmhouse Party Music with Effortless Events
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          parties, wedding functions and corporate events, and coordinate
          vendors such as DJs, live acts, décor and catering.
        </p>

        <p className="mb-8">
          The right music starts with the right venue: one with space for a
          stage, enough power, a clear music policy and an indoor room for
          later in the night. Share your date, guest count and the kind of
          evening you want, and we can help you shortlist farmhouses that fit
          a DJ, a band or both.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          Pick a DJ when dancing is the point, a live band when the music is
          the experience, and both when the guest list and budget allow.
          Confirm the farmhouse&apos;s rules, power and stage space first,
          book early for November and December dates, and build the evening
          around the 10 PM cut-off.
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
            Find a Farmhouse That Fits Your DJ or Band
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Tell us your date, guest count, area and budget. Effortless Events
            can help you find a farmhouse with the space, power and music
            policy your party needs, and plan the entertainment around it.
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
              Plan My Party
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
