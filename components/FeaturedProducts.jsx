import Image from "next/image";

const products = [
  {
    name: "Gaming Laptop",
    image: "/images/laptop.jpg",
    badge: "Best Seller",
    price: "$1,299",
    description:
      "High-performance laptop built for gaming and professional productivity.",
  },
  {
    name: "Smartphone Pro",
    image: "/images/phone.jpg",
    badge: "New",
    price: "$899",
    description:
      "Premium smartphone with an advanced triple-camera system and all-day battery.",
  },
  {
    name: "Wireless Headphones",
    image: "/images/headphones.jpg",
    badge: "Top Rated",
    price: "$349",
    description:
      "Studio-quality audio with adaptive noise cancellation and 40-hour playback.",
  },
];

const badgeColors = {
  "Best Seller":
    "bg-amber-500/15 text-amber-300 border border-amber-500/20",
  New: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20",
  "Top Rated":
    "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20",
};

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-[#0D1120] py-32">
      <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 w-full max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">
            Featured Products
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
            Our Best Sellers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Hand-picked for performance, design, and value. Updated every
            season.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {products.map((product) => {
            const badgeClass =
              badgeColors[product.badge] ||
              "border border-slate-500/20 bg-slate-500/20 text-slate-300";

            return (
              <article
                key={product.name}
                className="group relative flex w-[360px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[#111827]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />

                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">
                      {product.name}
                    </h3>

                    <span className="shrink-0 text-lg font-bold text-indigo-400">
                      {product.price}
                    </span>
                  </div>

                  <p className="mb-6 flex-1 text-base leading-7 text-slate-400">
                    {product.description}
                  </p>

                  <button
                    type="button"
                    className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 font-semibold text-slate-300 transition-all duration-200 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
                  >
                    View Details
                    <ArrowIcon />
                  </button>
                </div>

                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/0 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/10" />
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <a
            href="#"
            className="group inline-flex cursor-pointer items-center gap-2 text-base font-semibold text-slate-400 transition-colors duration-200 hover:text-white"
          >
            View all products
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}