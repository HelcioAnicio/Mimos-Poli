import { NextRequest, NextResponse } from "next/server";
import { searchCloudinaryImagesByTag } from "@/lib/cloudinary";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag") ?? "novidades";

  try {
    const images = await searchCloudinaryImagesByTag(tag);
    return NextResponse.json({ images });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected error while fetching images.";

    return NextResponse.json({ images: [], message }, { status: 500 });
  }
}
