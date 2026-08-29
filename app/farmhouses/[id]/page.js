"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function FarmhouseDetailsPage() {
  const params = useParams();
  const id = params?.id;

  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchFarmhouse = async () => {
      try {
        setLoading(true);
        setError("");

        /*
         * Your working API already returns all farmhouse listings.
         * We use that same API and find the requested farmhouse by ID.
         */
        const response = await fetch(
          "/api/venues?categoryId=1&limit=100",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch farmhouses: ${response.status}`
          );
        }

        const data = await response.json();

        if (
          !data?.success ||
          !Array.isArray(data?.products)
        ) {
          throw new Error("Invalid farmhouse data received.");
        }

        const foundVenue = data.products.find(
          (item) => String(item.id) === String(id)
        );

        if (!foundVenue) {
          throw new Error("Farmhouse not found.");
        }

        setVenue(foundVenue);
      } catch (err) {
        console.error("Error fetching farmhouse:", err);

        setVenue(null);
        setError(
          "We&apos;re unable to load this farmhouse right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFarmhouse();
  }, [id]);

  /*
   * LOADING
   */
  if (loading) {
    return (
      <main className="min-h-screen bg-[#0F0803] text-white flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-12 h-12 border-4 border-[#2A2118] border-t-[#C9A34A] rounded-full animate-spin mx-auto mb-6" />

          <h1 className="text-2xl md:text-3xl font-serif">
            Loading Farmhouse...
          </h1>

          <p className="text-[#B8AFA5] mt-3">
            Please wait while we load the farmhouse details.
          </p>
        </div>
      </main>
    );
  }

  /*
   * ERROR
   */
  if (!venue) {
    return (
      <main className="min-h-screen bg-[#0F0803] text-white flex items-center justify-center">
        <div className="text-center px-6 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">
            Farmhouse not found
          </h1>

          <p className="text-[#B8AFA5] mb-8">
            {error || "We&apos;re unable to load this farmhouse right now."}
          </p>

          <Link
            href="/farmhouses"
            className="inline-flex items-center justify-center px-7 py-3 bg-[#C9A34A] text-[#0F0803] font-medium rounded-md hover:bg-[#D8B25B] transition"
          >
            ← Back to Farmhouses
          </Link>
        </div>
      </main>
    );
  }

  /*
   * FARMHOUSE DETAILS
   */
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-[#0F0803] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">

          <Link
            href="/farmhouses"
            className="inline-flex items-center text-[#C9A34A] text-sm mb-8 hover:text-[#E1C56E] transition"
          >
            ← Back to Farmhouses
          </Link>

          <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] mb-4">
            Farmhouse
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium">
            {venue.product_name || "Farmhouse"}
          </h1>

          <p className="text-[#B8AFA5] mt-4">
            {venue.product_location || "Delhi NCR"}
          </p>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2">

            {/* IMAGE */}
            <div className="w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden bg-[#17110B] mb-8">

              <img
                src={
                  venue.image ||
                  "https://placehold.co/1200x800/17110B/C9A34A?text=Farmhouse"
                }
                alt={venue.product_name || "Farmhouse"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/1200x800/17110B/C9A34A?text=Image+Not+Available";
                }}
              />

            </div>

            {/* ABOUT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-5">
                About {venue.product_name || "This Farmhouse"}
              </h2>

              <p className="text-gray-600 leading-8 whitespace-pre-line">
                {venue.product_detail ||
                  "Discover this beautiful farmhouse with Effortless Events."}
              </p>
            </div>

            {/* BASIC DETAILS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">

              <div className="border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-2">
                  Location
                </p>

                <p className="font-medium">
                  {venue.product_location || "Delhi NCR"}
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-2">
                  Guest Rating
                </p>

                <p className="font-medium">
                  ★ {venue.rating || "5.0"}
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-2">
                  Category
                </p>

                <p className="font-medium">
                  Farmhouse
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT BOOKING CARD */}
          <div>
            <div className="border border-gray-200 rounded-2xl shadow-sm p-6 sticky top-6">

              <p className="text-sm text-gray-500 mb-2">
                Starting from
              </p>

              <div className="text-3xl font-bold text-gray-900">
                {venue.product_price
                  ? String(venue.product_price).startsWith("₹")
                    ? venue.product_price
                    : `₹${venue.product_price}`
                  : "Price on request"}
              </div>

              <p className="text-sm text-[#C9A34A] mt-1 mb-6">
                onwards
              </p>

              <div className="border-t border-gray-200 pt-6">

                <p className="text-gray-600 text-sm leading-6 mb-5">
                  Select your preferred date and event details
                  to enquire about this farmhouse.
                </p>

                <Link
                  href="/#get-in-touch"
                  className="block w-full text-center bg-[#C9A34A] text-[#0F0803] py-3.5 rounded-md font-medium hover:bg-[#D8B25B] transition"
                >
                  Enquire About This Farmhouse
                </Link>

              </div>

            </div>
          </div>

        </div>

      </section>

    </main>
  );
}
