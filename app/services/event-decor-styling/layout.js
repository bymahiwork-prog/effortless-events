// Page metadata lives here because page.js is a client component
// (client components cannot export metadata).

export const metadata = {
  title: "Event Décor & Styling in Delhi NCR",
  description:
    "Event décor and styling for weddings, birthdays, farmhouse parties and corporate events in Delhi NCR — themes, floral, lighting and stage design.",
  alternates: { canonical: "/services/event-decor-styling" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "Event Décor & Styling in Delhi NCR | Effortless Events",
    description:
      "Event décor and styling for weddings, birthdays, farmhouse parties and corporate events in Delhi NCR — themes, floral, lighting and stage design.",
    url: "/services/event-decor-styling",
  },
};

export default function Layout({ children }) {
  return children;
}
