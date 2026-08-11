"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    setActiveSection(id.replace("#", ""));
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => handleNavClick("#home")}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">NP</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}

                {isActive && <span className="nav-active-dot" />}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="navbar-cta"
          onClick={() => handleNavClick("#contact")}
        >
          <span>Hire Me</span>
          <span className="cta-arrow">↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${mobileOpen ? "mobile-menu-active" : ""
            }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileOpen ? "mobile-nav-open" : ""}`}>
        <div className="mobile-nav-inner">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""
                  }`}
                style={{
                  transitionDelay: mobileOpen
                    ? `${index * 60}ms`
                    : "0ms",
                }}
                onClick={() => handleNavClick(item.href)}
              >
                <span className="mobile-nav-number">
                  0{index + 1}
                </span>

                <span>{item.name}</span>

                <span className="mobile-nav-arrow">↗</span>
              </a>
            );
          })}

          <a
            href="#contact"
            className="mobile-cta"
            onClick={() => handleNavClick("#contact")}
          >
            Let's Work Together
            <span>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}