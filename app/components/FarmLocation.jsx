"use client";

import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

export default function LocationSection({ venue }) {
  if (!venue) {
    return null;
  }

  /*
   * ==========================================
   * LOCATION
   * ==========================================
   */

  const location =
    venue.product_location ||
    venue.location ||
    venue.city ||
    "Delhi NCR";

  /*
   * ==========================================
   * ADDRESS
   * ==========================================
   */

  const address =
    venue.product_address ||
    venue.address ||
    "";

  /*
   * ==========================================
   * GOOGLE MAPS LOCATION
   *
   * IMPORTANT:
   * We deliberately DO NOT use product_name.
   *
   * The map is generated only from the actual
   * address/location information.
   * ==========================================
   */

  const searchLocation = [
    address,
    location,
    "Delhi NCR",
    "India",
  ]
    .filter(Boolean)
    .join(", ");

  /*
   * ==========================================
   * GOOGLE MAPS SEARCH URL
   * ==========================================
   */

  const googleMapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      searchLocation
    )}`;

  /*
   * ==========================================
   * EXISTING MAP URL
   *
   * If product_map exists, keep it available
   * for the Open in Google Maps button.
   * Otherwise use our automatic location URL.
   * ==========================================
   */

  const existingMapUrl =
    venue.product_map ||
    venue.map_url ||
    venue.mapUrl ||
    venue.location_map ||
    "";

  const finalMapUrl =
    typeof existingMapUrl === "string" &&
    existingMapUrl.trim()
      ? existingMapUrl
      : googleMapsUrl;

  /*
   * ==========================================
   * MAP EMBED URL
   * ==========================================
   *
   * Again, this uses ONLY location/address.
   */

  const embedUrl =
    `https://www.google.com/maps?q=${encodeURIComponent(
      searchLocation
    )}&output=embed`;

  return (
    <section className="w-full bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* =====================================================
            LOCATION HEADING
        ===================================================== */}

        <div className="mb-8">

          <div className="flex items-center gap-3">

            <MapPin
              className="w-7 h-7 text-[#d4af37]"
              strokeWidth={2}
            />

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071a33]">
              Location
            </h2>

          </div>

          {/* CITY / LOCATION */}

          <p className="text-gray-600 mt-2">
            {location}
          </p>

          {/* ADDRESS */}

          {address && (
            <p className="text-gray-500 text-sm mt-1">
              {address}
            </p>
          )}

        </div>


        {/* =====================================================
            GOOGLE MAP
        ===================================================== */}

        <div className="relative w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">

          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{
              border: 0,
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={`${location} location`}
          />


          {/* =================================================
              OPEN IN GOOGLE MAPS
          ================================================= */}

          <a
            href={finalMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-white text-[#071a33] px-5 py-3 rounded-full shadow-lg border border-gray-200 font-semibold text-sm whitespace-nowrap hover:bg-[#d4af37] hover:text-white transition-all duration-300"
          >

            <MapPin className="w-4 h-4" />

            Open in Google Maps

            <ExternalLink className="w-4 h-4" />

          </a>

        </div>

      </div>

    </section>
  );
}
