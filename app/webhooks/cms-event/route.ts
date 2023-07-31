import { CACHE_TAG_REVIEWS } from "@/lib/reviews";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { event, model } = await request.json();
    if (model === 'review') {
        revalidateTag(CACHE_TAG_REVIEWS);
        console.log(`revalidated ${CACHE_TAG_REVIEWS}`);
    }
    return new Response(null, { status: 204 });
}