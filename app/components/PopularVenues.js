"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";

const PopularVenues = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularVenues = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "/api/farmhouses?limit=6&page=1",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load popular venues");
        }

        const data = await response.json();

        if (
          data?.success &&
          Array.isArray(data.products)
        ) {
          setVenues(data.products);
        } else {
          setVenues([]);
        }
      } catch (error) {
        console.error(
          "Popular venues error:",
          error
        );

        setVenues([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularVenues();
  }, []);

  const getVenueName = (venue) => {
    return (
      venue?.product_name ||
      venue?.name ||
      venue?.title ||
      "Farmhouse"
    );
  };

  const getVenueLocation = (venue) => {
    return (
      venue?.product_location ||
      venue?.location ||
      venue?.city ||
      "Delhi NCR"
    );
  };

  const getVenuePrice = (venue) => {
    const price =
      venue?.product_price ||
      venue?.price ||
      venue?.startingPrice ||
      "";

    if (!price) {
      return "";
    }

    const numericPrice = Number(
      String(price).replace(/[^0-9.]/g, "")
    );

    if (
      Number.isFinite(numericPrice) &&
      numericPrice > 0
    ) {
      return numericPrice.toLocaleString("en-IN");
    }

    return String(price).replace(/^₹/, "");
  };

  const getVenueImage = (venue) => {
    if (
      Array.isArray(venue?.images) &&
      venue.images.length > 0
    ) {
      return venue.images[0];
    }

    if (venue?.image) {
      return venue.image;
    }

    return "/placeholder-farmhouse.jpg";
  };

  const getVenueRating = (venue) => {
    return venue?.rating || "5.0";
  };

  if (loading) {
    return (
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 mt-16 mb-16">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#071a33]">
            Popular Venues
          </h2>

          <p className="text-gray-600 mt-2">
            Explore some of our most popular farmhouse
            venues.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white animate-pulse"
            >
              <div className="h-56 bg-gray-200" />

              <div className="p-5">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />

                <div className="h-4 bg-gray-200 rounded w-1/2 mb-5" />

                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!venues.length) {
    return null;
  }

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 mt-16 mb-16">

      {/* SECTION HEADER */}

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#071a33]">
            Popular Venues
          </h2>

          <p className="text-gray-600 mt-2">
            Explore some of our most popular farmhouse
            venues.
          </p>
        </div>

        <Link
          href="/farmhouses"
          className="w-fit text-sm sm:text-base font-medium text-[#071a33] hover:text-[#d4af37] transition"
        >
          View all venues →
        </Link>

      </div>

      {/* VENUE GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {venues.map((venue) => {

          const venueName =
            getVenueName(venue);

          const venueLocation =
            getVenueLocation(venue);

          const venueImage =
            getVenueImage(venue);

          const venuePrice =
            getVenuePrice(venue);

          const venueRating =
            getVenueRating(venue);

          return (
            <Link
              key={venue.id}
              href={`/farmhouses/${venue.id}`}
              className="group block"
            >

              <article className="h-full border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300">

                {/* IMAGE */}

                <div className="relative h-56 overflow-hidden bg-gray-100">

                  <img
                    src={venueImage}
                    alt={venueName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src =
                        "/placeholder-farmhouse.jpg";
                    }}
                  />

                  {/* RATING */}

                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow-sm">

                    <Star
                      className="w-4 h-4 fill-[#d4af37] text-[#d4af37]"
                    />

                    <span className="text-sm font-medium text-gray-900">
                      {venueRating}
                    </span>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-5">

                  <h3 className="text-lg sm:text-xl font-semibold text-[#071a33] line-clamp-1 group-hover:text-[#d4af37] transition-colors">
                    {venueName}
                  </h3>

                  {/* LOCATION */}

                  <div className="flex items-start gap-2 mt-2">

                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />

                    <p className="text-sm text-gray-600 line-clamp-2">
                      {venueLocation}
                    </p>

                  </div>

                  {/* PRICE */}

                  {venuePrice && (
                    <div className="mt-5 pt-4 border-t border-gray-100">

                      <span className="text-sm text-gray-500">
                        Starting from
                      </span>

                      <div className="mt-1">

                        <span className="text-xl font-bold text-[#172033]">
                          ₹{venuePrice}
                        </span>

                        <span className="text-sm text-gray-500 ml-1">
                          onwards
                        </span>

                      </div>

                    </div>
                  )}

                  {/* CTA */}

                  <div className="mt-4 text-sm font-medium text-[#071a33] group-hover:text-[#d4af37] transition-colors">
                    View venue →
                  </div>

                </div>

              </article>

            </Link>
          );
        })}

      </div>

    </section>
  );
};

export default PopularVenues;
