const services = [
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Fast Delivery",
    description:
      "Quick and secure shipping to over 120 countries. Orders dispatched within 24 hours.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Warranty Included",
    description:
      "Every product comes with a 2-year manufacturer's warranty and hassle-free returns.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Secure Payments",
    description:
      "Bank-grade encryption protects every transaction. We accept all major cards and wallets.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "24/7 Support",
    description:
      "Our expert team is always available. Live chat, email, or phone — your choice.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0F1E] py-16 md:py-32">
      <div className="2xl:container mx-auto flex w-full flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl text-center md:mb-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400 md:mb-4">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Built around your experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:mt-6 md:text-lg">
            Every feature we offer is designed to make your shopping journey
            seamless, safe, and satisfying.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl justify-items-center gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex w-full max-w-[320px] flex-col items-center overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:bg-indigo-500/[0.05] hover:shadow-2xl hover:shadow-indigo-500/10 sm:min-h-[300px] sm:p-8 lg:min-h-[320px]"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 sm:mb-6 sm:h-16 sm:w-16">
                {service.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold text-white sm:mb-4 sm:text-xl">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                {service.description}
              </p>

              {/* Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/0 blur-3xl transition-all duration-300 group-hover:bg-indigo-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}