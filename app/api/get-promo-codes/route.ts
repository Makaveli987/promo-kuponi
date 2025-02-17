import { db } from "@/db/drizzle";
import { promoCodes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(req: { url: string | URL }) {
  const { searchParams } = new URL(req.url); // Extract query parameters
  const website = searchParams.get("website"); // Replace "param" with your query key

  // Optionally filter data based on params
  let data = [];
  if (website) {
    data = await db
      .select()
      .from(promoCodes)
      .where(eq(promoCodes.websiteUrl, website));
  } else {
    data = await db.select().from(promoCodes);
  }

  const response = NextResponse.json(data, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
