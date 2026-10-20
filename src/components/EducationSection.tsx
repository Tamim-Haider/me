import React from 'react';
import { GraduationCap, Award, Languages, ExternalLink, Calendar } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';

interface EducationSectionProps {
  theme: 'matrix' | 'amber' | 'cyan' | 'red';
}

export const EducationSection: React.FC<EducationSectionProps> = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono hacker-glow-hover">
            EDUCATION & CERTIFICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-5 hacker-card">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm sm:text-base font-mono font-bold tracking-wider text-white">
                EDUCATION
              </h3>
            </div>

            <div className="space-y-4 font-mono">
              {SITE_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 transition-all space-y-2 hacker-card"
                >
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="text-white font-bold text-base sm:text-lg hacker-glow-hover">{edu.degree}</div>
                  <div className="text-slate-300 text-sm">{edu.institution}</div>
                  {edu.details && (
                    <div className="text-sm font-semibold text-emerald-400">
                      {edu.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Licenses */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-5 hacker-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80 mb-5">
                <Award className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm sm:text-base font-mono font-bold tracking-wider text-white">
                  CERTIFICATIONS & LICENSES
                </h3>
              </div>

              <div className="space-y-4 font-mono">
                {SITE_DATA.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 transition-all space-y-1.5 hacker-card"
                  >
                    <div className="text-white font-bold text-base sm:text-lg hacker-glow-hover">{cert.title}</div>
                    <div className="text-slate-300 text-sm">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={SITE_DATA.personal.certificatesUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 px-5 py-3 rounded-lg text-sm sm:text-base font-mono font-bold transition-all flex items-center justify-center gap-2.5 bg-slate-900/80 text-white border border-slate-700 shadow-lg hacker-btn"
            >
              <span>View All Certificates</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Languages */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-5 hacker-card">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80">
              <Languages className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm sm:text-base font-mono font-bold tracking-wider text-white">
                LANGUAGES
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 font-mono">
              {SITE_DATA.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 transition-all space-y-1 hacker-card"
                >
                  <div className="text-white font-bold text-base hacker-glow-hover">{lang.name}</div>
                  <div className="text-sm text-emerald-400 font-semibold">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
