"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Users,
  Briefcase,
  ArrowRight,
  Heart,
  UtensilsCrossed,
  House,
  ChefHat,
} from "lucide-react";

interface HeroProps {
  onOpenApplyModal: () => void;
}

export function Hero({ onOpenApplyModal }: HeroProps) {
  const liveProjects = [
    {
      name: "Rishtawaala",
      url: "https://rishtawaala.com",
      icon: Heart,
      color: "bg-rose-500/10 text-rose-400",
    },
    {
      name: "Freshin10",
      url: "https://freshin10-testing.vercel.app/",
      icon: UtensilsCrossed,
      color: "bg-orange-500/10 text-orange-400",
    },
    {
      name: "HomiePG",
      url: "https://homiepg.com",
      icon: House,
      color: "bg-blue-500/10 text-blue-400",
    },
    {
      name: "Babita's Kitchen",
      url: "https://babitas-kitchen.vercel.app/",
      icon: ChefHat,
      color: "bg-amber-500/10 text-amber-400",
    },
  ];

  const govBadges = [
    {
      label: "CIN",
      id: "U47912KA2024OPC188603",
      status: "Registered",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0 text-amber-700" fill="currentColor">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M50 20a6 6 0 0 0-6 6v14h12V26a6 6 0 0 0-6-6zm-8 20h16v18H42V40zm-4 4h3v14h-3V44zm22 0h3v14h-3V44z" />
          <rect x="34" y="58" width="32" height="6" rx="2" />
          <circle cx="50" cy="69" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="69" r="1.5" />
          <path d="M40 80h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "UDYAM (MSME)",
      id: "KR-03-0421327",
      status: "Certified",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0 text-blue-900" fill="currentColor">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="6,4" />
          <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50 32a4 4 0 0 0-4 4v16h8V36a4 4 0 0 0-4-4z" />
          <rect x="42" y="52" width="16" height="4" />
          <text x="50" y="72" fontSize="11" fontWeight="bold" textAnchor="middle" fill="currentColor">
            MSME
          </text>
        </svg>
      ),
    },
    {
      label: "GSTIN",
      id: "29AABCY8389C1ZT",
      status: "Active",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0" fill="currentColor">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#0f172a" strokeWidth="3" />
          <path d="M50 10 A40 40 0 0 1 90 50" fill="none" stroke="#ff9933" strokeWidth="4" strokeLinecap="round" />
          <path d="M90 50 A40 40 0 0 1 50 90" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 90 A40 40 0 0 1 10 50" fill="none" stroke="#128807" strokeWidth="4" strokeLinecap="round" />
          <path d="M10 50 A40 40 0 0 1 50 10" fill="none" stroke="#000080" strokeWidth="4" strokeLinecap="round" />
          <text x="50" y="56" fontSize="19" fontWeight="extrabold" textAnchor="middle" fill="#0f172a">
            GST
          </text>
        </svg>
      ),
    },
    {
      label: "DPIIT",
      id: "DIPP169780",
      status: "Recognized Startup",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0" fill="currentColor">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#0284c7" strokeWidth="3" />
          <path d="M30 70 L50 30 L70 70 L50 60 Z" fill="#ff9933" />
          <path d="M50 30 L70 70 L55 60 Z" fill="#128807" />
          <circle cx="50" cy="30" r="4" fill="#000080" />
          <path d="M25 75 Q50 65 75 75" fill="none" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
          <text x="50" y="90" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0f172a">
            STARTUP
          </text>
        </svg>
      ),
    },
    {
      label: "FSSAI",
      id: "21224007001166",
      status: "Registered",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0 text-emerald-600" fill="currentColor">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M50 24 C30 35 30 65 50 76 C70 65 70 35 50 24 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M50 76 V24" stroke="currentColor" strokeWidth="2" />
          <path d="M50 45 C40 50 40 60 50 65" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50 35 C60 40 60 50 50 55" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="25" y="70" width="50" height="12" rx="2" fill="currentColor" />
          <text x="50" y="79" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#ffffff">
            FSSAI
          </text>
        </svg>
      ),
    },
    {
      label: "Trademark",
      id: "6508313",
      status: "Filed",
      iconSvg: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0 text-indigo-900" fill="currentColor">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M30 30 V55 C30 70 50 82 50 82 C50 82 70 70 70 55 V30 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <text x="50" y="60" fontSize="22" fontWeight="bold" textAnchor="middle" fill="currentColor">
            TM
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section className="section-full bg-[#0a0a0a] bg-grid-dark relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-40 -right-40 w-[34rem] h-[34rem] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-56 -left-40 w-[30rem] h-[30rem] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="section-container relative pt-36 lg:pt-44 pb-8 lg:pb-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading & CTAs */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold mb-7">
            <ShieldCheck size={14} />
            Government-Registered · DPIIT Recognized Startup
          </span>

          <h1 className="font-display text-[2.6rem] sm:text-5xl xl:text-[3.75rem] font-semibold leading-[1.12] text-white">
            Building Digital Products.
            <br />
            <span className="text-gold-gradient">Creating Future Professionals.</span>
          </h1>

          <p className="mt-7 text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
            YugaYatra develops innovative digital solutions while empowering students through
            practical internships, mentorship, and real-world project experience.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={onOpenApplyModal}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-gold text-[#0a0a0a] hover:bg-gold-light shadow-[0_4px_14px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 px-8 py-4 text-base"
            >
              Apply for Internship
              <ArrowRight size={18} />
            </button>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap border-2 border-white/40 text-white hover:border-gold hover:text-gold px-8 py-4 text-base"
            >
              Explore Projects
            </a>
          </div>

          {/* Highlights List */}
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <li className="flex items-center gap-2 text-xs lg:text-sm font-medium text-slate-300">
              <ShieldCheck className="text-gold shrink-0 w-4 h-4" />
              <span>Registered Company</span>
            </li>
            <li className="flex items-center gap-2 text-xs lg:text-sm font-medium text-slate-300">
              <Award className="text-gold shrink-0 w-4 h-4" />
              <span>Government Registrations &amp; Certifications</span>
            </li>
            <li className="flex items-center gap-2 text-xs lg:text-sm font-medium text-slate-300">
              <Users className="text-gold shrink-0 w-4 h-4" />
              <span>Industry Mentorship</span>
            </li>
            <li className="flex items-center gap-2 text-xs lg:text-sm font-medium text-slate-300">
              <Briefcase className="text-gold shrink-0 w-4 h-4" />
              <span>Real Projects Real Impact</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Hero Media Card & Live Projects */}
        <div className="relative w-full">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
              <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px]">
                <Image
                  src="/assets/team/hero-team.png"
                  alt="YugaYatra Team collaborating"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Stats Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-[#0a0a0a]/85 backdrop-blur-md border-t border-white/10 px-4 py-4 grid grid-cols-3 divide-x divide-white/10 text-center">
                <div>
                  <span className="font-stats font-bold text-gold text-lg lg:text-xl block">8+</span>
                  <span className="text-[0.6rem] uppercase tracking-wider text-slate-400 block mt-0.5">
                    Live Products
                  </span>
                </div>
                <div>
                  <span className="font-stats font-bold text-gold text-lg lg:text-xl block">500+</span>
                  <span className="text-[0.6rem] uppercase tracking-wider text-slate-400 block mt-0.5">
                    Students Trained
                  </span>
                </div>
                <div>
                  <span className="font-stats font-bold text-gold text-lg lg:text-xl block">20+</span>
                  <span className="text-[0.6rem] uppercase tracking-wider text-slate-400 block mt-0.5">
                    Projects Delivered
                  </span>
                </div>
              </div>
            </div>

            {/* Live Projects Quick Strip */}
            <div className="mt-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-px bg-gold/20 flex-1" />
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Our Live Projects
                </span>
                <span className="h-px bg-gold/20 flex-1" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {liveProjects.map((p) => {
                  const Icon = p.icon;
                  return (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] p-2 transition-all text-[0.72rem] font-semibold text-slate-200 group"
                    >
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${p.color}`}>
                        <Icon size={12} />
                      </span>
                      <span className="truncate group-hover:text-gold transition-colors">{p.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Six Registration Badges Bar */}
      <div className="w-full bg-slate-50/95 border-t border-slate-200/80 py-7">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {govBadges.map((badge) => (
              <div
                key={badge.label}
                className="bg-white rounded-2xl border border-slate-200/70 p-4 flex items-center gap-3.5 shadow-sm hover:shadow-md hover:border-gold/40 hover:-translate-y-0.5 transition-all duration-300 min-w-0"
              >
                <div className="shrink-0">{badge.iconSvg}</div>
                <div className="min-w-0 flex-1">
                  <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider block leading-none">
                    {badge.label}
                  </span>
                  <span className="text-[0.72rem] font-bold text-slate-800 block mt-1 font-mono tracking-tight leading-tight break-all">
                    {badge.id}
                  </span>
                  <span className="inline-flex items-center text-[0.58rem] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded mt-1.5 leading-none">
                    {badge.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
