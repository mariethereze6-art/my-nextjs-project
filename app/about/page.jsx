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
import Accordion from "@/components/ui/Accordion";

export const metadata = {
  title: "About Us — TechNova",
  description: "Learn about TechNova's mission to deliver premium technology worldwide.",
};

const faqItems = [
  {
    question: "Do you ship internationally?",
    answer:
      "Yes — we ship to over 120 countries. Standard international delivery takes 5–10 business days, while express shipping is available at checkout and typically arrives within 2–4 business days.",
  },
  {
    question: "What is your return and refund policy?",
    answer:
      "We offer a hassle-free 30-day return window from the date of delivery. Products must be in their original packaging and unused condition. Refunds are processed within 5–7 business days once we receive the item.",
  },
  {
    question: "Are all products covered by a warranty?",
    answer:
      "Every product sold by TechNova includes a minimum 2-year manufacturer's warranty. Some flagship products carry extended 3-year coverage. Warranty details are listed on each product page.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this to monitor your delivery in real time directly on our website or through the carrier's portal.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, and bank transfers for orders over $500. All transactions are secured with bank-grade encryption.",
  },
  {
    question: "Can I cancel or modify my order after placing it?",
    answer:
      "Orders can be cancelled or modified within 2 hours of placement. After that, the order enters our fulfilment pipeline. Please contact our support team immediately if you need to make changes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Our Story"
        title="Built for people who love technology"
        subtitle="TechNova started with one idea: premium tech shouldn't mean compromise on trust, speed, or support."
      />

      <section className="bg-[#0A0F1E] pb-16 md:pb-28">
        <Container>
          <StatsStrip />
        </Container>
      </section>

      <Services />

      <section className="bg-[#0A0F1E] py-16 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What our customers say"
            subtitle="Real feedback from real TechNova customers."
          />
          <Testimonials />
        </Container>
      </section>

      <section className="bg-[#0D1120] py-16 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            subtitle="Everything you need to know before you buy."
          />
          <Accordion items={faqItems} />
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