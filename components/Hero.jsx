// components/Hero.jsx
import Container from "./ui/Container";
import AtmosphereBackground from "./ui/AtmosphereBackground";
import StatsStrip from "./ui/StatsStrip";
import Button from "./ui/Button";
import { ArrowIcon } from "./ui/icons";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0A0F1E]">
      <AtmosphereBackground />

      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="flex flex-col items-center text-center">
            <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Premium Technology Store
              </span>
            </div>

            <h1 className="mx-auto max-w-[720px] text-4xl font-bold leading-[1.25] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.2]">
              Discover premium{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                smartphones, laptops, headphones...
              </span>
            </h1>

            <div className="mx-auto mb-10 mt-10 h-px w-20 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

            <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button href="/products" variant="primary">
                Shop Now
                <ArrowIcon />
              </Button>

              <Button href="#services" variant="secondary">
                Explore Services
              </Button>
            </div>

            <StatsStrip className="mt-16" />
          </div>
        </Container>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0F1E] to-transparent"
      />
    </section>
  );
}