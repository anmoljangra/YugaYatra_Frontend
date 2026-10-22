"use client";

import {
  Globe,
  BarChart2,
  Brain,
  Smartphone,
  Cloud,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";

interface ServicesProps {
  onOpenApplyModal: () => void;
}

export function Services({ onOpenApplyModal }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "BarChart2":
        return BarChart2;
      case "Brain":
        return Brain;
      case "Smartphone":
        return Smartphone;
      case "Cloud":
        return Cloud;
      case "Rocket":
        return Rocket;
      default:
        return Globe;
    }
  };

  return (
    <section id="services" className="section-full bg-[#f8f9fb] py-16 lg:py-24 border-b border-slate-200/60">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="eyebrow mb-3">— Professional Solutions —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Services We Offer
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Beyond our educational initiatives, we partner with enterprises and startups to deliver
            high-impact digital products, cloud architecture, and marketing systems.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] text-gold flex items-center justify-center mb-6 shadow-md">
                    <Icon size={26} />
                  </div>

                  <h3 className="font-display font-semibold text-xl text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <a
                    href="mailto:ankitkumar991063@gmail.com?subject=Service%20Inquiry%20-%20"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-gold-dark transition-colors"
                  >
                    Inquire about {service.title} <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
