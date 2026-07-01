// components/PageHero.jsx
import Container from "./ui/Container";
import AtmosphereBackground from "./ui/AtmosphereBackground";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1E] pb-14 pt-32 md:pb-24 md:pt-44">
      <AtmosphereBackground compact />
      <Container className="relative text-center">
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-sm md:mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">{eyebrow}</span>
        </div>
        <h1 className="mx-auto max-w-2xl text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:mt-6 md:text-lg">{subtitle}</p>
        )}
      </Container>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1E] to-transparent"
      />
    </section>
  );
}