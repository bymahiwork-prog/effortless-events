// Page metadata lives here because page.js is a client component
// (client components cannot export metadata).

export const metadata = {
  title: "On-Ground Event Management in Delhi NCR",
  description:
    "On-ground event management in Delhi NCR — guest arrivals, vendor coordination, timelines and live problem-solving so your wedding, party or corporate event runs to plan.",
  alternates: { canonical: "/services/on-ground-event-management" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "On-Ground Event Management in Delhi NCR | Effortless Events",
    description:
      "On-ground event management in Delhi NCR — guest arrivals, vendor coordination, timelines and live problem-solving so your wedding, party or corporate event runs to plan.",
    url: "/services/on-ground-event-management",
  },
};

export default function Layout({ children }) {
  return children;
}
