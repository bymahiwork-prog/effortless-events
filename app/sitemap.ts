import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const baseUrl = "https://effortlessevents.in";

// Every folder in app/blogs that contains a page file is a published post.
// New posts are picked up automatically at build time.
function getBlogEntries(): MetadataRoute.Sitemap {
  const blogsDir = path.join(process.cwd(), "app", "blogs");

  try {
    return fs
      .readdirSync(blogsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .filter((entry) =>
        ["page.js", "page.jsx", "page.tsx"].some((file) =>
          fs.existsSync(path.join(blogsDir, entry.name, file))
        )
      )
      .map((entry) => {
        const pageFile = ["page.js", "page.jsx", "page.tsx"]
          .map((file) => path.join(blogsDir, entry.name, file))
          .find((file) => fs.existsSync(file))!;

        return {
          url: `${baseUrl}/blogs/${entry.name}`,
          lastModified: fs.statSync(pageFile).mtime,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        };
      });
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/farmhouses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },

    ...getBlogEntries(),

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
