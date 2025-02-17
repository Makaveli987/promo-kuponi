import { db } from "@/db/drizzle";
import { promoCodes } from "@/db/schema";
import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET() {
  const data = await db.select().from(promoCodes);

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();

    // Example: Handle the data
    const {
      storeName,
      websiteUrl,
      promoCode,
      discount,
      description,
      validUntil,
    } = body;

    if (
      !storeName ||
      !websiteUrl ||
      !promoCode ||
      !discount ||
      !description ||
      !validUntil
    ) {
      return NextResponse.json(
        { error: "Missing parameters" },
        { status: 400 }
      );
    }

    await db.insert(promoCodes).values({
      storeName,
      websiteUrl,
      promoCode,
      discount,
      description,
      validUntil,
    });

    // Example response
    return NextResponse.json({ message: `Received: ` }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
