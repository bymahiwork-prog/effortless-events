import Navbar from "../components/Navbar";

import Hero from "../components/about/hero";
import EventSpacePage from "../components/about/EventSpacePage";
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
          ABOUT HERO
      ===================================================== */}
      <Hero />


      {/* =====================================================
          EVENT SPACE
      ===================================================== */}
      <EventSpacePage />


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
