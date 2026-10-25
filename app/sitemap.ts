import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getFarmhouses } from "../lib/farmhouses";

const baseUrl = "https://effortlessevents.in";

// Rebuild the sitemap at most once an hour so new farmhouses appear.
export const revalidate = 3600;

// Every active farmhouse detail page, so Google can find each listing.
async function getFarmhouseEntries(): Promise<MetadataRoute.Sitemap> {
  const { products } = await getFarmhouses({ limit: 100 });
  return (products || []).map((venue: { id: number | string }) => ({
    url: `${baseUrl}/farmhouses/${venue.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
}

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

function getServiceEntries(): MetadataRoute.Sitemap {
  const servicesDir = path.join(process.cwd(), "app", "services");

  try {
    return fs
      .readdirSync(servicesDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .filter((entry) =>
        ["page.js", "page.jsx", "page.tsx"].some((file) =>
          fs.existsSync(path.join(servicesDir, entry.name, file))
        )
      )
      .map((entry) => ({
        url: `${baseUrl}/services/${entry.name}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const farmhouseEntries = await getFarmhouseEntries();

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

    ...farmhouseEntries,

    {
      url: `${baseUrl}/venues`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/weddings`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/apartments`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...getServiceEntries(),

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
