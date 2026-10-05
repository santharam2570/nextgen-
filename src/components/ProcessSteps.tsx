import Reveal from "./ui/Reveal";

type Step = { step: string; title: string; text: string };

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal
          key={s.step}
          delay={i * 0.1}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-950 p-6 text-white shadow-lg"
        >
          <span className="absolute -right-2 -top-4 font-display text-7xl font-extrabold text-white/10">{s.step}</span>
          <span className="font-display text-sm font-bold uppercase tracking-widest text-brand-300">Step {s.step}</span>
          <h3 className="relative mt-3 text-lg font-semibold text-white">{s.title}</h3>
          <p className="relative mt-2 text-sm leading-relaxed text-brand-100">{s.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
