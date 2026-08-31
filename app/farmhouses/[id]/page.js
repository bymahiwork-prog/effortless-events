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

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";


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

  /*
   * Standard API response
   */
  if (Array.isArray(venue.images)) {
    images = venue.images;
  }

  /*
   * Other possible response formats
   */
  else if (Array.isArray(venue.product_images)) {
    images = venue.product_images;
  }

  else if (Array.isArray(venue.productImages)) {
    images = venue.productImages;
  }

  else if (Array.isArray(venue.gallery)) {
    images = venue.gallery;
  }

  else if (Array.isArray(venue.photos)) {
    images = venue.photos;
  }


  /*
   * Images may sometimes arrive
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


  /*
   * Product images may also arrive
   * as a JSON string.
   */
  if (
    typeof venue.product_images === "string"
  ) {
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
   * If no gallery images exist,
   * use the main product image.
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


  /*
   * Convert image objects into URLs.
   */
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
     * PRODUCT NAME
     */
    product_name: getFirstValue(
      rawVenue.product_name,
      rawVenue.productName,
      rawVenue.name,
      rawVenue.title,
      "Farmhouse"
    ),


    /*
     * LOCATION
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
     * ADDRESS
     */
    product_address: getFirstValue(
      rawVenue.product_address,
      rawVenue.productAddress,
      rawVenue.address,
      ""
    ),


    /*
     * PRICE
     */
    product_price: getFirstValue(
      rawVenue.product_price,
      rawVenue.productPrice,
      rawVenue.price,
      rawVenue.starting_price,
      rawVenue.startingPrice,
      ""
    ),


    /*
     * DESCRIPTION
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
      rawVenue.averageRating,
      "4.0"
    ),


    /*
     * PHONE NUMBER
     */
    product_number: getFirstValue(
      rawVenue.product_number,
      rawVenue.productNumber,
      rawVenue.phone,
      rawVenue.mobile,
      "917838008069"
    ),


    /*
     * MAP URL
     */
    mapUrl: getFirstValue(
      rawVenue.mapUrl,
      rawVenue.map_url,
      rawVenue.google_map,
      rawVenue.googleMap,
      ""
    ),
  };
}


