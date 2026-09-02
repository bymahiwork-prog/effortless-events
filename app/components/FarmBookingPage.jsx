"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  CheckCircle,
  Utensils,
  Wine,
  Users,
  Bath,
  Music,
  Car,
  CheckCircle2,
} from "lucide-react";

export default function FarmBookingPage({ venue }) {
  const [selectedDate, setSelectedDate] = useState("");

  // DEFAULT BOOKING TIMES
  const [checkInTime, setCheckInTime] = useState("3:00 pm");
  const [checkOutTime, setCheckOutTime] = useState("10:00 am");

  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    useState(false);

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
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  /*
   * =========================================
   * BOOKING -> WHATSAPP
   * =========================================
   */

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date first.");
      return;
    }

    /*
     * Convert YYYY-MM-DD into DD-MM-YYYY
     */
    const formattedDate = selectedDate
      .split("-")
      .reverse()
      .join("-");

    /*
     * Get farmhouse name
     */
    const farmhouseName =
      venue?.product_name || "Farmhouse";

    /*
     * WhatsApp message
     */
    const message = `Hello Effortless Events,

I am interested in booking the following farmhouse.

Farmhouse: ${farmhouseName}
Date: ${formattedDate}
Check-in: ${checkInTime}
Check-out: ${checkOutTime}

Please confirm the availability and booking details.

Thank you.`;

    /*
     * Encode WhatsApp message
     */
    const whatsappUrl = `https://wa.me/917838008069?text=${encodeURIComponent(
      message
    )}`;

    /*
     * Open WhatsApp
     */
    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /*
   * =========================================
   * IF VENUE DOES NOT EXIST
   * =========================================
   */

  if (!venue) {
    return null;
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* ========================================= */}
          {/* LEFT COLUMN */}
          {/* ========================================= */}

          <div className="lg:col-span-2 space-y-6">

            {/* ========================================= */}
            {/* HEADER */}
            {/* ========================================= */}

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-black mb-4">
                About {venue?.product_name || "Venue"}
              </h1>

              <div>
                <p
                  className={`text-gray-600 text-sm leading-relaxed mb-4 ${
                    !isDescriptionExpanded
                      ? "line-clamp-4"
                      : ""
                  }`}
                >
                  {venue?.product_detail ||
                    "Discover this beautiful venue with Effortless Events."}
                </p>

                {venue?.product_detail &&
                  venue.product_detail.length > 250 && (
                    <button
                      type="button"
                      onClick={() =>
                        setIsDescriptionExpanded(
                          (prev) => !prev
                        )
                      }
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                    >
                      {isDescriptionExpanded
                        ? "Read less"
                        : "Read more"}
                    </button>
                  )}
              </div>
            </div>

            {/* ========================================= */}
            {/* AMENITIES */}
            {/* ========================================= */}

            <div className="space-y-3 text-black">

              {/* ========================================= */}
              {/* FOOD AND BEVERAGE */}
              {/* ========================================= */}

              <div className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  onClick={() => toggleSection("food")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Utensils className="w-5 h-5" />

                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Food and Beverage
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.food
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {expandedSections.food && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      Full catering services are available with
                      a wide range of local and international
                      cuisine options. Catering arrangements can
                      be planned according to the event type,
                      guest count, menu preferences, and specific
                      requirements of the celebration. From
                      intimate gatherings to larger weddings and
                      social events, food and beverage services
                      can be coordinated to provide guests with a
                      comfortable and enjoyable dining
                      experience.
                    </p>
                  </div>
                )}
              </div>

              {/* ========================================= */}
              {/* ALCOHOLIC AND BEVERAGE */}
              {/* ========================================= */}

              <div className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  onClick={() =>
                    toggleSection("alcohol")
                  }
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Wine className="w-5 h-5" />

                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Alcoholic and Beverage
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.alcohol
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {expandedSections.alcohol && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      Alcoholic and beverage services can be
                      arranged according to the venue&apos;s
                      policies and event requirements. Beverage
                      options may include wines, beers, spirits,
                      mocktails, soft drinks, and other
                      refreshments. Specific arrangements can be
                      discussed with the venue team in advance to
                      ensure that beverage service is properly
                      coordinated for the event and guest
                      requirements.
                    </p>
                  </div>
                )}
              </div>

              {/* ========================================= */}
              {/* FURNITURE */}
              {/* ========================================= */}

              <div className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  onClick={() =>
                    toggleSection("furniture")
                  }
                  className="w-full flex items-center justify-between p-2 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" />

                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Furniture
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.furniture
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {expandedSections.furniture && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      Furniture arrangements are available for
                      different types of events and celebrations.
                      Tables, chairs, seating arrangements, and
                      other required furniture can be organized
                      according to the event layout, guest count,
                      dining requirements, and overall setup. The
                      arrangement can be planned to support
                      weddings, parties, corporate gatherings,
                      private functions, and other occasions.
                    </p>
                  </div>
                )}
              </div>

              {/* ========================================= */}
              {/* RESTROOMS */}
              {/* ========================================= */}

              <div className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  onClick={() =>
                    toggleSection("restrooms")
                  }
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Bath className="w-5 h-5" />

                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Restrooms
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.restrooms
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {expandedSections.restrooms && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      Clean and convenient restroom facilities
                      are available for guests throughout the
                      event. The facilities are designed to
                      support gatherings of different sizes and
                      provide guests with easy access during
                      weddings, parties, celebrations, corporate
                      events, and other functions. Accessibility
                      considerations can also be discussed
                      depending on the venue and event
                      requirements.
                    </p>
                  </div>
                )}
              </div>

              {/* ========================================= */}
              {/* AV AND MUSIC */}
              {/* ========================================= */}

              <div className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  onClick={() => toggleSection("av")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Music className="w-5 h-5" />

                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      AV and Music
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.av
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {expandedSections.av && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      Audio-visual and music facilities can be
                      arranged for different event requirements.
                      Depending on the venue and event,
                      facilities may include professional sound
                      systems, microphones, music equipment,
                      lighting, and other audio-visual
                      requirements. These arrangements can
                      support weddings, parties, corporate
                      presentations, celebrations, and other
                      special occasions.
                    </p>
                  </div>
                )}
              </div>

              {/* ========================================= */}
              {/* PARKING */}
              {/* ========================================= */}

              <div className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  onClick={() => toggleSection("parking")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5" />

                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Parking
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.parking
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {expandedSections.parking && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      Ample parking space is available for guests
                      attending events at the venue. Parking
                      arrangements are designed to make arrival
                      and departure more convenient for guests,
                      particularly during larger weddings,
                      celebrations, and private events. Valet or
                      additional parking assistance may be
                      available depending on the venue and event
                      requirements.
                    </p>
                  </div>
                )}
              </div>

              {/* ========================================= */}
              {/* EVENTS RULES */}
              {/* ========================================= */}

              <div className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  onClick={() => toggleSection("events")}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />

                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Events Rules
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.events
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {expandedSections.events && (
                  <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      Event guidelines and venue policies are
                      followed to ensure a smooth, safe, and
                      enjoyable experience for all guests.
                      Specific arrangements relating to event
                      timings, setup, music, catering, alcohol,
                      decorations, parking, guest capacity, and
                      other venue requirements can be discussed
                      with the venue team before booking. Guests
                      and event organizers are expected to follow
                      the applicable venue policies throughout the
                      event.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN - BOOKING */}
          {/* ========================================= */}

          <div className="lg:col-span-1">

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 sm:p-4 lg:p-6 sticky top-4">

              {/* ========================================= */}
              {/* PRICE */}
              {/* ========================================= */}

              <div className="mb-4 sm:mb-6">

                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">

                  {venue?.product_price
                    ? String(
                        venue.product_price
                      ).startsWith("₹")
                      ? venue.product_price
                      : `₹${venue.product_price}`
                    : "Price on request"}

                </div>

                <div className="text-xs sm:text-sm text-[#E4D078]">
                  onwards
                </div>

              </div>

              {/* ========================================= */}
              {/* DISCOUNT */}
              {/* ========================================= */}

              <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-4 sm:mb-6">

                <div className="flex justify-between items-center">

                  <span className="text-xs sm:text-sm text-gray-600">
                    2+ days discount
                  </span>

                  <span className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    10% off
                  </span>

                </div>

              </div>

              {/* ========================================= */}
              {/* DATE + CHECK-IN + CHECK-OUT */}
              {/* ========================================= */}

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">

                {/* ========================================= */}
                {/* DATE */}
                {/* ========================================= */}

                <div>

                  <label className="block text-xs sm:text-sm text-black mb-2 font-medium">
                    Date{" "}
                    <span className="text-gray-400 font-normal">
                      (required)
                    </span>
                  </label>

                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) =>
                      setSelectedDate(e.target.value)
                    }
                    min={
                      new Date()
                        .toISOString()
                        .split("T")[0]
                    }
                    className="w-full text-black px-2 sm:px-3 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm lg:text-base bg-white cursor-pointer transition-all duration-200 hover:border-gray-400"
                  />

                </div>

                {/* ========================================= */}
                {/* CHECK-IN / CHECK-OUT */}
                {/* ========================================= */}

                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-black">

                  {/* ========================================= */}
                  {/* CHECK-IN */}
                  {/* ========================================= */}

                  <div>

                    <label className="block text-xs sm:text-sm text-gray-700 mb-2 font-medium">
                      Check-in
                    </label>

                    <select
                      value={checkInTime}
                      onChange={(e) =>
                        setCheckInTime(e.target.value)
                      }
                      className="w-full px-2 sm:px-3 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm lg:text-base appearance-none bg-white cursor-pointer transition-all duration-200 hover:border-gray-400"
                    >

                      <option value="12:00 am">
                        12:00 am
                      </option>

                      <option value="12:30 am">
                        12:30 am
                      </option>

                      <option value="1:00 am">
                        1:00 am
                      </option>

                      <option value="1:30 am">
                        1:30 am
                      </option>

                      <option value="2:00 am">
                        2:00 am
                      </option>

                      <option value="2:30 am">
                        2:30 am
                      </option>

                      <option value="3:00 am">
                        3:00 am
                      </option>

                      <option value="3:30 am">
                        3:30 am
                      </option>

                      <option value="4:00 am">
                        4:00 am
                      </option>

                      <option value="4:30 am">
                        4:30 am
                      </option>

                      <option value="5:00 am">
                        5:00 am
                      </option>

                      <option value="5:30 am">
                        5:30 am
                      </option>

                      <option value="6:00 am">
                        6:00 am
                      </option>

                      <option value="6:30 am">
                        6:30 am
                      </option>

                      <option value="7:00 am">
                        7:00 am
                      </option>

                      <option value="7:30 am">
                        7:30 am
                      </option>

                      <option value="8:00 am">
                        8:00 am
                      </option>

                      <option value="8:30 am">
                        8:30 am
                      </option>

                      <option value="9:00 am">
                        9:00 am
                      </option>

                      <option value="9:30 am">
                        9:30 am
                      </option>

                      <option value="10:00 am">
                        10:00 am
                      </option>

                      <option value="10:30 am">
                        10:30 am
                      </option>

                      <option value="11:00 am">
                        11:00 am
                      </option>

                      <option value="11:30 am">
                        11:30 am
                      </option>

                      <option value="12:00 pm">
                        12:00 pm
                      </option>

                      <option value="12:30 pm">
                        12:30 pm
                      </option>

                      <option value="1:00 pm">
                        1:00 pm
                      </option>

                      <option value="1:30 pm">
                        1:30 pm
                      </option>

                      <option value="2:00 pm">
                        2:00 pm
                      </option>

                      <option value="2:30 pm">
                        2:30 pm
                      </option>

                      <option value="3:00 pm">
                        3:00 pm
                      </option>

                      <option value="3:30 pm">
                        3:30 pm
                      </option>

                      <option value="4:00 pm">
                        4:00 pm
                      </option>

                      <option value="4:30 pm">
                        4:30 pm
                      </option>

                      <option value="5:00 pm">
                        5:00 pm
                      </option>

                      <option value="5:30 pm">
                        5:30 pm
                      </option>

                      <option value="6:00 pm">
                        6:00 pm
                      </option>

                      <option value="6:30 pm">
                        6:30 pm
                      </option>

                      <option value="7:00 pm">
                        7:00 pm
                      </option>

                      <option value="7:30 pm">
                        7:30 pm
                      </option>

                      <option value="8:00 pm">
                        8:00 pm
                      </option>

                      <option value="8:30 pm">
                        8:30 pm
                      </option>

                      <option value="9:00 pm">
                        9:00 pm
                      </option>

                      <option value="9:30 pm">
                        9:30 pm
                      </option>

                      <option value="10:00 pm">
                        10:00 pm
                      </option>

                      <option value="10:30 pm">
                        10:30 pm
                      </option>

                      <option value="11:00 pm">
                        11:00 pm
                      </option>

                      <option value="11:30 pm">
                        11:30 pm
                      </option>

                    </select>

                  </div>

                  {/* ========================================= */}
                  {/* CHECK-OUT */}
                  {/* ========================================= */}

                  <div>

                    <label className="block text-xs sm:text-sm text-gray-700 mb-2 font-medium">
                      Check-out
                    </label>

                    <select
                      value={checkOutTime}
                      onChange={(e) =>
                        setCheckOutTime(e.target.value)
                      }
                      className="w-full px-2 sm:px-3 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm lg:text-base appearance-none bg-white cursor-pointer transition-all duration-200 hover:border-gray-400"
                    >

                      <option value="12:00 am">
                        12:00 am
                      </option>

                      <option value="12:30 am">
                        12:30 am
                      </option>

                      <option value="1:00 am">
                        1:00 am
                      </option>

                      <option value="1:30 am">
                        1:30 am
                      </option>

                      <option value="2:00 am">
                        2:00 am
                      </option>

                      <option value="2:30 am">
                        2:30 am
                      </option>

                      <option value="3:00 am">
                        3:00 am
                      </option>

                      <option value="3:30 am">
                        3:30 am
                      </option>

                      <option value="4:00 am">
                        4:00 am
                      </option>

                      <option value="4:30 am">
                        4:30 am
                      </option>

                      <option value="5:00 am">
                        5:00 am
                      </option>

                      <option value="5:30 am">
                        5:30 am
                      </option>

                      <option value="6:00 am">
                        6:00 am
                      </option>

                      <option value="6:30 am">
                        6:30 am
                      </option>

                      <option value="7:00 am">
                        7:00 am
                      </option>

                      <option value="7:30 am">
                        7:30 am
                      </option>

                      <option value="8:00 am">
                        8:00 am
                      </option>

                      <option value="8:30 am">
                        8:30 am
                      </option>

                      <option value="9:00 am">
                        9:00 am
                      </option>

                      <option value="9:30 am">
                        9:30 am
                      </option>

                      <option value="10:00 am">
                        10:00 am
                      </option>

                      <option value="10:30 am">
                        10:30 am
                      </option>

                      <option value="11:00 am">
                        11:00 am
                      </option>

                      <option value="11:30 am">
                        11:30 am
                      </option>

                      <option value="12:00 pm">
                        12:00 pm
                      </option>

                      <option value="12:30 pm">
                        12:30 pm
                      </option>

                      <option value="1:00 pm">
                        1:00 pm
                      </option>

                      <option value="1:30 pm">
                        1:30 pm
                      </option>

                      <option value="2:00 pm">
                        2:00 pm
                      </option>

                      <option value="2:30 pm">
                        2:30 pm
                      </option>

                      <option value="3:00 pm">
                        3:00 pm
                      </option>

                      <option value="3:30 pm">
                        3:30 pm
                      </option>

                      <option value="4:00 pm">
                        4:00 pm
                      </option>

                      <option value="4:30 pm">
                        4:30 pm
                      </option>

                      <option value="5:00 pm">
                        5:00 pm
                      </option>

                      <option value="5:30 pm">
                        5:30 pm
                      </option>

                      <option value="6:00 pm">
                        6:00 pm
                      </option>

                      <option value="6:30 pm">
                        6:30 pm
                      </option>

                      <option value="7:00 pm">
                        7:00 pm
                      </option>

                      <option value="7:30 pm">
                        7:30 pm
                      </option>

                      <option value="8:00 pm">
                        8:00 pm
                      </option>

                      <option value="8:30 pm">
                        8:30 pm
                      </option>

                      <option value="9:00 pm">
                        9:00 pm
                      </option>

                      <option value="9:30 pm">
                        9:30 pm
                      </option>

                      <option value="10:00 pm">
                        10:00 pm
                      </option>

                      <option value="10:30 pm">
                        10:30 pm
                      </option>

                      <option value="11:00 pm">
                        11:00 pm
                      </option>

                      <option value="11:30 pm">
                        11:30 pm
                      </option>

                    </select>

                  </div>

                </div>
              </div>

              {/* ========================================= */}
              {/* START BOOKING */}
              {/* ========================================= */}

              <button
                type="button"
                onClick={handleBooking}
                className="w-full bg-[#E4D078] text-white py-2.5 sm:py-3 lg:py-3.5 px-4 rounded-md font-medium hover:bg-purple-700 active:bg-purple-800 transition-colors mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base shadow-sm hover:shadow-md transform active:scale-[0.98] transition-all duration-200"
              >
                Start Booking
              </button>

              {/* ========================================= */}
              {/* AGENT RESPONSE TIME */}
              {/* ========================================= */}

              <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500">

                <CheckCircle
                  className="mx-1 sm:w-[18px] sm:h-[18px]"
                  size={16}
                  color="#29DB4F"
                />

                <span className="hidden sm:inline">
                  Our Agent typically responded in 12 hr
                </span>

                <span className="sm:hidden">
                  Agent responds in 12 hr
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
