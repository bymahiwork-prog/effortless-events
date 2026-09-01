"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Building2,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/Navbar";

export default function VenueBooking() {
  const services = [
    {
      title: "Venue Discovery",
      description:
        "We help you discover venues that match your event type, guest count, preferred location, style and requirements.",
      icon: MapPin,
    },
    {
      title: "Curated Venue Options",
      description:
        "Choose from premium farmhouses, villas, banquet halls, rooftops and other event spaces suited to your celebration.",
      icon: Building2,
    },
    {
      title: "Event-Specific Matching",
      description:
        "Whether it is a birthday, wedding, corporate event or private celebration, we help identify spaces that fit the occasion.",
      icon: CalendarDays,
    },
    {
      title: "Complete Venue Experience",
      description:
        "Beyond finding a space, we help connect your venue with the planning, décor, catering and event requirements.",
      icon: Sparkles,
    },
  ];

  const venueTypes = [
    "Luxury Farmhouses",
    "Private Villas",
    "Birthday Venues",
    "Wedding Venues",
    "Banquet Halls",
    "Rooftop Venues",
    "Corporate Venues",
    "Private Party Spaces",
    "Poolside Venues",
    "Outdoor Event Spaces",
    "Premium Celebration Venues",
    "Custom Event Spaces",
  ];

  const eventTypes = [
    "Birthday Celebrations",
    "Weddings",
    "Pre-Wedding Events",
    "Corporate Events",
    "Anniversary Celebrations",
    "Private Parties",
    "Family Gatherings",
    "Special Occasions",
  ];

  const process = [
    {
      number: "01",
      title: "Tell Us",
      description:
        "Share your event date, guest count, preferred location, event type and venue requirements with our team.",
    },
    {
      number: "02",
      title: "Shortlist",
      description:
        "We identify venue options that align with your requirements, preferences and overall event vision.",
    },
    {
      number: "03",
      title: "Explore",
      description:
        "Review the shortlisted venues and compare the spaces, facilities and experience they offer.",
    },
    {
      number: "04",
      title: "Book",
      description:
        "Once you have found the right venue, our team helps move the booking process forward smoothly.",
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
          src="/event-gallery-4.jpeg"
          alt="Premium event venue"
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
              Venue
              <br />
              <span className="text-[#E4D078]">
                Booking
              </span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Find the right space for your celebration with our curated
              collection of premium venues across Delhi NCR and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="/farms"
                className="inline-flex items-center justify-center gap-3 bg-[#E4D078] text-black px-7 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-white transition-all duration-300"
              >
                Browse Venues
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
            The Right Space Matters
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
            Find A Venue
            <br />
            That Fits Your Celebration
          </h2>

          <p className="text-gray-600 leading-8 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            The venue sets the foundation for your entire event. Location,
            capacity, ambience, facilities and layout all play a role in
            creating the right experience for you and your guests.
          </p>

          <p className="text-gray-600 leading-8 text-base sm:text-lg max-w-3xl mx-auto">
            Our venue booking service makes the discovery process simpler by
            bringing together spaces suited to different celebrations,
            budgets and event requirements.
          </p>

        </div>


        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {[
            "Curated premium venues",
            "Multiple venue categories",
            "Event-specific recommendations",
            "Simple booking assistance",
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
              What We Offer
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              A Better Way To Find Your Venue
            </h2>

            <p className="text-gray-600 leading-7">
              We make it easier to discover, compare and select spaces that
              are right for your event.
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
          VENUE TYPES
      ===================================================== */}
      <section className="py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>

              <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
                Explore Your Options
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                Spaces For
                <br />
                Every Occasion
              </h2>

              <p className="text-gray-600 leading-7 max-w-xl">
                From spacious farmhouses for birthday celebrations to elegant
                venues for weddings and professional spaces for corporate
                gatherings, our venue network is designed to give you
                options.
              </p>

              <Link
                href="/farms"
                className="inline-flex items-center gap-2 mt-8 text-[#B88A25] text-sm tracking-[0.15em] uppercase font-medium hover:gap-4 transition-all duration-300"
              >
                Explore Venues
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">

              {venueTypes.map((item, index) => (

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
              Find Your Match
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Venues For Every Celebration
            </h2>

            <p className="text-white/65 leading-7">
              Different occasions need different spaces. We help you find a
              venue that works for the experience you have in mind.
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
              How It Works
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              From Search To Booking
            </h2>

            <p className="text-gray-600 leading-7">
              A simple process designed to take the stress out of finding the
              right event space.
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
            Your Perfect Venue Awaits
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-7">
            Let&apos;s Find The
            <br />
            Right Space
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-7 max-w-2xl mx-auto mb-10">
            Tell us what you&apos;re planning and we&apos;ll help you find a
            venue that fits your celebration.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/farms"
              className="inline-flex items-center justify-center gap-3 bg-[#111111] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#E4D078] hover:text-black transition-all duration-300"
            >
              Browse Venues
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-[#111111] text-[#111111] px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#111111] hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>

          </div>

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
              href="/services/event-decor-styling"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all"
            >
              Event Décor &amp; Styling
            </Link>

            <Link
              href="/services/catering-bar-services"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all"
            >
              Catering &amp; Bar Services
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
