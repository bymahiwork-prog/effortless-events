"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import FarmBookingPage from "../../components/FarmBookingPage";

export default function ApartmentDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!params?.id) return;

    const fetchApartment = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/venues/${params.id}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch apartment: ${response.status}`
          );
        }

        const data = await response.json();

        if (data?.success && data?.venue) {
          setVenue(data.venue);
        } else {
          throw new Error(
            data?.error || "Apartment not found"
          );
        }
      } catch (err) {
        console.error(
          "Apartment details error:",
          err
        );

        setError(
          "We&apos;re unable to load this apartment right now."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchApartment();
  }, [params?.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#E4D078] rounded-full animate-spin mx-auto mb-4" />

          <h1 className="text-xl font-semibold text-black">
            Loading apartment...
          </h1>

          <p className="text-gray-500 mt-2">
            Please wait while we load the property details.
          </p>
        </div>
      </main>
    );
  }

  if (error || !venue) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">
            🏠
          </div>

          <h1 className="text-2xl font-bold text-black mb-3">
            Apartment not found
          </h1>

          <p className="text-gray-500 mb-6">
            {error ||
              "The apartment you are looking for could not be found."}
          </p>

          <button
            type="button"
            onClick={() =>
              router.push("/apartments")
            }
            className="bg-[#E4D078] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d5bd61] transition"
          >
            Browse Apartments
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <FarmBookingPage venue={venue} />
    </main>
  );
}
