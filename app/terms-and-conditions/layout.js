// Page metadata lives here because page.js is a client component
// (client components cannot export metadata).

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing use of the Effortless Events website and our venue booking and event planning services.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "Terms & Conditions | Effortless Events",
    description:
      "The terms and conditions governing use of the Effortless Events website and our venue booking and event planning services.",
    url: "/terms-and-conditions",
  },
};

export default function Layout({ children }) {
  return children;
}
