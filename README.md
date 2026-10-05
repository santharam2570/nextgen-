# NextGen Innovation

Marketing site for NextGen Innovation, built with Next.js (App Router), Tailwind CSS v4 and Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`. All values are optional:

- `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` — show live Google reviews instead of the fallback data in `src/data/site.ts`.
- `INQUIRY_WEBHOOK_URL` — endpoint that receives inquiry form submissions as JSON.

## Structure

- `src/app` — routes, metadata, `sitemap.ts`, `robots.ts` and the `/api/inquiry` route.
- `src/components` — page sections and shared UI.
- `src/data` — all site content (courses, branches, blog posts, FAQs, etc.).
