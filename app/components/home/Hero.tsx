"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

/*
 * =========================================================
 * FEATURED FARMHOUSES
 * =========================================================
 *
 * These properties are Farmhouses, so their detail pages
 * must use:
 *
 * /farmhouses/[id]
 *
 * Wedding venues use /venues/[id]
 * Apartments use /apartments/[id]
 */

const sliderData = [
  {
    imageSrc: "/Effortless Farm 58.webp",
    altText: "Effortless Farm 58 in New Delhi",
    subText: "Effortless Farm 58",
    location: "New Delhi",
    href: "/farmhouses/132",
  },
  {
    imageSrc: "/Effortless Farm 33.webp",
    altText: "Effortless Farm 33 in New Delhi",
    subText: "Effortless Farm 33",
    location: "New Delhi",
    href: "/farmhouses/134",
  },
  {
    imageSrc: "/Effortless Farm67.webp",
    altText: "Effortless Farm 67 in Gurugram",
    subText: "Effortless Farm 67",
    location: "Gurugram",
    href: "/farmhouses/110",
  },
  {
    imageSrc: "/Effortless Farm39.jpg",
    altText: "Effortless Farm 39 in Faridabad",
    subText: "Effortless Farm 39",
    location: "Faridabad",
    href: "/farmhouses/63",
  },
  {
    imageSrc: "/Effortless Farm18.jpg",
    altText: "Effortless Farm 18 in New Delhi",
    subText: "Effortless Farm 18",
    location: "New Delhi",
    href: "/farmhouses/44",
  },
  {
    imageSrc: "/Effortless Hp1.webp",
    altText: "Effortless HP 1 in New Delhi",
    subText: "Effortless HP 1",
    location: "New Delhi",
    href: "/farmhouses/101",
  },
  {
    imageSrc: "/Effortless Hp11.webp",
    altText: "Effortless HP 11 in New Delhi",
    subText: "Effortless HP 11",
    location: "New Delhi",
    href: "/farmhouses/103",
  },
  {
    imageSrc: "/Effortless Farm69.webp",
    altText: "Effortless Farm 69 in Noida",
    subText: "Effortless Farm 69",
    location: "Noida",
    href: "/farmhouses/112",
  },
  {
    imageSrc: "/Effortless HP 13.webp",
    altText: "Effortless HP 13 in New Delhi",
    subText: "Effortless HP 13",
    location: "New Delhi",
    href: "/farmhouses/122",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  /*
   * =========================================================
   * SAFE CURRENT SLIDE
   * =========================================================
   */

  const currentSlide =
    sliderData[currentIndex] ?? sliderData[0];

  /*
   * =========================================================
   * WHATSAPP
   * =========================================================
   */

  const whatsappUrl = "https://wa.me/917838008069";

  /*
   * =========================================================
   * PREVIOUS SLIDE
   * =========================================================
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
   * =========================================================
   * NEXT SLIDE
   * =========================================================
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
   * =========================================================
   * AUTO SLIDER
   * =========================================================
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
   * =========================================================
   * PRELOAD CURRENT + NEXT IMAGE
   * =========================================================
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

    if (sliderData[nextIndex]) {
      nextImage.src = sliderData[nextIndex].imageSrc;
    }

    return () => {
      currentImage.onload = null;
      currentImage.onerror = null;
    };
  }, [currentIndex, currentSlide.imageSrc]);

  /*
   * =========================================================
   * FALLBACK IMAGE
   * =========================================================
   */

  const fallbackImage = "/Effortless Farm 58.webp";

  return (
    <section
      className="
        relative
        w-full
        h-[700px]
        sm:h-[680px]
        md:h-[630px]
        lg:h-[670px]
        overflow-hidden
        bg-black
      "
    >

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
            className={`
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              transition-opacity
              duration-1000
              ${
                imageLoaded
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        ) : (
          <img
            src={fallbackImage}
            alt="Effortless Events venue"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
            "
          />
        )}

        {/* Loading background */}

        <div className="absolute inset-0 bg-neutral-900 -z-10" />

      </div>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-64
          z-10
          bg-gradient-to-t
          from-black/90
          via-black/35
          to-transparent
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          h-full
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-7
          lg:px-10
          pt-[155px]
          sm:pt-[165px]
          md:pt-[175px]
          lg:pt-[150px]
          pb-14
          sm:pb-12
          md:pb-8
        "
      >

        <div className="h-full flex flex-col justify-between">

          {/* =================================================
              TOP CONTENT
          ================================================= */}

          <div className="max-w-[820px]">

            {/* =================================================
                EYEBROW
            ================================================= */}

            <p
              className="
                mb-4
                text-[9px]
                sm:text-[10px]
                md:text-xs
                font-medium
                uppercase
                tracking-[0.22em]
                sm:tracking-[0.25em]
                text-white/80
              "
            >
              Luxury Event Planning in Delhi NCR
            </p>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
              className="
                max-w-[820px]
                text-[clamp(2.1rem,5vw,4.5rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.025em]
                text-white
              "
            >
              Delhi NCR&apos;s Premier Event Planning &amp; Venue
              Company
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-5
                max-w-[620px]
                text-sm
                sm:text-base
                md:text-lg
                leading-7
                md:leading-8
                text-white/90
              "
            >
              From intimate celebrations to grand corporate
              galas, we design experiences that stay with you
              long after the last guest leaves.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div
              className="
                mt-6
                flex
                flex-col
                sm:flex-row
                gap-3
                sm:gap-4
              "
            >

              {/* Browse Venues */}

              <Link
                href="/farmhouses"
                className="
                  inline-flex
                  min-h-[48px]
                  sm:min-h-[52px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-6
                  sm:px-8
                  text-sm
                  sm:text-base
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#d6b36a]
                "
              >
                Browse Our Venues
              </Link>

              {/* WhatsApp */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[48px]
                  sm:min-h-[52px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/80
                  bg-black/10
                  px-6
                  sm:px-8
                  text-sm
                  sm:text-base
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                Talk to Us on WhatsApp
              </a>

            </div>

          </div>

          {/* =================================================
              BOTTOM VENUE INFORMATION
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-3
              sm:gap-4
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            {/* =================================================
                CURRENT VENUE
            ================================================= */}

            <Link
              href={currentSlide.href}
              className="group w-fit"
            >

              <p
                className="
                  text-base
                  sm:text-lg
                  md:text-xl
                  font-semibold
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#d6b36a]
                "
              >
                {currentSlide.subText}
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  sm:text-sm
                  text-white/70
                "
              >
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
                className="
                  flex
                  h-10
                  w-10
                  sm:h-11
                  sm:w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-black/20
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                <svg
                  width="19"
                  height="19"
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
                className="
                  flex
                  h-10
                  w-10
                  sm:h-11
                  sm:w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-black/20
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                <svg
                  width="19"
                  height="19"
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

      <div
        className="
          absolute
          bottom-4
          sm:bottom-5
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-2
        "
      >

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
            className={`
              h-1
              rounded-full
              transition-all
              duration-300
              ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }
            `}
          />

        ))}

      </div>

    </section>
  );
};

export default Hero;
