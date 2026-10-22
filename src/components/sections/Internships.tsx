"use client";

import {
  Monitor,
  CodeXml,
  Smartphone,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { internships } from "@/data/internships";

interface InternshipsProps {
  onOpenApplyModal: (trackId?: string) => void;
}

export function Internships({ onOpenApplyModal }: InternshipsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor":
        return Monitor;
      case "CodeXml":
        return CodeXml;
      case "Smartphone":
        return Smartphone;
      case "TrendingUp":
        return TrendingUp;
      default:
        return Monitor;
    }
  };

  return (
    <section id="internships" className="section-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="eyebrow mb-3">— Internship Programs —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Structured Programs. Real Outcomes.
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Work directly on production-grade codebases, receive dedicated senior mentorship, and build a
            verifiable portfolio that proves your technical capability.
          </p>
        </div>

        {/* 4 Internship Tracks */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {internships.map((track) => {
            const Icon = getIcon(track.icon);
            return (
              <div
                key={track.id}
                className="bg-[#f8f9fb] border border-slate-200/90 rounded-3xl p-7 lg:p-9 shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-gold-dark p-3">
                      <Icon size={26} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm">
                      <Clock size={13} className="text-gold" />
                      {track.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                    {track.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="mb-6">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Technologies &amp; Skills
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {track.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium bg-white text-slate-700 px-3 py-1 rounded-lg border border-slate-200/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Program Features */}
                  <div className="mb-6">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Program Highlights
                    </p>
                    <ul className="space-y-2">
                      {track.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcome & CTA */}
                <div className="pt-6 border-t border-slate-200/80">
                  <div className="bg-white rounded-xl p-3 border border-slate-200/70 mb-5 flex items-center gap-2">
                    <Sparkles size={16} className="text-gold shrink-0" />
                    <span className="text-xs text-slate-700 font-medium">
                      <strong className="text-slate-900">Outcome:</strong> {track.outcome}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenApplyModal(track.id)}
                    className="w-full inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-gold text-[#0a0a0a] hover:bg-gold-light py-3 px-4 text-sm shadow-[0_4px_14px_rgba(212,175,55,0.3)] transition-all"
                  >
                    Apply for {track.title}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
