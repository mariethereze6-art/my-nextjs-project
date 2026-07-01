// components/ui/ProductCard.jsx
import Image from "next/image";
import { ArrowIcon } from "./icons";

const badgeColors = {
  "Best Seller": "bg-amber-500/15 text-amber-300 border border-amber-500/20",
  New: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20",
  "Top Rated": "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20",
  Sale: "bg-rose-500/15 text-rose-300 border border-rose-500/20",
};

export default function ProductCard({ product }) {
  const badgeClass =
    badgeColors[product.badge] || "border border-slate-500/20 bg-slate-500/20 text-slate-300";

  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="relative h-48 overflow-hidden bg-[#111827] sm:h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        {product.badge && (
          <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-4 sm:mb-4">
          <h3 className="text-lg font-bold text-white sm:text-xl">{product.name}</h3>
          <span className="shrink-0 text-base font-bold text-indigo-400 sm:text-lg">{product.price}</span>
        </div>

        <p className="mb-4 flex-1 text-sm leading-6 text-slate-400 sm:mb-6 sm:text-base sm:leading-7">{product.description}</p>

        <button
          type="button"
          className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white sm:py-3"
        >
          View Details
          <ArrowIcon />
        </button>
      </div>

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/0 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/10" />
    </article>
  );
}