// app/farmhouses/[id]/page.js

"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  ChevronDown,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function FarmhouseDetailsPage() {
  const params = useParams();
  const id = params?.id;

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [checkIn, setCheckIn] = useState("9:30 am");
  const [checkOut, setCheckOut] = useState("9:30 pm");

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

  useEffect(() => {
    if (!id) return;

    const fetchVenue = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`/api/product/${id}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch farmhouse: ${response.status}`
          );
        }

        const data = await response.json();

        setVenue(data);
      } catch (err) {
        console.error("Error fetching farmhouse:", err);
        setError(
          "We&apos;re unable to load this farmhouse right now."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    alert(
      `Booking initiated for ${venue?.product_name || "Farmhouse"} on ${selectedDate} from ${checkIn} to ${checkOut}`
    );
  };

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

  if (loading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#E4D078] rounded-full animate-spin mx-auto mb-5" />

          <h1 className="text-xl sm:text-2xl font-semibold text-black">
            Loading farmhouse...
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Please wait while we load the farmhouse details.
          </p>
        </div>
      </main>
    );
  }

  if (error || !venue) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6 max-w-lg">
          <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-3">
            Farmhouse not found
          </h1>

          <p className="text-gray-500 mb-6">
            {error || "The farmhouse you are looking for could not be found."}
          </p>

          <Link
            href="/farmhouses"
            className="inline-flex items-center gap-2 bg-[#E4D078] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
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

      {/* HERO / IMAGE AREA */}
      <section className="w-full bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-6">

          <Link
            href="/farmhouses"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-5 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Farmhouses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* MAIN IMAGE */}
            <div className="h-[280px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-gray-100">
              <img
                src={
                  venue.image ||
                  "https://placehold.co/1200x800/EFEFEF/777?text=Farmhouse"
                }
                alt={venue.product_name || "Farmhouse"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/1200x800/EFEFEF/777?text=Image+Not+Available";
                }}
              />
            </div>

            {/* ADDITIONAL IMAGES */}
            <div className="grid grid-cols-2 gap-4 h-[280px] sm:h-[400px] lg:h-[500px]">

              {(venue.images || []).slice(0, 4).map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="rounded-xl overflow-hidden bg-gray-100"
                >
                  <img
                    src={image}
                    alt={`${venue.product_name || "Farmhouse"} ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/800x600/EFEFEF/777?text=Image";
                    }}
                  />
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="w-full bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-6">

              {/* TITLE */}
              <div>

                <div className="flex flex-wrap items-center gap-2 mb-3">

                  <span className="text-xs sm:text-sm bg-[#E4D078]/20 text-[#9A7A16] px-3 py-1.5 rounded-full">
                    Farmhouse
                  </span>

                  {venue.product_location && (
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {venue.product_location}
                    </span>
                  )}

                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                  {venue.product_name || "Farmhouse"}
                </h1>

                <div className="flex items-center gap-2 mb-5">

                  <span className="text-[#E4D078] text-xl">
                    ★
                  </span>

                  <span className="font-medium text-black">
                    {venue.rating || "5.0"}
                  </span>

                  <span className="text-gray-500 text-sm">
                    Guest rating
                  </span>

                </div>

                {/* DESCRIPTION */}
                <div>

                  <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                    About {venue.product_name || "Venue"}
                  </h2>

                  <p
                    className={`text-gray-600 text-sm leading-relaxed mb-3 ${
                      !isDescriptionExpanded
                        ? "line-clamp-4"
                        : ""
                    }`}
                  >
                    {venue.product_detail ||
                      "Discover this beautiful venue with Effortless Events."}
                  </p>

                  {venue.product_detail &&
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

              {/* AMENITIES */}
              <div className="space-y-3">

                {/* FOOD */}
                <div className="border border-gray-200 rounded-lg">

                  <button
                    onClick={() => toggleSection("food")}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-700">
                      Food and Beverage
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.food
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {expandedSections.food && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      Full catering services are available with a wide range
                      of local and international cuisine options. Catering
                      arrangements can be planned according to the event type,
                      guest count, menu preferences, and specific requirements.
                    </div>
                  )}

                </div>

                {/* ALCOHOL */}
                <div className="border border-gray-200 rounded-lg">

                  <button
                    onClick={() => toggleSection("alcohol")}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-700">
                      Alcoholic and Beverage
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.alcohol
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {expandedSections.alcohol && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      Alcoholic and beverage services can be arranged
                      according to the venue&apos;s policies and event
                      requirements. Beverage options may include wines,
                      beers, spirits, mocktails, soft drinks, and other
                      refreshments.
                    </div>
                  )}

                </div>

                {/* FURNITURE */}
                <div className="border border-gray-200 rounded-lg">

                  <button
                    onClick={() => toggleSection("furniture")}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-700">
                      Furniture
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.furniture
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {expandedSections.furniture && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      Tables, chairs, seating arrangements, and other required
                      furniture can be organized according to the event layout,
                      guest count, dining requirements, and overall setup.
                    </div>
                  )}

                </div>

                {/* RESTROOMS */}
                <div className="border border-gray-200 rounded-lg">

                  <button
                    onClick={() => toggleSection("restrooms")}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-700">
                      Restrooms
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.restrooms
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {expandedSections.restrooms && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      Clean and convenient restroom facilities are available
                      for guests throughout the event.
                    </div>
                  )}

                </div>

                {/* AV */}
                <div className="border border-gray-200 rounded-lg">

                  <button
                    onClick={() => toggleSection("av")}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-700">
                      AV and Music
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.av
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {expandedSections.av && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      Audio-visual and music facilities can be arranged for
                      different event requirements, including sound systems,
                      microphones, music equipment, and lighting.
                    </div>
                  )}

                </div>

                {/* PARKING */}
                <div className="border border-gray-200 rounded-lg">

                  <button
                    onClick={() => toggleSection("parking")}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-700">
                      Parking
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.parking
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {expandedSections.parking && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      Ample parking space is available for guests attending
                      events at the venue.
                    </div>
                  )}

                </div>

                {/* EVENTS */}
                <div className="border border-gray-200 rounded-lg">

                  <button
                    onClick={() => toggleSection("events")}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-700">
                      Events Rules
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.events
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {expandedSections.events && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      Event guidelines and venue policies are followed to
                      ensure a smooth, safe, and enjoyable experience for all
                      guests. Specific arrangements can be discussed with the
                      venue team before booking.
                    </div>
                  )}

                </div>

              </div>

            </div>

            {/* RIGHT COLUMN - BOOKING */}
            <div className="lg:col-span-1">

              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 lg:p-6 sticky top-4">

                {/* PRICE */}
                <div className="mb-6">

                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {venue.product_price
                      ? String(
                          venue.product_price
                        ).startsWith("₹")
                        ? venue.product_price
                        : `₹${venue.product_price}`
                      : "Price on request"}
                  </div>

                  <div className="text-sm text-[#E4D078]">
                    onwards
                  </div>

                </div>

                {/* DISCOUNT */}
                <div className="border-t border-gray-200 pt-4 mb-6">

                  <div className="flex justify-between items-center">

                    <span className="text-sm text-gray-600">
                      2+ days discount
                    </span>

                    <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      10% off
                    </span>

                  </div>

                </div>

                {/* DATE */}
                <div className="space-y-4 mb-6">

                  <div>

                    <label className="block text-sm text-black mb-2">
                      Date{" "}
                      <span className="text-gray-400">
                        (required)
                      </span>
                    </label>

                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) =>
                        setSelectedDate(
                          e.target.value
                        )
                      }
                      min={
                        new Date()
                          .toISOString()
                          .split("T")[0]
                      }
                      className="w-full text-black px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] bg-white cursor-pointer"
                    />

                  </div>

                  {/* CHECK IN / CHECK OUT */}
                  <div className="grid grid-cols-2 gap-3">

                    <div>

                      <label className="block text-xs text-gray-600 mb-1">
                        Check-in
                      </label>

                      <select
                        value={checkIn}
                        onChange={(e) =>
                          setCheckIn(
                            e.target.value
                          )
                        }
                        className="w-full text-black px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] bg-white"
                      >
                        {timeOptions.map(
                          (time) => (
                            <option
                              key={time}
                              value={time}
                            >
                              {time}
                            </option>
                          )
                        )}
                      </select>

                    </div>

                    <div>

                      <label className="block text-xs text-gray-600 mb-1">
                        Check-out
                      </label>

                      <select
                        value={checkOut}
                        onChange={(e) =>
                          setCheckOut(
                            e.target.value
                          )
                        }
                        className="w-full text-black px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] bg-white"
                      >
                        {timeOptions.map(
                          (time) => (
                            <option
                              key={time}
                              value={time}
                            >
                              {time}
                            </option>
                          )
                        )}
                      </select>

                    </div>

                  </div>

                </div>

                {/* BOOKING BUTTON */}
                <button
                  onClick={handleBooking}
                  className="w-full bg-[#E4D078] text-white py-3.5 px-4 rounded-md font-medium hover:opacity-90 transition mb-4 shadow-sm"
                >
                  Start Booking
                </button>

                {/* RESPONSE */}
                <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500">

                  <span className="text-green-500 mr-2">
                    ✓
                  </span>

                  <span>
                    Our Agent typically responds in 12 hr
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
