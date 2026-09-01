"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Users,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/Navbar";

export default function EventPlanningManagement() {
  const services = [
    {
      title: "Complete Event Planning",
      description:
        "From the initial concept to the final execution, we plan every element of your event with precision and attention to detail.",
      icon: CalendarDays,
    },
    {
      title: "Budget & Timeline Management",
      description:
        "We help you establish realistic budgets and timelines while ensuring every milestone stays on track.",
      icon: ClipboardCheck,
    },
    {
      title: "Vendor Coordination",
      description:
        "Our team coordinates with caterers, decorators, entertainers, photographers and every other event partner.",
      icon: Users,
    },
    {
      title: "Event-Day Execution",
      description:
        "On the big day, our team manages the moving parts so you can relax and enjoy the occasion with your guests.",
      icon: Sparkles,
    },
  ];

  const eventTypes = [
    "Birthday Celebrations",
    "Weddings & Pre-Wedding Events",
    "Corporate Events",
    "Private Parties",
    "Anniversary Celebrations",
    "Family Gatherings",
    "Social Celebrations",
    "Custom Events",
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "We begin by understanding your vision, event type, guest count, preferences and expectations.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Our team develops the event plan, timeline, budget and vendor requirements around your objectives.",
    },
    {
      number: "03",
      title: "Coordinate",
      description:
        "We bring together venues, vendors, décor, catering, entertainment and logistics into one seamless plan.",
    },
    {
      number: "04",
      title: "Execute",
      description:
        "Our on-ground team manages the event from setup to wrap-up, ensuring everything runs smoothly.",
    },
  ];

  const thingsWeManage = [
    "Venue Selection",
    "Event Concept",
    "Budget Planning",
    "Guest Management",
    "Vendor Coordination",
    "Event Timeline",
    "Décor Coordination",
    "Catering Coordination",
    "Entertainment",
    "Logistics",
    "Event Setup",
    "On-Ground Management",
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
          src="/event-gallery-1.jpeg"
          alt="Event planning and management"
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
              Event Planning
              <br />
              <span className="text-[#E4D078]">
                &amp; Management
              </span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              From the first idea to the final guest departure, we manage
              every detail to create seamless, memorable and beautifully
              executed events.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#E4D078] text-black px-7 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-white transition-all duration-300"
              >
                Plan Your Event
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

        <div className="max-w-6xl mx-auto">

          <div className="max-w-4xl mx-auto text-center">

            <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
              Effortless Experiences
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
              Your Vision.
              <br />
              Our Expertise.
            </h2>

            <p className="text-gray-600 leading-8 text-base sm:text-lg mb-6">
              Planning a great event involves hundreds of details. From
              finding the right venue and coordinating vendors to managing
              schedules and guest requirements, every decision contributes
              to the final experience.
            </p>

            <p className="text-gray-600 leading-8 text-base sm:text-lg">
              At Effortless Events, we take care of the details behind the
              scenes so you can focus on what matters most — enjoying the
              moment with your guests.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {[
              "End-to-end event planning",
              "Professional vendor coordination",
              "Detailed timelines and execution",
              "Dedicated event support",
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
              What We Handle
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Everything Your Event Needs
            </h2>

            <p className="text-gray-600 leading-7">
              A successful event is built on hundreds of details. Our team
              brings all those details together under one roof.
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
          WHAT WE MANAGE
      ===================================================== */}
      <section className="py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>

              <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
                Built Around You
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                Events That Feel
                <br />
                Effortlessly Yours
              </h2>

              <p className="text-gray-600 leading-7 max-w-xl">
                Whether you are hosting an intimate gathering or a large
                celebration, our approach is tailored to your event. We
                combine structured planning with creative thinking to
                deliver an experience that feels personal and intentional.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">

              {thingsWeManage.map((item, index) => (

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
          EVENTS WE MANAGE
      ===================================================== */}
      <section className="bg-[#111111] text-white py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-[#E4D078] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
              Every Occasion
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Events We Manage
            </h2>

            <p className="text-white/65 leading-7">
              From milestone celebrations to sophisticated corporate
              gatherings, our team adapts the planning experience around
              your occasion.
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
              From Idea to Execution
            </h2>

            <p className="text-gray-600 leading-7">
              Our streamlined planning process keeps your event organized,
              transparent and stress-free.
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
            Let&apos;s Create Something Special
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-7">
            Ready to Plan Your
            <br />
            Next Event?
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-7 max-w-2xl mx-auto mb-10">
            Tell us what you&apos;re planning and let our team take care
            of the details.
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
