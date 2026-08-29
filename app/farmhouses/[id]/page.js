"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";

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

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  /*
   * FETCH FARMHOUSE
   *
   * We use the same API that is already working
   * on the Farmhouses listing page.
   */
  useEffect(() => {
    if (!id) return;

    const fetchFarmhouse = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "/api/venues?categoryId=1&limit=100",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch farmhouses: ${response.status}`
          );
        }

        const data = await response.json();

        if (
          !data?.success ||
          !Array.isArray(data?.products)
        ) {
          throw new Error("Invalid farmhouse data.");
        }

        const foundVenue = data.products.find(
          (item) => String(item.id) === String(id)
        );

        if (!foundVenue) {
          throw new Error("Farmhouse not found.");
        }

        setVenue(foundVenue);
      } catch (err) {
        console.error(
          "Error fetching farmhouse:",
          err
        );

        setVenue(null);

        setError(
          "We&apos;re unable to load this farmhouse right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFarmhouse();
  }, [id]);

  /*
   * BOOKING
   */
  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select your event date.");
      return;
    }

    alert(
      `Booking initiated for ${
        venue?.product_name || "this farmhouse"
      } on ${selectedDate} from ${checkIn} to ${checkOut}.`
    );
  };

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
   * NOT FOUND
   */
  if (!venue) {
    return (
      <main className="min-h-screen bg-[#0F0803] text-white flex items-center justify-center">
        <div className="text-center px-6 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">
            Farmhouse not found
          </h1>

          <p className="text-[#B8AFA5] mb-8">
            {error}
          </p>

          <Link
            href="/farmhouses"
            className="inline-flex items-center justify-center px-7 py-3 bg-[#C9A34A] text-[#0F0803] font-medium rounded-md hover:bg-[#D8B25B] transition"
          >
            ← Back to Farmhouses
          </Link>
        </div>
      </main>
    );
  }

  /*
   * ADMIN DATA
   *
   * These values are coming directly from the API,
   * which gets them from the Admin panel.
   */
  const venueName =
    venue.product_name || "Farmhouse";

  const venueLocation =
    venue.product_location || "Delhi NCR";

  const venuePrice =
    venue.product_price || "Price on request";

  const venueDescription =
    venue.product_detail ||
    "Discover this beautiful farmhouse with Effortless Events.";

  /*
   * ADMIN IMAGES
   */
  const galleryImages = [
    venue.image,
    ...(Array.isArray(venue.images)
      ? venue.images
      : []),
  ].filter(Boolean);

  const mainImage =
    galleryImages[0] ||
    "https://placehold.co/1200x800/17110B/C9A34A?text=Farmhouse";

  return (
    <main className="min-h-screen bg-white text-black">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="bg-[#0F0803] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">

          <Link
            href="/farmhouses"
            className="inline-flex items-center text-[#C9A34A] text-sm mb-8 hover:text-[#E1C56E] transition"
          >
            ← Back to Farmhouses
          </Link>

          <p className="text-sm uppercase tracking-[0.2em] text-[#C9A34A] mb-4">
            Farmhouse
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium">
            {venueName}
          </h1>

          <p className="text-[#B8AFA5] mt-4">
            {venueLocation}
          </p>

        </div>
      </section>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* =====================================
              LEFT COLUMN
          ===================================== */}

          <div className="lg:col-span-2 space-y-6">

            {/* IMAGE */}

            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[560px] rounded-2xl overflow-hidden bg-[#17110B]">

              <img
                src={mainImage}
                alt={venueName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/1200x800/17110B/C9A34A?text=Image+Not+Available";
                }}
              />

            </div>


            {/* ADDITIONAL IMAGES */}

            {galleryImages.length > 1 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">

                {galleryImages.slice(0, 8).map(
                  (image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className="h-24 sm:h-32 rounded-lg overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${venueName} ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://placehold.co/600x400/17110B/C9A34A?text=Image";
                        }}
                      />
                    </div>
                  )
                )}

              </div>
            )}


            {/* =================================
                ABOUT
            ================================= */}

            <div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium mb-4">
                About {venueName}
              </h2>

              <p
                className={`text-gray-600 text-sm sm:text-base leading-relaxed ${
                  !isDescriptionExpanded
                    ? "line-clamp-4"
                    : ""
                }`}
              >
                {venueDescription}
              </p>

              {venueDescription.length > 250 && (
                <button
                  type="button"
                  onClick={() =>
                    setIsDescriptionExpanded(
                      (prev) => !prev
                    )
                  }
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium mt-3"
                >
                  {isDescriptionExpanded
                    ? "Read less"
                    : "Read more"}
                </button>
              )}

            </div>


            {/* =================================
                AMENITIES / INFORMATION
            ================================= */}

            <div className="space-y-3 text-black">

              {/* FOOD */}

              <div className="border border-gray-200 rounded-lg">

                <button
                  onClick={() =>
                    toggleSection("food")
                  }
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
                    <p>
                      Full catering services are available
                      with a wide range of local and
                      international cuisine options.
                      Catering arrangements can be planned
                      according to the event type, guest
                      count, menu preferences, and specific
                      requirements of the celebration.
                    </p>
                  </div>
                )}

              </div>


              {/* ALCOHOL */}

              <div className="border border-gray-200 rounded-lg">

                <button
                  onClick={() =>
                    toggleSection("alcohol")
                  }
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
                    <p>
                      Alcoholic and beverage services can
                      be arranged according to the venue&apos;s
                      policies and event requirements.
                      Beverage options may include wines,
                      beers, spirits, mocktails, soft drinks,
                      and other refreshments.
                    </p>
                  </div>
                )}

              </div>


              {/* FURNITURE */}

              <div className="border border-gray-200 rounded-lg">

                <button
                  onClick={() =>
                    toggleSection("furniture")
                  }
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
                    <p>
                      Furniture arrangements are available
                      for different types of events and
                      celebrations. Tables, chairs, seating
                      arrangements, and other required
                      furniture can be organized according
                      to the event layout and guest count.
                    </p>
                  </div>
                )}

              </div>


              {/* RESTROOMS */}

              <div className="border border-gray-200 rounded-lg">

                <button
                  onClick={() =>
                    toggleSection("restrooms")
                  }
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
                    <p>
                      Clean and convenient restroom
                      facilities are available for guests
                      throughout the event.
                    </p>
                  </div>
                )}

              </div>


              {/* AV */}

              <div className="border border-gray-200 rounded-lg">

                <button
                  onClick={() =>
                    toggleSection("av")
                  }
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
                    <p>
                      Audio-visual and music facilities can
                      be arranged for different event
                      requirements, including sound systems,
                      microphones, music equipment and
                      lighting.
                    </p>
                  </div>
                )}

              </div>


              {/* PARKING */}

              <div className="border border-gray-200 rounded-lg">

                <button
                  onClick={() =>
                    toggleSection("parking")
                  }
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
                    <p>
                      Ample parking space is available for
                      guests attending events at the venue.
                      Parking arrangements are designed to
                      make arrival and departure convenient
                      for guests.
                    </p>
                  </div>
                )}

              </div>


              {/* EVENTS */}

              <div className="border border-gray-200 rounded-lg">

                <button
                  onClick={() =>
                    toggleSection("events")
                  }
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
                    <p>
                      Event guidelines and venue policies
                      are followed to ensure a smooth, safe,
                      and enjoyable experience for all guests.
                      Specific arrangements relating to
                      event timings, setup, music, catering,
                      alcohol, decorations, parking and guest
                      capacity can be discussed with the venue
                      team before booking.
                    </p>
                  </div>
                )}

              </div>

            </div>


            {/* =================================
                VENUE SUMMARY
            ================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="border border-gray-200 rounded-xl p-5">

                <p className="text-sm text-gray-500 mb-2">
                  Location
                </p>

                <p className="font-medium text-black">
                  {venueLocation}
                </p>

              </div>

              <div className="border border-gray-200 rounded-xl p-5">

                <p className="text-sm text-gray-500 mb-2">
                  Guest Rating
                </p>

                <p className="font-medium text-black">
                  ★ {venue.rating || "5.0"}
                </p>

              </div>

              <div className="border border-gray-200 rounded-xl p-5">

                <p className="text-sm text-gray-500 mb-2">
                  Category
                </p>

                <p className="font-medium text-black">
                  Farmhouse
                </p>

              </div>

            </div>

          </div>


          {/* =====================================
              RIGHT BOOKING CARD
          ===================================== */}

          <div className="lg:col-span-1">

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 lg:p-6 sticky top-4">

              {/* PRICE */}

              <div className="mb-6">

                <div className="text-2xl lg:text-3xl font-bold text-gray-900">

                  {String(venuePrice).startsWith("₹")
                    ? venuePrice
                    : venuePrice ===
                      "Price on request"
                    ? venuePrice
                    : `₹${venuePrice}`}

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
                    Date
                    <span className="text-gray-400">
                      {" "}
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
                    className="w-full text-black px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-sm bg-white cursor-pointer"
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-sm appearance-none bg-white text-black"
                    >

                      {timeOptions.map(
                        (time) => (
                          <option
                            key={`in-${time}`}
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-sm appearance-none bg-white text-black"
                    >

                      {timeOptions.map(
                        (time) => (
                          <option
                            key={`out-${time}`}
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


              {/* START BOOKING */}

              <button
                onClick={handleBooking}
                className="w-full bg-[#E4D078] text-black py-3.5 px-4 rounded-md font-medium hover:bg-[#d6bd5e] transition
