import { blogs } from "../../lib/blogs";

// Serves /llms.txt — a plain-text map of the site for AI search engines.
// Guides are generated from lib/blogs.js so new posts appear automatically.
export const dynamic = "force-static";

const HEAD = "# Effortless Events\n\n> Effortless Events (Effortless Events Pvt. Ltd.) is a Delhi NCR event planning and venue discovery company. It helps people find and book farmhouses, villas, apartments and event venues, and plans private parties, birthdays, weddings and corporate events across New Delhi, Gurugram, Noida, Faridabad, Ghaziabad and Greater Noida.\n\n- Office: L57B, Malviya Nagar, New Delhi 110017, India\n- Phone / WhatsApp: +91 78380 08069\n- Website: https://effortlessevents.in\n\n## Venues\n\n- [Farmhouses in Delhi NCR](https://effortlessevents.in/farmhouses): private farmhouses for parties, birthdays, pool parties and stays\n- [Wedding venues](https://effortlessevents.in/weddings): farmhouses and venues for weddings and pre-wedding functions\n- [Apartments and villas](https://effortlessevents.in/apartments): stays for groups, families and guests\n- [All venues](https://effortlessevents.in/venues)\n\n## Services\n\n- [Event Planning & Management](https://effortlessevents.in/services/event-planning-management)\n- [Venue Booking](https://effortlessevents.in/services/venue-booking)\n- [Event D\u00e9cor & Styling](https://effortlessevents.in/services/event-decor-styling)\n- [Catering & Bar Services](https://effortlessevents.in/services/catering-bar-services)\n- [Entertainment & Experiences](https://effortlessevents.in/services/entertainment-experiences)\n- [On-Ground Event Management](https://effortlessevents.in/services/on-ground-event-management)\n\n";

const TAIL = "## About\n\n- [About Effortless Events](https://effortlessevents.in/about)\n";

export function GET() {
  const guides = blogs
    .map((b) => `- [${b.title}](https://effortlessevents.in${b.href}): ${b.description}`)
    .join("\n");

  return new Response(`${HEAD}## Guides\n\n${guides}\n\n${TAIL}`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
