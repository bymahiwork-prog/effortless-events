"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const sliderData = [
  {
    imageSrc: "/venue 98.jpg",
    altText: "Luxury farmhouse venue in Gurugram",
    subText: "Effortless Farm 45",
    location: "Gawal Pahari, Gurugram",
    href: "https://www.effortlessevents.in/venues/98",
  },
  {
    imageSrc: "/venue 125.webp",
    altText: "Premium farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 16",
    location: "Delhi NCR",
    href: "https://www.effortlessevents.in/venues/125",
  },
  {
    imageSrc: "/venue 120.webp",
    altText: "Luxury pool farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 3",
    location: "Delhi NCR",
    href: "https://www.effortlessevents.in/venues/120",
  },
  {
    imageSrc: "/venue 39.webp",
    altText: "Elegant event farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 13",
    location: "Delhi NCR",
    href: "https://www.effortlessevents.in/venues/39",
  },
  {
    imageSrc: "/Effortless Farm 58.webp",
    altText: "Effortless Farm 58 in New Delhi",
    subText: "Effortless Farm 58",
    location: "New Delhi",
    href: "https://www.effortlessevents.in/venues/132",
  },
  {
    imageSrc: "/Effortless Farm 33.webp",
    altText: "Effortless Farm 33 in New Delhi",
    subText: "Effortless Farm 33",
    location: "New Delhi",
    href: "https://www.effortlessevents.in/venues/134",
  },
  {
    imageSrc: "/Effortless Farm67.webp",
    altText: "Effortless Farm 67 in Gurugram",
    subText: "Effortless Farm 67",
    location: "Gurugram",
    href: "https://www.effortlessevents.in/venues/110",
  },
  {
    imageSrc: "/Effortless Farm39.jpg",
    altText: "Effortless Farm 39 in Faridabad",
    subText: "Effortless Farm 39",
    location: "Faridabad",
    href: "https://www.effortlessevents.in/venues/63",
  },
  {
    imageSrc: "/Effortless Farm18.jpg",
    altText: "Effortless Farm 18 in New Delhi",
    subText: "Effortless Farm 18",
    location: "New Delhi",
    href: "https://www.effortlessevents.in/venues/44",
  },
  {
    imageSrc: "/Effortless HP28.jpg",
    altText: "Effortless HP 28 in New Delhi",
    subText: "Effortless HP 28",
    location: "New Delhi",
    href: "https://www.effortlessevents.in/venues/16",
  },
  {
    imageSrc: "/Effortless Hp1.webp",
    altText: "Effortless HP 1 in New Delhi",
    subText: "Effortless HP 1",
    location: "New Delhi",
    href: "https://www.effortlessevents.in/venues/101",
  },
  {
    imageSrc: "/Effortless Hp11.webp",
    altText: "Effortless HP 11 in New Delhi",
    subText: "Effortless HP 11",
    location: "New Delhi",
    href: "https://www.effortlessevents.in/venues/103",
  },
  {
    imageSrc: "/Effortless Farm69.webp",
    altText: "Effortless Farm 69 in Noida",
    subText: "Effortless Farm 69",
    location: "Noida",
    href: "https://www.effortlessevents.in/venues/112",
  },
  {
    imageSrc: "/Effortless HP 13.webp",
    altText: "Effortless HP 13 in New Delhi",
    subText: "Effortless HP 13",
    location: "New Delhi",
    href: "https://www.effortlessevents.in/venues/122",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const goToPrevious = () => {
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
      );
      setIsVisible(true);
    }, 250);
  };

  const goToNext = () => {
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
      setIsVisible(true);
    }, 250);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = sliderData[currentIndex];

  return (
    <section className="relative w-full min-h-screen h-screen overflow-hidden bg-black">

      {/* =====================================================
          HERO BACKGROUND IMAGE
      ===================================================== */}

      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={currentSlide.imageSrc}
          alt={currentSlide.altText}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>


      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-black/45 z-10" />


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-20 h-full flex items-end">

        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 pb-14 md:pb-20">

          <div
            className={`max-w-5xl transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >

            {/* Eyebrow */}

            <p className="text-white/80 uppercase tracking-[0.18em] text-xs md:text-sm font-medium mb-6">
              Luxury Event Planning in Delhi NCR
            </p>


            {/* Main Heading */}

            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05]">
              Delhi NCR&apos;s Premier Event Planning &amp; Venue Company
            </h1>


            {/* Subheadline */}

            <p className="text-white/90 text-lg md:text-2xl leading-relaxed max-w-3xl mt-6">
              From intimate celebrations to grand corporate galas, we design
              experiences that stay with you long after the last guest leaves.
            </p>


            {/* CTA BUTTONS */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                href="/search"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Browse Our Venues
              </Link>


              <a
                href="https://wa.me/917838008069"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Talk to Us on WhatsApp
              </a>

            </div>

          </div>


          {/* =====================================================
              SLIDE INFORMATION + CONTROLS
          ===================================================== */}

          <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            {/* Venue Information */}

            <a
              href={currentSlide.href}
              className="block hover:opacity-80 transition-opacity duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >

              <p className="text-white text-xl md:text-2xl font-semibold">
                {currentSlide.subText}
              </p>

              <p className="text-white/80 text-sm md:text-base mt-1">
                {currentSlide.location}
              </p>

            </a>


            {/* Navigation Buttons */}

            <div className="flex gap-3">

              {/* Previous */}

              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous slide"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
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
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>


              {/* Next */}

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
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
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
