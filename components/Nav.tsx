"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/919461911119?text=Hi%20Kosha%20Life!%20I%27d%20like%20to%20know%20more%20about%20your%20products.";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2C1A0E]/95 backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/brand-logo.png"
            alt="Kosha Life"
            width={48}
            height={48}
            className="rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
            style={{ width: 48, height: 48 }}
          />
          <span
            className="font-sans text-[9px] tracking-[0.35em] uppercase hidden sm:block"
            style={{ color: "#F2E8D5", opacity: 0.75 }}
          >
            Kosha Life
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {["Collection", "Ritual", "Story"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
              style={{ color: "#F2E8D5" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 border text-xs tracking-[0.15em] uppercase font-sans transition-all duration-300 hover:bg-gold hover:border-gold"
          style={{
            color: "#C4943A",
            borderColor: "#C4943A",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#2C1A0E";
            (e.currentTarget as HTMLElement).style.backgroundColor = "#C4943A";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#C4943A";
            (e.currentTarget as HTMLElement).style.backgroundColor =
              "transparent";
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Shop Now
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-px transition-all duration-300"
              style={{ backgroundColor: "#F2E8D5" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-5"
          style={{ backgroundColor: "#2C1A0E" }}
        >
          {["Collection", "Ritual", "Story"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans text-xs tracking-[0.2em] uppercase"
              style={{ color: "#F2E8D5" }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.15em] uppercase mt-2"
            style={{ color: "#C4943A" }}
          >
            Shop via WhatsApp →
          </a>
        </div>
      )}
    </nav>
  );
}
