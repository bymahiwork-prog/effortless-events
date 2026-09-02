"use client";

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import Link from "next/link";

/*
 * ==========================================
 * CATEGORIES
 * ==========================================
 */

const categories = [
  {
    id: "",
    name: "All Venues",
  },
  {
    id: "1",
    name: "Farmhouses",
  },
  {
    id: "2",
    name: "Apartments",
  },
  {
    id: "3",
    name: "Wedding Venues",
  },
];

/*
 * ==========================================
 * GET LISTING URL
 * ==========================================
 *
 * 1 = Farmhouses
 * 2 = Apartments
 * 3 = Wedding Venues
 *
 * IMPORTANT:
 * These are the EXISTING website URLs.
 */

const getVenueUrl = (venue) => {
  const id = venue?.id;

  if (!id) {
    return "#";
  }

  const categoryId = String(
    venue?.product_category || ""
  );

  if (categoryId === "1") {
    return `/farmhouses/${id}`;
  }

  if (categoryId === "2") {
    return `/apartments/${id}`;
  }

  if (categoryId === "3") {
    return `/venues/${id}`;
  }

  /*
   * Fallback
   */

  return `/venues/${id}`;
};

/*
 * ==========================================
 * VENUE CARD
 * ==========================================
 */

const VenueCard = ({ venue }) => {
  const image =
    venue?.image ||
    (
      Array.isArray(venue?.images) &&
      venue.images.length > 0
    )
      ? venue.images[0]
      : "https://placehold.co/1200x800/e8e2d8/6b6257?text=Venue";

  const venueUrl = getVenueUrl(venue);

  return (
    <article className="group overflow-hidden rounded-[22px] border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* =========================================
          IMAGE
      ========================================= */}

      <Link
        href={venueUrl}
        className="block"
      >
        <div className="relative h-[260px] overflow-hidden bg-neutral-100">

          <img
            src={image}
            alt={
              venue?.product_name ||
              "Venue"
            }
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src =
                "https://placehold.co/1200x800/e8e2d8/6b6257?text=Image+Not+Available";
            }}
          />

          {/* Image overlay */}

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Category */}

          {venue?.category_name && (
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-800">
                {venue.category_name}
              </span>
            </div>
          )}

        </div>
      </Link>


      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="p-5 sm:p-6">

        <div className="mb-3 flex items-start justify-between gap-4">

          <div>

            <Link
              href={venueUrl}
              className="block"
            >
              <h3 className="font-serif text-2xl leading-tight text-neutral-900 transition-colors hover:text-[#B38B45]">
                {venue?.product_name ||
                  "Venue"}
              </h3>
            </Link>

            {venue?.product_location && (
              <p className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
                <span className="text-[#B38B45]">
                  ●
                </span>

                {venue.product_location}
              </p>
            )}

          </div>


          {/* Rating */}

          <div className="flex flex-shrink-0 items-center gap-1 rounded-full bg-neutral-50 px-2.5 py-1">

            <span className="text-[#C49A4A]">
              ★
            </span>

            <span className="text-sm font-medium text-neutral-800">
              {venue?.rating ||
                "5.0"}
            </span>

          </div>

        </div>


        {/* Description */}

        {venue?.product_detail && (
          <p className="mb-5 line-clamp-3 text-sm leading-6 text-neutral-600">
            {venue.product_detail}
          </p>
        )}


        {/* =========================================
            BOTTOM INFORMATION
        ========================================= */}

        <div className="flex items-center justify-between gap-4 border-t border-neutral-100 pt-4">

          <div>

            {venue?.product_price ? (
              <p className="text-sm font-semibold text-neutral-900">
                {venue.product_price}
              </p>
            ) : (
              <p className="text-xs text-neutral-400">
                Price on request
              </p>
            )}

          </div>


          <Link
            href={venueUrl}
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#B38B45]"
          >
            View Venue
          </Link>

        </div>

      </div>

    </article>
  );
};


/*
 * ==========================================
 * SKELETON
 * ==========================================
 */

const VenueSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-[22px] border border-neutral-200 bg-white">

      <div className="h-[260px] animate-pulse bg-neutral-200" />

      <div className="space-y-4 p-6">

        <div className="h-7 w-2/3 animate-pulse rounded bg-neutral-200" />

        <div className="h-4 w-1/3 animate-pulse rounded bg-neutral-200" />

        <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />

        <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200" />

        <div className="h-10 w-full animate-pulse rounded bg-neutral-200" />

      </div>

    </div>
  );
};


/*
 * ==========================================
 * MAIN PAGE
 * ==========================================
 */

