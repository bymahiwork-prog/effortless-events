import Navbar from "../components/Navbar";

import ServicesHero from "../components/services/ServicesHero";
import ServicesStats from "../components/services/ServicesStats";
import ServicesGrid from "../components/services/ServicesGrid";
import EventTypes from "../components/services/EventTypes";
import DecorationGallery from "../components/services/DecorationGallery";
import HowItWorks from "../components/services/HowItWorks";
import ServicesFAQ from "../components/services/ServicesFAQ";
import ServicesCTA from "../components/services/ServicesCTA";

export const metadata = {
  title: "Event Management Services in Delhi NCR",
  description:
    "Event planning, venue booking, décor, catering & bar, entertainment and on-ground management for weddings, farmhouse parties and corporate events across Delhi NCR.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Event Management Services in Delhi NCR | Effortless Events",
    description:
      "Venue booking, planning, décor, catering, entertainment and on-ground event management across Delhi NCR.",
    images: ["/og-image.jpg"],
  },
};

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
