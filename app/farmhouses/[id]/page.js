"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function FarmhousePage() {
  const params = useParams();

  const id = params?.id;

  return (
    <main className="min-h-screen bg-white text-black">

      {/* =====================================================
          FARMHOUSE DETAIL PAGE - PLACEHOLDER
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="border border-gray-200 rounded-xl p-8">

          <h1 className="text-3xl font-bold mb-4">
            Farmhouse Details
          </h1>

          <p className="text-gray-600 mb-4">
            This farmhouse detail page is currently being
            rebuilt.
          </p>

          {/* Farmhouse ID */}

          <div className="bg-gray-100 rounded-lg p-4 mb-6">

            <p className="text-sm text-gray-500">
              Farmhouse ID
            </p>

            <p className="text-lg font-medium text-black">
              {id || "Loading..."}
            </p>

          </div>

          {/* Sections we will add later */}

          <div className="space-y-4">

            <div className="border border-gray-200 rounded-lg p-5">
              <h2 className="font-semibold text-lg">
                Farmhouse Information
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Coming soon
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h2 className="font-semibold text-lg">
                Booking Table
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Coming soon
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h2 className="font-semibold text-lg">
                Location
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Coming soon
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h2 className="font-semibold text-lg">
                Popular Venues
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Coming soon
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
