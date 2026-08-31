"use client";

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Share2,
  Star,
  UtensilsCrossed,
  Wine,
  Armchair,
  ShowerHead,
  Mic,
  Car,
  ClipboardList,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


/* =========================================================
   TIME OPTIONS
========================================================= */

const TIME_OPTIONS = [
  "12:00 am",
  "12:30 am",
  "1:00 am",
  "1:30 am",
  "2:00 am",
  "2:30 am",
  "3:00 am",
  "3:30 am",
  "4:00 am",
  "4:30 am",
  "5:00 am",
  "5:30 am",
  "6:00 am",
  "6:30 am",
  "7:00 am",
  "7:30 am",
  "8:00 am",
  "8:30 am",
  "9:00 am",
  "9:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "1:00 pm",
  "1:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
  "3:30 pm",
  "4:00 pm",
  "4:30 pm",
  "5:00 pm",
  "5:30 pm",
  "6:00 pm",
  "6:30 pm",
  "7:00 pm",
  "7:30 pm",
  "8:00 pm",
  "8:30 pm",
  "9:00 pm",
  "9:30 pm",
  "10:00 pm",
  "10:30 pm",
  "11:00 pm",
  "11:30 pm",
];


/* =========================================================
   HELPER
========================================================= */

function getFirstValue(...values) {
  for (const value of values) {
    if (
      value !== undefined &&
      value !== null &&
      String(value).trim() !== ""
    ) {
      return value;
    }
  }

  return "";
}


/* =========================================================
   IMAGE NORMALIZER
========================================================= */

function getImages(venue) {
  if (!venue) {
    return [];
  }

  let images = [];

  if (Array.isArray(venue.images)) {
    images = venue.images;
  } else if (Array.isArray(venue.product_images)) {
    images = venue.product_images;
  } else if (Array.isArray(venue.productImages)) {
    images = venue.productImages;
  } else if (Array.isArray(venue.gallery)) {
    images = venue.gallery;
  } else if (Array.isArray(venue.photos)) {
    images = venue.photos;
  }

  /*
   * Some API responses may return images
   * as a JSON string.
   */
  if (typeof venue.images === "string") {
    try {
      const parsed = JSON.parse(venue.images);

      if (Array.isArray(parsed)) {
        images = parsed;
      }
    } catch {
      images = [venue.images];
    }
  }

  if (typeof venue.product_images === "string") {
    try {
      const parsed = JSON.parse(
        venue.product_images
      );

      if (Array.isArray(parsed)) {
        images = parsed;
      }
    } catch {
      images = [venue.product_images];
    }
  }

  /*
   * If gallery is empty, use the main image.
   */
  if (images.length === 0) {
    const singleImage = getFirstValue(
      venue.image,
      venue.image_url,
      venue.product_image,
      venue.productImage,
      venue.thumbnail
    );

    if (singleImage) {
      images = [singleImage];
    }
  }

  return images
    .map((image) => {
      if (typeof image === "string") {
        return image;
      }

      if (
        image &&
        typeof image === "object"
      ) {
        return getFirstValue(
          image.url,
          image.src,
          image.image_url,
          image.image,
          image.path
        );
      }

      return "";
    })
    .filter(Boolean);
}


/* =========================================================
   VENUE NORMALIZER
========================================================= */

function normalizeVenue(rawVenue) {
  if (!rawVenue) {
    return null;
  }

  return {
    ...rawVenue,

    /*
     * ID
     */
    id: getFirstValue(
      rawVenue.id,
      rawVenue._id,
      rawVenue.product_id,
      rawVenue.productId
    ),

    /*
     * NAME FROM ADMIN PANEL
     */
    product_name: getFirstValue(
      rawVenue.product_name,
      rawVenue.productName,
      rawVenue.name,
      rawVenue.title,
      "Farmhouse"
    ),

    /*
     * LOCATION FROM ADMIN PANEL
     */
    product_location: getFirstValue(
      rawVenue.product_location,
      rawVenue.productLocation,
      rawVenue.location,
      rawVenue.city,
      rawVenue.area,
      "Delhi NCR"
    ),

    /*
     * ADDRESS FROM ADMIN PANEL
     */
    product_address: getFirstValue(
      rawVenue.product_address,
      rawVenue.productAddress,
      rawVenue.address
    ),

    /*
     * PRICE FROM ADMIN PANEL
     */
    product_price: getFirstValue(
      rawVenue.product_price,
      rawVenue.productPrice,
      rawVenue.price,
      rawVenue.starting_price,
      rawVenue.startingPrice
    ),

    /*
     * DESCRIPTION FROM ADMIN PANEL
     */
    product_detail: getFirstValue(
      rawVenue.product_detail,
      rawVenue.productDetail,
      rawVenue.description,
      rawVenue.details,
      rawVenue.about,
      "Discover this beautiful farmhouse with Effortless Events."
    ),

    /*
     * CATEGORY
     */
    category_name: getFirstValue(
      rawVenue.category_name,
      rawVenue.categoryName,
      rawVenue.category,
      "Farm Houses"
    ),

    /*
     * IMAGES
     */
    images: getImages(rawVenue),

    /*
     * RATING
     */
    rating: getFirstValue(
      rawVenue.rating,
      rawVenue.guest_rating,
      rawVenue.guestRating,
      rawVenue.average_rating,
      rawVenue.averageRating
    ),

    /*
     * PHONE NUMBER
     */
    product_number: getFirstValue(
      rawVenue.product_number,
      rawVenue.productNumber,
      rawVenue.phone,
      rawVenue.mobile,
      "+91 7838008069"
    ),
  };
}


