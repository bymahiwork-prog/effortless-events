import { NextResponse } from "next/server";

/*
 * Temporary venue data.
 *
 * We will replace this with your actual venue listings
 * once the new data source is ready.
 */
const venues = [
  {
    id: 1,
    image: "",
    images: [],
    product_category: 1,
    rating: "5.0",
    category_name: "Farmhouses",
    product_name: "Farmhouse",
    product_location: "Delhi NCR",
    product_address: "",
    product_price: "",
    product_number: "",
    product_detail:
      "Beautiful farmhouse venue for birthdays, private parties, celebrations and events.",
    status: 1,
    created_date: "",
    last_update: "",
  },
  {
    id: 2,
    image: "",
    images: [],
    product_category: 2,
    rating: "5.0",
    category_name: "Apartments",
    product_name: "Luxury Apartment",
    product_location: "Delhi NCR",
    product_address: "",
    product_price: "",
    product_number: "",
    product_detail:
      "Comfortable apartment space suitable for private stays and small gatherings.",
    status: 1,
    created_date: "",
    last_update: "",
  },
  {
    id: 3,
    image: "",
    images: [],
    product_category: 3,
    rating: "5.0",
    category_name: "Wedding Venues",
    product_name: "Wedding Venue",
    product_location: "Delhi NCR",
    product_address: "",
    product_price: "",
    product_number: "",
    product_detail:
      "Elegant venue suitable for weddings, receptions and special celebrations.",
    status: 1,
    created_date: "",
    last_update: "",
  },
];

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
     * 1 = Farmhouses
     * 2 = Apartments
     * 3 = Wedding Venues
     */
    const categoryId = (
      searchParams.get("categoryId") || ""
    ).trim();

    /*
     * COPY VENUES
     */
    let filteredVenues = [...venues];

    /*
     * ONLY ACTIVE VENUES
     */
    filteredVenues = filteredVenues.filter(
      (venue) =>
        venue.status === undefined ||
        venue.status === 1 ||
        venue.status === true
    );

    /*
     * CATEGORY FILTER
     */
    if (categoryId) {
      filteredVenues = filteredVenues.filter(
        (venue) =>
          String(venue.product_category) ===
          String(categoryId)
      );
    }

    /*
     * SEARCH FILTER
     */
    if (search) {
      filteredVenues = filteredVenues.filter(
        (venue) => {
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
        }
      );
    }

    /*
     * SORT
     */
    filteredVenues.sort((a, b) => {
      const idA = Number(a.id || 0);
      const idB = Number(b.id || 0);

      return idB - idA;
    });

    /*
     * TOTAL
     */
    const total = filteredVenues.length;

    /*
     * PAGINATION
     */
    const offset = (page - 1) * limit;

    const paginatedVenues =
      filteredVenues.slice(
        offset,
        offset + limit
      );

    /*
     * RESPONSE FORMAT
     */
    const products = paginatedVenues.map(
      (venue) => ({
        id: venue.id,

        image: venue.image || null,

        images: Array.isArray(venue.images)
          ? venue.images
          : [],

        product_category:
          venue.product_category || null,

        rating:
          venue.rating || "5.0",

        category_name:
          venue.category_name || "",

        product_name:
          venue.product_name || "Venue",

        product_location:
          venue.product_location || "",

        product_address:
          venue.product_address || "",

        product_price:
          venue.product_price || "",

        product_number:
          venue.product_number || "",

        product_detail:
          venue.product_detail || "",

        status:
          venue.status === undefined
            ? 1
            : venue.status,

        created_date:
          venue.created_date || "",

        last_update:
          venue.last_update || "",
      })
    );

    /*
     * FINAL RESPONSE
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
