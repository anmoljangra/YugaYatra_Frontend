"use client";

import Image from "next/image";
import { Quote, Sparkles, Shield, Rocket } from "lucide-react";

export function Founder() {
  const leadershipPoints = [
    {
      title: "Leadership Philosophy",
      icon: Sparkles,
      desc: "Lead by building. Every intern at YugaYatra works on something real because confidence comes from shipping, not from certificates alone.",
    },
    {
      title: "On Trust",
      icon: Shield,
      desc: "A company asking for a student's time must first prove its own legitimacy. That is why every registration we hold is public on this website.",
    },
    {
      title: "The Mission Ahead",
      icon: Rocket,
      desc: "To make YugaYatra the bridge every ambitious student crosses between education and a meaningful career in technology.",
    },
  ];

  return (
    <section id="founder" className="section-full bg-[#0a0a0a] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <p className="eyebrow mb-3 text-gold">— Founder &amp; Leadership —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-white">
            Leadership With a Builder&apos;s Mindset
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Founder Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-white/5">
              <Image
                src="/assets/founder/debashish-kumar.png"
                alt="Debashish Kumar - CEO & Director"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-5 text-center">
              <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                Debashish Kumar
              </h3>
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-1">
                CEO &amp; Director
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                YugaYatra Retail (OPC) Private Limited
              </p>
            </div>
          </div>

          {/* Quote & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quote block */}
            <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm mb-8">
              <Quote className="text-gold/40 w-10 h-10 mb-2" />
              <p className="font-display italic text-lg sm:text-xl text-slate-100 leading-relaxed">
                &ldquo;We started YugaYatra with a simple belief — students don&apos;t need more theory,
                they need a seat at the table where real products are built. Every platform we ship and
                every intern we mentor moves us closer to that vision.&rdquo;
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gold">
                — Debashish Kumar, CEO &amp; Director
              </p>
            </div>

            {/* 3 Principles */}
            <div className="grid sm:grid-cols-3 gap-4">
              {leadershipPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white/[0.02] border border-white/10 rounded-xl p-4 hover:border-gold/30 transition-colors"
                  >
                    <Icon className="text-gold w-5 h-5 mb-2" />
                    <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
