"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Share2,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function normalizeVenue(rawVenue) {
  if (!rawVenue) return null;

  return {
    ...rawVenue,

    id: rawVenue.id,

    name:
      rawVenue.product_name ||
      rawVenue.name ||
      rawVenue.title ||
      rawVenue.venueName ||
      "Farmhouse",

    location:
      rawVenue.product_location ||
      rawVenue.location ||
      rawVenue.city ||
      "Delhi NCR",

    address:
      rawVenue.product_address ||
      rawVenue.address ||
      "",

    description:
      rawVenue.product_detail ||
      rawVenue.description ||
      rawVenue.about ||
      "A beautiful private farmhouse perfect for celebrations, parties, weddings and weekend gatherings.",

    price:
      rawVenue.product_price ||
      rawVenue.price ||
      rawVenue.startingPrice ||
      rawVenue.pricePerDay ||
      rawVenue.rent ||
      0,

    image: rawVenue.image || null,

    images:
      Array.isArray(rawVenue.images)
        ? rawVenue.images
        : rawVenue.image
        ? [rawVenue.image]
        : [],

    rating:
      rawVenue.rating || "5.0",

    category:
      rawVenue.category_name ||
      rawVenue.category ||
      "",

    mapUrl:
      rawVenue.mapUrl ||
      rawVenue.map_url ||
      rawVenue.product_map ||
      rawVenue.location_map ||
      "",

    discount:
      rawVenue.discount || "",

    discountPercent:
      rawVenue.discountPercent ||
      rawVenue.discount_percentage ||
      "10%",
  };
}

const defaultAmenities = [
  {
    title: "Food and Beverage",
    icon: "🍽️",
    description:
      "Full catering services are available with a wide range of local and international cuisine options. Catering arrangements can be planned according to the event type, guest count, menu preferences, and specific requirements of the celebration.",
  },
  {
    title: "Alcoholic and Beverage",
    icon: "🍷",
    description:
      "Alcoholic and beverage services can be arranged according to the venue&apos;s policies and event requirements. Beverage options may include wines, beers, spirits, mocktails, soft drinks, and other refreshments.",
  },
  {
    title: "Furniture",
    icon: "🪑",
    description:
      "Furniture arrangements are available for different types of events and celebrations. Tables, chairs, seating arrangements, and other required furniture can be organized according to the event layout and guest count.",
  },
  {
    title: "Restrooms",
    icon: "🚻",
    description:
      "Clean and convenient restroom facilities are available for guests throughout the event. The facilities are designed to support gatherings of different sizes.",
  },
  {
    title: "AV and Music",
    icon: "🎵",
    description:
      "Audio-visual and music facilities can be arranged for different event requirements. Depending on the venue and event, facilities may include professional sound systems, microphones, music equipment and lighting.",
  },
  {
    title: "Parking",
    icon: "🚗",
    description:
      "Ample parking space is available for guests attending events at the venue. Parking arrangements are designed to make arrival and departure more convenient.",
  },
  {
    title: "Events Rules",
    icon: "✓",
    description:
      "Event guidelines and venue policies are followed to ensure a smooth, safe, and enjoyable experience for all guests. Specific arrangements relating to event timings, setup, music, catering, alcohol, decorations, parking and guest capacity can be discussed before booking.",
  },
];

