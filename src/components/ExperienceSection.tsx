import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';

interface ExperienceSectionProps {
  theme: 'matrix' | 'amber' | 'cyan' | 'red';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono hacker-glow-hover">
            WORK EXPERIENCE
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6 hacker-card">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80">
            <Briefcase className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm sm:text-base font-mono font-bold tracking-wider text-white">
              PROFESSIONAL EXPERIENCE
            </h3>
          </div>

          <div className="space-y-6">
            {SITE_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-4 font-mono hacker-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white hacker-glow-hover">
                      {exp.role}
                    </h4>
                    <div className="text-sm sm:text-base text-emerald-400 font-semibold mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 font-mono">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span className="text-emerald-400 font-mono mt-0.5">►</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
