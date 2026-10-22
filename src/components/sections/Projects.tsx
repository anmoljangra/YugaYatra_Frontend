"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Tag } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProjects =
    activeCategory === "All Products"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <p className="eyebrow mb-3">— Live Portfolio —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Real Products. Live in the Market.
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            We don&apos;t build disposable student exercises. Every product below is a production system
            with real users, real uptime requirements, and real business value.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-gold text-[#0a0a0a] shadow-md shadow-gold/20 scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Screenshot */}
                <div className="relative w-full h-64 bg-slate-100 overflow-hidden border-b border-slate-100 group">
                  <Image
                    src={project.screenshot}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0a0a0a]/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gold">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display font-bold text-2xl text-slate-900">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-100 hover:bg-gold hover:text-black transition-colors shrink-0 text-slate-600"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <p className="text-xs font-medium text-gold-dark mb-3 uppercase tracking-wider">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[0.65rem] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom footer bar with direct link */}
              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 truncate max-w-[200px]">
                  {project.domain}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-gold-dark transition-colors"
                >
                  Visit Live Product <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
