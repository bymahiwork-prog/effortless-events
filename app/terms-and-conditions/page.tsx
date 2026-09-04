"use client";

import React from "react";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0F0803] text-[#D4C7B8]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 border-b border-[#2A2118]">
        <div className="max-w-6xl mx-auto px-6 md:px-8">

          <p className="text-sm uppercase tracking-[0.18em] text-[#C9A34A] font-medium mb-5">
            Legal
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg leading-8 text-[#B9AA9A]">
            Please read these Terms & Conditions carefully before using
            Effortless Events. By accessing or using our website and services,
            you agree to be bound by these terms.
          </p>

          <p className="mt-5 text-sm text-[#8F8173]">
            Last updated: September 2026
          </p>

        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">

          <div className="space-y-14">

            {/* =================================================
                1. INTRODUCTION
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                1. Introduction
              </h2>

              <p className="leading-8 mb-4">
                Welcome to Effortless Events. These Terms & Conditions
                ("Terms") govern your access to and use of the Effortless
                Events website, platform, listings, enquiry services, and
                other services made available through our platform.
              </p>

              <p className="leading-8">
                By accessing our website, submitting an enquiry, requesting
                information, making a booking, or otherwise using our
                services, you acknowledge that you have read, understood,
                and agreed to these Terms.
              </p>
            </section>

            {/* =================================================
                2. DEFINITIONS
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                2. Definitions
              </h2>

              <p className="leading-8 mb-4">
                For the purposes of these Terms:
              </p>

              <ul className="list-disc pl-6 space-y-3 leading-8">
                <li>
                  <strong className="text-white">
                    "Effortless Events", "we", "us", or "our"
                  </strong>{" "}
                  refers to Effortless Events and its applicable business
                  operations.
                </li>

                <li>
                  <strong className="text-white">
                    "Website" or "Platform"
                  </strong>{" "}
                  refers to the Effortless Events website and associated
                  digital services.
                </li>

                <li>
                  <strong className="text-white">
                    "User", "you", or "your"
                  </strong>{" "}
                  refers to any person accessing or using the Platform.
                </li>

                <li>
                  <strong className="text-white">
                    "Venue Partner"
                  </strong>{" "}
                  refers to a farmhouse, villa, wedding venue, event venue,
                  service provider, or other business listed or promoted
                  through the Platform.
                </li>
              </ul>
            </section>

            {/* =================================================
                3. USE OF WEBSITE
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                3. Use of the Website
              </h2>

              <p className="leading-8 mb-4">
                You agree to use the Platform only for lawful purposes and
                in accordance with these Terms.
              </p>

              <ul className="list-disc pl-6 space-y-3 leading-8">
                <li>
                  You must provide accurate and complete information when
                  submitting enquiries or booking requests.
                </li>

                <li>
                  You must not use the Platform for fraudulent, misleading,
                  abusive, or unlawful activities.
                </li>

                <li>
                  You must not attempt to interfere with the operation,
                  security, or functionality of the Platform.
                </li>

                <li>
                  You must not copy, reproduce, scrape, distribute, or
                  commercially exploit Platform content without prior
                  written permission.
                </li>
              </ul>
            </section>

            {/* =================================================
                4. VENUE LISTINGS
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                4. Venue Listings & Information
              </h2>

              <p className="leading-8 mb-4">
                Effortless Events may display information relating to
                venues, properties, event spaces, services, facilities,
                photographs, pricing, availability, and other information
                supplied by Venue Partners or other sources.
              </p>

              <p className="leading-8 mb-4">
                While we make reasonable efforts to keep information
                accurate and current, we do not guarantee that every listing
                is complete, accurate, available, or up to date at all
                times.
              </p>

              <p className="leading-8">
                Prices, availability, facilities, event restrictions,
                capacity, operating policies, and other venue conditions may
                change without notice. Users should confirm the final terms,
                pricing, availability, and facilities directly with the
                relevant Venue Partner before making a final commitment.
              </p>
            </section>

            {/* =================================================
                5. BOOKINGS & ENQUIRIES
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                5. Bookings & Enquiries
              </h2>

              <p className="leading-8 mb-4">
                Submitting an enquiry through Effortless Events does not
                necessarily constitute a confirmed booking.
              </p>

              <p className="leading-8 mb-4">
                A booking is considered confirmed only when the applicable
                Venue Partner has accepted the booking and any required
                payment, deposit, confirmation, or documentation has been
                completed.
              </p>

              <p className="leading-8">
                Venue Partners may have their own booking procedures,
                minimum booking requirements, event restrictions, payment
                schedules, cancellation policies, and other conditions.
                Users are responsible for reviewing and understanding those
                conditions before confirming an event.
              </p>
            </section>

            {/* =================================================
                6. PAYMENTS
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                6. Payments, Cancellations & Refunds
              </h2>

              <p className="leading-8 mb-4">
                Where payments are processed through Effortless Events or
                through a third-party payment provider, the applicable
                payment terms will be communicated at the relevant stage of
                the booking process.
              </p>

              <p className="leading-8 mb-4">
                Cancellation and refund eligibility may depend on the
                specific Venue Partner, booking terms, timing of the
                cancellation, and the nature of the service purchased.
              </p>

              <p className="leading-8">
                Unless expressly stated otherwise, Effortless Events does
                not guarantee a refund where the applicable Venue Partner's
                cancellation policy does not provide for one.
              </p>
            </section>

            {/* =================================================
                7. USER RESPONSIBILITIES
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                7. User Responsibilities
              </h2>

              <p className="leading-8 mb-4">
                Users are responsible for ensuring that their event,
                booking, and use of a venue comply with all applicable laws,
                regulations, permissions, and venue rules.
              </p>

              <p className="leading-8">
                This may include requirements relating to noise,
                occupancy, alcohol, fire safety, public gatherings, music,
                parking, local permissions, security, and other event
                requirements.
              </p>
            </section>

            {/* =================================================
                8. THIRD PARTY SERVICES
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                8. Venue Partners & Third-Party Services
              </h2>

              <p className="leading-8 mb-4">
                Effortless Events may facilitate connections between users
                and independent Venue Partners, vendors, service providers,
                or other third parties.
              </p>

              <p className="leading-8">
                These third parties may operate independently from
                Effortless Events. Their services may be subject to their
                own terms, policies, pricing, availability, and contractual
                arrangements. Users should conduct appropriate due diligence
                and confirm the details of any service before proceeding.
              </p>
            </section>

            {/* =================================================
                9. INTELLECTUAL PROPERTY
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                9. Intellectual Property
              </h2>

              <p className="leading-8 mb-4">
                Unless otherwise stated, the content available on the
                Platform, including text, branding, logos, graphics,
                photographs, design elements, layouts, and other materials,
                is owned by or licensed to Effortless Events.
              </p>

              <p className="leading-8">
                You may not reproduce, modify, distribute, publish,
                transmit, sell, or commercially exploit such content without
                our prior written consent.
              </p>
            </section>

            {/* =================================================
                10. LIMITATION OF LIABILITY
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                10. Limitation of Liability
              </h2>

              <p className="leading-8 mb-4">
                To the maximum extent permitted by applicable law,
                Effortless Events shall not be responsible for losses,
                damages, delays, cancellations, service failures, or other
                issues arising from the acts or omissions of independent
                Venue Partners, vendors, service providers, or other third
                parties.
              </p>

              <p className="leading-8">
                We also do not guarantee that the Platform will always be
                available, uninterrupted, secure, or free from technical
                errors.
              </p>
            </section>

            {/* =================================================
                11. PRIVACY
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                11. Privacy
              </h2>

              <p className="leading-8">
                Your use of the Platform may involve the collection and
                processing of personal information. Such information is
                handled in accordance with our applicable Privacy Policy.
              </p>

              <div className="mt-5">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 text-[#C9A34A] hover:text-[#D8B25B] transition-colors"
                >
                  View our Privacy Policy
                  <span>→</span>
                </Link>
              </div>
            </section>

            {/* =================================================
                12. CHANGES
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                12. Changes to These Terms
              </h2>

              <p className="leading-8">
                Effortless Events may update or modify these Terms from time
                to time. Updated Terms will be posted on this page with a
                revised "Last updated" date. Your continued use of the
                Platform after such changes constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            {/* =================================================
                13. GOVERNING LAW
            ================================================= */}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                13. Governing Law
              </h2>

              <p className="leading-8">
                These Terms shall be governed by and interpreted in
                accordance with the laws applicable in India. Any disputes
                arising in connection with these Terms or your use of the
                Platform shall be subject to the jurisdiction of the
                appropriate courts, subject to applicable law.
              </p>
            </section>

            {/* =================================================
                14. CONTACT
            ================================================= */}

            <section className="pt-8 border-t border-[#2A2118]">
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                14. Contact Us
              </h2>

              <p className="leading-8 mb-5">
                If you have any questions regarding these Terms & Conditions,
                please contact Effortless Events.
              </p>

              <div className="bg-[#17110B] border border-[#2A2118] rounded-[24px] p-6 md:p-8">

                <p className="text-white font-medium mb-2">
                  Effortless Events
                </p>

                <p className="text-[#B9AA9A] leading-7">
                  For enquiries, bookings, or legal questions, please contact
                  us through the contact options available on our website.
                </p>

                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#C9A34A] font-medium hover:text-[#D8B25B] transition-colors"
                  >
                    Get in Touch
                    <span>→</span>
                  </Link>
                </div>

              </div>
            </section>

          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER CTA
      ===================================================== */}

      <section className="border-t border-[#2A2118] py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <p className="text-sm text-[#8F8173]">
              © {new Date().getFullYear()} Effortless Events. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">

              <Link
                href="/privacy-policy"
                className="text-[#B9AA9A] hover:text-[#C9A34A] transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-[#C9A34A]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="text-[#B9AA9A] hover:text-[#C9A34A] transition-colors"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
