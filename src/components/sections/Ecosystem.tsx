"use client";

import Image from "next/image";
import { Layers, CheckCircle2, ArrowRight } from "lucide-react";

interface EcosystemProps {
  onOpenApplyModal: () => void;
}

export function Ecosystem({ onOpenApplyModal }: EcosystemProps) {
  const pillars = [
    {
      step: "01",
      title: "Digital Product Development",
      description:
        "We design, build, and operate real digital platforms — from SaaS to marketplaces — serving users across India and beyond.",
      image: "/assets/ecosystem/product-dev.png",
      stat: "20+ Projects Delivered",
      features: [
        "8 live production platforms",
        "Full-stack modern technology",
        "Products across 6+ industries",
      ],
    },
    {
      step: "02",
      title: "Internship Programs",
      description:
        "Structured 2–3 month programs where students work on live products with dedicated mentors, code reviews, and real deadlines.",
      image: "/assets/ecosystem/internship-programs.png",
      stat: "500+ Students Trained",
      features: [
        "Live project exposure",
        "Weekly 1:1 mentorship",
        "Certificate + LinkedIn recommendation",
      ],
    },
    {
      step: "03",
      title: "Career Growth & Mentorship",
      description:
        "Beyond the internship — portfolio building, interview preparation, and an alumni network that opens doors to real opportunities.",
      image: "/assets/ecosystem/career-growth.png",
      stat: "98% Satisfaction Rate",
      features: [
        "Portfolio-ready project work",
        "Interview & career guidance",
        "800+ strong alumni network",
      ],
    },
  ];

  return (
    <section id="ecosystem" className="section-full bg-[#f8f9fb] py-16 lg:py-24 border-b border-slate-200/60">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="eyebrow mb-3">— Core Ecosystem —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Three Pillars. One Professional Ecosystem.
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Internships are one part of a much larger system — real products, structured training, and
            long-term career growth reinforce each other.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0a0a0a]/80 backdrop-blur-md text-gold px-3 py-1 rounded-full text-xs font-mono font-bold">
                  {pillar.step}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow">
                  {pillar.stat}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display font-semibold text-xl text-slate-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="text-emerald-600 shrink-0 w-4 h-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenApplyModal}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gold-dark hover:text-gold transition-colors"
                  >
                    Learn more about this pillar <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
