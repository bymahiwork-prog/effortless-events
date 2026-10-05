// Page metadata lives here because page.js is a client component
// (client components cannot export metadata).

export const metadata = {
  title: "Event Entertainment & Experiences in Delhi NCR",
  description:
    "DJs, live music, performers, games and guest experiences for farmhouse parties, weddings and corporate events in Delhi NCR, planned around your event's energy.",
  alternates: { canonical: "/services/entertainment-experiences" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "Event Entertainment & Experiences in Delhi NCR | Effortless Events",
    description:
      "DJs, live music, performers, games and guest experiences for farmhouse parties, weddings and corporate events in Delhi NCR, planned around your event's energy.",
    url: "/services/entertainment-experiences",
  },
};

export default function Layout({ children }) {
  return children;
}
