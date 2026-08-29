"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
} from "lucide-react";

/* =========================================================
   TIME OPTIONS
========================================================= */

const TIME_OPTIONS = [
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

/* =========================================================
   HELPERS
========================================================= */

function getFirstValue(...values) {
  for (const value of values) {
    if (
      value !== undefined &&
      value !== null &&
      String(value).trim() !== ""
    ) {
      return value;
    }
  }

  return "";
}

function parsePossibleArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);

      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      return value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }

  return [];
}

function getImages(venue) {
  if (!venue) return [];

  let images = [];

  const possibleImageFields = [
    venue.images,
    venue.product_images,
    venue.productImages,
    venue.gallery,
    venue.photos,
  ];

  for (const field of possibleImageFields) {
    const parsed = parsePossibleArray(field);

    if (parsed.length > 0) {
      images = parsed;
      break;
    }
  }

  if (images.length === 0) {
    const singleImage = getFirstValue(
      venue.image,
      venue.image_url,
      venue.product_image,
      venue.productImage,
      venue.thumbnail
    );

    if (singleImage) {
      images = [singleImage];
    }
  }

  return images
    .map((image) => {
      if (typeof image === "string") {
        return image;
      }

      if (image && typeof image === "object") {
        return getFirstValue(
          image.url,
          image.src,
          image.image_url,
          image.image,
          image.path
        );
      }

      return "";
    })
    .filter(Boolean);
}

function normalizeVenue(rawVenue) {
  if (!rawVenue) return null;

  return {
    ...rawVenue,

    id: getFirstValue(
      rawVenue.id,
      rawVenue._id,
      rawVenue.product_id,
      rawVenue.productId
    ),

    product_name: getFirstValue(
      rawVenue.product_name,
      rawVenue.productName,
      rawVenue.name,
      rawVenue.title
    ),

    product_location: getFirstValue(
      rawVenue.product_location,
      rawVenue.productLocation,
      rawVenue.location,
      rawVenue.city,
      rawVenue.area
    ),

    product_price: getFirstValue(
      rawVenue.product_price,
      rawVenue.productPrice,
      rawVenue.price,
      rawVenue.starting_price,
      rawVenue.startingPrice
    ),

    product_detail: getFirstValue(
      rawVenue.product_detail,
      rawVenue.productDetail,
      rawVenue.description,
      rawVenue.details,
      rawVenue.about
    ),

    category_name: getFirstValue(
      rawVenue.category_name,
      rawVenue.categoryName,
      rawVenue.category,
      "Farmhouse"
    ),

    images: getImages(rawVenue),

    rating: getFirstValue(
      rawVenue.rating,
      rawVenue.guest_rating,
      rawVenue.guestRating,
      rawVenue.average_rating,
      rawVenue.averageRating
    ),
  };
}

/* =========================================================
   COLLAPSIBLE SECTION
========================================================= */

