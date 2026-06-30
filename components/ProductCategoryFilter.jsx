// components/ProductCategoryFilter.jsx
"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ui/ProductCard";
import { SearchIcon } from "./ui/icons";

export default function ProductCategoryFilter({ products, categories }) {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const byCategory =
      active === "All" ? products : products.filter((p) => p.category === active);

    const q = query.trim().toLowerCase();
    if (!q) return byCategory;

    return byCategory.filter((p) => p.name.toLowerCase().includes(q));
  }, [products, active, query]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="scrollbar-hide flex w-full gap-3 overflow-x-auto sm:w-auto"
          role="tablist"
          aria-label="Product categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-indigo-400/30 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className="relative w-full sm:w-72">
          <span className="sr-only">Search products</span>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-indigo-400/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-indigo-500/20"
          />
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-slate-400">
          No products match your search.
        </p>
      )}
    </div>
  );
}