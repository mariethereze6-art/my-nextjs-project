// components/FeaturedProducts.jsx
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ProductsSwiper from "./ProductsSwiper";
import { ArrowIcon } from "./ui/icons";
import { featuredProducts } from "@/lib/products";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-[#0D1120] py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Products"
          title="Our Best Sellers"
          subtitle="Hand-picked for performance, design, and value. Updated every season."
        />

        <ProductsSwiper products={featuredProducts} />

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-base font-semibold text-slate-400 transition-colors duration-200 hover:text-white"
          >
            View all products
            <ArrowIcon />
          </Link>
        </div>
      </Container>
    </section>
  );
}