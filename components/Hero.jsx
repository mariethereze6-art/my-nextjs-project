export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0A0F1E] overflow-hidden"
    >
      {/* Atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/12 blur-[150px]" />
        <div className="absolute right-[20%] top-[25%] h-[280px] w-[280px] rounded-full bg-violet-500/7 blur-[90px]" />
        <div className="absolute left-[18%] bottom-[20%] h-[220px] w-[220px] rounded-full bg-blue-600/7 blur-[80px]" />
      </div>

      {/* Dot-grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── True vertical + horizontal centre ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">

        {/* Eyebrow */}
        <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
            Premium Technology Store
          </span>
        </div>

        {/* THE centrepiece sentence */}
        <h1 className="mx-auto max-w-[720px] text-4xl font-bold leading-[1.25] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.2]">
          Discover premium{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
            smartphones, laptops, headphones...
          </span>{" "}
          
          <span className="text-slate-300 font-semibold">
            
          </span>
        </h1>

        {/* Thin divider */}
        <div className="mx-auto mt-10 mb-10 h-px w-20 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <a
            href="#products"
            className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-500 px-8 py-3.5 text-[13px] font-bold tracking-wide text-white shadow-xl shadow-indigo-500/20 transition-all duration-300 hover:bg-indigo-400 hover:-translate-y-0.5 hover:shadow-indigo-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E]"
          >
            Shop Now
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-[13px] font-semibold tracking-wide text-slate-300 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.13] hover:text-white hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E]"
          >
            Explore Services
          </a>
        </div>

        {/* Trust strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {[
            { stat: "50K+", label: "Customers" },
            { stat: "4.9★", label: "Average Rating" },
            { stat: "120+", label: "Countries" },
            { stat: "2 Yr", label: "Warranty" },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-base font-black tracking-tight text-white">{stat}</span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0F1E] to-transparent"
      />
    </section>
  );
}
