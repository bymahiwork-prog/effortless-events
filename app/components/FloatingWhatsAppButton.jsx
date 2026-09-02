"use client";

import React from "react";

export default function FloatingWhatsAppButton() {
  const whatsappNumber = "917838008069";

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Effortless Events on WhatsApp"
      title="Chat with us on WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        sm:bottom-6
        sm:right-6
        z-[9999]
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-110
        active:scale-95
      "
    >
      <img
        src="/WhatsApp.svg"
        alt="WhatsApp"
        className="
          w-14
          h-14
          sm:w-16
          sm:h-16
          object-contain
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]
        "
      />
    </a>
  );
}
