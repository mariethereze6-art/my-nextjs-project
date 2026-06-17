import "./globals.css";

export const metadata = {
  title: "TechNova — Premium Technology Store",
  description:
    "Discover premium smartphones, laptops, headphones, and cutting-edge gadgets at TechNova.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0A0F1E] text-white antialiased">{children}</body>
    </html>
  );
}
