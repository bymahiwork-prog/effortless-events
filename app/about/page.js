import Navbar from "../components/Navbar";

import EventSpacePage from "../components/about/EventSpacePage";
import Hero from "../components/about/hero";
import FeaturedSection from "../components/about/FeaturedSection";
import OurTeamSection from "../components/about/OurTeamSection";
import Footer from "../components/Footer";

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
