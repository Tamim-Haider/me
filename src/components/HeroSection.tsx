import React, { useState, useEffect } from 'react';
import { MapPin, Mail, FileText, Terminal, ExternalLink, Terminal as TerminalIcon } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';
import { playBlip, playKeyClick } from '../utils/audio';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  theme: 'matrix' | 'amber' | 'cyan' | 'red';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  const texts = SITE_DATA.personal.typewriterRoles;
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex];
    const typingSpeed = isDeleting ? 45 : 95;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Pause at the end before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <section id="home" className="relative pt-16 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Name and Subtitle - TAMIM HAIDER stays as it is without changing on hover */}
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-mono select-none">
            {SITE_DATA.personal.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-mono text-emerald-400 font-semibold tracking-wide">
            {SITE_DATA.personal.title}
          </h2>
        </div>

        {/* Dynamic Typewriter Terminal Line cycling like the original site */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-lg sm:text-xl flex items-center gap-3 shadow-xl hacker-card">
          <span className="text-emerald-400 select-none font-bold">&gt;</span>
          <span className="text-emerald-400 font-bold min-h-[1.75rem] flex items-center">
            {displayText}
          </span>
          <span className="w-2.5 h-6 bg-emerald-400 animate-pulse select-none" />
        </div>

        {/* Bio Paragraph */}
        <p className="text-base sm:text-lg text-slate-200 font-mono leading-relaxed">
          {SITE_DATA.personal.bio}
        </p>

        {/* Contact Info Items */}
        <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base font-mono text-slate-300">
          <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-900/60 transition-colors hacker-glow-hover">
            <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{SITE_DATA.personal.location}</span>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-900/60 transition-colors hacker-glow-hover">
            <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
            <a
              href={`mailto:${SITE_DATA.personal.email}`}
              className="hover:underline text-slate-200"
            >
              {SITE_DATA.personal.email}
            </a>
          </div>
        </div>

        {/* Terminal Line: xdg-open "My Resume.pdf" */}
        <div className="p-4 rounded-xl bg-[#04070b] border border-slate-800 font-mono text-sm sm:text-base flex items-center gap-3 hacker-card">
          <span className="text-emerald-400 font-bold">root@portfolio:~$</span>
          <span className="text-slate-100">xdg-open "My Resume.pdf"</span>
        </div>

        {/* Actions: Resume Button & Terminal CLI Button */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href={SITE_DATA.personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => playKeyClick()}
            className="px-6 py-3 rounded-lg text-sm sm:text-base font-mono font-bold transition-all flex items-center gap-2.5 bg-slate-900/80 text-white border border-slate-700 shadow-lg hacker-btn"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>My Resume</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

          <button
            onClick={() => {
              playBlip();
              onOpenTerminal();
            }}
            className="px-6 py-3 rounded-lg text-sm sm:text-base font-mono font-medium text-slate-200 bg-slate-900/80 border border-slate-800 transition-all flex items-center gap-2.5 hacker-btn"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Open Terminal Console</span>
          </button>
        </div>

        {/* Quote prominently displayed at the home page as requested */}
        <div className="p-5 rounded-xl bg-[#04070b]/90 border border-slate-800/90 font-mono text-sm sm:text-base text-slate-300 flex items-center gap-3 italic hacker-card shadow-lg">
          <TerminalIcon className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{SITE_DATA.personal.quote}</span>
        </div>
      </div>
    </section>
  );
};
