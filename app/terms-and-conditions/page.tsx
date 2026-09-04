"use client";

import React from "react";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0F0803] text-[#D4C7B8]">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#2A2118]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-[#C9A34A] uppercase tracking-[0.25em] text-xs md:text-sm mb-5">
            Legal
          </p>

          <h1 className="text-4xl md:text-6xl font-serif text-[#F1E8DD] leading-tight">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-sm md:text-base text-[#9F9386] max-w-3xl leading-relaxed">
            These Terms & Conditions govern your use of the Effortless Events
            website and the services offered through our platform.
          </p>

          <p className="mt-4 text-xs md:text-sm text-[#7F756B]">
            Last Updated: September 2026
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-14">

          {/* =====================================================
              1. ACCEPTANCE OF TERMS
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              1. Acceptance of Terms
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              By accessing, browsing, or using the Effortless Events website,
              you acknowledge that you have read, understood, and agreed to be
              bound by these Terms & Conditions.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              If you do not agree with any part of these Terms & Conditions,
              please discontinue use of the website and our services.
            </p>
          </section>

          {/* =====================================================
              2. ABOUT EFFORTLESS EVENTS
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              2. About Effortless Events
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              Effortless Events Pvt. Ltd. is an event and venue management
              company that provides event planning, venue discovery,
              coordination, and related event services.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Our website may provide information about venues, event
              packages, services, vendors, and other event-related offerings.
            </p>
          </section>

          {/* =====================================================
              3. USE OF WEBSITE
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              3. Use of Website
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base mb-4">
              You agree to use this website only for lawful purposes and in a
              manner that does not violate applicable laws or regulations.
            </p>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base mb-4">
              You must not:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#B7AA9C] leading-7 text-sm md:text-base">
              <li>
                Use the website for fraudulent, unlawful, or unauthorized
                purposes.
              </li>

              <li>
                Attempt to gain unauthorized access to our systems,
                databases, or website infrastructure.
              </li>

              <li>
                Copy, reproduce, distribute, or commercially exploit website
                content without permission.
              </li>

              <li>
                Upload or transmit malicious software, viruses, or harmful
                code.
              </li>

              <li>
                Interfere with the normal operation or security of the website.
              </li>
            </ul>
          </section>

          {/* =====================================================
              4. VENUE INFORMATION
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              4. Venue Information
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              Venue descriptions, photographs, amenities, pricing,
              availability, capacity, locations, and other information
              displayed on the website may be provided by venue owners,
              managers, partners, or other third parties.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              While we make reasonable efforts to maintain accurate and
              up-to-date information, we do not guarantee that all information
              will always be complete, current, or error-free.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Users are encouraged to independently confirm important details
              such as availability, pricing, amenities, capacity, restrictions,
              and event requirements before making a booking or payment.
            </p>
          </section>

          {/* =====================================================
              5. BOOKINGS AND PAYMENTS
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              5. Bookings and Payments
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              Any booking, reservation, advance payment, token amount, or
              other transaction may be subject to specific terms communicated
              at the time of booking.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Prices and availability may change without prior notice until a
              booking has been confirmed.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              A booking shall be considered confirmed only after the required
              payment or confirmation process has been completed and accepted
              by the relevant venue or service provider.
            </p>
          </section>

          {/* =====================================================
              6. CANCELLATION AND REFUND
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              6. Cancellation and Refunds
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              Cancellation and refund policies may vary depending on the venue,
              vendor, event package, booking terms, and service selected.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Any applicable cancellation charges, refund conditions, or
              forfeiture of advance payments will be communicated according to
              the applicable booking terms.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Effortless Events shall not be responsible for refunds or
              cancellation policies imposed independently by third-party
              venues or vendors where those terms were disclosed to the user.
            </p>
          </section>

          {/* =====================================================
              7. THIRD-PARTY SERVICES
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              7. Third-Party Services
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              Our website may contain information, links, services, or
              references relating to third-party venues, vendors, payment
              providers, booking platforms, or other service providers.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Effortless Events does not necessarily own, operate, or control
              these third-party services and is not responsible for their
              independent policies, availability, performance, content, or
              actions.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Your interactions with third-party providers may be governed by
              their own terms and conditions and privacy policies.
            </p>
          </section>

          {/* =====================================================
              8. INTELLECTUAL PROPERTY
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              8. Intellectual Property
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              Unless otherwise stated, all content appearing on the Effortless
              Events website, including text, graphics, logos, images,
              photographs, designs, layouts, branding, icons, and software,
              is owned by or licensed to Effortless Events Pvt. Ltd.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              You may access and use website content for personal and
              legitimate purposes only.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              You may not reproduce, modify, publish, distribute, sell,
              license, or commercially exploit any protected content without
              prior written permission.
            </p>
          </section>

          {/* =====================================================
              9. USER SUBMISSIONS
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              9. User Submissions
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              If you submit information, reviews, feedback, photographs,
              inquiries, or other material through our website or services,
              you agree that the information provided is accurate and does not
              knowingly violate the rights of another person.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              You should not submit content that is unlawful, defamatory,
              abusive, fraudulent, threatening, misleading, or otherwise
              inappropriate.
            </p>
          </section>

          {/* =====================================================
              10. LIMITATION OF LIABILITY
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              10. Limitation of Liability
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              To the maximum extent permitted by applicable law, Effortless
              Events Pvt. Ltd. shall not be liable for indirect, incidental,
              special, consequential, or other losses arising from your use of
              the website or services.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              This may include, without limitation, losses arising from venue
              availability, third-party services, event disruptions, technical
              issues, inaccurate third-party information, or circumstances
              outside our reasonable control.
            </p>
          </section>

          {/* =====================================================
              11. PRIVACY
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              11. Privacy
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              Your use of our website may involve the collection and
              processing of certain information as described in our Privacy
              Policy.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Please review our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#C9A34A] hover:text-[#E4D078] transition-colors underline underline-offset-4"
              >
                Privacy Policy
              </Link>{" "}
              to understand how information may be collected, used, stored,
              and protected.
            </p>
          </section>

          {/* =====================================================
              12. CHANGES TO TERMS
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              12. Changes to These Terms
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              Effortless Events reserves the right to modify, update, or
              replace these Terms & Conditions at any time.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Updated terms will be published on this page with a revised
              "Last Updated" date where appropriate.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Your continued use of the website after changes are posted
              constitutes acceptance of the updated Terms & Conditions.
            </p>
          </section>

          {/* =====================================================
              13. GOVERNING LAW
          ===================================================== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8DD] mb-5">
              13. Governing Law
            </h2>

            <p className="text-[#B7AA9C] leading-8 text-sm md:text-base">
              These Terms & Conditions shall be governed by and interpreted
              in accordance with the applicable laws of India.
            </p>

            <p className="mt-4 text-[#B7AA9C] leading-8 text-sm md:text-base">
              Any disputes arising in connection with these Terms or the use of
              our website or services shall be subject to the jurisdiction of
              the appropriate courts in India.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}
