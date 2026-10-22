"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenApplyModal: () => void;
}

export function Header({ onOpenApplyModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Internships", href: "#internships" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#news" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar for Desktop */}
      <div className="hidden lg:block bg-[#0a0a0a] text-white/80 text-xs border-b border-white/5">
        <div className="section-container flex items-center justify-between py-1.5">
          <span className="inline-flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="text-gold w-3.5 h-3.5" />
            MCA Registered · DPIIT Recognized · UDYAM (MSME) · GST · FSSAI · Trademark Filed
          </span>
          <a
            href="mailto:ankitkumar991063@gmail.com"
            className="hover:text-gold transition-colors text-slate-300 font-medium"
          >
            ankitkumar991063@gmail.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="section-container flex items-center justify-between h-16 lg:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <Image
            src="/assets/logo/YY_cropped.png"
            alt="AnkitKumar logo"
            width={56}
            height={56}
            className="h-12 lg:h-14 w-auto object-contain bg-white/90 p-0.5 rounded-full shadow-sm group-hover:scale-105 transition-transform"
            priority
          />
          <span className="block leading-tight">
            <span className="font-display font-bold text-base sm:text-lg block text-white tracking-wide">
              AnkitKumar™
            </span>
            <span className="text-[0.55rem] sm:text-[0.62rem] tracking-[0.14em] uppercase block text-slate-300 font-medium">
              Retail OPC Private Limited
            </span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, idx) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  idx === 0
                    ? "text-gold"
                    : "text-slate-200 hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={onOpenApplyModal}
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-gold text-[#0a0a0a] hover:bg-gold-light shadow-[0_4px_14px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 px-5 py-2.5 text-sm"
          >
            Apply for Internship
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-gold transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 border-b border-white/10 px-6 py-5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-200 hover:text-gold transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 font-semibold rounded-lg bg-gold text-[#0a0a0a] py-3 px-4 text-sm shadow-md"
              >
                Apply for Internship
                <ArrowRight size={16} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
