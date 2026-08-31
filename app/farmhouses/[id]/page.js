"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MarketGallery from "../../components/MarketGallery";
import FarmBookingPage from "../../components/FarmBookingPage";
import FarmLocation from "../../components/FarmLocation";
import PopularVenues from "../../components/PopularVenues";

export default function VenuePage() {
  const params = useParams();
  const id = params?.id;

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchVenue = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/venues/${id}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error ||
              "Unable to load farmhouse."
          );
        }

        if (data?.success === false) {
          throw new Error(
            data?.error ||
              "Unable to load farmhouse."
          );
        }

        /*
         * The API may return the venue in
         * different properties depending on
         * the backend response.
         */

        const rawVenue =
          data?.venue ||
          data?.product ||
          data?.data ||
          data;

        if (!rawVenue) {
          throw new Error(
            "Farmhouse information was not found."
          );
        }

        setVenue(rawVenue);
      } catch (err) {
        console.error(
          "Farmhouse detail error:",
          err
        );

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

  /*
   * ==========================================
   * LOADING STATE
   * ==========================================
   */

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-[#071a33]">

        <Navbar />

        <main className="pt-24 pb-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-center min-h-[500px]">

              <div className="text-center">

                <div className="w-12 h-12 border-4 border-gray-200 border-t-[#E4D078] rounded-full animate-spin mx-auto mb-5" />

                <h1 className="text-xl sm:text-2xl font-semibold text-[#071a33]">
                  Loading farmhouse...
                </h1>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Please wait while we load the venue details.
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
   * ERROR STATE
   * ==========================================
   */

  if (error || !venue) {
    return (
      <div className="min-h-screen bg-white text-[#071a33]">

        <Navbar />

        <main className="pt-24 pb-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="min-h-[500px] flex items-center justify-center">

              <div className="border border-gray-200 rounded-2xl p-8 sm:p-12 text-center max-w-lg w-full shadow-sm">

                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">

                  <span className="text-2xl">
                    🏡
                  </span>

                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-[#071a33] mb-3">
                  Farmhouse not found
                </h1>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                  {error ||
                    "The farmhouse information could not be found."}
                </p>

                <a
                  href="/farmhouses"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#E4D078] text-white font-medium hover:opacity-90 transition"
                >
                  Browse Farmhouses
                </a>

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
   * MAIN VENUE PAGE
   * ==========================================
   */

  return (
    <div className="min-h-screen bg-white text-[#071a33]">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <Navbar />

      <main>

        {/* =========================================
            IMAGE GALLERY
        ========================================= */}

        <MarketGallery venue={venue} />


        {/* =========================================
            BOOKING + ABOUT + AMENITIES
        ========================================= */}

        <FarmBookingPage venue={venue} />


        {/* =========================================
            LOCATION
        ========================================= */}

        <FarmLocation venue={venue} />


        {/* =========================================
            POPULAR VENUES
        ========================================= */}

        <PopularVenues />


      </main>


      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />


      {/* =========================================
          WHATSAPP FLOATING BUTTON
      ========================================= */}

      <a
        href="https://wa.me/917838008069"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9998] w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
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
}
