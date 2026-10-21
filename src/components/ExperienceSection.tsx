import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, Award, Eye, X, Image as ImageIcon } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';
import { playBlip, playKeyClick } from '../utils/audio';

interface ExperienceSectionProps {
  theme?: 'matrix' | 'amber' | 'cyan' | 'red';
}

interface ModalCertificate {
  title: string;
  company: string;
  period?: string;
  image: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  const [activeCertModal, setActiveCertModal] = useState<ModalCertificate | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCertModal(null);
    };

    if (activeCertModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeCertModal]);

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono hacker-glow-hover">
            WORK EXPERIENCE
          </h2>
        </div>

        {/* PROFESSIONAL EXPERIENCE POSITIONS */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6 hacker-card">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80">
            <Briefcase className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base sm:text-lg font-mono font-bold tracking-wider text-white">
              PROFESSIONAL EXPERIENCE
            </h3>
          </div>

          <div className="space-y-6">
            {SITE_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-4 font-mono hacker-card"
              >
                {/* Header: Role, Company & Dates */}
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

                {/* Job Duties & Achievements */}
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 font-mono">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span className="text-emerald-400 font-mono mt-0.5">►</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CERTIFICATE DIRECTLY UNDER EACH EXPERIENCE */}
                {exp.certificate && (
                  <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                    <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-3.5 hacker-card max-w-xl">
                      {/* Certificate Header */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div>
                            <span className="text-white font-bold text-sm sm:text-base hacker-glow-hover">
                              {exp.certificateTitle || `${exp.role} Certificate`}
                            </span>
                            <div className="text-xs text-slate-400 mt-0.5">
                              {exp.company}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            playBlip();
                            setActiveCertModal({
                              title: exp.certificateTitle || `${exp.role} Certificate`,
                              company: exp.company,
                              period: exp.period,
                              image: exp.certificate!,
                            });
                          }}
                          className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-850 bg-slate-800/80 border border-slate-700 text-emerald-400 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all hacker-btn flex items-center gap-1.5 text-xs font-mono font-bold"
                          title="View certificate image"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View</span>
                        </button>
                      </div>

                      {/* Certificate Image Thumbnail */}
                      <div
                        onClick={() => {
                          playKeyClick();
                          setActiveCertModal({
                            title: exp.certificateTitle || `${exp.role} Certificate`,
                            company: exp.company,
                            period: exp.period,
                            image: exp.certificate!,
                          });
                        }}
                        className="relative rounded-lg overflow-hidden border border-slate-800/90 aspect-[16/10] bg-[#04070b] cursor-pointer group flex items-center justify-center"
                      >
                        <img
                          src={exp.certificate}
                          alt={exp.certificateTitle || `${exp.role} Certificate`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />

                        {/* Fallback if image not yet placed in public/certificates/ */}
                        <div className="hidden w-full h-full flex-col items-center justify-center text-slate-500 text-xs p-4 text-center space-y-1">
                          <ImageIcon className="w-6 h-6 text-emerald-400/60" />
                          <span className="text-[11px] text-slate-400">Click to preview certificate</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-white font-bold">
                          <Eye className="w-4 h-4 text-[#00e5ff]" />
                          <span>Enlarge Certificate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Certificate Image Modal / Lightbox */}
      {activeCertModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCertModal(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#090e15] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm max-h-[90vh] flex flex-col hacker-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-bold">{activeCertModal.title}</span>
                <span className="text-slate-500">·</span>
                <span className="text-emerald-400">{activeCertModal.company}</span>
              </div>

              <button
                onClick={() => {
                  playBlip();
                  setActiveCertModal(null);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-6 overflow-y-auto flex flex-col items-center justify-center bg-[#05080c] min-h-[300px]">
              {activeCertModal.image && (
                <img
                  src={activeCertModal.image}
                  alt={`${activeCertModal.title} - ${activeCertModal.company}`}
                  className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-xl border border-slate-800"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const notice = target.nextElementSibling as HTMLElement;
                    if (notice) notice.style.display = 'block';
                  }}
                />
              )}

              {/* Informative fallback message when file not yet in public folder */}
              <div className="hidden text-center p-8 space-y-2">
                <ImageIcon className="w-12 h-12 text-slate-600 mx-auto" />
                <div className="text-base text-white font-bold">{activeCertModal.title}</div>
                <div className="text-sm text-slate-400">
                  {activeCertModal.company} {activeCertModal.period ? `(${activeCertModal.period})` : ''}
                </div>
                <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                  To display your certificate image here, place the file in{' '}
                  <code className="text-emerald-400">public{activeCertModal.image}</code> or update the path in <code className="text-emerald-400">src/data/portfolioData.ts</code>.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-slate-950/90 text-xs text-slate-400">
              <span>Verified Experience Certificate</span>
              <button
                onClick={() => setActiveCertModal(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#00e5ff] text-white transition-all hacker-btn"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
