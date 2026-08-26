"use client";

import { useEffect, useState } from "react";

const images = [
  "/event-gallery-1.jpeg",
  "/event-gallery-2.jpeg",
  "/event-gallery-3.jpeg",
  "/event-gallery-4.jpeg",
  "/event-gallery-5.jpeg",
];

export default function EventGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F7F3EE] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="text-center max-w-4xl mx-auto mb-12">

          <p className="text-sm uppercase tracking-[0.18em] text-[#8A7A66] font-medium mb-4">
            Event Gallery
          </p>

          <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#1F1F1F] leading-tight">
            Moments We&apos;ve Brought to Life
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-8 text-[#5C5C5C]">
            A glimpse into the weddings, corporate events, birthdays and
            private celebrations we have designed across Delhi NCR.
          </p>

        </div>


        {/* =====================================================
            SLIDESHOW
        ===================================================== */}

        <div className="relative rounded-[32px] overflow-hidden shadow-2xl">

          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-black">

            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Event gallery image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            ))}

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

          </div>

        </div>


        {/* =====================================================
            NAVIGATION DOTS
        ===================================================== */}

        <div className="flex justify-center items-center gap-2 mt-6">

          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 h-2 bg-[#C9A34A]"
                  : "w-2 h-2 bg-[#CBBFB2] hover:bg-[#A99A8A]"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
