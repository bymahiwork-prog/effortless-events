"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Adds the site navbar and footer around individual blog posts.
 * The /blogs listing page renders its own navbar and footer, so it is skipped.
 */
export default function BlogPostChrome({ children }) {
  const pathname = usePathname();
  const isListing = pathname === "/blogs" || pathname === "/blogs/";

  if (isListing) return children;

  return (
    <>
      <Navbar variant="black" />
      {children}
      <Footer />
    </>
  );
}
