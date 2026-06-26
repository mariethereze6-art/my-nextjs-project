// app/contact/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import InfoCard from "@/components/ui/InfoCard";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Contact Us — TechNova",
  description: "Get in touch with the TechNova team — sales, support, or general inquiries.",
};

function MailIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.34 4.02a1 1 0 01-.27 1.06l-1.6 1.6a11 11 0 005.52 5.52l1.6-1.6a1 1 0 011.06-.27l4.02 1.34a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Have a question about an order, a product, or a partnership? We'd love to hear from you."
      />

      <section className="bg-[#0A0F1E] pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />

            <div className="flex flex-col gap-6">
              <InfoCard icon={<MailIcon />} title="Email Us" value="hello@technova.com" href="mailto:hello@technova.com" />
              <InfoCard icon={<PhoneIcon />} title="Call Us" value="+1 (555) 000-1234" href="tel:+15550001234" />
              <InfoCard icon={<PinIcon />} title="Visit Us" value="123 Innovation Ave, Suite 400, San Francisco, CA 94107" />
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.07]">
            <iframe
              title="TechNova location map"
              src="https://maps.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full grayscale invert-[0.92] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}