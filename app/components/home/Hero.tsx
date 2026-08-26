"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sliderData = [
  {
    imageSrc: "/images/home/hero/venue-98.jpg",
    altText: "Luxury farmhouse venue in Gurugram",
    subText: "Effortless Farm 45",
    location: "Gawal Pahari, Gurugram",
    href: "/venues/98",
  },
  {
    imageSrc: "/images/home/hero/venue-125.webp",
    altText: "Premium farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 16",
    location: "Delhi NCR",
    href: "/venues/125",
  },
  {
    imageSrc: "/images/home/hero/venue-120.webp",
    altText: "Luxury pool farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 3",
    location: "Delhi NCR",
    href: "/venues/120",
  },
  {
    imageSrc: "/images/home/hero/venue-39.webp",
    altText: "Elegant event farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 13",
    location: "Delhi NCR",
    href: "/venues/39",
  },
  {
    imageSrc: "/images/home/hero/effortless-farm-58.webp",
    altText: "Effortless Farm 58 in New Delhi",
    subText: "Effortless Farm 58",
    location: "New Delhi",
    href: "/venues/132",
  },
  {
    imageSrc: "/images/home/hero/effortless-farm-33.webp",
    altText: "Effortless Farm 33 in New Delhi",
    subText: "Effortless Farm 33",
    location: "New Delhi",
    href: "/venues/134",
  },
  {
    imageSrc: "/images/home/hero/effortless-farm-67.webp",
    altText: "Effortless Farm 67 in Gurugram",
    subText: "Effortless Farm 67",
    location: "Gurugram",
    href: "/venues/110",
  },
  {
    imageSrc: "/images/home/hero/effortless-farm-39.jpg",
    altText: "Effortless Farm 39 in Faridabad",
    subText: "Effortless Farm 39",
    location: "Faridabad",
    href: "/venues/63",
  },
  {
    imageSrc: "/images/home/hero/effortless-farm-18.jpg",
    altText: "Effortless Farm 18 in New Delhi",
    subText: "Effortless Farm 18",
    location: "New Delhi",
    href: "/venues/44",
  },
  {
    imageSrc: "/images/home/hero/effortless-hp-28.jpg",
    altText: "Effortless HP 28 in New Delhi",
    subText: "Effortless HP 28",
    location: "New Delhi",
    href: "/venues/16",
  },
  {
    imageSrc: "/images/home/hero/effortless-hp-1.webp",
    altText: "Effortless HP 1 in New Delhi",
    subText: "Effortless HP 1",
    location: "New Delhi",
    href: "/venues/101",
  },
  {
    imageSrc: "/images/home/hero/effortless-hp-11.webp",
    altText: "Effortless HP 11 in New Delhi",
    subText: "Effortless HP 11",
    location: "New Delhi",
    href: "/venues/103",
  },
  {
    imageSrc: "/images/home/hero/effortless-farm-69.webp",
    altText: "Effortless Farm 69 in Noida",
    subText: "Effortless Farm 69",
    location: "Noida",
    href: "/venues/112",
  },
  {
    imageSrc: "/images/home/hero/effortless-hp-13.webp",
    altText: "Effortless HP 13 in New Delhi",
    subText: "Effortless HP 13",
    location: "New Delhi",
    href: "/venues/122",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const currentSlide = sliderData[currentIndex];

  const goToPrevious = () => {
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === 0
          ? sliderData.length - 1
          : previousIndex - 1
      );

      setIsVisible(true);
    }, 300);
  };

  const goToNext = () => {
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === sliderData.length - 1
          ? 0
          : previousIndex + 1
      );

      setIsVisible(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === sliderData.length - 1
          ? 0
          : previousIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={currentSlide.imageSrc}
          alt={currentSlide.altText}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>


      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-10 flex min-h-screen items-end">

        <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-32 sm:px-8 md:pb-20 lg:px-10">

          <div
            className={`max-w-5xl transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >

            {/* Eyebrow */}

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 md:text-sm">
              Luxury Event Planning in Delhi NCR
            </p>


            {/* Main Heading */}

            <h1 className="max-w-5xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Delhi NCR&apos;s Premier Event Planning &amp; Venue Company
            </h1>


            {/* Description */}

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg md:text-2xl">
              From intimate celebrations to grand corporate galas, we design
              experiences that stay with you long after the last guest leaves.
            </p>


            {/* CTA BUTTONS */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/search"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d6b36a]"
              >
                Browse Our Venues
              </Link>

              <a
                href="https://wa.me/917838008069"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Talk to Us on WhatsApp
              </a>

            </div>

          </div>


          {/* =====================================================
              SLIDE INFORMATION + ARROWS
          ===================================================== */}

          <div className="mt-10 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between">

            {/* Current Venue */}

            <Link
              href={currentSlide.href}
              className="block transition-opacity duration-300 hover:opacity-80"
            >

              <p className="text-xl font-semibold text-white md:text-2xl">
                {currentSlide.subText}
              </p>

              <p className="mt-1 text-sm text-white/80 md:text-base">
                {currentSlide.location}
              </p>

            </Link>


            {/* Navigation */}

            <div className="flex gap-3">

              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
              >
                ←
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
              >
                →
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
