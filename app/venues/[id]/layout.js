import { connectToDatabase } from "../../../lib/db";

// The venue page itself is a client component, so its per-venue
// title, description and canonical are generated here on the server.

const IMAGE_BASE = "https://admin.effortlessevents.in/admin/";

// Same display names the venue gallery shows (see components/MarketGallery.jsx).
const DISPLAY_NAMES = {
  "Venue 98": "Effortless Farm 45",
  "Venue 125": "Effortless Farm 16",
  "Venue 120": "Effortless Farm 3",
  "Venue 39": "Effortless Farm 13",
};

async function getVenue(id) {
  let db;
  try {
    db = await connectToDatabase();
    const [rows] = await db.query(
      `SELECT p.product_name, p.product_location, p.image
         FROM tbl_product p
        WHERE p.id = ? AND p.status = 1
        LIMIT 1`,
      [id]
    );
    return rows?.[0] || null;
  } catch {
    return null;
  } finally {
    if (db) await db.end().catch(() => {});
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const canonical = `/venues/${id}`;
  const venue = await getVenue(id);

  if (!venue) {
    return {
      title: "Event Venue in Delhi NCR",
      alternates: { canonical },
    };
  }

  const name = DISPLAY_NAMES[venue.product_name] || venue.product_name || "Event Venue";
  const location = String(venue.product_location || "").trim();
  const where = location ? `${location}, Delhi NCR` : "Delhi NCR";

  const title = `${name} – Event Venue in ${where}`;
  const description = `${name} in ${where}: photos, location and enquiry details for birthdays, private parties, weddings and corporate events. Book through Effortless Events.`;
  const image = venue.image
    ? IMAGE_BASE + String(venue.image).replace(/^\/+/, "")
    : "/og-image.jpg";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: "Effortless Events",
      locale: "en_IN",
      url: canonical,
      title: `${title} | Effortless Events`,
      description,
      images: [image],
    },
  };
}

export default function VenueLayout({ children }) {
  return children;
}
