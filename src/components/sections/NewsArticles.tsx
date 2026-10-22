"use client";

import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

export function NewsArticles() {
  return (
    <section id="news" className="section-full bg-[#f8f9fb] py-16 lg:py-24 border-b border-slate-200/60">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <p className="eyebrow mb-3">— Insights &amp; Updates —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Latest Articles &amp; Insights
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Read stories from our interns, engineering deep-dives, marketing playbooks, and company
            announcements directly from the YugaYatra team.
          </p>
        </div>

        {/* 6 Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0a0a0a]/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gold">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} /> {article.date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-slate-900 group-hover:text-gold-dark transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-gold-dark transition-colors cursor-pointer">
                  Read Full Article <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
