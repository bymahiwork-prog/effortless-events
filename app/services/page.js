import Navbar from "../components/Navbar";

import ServicesHero from "../components/services/ServicesHero";
import ServicesStats from "../components/services/ServicesStats";
import ServicesGrid from "../components/services/ServicesGrid";
import EventTypes from "../components/services/EventTypes";
import DecorationGallery from "../components/services/DecorationGallery";
import HowItWorks from "../components/services/HowItWorks";
import ServicesFAQ from "../components/services/ServicesFAQ";
import ServicesCTA from "../components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <Navbar />


      {/* =====================================================
          SERVICES HERO
      ===================================================== */}
      <ServicesHero />


      {/* =====================================================
          SERVICES STATS
      ===================================================== */}
      <ServicesStats />


      {/* =====================================================
          SERVICES GRID
      ===================================================== */}
      <ServicesGrid />


      {/* =====================================================
          EVENT TYPES
      ===================================================== */}
      <EventTypes />


      {/* =====================================================
          DECORATION GALLERY
      ===================================================== */}
      <DecorationGallery />


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <HowItWorks />


      {/* =====================================================
          FREQUENTLY ASKED QUESTIONS
      ===================================================== */}
      <ServicesFAQ />


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <ServicesCTA />

    </main>
  );
}
