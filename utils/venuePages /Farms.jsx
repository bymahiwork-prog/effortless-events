"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Farms = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchFarmhouses();
  }, []);

  useEffect(() => {
    // Load Elfsight script
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");

      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;

      document.body.appendChild(script);
    }

    // Reinitialize Elfsight after the script loads
    const timer = setTimeout(() => {
      if (window.eapps) {
        window.eapps.init();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [venues]);

  const fetchFarmhouses = async () => {
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
          `Failed to fetch venues: ${response.status}`
        );
      }

      const data = await response.json();

      setVenues(
        Array.isArray(data?.products)
          ? data.products
          : []
      );
    } catch (error) {
      console.error(
        "Error fetching farmhouses:",
        error
      );

      setVenues([]);

      setError(
        "We're unable to load the farmhouses right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     LOADING STATE
  ========================================================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">

          <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4" />

          <h2 className="text-xl font-semibold text-gray-900">
            Loading Farmhouses...
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Please wait while we load the latest listings.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* =====================================================
            FARMHOUSES
        ===================================================== */}

        <div className="mb-16">

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Farm Houses
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Showing {venues.length} farm houses
          </p>


          {/* =================================================
              API ERROR
          ================================================= */}

          {error && (
            <div className="border border-gray-200 rounded-xl p-8 text-center">

              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Farmhouses are temporarily unavailable
              </h2>

              <p className="text-gray-600 mb-5">
                {error}
              </p>

              <button
                onClick={fetchFarmhouses}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Try Again
              </button>

            </div>
          )}


          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {!error && venues.length === 0 && (
            <div className="border border-gray-200 rounded-xl p-10 text-center">

              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No farmhouses available
              </h2>

              <p className="text-gray-600">
                Please check back shortly for new listings.
              </p>

            </div>
          )}


          {/* =================================================
              VENUE GRID
          ================================================= */}

          {venues.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {venues.map((venue) => (

                <div
                  key={venue.id}
                  className="bg-white overflow-hidden shadow-sm border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="relative h-56 overflow-hidden bg-gray-100">

                    <img
                      src={
                        venue.image ||
                        "https://placehold.co/1200x800/e2e8f0/64748b?text=Farmhouse"
                      }
                      alt={
                        venue.product_name ||
                        "Farmhouse"
                      }
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/1200x800/e2e8f0/64748b?text=Image+Not+Available";
                      }}
                    />

                  </div>


                  {/* =================================================
                      DETAILS
                  ================================================= */}

                  <div className="p-4">

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {venue.product_name ||
                        "Farmhouse"}
                    </h3>


                    {/* LOCATION */}

                    <p className="flex items-center text-gray-600 text-sm mb-3">

                      <span className="mr-1 flex-shrink-0 text-sm">
                        ●
                      </span>

                      {venue.product_location ||
                        "Location unavailable"}

                    </p>


                    {/* =================================================
                        RATING + CATEGORY
                    ================================================= */}

                    <div className="flex items-center justify-between mb-3">

                      <div className="flex items-center">

                        <span className="text-yellow-400 mr-1 text-base">
                          ★
                        </span>

                        <span className="font-medium">
                          {venue.rating || "5.0"}
                        </span>

                      </div>


                      {venue.category_name && (
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                          {venue.category_name}
                        </span>
                      )}

                    </div>


                    {/* =================================================
                        PRICE
                    ================================================= */}

                    {venue.product_price && (
                      <p className="text-lg font-semibold text-black mb-3">
                        {venue.product_price}
                      </p>
                    )}


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p className="text-sm text-gray-600 line-clamp-4 mb-4">
                      {venue.product_detail ||
                        "Discover this beautiful farmhouse with Effortless Events."}
                    </p>


                    {/* =================================================
                        DETAILS BUTTON
                    ================================================= */}

                    <Link
                      href={`/venues/${venue.id}`}
                      className="block w-full text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>


        {/* =====================================================
            REVIEWS
        ===================================================== */}

        <div>

          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Reviews for Farm Houses
          </h2>


          {/* ELFSIGHT GOOGLE REVIEWS */}

          <div className="w-full">

            <div
              className="elfsight-app-cf2a2808-87bc-4a9d-8105-d801d0a7be8b"
              data-elfsight-app-lazy
            ></div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Farms;
