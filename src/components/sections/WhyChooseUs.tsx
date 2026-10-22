"use client";

import { Check, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    {
      num: "01",
      title: "Real Projects, Not Mock Work",
      desc: "Interns contribute to the same 8 live platforms our clients and users depend on — code that actually ships.",
      metric: "8+ live platforms you can work on",
    },
    {
      num: "02",
      title: "Dedicated Mentorship",
      desc: "Weekly 1:1 sessions, code reviews, and pair programming with engineers who have shipped production systems.",
      metric: "1:1 weekly mentor sessions",
    },
    {
      num: "03",
      title: "Portfolio That Opens Doors",
      desc: "Finish with deployed projects, a LinkedIn recommendation, and verifiable experience you can explain in interviews.",
      metric: "100% verifiable portfolio projects",
    },
    {
      num: "04",
      title: "Production Infrastructure",
      desc: "Gain hands-on experience with paid AWS, Supabase, Google Cloud, and AI engineering workflows.",
      metric: "Enterprise paid cloud stacks",
    },
    {
      num: "05",
      title: "Legally Registered Company",
      desc: "Recognized by DPIIT, MCA, MSME, and FSSAI — real legal status you can present with pride on your resume.",
      metric: "6 official government credentials",
    },
    {
      num: "06",
      title: "Alumni Network That Delivers",
      desc: "Connect with hundreds of graduates working across product startups, tech firms, and digital agencies.",
      metric: "800+ active alumni network",
    },
  ];

  return (
    <section id="why" className="section-full bg-[#f8f9fb] py-16 lg:py-24 border-b border-slate-200/60">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="eyebrow mb-3">— Why Students Choose YugaYatra —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Measurable Value, Not Empty Promises
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Every claim below is backed by a number we can stand behind. This is what separates a real
            internship from a certificate mill.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => (
            <div
              key={p.num}
              className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-gold-dark bg-gold/10 px-2.5 py-1 rounded-md inline-block mb-4">
                  {p.num}
                </span>
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-2.5">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">{p.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{p.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
