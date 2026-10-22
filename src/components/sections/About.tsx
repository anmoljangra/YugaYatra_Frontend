"use client";

import Image from "next/image";
import { Users, GraduationCap, Laptop, Globe, CheckCircle2, ShieldCheck } from "lucide-react";

export function About() {
  const stats = [
    { label: "Students Trained", value: "500+", icon: GraduationCap },
    { label: "Alumni Network", value: "800+", icon: Users },
    { label: "Live Products", value: "8+", icon: Laptop },
    { label: "Countries Reached", value: "5+", icon: Globe },
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      desc: "YugaYatra Retail (OPC) Private Limited is incorporated in Bengaluru with a clear conviction — India's students deserve real industry experience, not just theory.",
    },
    {
      year: "2023",
      title: "Foundations of Trust",
      desc: "Within the first year we secured every credential a serious company should hold: MCA incorporation, Startup India (DPIIT) recognition, UDYAM, GST, and FSSAI registrations.",
    },
    {
      year: "2024",
      title: "Products & People",
      desc: "Our portfolio grew to 8 live digital platforms across EdTech, FoodTech, LegalTech and more — built alongside the interns we train, who ship real production code.",
    },
    {
      year: "Today",
      title: "A Growing Ecosystem",
      desc: "With 500+ students trained, 800+ alumni, and partners across 5+ countries, YugaYatra is a professional ecosystem connecting students, technology, and industry.",
    },
  ];

  return (
    <section id="about" className="section-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="eyebrow mb-3">— About YugaYatra —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            More Than an Internship Provider
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            YugaYatra is a digital innovation company, a product development studio, and a career
            acceleration organization — a professional ecosystem connecting students, technology, and
            industry.
          </p>
        </div>

        {/* Top Grid: Image + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
            <Image
              src="/assets/team/about-team.png"
              alt="YugaYatra Team working together"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold text-[#0a0a0a] mb-2 shadow-sm">
                  <ShieldCheck size={14} /> Registered &amp; Verified
                </span>
                <p className="text-sm font-medium text-slate-200">
                  Headquartered in Electronic City, Bengaluru — operating globally.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center hover:shadow-md hover:border-gold/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold-dark flex items-center justify-center mx-auto mb-3">
                    <Icon size={24} />
                  </div>
                  <span className="font-stats font-bold text-3xl lg:text-4xl text-[#0a0a0a] block">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mt-1">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-16 bg-[#f8f9fb] rounded-3xl p-8 lg:p-12 border border-slate-200/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
              Our Milestones
            </span>
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-[#0a0a0a]">
              Our Journey So Far
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.title}
                className="relative bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gold/10 text-gold-dark mb-3">
                  {m.year}
                </span>
                <h4 className="font-display font-semibold text-lg text-slate-900 mb-2">{m.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission and Vision 2-Column */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#162035] text-white p-8 lg:p-10 rounded-3xl border border-white/10 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-3">
              Our Purpose
            </span>
            <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To build innovative digital solutions that solve real problems, while creating a bridge for
              students to transition into capable, industry-ready professionals through hands-on mentorship
              and production project delivery.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-gold/30 p-8 lg:p-10 rounded-3xl shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-3">
              Our Future
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              To become India&apos;s most trusted launchpad for emerging tech talent — recognized globally for
              producing engineers, designers, and marketers who can build, launch, and scale real products
              from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
