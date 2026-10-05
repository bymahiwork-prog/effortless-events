// Page metadata lives here because page.js is a client component
// (client components cannot export metadata).

export const metadata = {
  title: "Venue Booking in Delhi NCR: Farmhouses, Villas & Event Spaces",
  description:
    "Book farmhouses, villas, banquet spaces and event venues across Delhi NCR — Gurgaon, Noida, Chattarpur and more — for weddings, parties and corporate events.",
  alternates: { canonical: "/services/venue-booking" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "Venue Booking in Delhi NCR: Farmhouses, Villas & Event Spaces | Effortless Events",
    description:
      "Book farmhouses, villas, banquet spaces and event venues across Delhi NCR — Gurgaon, Noida, Chattarpur and more — for weddings, parties and corporate events.",
    url: "/services/venue-booking",
  },
};

export default function Layout({ children }) {
  return children;
}
