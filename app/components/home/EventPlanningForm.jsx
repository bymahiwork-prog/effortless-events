"use client";

import React from "react";

// Reusable input styling
const inputClass =
  "w-full rounded-xl border border-gray-200 px-5 py-4 text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#C9A34A] focus:border-[#C9A34A]";

export default function EventPlanningForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const occasion = formData.get("occasion") || "Not provided";
    const description = formData.get("description") || "Not provided";
    const guests = formData.get("guests") || "Not provided";
    const budget = formData.get("budget") || "Not provided";
    const date = formData.get("date") || "Not provided";

    const message = `Hello Effortless Events! 👋

I would like to start planning an event.

Occasion:
${occasion}

Description:
${description}

Number of Guests:
${guests}

Budget:
${budget}

Preferred Date:
${date}

I would like to discuss the details further. Thank you!`;

    // Effortless Events WhatsApp number
    const whatsappNumber = "917838008069";

    // Encode the complete message for WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <section className="relative bg-[#0F0803] px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[28px] shadow-2xl border border-gray-100 p-5 md:p-8">

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Occasion */}
            <input
              type="text"
              name="occasion"
              placeholder="What's the occasion?"
              className={inputClass}
              required
            />

            {/* Description */}
            <textarea
              name="description"
              placeholder="Description"
              rows="4"
              className={`${inputClass} resize-none`}
              required
            />

            {/* Guests / Budget / Date */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <input
                type="number"
                name="guests"
                placeholder="Guests"
                min="1"
                className={inputClass}
                required
              />

              <input
                type="text"
                name="budget"
                placeholder="Budget"
                className={inputClass}
                required
              />

              <input
                type="date"
                name="date"
                className={`${inputClass} text-gray-500`}
                required
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#C9A34A] hover:bg-[#b8923d] text-black font-semibold py-4 rounded-xl transition-colors"
            >
              Start Planning
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
