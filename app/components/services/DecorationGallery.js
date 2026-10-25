"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const decorationImages = [
  {
    image: "/decoration-1.webp",
    title: "Wedding Décor",
    href: "/services/event-decor-styling",
  },
  {
    image: "/decoration-2.webp",
    title: "Floral Styling",
    href: "/services/event-decor-styling",
  },
  {
    image: "/decoration-3.webp",
    title: "Elegant Celebrations",
    href: "/services/event-decor-styling",
  },
  {
    image: "/decoration-4.webp",
    title: "Table Styling",
    href: "/services/event-decor-styling",
  },
  {
    image: "/decoration-5.webp",
    title: "Luxury Event Décor",
    href: "/services/event-decor-styling",
  },
  {
    image: "/decoration-6.webp",
    title: "Private Celebrations",
    href: "/services/event-decor-styling",
  },
  {
    image: "/decoration-7.webp",
    title: "Reception Décor",
    href: "/services/event-decor-styling",
  },
  {
    image: "/decoration-8.webp",
    title: "Custom Event Styling",
    href: "/services/event-decor-styling",
  },
];

export default function DecorationGallery() {
  return (
    <section className="w-full bg-[#f7f4ee] py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#b38b45]">
            Our Work
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-black">
            Décor That Sets the Mood
          </h2>

          <p className="mt-4 text-xs sm:text-sm leading-6 text-neutral-600 max-w-2xl mx-auto">
            From intimate celebrations to elaborate weddings, explore some of
            the event décor and styling experiences created by Effortless Events.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">

          {decorationImages.map((item, index) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group relative aspect-[4/5] overflow-hidden bg-neutral-200"
            >

              {/* Clickable Decoration Image */}
              <Link
                href={item.href}
                className="absolute inset-0 block"
              >

                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Image Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">

                  <p className="text-[10px] sm:text-xs font-medium tracking-[0.12em] uppercase text-white">
                    {item.title}
                  </p>

                </div>

              </Link>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mt-10"
        >

          <Link
            href="/services/event-decor-styling"
            className="inline-flex items-center gap-2 border border-black px-6 py-3 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Explore Decoration Services

            <ArrowRight className="w-4 h-4 transition-transform duration-300" />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
