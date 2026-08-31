"use client";

import React from "react";
import { MapPin } from "lucide-react";

export default function LocationSection({ venue }) {
  if (!venue) {
    return null;
  }

  const location =
    venue.product_location ||
    venue.location ||
    venue.city ||
    "Delhi NCR";

  const address =
    venue.product_address ||
    venue.address ||
    "";

  const mapUrl =
    venue.product_map ||
    venue.map_url ||
    venue.mapUrl ||
    venue.location_map ||
    "";

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Heading */}

        <div className="mb-8">

          <div className="flex items-center gap-3">

            <MapPin className="w-7 h-7 text-[#d4af37]" />

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071a33]">
              Location
            </h2>

          </div>

          <p className="text-gray-600 mt-2">
            {location}
          </p>

          {address && (
            <p className="text-gray-500 text-sm mt-1">
              {address}
            </p>
          )}

        </div>

        {/* Map */}

        <div className="w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">

          {mapUrl ? (

            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`${location} location`}
            />

          ) : (

            <div className="w-full h-full flex items-center justify-center text-center px-6">

              <div>

                <MapPin className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {location}
                </h3>

                <p className="text-gray-500 max-w-md">
                  Location map will appear here when the
                  map information is available.
                </p>

              </div>

            </div>

          )}

        </div>

      </div>
    </section>
  );
}
