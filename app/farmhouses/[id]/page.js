"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
} from "lucide-react";

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
   HELPERS
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

function getImages(venue) {
  if (!venue) return [];

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
      const parsed = JSON.parse(venue.product_images);

      if (Array.isArray(parsed)) {
        images = parsed;
      }
    } catch {
      images = [venue.product_images];
    }
  }

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

      if (image && typeof image === "object") {
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

function normalizeVenue(rawVenue) {
  if (!rawVenue) return null;

  return {
    ...rawVenue,

    id: getFirstValue(
      rawVenue.id,
      rawVenue._id,
      rawVenue.product_id,
      rawVenue.productId
    ),

    product_name: getFirstValue(
      rawVenue.product_name,
      rawVenue.productName,
      rawVenue.name,
      rawVenue.title
    ),

    product_location: getFirstValue(
      rawVenue.product_location,
      rawVenue.productLocation,
      rawVenue.location,
      rawVenue.city,
      rawVenue.area
    ),

    product_price: getFirstValue(
      rawVenue.product_price,
      rawVenue.productPrice,
      rawVenue.price,
      rawVenue.starting_price,
      rawVenue.startingPrice
    ),

    product_detail: getFirstValue(
      rawVenue.product_detail,
      rawVenue.productDetail,
      rawVenue.description,
      rawVenue.details,
      rawVenue.about
    ),

    category_name: getFirstValue(
      rawVenue.category_name,
      rawVenue.categoryName,
      rawVenue.category,
      "Farmhouse"
    ),

    images: getImages(rawVenue),

    rating: getFirstValue(
      rawVenue.rating,
      rawVenue.guest_rating,
      rawVenue.guestRating,
      rawVenue.average_rating,
      rawVenue.averageRating
    ),
  };
}

/* =========================================================
   COLLAPSIBLE SECTION
========================================================= */

function InfoSection({
  title,
  icon,
  sectionKey,
  expandedSections,
  toggleSection,
  children,
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() =>
