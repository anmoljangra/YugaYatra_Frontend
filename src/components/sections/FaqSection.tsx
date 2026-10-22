"use client";

import { useState } from "react";
import { ChevronDown, Search, HelpCircle, Mail } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [openId, setOpenId] = useState<string | null>("1");

  const categories = ["All Questions", "Internships", "Company", "Projects"];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All Questions" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-full bg-[#f8f9fb] py-16 lg:py-24 border-b border-slate-200/60">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <p className="eyebrow mb-3">— Help &amp; Answers —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Everything you need to know about our internships, government registrations, product
            development process, and company details.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-2xl mx-auto mb-10 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g., stipend, certificate, remote, registered)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-slate-800 placeholder:text-slate-400 shadow-sm transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0a0a0a] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 bg-gold text-black" : ""
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
              <HelpCircle className="text-slate-400 w-10 h-10 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-800">No matching questions found</p>
              <p className="text-xs text-slate-500 mt-1">
                Try a different keyword or browse all categories.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Help Contact Strip */}
        <div className="mt-12 text-center max-w-xl mx-auto bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-semibold text-slate-900 text-sm">Have a different question?</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our team typically replies within 24 hours.
            </p>
          </div>
          <a
            href="mailto:ankitkumar991063@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold text-[#0a0a0a] text-xs font-semibold hover:bg-gold-light transition-colors shrink-0 shadow-sm"
          >
            <Mail size={14} /> Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
