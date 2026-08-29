"use client";

import React, { useState } from "react";
import { Share2, Grid, MapPin } from "lucide-react";

export default function MarketGallery({ venue }) {
  const [showAllImages, setShowAllImages] = useState(false);

  if (!venue) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4" />

          <h2 className="text-xl font-semibold text-gray-900">
            Loading venue...
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Please wait while we load the venue details.
          </p>
        </div>
      </div>
    );
  }

  const farmNames = {
    "Venue 98": "Effortless Farm 45",
    "Venue 125": "Effortless Farm 16",
    "Venue 120": "Effortless Farm 3",
    "Venue 39": "Effortless Farm 13",
  };

  const displayName =
    farmNames[venue.product_name] ||
    venue.product_name ||
    "Effortless Venue";

  const images = [
    ...(venue.image
      ? [
          {
            id: 1,
            src: venue.image,
            alt: displayName,
          },
        ]
      : []),

    ...(Array.isArray(venue.images)
      ? venue.images
          .filter(Boolean)
          .map((img, index) => ({
            id: index + 2,
            src: img,
            alt: `${displayName} - Image ${index + 1}`,
          }))
      : []),
  ];

  const uniqueImages = images.filter(
    (image, index, self) =>
      image.src &&
      index === self.findIndex((item) => item.src === image.src)
  );

  const hasImages = uniqueImages.length > 0;

  const handleShare = async () => {
    try {
      if (
        typeof navigator !== "undefined" &&
        navigator.share
      ) {
        await navigator.share({
          title: displayName,
          text: venue.product_detail || "",
          url: window.location.href,
        });
      } else if (
        typeof navigator !== "undefined" &&
        navigator.clipboard
      ) {
        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Share error:", error);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 py-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8">

          <div>
            <h1 className="text-4xl font-bold text-black">
              {displayName}
            </h1>

            <p className="flex items-center text-gray-600 mt-2">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />

              {venue.product_location ||
                "Location unavailable"}
            </p>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 mt-4 sm:mt-0 hover:opacity-70 transition"
          >
            <Share2 size={18} />
            Share
          </button>
        </div>

        {/* Gallery */}

        {!hasImages ? (
          <div className="w-full h-[400px] rounded-xl bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-lg">
                Venue images are currently unavailable.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* Main Image */}

            <div className="lg:col-span-2">
              <div className="relative h-[550px] rounded-xl overflow-hidden bg-gray-100">

                <img
                  src={uniqueImages[0].src}
                  alt={uniqueImages[0].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  onError={(event) => {
                    event.currentTarget.style.display =
                      "none";
                  }}
                />

              </div>
            </div>

            {/* Thumbnail Gallery */}

            <div className="grid grid-cols-2 gap-4">

              {uniqueImages
                .slice(1, 5)
                .map((image, index) => (
                  <div
                    key={`${image.id}-${index}`}
                    className="relative h-[265px] rounded-xl overflow-hidden cursor-pointer bg-gray-100"
                  >

                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-300"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />

                    {/* View All */}

                    {index === 3 &&
                      uniqueImages.length > 5 && (
                        <button
                          type="button"
                          onClick={() =>
                            setShowAllImages(true)
                          }
                          className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold hover:bg-black/70 transition"
                        >
                          <Grid
                            className="mr-2"
                            size={20}
                          />

                          View all
                        </button>
                      )}

                  </div>
                ))}

            </div>
          </div>
        )}

        {/* Image Modal */}

        {showAllImages && (
          <div className="fixed inset-0 z-50 bg-black/90 overflow-y-auto">

            <div className="max-w-7xl mx-auto p-6">

              {/* Modal Header */}

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-white text-2xl font-bold">
                  {displayName}
                </h2>

                <button
                  type="button"
                  onClick={() =>
                    setShowAllImages(false)
                  }
                  className="text-white text-3xl hover:opacity-70 transition"
                  aria-label="Close gallery"
                >
                  ✕
                </button>

              </div>

              {/* All Images */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {uniqueImages
                  .filter(
                    (image) =>
                      image.src &&
                      image.src.startsWith("http") &&
                      !image.src.endsWith("/_2026") &&
                      !image.src.includes(
                        "Image_Jun_14"
                      )
                  )
                  .map((image) => (
                    <div
                      key={image.id}
                      className="relative h-80 rounded-xl overflow-hidden bg-gray-800"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
