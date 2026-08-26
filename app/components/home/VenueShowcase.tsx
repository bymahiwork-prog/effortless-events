"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Venue = {
  id: number | string;
  product_name?: string;
  product_location?: string;
  product_detail?: string;
  main_image?: string;
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

  const router = useRouter();

  /*
   * ============================================================
   * FETCH FEATURED VENUES
   * ============================================================
   */

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/featured-venues");

        if (!response.ok) {
          throw new Error("Failed to fetch venues");
        }

        const data = await response.json();

        const products: Venue[] = data.products || [];

        /*
         * Remove duplicate venue names
         */

        const uniqueProducts = products.filter(
          (venue, index, self) =>
            index ===
            self.findIndex(
              (item) =>
                item.product_name === venue.product_name
            )
        );

        setVenues(uniqueProducts);
      } catch (err) {
        console.error("Venue Showcase Error:", err);

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unable to load venues");
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

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
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
  }, [slidesToShow, venues.length, currentSlide]);


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
   * VENUE CLICK
   * ============================================================
   */

  const handleVenueClick = (venue: Venue) => {
    router.push(`/venues/${venue.id}`);
  };


  /*
   * ============================================================
   * VIEW ALL VENUES
   * ============================================================
   */

  const handleViewAllVenues = () => {
    router.push("/search");
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


  return (
    <section className="bg-[#0F0803] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6 md:px-8">


        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">

          <div className="max-w-4xl">

            <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] font-medium mb-4">
              Venue Showcase
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight">
              50+ Venues Across Delhi NCR
            </h2>

          </div>


          <button
            type="button"
            onClick={handleViewAllVenues}
            className="w-fit inline-flex items-center gap-2 text-[#C9A34A] font-medium hover:text-[#D8B25B] transition-colors"
          >
            Browse All Venues

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
                    Error loading venues: {error}
                  </p>

                </div>
              )}


              {/* =================================================
                  VENUE CARDS
              ================================================= */}

              {!loading &&
                !error &&
                venues.map((venue) => (

                  <div
                    key={venue.id}
                    className={`flex-shrink-0 ${getCardWidth()}`}
                  >

                    <article
                      onClick={() =>
                        handleVenueClick(venue)
                      }
                      className="bg-[#17110B] rounded-[28px] overflow-hidden border border-[#2A2118] cursor-pointer group h-full"
                    >


                      {/* =========================================
                          IMAGE
                      ========================================= */}

                      <div className="relative h-64 sm:h-72 overflow-hidden bg-[#21180F]">

                        {venue.main_image ? (

                          <img
                            src={`https://admin.effortlessevents.in/admin/${venue.main_image}`}
                            alt={
                              venue.product_name ||
                              "Effortless Events venue"
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


                      {/* =========================================
                          CONTENT
                      ========================================= */}

                      <div className="p-6">

                        <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">

                          {venue.product_location ||
                            venue.product_name ||
                            "Effortless Venue"}

                        </h3>


                        <p className="text-[#D4C7B8] leading-7 line-clamp-4 text-sm sm:text-base">

                          {venue.product_detail
                            ? venue.product_detail.slice(
                                0,
                                150
                              )
                            : "Discover this beautiful venue with Effortless Events."}

                        </p>

                      </div>

                    </article>

                  </div>

                ))}

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
                  aria-label="Previous venue"
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
                  aria-label="Next venue"
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
                  No featured venues available right now.
                </p>

              </div>

            )}

        </div>

      </div>

    </section>
  );
};

export default VenueShowcase;
