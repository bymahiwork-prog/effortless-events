"use client";

import { motion } from "framer-motion";

export default function ServicesCTA() {
  const whatsappNumber = "917838008069";
  const whatsappMessage =
    "Hi Effortless Events, I would like to discuss planning an event.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">

        <img
          src="/services-cta.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="min-h-[280px] sm:min-h-[320px] flex flex-col lg:flex-row items-center justify-between gap-10 py-14 sm:py-16">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] leading-[1.05] text-white">
              Planning an Event?
            </h2>

            <p className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] italic text-[#d6b36a]">
              Let&apos;s Make It Effortless.
            </p>

          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start max-w-md"
          >

            <p className="text-center lg:text-left text-xs sm:text-sm leading-5 text-white/75">
              Tell us about your event and our team will get back to you
              with the best options and a customized plan.
            </p>

            {/* =================================================
                WHATSAPP CTA
            ================================================= */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get in touch with Effortless Events on WhatsApp"
              className="group mt-6 inline-flex items-center justify-center gap-3 bg-[#d6b36a] px-7 py-3 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-black transition-all duration-300 hover:bg-white"
            >

              <span>Get In Touch</span>

              <span
                aria-hidden="true"
                className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>

            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