export default function VenuePage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id;

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [openAmenity, setOpenAmenity] = useState(null);

  const [bookingDate, setBookingDate] = useState("");
  const [checkIn, setCheckIn] = useState("9:30 am");
  const [checkOut, setCheckOut] = useState("9:30 pm");

  useEffect(() => {
    if (!id) return;

    const fetchVenue = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`/api/venues/${id}`, {
          method: "GET",
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data?.success) {
          throw new Error(
            data?.error || "Unable to load farmhouse"
          );
        }

        const rawVenue =
          data?.venue ||
          data?.product ||
          data?.data ||
          data;

        const normalized = normalizeVenue(rawVenue);

        if (!normalized) {
          throw new Error(
            "The farmhouse information could not be found."
          );
        }

        setVenue(normalized);
      } catch (err) {
        console.error("Farmhouse detail error:", err);
        setError(
          err?.message ||
            "Unable to load farmhouse information."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  const handleBooking = () => {
    if (!bookingDate) {
      alert("Please select a date before starting your booking.");
      return;
    }

    if (!venue) return;

    const message = encodeURIComponent(
      `Hello Effortless Events,

I am interested in booking ${venue.name}.

Date: ${bookingDate}
Check-in: ${checkIn}
Check-out: ${checkOut}
Location: ${venue.location}

Please share the availability and booking details.`
    );

    window.open(
      `https://wa.me/917838008069?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShare = async () => {
    const shareUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "";

    if (
      typeof navigator !== "undefined" &&
      navigator.share
    ) {
      try {
        await navigator.share({
          title: venue?.name || "Farmhouse",
          text: `Check out ${venue?.name || "this farmhouse"}`,
          url: shareUrl,
        });
      } catch (shareError) {
        console.log("Share cancelled:", shareError);
      }

      return;
    }

    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard
    ) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied!");
      } catch (clipboardError) {
        console.error(
          "Unable to copy link:",
          clipboardError
        );
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg
        return (
    <div className="min-h-screen bg-white text-[#0b1b33]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="pt-24">

        {/* ===================================================
            VENUE HEADER
        =================================================== */}

        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

            <div>

              <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#071a33]">
                {venue.name}
              </h1>

              <div className="flex items-center gap-2 text-gray-600 mt-2 text-base sm:text-lg">

                <MapPin className="w-4 h-4 text-[#d4af37]" />

                <span>
                  {venue.location}
                </span>

              </div>

              {venue.address && (
                <p className="text-gray-500 text-sm mt-1">
                  {venue.address}
                </p>
              )}

            </div>


            {/* SHARE BUTTON */}

            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition w-fit"
            >

              <Share2 className="w-4 h-4" />

              Share

            </button>

          </div>


          {/* =================================================
              IMAGE GALLERY
          ================================================= */}

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3">

            {/* MAIN IMAGE */}

            <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-gray-100">

              <img
                src={displayImages[0]}
                alt={venue.name}
                className="w-full h-full object-cover cursor-pointer hover:scale-[1.01] transition duration-300"
                onClick={() =>
                  setSelectedImage(displayImages[0])
                }
              />

            </div>


            {/* SMALL IMAGES */}

            <div className="grid grid-cols-2 gap-3 h-[300px] sm:h-[400px] lg:h-[500px]">

              {displayImages
                .slice(1, 5)
                .map((image, index) => (

                  <div
                    key={`${image}-${index}`}
                    className="rounded-xl overflow-hidden relative bg-gray-100"
                  >

                    <img
                      src={image}
                      alt={`${venue.name} ${index + 2}`}
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition duration-300"
                      onClick={() =>
                        setSelectedImage(image)
                      }
                    />


                    {/* VIEW ALL PHOTOS */}

                    {index === 3 &&
                      displayImages.length > 5 && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedImage(image)
                          }
                          className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition"
                        >
                          View all photos
                        </button>
                      )}

                  </div>

                ))}


              {/* EMPTY IMAGE PLACEHOLDERS */}

              {displayImages.length === 1 && (
                <>
                  <div className="rounded-xl bg-gray-100" />
                  <div className="rounded-xl bg-gray-100" />
                  <div className="rounded-xl bg-gray-100" />
                  <div className="rounded-xl bg-gray-100" />
                </>
              )}

              {displayImages.length === 2 && (
                <>
                  <div className="rounded-xl bg-gray-100" />
                  <div className="rounded-xl bg-gray-100" />
                  <div className="rounded-xl bg-gray-100" />
                </>
              )}

              {displayImages.length === 3 && (
                <>
                  <div className="rounded-xl bg-gray-100" />
                  <div className="rounded-xl bg-gray-100" />
                </>
              )}

              {displayImages.length === 4 && (
                <div className="rounded-xl bg-gray-100" />
              )}

            </div>

          </div>

        </section>


        {/* ===================================================
            CONTENT + BOOKING
        =================================================== */}

        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 mt-14">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-8">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div>

              {/* ABOUT */}

              <div className="mb-10">

                <h2 className="text-2xl sm:text-3xl font-bold text-[#071a33] mb-5">
                  About {venue.name}
                </h2>

                <p className="text-gray-600 leading-7 whitespace-pre-line">
                  {venue.description}
                </p>

              </div>


              {/* =================================================
                  AMENITIES
              ================================================= */}

              <div className="space-y-3">

                {finalAmenities.map((amenity, index) => (

                  <div
                    key={`${amenity.title}-${index}`}
                    className="border border-gray-200 rounded-2xl overflow-hidden"
                  >

                    <button
                      type="button"
                      onClick={() => {
                        setOpenAmenity(
                          openAmenity === index
                            ? null
                            : index
                        );
                      }}
                      className="w-full flex items-center justify-between px-5 py-5 text-left hover:bg-gray-50 transition"
                    >

                      <div className="flex items-center gap-4">

                        <span className="text-xl w-7 text-center">
                          {amenity.icon}
                        </span>

                        <span className="text-base sm:text-lg font-medium text-[#16365f]">
                          {amenity.title}
                        </span>

                      </div>


                      <span className="text-gray-500">

                        {openAmenity === index ? (
                          <ChevronUp className="w-5 h-5" />
                               {/* ===================================================
            LOCATION
        =================================================== */}

        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 mt-16 mb-16">

          <div className="mb-8">

            <div className="flex items-center gap-3">

              <MapPin className="w-7 h-7 text-[#d4af37]" />

              <h2 className="text-3xl sm:text-4xl font-bold text-[#071a33]">
                Location
              </h2>

            </div>

            <p className="text-gray-600 mt-2">
              {venue.location}
            </p>

            {venue.address && (
              <p className="text-gray-500 text-sm mt-1">
                {venue.address}
              </p>
            )}

          </div>


          {/* =================================================
              MAP
          ================================================= */}

          <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">

            {venue.mapUrl ? (

              <iframe
                src={venue.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`${venue.name} location`}
              />

            ) : (

              <div className="w-full h-full flex items-center justify-center text-center px-6">

                <div>

                  <MapPin className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {venue.location}
                  </h3>

                  <p className="text-gray-500 max-w-md">
                    Location map will appear here when the admin adds
                    the map information.
                  </p>

                </div>

              </div>

            )}

          </div>

        </section>


        {/* ===================================================
            BACK TO FARMHOUSES
        =================================================== */}

        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 pb-16">

          <Link
            href="/farmhouses"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition"
          >

            <ArrowLeft className="w-4 h-4" />

            Back to Farmhouses

          </Link>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />


      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute top-5 right-5 text-white w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 transition"
          >

            <X className="w-7 h-7" />

          </button>


          {/* IMAGE */}

          <img
            src={selectedImage}
            alt={venue.name}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(event) =>
              event.stopPropagation()
            }
          />

        </div>

      )}


           {/* =====================================================
          WHATSAPP FLOATING BUTTON
      ===================================================== */}

      <a
        href="https://wa.me/917838008069"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9998] w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 sm:w-9 sm:h-9 fill-white"
        >
          <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.14.18 1.91 2.92 4.63 4.09.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />

          <path d="M16 3C8.83 3 3 8.83 3 16c0 2.29.6 4.44 1.65 6.3L3 29l6.88-1.61A12.93 12.93 0 0016 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.6c-2.04 0-4.03-.55-5.78-1.59l-.41-.24-4.08.96.97-3.98-.27-.41A10.58 10.58 0 015.4 16C5.4 10.15 10.15 5.4 16 5.4S26.6 10.15 26.6 16 21.85 26.6 16 26.6z" />
        </svg>
      </a>

    </div>
  );
};

export default VenuePage;
