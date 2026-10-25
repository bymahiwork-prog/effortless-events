import { connectToDatabase } from "./db";

/*
 * Server-side data helpers for the farmhouse pages.
 * Same queries and output shape as /api/farmhouses and /api/venues/[id],
 * so pages can render listings on the server (visible to Google)
 * while the client components keep working exactly as before.
 */

const IMAGE_BASE = "https://admin.effortlessevents.in/admin/";
const FARMHOUSE_CATEGORY_ID = "1";

function toImageUrl(path) {
  return `${IMAGE_BASE}${String(path).replace(/^\/+/, "")}`;
}

// Same string form the JSON API produces for DATETIME columns.
function toDateString(value) {
  if (!value) return "";
  return value instanceof Date ? value.toISOString() : String(value);
}

function splitImages(list) {
  return list
    ? String(list)
        .split("|||")
        .map((img) => img.trim())
        .filter(Boolean)
        .map(toImageUrl)
    : [];
}

/**
 * Active farmhouse listings, newest first.
 * Returns { products, error }. Never throws.
 */
export async function getFarmhouses({ limit = 100 } = {}) {
  let db;

  try {
    db = await connectToDatabase();

    const safeLimit = Math.min(Math.max(parseInt(limit, 10) || 100, 1), 100);

    const [rows] = await db.query(
      `
      SELECT
        p.*,
        c.category_name,
        (
          SELECT GROUP_CONCAT(pi.image SEPARATOR '|||')
          FROM tbl_product_images pi
          WHERE pi.product_id = p.id
        ) AS images_list
      FROM tbl_product p
      LEFT JOIN tbl_category c
        ON p.product_category = c.id
      WHERE p.status = 1
        AND p.product_category = ?
      ORDER BY p.id DESC
      LIMIT ${safeLimit}
      `,
      [FARMHOUSE_CATEGORY_ID]
    );

    const products = (rows || []).map((row) => {
      const mainImage = row.image ? toImageUrl(row.image) : null;
      const images = splitImages(row.images_list);

      return {
        id: row.id,
        image: mainImage,
        images: images.length > 0 ? images : mainImage ? [mainImage] : [],
        product_category: row.product_category,
        category_name: row.category_name || "Farm Houses",
        rating: row.rating || "5.0",
        product_name: row.product_name || "Farmhouse",
        product_location: row.product_location || "",
        product_address: row.product_address || "",
        product_price: row.product_price || "",
        product_number: row.product_number || "",
        product_detail: row.product_detail || "",
        status: row.status,
        created_date: toDateString(row.created_date),
        last_update: toDateString(row.last_update),
      };
    });

    return { products, error: null };
  } catch (error) {
    console.error("FARMHOUSES SSR ERROR:", error?.message || error);
    return { products: null, error: "Unable to load farmhouses" };
  } finally {
    if (db) await db.end().catch(() => {});
  }
}

/**
 * One active venue / farmhouse by id.
 * Returns { venue, error, notFound }. Never throws.
 */
export async function getVenueById(id) {
  let db;

  try {
    if (!id) return { venue: null, error: null, notFound: true };

    db = await connectToDatabase();

    const [rows] = await db.query(
      `
      SELECT
        p.*,
        c.category_name,
        (
          SELECT GROUP_CONCAT(pi.image SEPARATOR '|||')
          FROM tbl_product_images pi
          WHERE pi.product_id = p.id
        ) AS images_list
      FROM tbl_product p
      LEFT JOIN tbl_category c
        ON p.product_category = c.id
      WHERE p.id = ?
        AND p.status = 1
      LIMIT 1
      `,
      [id]
    );

    if (!rows || rows.length === 0) {
      return { venue: null, error: null, notFound: true };
    }

    const row = rows[0];
    const mainImage = row.image ? toImageUrl(row.image) : null;
    const allImages = [
      ...(mainImage ? [mainImage] : []),
      ...splitImages(row.images_list),
    ].filter((image, index, array) => image && array.indexOf(image) === index);

    const venue = {
      id: row.id,
      image: mainImage,
      images: allImages,
      product_category: row.product_category || "",
      category_name: row.category_name || "Farm Houses",
      rating: row.rating || "5.0",
      product_name: row.product_name || "Farmhouse",
      product_location: row.product_location || "",
      product_address: row.product_address || "",
      product_price: row.product_price || "",
      product_number: row.product_number || "",
      product_detail: row.product_detail || "",
      product_map: row.product_map || "",
      status: row.status,
      created_date: toDateString(row.created_date),
      last_update: toDateString(row.last_update),
    };

    return { venue, error: null, notFound: false };
  } catch (error) {
    console.error("VENUE SSR ERROR:", error?.message || error);
    return { venue: null, error: "Unable to load farmhouse", notFound: false };
  } finally {
    if (db) await db.end().catch(() => {});
  }
}

// Display names shown instead of internal "Venue N" names (same as MarketGallery).
const DISPLAY_NAMES = {
  "Venue 98": "Effortless Farm 45",
  "Venue 125": "Effortless Farm 16",
  "Venue 120": "Effortless Farm 3",
  "Venue 39": "Effortless Farm 13",
};

export function displayName(venue) {
  return DISPLAY_NAMES[venue?.product_name] || venue?.product_name || "Farmhouse";
}
