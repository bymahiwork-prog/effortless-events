"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  Flower2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/Navbar";

export default function EventDecorStyling() {
  const services = [
    {
      title: "Theme & Concept Development",
      description:
        "We create thoughtful event concepts that bring your vision, personality and occasion together into one cohesive experience.",
      icon: Palette,
    },
    {
      title: "Floral & Decorative Styling",
      description:
        "From elegant florals to statement installations, we curate decorative elements that transform your venue.",
      icon: Flower2,
    },
    {
      title: "Lighting & Ambience",
      description:
        "The right lighting can completely change a space. We design lighting experiences that complement your theme and mood.",
      icon: Lightbulb,
    },
    {
      title: "Custom Event Styling",
      description:
        "From stages and entrances to tablescapes and special installations, every element is styled to create a memorable setting.",
      icon: Sparkles,
    },
  ];

  const decorElements = [
    "Theme Development",
    "Stage Décor",
    "Entrance Décor",
    "Floral Arrangements",
    "Table Styling",
    "Backdrop Design",
    "Lighting",
    "Centerpieces",
    "Balloon Décor",
    "Custom Installations",
    "Photo Corners",
    "Venue Styling",
  ];

  const eventTypes = [
    "Birthday Celebrations",
    "Weddings",
    "Pre-Wedding Events",
    "Anniversary Celebrations",
    "Corporate Events",
    "Private Parties",
    "Baby Showers",
    "Special Occasions",
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your occasion, preferred aesthetic, venue and the overall experience you want to create.",
    },
    {
      number: "02",
      title: "Conceptualize",
      description:
        "Our team develops a visual direction, theme and styling concept tailored to your event.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We bring together colours, florals, furniture, lighting and decorative details into one cohesive design.",
    },
    {
      number: "04",
      title: "Transform",
      description:
        "Our team executes the styling on-site and transforms your venue into the experience you imagined.",
    },
  ];

  return (
    <main className="bg-white text-[#111111]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[650px] md:min-h-[720px] flex items-center overflow-hidden">

        <Image
          src="/event-gallery-2.jpeg"
          alt="Event decor and styling"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28">

          <div className="max-w-3xl">

            <p className="text-[#E4D078] tracking-[0.35em] uppercase text-xs sm:text-sm font-medium mb-6">
              Our Services
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-7">
              Event Décor
              <br />
              <span className="text-[#E4D078]">
                &amp; Styling
              </span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              We transform ordinary spaces into extraordinary settings
              through thoughtful concepts, beautiful details and
              unforgettable event styling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#E4D078] text-black px-7 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-white transition-all duration-300"
              >
                Design My Event
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#our-services"
                className="inline-flex items-center justify-center gap-3 border border-white/70 text-white px-7 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Services
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
            Designed With Intention
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
            Spaces That Tell
            <br />
            Your Story
          </h2>

          <p className="text-gray-600 leading-8 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            Great event décor is more than beautiful decoration. It is about
            creating an atmosphere that reflects the occasion, complements
            the venue and gives your guests something to remember.
          </p>

          <p className="text-gray-600 leading-8 text-base sm:text-lg max-w-3xl mx-auto">
            From intimate celebrations to large-scale events, we combine
            creativity and attention to detail to create spaces that feel
            intentional, sophisticated and uniquely yours.
          </p>

        </div>


        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {[
            "Personalized design concepts",
            "Complete venue styling",
            "Professional décor execution",
            "Attention to every detail",
          ].map((item, index) => (

            <div
              key={index}
              className="border border-gray-200 p-6 text-center"
            >

              <CheckCircle2
                size={21}
                className="text-[#B88A25] mx-auto mb-4"
              />

              <p className="text-gray-700 text-sm leading-6">
                {item}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section
        id="our-services"
        className="bg-[#F8F7F3] py-20 sm:py-24 md:py-28 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
              What We Create
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Every Detail, Beautifully Considered
            </h2>

            <p className="text-gray-600 leading-7">
              From the overall concept to the smallest decorative detail,
              we make sure every element works together beautifully.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 gap-6">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-7 sm:p-9 hover:shadow-lg transition-all duration-300"
                >

                  <div className="w-12 h-12 flex items-center justify-center bg-[#F8F3DD] mb-6">

                    <Icon
                      size={22}
                      className="text-[#B88A25]"
                    />

                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm sm:text-base">
                    {service.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          DECOR ELEMENTS
      ===================================================== */}
      <section className="py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>

              <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
                The Details Matter
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                From Concept
                <br />
                To Final Detail
              </h2>

              <p className="text-gray-600 leading-7 max-w-xl">
                Every event has its own personality. Our styling approach
                brings together colour, texture, lighting, florals, furniture
                and decorative elements to create a cohesive environment
                designed specifically for your occasion.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">

              {decorElements.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-gray-200 pb-4"
                >

                  <CheckCircle2
                    size={17}
                    className="text-[#B88A25] flex-shrink-0"
                  />

                  <span className="text-gray-700 text-sm sm:text-base">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          EVENT TYPES
      ===================================================== */}
      <section className="bg-[#111111] text-white py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-[#E4D078] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
              Every Occasion
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Décor For Every Celebration
            </h2>

            <p className="text-white/65 leading-7">
              Whether you are celebrating a milestone, hosting a wedding or
              planning a private gathering, we create styling that fits the
              occasion.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15">

            {eventTypes.map((event, index) => (

              <div
                key={index}
                className="border-r border-b border-white/15 p-7 sm:p-8 hover:bg-white/5 transition-all duration-300"
              >

                <span className="text-[#E4D078] text-xs tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-serif text-lg sm:text-xl mt-4">
                  {event}
                </h3>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
              Our Approach
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              From Inspiration to Installation
            </h2>

            <p className="text-gray-600 leading-7">
              Our process keeps the creative experience exciting while
              ensuring every practical detail is taken care of.
            </p>

          </div>


          <div className="grid md:grid-cols-4 gap-8">

            {process.map((step, index) => (

              <div
                key={index}
                className="relative"
              >

                <div className="text-[#D7BE65] font-serif text-4xl mb-5">
                  {step.number}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-7">
                  {step.description}
                </p>

                {index !== process.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[70%] w-[55%] border-t border-gray-200"></div>
                )}

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#F8F3DD] py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-6">
            Bring Your Vision To Life
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-7">
            Let&apos;s Create a
            <br />
            Beautiful Setting
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-7 max-w-2xl mx-auto mb-10">
            Tell us about your event, your style and your vision. Our team
            will take care of the rest.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#111111] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#E4D078] hover:text-black transition-all duration-300"
          >
            Get in Touch
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>


      {/* =====================================================
          OTHER SERVICES
      ===================================================== */}
      <section className="py-16 sm:py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">

            <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-4">
              Explore More
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl">
              Complete Event Solutions
            </h2>

          </div>


          <div className="flex flex-wrap justify-center gap-3">

            <Link
              href="/services/event-planning-management"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all"
            >
              Event Planning &amp; Management
            </Link>

            <Link
              href="/services/catering-bar-services"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all"
            >
              Catering &amp; Bar Services
            </Link>

            <Link
              href="/services/venue-booking"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all"
            >
              Venue Booking
            </Link>

            <Link
              href="/services/entertainment-experiences"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all"
            >
              Entertainment &amp; Experiences
            </Link>

            <Link
              href="/services/on-ground-event-management"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all"
            >
              On-Ground Event Management
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
