import Navbar from "../components/Navbar";

import EventSpacePage from "../components/about/EventSpacePage";
import Hero from "../components/about/hero";
import FeaturedSection from "../components/about/FeaturedSection";
import OurTeamSection from "../components/about/OurTeamSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us — Delhi NCR Event Planning & Venue Company",
  description:
    "Meet Effortless Events, a Delhi NCR event planning and venue discovery company helping people book farmhouses, villas and venues and plan parties, weddings and corporate events.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Effortless Events | Delhi NCR Event Planning & Venues",
    description:
      "Delhi NCR event planning and venue discovery for parties, weddings and corporate events.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <Navbar />

      {/* =====================================================
          EVENT SPACE
      ===================================================== */}
      <EventSpacePage />

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}
      <Hero />

      {/* =====================================================
          FEATURED SECTION
      ===================================================== */}
      <FeaturedSection />

      {/* =====================================================
          OUR TEAM
      ===================================================== */}
      <OurTeamSection />

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />

    </main>
  );
}
