// components/PageHero.jsx
import Container from "./ui/Container";
import AtmosphereBackground from "./ui/AtmosphereBackground";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1E] pb-24 pt-44">
      <AtmosphereBackground />
      <Container className="relative text-center">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">{eyebrow}</span>
        </div>
        <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}