import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cap generated widths so full-width images never request 3840px files.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [32, 64, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    minimumCacheTTL: 2678400, // 31 days
  },

  async redirects() {
    return [
      {
        source: "/blogs/new-year-eve-party-farmhouse-delhi-ncr",
        destination: "/blogs/new-years-eve-party-farmhouse-delhi-ncr",
        permanent: true,
      },
      {
        // Some buttons pointed to /farms; the real page is /farmhouses.
        source: "/farms",
        destination: "/farmhouses",
        permanent: true,
      },
      {
        // Old decor link; the page lives at /services/event-decor-styling.
        source: "/services/decoration-services",
        destination: "/services/event-decor-styling",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Long browser/CDN cache for static images in /public.
        source: "/:file*.(webp|avif|jpg|jpeg|png|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
