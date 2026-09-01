"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Music,
  Mic2,
  PartyPopper,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/Navbar";

export default function EntertainmentExperiences() {
  const services = [
    {
      title: "DJs & Music",
      description:
        "Set the perfect mood with professional DJs, curated playlists and music experiences designed around your celebration.",
      icon: Music,
    },
    {
      title: "Live Artists & Performers",
      description:
        "Add energy to your event with singers, live bands, dancers and talented performers selected to suit your occasion.",
      icon: Mic2,
    },
    {
      title: "Interactive Experiences",
      description:
        "Give your guests something to participate in with engaging activities, games and interactive entertainment.",
      icon: PartyPopper,
    },
    {
      title: "Special Experiences",
      description:
        "From unique performances to customized entertainment concepts, we create moments your guests will remember.",
      icon: Sparkles,
    },
  ];

  const entertainmentOptions = [
    "Professional DJs",
    "Live Bands",
    "Singers & Vocalists",
    "Dance Performances",
    "Live Instrumentalists",
    "MCs & Hosts",
    "Interactive Games",
    "Guest Activities",
    "Photo Experiences",
    "Special Performances",
    "Kids Entertainment",
    "Custom Experiences",
  ];

  const eventTypes = [
    "Birthday Celebrations",
    "Weddings",
    "Pre-Wedding Events",
    "Corporate Events",
    "Private Parties",
    "Anniversary Celebrations",
    "Family Gatherings",
    "Special Occasions",
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "We learn about your event, audience, venue, preferred atmosphere and the kind of experience you want to create.",
    },
    {
      number: "02",
      title: "Curate",
      description:
        "Our team recommends entertainment options that fit your event style, guest profile and overall budget.",
    },
    {
      number: "03",
      title: "Coordinate",
      description:
        "We manage artists, performers, schedules, technical requirements and event-day coordination.",
    },
    {
      number: "04",
      title: "Experience",
      description:
        "Everything comes together on the day so your guests can enjoy a seamless and engaging entertainment experience.",
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
          src="/event-gallery-5.jpeg"
          alt="Entertainment and event experiences"
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
              Entertainment
              <br />
              <span className="text-[#E4D078]">
                &amp; Experiences
              </span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Give your guests something worth remembering with entertainment
              and experiences designed around the energy of your event.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#E4D078] text-black px-7 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-white transition-all duration-300"
              >
                Plan Entertainment
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
            Create The Energy
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
            More Than Entertainment.
            <br />
            It&apos;s An Experience.
          </h2>

          <p className="text-gray-600 leading-8 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            The right entertainment can completely transform the atmosphere
            of an event. Music, performances and interactive experiences give
            guests moments they can connect with and remember.
          </p>

          <p className="text-gray-600 leading-8 text-base sm:text-lg max-w-3xl mx-auto">
            We curate entertainment around your celebration, ensuring every
            performance and experience feels like a natural part of the event.
          </p>

        </div>


        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {[
            "Entertainment tailored to your event",
            "Professional artists & performers",
            "Complete entertainment coordination",
            "Memorable guest experiences",
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
              Bring Your Event To Life
            </h2>

            <p className="text-gray-600 leading-7">
              From music and live performances to interactive experiences,
              we help create an atmosphere your guests will enjoy.
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
          ENTERTAINMENT OPTIONS
      ===================================================== */}
      <section className="py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>

              <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
                Your Event. Your Energy.
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                Entertainment
                <br />
                For Every Mood
              </h2>

              <p className="text-gray-600 leading-7 max-w-xl">
                Whether you want an energetic dance floor, an elegant live
                performance or something completely unexpected, we help
                curate entertainment that matches the atmosphere you want
                your guests to experience.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">

              {entertainmentOptions.map((item, index) => (

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
              Experiences For Every Celebration
            </h2>

            <p className="text-white/65 leading-7">
              We adapt the entertainment experience around your event,
              audience and desired atmosphere.
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
              Our Process
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              From Idea To Experience
            </h2>

            <p className="text-gray-600 leading-7">
              We make entertainment planning simple while ensuring every
              detail is coordinated professionally.
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
            Make It Memorable
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-7">
            Give Your Guests
            <br />
            Something To Remember
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-7 max-w-2xl mx-auto mb-10">
            Tell us about your event and the atmosphere you want to create.
            We&apos;ll help you build the entertainment experience around it.
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
              href="/services/venue-booking"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all"
            >
              Venue Booking
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
