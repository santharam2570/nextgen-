import { googleReviews } from "@/data/site";

export type Review = {
  author: string;
  avatar: string;
  rating: number;
  time: string;
  text: string;
};

export type ReviewsData = {
  rating: number;
  total: number;
  breakdown: { stars: number; percent: number }[];
  reviews: Review[];
  live: boolean;
};

type PlaceReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string };
};

type PlaceResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlaceReview[];
};

const fallback: ReviewsData = { ...googleReviews, live: false };

/**
 * Loads reviews from the Google Places API (New) when GOOGLE_PLACES_API_KEY and
 * GOOGLE_PLACE_ID are set. Google returns at most 5 reviews, so the static
 * reviews in site.ts are appended to keep the marquee full.
 */
export async function getGoogleReviews(): Promise<ReviewsData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return fallback;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: 60 * 60 * 12 },
    });
    if (!res.ok) return fallback;
    const data = (await res.json()) as PlaceResponse;

    const live: Review[] = (data.reviews ?? []).map((r) => ({
      author: r.authorAttribution?.displayName ?? "Google user",
      avatar: r.authorAttribution?.photoUri ?? "",
      rating: r.rating ?? 5,
      time: r.relativePublishTimeDescription ?? "",
      text: r.text?.text ?? r.originalText?.text ?? "",
    }));

    return {
      rating: data.rating ?? fallback.rating,
      total: data.userRatingCount ?? fallback.total,
      breakdown: fallback.breakdown,
      reviews: [...live, ...fallback.reviews].slice(0, 10),
      live: true,
    };
  } catch {
    return fallback;
  }
}
