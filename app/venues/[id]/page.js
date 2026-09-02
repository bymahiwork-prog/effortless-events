"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  MapPin,
  Phone,
  Star,
  Map,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function VenuePage() {
  const params = useParams();
  const id = params?.id;

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState(0);

  /*
   * ==========================================
   * LOAD VENUE
   * ==========================================
   */

  useEffect(() => {
    if (!id) return;

    async function loadVenue() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/venues/${id}`,
          {
            cache: "no-store",
          }
        );

        const contentType =
          response.headers.get("content-type") || "";

        let data;

        if (contentType.includes("application/json")) {
          data = await response.json();
        } else {
          const text = await response.text();

          throw new Error(
            text?.startsWith("<")
              ? "The venue API returned an invalid server response."
              : text || "Unable to load venue."
          );
        }

        if (!response.ok || !data?.success) {
          throw new Error(
            data?.error || "Venue not found."
          );
        }

        if (!data?.venue?.id) {
          throw new Error(
            "Venue information was not found."
          );
        }

        setVenue(data.venue);
      } catch (error) {
        console.error("Venue page error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load venue."
        );
      } finally {
        setLoading(false);
      }
    }

    loadVenue();
  }, [id]);

  /*
   * ==========================================
   * LOADING
   * ==========================================
   */

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-[#071a33]">
        <Navbar />

        <main className="pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="min-h-[500px] flex items-center justify-center">

              <div className="text-center">

                <div className="w-12 h-12 border-4 border-gray-200 border-t-[#C9A34A] rounded-full animate-spin mx-auto mb-5" />

                <h1 className="text-2xl font-serif">
                  Loading venue...
                </h1>

                <p className="text-gray-500 mt-2">
                  Please wait while we load the venue
                  details.
                </p>

              </div>

            </div>

          </div>
        </main>

        <Footer />
      </div>
    );
  }

  /*
   * ==========================================
   * ERROR
   * ==========================================
   */

  if (error || !venue) {
    return (
      <div className="min-h-screen bg-white text-[#071a33]">
        <Navbar />

        <main className="pt-28 pb-20">

          <div className="max-w-7xl mx-auto px-6">

            <div className="min-h-[500px] flex items-center justify-center">

              <div className="max-w-lg w-full text-center border border-gray-200 rounded-2xl p-10 shadow-sm">

                <h1 className="text-3xl font-serif mb-4">
                  Venue Not Found
                </h1>

                <p className="text-gray-500 leading-7 mb-7">
                  {error ||
                    "This venue could not be found."}
                </p>

                <Link
                  href="/farmhouses"
                  className="inline-flex px-7 py-3 rounded-full bg-[#C9A34A] text-black font-medium hover:bg-[#D8B25B] transition"
                >
                  Browse Venues
                </Link>

              </div>

            </div>

          </div>

        </main>

        <Footer />
      </div>
    );
  }

  /*
   * ==========================================
   * IMAGES
   * ==========================================
   */

  const images = [
    ...(venue.image ? [venue.image] : []),
    ...(Array.isArray(venue.images)
      ? venue.images
      : []),
  ].filter(
    (image, index, array) =>
      image &&
      array.indexOf(image) === index
  );

  /*
   * ==========================================
   * IMAGE NAVIGATION
   * ==========================================
   */

  const nextImage = () => {
    if (images.length === 0) return;

    setActiveImage((current) =>
      current >= images.length - 1
        ? 0
        : current + 1
    );
  };

  const previousImage = () => {
    if (images.length === 0) return;

    setActiveImage((current) =>
      current <= 0
        ? images.length - 1
        : current - 1
    );
  };

  /*
   * ==========================================
   * SHARE
   * ==========================================
   */

  const handleShare = async () => {
    try {
      if (
        typeof navigator !== "undefined" &&
        navigator.share
      ) {
        await navigator.share({
          title:
            venue.product_name ||
            "Effortless Events Venue",

          text:
            venue.product_detail ||
            "Check out this venue from Effortless Events.",

          url: window.location.href,
        });
      } else if (
        typeof navigator !== "undefined" &&
        navigator.clipboard
      ) {
        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Venue link copied!");
      }
    } catch (error) {
      console.error("Share error:", error);
    }
  };

  /*
   * ==========================================
   * MAIN PAGE
   * ==========================================
   */

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#071a33]">

      <Navbar />

      <main>

        {/* ==========================================
            HERO / GALLERY
        ========================================== */}

        <section className="pt-28 sm:pt-32">

          <div className="max-w-7xl mx-auto px-6">

            {/* Breadcrumb */}

            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-7">

              <Link
                href="/"
                className="hover:text-black transition"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                href="/farmhouses"
                className="hover:text-black transition"
              >
                Venues
              </Link>

              <span>/</span>

              <span className="text-gray-800">
                {venue.product_name ||
                  "Venue"}
              </span>

            </div>

            {/* Gallery */}

            {images.length > 0 ? (
              <div className="relative">

                <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden rounded-[24px] bg-gray-200">

                  <img
                    src={images[activeImage]}
                    alt={
                      venue.product_name ||
                      "Venue"
                    }
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";
                    }}
                  />

                  {/* Gradient */}

                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                  {/* Previous */}

                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black transition"
                    >
                      <ChevronLeft size={22} />
                    </button>
                  )}

                  {/* Next */}

                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black transition"
                    >
                      <ChevronRight size={22} />
                    </button>
                  )}

                  {/* Image counter */}

                  {images.length > 1 && (
                    <div className="absolute bottom-5 right-5 rounded-full bg-black/60 text-white px-4 py-2 text-xs backdrop-blur-sm">
                      {activeImage + 1} /{" "}
                      {images.length}
                    </div>
                  )}

                </div>

                {/* Thumbnails */}

                {images.length > 1 && (
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2">

                    {images.map(
                      (image, index) => (
                        <button
                          key={`${image}-${index}`}
                          type="button"
                          onClick={() =>
                            setActiveImage(index)
                          }
                          className={`flex-shrink-0 w-24 h-20 rounded-xl overflow-hidden border-2 transition ${
                            activeImage === index
                              ? "border-[#C9A34A]"
                              : "border-transparent"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${venue.product_name || "Venue"} image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      )
                    )}

                  </div>
                )}

              </div>
            ) : (
              <div className="w-full h-[420px] rounded-[24px] bg-gray-200 flex items-center justify-center">

                <p className="text-gray-500">
                  Venue images are currently unavailable.
                </p>

              </div>
            )}

          </div>

        </section>

        {/* ==========================================
            VENUE HEADER
        ========================================== */}

        <section className="max-w-7xl mx-auto px-6 py-12">

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

            <div className="max-w-4xl">

              {/* Category */}

              {venue.category_name && (
                <p className="text-xs uppercase tracking-[0.25em] text-[#B38B45] font-semibold mb-4">
                  {venue.category_name}
                </p>
              )}

              {/* Name */}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#111] leading-tight">
                {venue.product_name ||
                  "Effortless Venue"}
              </h1>

              {/* Location */}

              <div className="flex flex-wrap items-center gap-5 mt-5">

                {venue.product_location && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin
                      size={18}
                      className="text-[#B38B45]"
                    />

                    <span>
                      {venue.product_location}
                    </span>
                  </div>
                )}

                {venue.rating && (
                  <div className="flex items-center gap-2">

                    <Star
                      size={18}
                      fill="currentColor"
                      className="text-[#C49A4A]"
                    />

                    <span className="font-semibold">
                      {venue.rating}
                    </span>

                    <span className="text-gray-500">
                      Guest rating
                    </span>

                  </div>
                )}

              </div>

            </div>

            {/* Share */}

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 self-start rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium hover:border-black transition"
            >
              <Share2 size={17} />
              Share Venue
            </button>

          </div>

        </section>

        {/* ==========================================
            MAIN INFORMATION
        ========================================== */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT CONTENT */}

            <div className="lg:col-span-2 space-y-8">

              {/* About */}

              <div className="rounded-[22px] bg-white border border-gray-200 p-7 sm:p-9">

                <h2 className="text-3xl font-serif text-[#111] mb-5">
                  About This Venue
                </h2>

                <p className="text-gray-600 leading-8 whitespace-pre-line">
                  {venue.product_detail ||
                    "Discover this beautiful venue with Effortless Events."}
                </p>

              </div>

              {/* Location */}

              <div className="rounded-[22px] bg-white border border-gray-200 p-7 sm:p-9">

                <div className="flex items-center gap-3 mb-5">

                  <MapPin
                    size={22}
                    className="text-[#B38B45]"
                  />

                  <h2 className="text-3xl font-serif text-[#111]">
                    Location
                  </h2>

                </div>

                {venue.product_location && (
                  <p className="text-gray-700 text-lg mb-3">
                    {venue.product_location}
                  </p>
                )}

                {venue.product_address && (
                  <p className="text-gray-500 leading-7">
                    {venue.product_address}
                  </p>
                )}

                {venue.product_map && (
                  <a
                    href={venue.product_map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-[#B38B45] transition"
                  >
                    <Map size={17} />
                    View on Google Maps
                  </a>
                )}

              </div>

              {/* Contact */}

              {venue.product_number && (
                <div className="rounded-[22px] bg-white border border-gray-200 p-7 sm:p-9">

                  <div className="flex items-center gap-3 mb-5">

                    <Phone
                      size={22}
                      className="text-[#B38B45]"
                    />

                    <h2 className="text-3xl font-serif text-[#111]">
                      Contact
                    </h2>

                  </div>

                  <p className="text-gray-600 mb-5">
                    Speak with our team about availability,
                    pricing and your event requirements.
                  </p>

                  <a
                    href={`tel:${venue.product_number}`}
                    className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-[#B38B45] transition"
                  >
                    <Phone size={17} />
                    {venue.product_number}
                  </a>

                </div>
              )}

            </div>

            {/* RIGHT SIDEBAR */}

            <aside>

              <div className="lg:sticky lg:top-28">

                <div className="rounded-[22px] bg-white border border-gray-200 p-7 shadow-sm">

                  <p className="text-xs uppercase tracking-[0.2em] text-[#B38B45] font-semibold mb-4">
                    Venue Details
                  </p>

                  <h2 className="text-2xl font-serif text-[#111] mb-7">
                    {venue.product_name ||
                      "Venue"}
                  </h2>

                  {/* Price */}

                  <div className="border-b border-gray-100 pb-5 mb-5">

                    <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">
                      Pricing
                    </p>

                    {venue.product_price ? (
                      <p className="text-2xl font-semibold text-[#111]">
                        {venue.product_price}
                      </p>
                    ) : (
                      <p className="text-gray-500">
                        Price on request
                      </p>
                    )}

                  </div>

                  {/* Category */}

                  {venue.category_name && (
                    <div className="border-b border-gray-100 pb-5 mb-5">

                      <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">
                        Category
                      </p>

                      <p className="text-gray-800">
                        {venue.category_name}
                      </p>

                    </div>
                  )}

                  {/* Rating */}

                  <div className="border-b border-gray-100 pb-5 mb-5">

                    <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">
                      Rating
                    </p>

                    <div className="flex items-center gap-2">

                      <Star
                        size={18}
                        fill="currentColor"
                        className="text-[#C49A4A]"
                      />

                      <span className="font-semibold">
                        {venue.rating || "5.0"}
                      </span>

                    </div>

                  </div>

                  {/* Location */}

                  {venue.product_location && (
                    <div className="border-b border-gray-100 pb-5 mb-5">

                      <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">
                        Location
                      </p>

                      <p className="text-gray-700">
                        {venue.product_location}
                      </p>

                    </div>
                  )}

                  {/* Enquiry */}

                  <a
                    href="#enquire"
                    className="w-full inline-flex items-center justify-center rounded-full bg-[#C9A34A] text-black px-6 py-4 font-semibold hover:bg-[#D8B25B] transition"
                  >
                    Enquire About This Venue
                  </a>

                </div>

              </div>

            </aside>

          </div>

        </section>

        {/* ==========================================
            VENUE RECORD INFORMATION
        ========================================== */}

        <section className="border-t border-gray-200 bg-white">

          <div className="max-w-7xl mx-auto px-6 py-16">

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.2em] text-[#B38B45] font-semibold mb-4">
                Venue Information
              </p>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#111] mb-8">
                Listing Details
              </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* ID */}

              <div className="rounded-2xl border border-gray-200 p-5">

                <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">
                  Venue ID
                </p>

                <p className="font-medium text-gray-900">
                  {venue.id}
                </p>

              </div>

              {/* Category ID */}

              <div className="rounded-2xl border border-gray-200 p-5">

                <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">
                  Category ID
                </p>

                <p className="font-medium text-gray-900">
                  {venue.product_category ||
                    "—"}
                </p>

              </div>

              {/* Status */}

              <div className="rounded-2xl border border-gray-200 p-5">

                <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">
                  Listing Status
                </p>

                <p className="font-medium text-green-700">
                  {Number(venue.status) === 1
                    ? "Active"
                    : "Unavailable"}
                </p>

              </div>

              {/* Created */}

              {venue.created_date && (
                <div className="rounded-2xl border border-gray-200 p-5">

                  <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">
                    Listed On
                  </p>

                  <p className="font-medium text-gray-900">
                    {venue.created_date}
                  </p>

                </div>
              )}

              {/* Last Updated */}

              {venue.last_update && (
                <div className="rounded-2xl border border-gray-200 p-5">

                  <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">
                    Last Updated
                  </p>

                  <p className="font-medium text-gray-900">
                    {venue.last_update}
                  </p>

                </div>
              )}

            </div>

          </div>

        </section>

        {/* ==========================================
            ENQUIRY
        ========================================== */}

        <section
          id="enquire"
          className="bg-[#120B05] text-white"
        >

          <div className="max-w-5xl mx-auto px-6 py-20 text-center">

            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A34A] mb-4">
              Interested in This Venue?
            </p>

            <h2 className="text-4xl sm:text-5xl font-serif mb-5">
              Let's Make Your Event Effortless
            </h2>

            <p className="text-white/65 leading-7 max-w-2xl mx-auto mb-8">
              Tell our team about your event, guest count,
              date and requirements. We'll help you with
              availability, pricing and the next steps.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <a
                href={`https://wa.me/917838008069?text=${encodeURIComponent(
                  `Hi Effortless Events, I am interested in ${venue.product_name || "this venue"} (Venue ID: ${venue.id}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#C9A34A] text-black px-7 py-3.5 font-semibold hover:bg-white transition"
              >
                WhatsApp Us
              </a>

              {venue.product_number && (
                <a
                  href={`tel:${venue.product_number}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-semibold hover:bg-white hover:text-black transition"
                >
                  Call Venue
                </a>
              )}

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}
