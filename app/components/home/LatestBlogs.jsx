import Link from "next/link";
import { blogs } from "../../../lib/blogs";

// Shows the newest blog posts on the homepage.
// New posts appear here automatically once added to the top of lib/blogs.js.
export default function LatestBlogs({ count = 3 }) {
  const latest = blogs.slice(0, count);

  if (latest.length === 0) return null;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#B57A3C] font-semibold mb-3">
              From the Blog
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#1F1F1F] leading-tight">
              Event Planning Guides for Delhi NCR
            </h2>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#B57A3C] transition-colors duration-300"
          >
            View all articles
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {latest.map((blog) => (
            <Link key={blog.href} href={blog.href} className="group block">

              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <p className="text-xs uppercase tracking-[0.18em] text-[#B57A3C] font-semibold mb-3">
                {blog.category}
              </p>

              <h3 className="text-2xl font-bold leading-tight text-black mb-3 group-hover:text-[#B57A3C] transition-colors duration-300">
                {blog.title}
              </h3>

              <p className="text-gray-600 leading-7 text-[15px] mb-5 line-clamp-3">
                {blog.description}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-black group-hover:text-[#B57A3C] transition-colors duration-300">
                Read Article
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
