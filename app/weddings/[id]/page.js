"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Venue = {
  id: number | string;
  product_name?: string;
  product_location?: string;
  product_detail?: string;
  product_address?: string;
  product_price?: string;
  product_number?: string;
  product_category?: string | number;
  category_name?: string;
  rating?: string;
  image?: string;
  images?: string[];
};

const SkeletonCard = () => {
  return (
    <div className="bg-[#17110B] rounded-[28px] overflow-hidden border border-[#2A2118] animate-pulse">
      <div className="h-72 bg-gradient-to-br from-[#6B4A12] via-[#2B1C08] to-[#0F0803]" />

      <div className="p-6 space-y-3">
        <div className="h-8 bg-[#2A2118] rounded w-2/3" />
        <div className="h-4 bg-[#2A2118] rounded w-full" />
        <div className="h-4 bg-[#2A2118] rounded w-5/6" />
        <div className="h-4 bg-[#2A2118] rounded w-3/4" />
      </div>
    </div>
  );
};

const VenueShowcase = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  /*
   * ============================================================
   * FETCH WEDDING VENUES
   *
   * Category ID:
   * 3 = Wedding Venues
   * ============================================================
   */

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "/api/venues?categoryId=3&page=1&limit=50",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch wedding venues (${response.status})`
          );
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(
            data.error || "Unable to load wedding venues"
          );
        }

        const products: Venue[] = Array.isArray(data.products)
          ? data.products
          : [];

        /*
         * ========================================================
         * REMOVE DUPLICATE VENUE IDS
         * ========================================================
         */

        const uniqueProducts = products.filter(
          (venue, index, self) =>
            index ===
            self.findIndex(
              (item) =>
                String(item.id) === String(venue.id)
            )
        );

        setVenues(uniqueProducts);
        setCurrentSlide(0);
      } catch (err) {
        console.error(
          "Wedding Venue Showcase Error:",
          err
        );

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(
            "Unable to load wedding venues"
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  /*
   * ============================================================
   * RESPONSIVE SLIDES
   * ============================================================
   */

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlides();

    window.addEventListener(
      "resize",
      updateSlides
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateSlides
      );
    };
  }, []);

  /*
   * ============================================================
   * RESET SLIDE WHEN SCREEN SIZE CHANGES
   * ============================================================
   */

  useEffect(() => {
    const maxIndex = Math.max(
      0,
      venues.length - slidesToShow
    );

    if (currentSlide > maxIndex) {
      setCurrentSlide(maxIndex);
    }
  }, [
    slidesToShow,
    venues.length,
    currentSlide,
  ]);

  /*
   * ============================================================
   * CAROUSEL
   * ============================================================
   */

  const maxSlideIndex = Math.max(
    0,
    venues.length - slidesToShow
  );

  const nextSlide = () => {
    setCurrentSlide((previous) => {
      if (previous >= maxSlideIndex) {
        return 0;
      }

      return previous + 1;
    });
  };

  const previousSlide = () => {
    setCurrentSlide((previous) => {
      if (previous <= 0) {
        return maxSlideIndex;
      }

      return previous - 1;
    });
  };

  /*
   * ============================================================
   * VIEW ALL WEDDING VENUES
   * ============================================================
   */

  const handleViewAllVenues = () => {
    window.location.href = "/weddings";
  };

  /*
   * ============================================================
   * CARD WIDTH
   * ============================================================
   */

  const getCardWidth = () => {
    if (slidesToShow === 1) {
      return "w-full";
    }

    if (slidesToShow === 2) {
      return "w-[calc(50%-12px)]";
    }

    return "w-[calc(33.333%-16px)]";
  };

  /*
   * ============================================================
   * GET VENUE IMAGE
   * ============================================================
   */

  const getVenueImage = (venue: Venue) => {
    if (venue.image) {
      return venue.image;
    }

    if (
      Array.isArray(venue.images) &&
      venue.images.length > 0
    ) {
      return venue.images[0];
    }

    return null;
  };

  return (
    <section className="bg-[#0F0803] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">

          <div className="max-w-4xl">

            <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] font-medium mb-4">
              Wedding Venue Showcase
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight">
              Beautiful Wedding Venues Across Delhi NCR
            </h2>

          </div>

          <button
            type="button"
            onClick={handleViewAllVenues}
            className="w-fit inline-flex items-center gap-2 text-[#C9A34A] font-medium hover:text-[#D8B25B] transition-colors"
          >
            Browse All Wedding Venues

            <span className="text-lg">
              →
            </span>
          </button>

        </div>

        {/* =====================================================
            CAROUSEL
        ===================================================== */}

        <div className="relative">

          <div className="overflow-hidden">

            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide *
                  (100 / slidesToShow)
                }%)`,
              }}
            >

              {/* =================================================
                  LOADING
              ================================================= */}

              {loading &&
                Array.from({
                  length: slidesToShow,
                }).map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className={`flex-shrink-0 ${getCardWidth()}`}
                  >
                    <SkeletonCard />
                  </div>
                ))}

              {/* =================================================
                  ERROR
              ================================================= */}

              {!loading && error && (
                <div className="w-full py-16 text-center">

                  <p className="text-red-400 text-sm md:text-base">
                    Error loading wedding venues:{" "}
                    {error}
                  </p>

                </div>
              )}

              {/* =================================================
                  VENUE CARDS
              ================================================= */}

              {!loading &&
                !error &&
                venues.map((venue) => {
                  const venueImage =
                    getVenueImage(venue);

                  return (
                    <div
                      key={venue.id}
                      className={`flex-shrink-0 ${getCardWidth()}`}
                    >

                      {/* =================================================
                          DIRECT LINK TO EXISTING WEDDING DETAIL PAGE
                          ================================================= */}

                      <Link
                        href={`/weddings/${venue.id}`}
                        className="block h-full"
                      >

                        <article
                          className="bg-[#17110B] rounded-[28px] overflow-hidden border border-[#2A2118] cursor-pointer group h-full"
                        >

                          {/* =====================================
                              IMAGE
                              ===================================== */}

                          <div className="relative h-64 sm:h-72 overflow-hidden bg-[#21180F]">

                            {venueImage ? (

                              <img
                                src={venueImage}
                                alt={
                                  venue.product_name ||
                                  "Wedding venue"
                                }
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />

                            ) : (

                              <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
                                Venue image unavailable
                              </div>

                            )}

                            {/* Image Gradient */}

                            <div className="absolute inset-0 bg-gradient-to-t from-[#17110B] via-transparent to-transparent pointer-events-none" />

                          </div>

                          {/* =====================================
                              CONTENT
                              ===================================== */}

                          <div className="p-6">

                            <div className="flex items-center justify-between gap-3 mb-3">

                              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                                {venue.product_name ||
                                  "Wedding Venue"}
                              </h3>

                              {venue.rating && (
                                <div className="flex-shrink-0 flex items-center gap-1 text-[#C9A34A] text-sm">

                                  <span>
                                    ★
                                  </span>

                                  <span>
                                    {venue.rating}
                                  </span>

                                </div>
                              )}

                            </div>

                            {venue.product_location && (
                              <p className="text-[#C9A34A] text-sm mb-3">
                                {venue.product_location}
                              </p>
                            )}

                            <p className="text-[#D4C7B8] leading-7 line-clamp-4 text-sm sm:text-base">

                              {venue.product_detail
                                ? venue.product_detail.slice(
                                    0,
                                    150
                                  )
                                : "Discover this beautiful wedding venue with Effortless Events."}

                            </p>

                            {/* =====================================
                                VIEW DETAILS
                                ===================================== */}

                            <div className="mt-5 text-[#C9A34A] text-xs uppercase tracking-[0.18em] font-medium">

                              View Details

                              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                →
                              </span>

                            </div>

                          </div>

                        </article>

                      </Link>

                    </div>
                  );
                })}

            </div>

          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          {!loading &&
            !error &&
            venues.length > slidesToShow && (

              <div className="flex items-center justify-center gap-4 mt-10">

                {/* Previous */}

                <button
                  type="button"
                  onClick={previousSlide}
                  className="w-12 h-12 rounded-full border border-[#3A2E22] bg-[#17110B] text-white flex items-center justify-center hover:bg-[#21180F] transition-colors"
                  aria-label="Previous wedding venue"
                >

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>

                </button>

                {/* Next */}

                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-[#3A2E22] bg-[#17110B] text-white flex items-center justify-center hover:bg-[#21180F] transition-colors"
                  aria-label="Next wedding venue"
                >

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >

                    <path d="M9 18l6-6-6-6" />

                  </svg>

                </button>

              </div>
            )}

          {/* =====================================================
              EMPTY STATE
          ===================================================== */}

          {!loading &&
            !error &&
            venues.length === 0 && (

              <div className="py-16 text-center">

                <p className="text-white/60">
                  No wedding venues available right now.
                </p>

              </div>
            )}

        </div>

      </div>

    </section>
  );
};

export default VenueShowcase;
