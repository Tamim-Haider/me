import React from 'react';
import { Shield, Brain, Code, UserCheck } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  theme: 'matrix' | 'amber' | 'cyan' | 'red';
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const interestIcons = [Shield, Brain, Code];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono hacker-glow-hover">
            ABOUT ME
          </h2>
        </div>

        <div className="p-6 sm:p-10 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6 hacker-card">
          <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold font-mono text-white">
            <UserCheck className="w-6 h-6 text-emerald-400" />
            <span>CYBERSECURITY ENTHUSIAST</span>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-200 font-mono leading-relaxed">
            {SITE_DATA.personal.aboutExtended.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Terminal line */}
          <div className="p-4 rounded-xl bg-[#04070b] border border-slate-800 font-mono text-sm sm:text-base flex items-center gap-3 hacker-card">
            <span className="text-emerald-400 font-bold">root@portfolio:~$</span>
            <span className="text-slate-100">cat interests.txt</span>
          </div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {SITE_DATA.interests.map((item, idx) => {
              const IconComp = interestIcons[idx] || Shield;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2.5 transition-colors hacker-card"
                >
                  <div className="flex items-center gap-2.5 font-mono font-bold text-base sm:text-lg text-white">
                    <IconComp className="w-5 h-5 text-emerald-400" />
                    <span className="hacker-glow-hover">{item.title}</span>
                  </div>
                  <p className="text-sm text-slate-300 font-mono leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
