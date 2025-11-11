// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const links = ["Projects", "Services", "About", "Contacts"];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Scroll helper that retries until the element appears (useful when navigating to "/"
   * and letting React render sections).
   */
  const scrollToIdWithRetry = (id: string, attempts = 10, interval = 100) => {
    let tries = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        tries += 1;
        if (tries < attempts) {
          setTimeout(tryScroll, interval);
        } else {
          // last fallback: scroll to top if not found
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };
    tryScroll();
  };

  /**
   * Called when a navbar link is clicked.
   * If we're not on the home page, navigate to "/" first, then attempt to scroll.
   */
  const handleScrollTo = (id: string) => {
    // Close mobile menu right away
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // navigate to home then try to scroll (sections render after route change)
      navigate("/", { replace: false });
      // small delay then retry scroll helper (helper itself retries internally)
      setTimeout(() => scrollToIdWithRetry(id), 50);
    } else {
      scrollToIdWithRetry(id);
    }
  };

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/30 shadow-md rounded-full" : "bg-transparent"
      }`}
    >
      <div className="flex items-center w-[90%] max-w-6xl px-6 py-4 space-x-10 md:justify-start justify-between">

        {/* Logo */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => {
            // navigate to root and scroll to top/hero
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((s) => !s)}
          className="md:hidden text-white hover:text-gold transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-4 w-48 bg-black/70 backdrop-blur-lg rounded-2xl shadow-lg md:hidden">
            <ul className="flex flex-col p-4 space-y-3 text-sm font-neue">
              {links.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => handleScrollTo(link.toLowerCase())}
                    className="block text-white hover:text-gold transition-colors w-full text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
