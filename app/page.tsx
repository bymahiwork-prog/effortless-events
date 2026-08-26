import Navbar from "./components/Navbar";

import EffortLessEvent from "./components/home/EffortLessEvent";
import EventPlanningForm from "./components/home/EventPlanningForm";
import TrustBar from "./components/home/TrustBar";
import WhoWeAre from "./components/home/WhoWeAre";
import VenueShowcase from "./components/home/VenueShowcase";
import EventGallery from "./components/home/EventGallery";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import ServiceAreas from "./components/home/ServiceAreas";
import FAQSection from "./components/home/FAQSection";
import FinalCTA from "./components/home/FinalCTA";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <EffortLessEvent />


      {/* =====================================================
          EVENT PLANNING FORM
      ===================================================== */}

      <EventPlanningForm />


      {/* =====================================================
          TRUST BAR
      ===================================================== */}

      <TrustBar />


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <WhoWeAre />


      {/* =====================================================
          VENUE SHOWCASE
      ===================================================== */}

      <VenueShowcase />


      {/* =====================================================
          EVENT GALLERY
      ===================================================== */}

      <EventGallery />


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <WhyChooseUs />


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <Testimonials />


      {/* =====================================================
          SERVICE AREAS
      ===================================================== */}

      <ServiceAreas />


      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <FAQSection />


      {/* =====================================================
          GOOGLE MAP
      ===================================================== */}

      <MapReviewEmbed />


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <FinalCTA />

    </main>
  );
}


/* ============================================================
   GOOGLE MAP SECTION
============================================================ */

function MapReviewEmbed() {
  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Heading */}

        <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1F1F1F] text-center mb-8">
          Find Us on Google
        </h2>


        {/* Map */}

        <div className="rounded-3xl overflow-hidden shadow-lg">

          <iframe
            src="https://maps.google.com/maps?q=L57B%20Malviya%20Nagar%20New%20Delhi%20110017&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Effortless Events Location Map"
          />

        </div>

      </div>

    </section>
  );
}
