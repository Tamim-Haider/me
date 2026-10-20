import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, Languages, ExternalLink, Calendar, Eye, X, Image as ImageIcon } from 'lucide-react';
import { SITE_DATA, CertificationItem } from '../data/portfolioData';
import { playBlip, playKeyClick } from '../utils/audio';

interface EducationSectionProps {
  theme?: 'matrix' | 'amber' | 'cyan' | 'red';
}

export const EducationSection: React.FC<EducationSectionProps> = () => {
  const [activeCertModal, setActiveCertModal] = useState<CertificationItem | null>(null);

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
    <section id="education" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono hacker-glow-hover">
            EDUCATION & CERTIFICATIONS
          </h2>
        </div>

        {/* ROW 1: EDUCATION */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6 hacker-card">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base sm:text-lg font-mono font-bold tracking-wider text-white">
              EDUCATION
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
            {SITE_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 transition-all space-y-2.5 hacker-card flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="text-white font-bold text-base sm:text-lg hacker-glow-hover">
                    {edu.degree}
                  </div>
                  <div className="text-slate-300 text-sm">
                    {edu.institution}
                  </div>
                </div>

                {edu.details && (
                  <div className="pt-2 border-t border-slate-800/60 text-sm font-semibold text-emerald-400">
                    {edu.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: CERTIFICATIONS & LICENSES */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6 hacker-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base sm:text-lg font-mono font-bold tracking-wider text-white">
                CERTIFICATIONS & LICENSES
              </h3>
            </div>

            {/* View All Certificates Button */}
            <a
              href={SITE_DATA.personal.certificatesUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => playKeyClick()}
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 bg-slate-900/80 text-white border border-slate-700 shadow-md hacker-btn w-fit"
            >
              <span>View All Certificates</span>
              <ExternalLink className="w-4 h-4 ml-0.5" />
            </a>
          </div>

          {/* 3-column row for the 3 certificates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {SITE_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 transition-all space-y-3.5 hacker-card flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg hacker-glow-hover">
                        {cert.title}
                      </div>
                      <div className="text-slate-300 text-sm mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>

                    {cert.image && (
                      <button
                        onClick={() => {
                          playBlip();
                          setActiveCertModal(cert);
                        }}
                        className="shrink-0 p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-emerald-400 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all hacker-btn flex items-center gap-1 text-xs"
                        title="View certificate image"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">View</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Certificate Image Thumbnail */}
                {cert.image && (
                  <div
                    onClick={() => {
                      playKeyClick();
                      setActiveCertModal(cert);
                    }}
                    className="relative rounded-lg overflow-hidden border border-slate-800/90 aspect-[16/10] bg-[#04070b] cursor-pointer group flex items-center justify-center"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full flex-col items-center justify-center text-slate-500 text-xs p-3 text-center space-y-1">
                      <ImageIcon className="w-5 h-5 text-emerald-400/60" />
                      <span className="text-[11px] text-slate-400">Click to preview image</span>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-white font-bold">
                      <Eye className="w-4 h-4 text-[#00e5ff]" />
                      <span>Enlarge Certificate</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: LANGUAGES */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6 hacker-card">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80">
            <Languages className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base sm:text-lg font-mono font-bold tracking-wider text-white">
              LANGUAGES
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
            {SITE_DATA.languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 transition-all space-y-1 hacker-card text-center sm:text-left"
              >
                <div className="text-white font-bold text-base sm:text-lg hacker-glow-hover">
                  {lang.name}
                </div>
                <div className="text-sm text-emerald-400 font-semibold">
                  {lang.level}
                </div>
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
                <span className="text-emerald-400">{activeCertModal.issuer}</span>
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
                  alt={`${activeCertModal.title} - ${activeCertModal.issuer}`}
                  className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-xl border border-slate-800"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const notice = target.nextElementSibling as HTMLElement;
                    if (notice) notice.style.display = 'block';
                  }}
                />
              )}
              <div className="hidden text-center p-8 space-y-2">
                <ImageIcon className="w-12 h-12 text-slate-600 mx-auto" />
                <div className="text-base text-white font-bold">{activeCertModal.title}</div>
                <div className="text-sm text-slate-400">{activeCertModal.issuer}</div>
                <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                  To display your certificate image here, place the image in{' '}
                  <code className="text-emerald-400">public{activeCertModal.image}</code> or update the URL in <code className="text-emerald-400">src/data/portfolioData.ts</code>.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-slate-950/90 text-xs text-slate-400">
              <span>Verified Certificate Credential</span>
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
