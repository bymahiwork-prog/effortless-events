"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  ClipboardCheck,
  Clock3,
  Headphones,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/Navbar";

export default function OnGroundEventManagement() {
  const services = [
    {
      title: "Vendor Coordination",
      description:
        "We coordinate with decorators, caterers, entertainers, photographers, venue teams and other vendors to keep everyone aligned.",
      icon: Users,
    },
    {
      title: "Setup Supervision",
      description:
        "Our team supervises the event setup and checks that décor, furniture, lighting, catering areas and guest spaces are ready on time.",
      icon: ClipboardCheck,
    },
    {
      title: "Timeline Management",
      description:
        "We keep the event moving according to plan by coordinating entries, performances, meals, activities and transitions.",
      icon: Clock3,
    },
    {
      title: "Guest Coordination",
      description:
        "From arrival and seating to directions and assistance, our team helps ensure your guests have a comfortable experience.",
      icon: Headphones,
    },
    {
      title: "Real-Time Problem Solving",
      description:
        "Unexpected situations can happen at any event. Our on-ground team responds quickly and finds practical solutions.",
      icon: ShieldCheck,
    },
    {
      title: "Complete Event-Day Support",
      description:
        "We manage the behind-the-scenes details so you can stay present, enjoy your celebration and focus on your guests.",
      icon: Sparkles,
    },
  ];

  const managementServices = [
    "Vendor Coordination",
    "Venue Coordination",
    "Décor Setup Supervision",
    "Catering Coordination",
    "Entertainment Coordination",
    "Guest Assistance",
    "Event Timeline Management",
    "Artist Coordination",
    "Entry & Exit Management",
    "Seating Coordination",
    "Activity Management",
    "Backstage Coordination",
    "Event Announcements",
    "Real-Time Troubleshooting",
    "Final Venue Handover",
    "Event-Day Supervision",
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
      title: "Brief",
      description:
        "We understand your event schedule, venue, vendors, guest requirements and the priorities that matter most.",
    },
    {
      number: "02",
      title: "Coordinate",
      description:
        "Before the event, our team connects with vendors and stakeholders to make sure everyone understands the plan.",
    },
    {
      number: "03",
      title: "Execute",
      description:
        "On event day, our team manages setup, schedules, vendors, guest requirements and the overall flow of the event.",
    },
    {
      number: "04",
      title: "Resolve",
      description:
        "If something unexpected happens, we step in quickly, coordinate the relevant teams and find a practical solution.",
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
          src="/event-gallery-6.jpeg"
          alt="On-ground event management"
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
              On-Ground
              <br />
              <span className="text-[#E4D078]">
                Event Management
              </span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              From the first guest arrival to the final farewell, our
              on-ground team manages the details, coordinates the moving
              parts and keeps your event running exactly as planned.
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

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
            Seamless Execution
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
            Your Event Is Planned.
            <br />
            Now Let Us Execute It.
          </h2>

          <p className="text-gray-600 leading-8 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            A beautifully planned event can still become stressful when
            dozens of things are happening simultaneously. Vendors need
            coordination, guests need assistance and timelines need to be
            followed.
          </p>

          <p className="text-gray-600 leading-8 text-base sm:text-lg max-w-3xl mx-auto">
            That&apos;s where our on-ground event management team comes in.
            We take responsibility for the execution of your event so you,
            your family, your team and your guests can enjoy the occasion
            without worrying about what is happening behind the scenes.
          </p>

        </div>


        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {[
            "Dedicated on-ground coordination",
            "Vendor and staff management",
            "Event timeline supervision",
            "Guest assistance and coordination",
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
              What We Manage
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Complete Control On Event Day
            </h2>

            <p className="text-gray-600 leading-7">
              Our on-ground team works behind the scenes to make sure every
              element comes together seamlessly.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-7 sm:p-8 hover:shadow-lg transition-all duration-300"
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
          MANAGEMENT DETAILS
      ===================================================== */}
      <section className="py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>

              <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
                Event-Day Services
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                Everything
                <br />
                Under Control
              </h2>

              <p className="text-gray-600 leading-7 max-w-xl">
                From the first setup check to the final venue handover, our
                team stays involved throughout the event. We coordinate the
                people, schedules and operational details that keep your
                celebration moving.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">

              {managementServices.map((item, index) => (

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
              Events We Manage
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              From Intimate Celebrations
              <br />
              To Large Events
            </h2>

            <p className="text-white/65 leading-7">
              Our on-ground management services can be tailored to different
              types of occasions, venues and event formats.
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
          WHY EFFORTLESS
      ===================================================== */}
      <section className="py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
              Why Effortless Events
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              You Enjoy The Event.
              <br />
              We Manage The Details.
            </h2>

            <p className="text-gray-600 leading-7">
              The biggest advantage of professional on-ground management is
              simple: you don&apos;t have to be the person solving problems
              at your own event.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "One Point Of Coordination",
                description:
                  "Instead of managing multiple vendors yourself, you have a dedicated team coordinating the moving parts.",
              },
              {
                title: "Real-Time Problem Solving",
                description:
                  "Events can be unpredictable. Our team is present to identify issues and address them quickly.",
              },
              {
                title: "Vendor Accountability",
                description:
                  "We coordinate with vendors and keep their deliverables aligned with the event plan.",
              },
              {
                title: "Stress-Free Execution",
                description:
                  "You get to focus on your guests and enjoy the experience rather than managing logistics.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="border border-gray-200 p-7"
              >

                <div className="text-[#D7BE65] font-serif text-3xl mb-5">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-serif text-xl mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="bg-[#F8F7F3] py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5">
              Our Process
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              From Plan To Perfect Execution
            </h2>

            <p className="text-gray-600 leading-7">
              A structured approach keeps everyone aligned and makes event
              day significantly easier for you.
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
                  <div className="hidden md:block absolute top-7 left-[70%] w-[55%] border-t border-gray-300"></div>
                )}

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          EFFORTLESS STANDARD
      ===================================================== */}
      <section className="py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-6">
            The Effortless Standard
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
            We Handle The Behind-The-Scenes
            <br />
            So You Can Be In The Moment.
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-8 max-w-3xl mx-auto">
            Every successful event has dozens of things happening that guests
            never see. The setup before arrival, vendor coordination
            backstage, timeline management and last-minute adjustments.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-8 max-w-3xl mx-auto mt-5">
            That&apos;s what we are there for.
          </p>

          <div className="mt-10 font-serif text-2xl sm:text-3xl text-[#111111] leading-relaxed">
            You experience the celebration.
            <br />
            <span className="text-[#B88A25]">
              We manage everything behind it.
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#F8F3DD] py-20 sm:py-24 md:py-28 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#B88A25] tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-6">
            Let&apos;s Make It Effortless
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-7">
            Your Event Deserves
            <br />
            To Run Effortlessly
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-7 max-w-2xl mx-auto mb-10">
            Tell us what you&apos;re planning, where it&apos;s happening and
            what you need help with. We&apos;ll take care of the execution so
            you can focus on what actually matters — enjoying your event.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#111111] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#E4D078] hover:text-black transition-all duration-300"
            >
              Get In Touch
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 border border-[#111111] text-[#111111] px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#111111] hover:text-white transition-all duration-300"
            >
              Explore Services
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
              href="/services/venue-booking"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all
            >
              Venue Booking
            </Link>

            <Link
              href="/services/entertainment-experiences"
              className="px-5 py-3 bg-[#F8F7F3] border border-gray-200 text-sm hover:border-[#B88A25] transition-all"
            >
              Entertainment &amp; Experiences
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
