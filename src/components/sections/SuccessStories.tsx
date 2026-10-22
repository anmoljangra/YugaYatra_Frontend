"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

export function SuccessStories() {
  const interns = [
    {
      name: "Praveen Gupta",
      tag: "Star Intern - 2026",
      role: "Frontend & Full Stack Intern",
      image: "/assets/team/praveen-gupta.png",
      quote:
        "At YugaYatra, I didn't just build websites; I built problem-solving skills, technical expertise, and the confidence to create meaningful digital experiences.",
    },
    {
      name: "Tanish Kumar Sahu",
      tag: "Star Intern - 2026",
      role: "Software Engineering Intern",
      image: "/assets/team/tanish-sahu.jpg",
      quote:
        "YugaYatra transformed my perspective on development, showing me that the true value of technology lies not in the code we write, but in the impact we create.",
    },
    {
      name: "Joydip Maiti",
      tag: "Star Intern - 2026",
      role: "Web & Systems Intern",
      image: "/assets/team/joydip-maiti.jpg",
      quote:
        "Working with real production codebases taught me agile practices, code reviews, and architectural patterns that university lectures simply couldn't cover.",
    },
    {
      name: "Rudra Miyani",
      tag: "Star Intern - 2026",
      role: "Full Stack Developer Intern",
      image: "/assets/team/rudra-miyani.jpg",
      quote:
        "Shipping features used by live users each week gave me the practical knowledge and real credibility needed for competitive industry roles.",
    },
  ];

  return (
    <section id="success" className="section-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="eyebrow mb-3">— Current Cohort —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Meet Our Star Interns
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Real students. Real codebases. Real impact. Meet the talented minds currently building
            production-grade platforms.
          </p>
        </div>

        {/* 4 Intern Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interns.map((intern) => (
            <div
              key={intern.name}
              className="bg-[#f8f9fb] border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/40 shadow-md">
                  <Image
                    src={intern.image}
                    alt={intern.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-center mb-4">
                  <span className="inline-flex items-center gap-1 text-[0.62rem] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2.5 py-0.5 rounded-full mb-1">
                    <Star size={10} className="fill-current" /> {intern.tag}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-slate-900 leading-snug">
                    {intern.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{intern.role}</p>
                </div>

                {/* Quote */}
                <div className="relative pt-2">
                  <Quote size={18} className="text-gold/40 mb-1" />
                  <p className="text-xs italic leading-relaxed text-slate-600">
                    &ldquo;{intern.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 text-center">
                <span className="text-[0.65rem] font-bold tracking-widest text-emerald-700 uppercase">
                  Verified Intern
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
