"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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

function getImages(venue) {
  if (!venue) return [];

  let images = [];

  if (Array.isArray(venue.images)) {
    images = venue.images;
  } else if (Array.isArray(venue.product_images)) {
    images = venue.product_images;
  } else if (Array.isArray(venue.productImages)) {
    images = venue.productImages;
  } else if (Array.isArray(venue.gallery)) {
    images = venue.gallery;
  } else if (Array.isArray(venue.photos)) {
    images = venue.photos;
  }

  if (typeof venue.images === "string") {
    try {
      const parsed = JSON.parse(venue.images);

      if (Array.isArray(parsed)) {
        images = parsed;
      }
    } catch {
      images = [venue.images];
    }
  }

  if (typeof venue.product_images === "string") {
    try {
      const parsed = JSON.parse(venue.product_images);

      if (Array.isArray(parsed)) {
        images = parsed;
      }
    } catch {
      images = [venue.product_images];
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
      rawVenue.title,
      "Venue"
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
   SKELETON
========================================================= */

function VenueSkeleton() {
  return (
    <div className="w-full bg-white animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="h-[420px] bg-gray-200 rounded-lg" />

          <div className="grid grid-cols-2 gap-3">
            <div className="h-[205px] bg-gray-200 rounded-lg" />
            <div className="h-[205px] bg-gray-200 rounded-lg" />
            <div className="h-[205px] bg-gray-200 rounded-lg" />
            <div className="h-[205px] bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COLLAPSIBLE INFO SECTION
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
        className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
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
        <div className="px-3 sm:px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN VENUE PAGE
========================================================= */

export default function VenuePage() {
  const params = useParams();
  const router = useRouter();

  const venueId = params?.id;

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedImage, setSelectedImage] = useState(0);

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

        const response = await fetch(`/api/venues/${venueId}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Unable to load venue. Status: ${response.status}`
          );
        }

        const data = await response.json();

        const rawVenue =
          data?.product ||
          data?.venue ||
          data?.data ||
          data;

        const normalized = normalizeVenue(rawVenue);

        if (!normalized) {
          throw new Error("Venue information was not found.");
        }

        setVenue(normalized);
      } catch (err) {
        console.error("Failed to fetch venue:", err);

        setError(
          err?.message || "Unable to load venue information."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVenue();
  }, [venueId]);

  /* =========================================================
     TOGGLE SECTIONS
  ========================================================= */

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  /* =========================================================
     VENUE IMAGES
  ========================================================= */

  const venueImages = useMemo(() => {
    if (!venue?.images || venue.images.length === 0) {
      return [
        "https://via.placeholder.com/1200x800?text=No+Image",
      ];
    }

    return venue.images;
  }, [venue]);

  /* =========================================================
     PRICE
  ========================================================= */

  const formattedPrice = useMemo(() => {
    if (!venue?.product_price) {
      return "Price on request";
    }

    const price = String(venue.product_price);

    return price.startsWith("₹") ? price : `₹${price}`;
  }, [venue]);

  /* =========================================================
     RATING
  ========================================================= */

  const venueRating = useMemo(() => {
    const rating = Number(venue?.rating);

    if (!Number.isNaN(rating) && rating > 0) {
      return rating.toFixed(1);
    }

    return "4.0";
  }, [venue]);

  /* =========================================================
     MAP URL
  ========================================================= */

  const mapSearchQuery = useMemo(() => {
    if (!venue) return "";

    return [
      venue.product_name,
      venue.product_location,
    ]
      .filter(Boolean)
      .join(", ");
  }, [venue]);

  const mapEmbedUrl = useMemo(() => {
    if (!mapSearchQuery) return "";

    return `https://www.google.com/maps?q=${encodeURIComponent(
      mapSearchQuery
    )}&output=embed`;
  }, [mapSearchQuery]);

  /* =========================================================
     BOOKING
  ========================================================= */

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date before starting your booking.");
      return;
    }

    if (!venue) {
      return;
    }

    const message = `Hi Effortless Events, I am interested in booking ${
      venue.product_name
    } on ${selectedDate} from ${checkInTime} to ${checkOutTime}.`;

    const whatsappNumber = "919999999999";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return <VenueSkeleton />;
  }

  /* =========================================================
     ERROR
  ========================================================= */

  if (error || !venue) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
          Unable to load venue
        </h2>

        <p className="text-gray-500 text-sm mb-6 text-center">
          {error || "Venue information could not be found."}
        </p>

        <button
          type="button"
          onClick={() => router.back()}
          className="px-5 py-2.5 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-black">

      {/* =====================================================
          VENUE CONTENT
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* Back Button */}

        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-5 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* ===================================================
            VENUE HEADER
        =================================================== */}

        <div className="mb-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
            {venue.product_name}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">

            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{venue.product_location || "Location available on request"}</span>
            </div>

            <span className="hidden sm:inline text-gray-300">
              |
            </span>

            <div className="flex items-center gap-1">
              <Star
                className="w-4 h-4"
                fill="#E4D078"
                stroke="#E4D078"
              />

              <span className="text-black font-medium">
                {venueRating}
              </span>
            </div>

            <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs">
              {venue.category_name}
            </span>

          </div>
        </div>

        {/* ===================================================
            IMAGE GALLERY
        =================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-8">

          {/* Main Image */}

          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-100">

            <img
              src={venueImages[selectedImage] || venueImages[0]}
              alt={venue.product_name}
              className="w-full h-full object-cover"
            />

            {venueImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === 0
                        ? venueImages.length - 1
                        : selectedImage - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === venueImages.length - 1
                        ? 0
                        : selectedImage + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

          </div>

          {/* Thumbnail Grid */}

          <div className="grid grid-cols-2 gap-3">

            {venueImages.slice(0, 4).map((image, index) => (
              <button
                type="button"
                key={`${image}-${index}`}
                onClick={() => setSelectedImage(index)}
                className={`relative h-[145px] sm:h-[195px] lg:h-[243px] rounded-lg overflow-hidden bg-gray-100 ${
                  selectedImage === index
                    ? "ring-2 ring-black"
                    : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${venue.product_name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {index === 3 && venueImages.length > 4 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-medium text-sm sm:text-base">
                      +{venueImages.length - 4} more
                    </span>
                  </div>
                )}
              </button>
            ))}

            {venueImages.length < 4 &&
              Array.from({
                length: 4 - venueImages.length,
              }).map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="h-[145px] sm:h-[195px] lg:h-[243px] rounded-lg bg-gray-100"
                />
              ))}

          </div>
        </div>

        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="lg:col-span-2 space-y-6">

            {/* About */}

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                About {venue.product_name}
              </h2>

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
                        (prev) => !prev
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

            {/* =================================================
                AMENITIES
            ================================================= */}

            <div className="space-y-3">

              {/* Food */}

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
                  Full catering services are available with a wide
                  range of local and international cuisine options.
                  Catering arrangements can be planned according
                  to the event type, guest count, menu preferences,
                  and specific requirements of the celebration.
                  From intimate gatherings to larger weddings and
                  social events, food and beverage services can be
                  coordinated to provide guests with a comfortable
                  and enjoyable dining experience.
                </p>
              </InfoSection>

              {/* Alcohol */}

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
                  refreshments. Specific arrangements can be
                  discussed with the venue team in advance to
                  ensure that beverage service is properly
                  coordinated for the event and guest requirements.
                </p>
              </InfoSection>

              {/* Furniture */}

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
                  Furniture arrangements are available for
                  different types of events and celebrations.
                  Tables, chairs, seating arrangements, and other
                  required furniture can be organized according to
                  the event layout, guest count, dining requirements,
                  and overall setup.
                </p>
              </InfoSection>

              {/* Restrooms */}

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
                  Clean and convenient restroom facilities are
                  available for guests throughout the event. The
                  facilities are designed to support gatherings of
                  different sizes and provide guests with easy
                  access during weddings, parties, celebrations,
                  corporate events, and other functions.
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
                  Audio-visual and music facilities can be arranged
                  for different event requirements. Depending on
                  the venue and event, facilities may include
                  professional sound systems, microphones, music
                  equipment, lighting, and other audio-visual
                  requirements.
                </p>
              </InfoSection>

              {/* Parking */}

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
                  Ample parking space is available for guests
                  attending events at the venue. Parking
                  arrangements are designed to make arrival and
                  departure more convenient for guests, particularly
                  during larger weddings, celebrations, and private
                  events.
                </p>
              </InfoSection>

              {/* Events */}

              <InfoSection
                title="Events Rules"
                sectionKey="events"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                icon={
                  <span className="text-lg">
                    ✓
                  </span>
                }
              >
                <p>
                  Event guidelines and venue policies are followed
                  to ensure a smooth, safe, and enjoyable experience
                  for all guests. Specific arrangements relating to
                  event timings, setup, music, catering, alcohol,
                  decorations, parking, guest capacity, and other
                  venue requirements can be discussed with the venue
                  team before booking.
                </p>
              </InfoSection>

            </div>
          </div>

          {/* =================================================
              RIGHT COLUMN - BOOKING CARD
          ================================================= */}

          <div className="lg:col-span-1">

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5 lg:p-6 sticky top-4">

              {/* Price */}

              <div className="mb-5">

                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {formattedPrice}
                </div>

                <div className="text-xs sm:text-sm text-[#E4D078]">
                  onwards
                </div>

              </div>

              {/* Discount */}

              <div className="border-t border-gray-200 pt-4 mb-5">

                <div className="flex justify-between items-center">

                  <span className="text-xs sm:text-sm text-gray-600">
                    2+ days discount
                  </span>

                  <span className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    10% off
                  </span>

                </div>

              </div>

              {/* Date */}

              <div className="space-y-4 mb-5">

                <div>

                  <label className="block text-xs sm:text-sm text-black mb-2">
                    Date and time{" "}
                    <span className="text-gray-400">
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
                    className="w-full text-black px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-sm bg-white cursor-pointer"
                  />

                </div>

                {/* Times */}

                <div className="grid grid-cols-2 gap-3">

                  <div>

                    <label className="block text-xs text-gray-600 mb-1">
                      Check-in
                    </label>

                    <select
                      value={checkInTime}
                      onChange={(e) =>
                        setCheckInTime(e.target.value)
                      }
                      className="w-full px-2 sm:px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm bg-white text-black"
                    >
                      {TIME_OPTIONS.map((time) => (
                        <option
                          key={`in-${time}`}
                          value={time}
                        >
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
                      onChange={(e) =>
                        setCheckOutTime(e.target.value)
                      }
                      className="w-full px-2 sm:px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] text-xs sm:text-sm bg-white text-black"
                    >
                      {TIME_OPTIONS.map((time) => (
                        <option
                          key={`out-${time}`}
                          value={time}
                        >
                          {time}
                        </option>
                      ))}
                    </select>

                  </div>

                </div>

              </div>

              {/* Booking */}

              <button
                type="button"
                onClick={handleBooking}
                className="w-full bg-[#E4D078] text-white py-3 px-4 rounded-md font-medium hover:bg-[#d5c06b] active:scale-[0.98] transition-all duration-200 mb-4 text-sm sm:text-base"
              >
                Start Booking
              </button>

              {/* Agent */}

              <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500">

                <Clock className="w-4 h-4 mr-1.5 text-green-500" />

                <span>
                  Our Agent typically responds in 12 hr
                </span>

              </div>

            </div>

          </div>
                /* =========================================================
   MAIN VENUE PAGE
========================================================= */

export default function VenuePage() {
  const params = useParams();
  const router = useRouter();

  const venueId = params?.id;

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("9:30 am");
  const [checkOutTime, setCheckOutTime] = useState("9:30 pm");

  const [currentImage, setCurrentImage] = useState(0);
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

  const [popularVenues, setPopularVenues] = useState([]);
  const [popularLoading, setPopularLoading] = useState(true);
  const [popularSlide, setPopularSlide] = useState(0);

  /* =========================================================
     FETCH VENUE
  ========================================================= */

  useEffect(() => {
    if (!venueId) return;

    const fetchVenue = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`/api/venues/${venueId}`);

        if (!response.ok) {
          throw new Error(
            `Unable to load venue. Status: ${response.status}`
          );
        }

        const data = await response.json();

        const rawVenue =
          data?.product ||
          data?.venue ||
          data?.data ||
          data;

        setVenue(normalizeVenue(rawVenue));
      } catch (err) {
        console.error("Venue fetch error:", err);
        setError(err.message || "Unable to load venue.");
      } finally {
        setLoading(false);
      }
    };

    fetchVenue();
  }, [venueId]);

  /* =========================================================
     FETCH POPULAR VENUES
  ========================================================= */

  useEffect(() => {
    const fetchPopularVenues = async () => {
      try {
        setPopularLoading(true);

        const response = await fetch("/api/venues?limit=10");

        if (!response.ok) {
          throw new Error("Unable to load popular venues");
        }

        const data = await response.json();

        const venues =
          data?.products ||
          data?.venues ||
          data?.data ||
          [];

        setPopularVenues(
          venues
            .map((item) => normalizeVenue(item))
            .filter(
              (item) =>
                String(item?.id) !== String(venueId)
            )
        );
      } catch (err) {
        console.error("Popular venues error:", err);
        setPopularVenues([]);
      } finally {
        setPopularLoading(false);
      }
    };

    fetchPopularVenues();
  }, [venueId]);

  /* =========================================================
     TOGGLE SECTIONS
  ========================================================= */

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  /* =========================================================
     IMAGE HELPERS
  ========================================================= */

  const images = useMemo(() => {
    if (!venue?.images?.length) {
      return [
        "https://via.placeholder.com/1200x700?text=No+Image",
      ];
    }

    return venue.images;
  }, [venue]);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev >= images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev <= 0 ? images.length - 1 : prev - 1
    );
  };

  /* =========================================================
     POPULAR VENUE RESPONSIVE SLIDES
  ========================================================= */

  const [popularSlidesToShow, setPopularSlidesToShow] =
    useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setPopularSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setPopularSlidesToShow(2);
      } else {
        setPopularSlidesToShow(3);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () =>
      window.removeEventListener("resize", updateSlides);
  }, []);

  const popularMaxSlide = Math.max(
    0,
    popularVenues.length - popularSlidesToShow
  );

  const nextPopularSlide = () => {
    setPopularSlide((prev) =>
      prev >= popularMaxSlide ? 0 : prev + 1
    );
  };

  const previousPopularSlide = () => {
    setPopularSlide((prev) =>
      prev <= 0 ? popularMaxSlide : prev - 1
    );
  };

  /* =========================================================
     BOOKING
  ========================================================= */

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date before starting your booking.");
      return;
    }

    alert(
      `Booking initiated for ${selectedDate} from ${checkInTime} to ${checkOutTime}`
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
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6" />

            <div className="h-[400px] bg-gray-200 rounded-xl mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-1/2" />
                <div className="h-24 bg-gray-200 rounded" />
                <div className="h-16 bg-gray-200 rounded" />
                <div className="h-16 bg-gray-200 rounded" />
              </div>

              <div className="h-96 bg-gray-200 rounded" />
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-2xl font-bold text-black mb-3">
          Venue not found
        </h1>

        <p className="text-gray-500 mb-6 text-center">
          {error || "We could not find this venue."}
        </p>

        <button
          type="button"
          onClick={() => router.push("/search")}
          className="px-6 py-3 rounded-md bg-[#E4D078] text-white font-medium"
        >
          Browse Venues
        </button>
      </div>
    );
  }

  /* =========================================================
     VENUE DATA
  ========================================================= */

  const venueName =
    venue.product_name || "Effortless Venue";

  const venueLocation =
    venue.product_location || "Delhi NCR";

  const venueDescription =
    venue.product_detail ||
    "Discover this beautiful venue with Effortless Events.";

  const venuePrice = venue.product_price;

  const venueRating =
    venue.rating !== "" &&
    venue.rating !== null &&
    venue.rating !== undefined
      ? Number(venue.rating).toFixed(1)
      : "3.8";

  /*
   * Google Maps query.
   *
   * If your database later contains latitude/longitude,
   * you can replace this with those coordinates.
   */
  const mapQuery = encodeURIComponent(
    `${venueName}, ${venueLocation}, India`
  );

  return (
    <div className="w-full bg-white text-black">

      {/* =====================================================
          TOP VENUE IMAGE SECTION
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="relative w-full h-[260px] sm:h-[400px] lg:h-[520px] rounded-xl overflow-hidden bg-gray-100">

          <img
            src={images[currentImage]}
            alt={venueName}
            className="w-full h-full object-cover"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentImage === index
                      ? "w-7 bg-white"
                      : "w-2 bg-white/60"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ===================================================
            VENUE TITLE
        =================================================== */}

        <div className="py-6">

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
                {venueName}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">

                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{venueLocation}</span>
                </div>

                <span className="hidden sm:block text-gray-300">
                  |
                </span>

                <div className="flex items-center gap-1">
                  <Star
                    className="w-4 h-4"
                    fill="currentColor"
                  />
                  <span className="text-black font-medium">
                    {venueRating}
                  </span>
                </div>

                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                  {venue.category_name}
                </span>

              </div>
            </div>

            <div className="text-left lg:text-right">

              <div className="text-2xl font-bold text-gray-900">
                {venuePrice
                  ? String(venuePrice).startsWith("₹")
                    ? venuePrice
                    : `₹${venuePrice}`
                  : "Price on request"}
              </div>

              <div className="text-sm text-[#E4D078]">
                onwards
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="lg:col-span-2 space-y-6">

            {/* ABOUT */}

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                About {venueName}
              </h2>

              <p
                className={`text-gray-600 text-sm leading-relaxed ${
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
                  className="mt-2 text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  {isDescriptionExpanded
                    ? "Read less"
                    : "Read more"}
                </button>
              )}
            </div>

            {/* =================================================
                INFORMATION SECTIONS
            ================================================= */}

            <div className="space-y-3">

              <InfoSection
                title="Food and Beverage"
                icon={
                  <Utensils className="w-5 h-5" />
                }
                sectionKey="food"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              >
                <p>
                  Full catering services are available
                  with a wide range of local and
                  international cuisine options. Catering
                  arrangements can be planned according to
                  the event type, guest count, menu
                  preferences, and specific requirements.
                </p>
              </InfoSection>

              <InfoSection
                title="Alcoholic and Beverage"
                icon={
                  <Wine className="w-5 h-5" />
                }
                sectionKey="alcohol"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              >
                <p>
                  Alcoholic and beverage services can be
                  arranged according to the venue&apos;s
                  policies and event requirements. Beverage
                  options may include wines, beers, spirits,
                  mocktails, soft drinks, and other
                  refreshments.
                </p>
              </InfoSection>

              <InfoSection
                title="Furniture"
                icon={
                  <Users className="w-5 h-5" />
                }
                sectionKey="furniture"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              >
                <p>
                  Furniture arrangements are available for
                  different types of events and
                  celebrations. Tables, chairs, seating
                  arrangements, and other required
                  furniture can be organized according to
                  the event layout and guest count.
                </p>
              </InfoSection>

              <InfoSection
                title="Restrooms"
                icon={
                  <Bath className="w-5 h-5" />
                }
                sectionKey="restrooms"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              >
                <p>
                  Clean and convenient restroom facilities
                  are available for guests throughout the
                  event. Accessibility considerations can
                  also be discussed depending on the venue
                  and event requirements.
                </p>
              </InfoSection>

              <InfoSection
                title="AV and Music"
                icon={
                  <Tv className="w-5 h-5" />
                }
                sectionKey="av"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              >
                <p>
                  Audio-visual and music facilities can be
                  arranged for different event requirements,
                  including sound systems, microphones,
                  music equipment, lighting, and other
                  audio-visual requirements.
                </p>
              </InfoSection>

              <InfoSection
                title="Parking"
                icon={
                  <Car className="w-5 h-5" />
                }
                sectionKey="parking"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              >
                <p>
                  Ample parking space is available for
                  guests attending events at the venue.
                  Parking arrangements are designed to make
                  arrival and departure more convenient.
                </p>
              </InfoSection>

              <InfoSection
                title="Events Rules"
                icon={
                  <CheckCircle2 className="w-5 h-5" />
                }
                sectionKey="events"
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              >
                <p>
                  Event guidelines and venue policies are
                  followed to ensure a smooth, safe, and
                  enjoyable experience. Specific arrangements
                  relating to timings, setup, music,
                  catering, alcohol, decorations, parking,
                  and guest capacity can be discussed before
                  booking.
                </p>
              </InfoSection>

            </div>

          </div>

          {/* =================================================
              RIGHT BOOKING CARD
          ================================================= */}

          <div className="lg:col-span-1">

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 lg:p-6 sticky top-4">

              <div className="mb-5">

                <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {venuePrice
                    ? String(venuePrice).startsWith("₹")
                      ? venuePrice
                      : `₹${venuePrice}`
                    : "Price on request"}
                </div>

                <div className="text-sm text-[#E4D078]">
                  onwards
                </div>

              </div>

              <div className="border-t border-gray-200 pt-4 mb-5">

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

              <div className="mb-4">

                <label className="block text-sm text-black mb-2">
                  Date and time{" "}
                  <span className="text-gray-400">
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
                  className="w-full text-black px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] bg-white"
                />

              </div>

              {/* TIMES */}

              <div className="grid grid-cols-2 gap-3 mb-5">

                <div>

                  <label className="block text-xs text-gray-600 mb-1">
                    Check-in
                  </label>

                  <select
                    value={checkInTime}
                    onChange={(e) =>
                      setCheckInTime(e.target.value)
                    }
                    className="w-full px-3 py-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#E4D078]"
                  >
                    {TIME_OPTIONS.map((time) => (
                      <option
                        key={`in-${time}`}
                        value={time}
                      >
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
                    onChange={(e) =>
                      setCheckOutTime(e.target.value)
                    }
                    className="w-full px-3 py-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#E4D078]"
                  >
                    {TIME_OPTIONS.map((time) => (
                      <option
                        key={`out-${time}`}
                        value={time}
                      >
                        {time}
                      </option>
                    ))}
                  </select>

                </div>

              </div>

              <button
                type="button"
                onClick={handleBooking}
                className="w-full bg-[#E4D078] text-white py-3.5 px-4 rounded-md font-medium hover:bg-[#d5bd61] transition-all duration-200 shadow-sm"
              >
                Start Booking
              </button>

              <div className="flex items-center justify-center text-xs text-gray-500 mt-4">

                <CheckCircle2
                  className="w-4 h-4 mr-1.5"
                  strokeWidth={2}
                />

                <span>
                  Our Agent typically responds in 12 hr
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          LOCATION SECTION
          THIS IS THE FIRST MISSING SECTION
      ===================================================== */}

      <section className="border-t border-gray-200 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
            Location
          </h2>

          <p className="text-blue-600 text-sm sm:text-base mb-8">
            {venueLocation}
          </p>

          <div className="w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-lg overflow-hidden border border-gray-200">

            <iframe
              title={`Map showing ${venueName}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>
      </div>

    
