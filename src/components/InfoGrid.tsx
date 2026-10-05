import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

export type InfoItem = { icon: string; title: string; text: string };

export default function InfoGrid({ items }: { items: InfoItem[] }) {
  return (
    <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map((f, i) => (
        <Reveal
          key={f.title}
          delay={i * 0.08}
          className="group relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-brand-900/15"
        >
          <div className="absolute inset-0 -z-0 bg-gradient-to-br from-brand-600 to-brand-800 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-brand-700 transition-all duration-500 group-hover:rotate-6 group-hover:bg-white/20 group-hover:text-white">
              <Icon name={f.icon} className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-xl font-semibold transition-colors duration-500 group-hover:text-white">{f.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-brand-50">{f.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