/* =========================================================
   SKELETON
========================================================= */

function VenueSkeleton() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">

        <div className="animate-pulse">

          <div className="h-8 bg-gray-200 rounded w-1/3 mb-3" />

          <div className="h-4 bg-gray-200 rounded w-1/5 mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            <div className="lg:col-span-2 h-[420px] bg-gray-200 rounded-xl" />

            <div className="grid grid-cols-2 gap-4">

              <div className="h-[200px] bg-gray-200 rounded-xl" />

              <div className="h-[200px] bg-gray-200 rounded-xl" />

              <div className="h-[200px] bg-gray-200 rounded-xl" />

              <div className="h-[200px] bg-gray-200 rounded-xl" />

            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

            <div className="lg:col-span-2 space-y-5">

              <div className="h-8 bg-gray-200 rounded w-1/2" />

              <div className="h-24 bg-gray-200 rounded" />

              <div className="h-20 bg-gray-200 rounded" />

              <div className="h-20 bg-gray-200 rounded" />

              <div className="h-20 bg-gray-200 rounded" />

            </div>

            <div className="h-[400px] bg-gray-200 rounded-xl" />

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   ERROR STATE
========================================================= */

function VenueError({
  message,
  onBack,
}) {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <div className="min-h-[70vh] flex items-center justify-center px-6">

        <div className="text-center max-w-md">

          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Unable to load farmhouse
          </h1>

          <p className="text-gray-500 mb-7">
            {message ||
              "The farmhouse information could not be found."}
          </p>

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

        </div>

      </div>

      <Footer />

    </div>
  );
}


/* =========================================================
   COLLAPSIBLE INFORMATION SECTION
========================================================= */

function InfoSection({
  title,
  icon,
  sectionKey,
  expandedSections,
  toggleSection,
  children,
}) {
  const isOpen =
    expandedSections[sectionKey];

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">

      <button
        type="button"
        onClick={() =>
          toggleSection(sectionKey)
        }
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
      >

        <div className="flex items-center gap-3">

          <div className="w-6 h-6 flex items-center justify-center text-black">
            {icon}
          </div>

          <span className="font-medium text-gray-800 text-sm sm:text-base">
            {title}
          </span>

        </div>

        <ChevronDown
          className={`w-5 h-5 text-gray-700 transition-transform duration-200 ${
            isOpen
              ? "rotate-180"
              : ""
          }`}
        />

      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-5 text-sm text-gray-600 leading-7">
          {children}
        </div>
      )}

    </div>
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

