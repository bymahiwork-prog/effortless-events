// Page metadata lives here because page.js is a client component
// (client components cannot export metadata).

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Effortless Events collects, uses, stores and protects your information when you use our website and event planning services.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "Privacy Policy | Effortless Events",
    description:
      "How Effortless Events collects, uses, stores and protects your information when you use our website and event planning services.",
    url: "/privacy-policy",
  },
};

export default function Layout({ children }) {
  return children;
}
