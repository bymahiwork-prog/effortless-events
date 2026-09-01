"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

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
      <main className="min-h-screen bg-[#0F0803] text-white flex items-center justify-center">
        <p className="text-[#C9A34A]">
          Loading venue...
        </p>
      </main>
    );
  }

  if (error || !venue) {
    return (
      <main className="min-h-screen bg-[#0F0803] text-white flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-4xl font-serif mb-4">
            Venue Not Found
          </h1>

          <p className="text-white/60 mb-6">
            {error || "This venue could not be found."}
          </p>

          <Link
            href="/weddings"
            className="inline-block px-6 py-3 bg-[#C9A34A] text-black"
          >
            Back to Wedding Venues
          </Link>

        </div>
      </main>
    );
  }

  const images =
    Array.isArray(venue.images) && venue.images.length > 0
      ? venue.images
      : venue.image
      ? [venue.image]
      : [];

  return (
    <main className="min-h-screen bg-[#0F0803] text-white">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <Link
          href="/weddings"
          className="inline-block text-[#C9A34A] mb-8"
        >
          ← Back to Wedding Venues
        </Link>

        {images.length > 0 && (
          <div className="w-full h-[500px] overflow-hidden rounded-[28px]">
            <img
              src={images[0]}
              alt={venue.product_name || "Wedding venue"}
              className="w-full h-full object-cover"
            />
          </div>
        )}

      </section>

      {/* Details */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <p className="text-[#C9A34A] uppercase tracking-[0.2em] text-sm mb-4">
          Wedding Venue
        </p>

        <h1 className="text-5xl font-serif mb-5">
          {venue.product_name || "Wedding Venue"}
        </h1>

        {venue.product_location && (
          <p className="text-[#C9A34A] mb-8">
            {venue.product_location}
          </p>
        )}

        <div className="max-w-3xl">

          <h2 className="text-3xl font-serif mb-5">
            About This Venue
          </h2>

          <p className="text-white/70 leading-8 whitespace-pre-line">
            {venue.product_detail ||
              "Discover this beautiful venue with Effortless Events."}
          </p>

        </div>

      </section>

    </main>
  );
}
