"use client";

import { useState, useEffect } from "react";

// Define navigation links in one place for easier maintenance
const navLinks = [
  { href: "#", label: "Home" },
  { href: "#collection", label: "Collection" },
  { href: "#discover", label: "Discover" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll state for dynamic header styling
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: any) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  if (!mounted) return null;

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 
          flex items-center justify-between 
          px-6 md:px-16 lg:px-24 h-24
          transition-all duration-700 ease-out
          ${
            scrolled
              ? "bg-black/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/20"
              : "bg-transparent"
          }
        `}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none opacity-50" />

        {/* Logo */}
        <a
          href="#"
          className="
            font-extralight text-3xl tracking-[0.4em] text-white 
            select-none relative z-10 group
            transition-all duration-500 ease-out
            hover:tracking-[0.5em] hover:opacity-80
            before:content-[''] before:absolute before:inset-0
            before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
            before:scale-x-0 before:transition-transform before:duration-500
            hover:before:scale-x-100
          "
        >
          <span className="relative z-10">FIRAAQ</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative text-white/70 font-extralight tracking-wide
                text-sm uppercase transition-all duration-500 ease-out
                hover:text-white group overflow-hidden
                after:content-[''] after:absolute after:bottom-[-12px] 
                after:left-1/2 after:-translate-x-1/2
                after:w-0 after:h-px after:bg-gradient-to-r 
                after:from-transparent after:via-white after:to-transparent
                after:transition-all after:duration-500 after:ease-out
                hover:after:w-full
                before:content-[''] before:absolute before:inset-0
                before:bg-gradient-to-r before:from-transparent before:via-white/3 before:to-transparent
                before:scale-x-0 before:transition-transform before:duration-300
                hover:before:scale-x-100
              "
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Modern Hamburger Menu for Mobile */}
        <button
          className="
            md:hidden relative w-12 h-12 
            flex flex-col justify-center items-center
            focus:outline-none group z-50
            before:content-[''] before:absolute before:inset-0
            before:rounded-full before:bg-white/5 before:scale-0
            before:transition-transform before:duration-300
            hover:before:scale-100 focus:before:scale-100
          "
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="relative w-7 h-5 flex flex-col justify-between">
            <span
              className={`
                block w-full h-0.5 bg-white origin-center rounded-full
                transition-all duration-500 ease-out
                ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}
              `}
            />
            <span
              className={`
                block w-full h-0.5 bg-white rounded-full
                transition-all duration-500 ease-out
                ${menuOpen ? "opacity-0 scale-0" : ""}
              `}
            />
            <span
              className={`
                block w-full h-0.5 bg-white origin-center rounded-full
                transition-all duration-500 ease-out
                ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}
              `}
            />
          </div>
        </button>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          flex flex-col items-center justify-center
          bg-gradient-to-br from-black via-black to-gray-900
          backdrop-blur-2xl
          transition-all duration-700 ease-out
          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
        aria-hidden={!menuOpen}
        onClick={(e) => e.target === e.currentTarget && setMenuOpen(false)}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`
              absolute top-1/4 left-1/4 w-80 h-80 
              bg-gradient-to-r from-white/5 via-white/10 to-white/5 
              rounded-full blur-3xl
              transition-all duration-1000 ease-out
              ${menuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
            style={{ transitionDelay: "0.2s" }}
          />
          <div
            className={`
              absolute bottom-1/3 right-1/4 w-64 h-64 
              bg-gradient-to-l from-white/3 via-white/8 to-white/3 
              rounded-full blur-2xl
              transition-all duration-1000 ease-out
              ${menuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
            style={{ transitionDelay: "0.4s" }}
          />
          <div
            className={`
              absolute top-3/4 left-1/2 -translate-x-1/2 w-40 h-40 
              bg-gradient-to-t from-white/2 via-white/6 to-white/2 
              rounded-full blur-xl
              transition-all duration-1000 ease-out
              ${menuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
            style={{ transitionDelay: "0.6s" }}
          />
        </div>

        {/* Menu Items */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-12">
          {navLinks.map((link, index) => (
            <a
              key={`mobile-${link.href}`}
              href={link.href}
              className="
                text-white text-3xl font-extralight tracking-[0.3em] uppercase
                transition-all duration-500 ease-out
                hover:text-white/60 hover:tracking-[0.4em] hover:scale-110
                transform relative group
                before:content-[''] before:absolute before:inset-x-0 before:bottom-[-8px]
                before:h-px before:bg-gradient-to-r before:from-transparent 
                before:via-white/40 before:to-transparent
                before:scale-x-0 before:transition-transform before:duration-500
                hover:before:scale-x-100
              "
              onClick={handleLinkClick}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen
                  ? "translateY(0) scale(1)"
                  : "translateY(30px) scale(0.9)",
                transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${
                  index * 150 + 300
                }ms`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease-out 0.8s",
          }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="flex gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-white/20"
                style={{
                  animationDelay: `${i * 200}ms`,
                  animation: menuOpen
                    ? "pulse 2s ease-in-out infinite"
                    : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
