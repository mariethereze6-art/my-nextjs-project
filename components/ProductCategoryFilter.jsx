// components/ProductCategoryFilter.jsx
"use client";

import { useState } from "react";
import ProductCard from "./ui/ProductCard";

export default function ProductCategoryFilter({ products, categories }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              active === cat
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}