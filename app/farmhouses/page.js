"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Farms = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
          `Failed to fetch farmhouses: ${response.status}`
        );
      }

      const data = await response.json();

      if (data?.success && Array.isArray(data?.products)) {
        setVenues(data.products);
      } else {
        setVenues([]);
      }
    } catch (error) {
      console.error(
        "Error fetching farmhouses:",
        error
      );

      setVenues([]);

      setError(
        "We&apos;re unable to load the farmhouses right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFarmhouses();
  }, []);

  /*
   * ELFSIGHT GOOGLE REVIEWS
   */
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");

      script.src =
        "https://elfsightcdn.com/platform.js";

      script.async = true;

      document.body.appendChild(script);
    }

    const timer = setTimeout(() => {
      if (
        typeof window !== "undefined" &&
        window.eapps &&
        typeof window.eapps.init === "function"
      ) {
        window.eapps.init();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [venues]);

  /*
   * LOADING STATE
   */
  if (loading) {
    return (
      <main className="min-h-screen bg-[#0F0803] text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="text-center">

            <div className="w-12 h-12 border-4 border-[#2A2118] border-t-[#C9A34A] rounded-full animate-spin mx-auto mb-6" />

            <h1 className="text-2xl md:text-3xl font-serif">
              Loading Farmhouses...
            </h1>

            <p className="text-[#B8AFA5] mt-3">
              Please wait while we load our latest
              farmhouse listings.
            </p>

          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F0803] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#21150A] via-[#0F0803] to-[#0F0803]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-28 pb-20">

          <div className="max-w-4xl">

            <p className="text-sm uppercase tracking-[0.2em] text-[#C9A34A] mb-5">
              Farmhouses
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight">
              Farmhouses Across Delhi NCR
            </h1>

            <p className="text-[#D4C7B8] text-base md:text-lg leading-8 mt-6 max-w-3xl">
              Discover beautiful private farmhouses for
              birthdays, celebrations, parties, corporate
              gatherings and unforgettable weekend
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#farmhouses"
                className="inline-flex items-center justify-center px-7 py-3 bg-[#C9A34A] text-[#0F0803] font-medium rounded-md hover:bg-[#D8B25B] transition"
              >
                Explore Farmhouses
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center px-7 py-3 border border-[#3A2E22] text-white rounded-md hover:bg-[#17110B] transition"
              >
                Back to Home
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FARMHOUSE LISTINGS */}
      <section
        id="farmhouses"
        className="max-w-7xl mx-auto px-6 md:px-8 pb-24"
      >

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

          <div>

            <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] mb-3">
              Our Collection
            </p>

            <h2 className="text-3xl md:text-5xl font-serif">
              Popular Farmhouses
            </h2>

          </div>

          <p className="text-[#B8AFA5] text-sm">
            Showing {venues.length} farm{" "}
            {venues.length === 1 ? "house" : "houses"}
          </p>

        </div>

        {/* ERROR */}
        {error && (
          <div className="border border-[#3A2E22] bg-[#17110B] rounded-2xl p-10 text-center">

            <h2 className="text-2xl font-serif mb-3">
              Farmhouses are temporarily unavailable
            </h2>

            <p className="text-[#B8AFA5] mb-6">
              {error}
            </p>

            <button
              onClick={fetchFarmhouses}
              className="px-7 py-3 bg-[#C9A34A] text-[#0F0803] font-medium rounded-md hover:bg-[#D8B25B] transition"
            >
              Try Again
            </button>

          </div>
        )}

        {/* EMPTY STATE */}
        {!error && venues.length === 0 && (
          <div className="border border-[#3A2E22] bg-[#17110B] rounded-2xl p-12 text-center">

            <h2 className="text-2xl font-serif mb-3">
              No farmhouses available
            </h2>

            <p className="text-[#B8AFA5]">
              Please check back shortly for new
              farmhouse listings.
            </p>

          </div>
        )}

        {/* VENUE GRID */}
        {!error && venues.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {venues.map((venue) => (

              <article
                key={venue.id}
                className="group bg-[#17110B] border border-[#2A2118] rounded-2xl overflow-hidden hover:border-[#5A4525] hover:-translate-y-1 transition-all duration-300"
              >

                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden bg-[#21180F]">

                  <img
                    src={
                      venue.image ||
                      "https://placehold.co/1200x800/17110B/C9A34A?text=Farmhouse"
                    }
                    alt={
                      venue.product_name ||
                      "Farmhouse"
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/1200x800/17110B/C9A34A?text=Image+Not+Available";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17110B] via-transparent to-transparent opacity-80" />

                  {/* CATEGORY */}
                  <div className="absolute top-4 left-4">

                    <span className="inline-block bg-[#0F0803]/80 backdrop-blur-sm border border-[#C9A34A]/40 text-[#E1C56E] text-xs px-3 py-1.5 rounded-full">
                      Farmhouse
                    </span>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* NAME */}
                  <h3 className="text-2xl font-serif text-white mb-3">
                    {venue.product_name ||
                      "Farmhouse"}
                  </h3>

                  {/* LOCATION */}
                  <div className="flex items-center gap-2 text-[#B8AFA5] text-sm mb-4">

                    <span className="text-[#C9A34A]">
                      Location
                    </span>

                    <span>
                      {venue.product_location ||
                        "Delhi NCR"}
                    </span>

                  </div>

                  {/* RATING */}
                  <div className="flex items-center gap-2 mb-4">

                    <span className="text-[#E1C56E] text-lg">
                      ★
                    </span>

                    <span className="text-white font-medium">
                      {venue.rating || "5.0"}
                    </span>

                    <span className="text-[#8F857A] text-sm">
                      Guest rating
                    </span>

                  </div>

                  {/* PRICE */}
                  {venue.product_price && (
                    <div className="mb-4">

                      <p className="text-[#C9A34A] text-xl font-medium">
                        {venue.product_price}
                      </p>

                    </div>
                  )}

                  {/* DESCRIPTION */}
                  <p className="text-[#B8AFA5] text-sm leading-7 line-clamp-4 mb-6">
                    {venue.product_detail ||
                      "Discover this beautiful farmhouse with Effortless Events."}
                  </p>

                  <Link
  href={`/farmhouses/${venue.id}`}
  className="block w-full text-center border border-[#C9A34A] text-[#C9A34A] py-3 rounded-md font-medium hover:bg-[#C9A34A] hover:text-[#0F0803] transition"
>
  View Details
</Link>

                </div>

              </article>

            ))}

          </div>
        )}

      </section>

      {/* WHY FARMHOUSES */}
      <section className="border-t border-[#2A2118] bg-[#120B05]">

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">

          <div className="max-w-3xl mb-12">

            <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] mb-4">
              Why Choose a Farmhouse
            </p>

            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Your private space for memorable celebrations
            </h2>

            <p className="text-[#B8AFA5] leading-8 mt-5">
              From intimate birthday celebrations to
              large private gatherings, our farmhouse
              collection gives you the flexibility,
              privacy and space to create your event
              your way.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="border border-[#2A2118] rounded-2xl p-7 bg-[#17110B]">

              <h3 className="text-xl font-serif mb-3">
                Private Celebrations
              </h3>

              <p className="text-[#B8AFA5] text-sm leading-7">
                Perfect for birthdays, anniversaries,
                parties and family celebrations.
              </p>

            </div>

            <div className="border border-[#2A2118] rounded-2xl p-7 bg-[#17110B]">

              <h3 className="text-xl font-serif mb-3">
                Spacious Venues
              </h3>

              <p className="text-[#B8AFA5] text-sm leading-7">
                Enjoy spacious outdoor and indoor
                environments designed for memorable
                gatherings.
              </p>

            </div>

            <div className="border border-[#2A2118] rounded-2xl p-7 bg-[#17110B]">

              <h3 className="text-xl font-serif mb-3">
                Effortless Planning
              </h3>

              <p className="text-[#B8AFA5] text-sm leading-7">
                Let Effortless Events help you shortlist
                the right venue and plan your celebration.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">

        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] mb-4">
            Guest Experiences
          </p>

          <h2 className="text-3xl md:text-5xl font-serif">
            Reviews for Farmhouses
          </h2>

        </div>

        <div className="w-full">

          <div
            className="elfsight-app-cf2a2808-87bc-4a9d-8105-d801d0a7be8b"
            data-elfsight-app-lazy
          />

        </div>

      </section>

    </main>
  );
};

export default Farms;
