"use client";

import React, { useEffect, useRef } from "react";

const EventSpacePage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
      el.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative w-full h-[620px] sm:h-[650px] md:h-[680px] lg:h-[720px] bg-[#050505] text-white overflow-hidden">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <img
        src="/about1.png"
        alt="Effortless Events"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-black/70" />

      {/* =====================================================
          LEFT GRADIENT OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/20" />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        ref={heroRef}
        className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="max-w-xl">

            <p className="text-[#C9A34A] text-[10px] sm:text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              About Effortless Events
            </p>

            <h1 className="font-bold leading-[1.05] text-white mb-5">

              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[4rem]">
                Delhi NCR&apos;s Trusted
              </span>

              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] text-[#C9A34A]">
                Venue Rental &amp; Event Planning Company
              </span>

            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-lg mb-7">
              Effortless Events Pvt. Ltd. is a Delhi NCR-based event planning
              company specializing in weddings, corporate events, and private
              celebrations with end-to-end services including venue selection,
              décor, catering, and event coordination.
            </p>

            <a
              href="https://wa.me/917838008069"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#C9A34A] hover:bg-[#b8923d] text-black font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-colors duration-300 text-sm sm:text-base"
            >
              Plan Your Event on WhatsApp
            </a>

          </div>

          {/* =================================================
              RIGHT IMAGE GRID
          ================================================= */}

          <div className="hidden lg:grid grid-cols-2 gap-4 max-w-xl ml-auto">

            {[
              {
                src: "/event-gallery-1.jpeg",
                alt: "Luxury Event Setup",
                offset: "mt-0",
              },
              {
                src: "/event-gallery-2.jpeg",
                alt: "Outdoor Venue",
                offset: "mt-3",
              },
              {
                src: "/event-gallery-3.jpeg",
                alt: "Wedding Mandap",
                offset: "-mt-1",
              },
              {
                src: "/event-gallery-4.jpeg",
                alt: "Wedding Decor",
                offset: "mt-2",
              },
            ].map((image) => (
              <div
                key={image.src}
                className={`${image.offset} rounded-2xl overflow-hidden border border-[#C9A34A]/20 shadow-2xl aspect-[4/3]`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
};

export default EventSpacePage;
