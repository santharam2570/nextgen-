import { ExternalLink, Star } from "lucide-react";
import { site } from "@/data/site";
import { getGoogleReviews, type Review } from "@/lib/google-reviews";
import { GoogleLogo } from "./ui/Brand";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function Stars({ value, className = "h-4 w-4" }: { value: number; className?: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < Math.round(value) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
        />
      ))}
    </div>
  );
}

const avatarColors = ["bg-brand-600", "bg-brand-800", "bg-brand-500", "bg-brand-900", "bg-brand-700"];

function ReviewCard({ r, i }: { r: Review; i: number }) {
  return (
    <article className="w-[340px] shrink-0 rounded-3xl border border-brand-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {r.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={r.avatar} alt={r.author} referrerPolicy="no-referrer" className="h-11 w-11 rounded-full object-cover" />
          ) : (
            <span className={`grid h-11 w-11 place-items-center rounded-full font-semibold text-white ${avatarColors[i % avatarColors.length]}`}>
              {r.author.charAt(0)}
            </span>
          )}
          <div>
            <p className="font-semibold text-slate-900">{r.author}</p>
            <p className="text-xs text-slate-500">{r.time}</p>
          </div>
        </div>
        <GoogleLogo className="h-6 w-6" />
      </div>
      <div className="mt-4"><Stars value={r.rating} /></div>
      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-600">{r.text}</p>
    </article>
  );
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();
  const half = Math.ceil(data.reviews.length / 2);
  const rowA = data.reviews.slice(0, half);
  const rowB = data.reviews.slice(half).length ? data.reviews.slice(half) : rowA;

  return (
    <section id="reviews" className="overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Google Reviews"
          title={<>Rated <span className="text-gradient">{data.rating.toFixed(1)} stars</span> on Google</>}
          text="Don't take our word for it. Read unfiltered feedback from real learners on Google — then visit our centre and see for yourself."
        />

        <Reveal delay={0.1} className="mx-auto mt-14 grid max-w-4xl items-center gap-8 rounded-[2rem] border border-brand-100 bg-gradient-to-br from-white to-brand-50 p-8 shadow-xl shadow-brand-900/5 md:grid-cols-[auto_1fr_auto]">
          <div className="text-center md:border-r md:border-brand-100 md:pr-10">
            <div className="flex items-center justify-center gap-2">
              <GoogleLogo className="h-8 w-8" />
              <span className="font-display text-lg font-semibold text-slate-700">Google</span>
            </div>
            <p className="mt-3 font-display text-6xl font-extrabold text-slate-900">{data.rating.toFixed(1)}</p>
            <div className="mt-2 flex justify-center"><Stars value={data.rating} className="h-5 w-5" /></div>
            <p className="mt-2 text-sm text-slate-500">Based on {data.total.toLocaleString("en-IN")} reviews</p>
          </div>

          <div className="space-y-2">
            {data.breakdown.map((b) => (
              <div key={b.stars} className="flex items-center gap-3 text-sm">
                <span className="w-3 font-semibold text-slate-600">{b.stars}</span>
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-brand-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700" style={{ width: `${b.percent}%` }} />
                </div>
                <span className="w-10 text-right text-slate-500">{b.percent}%</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={site.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:scale-105"
            >
              Write a Review
            </a>
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 transition hover:bg-brand-50"
            >
              View on Google <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mask-fade-x mt-14 space-y-6">
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {[...rowA, ...rowA, ...rowA, ...rowA].map((r, i) => <ReviewCard key={`a${i}`} r={r} i={i} />)}
        </div>
        <div className="flex w-max animate-marquee-reverse gap-6 hover:[animation-play-state:paused]">
          {[...rowB, ...rowB, ...rowB, ...rowB].map((r, i) => <ReviewCard key={`b${i}`} r={r} i={i + 2} />)}
        </div>
      </div>
    </section>
  );
}
