import { Instagram, Facebook, Twitter, Send } from "lucide-react";
import type { ReactNode } from "react";

// --- TypeScript Interfaces for better type safety ---
interface LinkItem {
  label: string;
  href: string;
}

interface SocialLinkItem extends LinkItem {
  icon: ReactNode;
}

interface FooterLinkColumnProps {
  title: string;
  links: LinkItem[];
}

// --- Data remains the same, but benefits from typing ---
const companyLinks: LinkItem[] = [
  { label: "About Us", href: "#about" },
  { label: "Our Collection", href: "#collection" },
  { label: "Our Story", href: "#" },
  { label: "Contact", href: "#contact" },
];

const legalLinks: LinkItem[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
];

const socialLinks: SocialLinkItem[] = [
  {
    label: "Instagram",
    href: "#",
    icon: <Instagram size={20} />,
  },
  {
    label: "Facebook",
    href: "#",
    icon: <Facebook size={20} />,
  },
  {
    label: "Twitter",
    href: "#",
    icon: <Twitter size={20} />,
  },
];

// Reusable component for link columns (now fully typed)
const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => (
  <div className="flex flex-col gap-4">
    <h3 className="font-bold text-base text-brand-secondary tracking-wider uppercase">
      {title}
    </h3>
    <nav className="flex flex-col gap-2.5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-brand-secondary/70 hover:text-brand-secondary transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </nav>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-full bg-brand-primary text-brand-secondary">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Logo and Brand */}
          <div className="col-span-2 lg:col-span-1">
            <span className="font-extrabold text-3xl tracking-widest text-brand-secondary drop-shadow-sm select-none font-sans">
              FIRAAQ
            </span>
            <p className="text-sm text-brand-secondary/60 mt-3">
              Discover your unique scent. Handcrafted perfumes for the modern
              soul.
            </p>
          </div>

          {/* Link Columns */}
          <div className="col-span-1">
            <FooterLinkColumn title="Company" links={companyLinks} />
          </div>
          <div className="col-span-1">
            <FooterLinkColumn title="Legal" links={legalLinks} />
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-base text-brand-secondary tracking-wider uppercase">
              Join Our Newsletter
            </h3>
            <p className="text-sm text-brand-secondary/60 mt-2 mb-4">
              Get updates on new releases, special offers, and more.
            </p>
            <form className="flex items-center w-full max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full px-4 py-2.5 text-sm bg-brand-secondary/10 text-brand-secondary border border-transparent rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-accent placeholder:text-brand-secondary/40 transition-shadow"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-brand-accent text-brand-primary px-4 py-2.5 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-secondary/20 pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-brand-secondary/60 text-center md:text-left">
            © {new Date().getFullYear()} FIRAAQ. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-brand-secondary/60 hover:text-brand-accent transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
