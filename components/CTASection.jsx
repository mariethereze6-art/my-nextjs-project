// components/CTASection.jsx
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function CTASection({ eyebrow = "Get Started", title, subtitle, primaryAction, secondaryAction }) {
  return (
    <section className="relative overflow-hidden bg-[#0D1120] py-14 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/10 blur-[100px]" />
      </div>
      <Container className="relative text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400 md:mb-4">{eyebrow}</p>
        <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
        {subtitle && <p className="mx-auto mt-4 max-w-xl text-base text-slate-400 md:mt-6 md:text-lg">{subtitle}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10">
          {primaryAction && (
            <Button href={primaryAction.href} variant="primary">{primaryAction.label}</Button>
          )}
          {secondaryAction && (
            <Button href={secondaryAction.href} variant="secondary">{secondaryAction.label}</Button>
          )}
        </div>
      </Container>
    </section>
  );
}