import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: Props) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
          light
            ? "bg-white/10 text-brand-100 ring-1 ring-white/20"
            : "bg-brand-100 text-brand-700 ring-1 ring-brand-200"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-brand-200" : "bg-brand-600"}`} />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-brand-100/90" : "text-slate-600"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
