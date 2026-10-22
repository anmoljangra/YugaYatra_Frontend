"use client";

import Image from "next/image";
import { Server, Sparkles, CheckCircle2 } from "lucide-react";

export function Infrastructure() {
  const cloudPlatforms = [
    {
      name: "Amazon Web Services (AWS)",
      tier: "PAID ENTERPRISE TIER",
      desc: "Production hosting, S3 cloud storage, and high-deliverability Amazon SES for transaction notifications.",
      logo: "/assets/Platform-logos/AWS-logo.avif",
    },
    {
      name: "Supabase (Paid Tier)",
      tier: "PRO DATABASE",
      desc: "Production-grade PostgreSQL databases, real-time database listener channels, and secure user Auth.",
      logo: "/assets/Platform-logos/Supabase-logo.png",
    },
    {
      name: "Google Cloud Platform",
      tier: "CLOUD RUN & CDN",
      desc: "Microservices container deployment on Cloud Run, automated scaling, and global low-latency delivery.",
      logo: "/assets/Platform-logos/GCP-logo.png",
    },
    {
      name: "Razorpay & DigiLocker",
      tier: "PRODUCTION APIS",
      desc: "Compliant instant payment collections, webhook settlements, and automated Aadhaar e-KYC verification.",
      logo: "/assets/certificates/Razorpay.jpeg",
    },
  ];

  const aiStack = [
    {
      name: "Google Antigravity",
      role: "Agentic Coding Engine",
      logo: "/assets/Platform-logos/Antigravity-logo.jpeg",
    },
    {
      name: "Cursor AI",
      role: "AI-First IDE",
      logo: "/assets/Platform-logos/Cursor_logo.png",
    },
    {
      name: "Anthropic Claude",
      role: "Architecture & Logic",
      logo: "/assets/Platform-logos/Anthropic-logo.jpg",
    },
    {
      name: "OpenAI ChatGPT",
      role: "Prototyping & Tests",
      logo: "/assets/Platform-logos/Chatgpt-logo.jpeg",
    },
    {
      name: "Google Gemini Advanced",
      role: "Multimodal Analysis",
      logo: "/assets/Platform-logos/GeminiAdvanced logo.webp",
    },
  ];

  return (
    <section id="infrastructure" className="section-full bg-[#0a0a0a] text-white py-16 lg:py-24 border-b border-white/10 relative overflow-hidden">
      <div className="section-container relative">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="eyebrow mb-3 text-gold">— Our Technology &amp; Tooling —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-white">
            Powering Products with Paid Infrastructure
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-300">
            We don&apos;t rely on free tiers or compromised setups. Our teams build on official paid cloud
            resources and cutting-edge AI development tools.
          </p>
        </div>

        {/* Cloud Infrastructure Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Server className="text-gold w-5 h-5" />
            <h3 className="font-display text-xl font-semibold text-white">
              Cloud Infrastructure &amp; APIs
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-gold/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-12 h-12 mb-4 rounded-xl overflow-hidden bg-white p-1">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="inline-block text-[0.62rem] font-bold text-gold bg-gold/10 px-2 py-0.5 rounded tracking-wider mb-2">
                    {platform.tier}
                  </span>
                  <h4 className="font-semibold text-base text-white mb-2">{platform.name}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{platform.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Powered Development Stack */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-gold w-5 h-5" />
            <h3 className="font-display text-xl font-semibold text-white">
              AI-Powered Development Stack
            </h3>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mb-8 leading-relaxed">
            Our interns are trained on industry-standard AI tooling from day one — learning to multiply
            their engineering productivity with agentic workflows.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {aiStack.map((tool) => (
              <div
                key={tool.name}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-center hover:border-gold/30 hover:bg-white/[0.06] transition-all flex flex-col items-center"
              >
                <div className="relative w-12 h-12 mb-3 rounded-xl overflow-hidden bg-white p-1 shadow-sm">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <h5 className="font-semibold text-white text-xs mb-1 truncate w-full">{tool.name}</h5>
                <span className="text-[0.65rem] text-slate-400 uppercase tracking-wider block">
                  {tool.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
