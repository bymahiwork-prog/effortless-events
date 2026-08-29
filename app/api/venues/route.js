import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {
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
    )
      .trim()
      .toLowerCase();

    /*
     * CATEGORY
     *
     * Examples:
     * categoryId=1 → Farmhouses
     * categoryId=2 → Apartments
     * categoryId=3 → Wedding Venues
     */
    const categoryId = (
      searchParams.get("categoryId") || ""
    ).trim();

    /*
     * LOAD VENUE DATA
     *
     * Data is stored locally in:
     *
     * /public/data/venues.json
     */
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "venues.json"
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        {
          success: false,
          error: "Venue data file not found",
          products: [],
        },
        {
          status: 500,
        }
      );
    }

    const fileData = fs.readFileSync(
      filePath,
      "utf-8"
    );

    const data = JSON.parse(fileData);

    let venues = Array.isArray(data)
      ? data
      : Array.isArray(data?.products)
      ? data.products
      : [];

    /*
     * ONLY ACTIVE VENUES
     */
    venues = venues.filter(
      (venue) =>
        venue.status === undefined ||
        venue.status === 1 ||
        venue.status === true
    );

    /*
     * CATEGORY FILTER
     */
    if (categoryId) {
      venues = venues.filter(
        (venue) =>
          String(
            venue.product_category ||
              venue.categoryId ||
              venue.category_id ||
              ""
          ) === String(categoryId)
      );
    }

    /*
     * SEARCH FILTER
     */
    if (search) {
      venues = venues.filter((venue) => {
        const name = String(
          venue.product_name || ""
        ).toLowerCase();

        const location = String(
          venue.product_location || ""
        ).toLowerCase();

        const detail = String(
          venue.product_detail || ""
        ).toLowerCase();

        const category = String(
          venue.category_name || ""
        ).toLowerCase();

        return (
          name.includes(search) ||
          location.includes(search) ||
          detail.includes(search) ||
          category.includes(search)
        );
      });
    }

    /*
     * SORT
     *
     * Newest listings first when an ID is available.
     */
    venues.sort((a, b) => {
      const idA = Number(a.id || 0);
      const idB = Number(b.id || 0);

      return idB - idA;
    });

    /*
     * TOTAL
     */
    const total = venues.length;

    /*
     * PAGINATION
     */
    const offset = (page - 1) * limit;

    const paginatedVenues = venues.slice(
      offset,
      offset + limit
    );

    /*
     * FORMAT RESPONSE
     */
    const products = paginatedVenues.map(
      (venue) => {
        return {
          id: venue.id,

          image:
            venue.image ||
            venue.main_image ||
            null,

          images: Array.isArray(venue.images)
            ? venue.images
            : [],

          product_category:
            venue.product_category ||
            venue.categoryId ||
            venue.category_id ||
            null,

          rating:
            venue.rating || "5.0",

          category_name:
            venue.category_name || "",

          product_name:
            venue.product_name ||
            "Venue",

          product_location:
            venue.product_location ||
            "",

          product_address:
            venue.product_address ||
            "",

          product_price:
            venue.product_price ||
            "",

          product_number:
            venue.product_number ||
            "",

          product_detail:
            venue.product_detail ||
            "",

          status:
            venue.status === undefined
              ? 1
              : venue.status,

          created_date:
            venue.created_date ||
            "",

          last_update:
            venue.last_update ||
            "",
        };
      }
    );

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
      "VENUES API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Unable to load venues",
        products: [],
      },
      {
        status: 500,
      }
    );
  }
}
