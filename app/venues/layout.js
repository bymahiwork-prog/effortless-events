// Page metadata lives here because page.js is a client component
// (client components cannot export metadata).

export const metadata = {
  title: "Event Venues in Delhi NCR for Parties, Weddings & Corporate Events",
  description:
    "Browse event venues across Delhi NCR — farmhouses, villas and event spaces in Gurgaon, Noida, Chattarpur and South Delhi for parties, weddings and corporate events.",
  openGraph: {
    images: ["/og-image.jpg"],
    title: "Event Venues in Delhi NCR for Parties, Weddings & Corporate Events | Effortless Events",
    description:
      "Browse event venues across Delhi NCR — farmhouses, villas and event spaces in Gurgaon, Noida, Chattarpur and South Delhi for parties, weddings and corporate events.",
  },
};

export default function Layout({ children }) {
  return children;
}
