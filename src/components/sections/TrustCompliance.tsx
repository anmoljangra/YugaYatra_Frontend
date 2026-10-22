"use client";

import Image from "next/image";
import { ShieldCheck, Eye, BadgeCheck } from "lucide-react";
import { certificates } from "@/data/achievements";

interface TrustComplianceProps {
  onSelectCertificate: (cert: (typeof certificates)[0]) => void;
}

export function TrustCompliance({ onSelectCertificate }: TrustComplianceProps) {
  const complianceBadges = [
    "MCA Registered",
    "DPIIT Recognized",
    "MSME Registered",
    "GST Registered",
    "FSSAI Registered",
    "Trademark Filed",
  ];

  return (
    <section id="trust" className="section-full bg-[#f8f9fb] py-12 lg:py-20 border-b border-slate-200/60">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 lg:mb-14 text-center mx-auto">
          <p className="eyebrow mb-4">— Trust &amp; Compliance Center —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            A Registered &amp; Verified Company
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Every credential below is a real, verifiable government registration. We believe trust is earned
            through transparency — review our official documents anytime.
          </p>
        </div>

        {/* Trust Ribbon */}
        <div className="trust-ribbon rounded-2xl px-6 sm:px-10 py-7 mb-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 shadow-lg">
          <div className="flex items-center gap-4 shrink-0">
            <span className="w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center">
              <ShieldCheck className="text-gold w-7 h-7" />
            </span>
            <div>
              <p className="text-white font-display font-semibold text-lg leading-snug">
                Registered &amp; Verified
              </p>
              <p className="text-slate-400 text-xs">YugaYatra Retail (OPC) Private Limited</p>
            </div>
          </div>

          <div className="flex-1 flex flex-wrap justify-center lg:justify-end gap-2.5">
            {complianceBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-gold/15 text-gold border border-gold/30"
              >
                <BadgeCheck size={14} />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 6 Certificate Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="certificate-card bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => onSelectCertificate(cert)}
                className="relative block w-full h-52 overflow-hidden bg-slate-100 group cursor-pointer text-left"
                aria-label={`Preview ${cert.title} certificate`}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-xs font-semibold text-[#0a0a0a] shadow-lg">
                    <Eye size={14} /> View Certificate
                  </span>
                </span>
              </button>

              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm leading-snug">{cert.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{cert.authority}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded text-xs font-semibold shrink-0 mt-0.5">
                  <BadgeCheck size={13} />
                  {cert.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
