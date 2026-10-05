// Page metadata lives here because page.js is a client component
// (client components cannot export metadata).

export const metadata = {
  title: "Event Planning & Management Company in Delhi NCR",
  description:
    "End-to-end event planning and management in Delhi NCR — venues, vendors, budgets, décor, catering and execution for weddings, parties and corporate events.",
  alternates: { canonical: "/services/event-planning-management" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "Event Planning & Management Company in Delhi NCR | Effortless Events",
    description:
      "End-to-end event planning and management in Delhi NCR — venues, vendors, budgets, décor, catering and execution for weddings, parties and corporate events.",
    url: "/services/event-planning-management",
  },
};

export default function Layout({ children }) {
  return children;
}