export default function VenuesPage() {

  const [venues, setVenues] =
    useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [totalPages, setTotalPages] =
    useState(1);

  const limit = 9;


  /*
   * ==========================================
   * FETCH VENUES
   * ==========================================
   */

  useEffect(() => {

    const fetchVenues = async () => {

      try {

        setLoading(true);

        setError("");

        const params =
          new URLSearchParams();

        params.set(
          "page",
          String(page)
        );

        params.set(
          "limit",
          String(limit)
        );

        if (selectedCategory) {

          params.set(
            "categoryId",
            selectedCategory
          );

        }

        if (search.trim()) {

          params.set(
            "search",
            search.trim()
          );

        }

        const response =
          await fetch(
            `/api/venues?${params.toString()}`,
            {
              cache: "no-store",
            }
          );

        if (!response.ok) {
          throw new Error(
            "Unable to load venues."
          );
        }

        const data =
          await response.json();

        if (!data.success) {

          throw new Error(
            data.error ||
              "Unable to load venues."
          );

        }

        setVenues(
          Array.isArray(
            data.products
          )
            ? data.products
            : []
        );

        setTotalPages(
          Number(
            data.totalPages || 1
          )
        );

      } catch (err) {

        console.error(
          "Venue page error:",
          err
        );

        setVenues([]);

        setError(
          "We're unable to load the venues right now. Please try again."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchVenues();

  }, [
    selectedCategory,
    page,
    search,
  ]);


  /*
   * ==========================================
   * CATEGORY CHANGE
   * ==========================================
   */

  const handleCategoryChange =
    (categoryId) => {

      setSelectedCategory(
        categoryId
      );

      setPage(1);

    };


  /*
   * ==========================================
   * SEARCH
   * ==========================================
   */

  const handleSearch =
    (event) => {

      event.preventDefault();

      setPage(1);

    };


  /*
   * ==========================================
   * CURRENT CATEGORY
   * ==========================================
   */

  const currentCategoryName =
    useMemo(() => {

      const category =
        categories.find(
          (item) =>
            item.id ===
            selectedCategory
        );

      return (
        category?.name ||
        "All Venues"
      );

    }, [
      selectedCategory,
    ]);


  /*
   * ==========================================
   * PAGE
   * ==========================================
   */

  return (

    <main className="min-h-screen bg-[#FAF9F6]">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="relative overflow-hidden bg-[#120D08]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#21170D] via-[#120D08] to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">

          <div className="max-w-4xl">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C9A34A] sm:text-xs">
              Effortless Events
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">

              Find the Perfect

              <span className="block italic text-[#D6B36A]">
                Venue
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Discover carefully selected
              farmhouses, apartments and
              wedding venues across Delhi NCR
              for celebrations, private
              gatherings and unforgettable
              events.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          VENUE SECTION
      ========================================= */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">


          {/* Heading */}

          <div className="mb-10">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#B38B45] sm:text-xs">
              Explore Our Collection
            </p>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <h2 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
                  {currentCategoryName}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500">
                  Explore venues selected
                  to make your event planning
                  simple, seamless and
                  effortless.
                </p>

              </div>

              <p className="text-sm text-neutral-500">

                {loading
                  ? "Loading venues..."
                  : `${venues.length} venues`}

              </p>

            </div>

          </div>


          {/* =========================================
              FILTERS
          ========================================= */}

          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">


            {/* Categories */}

            <div className="flex flex-wrap gap-2">

              {categories.map(
                (category) => {

                  const active =
                    selectedCategory ===
                    category.id;

                  return (

                    <button
                      key={
                        category.id ||
                        "all"
                      }
                      type="button"
                      onClick={() =>
                        handleCategoryChange(
                          category.id
                        )
                      }
                      className={`rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
                      }`}
                    >
                      {category.name}
                    </button>

                  );

                }
              )}

            </div>


            {/* Search */}

            <form
              onSubmit={handleSearch}
              className="flex w-full max-w-sm overflow-hidden rounded-full border border-neutral-200 bg-white"
            >

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search venues..."
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
              />

              <button
                type="submit"
                className="bg-black px-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#B38B45]"
              >
                Search
              </button>

            </form>

          </div>


          {/* =========================================
              ERROR
          ========================================= */}

          {!loading && error && (

            <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center">

              <h3 className="font-serif text-2xl text-neutral-900">
                Venues are temporarily unavailable
              </h3>

              <p className="mt-3 text-sm text-neutral-500">
                {error}
              </p>

              <button
                type="button"
                onClick={() =>
                  setPage(page)
                }
                className="mt-6 rounded-full bg-black px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
              >
                Try Again
              </button>

            </div>

          )}


          {/* =========================================
              LOADING
          ========================================= */}

          {loading && (

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

              {Array.from({
                length: 6,
              }).map(
                (_, index) => (
                  <VenueSkeleton
                    key={index}
                  />
                )
              )}

            </div>

          )}


          {/* =========================================
              EMPTY
          ========================================= */}

          {!loading &&
            !error &&
            venues.length === 0 && (

              <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center">

                <h3 className="font-serif text-2xl text-neutral-900">
                  No venues found
                </h3>

                <p className="mt-3 text-sm text-neutral-500">
                  Try another category or
                  search term.
                </p>

              </div>

            )}


          {/* =========================================
              CARDS
          ========================================= */}

          {!loading &&
            !error &&
            venues.length > 0 && (

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                {venues.map(
                  (venue) => (

                    <VenueCard
                      key={venue.id}
                      venue={venue}
                    />

                  )
                )}

              </div>

            )}


          {/* =========================================
              PAGINATION
          ========================================= */}

          {!loading &&
            !error &&
            totalPages > 1 && (

              <div className="mt-12 flex items-center justify-center gap-3">

                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() =>
                    setPage(
                      (current) =>
                        Math.max(
                          1,
                          current - 1
                        )
                    )
                  }
                  className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-700 transition hover:border-black disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                <span className="px-3 text-sm text-neutral-500">
                  {page} / {totalPages}
                </span>

                <button
                  type="button"
                  disabled={
                    page >=
                    totalPages
                  }
                  onClick={() =>
                    setPage(
                      (current) =>
                        Math.min(
                          totalPages,
                          current + 1
                        )
                    )
                  }
                  className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-700 transition hover:border-black disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>

              </div>

            )}

        </div>

      </section>


      {/* =========================================
          CONTACT CTA
      ========================================= */}

      <section
        id="contact"
        className="bg-[#120D08] py-20 sm:py-24"
      >

        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#C9A34A] sm:text-xs">
            Need Help Choosing?
          </p>

          <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Let's Find Your Perfect Venue
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
            Tell us about your event and
            our team can help you shortlist
            the right venue based on your
            occasion, guest count and
            requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#D6B36A] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-white"
          >
            Get In Touch
          </Link>

        </div>

      </section>

    </main>
  );
}
