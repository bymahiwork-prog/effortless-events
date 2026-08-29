"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowLeft } from "lucide-react";

export default function FarmhouseDetailsPage({ params }) {
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("9:30 am");
  const [checkOutTime, setCheckOutTime] = useState("9:30 pm");

  const [expandedSections, setExpandedSections] = useState({
    food: true,
    alcohol: true,
    furniture: true,
    restrooms: true,
    av: true,
    parking: true,
    events: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((previous) => ({
      ...previous,
      [section]: !previous[section],
    }));
  };

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        setLoading(true);
        setError("");

        const id = params?.id;

        if (!id) {
          throw new Error("Farmhouse ID is missing.");
        }

        const response = await fetch(`/api/venues/${id}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch farmhouse: ${response.status}`
          );
        }

        const data = await response.json();

        /*
         * Supports common API response formats:
         *
         * {
         *   success: true,
         *   product: {...}
         * }
         *
         * or
         *
         * {
         *   success: true,
         *   venue: {...}
         * }
         *
         * or directly:
         *
         * {
         *   id: 144,
         *   product_name: "..."
         * }
         */

        const product =
          data?.product ||
          data?.venue ||
          data?.data ||
          data;

        if (!product || !product.id) {
          throw new Error("Farmhouse not found.");
        }

        setVenue(product);
      } catch (fetchError) {
        console.error("Error fetching farmhouse:", fetchError);

        setVenue(null);

        setError(
          "We are unable to load this farmhouse right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVenue();
  }, [params]);

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select your preferred date.");
      return;
    }

    alert(
      `Booking enquiry for ${
        venue?.product_name || "this farmhouse"
      }\n\nDate: ${selectedDate}\nCheck-in: ${checkInTime}\nCheck-out: ${checkOutTime}`
    );
  };

  /*
   * ADMIN PANEL DATA
   *
   * These values come directly from the API response.
   */

  const venueName =
    venue?.product_name ||
    venue?.name ||
    "Farmhouse";

  const venueLocation =
    venue?.product_location ||
    venue?.location ||
    "Delhi NCR";

  const venueDescription =
    venue?.product_detail ||
    venue?.description ||
    "Discover this beautiful farmhouse with Effortless Events.";

  const venuePrice =
    venue?.product_price ||
    venue?.price ||
    "";

  /*
   * IMAGE HANDLING
   */

  const primaryImage =
    venue?.image ||
    venue?.product_image ||
    venue?.image_url ||
    venue?.product_image_url ||
    venue?.images?.[0] ||
    "https://placehold.co/1200x800/17110B/C9A34A?text=Farmhouse";

  /*
   * TIME OPTIONS
   */

  const timeOptions = [
    "12:00 am",
    "12:30 am",
    "1:00 am",
    "1:30 am",
    "2:00 am",
    "2:30 am",
    "3:00 am",
    "3:30 am",
    "4:00 am",
    "4:30 am",
    "5:00 am",
    "5:30 am",
    "6:00 am",
    "6:30 am",
    "7:00 am",
    "7:30 am",
    "8:00 am",
    "8:30 am",
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "1:00 pm",
    "1:30 pm",
    "2:00 pm",
    "2:30 pm",
    "3:00 pm",
    "3:30 pm",
    "4:00 pm",
    "4:30 pm",
    "5:00 pm",
    "5:30 pm",
    "6:00 pm",
    "6:30 pm",
    "7:00 pm",
    "7:30 pm",
    "8:00 pm",
    "8:30 pm",
    "9:00 pm",
    "9:30 pm",
    "10:00 pm",
    "10:30 pm",
    "11:00 pm",
    "11:30 pm",
  ];

  /*
   * LOADING
   */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0F0803] text-white flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-12 h-12 border-4 border-[#2A2118] border-t-[#C9A34A] rounded-full animate-spin mx-auto mb-6" />

          <h1 className="text-2xl md:text-3xl font-serif">
            Loading Farmhouse...
          </h1>

          <p className="text-[#B8AFA5] mt-3">
            Please wait while we load the farmhouse details.
          </p>
        </div>
      </main>
    );
  }

  /*
   * ERROR
   */

  if (error || !venue) {
    return (
      <main className="min-h-screen bg-[#0F0803] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#C9A34A] mb-4">
            Farmhouse
          </p>

          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            Farmhouse not found
          </h1>

          <p className="text-[#B8AFA5] mb-8">
            {error ||
              "We are unable to load this farmhouse right now."}
          </p>

          <Link
            href="/farmhouses"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#C9A34A] text-[#0F0803] rounded-md font-medium hover:bg-[#D8B25B] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Farmhouses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#0F0803] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">

          <p className="text-sm uppercase tracking-[0.2em] text-[#C9A34A] mb-4">
            Farmhouse
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight">
            {venueName}
          </h1>

          <p className="text-[#D4C7B8] text-base md:text-lg mt-5">
            {venueLocation}
          </p>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="lg:col-span-2">

            {/* IMAGE */}

            <div className="w-full h-[320px] sm:h-[450px] lg:h-[560px] rounded-2xl overflow-hidden bg-[#17110B] mb-8">

              <img
                src={primaryImage}
                alt={venueName}
                className="w-full h-full object-cover"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://placehold.co/1200x800/17110B/C9A34A?text=Image+Not+Available";
                }}
              />

            </div>

            {/* ABOUT */}

            <div className="mb-10">

              <h2 className="text-3xl md:text-4xl font-serif mb-5">
                About {venueName}
              </h2>

              <p className="text-gray-600 text-base leading-8 whitespace-pre-line">
                {venueDescription}
              </p>

            </div>

            {/* BASIC DETAILS */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">

              <div className="border border-gray-200 rounded-xl p-5">

                <p className="text-sm text-gray-500 mb-2">
                  Location
                </p>

                <p className="text-black font-medium">
                  {venueLocation}
                </p>

              </div>

              <div className="border border-gray-200 rounded-xl p-5">

                <p className="text-sm text-gray-500 mb-2">
                  Guest Rating
                </p>

                <p className="text-black font-medium">
                  ★ {venue?.rating || "5.0"}
                </p>

              </div>

              <div className="border border-gray-200 rounded-xl p-5">

                <p className="text-sm text-gray-500 mb-2">
                  Category
                </p>

                <p className="text-black font-medium">
                  Farmhouse
                </p>

              </div>

            </div>

            {/* =================================================
                AMENITIES / INFORMATION
            ================================================== */}

            <div className="space-y-3">

              {/* FOOD */}

              <div className="border border-gray-200 rounded-xl">

                <button
                  type="button"
                  onClick={() => toggleSection("food")}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                >

                  <span className="font-medium text-gray-800">
                    Food and Beverage
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSections.food
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {expandedSections.food && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-7">
                    Full catering services are available with a wide range
                    of local and international cuisine options. Catering
                    arrangements can be planned according to the event type,
                    guest count, menu preferences, and specific requirements
                    of the celebration.
                  </div>
                )}

              </div>

              {/* ALCOHOL */}

              <div className="border border-gray-200 rounded-xl">

                <button
                  type="button"
                  onClick={() => toggleSection("alcohol")}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                >

                  <span className="font-medium text-gray-800">
                    Alcoholic and Beverage
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSections.alcohol
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {expandedSections.alcohol && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-7">
                    Alcoholic and beverage services can be arranged
                    according to the venue&apos;s policies and event
                    requirements. Beverage options may include wines,
                    beers, spirits, mocktails, soft drinks, and other
                    refreshments.
                  </div>
                )}

              </div>

              {/* FURNITURE */}

              <div className="border border-gray-200 rounded-xl">

                <button
                  type="button"
                  onClick={() => toggleSection("furniture")}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                >

                  <span className="font-medium text-gray-800">
                    Furniture
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSections.furniture
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {expandedSections.furniture && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-7">
                    Furniture arrangements are available for different
                    types of events and celebrations. Tables, chairs,
                    seating arrangements, and other required furniture
                    can be organized according to the event layout,
                    guest count, dining requirements, and overall setup.
                  </div>
                )}

              </div>

              {/* RESTROOMS */}

              <div className="border border-gray-200 rounded-xl">

                <button
                  type="button"
                  onClick={() => toggleSection("restrooms")}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                >

                  <span className="font-medium text-gray-800">
                    Restrooms
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSections.restrooms
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {expandedSections.restrooms && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-7">
                    Clean and convenient restroom facilities are available
                    for guests throughout the event. Facilities are
                    designed to support gatherings of different sizes
                    and provide guests with easy access during weddings,
                    parties, celebrations, corporate events, and other
                    functions.
                  </div>
                )}

              </div>

              {/* AV */}

              <div className="border border-gray-200 rounded-xl">

                <button
                  type="button"
                  onClick={() => toggleSection("av")}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                >

                  <span className="font-medium text-gray-800">
                    AV and Music
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSections.av
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {expandedSections.av && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-7">
                    Audio-visual and music facilities can be arranged for
                    different event requirements. Depending on the venue
                    and event, facilities may include professional sound
                    systems, microphones, music equipment, lighting, and
                    other audio-visual requirements.
                  </div>
                )}

              </div>

              {/* PARKING */}

              <div className="border border-gray-200 rounded-xl">

                <button
                  type="button"
                  onClick={() => toggleSection("parking")}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                >

                  <span className="font-medium text-gray-800">
                    Parking
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSections.parking
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {expandedSections.parking && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-7">
                    Ample parking space is available for guests attending
                    events at the venue. Parking arrangements are designed
                    to make arrival and departure more convenient,
                    particularly during larger weddings, celebrations,
                    and private events.
                  </div>
                )}

              </div>

              {/* EVENT RULES */}

              <div className="border border-gray-200 rounded-xl">

                <button
                  type="button"
                  onClick={() => toggleSection("events")}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                >

                  <span className="font-medium text-gray-800">
                    Events Rules
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSections.events
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {expandedSections.events && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-7">
                    Event guidelines and venue policies are followed to
                    ensure a smooth, safe, and enjoyable experience for
                    all guests. Specific arrangements relating to event
                    timings, setup, music, catering, alcohol, decorations,
                    parking, guest capacity, and other venue requirements
                    can be discussed with the venue team before booking.
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT SIDE - BOOKING
          ================================================== */}

          <div className="lg:col-span-1">

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 md:p-6 sticky top-6">

              {/* PRICE */}

              <div className="mb-6">

                <p className="text-sm text-gray-500 mb-2">
                  Starting from
                </p>

                <div className="text-2xl md:text-3xl font-bold text-gray-900">

                  {venuePrice
                    ? String(venuePrice).startsWith("₹")
                      ? venuePrice
                      : `₹${venuePrice}`
                    : "Price on request"}

                  {venuePrice && (
                    <span className="text-base font-normal ml-1">
                      onwards
                    </span>
                  )}

                </div>

              </div>

              {/* DISCOUNT */}

              <div className="border-t border-gray-200 pt-5 mb-6">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-gray-600">
                    2+ days discount
                  </span>

                  <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    10% off
                  </span>

                </div>

              </div>

              {/* BOOKING */}

              <div className="space-y-4">

                {/* DATE */}

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                    <span className="text-gray-400 font-normal">
                      {" "}
                      (required)
                    </span>
                  </label>

                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(event) =>
                      setSelectedDate(event.target.value)
                    }
                    min={
                      new Date()
                        .toISOString()
                        .split("T")[0]
                    }
                    className="w-full text-black px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A34A] focus:border-[#C9A34A] bg-white"
                  />

                </div>

                {/* CHECK IN / CHECK OUT */}

                <div className="grid grid-cols-2 gap-3">

                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in
                    </label>

                    <select
                      value={checkInTime}
                      onChange={(event) =>
                        setCheckInTime(event.target.value)
                      }
                      className="w-full text-black px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A34A] focus:border-[#C9A34A] bg-white"
                    >
                      {timeOptions.map((time) => (
                        <option
                          key={`check-in-${time}`}
                          value={time}
                        >
                          {time}
                        </option>
                      ))}
                    </select>

                  </div>

                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out
                    </label>

                    <select
                      value={checkOutTime}
                      onChange={(event) =>
                        setCheckOutTime(event.target.value)
                      }
                      className="w-full text-black px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A34A] focus:border-[#C9A34A] bg-white"
                    >
                      {timeOptions.map((time) => (
                        <option
                          key={`check-out-${time}`}
                          value={time}
                        >
                          {time}
                        </option>
                      ))}
                    </select>

                  </div>

                </div>

              </div>

              {/* BUTTON */}

              <button
                type="button"
                onClick={handleBooking}
                className="w-full mt-6 bg-[#C9A34A] text-[#0F0803] py-3.5 px-4 rounded-md font-medium hover:bg-[#D8B25B] transition-all duration-200"
              >
                Enquire About This Farmhouse
              </button>

              {/* RESPONSE */}

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-5">

                <span className="w-2 h-2 rounded-full bg-green-500" />

                Our Agent typically responds within 12 hr

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="bg-[#0F0803] text-white">

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 text-center">

          <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] mb-4">
            Plan Your Celebration
          </p>

          <h2 className="text-3xl md:text-5xl font-serif mb-5">
            Ready to celebrate at {venueName}?
          </h2>

          <p className="text-[#B8AFA5] max-w-2xl mx-auto mb-8">
            Share your preferred date and event requirements with
            Effortless Events and our team will help you take the next
            step.
          </p>

          <Link
            href="/#get-in-touch"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#C9A34A] text-[#0F0803] font-medium rounded-md hover:bg-[#D8B25B] transition"
          >
            Get in Touch
          </Link>

        </div>

      </section>

    </main>
  );
}
