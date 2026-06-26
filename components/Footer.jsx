// components/Footer.jsx
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { navLinks } from "@/lib/nav-links";

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
];

const socials = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/[0.06] bg-[#080C17]">
      <div className="2xl:container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-xs font-black text-white shadow-lg shadow-indigo-500/20">TN</span>
              <span className="text-lg font-black tracking-tight text-white">Tech<span className="text-indigo-400">Nova</span></span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Your trusted destination for premium smartphones, laptops, accessories, and the latest technology — delivered worldwide.
            </p>
            <div className="mt-7 flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-200 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><a href="mailto:hello@technova.com" className="transition-colors hover:text-white">hello@technova.com</a></li>
              <li><a href="tel:+15550001234" className="transition-colors hover:text-white">+1 (555) 000-1234</a></li>
              <li className="text-xs leading-relaxed text-slate-500">Mon – Fri<br />9 AM – 6 PM EST</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/[0.06] pt-8">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} TechNova. All rights reserved.</p>
            <nav className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-xs text-slate-500 transition-colors hover:text-slate-300">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}