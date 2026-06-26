// app/products/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductsSwiper from "@/components/ProductsSwiper";
import ProductCategoryFilter from "@/components/ProductCategoryFilter";
import CTASection from "@/components/CTASection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { products, categories, featuredProducts } from "@/lib/products";

export const metadata = {
  title: "Products — TechNova",
  description: "Browse premium smartphones, laptops, and audio gear at TechNova.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Our Catalog"
        title="Explore Our Products"
        subtitle="Premium technology, curated by category, built to last."
      />

      <section className="bg-[#0D1120] py-28">
        <Container>
          <SectionHeading
            eyebrow="Featured"
            title="Featured Products"
            subtitle="Hand-picked for performance, design, and value."
          />
          <ProductsSwiper products={featuredProducts} />
        </Container>
      </section>

      <section className="bg-[#0A0F1E] py-28">
        <Container>
          <SectionHeading
            eyebrow="Full Catalog"
            title="All Products"
            subtitle="Browse by category to find exactly what you need."
          />
          <ProductCategoryFilter products={products} categories={categories} />
        </Container>
      </section>

      <CTASection
        eyebrow="Need Help Choosing?"
        title="Talk to our product experts"
        subtitle="We'll help you find the right fit for your budget and needs."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Back to Home", href: "/" }}
      />

      <Footer />
    </>
  );
}