import FarmhouseDetailClient from "./FarmhouseDetailClient";
import { cache } from "react";
import { getVenueById, displayName } from "../../../lib/farmhouses";

// One database lookup per request, shared by metadata and the page.
const getVenue = cache(getVenueById);

// Render on every request so details are always current.
export const dynamic = "force-dynamic";

function describe(venue) {
  const name = displayName(venue);
  const location = String(venue.product_location || "").trim();
  const where = location ? `${location}, Delhi NCR` : "Delhi NCR";
  return { name, where };
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const canonical = `/farmhouses/${id}`;
  const { venue } = await getVenue(id);

  if (!venue) {
    return {
      title: "Farmhouse for Party in Delhi NCR",
      alternates: { canonical },
    };
  }

  const { name, where } = describe(venue);
  const title = `${name} – Farmhouse for Party in ${where}`;
  const description = `Book ${name} in ${where} for birthdays, private parties, pool parties and corporate get-togethers. See photos, location and enquiry details on Effortless Events.`;

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
      images: venue.image ? [venue.image] : ["/og-image.jpg"],
    },
  };
}

export default async function FarmhouseDetailPage({ params }) {
  const { id } = await params;
  const { venue } = await getVenue(id);

  const schema = venue
    ? {
        "@context": "https://schema.org",
        "@type": "Place",
        name: describe(venue).name,
        url: `https://effortlessevents.in/farmhouses/${venue.id}`,
        ...(venue.image ? { image: venue.images?.length ? venue.images : [venue.image] } : {}),
        ...(venue.product_detail ? { description: String(venue.product_detail).slice(0, 500) } : {}),
        address: {
          "@type": "PostalAddress",
          ...(venue.product_location ? { addressLocality: venue.product_location } : {}),
          addressRegion: "Delhi NCR",
          addressCountry: "IN",
        },
      }
    : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <FarmhouseDetailClient initialVenue={venue} />
    </>
  );
}
