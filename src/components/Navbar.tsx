// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const links = ["Projects", "Services", "About", "Contacts"];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  /** Scroll listener to update scrolled state and auto-close menu */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  /** Retry scrolling to element until it exists */
  const scrollToIdWithRetry = (id: string, attempts = 10, interval = 100) => {
    let tries = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        tries += 1;
        if (tries < attempts) setTimeout(tryScroll, interval);
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    tryScroll();
  };

  /** Handle link click: navigate + scroll */
  const handleScrollTo = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => scrollToIdWithRetry(id), 50);
    } else {
      scrollToIdWithRetry(id);
    }
  };

  /** Mobile menu overlay as a portal */
  const MobileMenuOverlay = menuOpen
    ? createPortal(
        <div
          className={`fixed inset-0 z-[999] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center md:hidden
            transform transition-all duration-300 ease-in-out
            ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
          <ul className="flex flex-col space-y-8 text-2xl font-silk text-white w-3/4 mx-auto">
            {links.map((link, index) => (
              <li key={link} className="flex flex-col items-center w-full">
                <button
                  type="button"
                  onClick={() => handleScrollTo(link.toLowerCase())}
                  className="hover:text-gold transition-colors py-2 text-center w-full"
                >
                  {link}
                </button>
                {index !== links.length - 1 && (
                  <div className="h-px bg-gold/50 w-2/3 mt-2 mb-2"></div>
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gold"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-black/30 shadow-md rounded-full"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center w-[90%] max-w-6xl px-6 py-4 space-x-10 md:justify-start justify-between">
          {/* Logo */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMenuOpen(false);
              }
            }}
            className="text-4xl md:text-5xl font-silk italic tracking-tightest text-gold cursor-pointer select-none"
            aria-label="Home"
          >
            .M
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-lg font-silk">
            {links.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => handleScrollTo(link.toLowerCase())}
                  className="hover:text-xl hover:text-gold transition-all duration-300"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="md:hidden text-white hover:text-gold transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Render mobile menu overlay portal */}
      {MobileMenuOverlay}
    </>
  );
};

export default Navbar;
