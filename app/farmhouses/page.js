import FarmhousesClient from "./FarmhousesClient";
import { getFarmhouses, displayName } from "../../lib/farmhouses";

// Render on every request so listings are always current
// (same freshness as the old browser-side fetch).
export const dynamic = "force-dynamic";

const TITLE = "Farmhouses for Party in Delhi NCR – Book a Party Farmhouse";
const DESCRIPTION =
  "Browse party farmhouses in Delhi NCR with photos, location and rates. Book a farmhouse for birthday, private, pool or corporate parties with Effortless Events.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/farmhouses" },
  openGraph: {
    type: "website",
    siteName: "Effortless Events",
    locale: "en_IN",
    url: "/farmhouses",
    title: `${TITLE} | Effortless Events`,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export default async function FarmhousesPage() {
  const { products } = await getFarmhouses({ limit: 100 });

  // List of farmhouses for Google (ItemList), only when we have data.
  const itemList =
    products && products.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Farmhouses for Party in Delhi NCR",
          itemListElement: products.map((venue, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://effortlessevents.in/farmhouses/${venue.id}`,
            name: displayName(venue),
          })),
        }
      : null;

  return (
    <>
      {itemList && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
      )}
      <FarmhousesClient initialVenues={products} />
    </>
  );
}
