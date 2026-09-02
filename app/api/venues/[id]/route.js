"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MarketGallery from "../../components/MarketGallery";
import FarmBookingPage from "../../components/FarmBookingPage";
import FarmLocation from "../../components/FarmLocation";
import PopularVenues from "../../components/PopularVenues";

/*
 * =========================================================
 * HELPER
 * =========================================================
 */

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

/*
 * =========================================================
 * IMAGE NORMALIZER
 * =========================================================
 */

function getImages(venue) {
  if (!venue) {
    return [];
  }

  let images = [];

  /*
   * Standard images array
   */

  if (Array.isArray(venue.images)) {
    images = venue.images;
  }

  /*
   * Product images array
   */

  else if (Array.isArray(venue.product_images)) {
    images = venue.product_images;
  }

  /*
   * Alternative product images
   */

  else if (Array.isArray(venue.productImages)) {
    images = venue.productImages;
  }

  /*
   * Gallery
   */

  else if (Array.isArray(venue.gallery)) {
    images = venue.gallery;
  }

  /*
   * Photos
   */

  else if (Array.isArray(venue.photos)) {
    images = venue.photos;
  }

  /*
   * JSON images string
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
   * JSON product_images string
   */

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
   * If gallery is empty, use main image
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
   * Convert image objects into URLs
   */

  return images
    .map((image) => {
      /*
       * Already a URL
       */

      if (typeof image === "string") {
        return image;
      }

      /*
       * Image object
       */

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

/*
 * =========================================================
 * NORMALIZE VENUE
 * =========================================================
 *
 * This makes sure the frontend receives all the important
 * catalogue information regardless of the exact database
 * field naming.
 */

function normalizeVenue(rawVenue) {
  if (!rawVenue) {
    return null;
  }

  const normalizedImages =
    getImages(rawVenue);

  return {
    /*
     * Keep EVERYTHING returned by the API.
     *
     * This is important because we don't want to lose
     * additional catalogue fields.
     */

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
     * NAME
     */

    product_name: getFirstValue(
      rawVenue.product_name,
      rawVenue.productName,
      rawVenue.name,
      rawVenue.title,
      "Effortless Venue"
    ),

    /*
     * LOCATION
     */

    product_location: getFirstValue(
      rawVenue.product_location,
      rawVenue.productLocation,
      rawVenue.location,
      rawVenue.city,
      rawVenue.area
    ),

    /*
     * ADDRESS
     */

    product_address: getFirstValue(
      rawVenue.product_address,
      rawVenue.productAddress,
      rawVenue.address
    ),

    /*
     * PRICE
     */

    product_price: getFirstValue(
      rawVenue.product_price,
      rawVenue.productPrice,
      rawVenue.price,
      rawVenue.starting_price,
      rawVenue.startingPrice
    ),

    /*
     * PHONE
     */

    product_number: getFirstValue(
      rawVenue.product_number,
      rawVenue.productNumber,
      rawVenue.phone,
      rawVenue.mobile,
      rawVenue.contact
    ),

    /*
     * DESCRIPTION
     */

    product_detail: getFirstValue(
      rawVenue.product_detail,
      rawVenue.productDetail,
      rawVenue.description,
      rawVenue.details,
      rawVenue.about
    ),

    /*
     * GOOGLE MAP / MAP URL
     */

    product_map: getFirstValue(
      rawVenue.product_map,
      rawVenue.productMap,
      rawVenue.map,
      rawVenue.map_url,
      rawVenue.mapUrl,
      rawVenue.google_map,
      rawVenue.googleMap
    ),

    /*
     * CATEGORY
     */

    category_name: getFirstValue(
      rawVenue.category_name,
      rawVenue.categoryName,
      rawVenue.category,
      "Farmhouse"
    ),

    /*
     * RATING
     */

    rating: getFirstValue(
      rawVenue.rating,
      rawVenue.guest_rating,
      rawVenue.guestRating,
      rawVenue.average_rating,
      rawVenue.averageRating,
      "5.0"
    ),

    /*
     * ALL IMAGES
     */

    images: normalizedImages,

    /*
     * MAIN IMAGE
     */

    image: getFirstValue(
      rawVenue.image,
      normalizedImages[0]
    ),

    /*
     * STATUS
     */

    status: rawVenue.status,

    /*
     * DATES
     */

    created_date: getFirstValue(
      rawVenue.created_date,
      rawVenue.createdDate
    ),

    last_update: getFirstValue(
      rawVenue.last_update,
      rawVenue.lastUpdate
    ),
  };
}

/*
 * =========================================================
 * LOADING PAGE
 * =========================================================
 */

function VenueLoading() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar variant="transparent" />

      <div className="min-h-screen flex items-center justify-center">

        <div className="text-center px-6">

          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#E4D078] rounded-full animate-spin mx-auto mb-5" />

          <h1 className="text-xl font-semibold text-gray-900">
            Loading farmhouse...
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Please wait while we load the complete venue catalogue.
          </p>

        </div>

      </div>

    </main>
  );
}

/*
 * =========================================================
 * ERROR PAGE
 * =========================================================
 */

function VenueError({ message }) {
  return (
    <main className="min-h-screen bg-white">

      <Navbar variant="transparent" />

      <div className="min-h-[70vh] flex items-center justify-center px-6">

        <div className="text-center max-w-lg">

          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Farmhouse Not Found
          </h1>

          <p className="text-gray-500 mb-7">
            {message ||
              "We were unable to load this farmhouse."}
          </p>

          <a
            href="/farmhouses"
            className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-[#E4D078] text-black font-medium hover:bg-[#d5c06b] transition"
          >
            Browse Farmhouses
          </a>

        </div>

      </div>

      <Footer />

    </main>
  );
}

/*
 * =========================================================
 * MAIN VENUE PAGE
 * =========================================================
 */

export default function VenuePage() {
  const params = useParams();

  const venueId = params?.id;

  const [venue, setVenue] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  /*
   * =======================================================
   * FETCH VENUE
   * =======================================================
   */

  useEffect(() => {
    if (!venueId) {
      return;
    }

    const fetchVenue = async () => {
      try {
        setLoading(true);
        setError("");

        /*
         * IMPORTANT:
         *
         * The URL does NOT change.
         *
         * Example:
         * /venues/77
         *
         * continues to work.
         */

        const response = await fetch(
          `/api/venues/${venueId}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data =
          await response.json();

        if (
          !response.ok ||
          !data?.success
        ) {
          throw new Error(
            data?.error ||
              "Unable to load farmhouse."
          );
        }

        /*
         * Your API currently returns:
         *
         * {
         *   success: true,
         *   venue: {...}
         * }
         *
         * But we also support product/data
         * so the frontend remains flexible.
         */

        const rawVenue =
          data?.venue ||
          data?.product ||
          data?.data;

        const normalizedVenue =
          normalizeVenue(rawVenue);

        if (!normalizedVenue) {
          throw new Error(
            "Farmhouse information was not found."
          );
        }

        /*
         * Store COMPLETE venue object.
         */

        setVenue(normalizedVenue);

      } catch (err) {
        console.error(
          "Farmhouse detail page error:",
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

  /*
   * =======================================================
   * LOADING
   * =======================================================
   */

  if (loading) {
    return <VenueLoading />;
  }

  /*
   * =======================================================
   * ERROR
   * =======================================================
   */

  if (error || !venue) {
    return (
      <VenueError
        message={error}
      />
    );
  }

  /*
   * =======================================================
   * PAGE
   * =======================================================
   */

  return (
    <main className="min-h-screen bg-white text-black">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar variant="transparent" />

      {/* =================================================
          GALLERY
      ================================================= */}

      <section className="w-full">

        <MarketGallery
          venue={venue}
        />

      </section>

      {/* =================================================
          VENUE SUMMARY
      ================================================= */}

      <section className="w-full bg-white border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

            <div className="max-w-4xl">

              {/* CATEGORY */}

              <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#B38B45] mb-3">
                {venue.category_name ||
                  "Farmhouse"}
              </p>

              {/* NAME */}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
                {venue.product_name ||
                  "Effortless Venue"}
              </h1>

              {/* LOCATION */}

              {venue.product_location && (
                <p className="mt-3 text-gray-600 text-base sm:text-lg">
                  📍 {venue.product_location}
                </p>
              )}

              {/* ADDRESS */}

              {venue.product_address && (
                <p className="mt-1 text-sm text-gray-500">
                  {venue.product_address}
                </p>
              )}

            </div>

            {/* PRICE */}

            <div className="lg:text-right">

              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                Starting Price
              </p>

              <p className="text-2xl sm:text-3xl font-semibold text-gray-900">

                {venue.product_price
                  ? String(
                      venue.product_price
                    ).startsWith("₹")
                    ? venue.product_price
                    : `₹${venue.product_price}`
                  : "Price on request"}

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          BOOKING + COMPLETE VENUE INFORMATION
      ================================================= */}

      <section className="w-full bg-white">

        <FarmBookingPage
          venue={venue}
        />

      </section>

      {/* =================================================
          LOCATION
      ================================================= */}

      <section className="w-full bg-white border-t border-gray-100">

        <FarmLocation
          venue={venue}
        />

      </section>

      {/* =================================================
          POPULAR VENUES
      ================================================= */}

      <section className="w-full bg-white border-t border-gray-100">

        <PopularVenues
          venue={venue}
        />

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </main>
  );
}
