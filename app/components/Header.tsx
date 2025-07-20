'use client';

import Button from './Button'; // Assuming you have this Button component
import { useState, useEffect } from 'react';

// Define navigation links in one place for easier maintenance
const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#collection', label: 'Collection' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Optional: Prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling if component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);


  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 h-20 ">
        <a href="#" className="font-extrabold text-2xl tracking-widest text-brand-accent  select-none font-sans">
          FIRAAQ
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-primary/80 font-semibold hover:text-brand-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-3 md:gap-6">


          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none group z-50"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block w-6 h-0.5 rounded bg-brand-primary transition-all duration-300 ease-in-out group-hover:bg-brand-accent ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
            />
            <span
              className={`block w-6 h-0.5 rounded bg-brand-primary my-1 transition-all duration-300 ease-in-out group-hover:bg-brand-accent ${menuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block w-6 h-0.5 rounded bg-brand-primary transition-all duration-300 ease-in-out group-hover:bg-brand-accent ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center w-full h-full bg-white/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${menuOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={`mobile-${link.href}`}
              href={link.href}
              className="text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </>
  );
}
