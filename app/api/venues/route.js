import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/db";

export async function GET(req, { params }) {
  let db;

  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Venue ID is required",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * CONNECT TO EXISTING MYSQL DATABASE
     */

    db = await connectToDatabase();

    /*
     * FETCH VENUE
     */

    const query = `
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

      WHERE p.id = ?
        AND p.status = 1

      LIMIT 1
    `;

    const [rows] = await db.query(query, [id]);

    /*
     * VENUE NOT FOUND
     */

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Farmhouse not found",
        },
        {
          status: 404,
        }
      );
    }

    const row = rows[0];

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
     * COMBINE MAIN IMAGE + GALLERY IMAGES
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
     * FORMAT VENUE
     */

    const venue = {
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
        row.product_name || "Farmhouse",

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

    /*
     * RETURN JSON
     */

    return NextResponse.json({
      success: true,
      venue,
    });

  } catch (error) {
    console.error("=================================");
    console.error("SINGLE VENUE MYSQL API ERROR");
    console.error("=================================");
    console.error(error);
    console.error("Message:", error?.message);
    console.error("Code:", error?.code);
    console.error("SQL State:", error?.sqlState);
    console.error("=================================");

    return NextResponse.json(
      {
        success: false,
        error: "Unable to load farmhouse",
      },
      {
        status: 500,
      }
    );

  } finally {
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
