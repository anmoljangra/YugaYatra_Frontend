"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 pt-16 pb-12">
      <div className="section-container">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/logo/YY_cropped.png"
                alt="AnkitKumar logo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain bg-white/90 p-0.5 rounded-full shadow-sm"
              />
              <span className="block leading-tight">
                <span className="font-display font-bold text-lg block text-white tracking-wide">
                  AnkitKumar™
                </span>
                <span className="text-[0.62rem] tracking-[0.14em] uppercase block text-slate-400 font-medium">
                  Retail OPC Private Limited
                </span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Building high-impact digital products while empowering India&apos;s next generation of
              engineers and creators through practical, production-level internships.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                <span>Electronic City, Phase 1, Bengaluru, Karnataka, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-gold shrink-0" />
                <a
                  href="mailto:ankitkumar991063@gmail.com"
                  className="hover:text-gold transition-colors text-slate-300"
                >
                  ankitkumar991063@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Live Projects
                </a>
              </li>
              <li>
                <a href="#internships" className="hover:text-white transition-colors">
                  Internships
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors">
                  Insights &amp; Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Live Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-4">
              Live Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="https://rishtawaala.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Rishtawaala.com
                </a>
              </li>
              <li>
                <a
                  href="https://freshin10-testing.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Freshin10
                </a>
              </li>
              <li>
                <a
                  href="https://homiepg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  HomiePG.com
                </a>
              </li>
              <li>
                <a
                  href="https://babitas-kitchen.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Babita&apos;s Kitchen
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-4">
              Trust &amp; Compliance
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#trust" className="hover:text-white transition-colors">
                  MCA CIN: U47912KA2024OPC188603
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">
                  DPIIT: DIPP169780
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">
                  UDYAM: KR-03-0421327
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">
                  GSTIN: 29AABCY8389C1ZT
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">
                  FSSAI: 21224007001166
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">
                  Trademark Filed: 6508313
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} YugaYatra Retail (OPC) Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with passion &amp; purpose in</span>
            <span className="text-gold font-medium">Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