function InfoSection({
  title,
  icon,
  sectionKey,
  expandedSections,
  toggleSection,
  children,
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center text-black">
            {icon}
          </div>

          <span className="font-medium text-gray-700 text-sm sm:text-base">
            {title}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            expandedSections[sectionKey] ? "rotate-180" : ""
          }`}
        />
      </button>

      {expandedSections[sectionKey] && (
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function VenuePage() {
  const params = useParams();
  const router = useRouter();

  const venueId = params?.id;

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentImage, setCurrentImage] = useState(0);

  const [selectedDate, setSelectedDate] = useState("");

  const [checkInTime, setCheckInTime] = useState("9:30 am");
  const [checkOutTime, setCheckOutTime] = useState("9:30 pm");

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

  /* =========================================================
     FETCH VENUE
  ========================================================= */

  useEffect(() => {
    if (!venueId) return;

    const fetchVenue = async () => {
      try {
        setLoading(true);
        setError("");

        /*
          First try the individual venue endpoint.
        */
        let response = await fetch(`/api/venues/${venueId}`, {
          cache: "no-store",
        });

        /*
          If your backend does not have /api/venues/[id],
          fall back to the main venues API.
        */
        if (!response.ok) {
          response = await fetch(`/api/venues`, {
            cache: "no-store",
          });
        }

        if (!response.ok) {
          throw new Error(
            `Unable to load venue. Status: ${response.status}`
          );
        }

        const data = await response.json();

        /*
          Different APIs return data in different structures.
          We support the common structures without changing
          your admin-panel data.
        */

        let rawVenue = null;

        if (data?.product) {
          rawVenue = data.product;
        } else if (data?.venue) {
          rawVenue = data.venue;
        } else if (data?.data && !Array.isArray(data.data)) {
          rawVenue = data.data;
        } else if (Array.isArray(data?.products)) {
          rawVenue = data.products.find(
            (item) =>
              String(
                item.id ??
                  item._id ??
                  item.product_id ??
                  item.productId
              ) === String(venueId)
          );
        } else if (Array.isArray(data?.venues)) {
          rawVenue = data.venues.find(
            (item) =>
              String(
                item.id ??
                  item._id ??
                  item.product_id ??
                  item.productId
              ) === String(venueId)
          );
        } else if (Array.isArray(data)) {
          rawVenue = data.find(
            (item) =>
              String(
                item.id ??
                  item._id ??
                  item.product_id ??
                  item.productId
              ) === String(venueId)
          );
        } else {
          rawVenue = data;
        }

        if (!rawVenue) {
          throw new Error("Venue not found.");
        }

        setVenue(normalizeVenue(rawVenue));
      } catch (err) {
        console.error("Venue loading error:", err);

        setError(
          err?.message || "Something went wrong while loading the venue."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVenue();
  }, [venueId]);

  /* =========================================================
     DERIVED DATA
  ========================================================= */

  const images = useMemo(() => {
    if (!venue?.images?.length) {
      return [];
    }

    return venue.images;
  }, [venue]);

  const rating = useMemo(() => {
    const value = Number(venue?.rating);

    if (!Number.isNaN(value) && value > 0) {
      return value.toFixed(1);
    }

    return "4.5";
  }, [venue]);

  const displayPrice = useMemo(() => {
    if (
      venue?.product_price === undefined ||
      venue?.product_price === null ||
      String(venue.product_price).trim() === ""
    ) {
      return "Price on request";
    }

    const price = String(venue.product_price).trim();

    if (price.startsWith("₹")) {
      return price;
    }

    return `₹${price}`;
  }, [venue]);

  /* =========================================================
     SECTION TOGGLE
  ========================================================= */

  const toggleSection = (section) => {
    setExpandedSections((previous) => ({
      ...previous,
      [section]: !previous[section],
    }));
  };

  /* =========================================================
     IMAGE NAVIGATION
  ========================================================= */

  const previousImage = () => {
    if (images.length <= 1) return;

    setCurrentImage((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const nextImage = () => {
    if (images.length <= 1) return;

    setCurrentImage((previous) =>
      previous === images.length - 1 ? 0 : previous + 1
    );
  };

  /* =========================================================
     BOOKING
  ========================================================= */

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date before starting the booking.");
      return;
    }

    /*
      Keeping the current booking behavior from the old page.
      We can connect this to your actual booking/API flow later.
    */

    alert(
      `Booking initiated for ${
        venue?.product_name || "Venue"
      }\n\nDate: ${selectedDate}\nCheck-in: ${checkInTime}\nCheck-out: ${checkOutTime}`
    );
  };

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-32 mb-6" />

            <div className="h-[420px] bg-gray-200 rounded-xl mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="h-8 bg-gray-200 rounded w-2/3 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-6" />

                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-16 bg-gray-200 rounded-lg"
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="h-96 bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     ERROR
  ========================================================= */

  if (error || !venue) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-2xl font-bold text-black mb-3">
            Venue unavailable
          </h1>

          <p className="text-gray-600 mb-6">
            {error || "We could not find this venue."}
          </p>

          <button
            type="button"
            onClick={() => router.push("/search")}
            className="bg-[#E4D078] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Browse Venues
          </button>
        </div>
      </div>
    );
  }

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <div className="w-full bg-white min-h-screen">
      {/* =====================================================
          TOP NAVIGATION
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-black transition text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* =====================================================
          VENUE HEADER
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="mb-5">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs sm:text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {venue.category_name}
                </span>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

                  <span className="text-sm font-medium text-black">
                    {rating}
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                {venue.product_name || "Venue"}
              </h1>

              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <MapPin className="w-4 h-4 shrink-0" />

                <span className="text-sm sm:text-base">
                  {venue.product_location || "Location available on request"}
                </span>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="text-xl sm:text-2xl font-bold text-black">
                {displayPrice}
              </div>

              <div className="text-xs sm:text-sm text-[#C7A93E]">
                onwards
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          IMAGE GALLERY
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[500px] rounded-xl overflow-hidden bg-gray-100">
          {images.length > 0 ? (
            <>
              <img
                src={images[currentImage]}
                alt={venue.product_name || "Venue"}
                className="w-full h-full object-cover"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-black" />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-black" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                    {currentImage + 1} / {images.length}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No images available
            </div>
          )}
        </div>

        {/* Thumbnail Row */}

        {images.length > 1 && (
          <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                type="button"
                key={`${image}-${index}`}
                onClick={() => setCurrentImage(index)}
                className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-20 rounded-md overflow-hidden border-2 transition ${
                  currentImage === index
                    ? "border-[#E4D078]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`${venue.product_name || "Venue"} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="lg:col-span-2 space-y-6">
            {/* ABOUT */}

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                About {venue.product_name || "Venue"}
              </h2>

              <div>
                <p
                  className={`text-gray-600 text-sm leading-relaxed ${
                    !isDescriptionExpanded ? "line-clamp-4" : ""
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
                          (previous) => !previous
                        )
                      }
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium mt-2"
                    >
                      {isDescriptionExpanded
                        ? "Read less"
                        : "Read more"}
                    </button>
                  )}
              </div>
            </div>

            {/* =================================================
                AMENITIES
            ================================================= */}

            <div className="space-y-3 text-black">
              {/* FOOD */}

              <InfoSection
                title="Food and Beverage"
                sectionKey="food"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                icon={
                  <span className="text-lg">
                    🍽
                  </span>
                }
              >
                <p>
                  Full catering services are available with a wide range
                  of local and international cuisine options. Catering
                  arrangements can be planned according to the event type,
                  guest count, menu preferences, and specific
                  requirements.
                </p>
              </InfoSection>

              {/* ALCOHOL */}

              <InfoSection
                title="Alcoholic and Beverage"
                sectionKey="alcohol"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                icon={
                  <span className="text-lg">
                    🍷
                  </span>
                }
              >
                <p>
                  Alcoholic and beverage services can be arranged
                  according to the venue&apos;s policies and event
                  requirements. Beverage options may include wines,
                  beers, spirits, mocktails, soft drinks, and other
                  refreshments.
                </p>
              </InfoSection>

              {/* FURNITURE */}

              <InfoSection
                title="Furniture"
                sectionKey="furniture"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                icon={
                  <span className="text-lg">
                    🪑
                  </span>
                }
              >
                <p>
                  Furniture arrangements are available for different
                  types of events and celebrations. Tables, chairs,
                  seating arrangements, and other required furniture can
                  be organized according to the event layout, guest
                  count, dining requirements, and overall setup.
                </p>
              </InfoSection>

              {/* RESTROOMS */}

              <InfoSection
                title="Restrooms"
                sectionKey="restrooms"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                icon={
                  <span className="text-lg">
                    🚻
                  </span>
                }
              >
                <p>
                  Clean and convenient restroom facilities are available
                  for guests throughout the event. Accessibility
                  considerations can also be discussed depending on the
                  venue and event requirements.
                </p>
              </InfoSection>

              {/* AV */}

              <InfoSection
                title="AV and Music"
                sectionKey="av"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                icon={
                  <span className="text-lg">
                    🎵
                  </span>
                }
              >
                <p>
                  Audio-visual and music facilities can be arranged for
                  different event requirements. Depending on the venue
                  and event, facilities may include sound systems,
                  microphones, music equipment, lighting, and other
                  audio-visual requirements.
                </p>
              </InfoSection>

              {/* PARKING */}

              <InfoSection
                title="Parking"
                sectionKey="parking"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                icon={
                  <span className="text-lg">
                    🚗
                  </span>
                }
              >
                <p>
                  Ample parking space is available for guests attending
                  events at the venue. Parking arrangements are designed
                  to make arrival and departure more convenient,
                  particularly during larger weddings, celebrations, and
                  private events.
                </p>
              </InfoSection>

              {/* EVENTS */}

              <InfoSection
                title="Events Rules"
                sectionKey="events"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                icon={
                  <CheckCircle2 className="w-5 h-5 text-black" />
                }
              >
                <p>
                  Event guidelines and venue policies are followed to
                  ensure a smooth, safe, and enjoyable experience for all
                  guests. Specific arrangements relating to event
                  timings, setup, music, catering, alcohol, decorations,
                  parking, guest capacity, and other venue requirements
                  can be discussed with the venue team before booking.
                </p>
              </InfoSection>
            </div>
          </div>

          {/* =================================================
              RIGHT BOOKING CARD
          ================================================= */}

          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5 lg:p-6 lg:sticky lg:top-4">
              {/* PRICE */}

              <div className="mb-5">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {displayPrice}
                </div>

                <div className="text-xs sm:text-sm text-[#C7A93E]">
                  onwards
                </div>
              </div>

              {/* DISCOUNT */}

              <div className="border-t border-gray-200 pt-4 mb-5">
                <div className="flex justify-between items-center gap-3">
                  <span className="text-xs sm:text-sm text-gray-600">
                    2+ days discount
                  </span>

                  <span className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    10% off
                  </span>
                </div>
              </div>

              {/* DATE */}

              <div className="space-y-4 mb-5">
                <div>
                  <label className="block text-xs sm:text-sm text-black mb-2">
                    Date and time{" "}
                    <span className="text-gray-400">
                      (required)
                    </span>
                  </label>

                  <div className="relative">
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
                      className="w-full text-black px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-sm bg-white cursor-pointer"
                    />
                  </div>
                </div>

                {/* TIMES */}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Check-in
                    </label>

                    <select
                      value={checkInTime}
                      onChange={(event) =>
                        setCheckInTime(event.target.value)
                      }
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-sm appearance-none bg-white cursor-pointer"
                    >
                      {TIME_OPTIONS.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Check-out
                    </label>

                    <select
                      value={checkOutTime}
                      onChange={(event) =>
                        setCheckOutTime(event.target.value)
                      }
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-sm appearance-none bg-white cursor-pointer"
                    >
                      {TIME_OPTIONS.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* BOOKING BUTTON */}

              <button
                type="button"
                onClick={handleBooking}
                className="w-full bg-[#E4D078] text-white py-3 px-4 rounded-md font-medium hover:opacity-90 active:scale-[0.98] transition-all mb-4 text-sm sm:text-base shadow-sm"
              >
                Start Booking
              </button>

              {/* RESPONSE TIME */}

              <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#29DB4F]" />

                <span>
                  Our Agent typically responds in 12 hr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE BOOKING CTA
      ===================================================== */}

      <div className="lg:hidden sticky bottom-0 z-30 bg-white border-t border-gray-200 p-3 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-bold text-black text-base">
              {displayPrice}
            </div>

            <div className="text-xs text-gray-500">
              onwards
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const bookingCard = document.querySelector(
                "#booking-section"
              );

              if (bookingCard) {
                bookingCard.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              } else {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }
            }}
            className="bg-[#E4D078] text-white px-5 py-2.5 rounded-md font-medium text-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
