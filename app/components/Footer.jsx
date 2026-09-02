"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F0803] text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-1">

            <a
              href="/"
              className="inline-block mb-6"
            >
              <img
                src="/logo.png"
                alt="Effortless Events"
                className="h-16 w-auto object-contain"
              />
            </a>

            <p className="text-[#C9BEB2] leading-7 text-sm max-w-sm">
              Effortless Events is Delhi NCR&apos;s premier event planning
              and venue company, creating memorable experiences for weddings,
              birthdays, corporate events and private celebrations.
            </p>


            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="flex items-center gap-3 mt-7">

              {/* Instagram */}

              <a
                href="https://www.instagram.com/effortlesseventspvt.ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-[#3A2E22] flex items-center justify-center overflow-hidden hover:bg-[#C9A34A] hover:border-[#C9A34A] transition-all"
              >
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 object-contain"
                />
              </a>


              {/* Facebook */}

              <a
                href="https://www.facebook.com/Effortlesseventspvt.ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-[#3A2E22] flex items-center justify-center overflow-hidden hover:bg-[#C9A34A] hover:border-[#C9A34A] transition-all"
              >
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 object-contain"
                />
              </a>


              {/* WhatsApp */}

              <a
                href="https://wa.me/917838008069"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full border border-[#3A2E22] flex items-center justify-center overflow-hidden hover:bg-[#C9A34A] hover:border-[#C9A34A] transition-all"
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="w-6 h-6 object-contain"
                />
              </a>

            </div>

          </div>


          {/* =================================================
              EXPLORE
          ================================================= */}

          <div>

            <h3 className="text-lg font-semibold mb-6">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-[#C9BEB2]">

              <li>
                <a
                  href="/"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/search"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  Browse Venues
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/blogs"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  Blogs
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  About Us
                </a>
              </li>

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div>

            <h3 className="text-lg font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-sm text-[#C9BEB2]">

              <li>
                <a
                  href="/services"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  Wedding Planning
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  Corporate Events
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  Birthday Celebrations
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  Private Events
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  Venue Booking
                </a>
              </li>

            </ul>

          </div>


          {/* =================================================
              GET IN TOUCH
          ================================================= */}

          <div>

            <h3 className="text-lg font-semibold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5 text-sm text-[#C9BEB2]">

              {/* Address */}

              <div className="flex items-start gap-3">

                <span className="text-[#C9A34A] text-lg">
                  📍
                </span>

                <p className="leading-6">
                  L57B, Malviya Nagar,
                  <br />
                  New Delhi - 110017
                </p>

              </div>


              {/* Phone */}

              <div className="flex items-start gap-3">

                <span className="text-[#C9A34A] text-lg">
                  ☎
                </span>

                <a
                  href="tel:+917838008069"
                  className="hover:text-[#C9A34A] transition-colors"
                >
                  +91 78380 08069
                </a>

              </div>


              {/* WhatsApp */}

              <div className="pt-2">

                <a
                  href="https://wa.me/917838008069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#C9A34A] text-black px-6 py-3 rounded-xl font-semibold hover:bg-white transition-all"
                >

                  <img
                    src="/whatsapp.png"
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 object-contain"
                  />

                  Chat on WhatsApp

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="border-t border-[#2A2118]">

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8F8275]">

            <p>
              © {new Date().getFullYear()} Effortless Events.
              All rights reserved.
            </p>

            <div className="flex items-center gap-5">

              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms &amp; Conditions
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
