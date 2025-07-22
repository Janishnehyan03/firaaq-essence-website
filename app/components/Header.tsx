'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#collection', label: 'Collection' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 h-20
        border-b border-white/15 shadow-lg
        backdrop-blur-[8px] bg-black/60
        transition-all duration-300"
      >
        {/* LOGO */}
        <a
          href="#"
          className="flex items-center gap-2 font-serif text-white tracking-widest text-2xl md:text-3xl font-bold select-none"
        >
          FIRAAQ
          <span className="block w-2 h-2 rounded-full bg-brand-accent md:ml-2"></span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-base font-semibold text-gray-200 px-2 py-1 tracking-wide transition-colors
                hover:text-brand-accent focus-visible:text-brand-accent
                before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px]
                before:bg-brand-accent before:transition-all before:duration-300
                hover:before:w-full focus-visible:before:w-full before:rounded-full
              "
              tabIndex={0}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ACTIONS & HAMBURGER */}
        <div className="flex items-center gap-1 md:gap-5">
          {/* Hamburger Button */}
            <button
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded
              focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent group transition"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            >
            {/* Hamburger icon */}
            <span
              className={`block w-8 h-1 rounded-full bg-white transition-all duration-300
              ${menuOpen ? 'rotate-45 translate-y-2 bg-brand-accent' : ''}`}
            />
            <span
              className={`block w-8 h-1 rounded-full bg-white my-1 transition-all duration-300
              ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-8 h-1 rounded-full bg-white transition-all duration-300
              ${menuOpen ? '-rotate-45 -translate-y-2 bg-brand-accent' : ''}`}
            />
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex items-center justify-center
        transition-all duration-300 ease-expo
        bg-black/70 backdrop-blur-[8px]
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <nav
          className={`
            flex flex-col items-center justify-center gap-10
            bg-white/95 rounded-3xl py-16 px-10 mx-6 max-w-[90vw] shadow-xl
            ${menuOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-10 scale-95 opacity-0'}
            transition-all duration-300
          `}
        >
          {navLinks.map((link) => (
            <a
              key={`m-${link.href}`}
              href={link.href}
              onClick={handleLinkClick}
              className="text-xl font-semibold text-brand-primary hover:text-brand-accent transition-colors py-2 px-6 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
