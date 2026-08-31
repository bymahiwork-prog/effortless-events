import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db";

export async function GET(req) {
  let db;

  try {
    const { searchParams } = new URL(req.url);

    /*
     * PAGINATION
     */

    const pageParam = parseInt(
      searchParams.get("page") || "1",
      10
    );

    const limitParam = parseInt(
      searchParams.get("limit") || "9",
      10
    );

    const page =
      Number.isFinite(pageParam) && pageParam > 0
        ? pageParam
        : 1;

    const limit =
      Number.isFinite(limitParam) &&
      limitParam > 0 &&
      limitParam <= 100
        ? limitParam
        : 9;

    /*
     * SEARCH
     */

    const search = (
      searchParams.get("search") || ""
    ).trim();

    /*
     * CATEGORY
     *
     * 1 = Farmhouses
     * 2 = Apartments
     * 3 = Third category
     *
     * The API remains generic so we can use
     * the same endpoint for all categories.
     */

    const categoryId = (
      searchParams.get("categoryId") || ""
    ).trim();

    const offset = (page - 1) * limit;

    /*
     * CONNECT TO MYSQL
     */

    db = await connectToDatabase();

    /*
     * BASE WHERE CLAUSE
     *
     * Only active listings.
     */

    let whereClause = `
      WHERE p.status = 1
    `;

    const queryParams = [];

    /*
     * CATEGORY FILTER
     */

    if (categoryId) {
      whereClause += `
        AND p.product_category = ?
      `;

      queryParams.push(categoryId);
    }

    /*
     * SEARCH FILTER
     */

    if (search) {
      whereClause += `
        AND (
          p.product_name LIKE ?
          OR p.product_detail LIKE ?
          OR p.product_location LIKE ?
          OR p.product_address LIKE ?
        )
      `;

      const searchTerm = `%${search}%`;

      queryParams.push(
        searchTerm,
        searchTerm,
        searchTerm,
        searchTerm
      );
    }

    /*
     * COUNT TOTAL LISTINGS
     */

    const countQuery = `
      SELECT COUNT(DISTINCT p.id) AS total

      FROM tbl_product p

      ${whereClause}
    `;

    const [totalResult] = await db.query(
      countQuery,
      queryParams
    );

    const total = Number(
      totalResult?.[0]?.total || 0
    );

    /*
     * FETCH LISTINGS
     */

    const selectQuery = `
      SELECT
        p.*,

        c.category_name,

        (
          SELECT GROUP_CONCAT(
            pi.image
            SEPARATOR '|||'
          )

          FROM tbl_product_images pi

          WHERE pi.product_id = p.id
        ) AS images_list

      FROM tbl_product p

      LEFT JOIN tbl_category c
        ON p.product_category = c.id

      ${whereClause}

      ORDER BY p.id DESC

      LIMIT ${limit}

      OFFSET ${offset}
    `;

    const [rows] = await db.query(
      selectQuery,
      queryParams
    );

    /*
     * FORMAT LISTINGS
     */

    const products = (rows || []).map((row) => {

      /*
       * MAIN IMAGE
       */

      const mainImage = row.image
        ? `https://admin.effortlessevents.in/admin/${String(
            row.image
          ).replace(/^\/+/, "")}`
        : null;

      /*
       * GALLERY IMAGES
       */

      const images = row.images_list
        ? String(row.images_list)
            .split("|||")
            .map((img) => img.trim())
            .filter(Boolean)
            .map(
              (img) =>
                `https://admin.effortlessevents.in/admin/${String(
                  img
                ).replace(/^\/+/, "")}`
            )
        : [];

      /*
       * COMBINE MAIN IMAGE + GALLERY
       */

      const allImages = [
        ...(mainImage ? [mainImage] : []),
        ...images,
      ].filter(
        (image, index, array) =>
          image &&
          array.indexOf(image) === index
      );

      /*
       * RETURN STANDARD VENUE OBJECT
       *
       * This same structure is used by:
       *
       * Farmhouses
       * Apartments
       * Third category
       */

      return {
        id: row.id,

        image: mainImage,

        images: allImages,

        product_category:
          row.product_category || "",

        category_name:
          row.category_name || "",

        rating:
          row.rating || "5.0",

        product_name:
          row.product_name || "Venue",

        product_location:
          row.product_location || "",

        product_address:
          row.product_address || "",

        product_price:
          row.product_price || "",

        product_number:
          row.product_number || "",

        product_detail:
          row.product_detail || "",

        product_map:
          row.product_map || "",

        status:
          row.status,

        created_date:
          row.created_date || "",

        last_update:
          row.last_update || "",
      };
    });

    /*
     * RESPONSE
     */

    return NextResponse.json({
      success: true,

      page,

      limit,

      total,

      totalPages:
        Math.ceil(total / limit),

      products,
    });

  } catch (error) {

    console.error(
      "================================="
    );

    console.error(
      "VENUES MYSQL API ERROR"
    );

    console.error(
      "================================="
    );

    console.error(error);

    console.error(
      "Message:",
      error?.message
    );

    console.error(
      "Code:",
      error?.code
    );

    console.error(
      "SQL State:",
      error?.sqlState
    );

    console.error(
      "================================="
    );

    return NextResponse.json(
      {
        success: false,

        error:
          "Unable to load venues",

        products: [],
      },
      {
        status: 500,
      }
    );

  } finally {

    /*
     * CLOSE DATABASE CONNECTION
     */

    if (db) {
      try {
        await db.end();
      } catch (closeError) {
        console.error(
          "Database close error:",
          closeError
        );
      }
    }
  }
}
