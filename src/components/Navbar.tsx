"use client";

import { useEffect, useState } from "react";
import { navLinks, personal } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter((section): section is HTMLElement => section instanceof HTMLElement);
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom > 180;
      });
      setActive(current ? `#${current.id}` : "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="masthead" aria-label="Primary navigation">
        <a href="#top" className="monogram" aria-label={`${personal.name} home`}>
          SD<span>.</span>
        </a>

        <ul className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={active === link.href ? "is-active" : ""}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="masthead-actions">
          <a href={personal.resumeHref} target="_blank" rel="noopener noreferrer" className="resume-link">
            Resume <span aria-hidden="true">↗</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="menu-toggle"
          >
            <span className="sr-only">Menu</span>
            <span className={open ? "menu-bars open" : "menu-bars"} aria-hidden="true">
              <i /><i /><i />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className={active === link.href ? "is-active" : ""}>
                  {link.label}
                </a>
              </li>
            ))}
            <li><a href={personal.resumeHref} target="_blank" rel="noopener noreferrer" className="mobile-resume">Resume ↗</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