export default function VenuePage() {

  const params = useParams();

  const router = useRouter();

  const venueId = params?.id;


  /* =========================================================
     VENUE STATE
  ========================================================= */

  const [venue, setVenue] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  /* =========================================================
     IMAGE STATE
  ========================================================= */

  const [selectedImage, setSelectedImage] =
    useState(0);


  /* =========================================================
     BOOKING STATE
  ========================================================= */

  const [selectedDate, setSelectedDate] =
    useState("");

  const [checkInTime, setCheckInTime] =
    useState("9:30 am");

  const [checkOutTime, setCheckOutTime] =
    useState("9:30 pm");


  /* =========================================================
     DESCRIPTION STATE
  ========================================================= */

  const [
    isDescriptionExpanded,
    setIsDescriptionExpanded,
  ] = useState(false);


  /* =========================================================
     INFO SECTION STATE
  ========================================================= */

  const [
    expandedSections,
    setExpandedSections,
  ] = useState({
    food: true,
    alcohol: true,
    furniture: true,
    restrooms: true,
    av: true,
    parking: true,
    events: true,
  });


  /* =========================================================
     POPULAR VENUES
  ========================================================= */

  const [popularVenues, setPopularVenues] =
    useState([]);

  const [popularLoading, setPopularLoading] =
    useState(true);

  const [popularSlide, setPopularSlide] =
    useState(0);

  const [
    popularSlidesToShow,
    setPopularSlidesToShow,
  ] = useState(3);


  /* =========================================================
     FETCH CURRENT FARMHOUSE
  ========================================================= */

  useEffect(() => {

    if (!venueId) {
      return;
    }

    const fetchVenue = async () => {

      try {

        setLoading(true);

        setError("");

        const response = await fetch(
          `/api/venues/${venueId}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {

          throw new Error(
            `Unable to load farmhouse. Status: ${response.status}`
          );

        }

        const data =
          await response.json();

        const rawVenue =
          data?.product ||
          data?.venue ||
          data?.data ||
          data;

        const normalized =
          normalizeVenue(rawVenue);

        if (!normalized) {

          throw new Error(
            "Farmhouse information was not found."
          );

        }

        setVenue(normalized);

      } catch (err) {

        console.error(
          "Farmhouse fetch error:",
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

  }, [venueId]);


  /* =========================================================
     FETCH POPULAR VENUES
  ========================================================= */

  useEffect(() => {

    const fetchPopularVenues =
      async () => {

        try {

          setPopularLoading(true);

          const response =
            await fetch(
              "/api/venues?limit=10",
              {
                cache: "no-store",
              }
            );

          if (!response.ok) {

            throw new Error(
              "Unable to load popular venues."
            );

          }

          const data =
            await response.json();

          const venues =
            data?.products ||
            data?.venues ||
            data?.data ||
            [];

          const normalizedVenues =
            venues
              .map((item) =>
                normalizeVenue(item)
              )
              .filter(
                (item) =>
                  String(item?.id) !==
                  String(venueId)
              );

          setPopularVenues(
            normalizedVenues
          );

        } catch (err) {

          console.error(
            "Popular venues error:",
            err
          );

          setPopularVenues([]);

        } finally {

          setPopularLoading(false);

        }

      };

    fetchPopularVenues();

  }, [venueId]);


  /* =========================================================
     RESPONSIVE POPULAR SLIDES
  ========================================================= */

  useEffect(() => {

    const updateSlides =
      () => {

        if (
          window.innerWidth < 640
        ) {

          setPopularSlidesToShow(1);

        } else if (
          window.innerWidth < 1024
        ) {

          setPopularSlidesToShow(2);

        } else {

          setPopularSlidesToShow(3);

        }

      };

    updateSlides();

    window.addEventListener(
      "resize",
      updateSlides
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateSlides
      );

  }, []);


  /* =========================================================
     RESET POPULAR SLIDE
  ========================================================= */

  useEffect(() => {

    setPopularSlide(0);

  }, [popularSlidesToShow, venueId]);


  /* =========================================================
     TOGGLE INFO SECTION
  ========================================================= */

  const toggleSection =
    (section) => {

      setExpandedSections(
        (previous) => ({
          ...previous,

          [section]:
            !previous[section],
        })
      );

    };


  /* =========================================================
     IMAGES
  ========================================================= */

  const images = useMemo(() => {

    if (
      !venue?.images ||
      venue.images.length === 0
    ) {

      return [
        "https://placehold.co/1200x800/e5e7eb/6b7280?text=Farmhouse",
      ];

    }

    return venue.images;

  }, [venue]);


  /* =========================================================
     KEEP IMAGE INDEX VALID
  ========================================================= */

  useEffect(() => {

    if (
      selectedImage >= images.length
    ) {

      setSelectedImage(0);

    }

  }, [
    images.length,
    selectedImage,
  ]);


  /* =========================================================
     NEXT IMAGE
  ========================================================= */

  const nextImage = () => {

    setSelectedImage(
      (previous) =>
        previous >= images.length - 1
          ? 0
          : previous + 1
    );

  };


  /* =========================================================
     PREVIOUS IMAGE
  ========================================================= */

  const previousImage = () => {

    setSelectedImage(
      (previous) =>
        previous <= 0
          ? images.length - 1
          : previous - 1
    );

  };


  /* =========================================================
     PRICE
  ========================================================= */

  const formattedPrice =
    useMemo(() => {

      if (!venue?.product_price) {

        return "Price on request";

      }

      const price = String(
        venue.product_price
      ).trim();

      if (
        price.startsWith("₹")
      ) {

        return price;

      }

      return `₹${price}`;

    }, [venue]);


  /* =========================================================
     RATING
  ========================================================= */

  const venueRating =
    useMemo(() => {

      const rating = Number(
        venue?.rating
      );

      if (
        !Number.isNaN(rating) &&
        rating > 0
      ) {

        return rating.toFixed(1);

      }

      return "4.0";

    }, [venue]);


  /* =========================================================
     MAP QUERY
  ========================================================= */

  const mapSearchQuery =
    useMemo(() => {

      if (!venue) {
        return "";
      }

      return [
        venue.product_name,
        venue.product_address,
        venue.product_location,
      ]
        .filter(Boolean)
        .join(", ");

    }, [venue]);


  /* =========================================================
     MAP EMBED
  ========================================================= */

  const mapEmbedUrl =
    useMemo(() => {

      if (!mapSearchQuery) {
        return "";
      }

      return `https://www.google.com/maps?q=${encodeURIComponent(
        mapSearchQuery
      )}&output=embed`;

    }, [mapSearchQuery]);


  /* =========================================================
     POPULAR SLIDER LIMIT
  ========================================================= */

  const popularMaxSlide =
    Math.max(
      0,
      popularVenues.length -
        popularSlidesToShow
    );


  /* =========================================================
     NEXT POPULAR
  ========================================================= */

  const nextPopularSlide =
    () => {

      setPopularSlide(
        (previous) =>
          previous >=
          popularMaxSlide
            ? 0
            : previous + 1
      );

    };


  /* =========================================================
     PREVIOUS POPULAR
  ========================================================= */

  const previousPopularSlide =
    () => {

      setPopularSlide(
        (previous) =>
          previous <= 0
            ? popularMaxSlide
            : previous - 1
      );

    };


  /* =========================================================
     SHARE
  ========================================================= */

  const handleShare =
    async () => {

      if (!venue) {
        return;
      }

      const shareData = {
        title:
          venue.product_name,

        text:
          `Check out ${venue.product_name} in ${venue.product_location}.`,

        url:
          window.location.href,
      };

      try {

        if (
          navigator.share
        ) {

          await navigator.share(
            shareData
          );

        } else if (
          navigator.clipboard
        ) {

          await navigator.clipboard.writeText(
            window.location.href
          );

          alert(
            "Farmhouse link copied!"
          );

        }

      } catch (err) {

        console.error(
          "Share error:",
          err
        );

      }

    };


  /* =========================================================
     BOOKING
  ========================================================= */

  const handleBooking =
    () => {

      if (!selectedDate) {

        alert(
          "Please select a booking date."
        );

        return;

      }

      if (!venue) {
        return;
      }

      const phoneNumber =
        String(
          venue.product_number ||
            "917838008069"
        )
          .replace(
            /[^0-9]/g,
            ""
          );

      const message = `
Hello Effortless Events,

I would like to enquire about booking the following farmhouse.

Farmhouse: ${venue.product_name}
Location: ${venue.product_location}
Date: ${selectedDate}
Check-in: ${checkInTime}
Check-out: ${checkOutTime}
Price: ${formattedPrice}

Please let me know about availability and the next steps.

Thank you.
      `.trim();

      const whatsappUrl =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

    };


  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {

    return (
      <VenueSkeleton />
    );

  }


  /* =========================================================
     ERROR
  ========================================================= */

  if (
    error ||
    !venue
  ) {

    return (
      <VenueError
        message={error}
        onBack={() =>
          router.back()
        }
      />
    );

  }


  /* =========================================================
     MAIN RETURN
  ========================================================= */

  return (
    <div className="min-h-screen bg-white text-[#111827]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="pt-24">


        {/* ===================================================
            HEADER
        =================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">

          <div className="flex items-start justify-between gap-6">

            <div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-950">
                {venue.product_name}
              </h1>

              <div className="flex items-center gap-2 mt-2 text-gray-500">

                <MapPin
                  className="w-4 h-4"
                />

                <span>
                  {venue.product_location ||
                    "Delhi NCR"}
                </span>

              </div>

            </div>


            {/* SHARE */}

            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition text-sm"
            >

              <Share2
                className="w-4 h-4"
              />

              <span>
                Share
              </span>

            </button>

          </div>

        </section>


        {/* ===================================================
            IMAGE GALLERY
        =================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* MAIN IMAGE */}

            <div className="lg:col-span-2 relative h-[360px] sm:h-[460px] lg:h-[560px] overflow-hidden rounded-xl bg-gray-100">

              <img
                src={images[selectedImage]}
                alt={`${venue.product_name} - main image`}
                className="w-full h-full object-cover"
                onError={(event) => {

                  event.currentTarget.src =
                    "https://placehold.co/1200x800/e5e7eb/6b7280?text=Image+Unavailable";

                }}
              />


              {/* PREVIOUS */}

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition"
                  aria-label="Previous image"
                >

                  <ChevronLeft
                    className="w-5 h-5"
                  />

                </button>
              )}


              {/* NEXT */}

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition"
                  aria-label="Next image"
                >

                  <ChevronRight
                    className="w-5 h-5"
                  />

                </button>
              )}


              {/* IMAGE COUNTER */}

              {images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full">

                  {selectedImage + 1}
                  {" / "}
                  {images.length}

                </div>
              )}

            </div>


            {/* SIDE IMAGES */}

            <div className="grid grid-cols-2 gap-4">

              {images
                .slice(1, 5)
                .map(
                  (
                    image,
                    index
                  ) => {

                    const actualIndex =
                      index + 1;

                    return (
                      <button
                        type="button"
                        key={`${image}-${index}`}
                        onClick={() =>
                          setSelectedImage(
                            actualIndex
                          )
                        }
                        className="relative h-[170px] sm:h-[220px] lg:h-[270px] overflow-hidden rounded-xl bg-gray-100 group"
                      >

                        <img
                          src={image}
                          alt={`${venue.product_name} - image ${
                            actualIndex + 1
                          }`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(
                            event
                          ) => {

                            event.currentTarget.src =
                              "https://placehold.co/600x400/e5e7eb/6b7280?text=Image";

                          }}
                        />

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

                      </button>
                    );

                  }
                )}


              {/* EMPTY IMAGE CELLS */}

              {Array.from({
                length:
                  Math.max(
                    0,
                    4 -
                      Math.min(
                        4,
                        images.length -
                          1
                      )
                  ),
              }).map(
                (_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="h-[170px] sm:h-[220px] lg:h-[270px] rounded-xl bg-gray-100"
                  />
                )
              )}

            </div>

          </div>

        </section>


        {/* ===================================================
            MAIN DETAILS + BOOKING
        =================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="lg:col-span-2 space-y-5">


              {/* ABOUT */}

              <div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-4">

                  About{" "}
                  {venue.product_name}

                </h2>

                <div>

                  <p
                    className={`text-gray-600 text-sm sm:text-base leading-7 ${
                      !isDescriptionExpanded
                        ? "line-clamp-4"
                        : ""
                    }`}
                  >

                    {venue.product_detail ||
                      "Discover this beautiful farmhouse with Effortless Events."}

                  </p>


                  {venue.product_detail &&
                    venue.product_detail.length >
                      250 && (
                      <button
                        type="button"
                        onClick={() =>
                          setIsDescriptionExpanded(
                            (
                              previous
                            ) =>
                              !previous
                          )
                        }
                        className="mt-2 text-[#7C3AED] hover:text-[#6D28D9] text-sm font-medium"
                      >

                        {isDescriptionExpanded
                          ? "Read less"
                          : "Read more"}

                      </button>
                    )}

                </div>

              </div>


              {/* FOOD */}

              <InfoSection
                title="Food and Beverage"
                icon={
                  <UtensilsCrossed className="w-5 h-5" />
                }
                sectionKey="food"
                expandedSections={
                  expandedSections
                }
                toggleSection={
                  toggleSection
                }
              >

                <p>
                  Full catering services are
                  available with a wide range of
                  local and international cuisine
                  options. Catering arrangements can
                  be planned according to the event
                  type, guest count, menu preferences,
                  and specific requirements of the
                  celebration.
                </p>

              </InfoSection>


              {/* ALCOHOL */}

              <InfoSection
                title="Alcoholic and Beverage"
                icon={
                  <Wine className="w-5 h-5" />
                }
                sectionKey="alcohol"
                expandedSections={
                  expandedSections
                }
                toggleSection={
                  toggleSection
                }
              >

                <p>
                  Alcoholic and beverage services can
                  be arranged according to the venue&apos;s
                  policies and event requirements.
                  Beverage options and arrangements
                  can be discussed with the venue team
                  in advance.
                </p>

              </InfoSection>


              {/* FURNITURE */}

              <InfoSection
                title="Furniture"
                icon={
                  <Armchair className="w-5 h-5" />
                }
                sectionKey="furniture"
                expandedSections={
                  expandedSections
                }
                toggleSection={
                  toggleSection
                }
              >

                <p>
                  Furniture arrangements are
                  available for different types of
                  events and celebrations. Tables,
                  chairs, seating arrangements, and
                  other required furniture can be
                  organized according to the event
                  layout and guest requirements.
                </p>

              </InfoSection>


              {/* RESTROOMS */}

              <InfoSection
                title="Restrooms"
                icon={
                  <ShowerHead className="w-5 h-5" />
                }
                sectionKey="restrooms"
                expandedSections={
                  expandedSections
                }
                toggleSection={
                  toggleSection
                }
              >

                <p>
                  Clean and convenient restroom
                  facilities are available for guests
                  throughout the event. Facilities are
                  designed to support gatherings of
                  different sizes.
                </p>

              </InfoSection>


              {/* AV */}

              <InfoSection
                title="AV and Music"
                icon={
                  <Mic className="w-5 h-5" />
                }
                sectionKey="av"
                expandedSections={
                  expandedSections
                }
                toggleSection={
                  toggleSection
                }
              >

                <p>
                  Audio-visual and music facilities
                  can be arranged for different event
                  requirements. Depending on the venue
                  and event, facilities may include
                  professional sound systems,
                  microphones, music equipment, and
                  lighting.
                </p>

              </InfoSection>


              {/* PARKING */}

              <InfoSection
                title="Parking"
                icon={
                  <Car className="w-5 h-5" />
                }
                sectionKey="parking"
                expandedSections={
                  expandedSections
                }
                toggleSection={
                  toggleSection
                }
              >

                <p>
                  Ample parking space is available for
                  guests attending events at the venue.
                  Parking arrangements are designed to
                  make arrival and departure more
                  convenient.
                </p>

              </InfoSection>


              {/* EVENTS */}

              <InfoSection
                title="Events Rules"
                icon={
                  <ClipboardList className="w-5 h-5" />
                }
                sectionKey="events"
                expandedSections={
                  expandedSections
                }
                toggleSection={
                  toggleSection
                }
              >

                <p>
                  Event guidelines and venue policies
                  are followed to ensure a smooth,
                  safe, and enjoyable experience.
                  Specific arrangements relating to
                  event timings, setup, music,
                  catering, alcohol, decorations,
                  parking, and guest capacity can be
                  discussed with the venue team before
                  booking.
                </p>

              </InfoSection>

            </div>


            {/* =================================================
                BOOKING CARD
            ================================================= */}

            <div className="lg:col-span-1">

              <div className="lg:sticky lg:top-28 border border-gray-200 rounded-2xl bg-white shadow-sm p-6">


                {/* PRICE */}

                <div className="mb-5">

                  <div className="flex items-baseline gap-2">

                    <h3 className="text-3xl font-bold text-gray-900">
                      {formattedPrice}
                    </h3>

                  </div>

                  <p className="text-sm text-[#E4D078] mt-1">
                    onwards
                  </p>

                </div>


                <div className="border-t border-gray-200 pt-5">


                  {/* DISCOUNT */}

                  <div className="flex items-center justify-between mb-6">

                    <span className="text-sm text-gray-600">
                      2+ days discount
                    </span>

                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded">
                      10% off
                    </span>

                  </div>


                  {/* DATE */}

                  <div className="mb-4">

                    <label className="block text-sm text-gray-700 mb-2">

                      Date and time{" "}

                      <span className="text-gray-400">
                        (required)
                      </span>

                    </label>

                    <div className="relative">

                      <Calendar
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700 pointer-events-none"
                      />

                      <input
                        type="date"
                        value={
                          selectedDate
                        }
                        min={
                          new Date()
                            .toISOString()
                            .split(
                              "T"
                            )[0]
                        }
                        onChange={(event) =>
                          setSelectedDate(
                            event
                              .target
                              .value
                          )
                        }
                        className="w-full text-black px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4D078] focus:border-[#E4D078] bg-white cursor-pointer"
                      />

                    </div>

                  </div>


                  {/* CHECK IN / OUT */}

                  <div className="grid grid-cols-2 gap-3 mb-6">

                    <div>

                      <label className="block text-xs text-gray-600 mb-1.5">
                        Check-in
                      </label>

                      <select
                        value={
                          checkInTime
                        }
                        onChange={(
                          event
                        ) =>
                          setCheckInTime(
                            event
                              .target
                              .value
                          )
                        }
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#E4D078]"
                      >

                        {TIME_OPTIONS.map(
                          (time) => (
                            <option
                              key={`in-${time}`}
                              value={time}
                            >
                              {time}
                            </option>
                          )
                        )}

                      </select>

                    </div>


                    <div>

                      <label className="block text-xs text-gray-600 mb-1.5">
                        Check-out
                      </label>

                      <select
                        value={
                          checkOutTime
                        }
                        onChange={(
                          event
                        ) =>
                          setCheckOutTime(
                            event
                              .target
                              .value
                          )
                        }
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#E4D078]"
                      >

                        {TIME_OPTIONS.map(
                          (time) => (
                            <option
                              key={`out-${time}`}
                              value={time}
                            >
                              {time}
                            </option>
                          )
                        )}

                      </select>

                    </div>

                  </div>


                  {/* BOOK BUTTON */}

                  <button
                    type="button"
                    onClick={
                      handleBooking
                    }
                    className="w-full bg-[#E4D078] text-white py-3.5 px-4 rounded-xl font-medium hover:bg-[#d5bd61] active:scale-[0.98] transition-all duration-200"
                  >
                    Start Booking
                  </button>


                  {/* RESPONSE TIME */}

                  <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500 mt-4">

                    <CheckCircle2
                      className="w-4 h-4 mr-1.5 text-green-500"
                    />

                    <span>
                      Our Agent typically
                      responds in 12 hr
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            LOCATION
        =================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

          <div className="mb-6">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-950">
              Location
            </h2>

            <p className="text-gray-600 mt-2">
              {venue.product_location ||
                "Delhi NCR"}
            </p>

            {venue.product_address && (
              <p className="text-gray-500 text-sm mt-1">
                {venue.product_address}
              </p>
            )}

          </div>


          {mapEmbedUrl ? (

            <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-gray-200">

              <iframe
                src={mapEmbedUrl}
                title={`Map showing ${venue.product_name}`}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          ) : (

            <div className="h-[300px] rounded-2xl bg-gray-100 flex items-center justify-center">

              <p className="text-gray-500">
                Location map unavailable.
              </p>

            </div>

          )}

        </section>


          if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#d4af37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading farmhouse...</p>
        </div>
      </div>
    );
  }

  if (error || !venue) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            Farmhouse not found
          </h1>

          <p className="text-gray-600 mb-6">
            {error || "The farmhouse you are looking for could not be found."}
          </p>

          <Link
            href="/farmhouses"
            className="bg-[#d4af37] text-black px-6 py-3 rounded-md hover:bg-[#c19d2f] transition"
          >
            Back to Farmhouses
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  const venueImages =
    venue.images && Array.isArray(venue.images) && venue.images.length > 0
      ? venue.images
      : venue.image
      ? [venue.image]
      : [];

  const displayImages =
    venueImages.length > 0
      ? venueImages
      : ["/placeholder-farmhouse.jpg"];

  const venueName =
    venue.name ||
    venue.title ||
    venue.venueName ||
    "Farmhouse";

  const venueLocation =
    venue.location ||
    venue.city ||
    venue.address ||
    "Delhi NCR";

  const venueDescription =
    venue.description ||
    venue.about ||
    "A beautiful private farmhouse perfect for celebrations, parties, weddings and weekend gatherings.";

  const venuePrice =
    venue.price ||
    venue.startingPrice ||
    venue.pricePerDay ||
    venue.rent ||
    0;

  const formattedPrice = Number(venuePrice)
    ? Number(venuePrice).toLocaleString("en-IN")
    : venuePrice;

  const amenitiesList =
    venue.amenities ||
    venue.facilities ||
    [];

  const defaultAmenities = [
    {
      title: "Food and Beverage",
      icon: "🍽️",
      description:
        "Full catering services are available with a wide range of local and international cuisine options. Catering arrangements can be planned according to the event type, guest count, menu preferences, and specific requirements of the celebration."
    },
    {
      title: "Alcoholic and Beverage",
      icon: "🍷",
      description:
        "Alcoholic and beverage services can be arranged according to the venue's policies and event requirements. Beverage options may include wines, beers, spirits, mocktails, soft drinks, and other refreshments."
    },
    {
      title: "Furniture",
      icon: "🪑",
      description:
        "Furniture arrangements are available for different types of events and celebrations. Tables, chairs, seating arrangements, and other required furniture can be organized according to the event layout and guest count."
    },
    {
      title: "Restrooms",
      icon: "🚻",
      description:
        "Clean and convenient restroom facilities are available for guests throughout the event. The facilities are designed to support gatherings of different sizes."
    },
    {
      title: "AV and Music",
      icon: "🎵",
      description:
        "Audio-visual and music facilities can be arranged for different event requirements. Depending on the venue and event, facilities may include professional sound systems, microphones, music equipment and lighting."
    },
    {
      title: "Parking",
      icon: "🚗",
      description:
        "Ample parking space is available for guests attending events at the venue. Parking arrangements are designed to make arrival and departure more convenient."
    },
    {
      title: "Events Rules",
      icon: "✓",
      description:
        "Event guidelines and venue policies are followed to ensure a smooth, safe, and enjoyable experience for all guests. Specific arrangements relating to event timings, setup, music, catering, alcohol, decorations, parking and guest capacity can be discussed before booking."
    }
  ];

  const finalAmenities =
    Array.isArray(amenitiesList) && amenitiesList.length > 0
      ? amenitiesList.map((item) => {
          if (typeof item === "string") {
            return {
              title: item,
              icon: "✓",
              description:
                "This facility is available at the venue. Please contact our team for complete details and availability."
            };
          }

          return {
            title: item.title || item.name || "Facility",
            icon: item.icon || "✓",
            description:
              item.description ||
              item.details ||
              "This facility is available at the venue."
          };
        })
      : defaultAmenities;

  return (
    <div className="min-h-screen bg-white text-[#0b1b33]">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-24">

        {/* ================= VENUE HEADER ================= */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#071a33]">
                {venueName}
              </h1>

              <p className="text-gray-600 mt-2 text-base sm:text-lg">
                {venueLocation}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                if (typeof navigator !== "undefined" && navigator.share) {
                  navigator.share({
                    title: venueName,
                    text: `Check out ${venueName}`,
                    url: window.location.href
                  });
                } else if (
                  typeof navigator !== "undefined" &&
                  navigator.clipboard
                ) {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied!");
                }
              }}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition"
            >
              <span className="text-xl">♧</span>
              Share
            </button>

          </div>

          {/* ================= IMAGE GALLERY ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3">

            <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <img
                src={displayImages[0]}
                alt={venueName}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedImage(displayImages[0])}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 h-[300px] sm:h-[400px] lg:h-[500px]">

              {displayImages.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden relative"
                >
                  <img
                    src={image}
                    alt={`${venueName} ${index + 2}`}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition duration-300"
                    onClick={() => setSelectedImage(image)}
                  />

                  {index === 3 && displayImages.length > 5 && (
                    <button
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md text-sm font-medium shadow"
                    >
                      View all photos
                    </button>
                  )}
                </div>
              ))}

              {displayImages.length === 1 && (
                <>
                  <div className="rounded-xl bg-gray-100"></div>
                  <div className="rounded-xl bg-gray-100"></div>
                  <div className="rounded-xl bg-gray-100"></div>
                  <div className="rounded-xl bg-gray-100"></div>
                </>
              )}

            </div>
          </div>
        </section>

        {/* ================= CONTENT + BOOKING ================= */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 mt-14">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-8">

            {/* ================= LEFT SIDE ================= */}
            <div>

              {/* ABOUT */}
              <div className="mb-10">

                <h2 className="text-2xl sm:text-3xl font-bold text-[#071a33] mb-5">
                  About {venueName}
                </h2>

                <p className="text-gray-600 leading-7 whitespace-pre-line">
                  {venueDescription}
                </p>

              </div>

              {/* ================= AMENITIES ================= */}
              <div className="space-y-3">

                {finalAmenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden"
                  >

                    <button
                      type="button"
                      onClick={() => {
                        setOpenAmenity(
                          openAmenity === index ? null : index
                        );
                      }}
                      className="w-full flex items-center justify-between px-5 py-5 text-left hover:bg-gray-50 transition"
                    >

                      <div className="flex items-center gap-4">

                        <span className="text-xl w-7 text-center">
                          {amenity.icon}
                        </span>

                        <span className="text-base sm:text-lg font-medium text-[#16365f]">
                          {amenity.title}
                        </span>

                      </div>

                      <span className="text-xl">
                        {openAmenity === index ? "⌃" : "⌄"}
                      </span>

                    </button>

                    {openAmenity === index && (
                      <div className="px-5 pb-5 pl-16">
                        <p className="text-gray-600 leading-7">
                          {amenity.description}
                        </p>
                      </div>
                    )}

                  </div>
                ))}

              </div>

            </div>

            {/* ================= RIGHT BOOKING CARD ================= */}
            <div className="relative">

              <div className="lg:sticky lg:top-28 border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">

                <div className="mb-6">

                  <div className="text-3xl font-bold text-[#172033]">
                    ₹{formattedPrice}
                    <span className="text-base font-normal text-gray-500">
                      {" "}
                      onwards
                    </span>
                  </div>

                  {venue.discount && (
                    <div className="text-sm text-[#d4af37] mt-1">
                      {venue.discount}
                    </div>
                  )}

                </div>

                <div className="border-t border-gray-200 pt-5">

                  <div className="flex items-center justify-between mb-5">

                    <span className="text-sm text-gray-600">
                      2+ days discount
                    </span>

                    <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                      {venue.discountPercent || "10%"} off
                    </span>

                  </div>

                  {/* DATE */}
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date and time{" "}
                    <span className="text-gray-400">(required)</span>
                  </label>

                  <input
                    type="date"
                    value={bookingDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-4 mb-4 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />

                  {/* CHECK IN / CHECK OUT */}
                  <div className="grid grid-cols-2 gap-3 mb-5">

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Check-in
                      </label>

                      <select
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      >
                        <option value="9:30 am">9:30 am</option>
                        <option value="10:00 am">10:00 am</option>
                        <option value="11:00 am">11:00 am</option>
                        <option value="12:00 pm">12:00 pm</option>
                        <option value="1:00 pm">1:00 pm</option>
                        <option value="2:00 pm">2:00 pm</option>
                        <option value="3:00 pm">3:00 pm</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Check-out
                      </label>

                      <select
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      >
                        <option value="9:30 pm">9:30 pm</option>
                        <option value="8:00 pm">8:00 pm</option>
                        <option value="9:00 pm">9:00 pm</option>
                        <option value="10:00 pm">10:00 pm</option>
                        <option value="11:00 pm">11:00 pm</option>
                        <option value="12:00 am">12:00 am</option>
                      </select>
                    </div>

                  </div>

                  {/* BOOKING BUTTON */}
                  <button
                    type="button"
                    onClick={handleBooking}
                    disabled={!bookingDate}
                    className={`w-full py-4 rounded-xl font-medium text-white transition ${
                      bookingDate
                        ? "bg-[#e5cc69] hover:bg-[#d7bc55]"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Start Booking
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-5 text-sm text-gray-500">
                    <span className="text-green-500 text-lg">✺</span>
                    Our Agent typically responded in 12 hr
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= LOCATION ================= */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 mt-16 mb-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-[#071a33]">
            Location
          </h2>

          <p className="text-gray-600 mt-2 mb-8">
            {venueLocation}
          </p>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-gray-200">

            {venue.mapUrl ? (
              <iframe
                src={venue.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`${venueName} location`}
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-center px-6">
                <div>
                  <div className="text-4xl mb-3">📍</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {venueLocation}
                  </h3>
                  <p className="text-gray-500">
                    Location map will appear here when the admin adds
                    the map information.
                  </p>
                </div>
              </div>
            )}

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= IMAGE LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt={venueName}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

      {/* ================= WHATSAPP ================= */}
      <a
        href="https://wa.me/918388008069"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9998] w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
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
};

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
}

export default VenuePage;
