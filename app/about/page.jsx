// app/about/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import StatsStrip from "@/components/ui/StatsStrip";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About Us — TechNova",
  description: "Learn about TechNova's mission to deliver premium technology worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Our Story"
        title="Built for people who love technology"
        subtitle="TechNova started with one idea: premium tech shouldn't mean compromise on trust, speed, or support."
      />

      <section className="bg-[#0A0F1E] pb-28">
        <Container>
          <StatsStrip />
        </Container>
      </section>

      <Services />

      <section className="bg-[#0A0F1E] py-28">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="What our customers say" subtitle="Real feedback from real TechNova customers." />
          <Testimonials />
        </Container>
      </section>

      <CTASection
        eyebrow="Join Us"
        title="Ready to upgrade your setup?"
        subtitle="Browse our latest collection of premium technology."
        primaryAction={{ label: "Shop Products", href: "/products" }}
        secondaryAction={{ label: "Contact Sales", href: "/contact" }}
      />

      <Footer />
    </>
  );
}