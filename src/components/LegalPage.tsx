import Footer from "./Footer";
import Navbar from "./Navbar";
import PageHero from "./PageHero";
import ScrollExtras from "./ScrollExtras";
import { images, site } from "@/data/site";

type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

type Props = { title: string; intro: string; updated: string; sections: LegalSection[] };

export default function LegalPage({ title, intro, updated, sections }: Props) {
  return (
    <>
      <ScrollExtras enquireHref="/#contact" />
      <Navbar />
      <main>
        <PageHero eyebrow="Legal" title={title} text={intro} image={images.inquiry} crumbs={[{ label: title }]} ctaHref="/#contact" />
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <p className="text-sm text-slate-500">Last updated: {updated}</p>
            <div className="mt-8 space-y-10">
              {sections.map((s, i) => (
                <div key={s.heading}>
                  <h2 className="text-xl font-bold sm:text-2xl">{i + 1}. {s.heading}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p} className="mt-3 leading-relaxed text-slate-600">{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-6 text-slate-600">
                      {s.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                </div>
              ))}
              <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-6">
                <h2 className="text-lg font-bold">Contact us</h2>
                <p className="mt-2 text-slate-600">
                  {site.name}, {site.address}
                  <br />
                  Email: <a href={`mailto:${site.email}`} className="font-semibold text-brand-700">{site.email}</a> · Phone: {site.phone}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