/* =========================================================
   LOADING SKELETON
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

              <div className="h-[200px] bg-gray-200 rounded
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
    Boolean(expandedSections[sectionKey]);

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
            isOpen ? "rotate-180" : ""
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

  /*
   * selectedImage is an INDEX.
   * The lightbox image will use a separate state later.
   */
  const [selectedImage, setSelectedImage] =
    useState(0);

  const [lightboxImage, setLightboxImage] =
    useState(null);


  /* =========================================================
     BOOKING STATE
  ========================================================= */

  const [bookingDate, setBookingDate] =
    useState("");

  const [checkIn, setCheckIn] =
    useState("9:30 am");

  const [checkOut, setCheckOut] =
    useState("9:30 pm");


  /* =========================================================
     DESCRIPTION STATE
  ========================================================= */

  const [
    isDescriptionExpanded,
    setIsDescriptionExpanded,
  ] = useState(false);


  /* =========================================================
     INFORMATION SECTION STATE
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

    let cancelled = false;

    const fetchVenue = async () => {

      try {

        setLoading(true);

        setError("");

        const response = await fetch(
          `/api/venues/${encodeURIComponent(
            venueId
          )}`,
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

        if (!cancelled) {
          setVenue(normalized);
        }

      } catch (err) {

        console.error(
          "Farmhouse fetch error:",
          err
        );

        if (!cancelled) {
          setError(
            err?.message ||
              "Unable to load farmhouse information."
          );
        }

      } finally {

        if (!cancelled) {
          setLoading(false);
        }

      }

    };

    fetchVenue();

    return () => {
      cancelled = true;
    };

  }, [venueId]);


  /* =========================================================
     FETCH POPULAR VENUES
  ========================================================= */

  useEffect(() => {

    let cancelled = false;

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
            Array.isArray(venues)
              ? venues
                  .map((item) =>
                    normalizeVenue(item)
                  )
                  .filter(
                    (item) =>
                      String(item?.id) !==
                      String(venueId)
                  )
              : [];

          if (!cancelled) {
            setPopularVenues(
              normalizedVenues
            );
          }

        } catch (err) {

          console.error(
            "Popular venues error:",
            err
          );

          if (!cancelled) {
            setPopularVenues([]);
          }

        } finally {

          if (!cancelled) {
            setPopularLoading(false);
          }

        }

      };

    fetchPopularVenues();

    return () => {
      cancelled = true;
    };

  }, [venueId]);


  /* =========================================================
     RESPONSIVE POPULAR SLIDES
  ========================================================= */

  useEffect(() => {

    const updateSlides = () => {

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

  }, [
    popularSlidesToShow,
    venueId,
  ]);


  /* =========================================================
     TOGGLE INFORMATION SECTION
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
      !Array.isArray(venue.images) ||
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

    if (images.length <= 1) {
      return;
    }

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

    if (images.length <= 1) {
      return;
    }

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

  const formattedPrice = useMemo(() => {

    if (
      venue?.product_price === undefined ||
      venue?.product_price === null ||
      String(venue.product_price).trim() === ""
    ) {
      return "Price on request";
    }

    const price = String(
      venue.product_price
    ).trim();

    if (price.startsWith("₹")) {
      return price;
    }

    /*
     * If the admin panel stores a plain number,
     * format it using Indian numbering.
     */
    const numericPrice = Number(
      price.replace(/,/g, "")
    );

    if (
      Number.isFinite(numericPrice)
    ) {
      return `₹${numericPrice.toLocaleString(
        "en-IN"
      )}`;
    }

    return `₹${price}`;

  }, [venue]);


  /* =========================================================
     RATING
  ========================================================= */

  const venueRating = useMemo(() => {

    const rating = Number(
      venue?.rating
    );

    if (
      Number.isFinite(rating) &&
      rating > 0
    ) {
      return rating.toFixed(1);
    }

    return "4.0";

  }, [venue]);


  /* =========================================================
     MAP QUERY
  ========================================================= */

  const mapSearchQuery = useMemo(() => {

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
     MAP EMBED URL
  ========================================================= */

  const mapEmbedUrl = useMemo(() => {

    /*
     * Prefer the map URL supplied by the admin/API.
     */
    if (
      venue?.mapUrl &&
      String(venue.mapUrl).trim() !== ""
    ) {
      return venue.mapUrl;
    }

    /*
     * Otherwise create a Google Maps embed
     * using the farmhouse address/location.
     */
    if (!mapSearchQuery) {
      return "";
    }

    return `https://www.google.com/maps?q=${encodeURIComponent(
      mapSearchQuery
    )}&output=embed`;

  }, [
    venue,
    mapSearchQuery,
  ]);


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

  const nextPopularSlide = () => {

    if (
      popularMaxSlide <= 0
    ) {
      return;
    }

    setPopularSlide(
      (previous) =>
        previous >= popularMaxSlide
          ? 0
          : previous + 1
    );

  };


  /* =========================================================
     PREVIOUS POPULAR
  ========================================================= */

  const previousPopularSlide = () => {

    if (
      popularMaxSlide <= 0
    ) {
      return;
    }

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

  const handleShare = async () => {

    if (!venue) {
      return;
    }

    const currentUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "";

    const shareData = {
      title:
        venue.product_name,

      text:
        `Check out ${venue.product_name} in ${venue.product_location}.`,

      url: currentUrl,
    };


    try {

      /*
       * Native mobile/browser sharing.
       */
      if (
        typeof navigator !== "undefined" &&
        typeof navigator.share === "function"
      ) {

        await navigator.share(
          shareData
        );

        return;
      }


      /*
       * Clipboard fallback.
       */
      if (
        typeof navigator !== "undefined" &&
        navigator.clipboard &&
        currentUrl
      ) {

        await navigator.clipboard.writeText(
          currentUrl
        );

        alert(
          "Farmhouse link copied!"
        );

        return;
      }


      /*
       * Final fallback.
       */
      alert(
        "Unable to share this farmhouse link."
      );

    } catch (err) {

      /*
       * AbortError means the user simply
       * closed the share dialog.
       */
      if (
        err?.name !== "AbortError"
      ) {
        console.error(
          "Share error:",
          err
        );
      }

    }

  };


  /* =========================================================
     BOOKING
  ========================================================= */

  const handleBooking = () => {

    if (!bookingDate) {

      alert(
        "Please select a booking date."
      );

      return;
    }


    if (!venue) {
      return;
    }


    /*
     * Clean the phone number so WhatsApp
     * receives digits only.
     */
    const phoneNumber =
      String(
        venue.product_number ||
          "917838008069"
      )
        .replace(
          /[^0-9]/g,
          ""
        );


    /*
     * Make sure India country code exists.
     */
    const finalPhoneNumber =
      phoneNumber.startsWith("91")
        ? phoneNumber
        : `91${phoneNumber}`;


    const message = `
Hello Effortless Events,

I would like to enquire about booking the following farmhouse.

Farmhouse: ${venue.product_name}
Location: ${venue.product_location}
Date: ${bookingDate}
Check-in: ${checkIn}
Check-out: ${checkOut}
Price: ${formattedPrice}

Please let me know about availability and the next steps.

Thank you.
    `.trim();


    const whatsappUrl =
      `https://wa.me/${finalPhoneNumber}?text=${encodeURIComponent(
        message
      )}`;


    if (
      typeof window !== "undefined"
    ) {

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

    }

  };


  /* =========================================================
     OPEN LIGHTBOX
  ========================================================= */

  const openLightbox = (image) => {

    if (!image) {
      return;
    }

    setLightboxImage(image);

  };


  /* =========================================================
     CLOSE LIGHTBOX
  ========================================================= */

  const closeLightbox = () => {

    setLightboxImage(null);

  };


  /* =========================================================
     LOADING STATE
  ========================================================= */

  if (loading) {

    return (
      <VenueSkeleton />
    );

  }


  /* =========================================================
     ERROR STATE
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
     IMAGES
  ========================================================= */

  const images = useMemo(() => {

    if (
      !venue?.images ||
      !Array.isArray(venue.images) ||
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

    if (images.length <= 1) {
      return;
    }

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

    if (images.length <= 1) {
      return;
    }

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

  const formattedPrice = useMemo(() => {

    if (
      venue?.product_price === undefined ||
      venue?.product_price === null ||
      String(venue.product_price).trim() === ""
    ) {
      return "Price on request";
    }

    const price = String(
      venue.product_price
    ).trim();

    if (price.startsWith("₹")) {
      return price;
    }

    /*
     * If the admin panel stores a plain number,
     * format it using Indian numbering.
     */
    const numericPrice = Number(
      price.replace(/,/g, "")
    );

    if (
      Number.isFinite(numericPrice)
    ) {
      return `₹${numericPrice.toLocaleString(
        "en-IN"
      )}`;
    }

    return `₹${price}`;

  }, [venue]);


  /* =========================================================
     RATING
  ========================================================= */

  const venueRating = useMemo(() => {

    const rating = Number(
      venue?.rating
    );

    if (
      Number.isFinite(rating) &&
      rating > 0
    ) {
      return rating.toFixed(1);
    }

    return "4.0";

  }, [venue]);


  /* =========================================================
     MAP QUERY
  ========================================================= */

  const mapSearchQuery = useMemo(() => {

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
     MAP EMBED URL
  ========================================================= */

  const mapEmbedUrl = useMemo(() => {

    /*
     * Prefer the map URL supplied by the admin/API.
     */
    if (
      venue?.mapUrl &&
      String(venue.mapUrl).trim() !== ""
    ) {
      return venue.mapUrl;
    }

    /*
     * Otherwise create a Google Maps embed
     * using the farmhouse address/location.
     */
    if (!mapSearchQuery) {
      return "";
    }

    return `https://www.google.com/maps?q=${encodeURIComponent(
      mapSearchQuery
    )}&output=embed`;

  }, [
    venue,
    mapSearchQuery,
  ]);


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

  const nextPopularSlide = () => {

    if (
      popularMaxSlide <= 0
    ) {
      return;
    }

    setPopularSlide(
      (previous) =>
        previous >= popularMaxSlide
          ? 0
          : previous + 1
    );

  };


  /* =========================================================
     PREVIOUS POPULAR
  ========================================================= */

  const previousPopularSlide = () => {

    if (
      popularMaxSlide <= 0
    ) {
      return;
    }

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

  const handleShare = async () => {

    if (!venue) {
      return;
    }

    const currentUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "";

    const shareData = {
      title:
        venue.product_name,

      text:
        `Check out ${venue.product_name} in ${venue.product_location}.`,

      url: currentUrl,
    };


    try {

      /*
       * Native mobile/browser sharing.
       */
      if (
        typeof navigator !== "undefined" &&
        typeof navigator.share === "function"
      ) {

        await navigator.share(
          shareData
        );

        return;
      }


      /*
       * Clipboard fallback.
       */
      if (
        typeof navigator !== "undefined" &&
        navigator.clipboard &&
        currentUrl
      ) {

        await navigator.clipboard.writeText(
          currentUrl
        );

        alert(
          "Farmhouse link copied!"
        );

        return;
      }


      /*
       * Final fallback.
       */
      alert(
        "Unable to share this farmhouse link."
      );

    } catch (err) {

      /*
       * AbortError means the user simply
       * closed the share dialog.
       */
      if (
        err?.name !== "AbortError"
      ) {
        console.error(
          "Share error:",
          err
        );
      }

    }

  };


  /* =========================================================
     BOOKING
  ========================================================= */

  const handleBooking = () => {

    if (!bookingDate) {

      alert(
        "Please select a booking date."
      );

      return;
    }


    if (!venue) {
      return;
    }


    /*
     * Clean the phone number so WhatsApp
     * receives digits only.
     */
    const phoneNumber =
      String(
        venue.product_number ||
          "917838008069"
      )
        .replace(
          /[^0-9]/g,
          ""
        );


    /*
     * Make sure India country code exists.
     */
    const finalPhoneNumber =
      phoneNumber.startsWith("91")
        ? phoneNumber
        : `91${phoneNumber}`;


    const message = `
Hello Effortless Events,

I would like to enquire about booking the following farmhouse.

Farmhouse: ${venue.product_name}
Location: ${venue.product_location}
Date: ${bookingDate}
Check-in: ${checkIn}
Check-out: ${checkOut}
Price: ${formattedPrice}

Please let me know about availability and the next steps.

Thank you.
    `.trim();


    const whatsappUrl =
      `https://wa.me/${finalPhoneNumber}?text=${encodeURIComponent(
        message
      )}`;


    if (
      typeof window !== "undefined"
    ) {

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

    }

  };


  /* =========================================================
     OPEN LIGHTBOX
  ========================================================= */

  const openLightbox = (image) => {

    if (!image) {
      return;
    }

    setLightboxImage(image);

  };


  /* =========================================================
     CLOSE LIGHTBOX
  ========================================================= */

  const closeLightbox = () => {

    setLightboxImage(null);

  };


  /* =========================================================
     LOADING STATE
  ========================================================= */

  if (loading) {

    return (
      <VenueSkeleton />
    );

  }


  /* =========================================================
     ERROR STATE
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
