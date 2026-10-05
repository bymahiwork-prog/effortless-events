const SITE_URL = "https://effortlessevents.in";

function absoluteUrl(path) {
  if (!path) return `${SITE_URL}/og-image.jpg`;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${encodeURI(path)}`;
}

function textOf(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value.default || value.absolute || "";
}

/**
 * Renders Article (BlogPosting), BreadcrumbList and FAQPage JSON-LD for a blog post.
 *
 * Usage inside a blog page:
 *   <BlogSchema slug="my-post-slug" metadata={metadata} faqs={faqs} />
 *
 * `faqs` is an array of { q, a } objects (the same array the page renders).
 */
export default function BlogSchema({ slug, metadata = {}, faqs = [], datePublished, image }) {
  const url = `${SITE_URL}/blogs/${slug}`;
  const title = textOf(metadata.title);
  const description = metadata.description || "";
  const ogImages = metadata.openGraph?.images;
  const firstOgImage = Array.isArray(ogImages)
    ? typeof ogImages[0] === "string"
      ? ogImages[0]
      : ogImages[0]?.url
    : undefined;

  const graph = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: title,
      description,
      url,
      mainEntityOfPage: url,
      image: absoluteUrl(image || firstOgImage),
      inLanguage: "en-IN",
      ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
      author: { "@type": "Organization", name: "Effortless Events", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "Effortless Events",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
