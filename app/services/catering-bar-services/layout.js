// Page metadata lives here because page.js is a client component
// (client components cannot export metadata).

export const metadata = {
  title: "Catering & Bar Services for Events in Delhi NCR",
  description:
    "Catering and bar services for weddings, farmhouse parties, birthdays and corporate events across Delhi NCR — menus, live counters, bartending and service staff.",
  alternates: { canonical: "/services/catering-bar-services" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "Catering & Bar Services for Events in Delhi NCR | Effortless Events",
    description:
      "Catering and bar services for weddings, farmhouse parties, birthdays and corporate events across Delhi NCR — menus, live counters, bartending and service staff.",
    url: "/services/catering-bar-services",
  },
};

export default function Layout({ children }) {
  return children;
}
