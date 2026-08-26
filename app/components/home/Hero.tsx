"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sliderData = [
  {
    imageSrc: "/venue 98.jpg",
    altText: "Luxury farmhouse venue in Gurugram",
    subText: "Effortless Farm 45",
    location: "Gawal Pahari, Gurugram",
    href: "/venues/98",
  },
  {
    imageSrc: "/venue 125.webp",
    altText: "Premium farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 16",
    location: "Delhi NCR",
    href: "/venues/125",
  },
  {
    imageSrc: "/venue 120.webp",
    altText: "Luxury pool farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 3",
    location: "Delhi NCR",
    href: "/venues/120",
  },
  {
    imageSrc: "/venue 39.webp",
    altText: "Elegant event farmhouse venue in Delhi NCR",
    subText: "Effortless Farm 13",
    location: "Delhi NCR",
    href: "/venues/39",
  },
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
    imageSrc: "/Effortless HP28.jpg",
    altText: "Effortless HP 28 in New Delhi",
    subText: "Effortless HP 28",
    location: "New Delhi",
    href: "/venues/16",
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

const textVariant = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = sliderData[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? sliderData.length - 1
        : previousIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === sliderData.length - 1
        ? 0
        : previousIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black">

      {/* =====================================================
          BACKGROUND SLIDER
      ===================================================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <img
            src={currentSlide.imageSrc}
            alt={currentSlide.altText}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>


      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 z-10 bg-black/45" />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-20 flex h-full items-end">

        <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-8 md:pb-20">

          <motion.div
            key={`content-${currentIndex}`}
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >

            {/* Eyebrow */}

            <motion.p
              variants={textVariant}
              className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-white/80 md:text-sm"
            >
              Luxury Event Planning in Delhi NCR
            </motion.p>


            {/* Main Heading */}

            <motion.h1
              variants={textVariant}
              className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-7xl"
            >
              Delhi NCR&apos;s Premier Event Planning &amp; Venue Company
            </motion.h1>


            {/* Subheadline */}

            <motion.p
              variants={textVariant}
              className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl"
            >
              From intimate celebrations to grand corporate galas, we design
              experiences that stay with you long after the last guest leaves.
            </motion.p>


            {/* CTA BUTTONS */}

            <motion.div
              variants={textVariant}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >

              <Link
                href="/search"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-gray-100"
              >
                Browse Our Venues
              </Link>

              <a
                href="https://wa.me/917838008069"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Talk to Us on WhatsApp
              </a>

            </motion.div>

          </motion.div>


          {/* =====================================================
              SLIDE CAPTION + NAVIGATION
          ===================================================== */}

          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            {/* Current Venue */}

            <Link
              href={currentSlide.href}
              className="block transition-opacity duration-300 hover:opacity-90"
            >

              <p className="text-xl font-semibold text-white md:text-2xl">
                {currentSlide.subText}
              </p>

              <p className="mt-1 text-sm text-white/80 md:text-base">
                {currentSlide.location}
              </p>

            </Link>


            {/* Navigation Buttons */}

            <div className="flex gap-3">

              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
              >
                <ChevronRight size={20} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
