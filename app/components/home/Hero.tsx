"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const sliderData = [
  {
    imageSrc: "/Effortless Farm 58.webp",
    altText: "Effortless Farm 58 in New Delhi",
    subText: "Effortless Farm 58",
    location: "New Delhi",
    href: "/venues/132",
  },
  {
    imageSrc: "/Effortless Farm 33.webp",
    altText: "Effortless Farm 33 in New Delhi",
    subText: "Effortless Farm 33",
    location: "New Delhi",
    href: "/venues/134",
  },
  {
    imageSrc: "/Effortless Farm67.webp",
    altText: "Effortless Farm 67 in Gurugram",
    subText: "Effortless Farm 67",
    location: "Gurugram",
    href: "/venues/110",
  },
  {
    imageSrc: "/Effortless Farm39.jpg",
    altText: "Effortless Farm 39 in Faridabad",
    subText: "Effortless Farm 39",
    location: "Faridabad",
    href: "/venues/63",
  },
  {
    imageSrc: "/Effortless Farm18.jpg",
    altText: "Effortless Farm 18 in New Delhi",
    subText: "Effortless Farm 18",
    location: "New Delhi",
    href: "/venues/44",
  },
  {
    imageSrc: "/Effortless Hp1.webp",
    altText: "Effortless HP 1 in New Delhi",
    subText: "Effortless HP 1",
    location: "New Delhi",
    href: "/venues/101",
  },
  {
    imageSrc: "/Effortless Hp11.webp",
    altText: "Effortless HP 11 in New Delhi",
    subText: "Effortless HP 11",
    location: "New Delhi",
    href: "/venues/103",
  },
  {
    imageSrc: "/Effortless Farm69.webp",
    altText: "Effortless Farm 69 in Noida",
    subText: "Effortless Farm 69",
    location: "Noida",
    href: "/venues/112",
  },
  {
    imageSrc: "/Effortless HP 13.webp",
    altText: "Effortless HP 13 in New Delhi",
    subText: "Effortless HP 13",
    location: "New Delhi",
    href: "/venues/122",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const currentSlide = sliderData[currentIndex];

  /*
   * ==========================================
   * PREVIOUS SLIDE
   * ==========================================
   */

  const goToPrevious = () => {
    setImageLoaded(false);
    setImageError(false);

    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? sliderData.length - 1
        : prevIndex - 1
    );
  };

  /*
   * ==========================================
   * NEXT SLIDE
   * ==========================================
   */

  const goToNext = () => {
    setImageLoaded(false);
    setImageError(false);

    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  /*
   * ==========================================
   * AUTO SLIDER
   * ==========================================
   */

  useEffect(() => {
    const timer = setInterval(() => {
      setImageLoaded(false);
      setImageError(false);

      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  /*
   * ==========================================
   * PRELOAD CURRENT + NEXT IMAGE
   * ==========================================
   */

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);

    const currentImage = new Image();

    currentImage.src = currentSlide.imageSrc;

    currentImage.onload = () => {
      setImageLoaded(true);
    };

    currentImage.onerror = () => {
      console.error(
        "Hero image could not be loaded:",
        currentSlide.imageSrc
      );

      setImageError(true);
    };

    /*
     * Preload next image
     */

    const nextIndex =
      currentIndex === sliderData.length - 1
        ? 0
        : currentIndex + 1;

    const nextImage = new Image();

    nextImage.src = sliderData[nextIndex].imageSrc;

    return () => {
      currentImage.onload = null;
      currentImage.onerror = null;
    };
  }, [currentIndex, currentSlide.imageSrc]);

  /*
   * ==========================================
   * FALLBACK IMAGE
   * ==========================================
   */

  const fallbackImage = "/Effortless Farm 58.webp";

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0 z-0">

        {!imageError ? (
          <img
            key={currentSlide.imageSrc}
            src={currentSlide.imageSrc}
            alt={currentSlide.altText}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              console.error(
                "Failed to load:",
                currentSlide.imageSrc
              );

              setImageError(true);
              setImageLoaded(false);
            }}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              imageLoaded
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ) : (
          <img
            src={fallbackImage}
            alt="Effortless Events venue"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
          />
        )}

        {/* Dark loading background */}

        <div className="absolute inset-0 bg-neutral-900 -z-10" />

      </div>


      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 z-10 bg-black/50" />


      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-72 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-20 min-h-screen flex items-center">

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-32 pb-28">

          <div className="max-w-4xl">

            {/* =================================================
                EYEBROW
            ================================================= */}

            <p className="mb-5 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              Luxury Event Planning in Delhi NCR
            </p>


            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[78px] font-semibold leading-[1.04] tracking-[-0.025em] text-white">

              Delhi NCR&apos;s Premier Event Planning &amp;
              Venue Company

            </h1>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-white/90">

              From intimate celebrations to grand corporate
              galas, we design experiences that stay with you
              long after the last guest leaves.

            </p>


            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">

              <Link
                href="/search"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-7 sm:px-8 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:bg-[#d6b36a] hover:text-black"
              >
                Browse Our Venues
              </Link>


              <a
                href="https://wa.me/917838008069"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/80 bg-black/10 px-7 sm:px-8 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
              >
                Talk to Us on WhatsApp
              </a>

            </div>

          </div>


          {/* =====================================================
              BOTTOM VENUE INFORMATION
          ===================================================== */}

          <div className="mt-16 flex flex-col gap-6 sm:mt-20 md:flex-row md:items-end md:justify-between">

            {/* =================================================
                CURRENT VENUE
            ================================================= */}

            <Link
              href={currentSlide.href}
              className="group w-fit"
            >

              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#d6b36a]">

                {currentSlide.subText}

              </p>

              <p className="mt-1 text-sm sm:text-base text-white/70">

                {currentSlide.location}

              </p>

            </Link>


            {/* =================================================
                SLIDER CONTROLS
            ================================================= */}

            <div className="flex items-center gap-3">

              {/* Previous */}

              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous slide"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
              >

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>

              </button>


              {/* Next */}

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
              >

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>

              </button>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SLIDE INDICATORS
      ===================================================== */}

      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">

        {sliderData.map((_, index) => (

          <button
            key={index}
            type="button"
            onClick={() => {
              setImageLoaded(false);
              setImageError(false);
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              index === currentIndex
                ? "true"
                : undefined
            }
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />

        ))}

      </div>

    </section>
  );
};

export default Hero;
