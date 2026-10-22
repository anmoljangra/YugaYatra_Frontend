"use client";

import Image from "next/image";
import { Award, ShieldCheck, Calendar, ArrowUpRight } from "lucide-react";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="section-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="eyebrow mb-3">— Milestones &amp; Recognition —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Achievements &amp; Registrations
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Our timeline of official government recognitions, legal compliance, and operational
            milestones that build trust with our students, partners, and clients.
          </p>
        </div>

        {/* 6 Achievements Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-[#f8f9fb] border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gold/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                    <Calendar size={12} className="text-gold" />
                    {item.date}
                  </span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[0.68rem] text-slate-400 font-semibold uppercase tracking-wider">
                  Government Record
                </span>
                <a
                  href="#trust"
                  className="inline-flex items-center gap-1 text-xs font-bold text-gold-dark hover:text-gold transition-colors"
                >
                  View in Trust Center <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
