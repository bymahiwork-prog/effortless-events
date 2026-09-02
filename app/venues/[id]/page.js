"use client";

import { useEffect, useState } from "react";
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
    if (!id) return;

    async function loadVenue() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`/api/venues/${id}`, {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.error || "Venue not found"
          );
        }

        setVenue(data.venue);
      } catch (error) {
        console.error("Venue page error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load venue"
        );
      } finally {
        setLoading(false);
      }
    }

    loadVenue();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar variant="transparent" />

        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4" />

            <h2 className="text-xl font-semibold text-gray-900">
              Loading venue...
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Please wait while we load the venue details.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !venue) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar variant="transparent" />

        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">

            <h1 className="text-4xl font-serif text-gray-900 mb-4">
              Venue Not Found
            </h1>

            <p className="text-gray-500 mb-6">
              {error || "This venue could not be found."}
            </p>

          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <Navbar variant="transparent" />

      {/* VENUE GALLERY */}
      <MarketGallery venue={venue} />

      {/* VENUE BOOKING / INFORMATION */}
      <FarmBookingPage venue={venue} />

      {/* LOCATION */}
      <FarmLocation venue={venue} />

      {/* POPULAR VENUES */}
      <PopularVenues venue={venue} />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
