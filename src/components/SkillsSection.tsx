import React from 'react';
import { Wrench, Search, LineChart, Key, Code, Monitor } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';

interface SkillsSectionProps {
  theme: 'matrix' | 'amber' | 'cyan' | 'red';
}

export const SkillsSection: React.FC<SkillsSectionProps> = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'tools':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'search-minus':
      case 'search':
        return <Search className="w-5 h-5 text-emerald-400" />;
      case 'chart-line':
        return <LineChart className="w-5 h-5 text-emerald-400" />;
      case 'key':
        return <Key className="w-5 h-5 text-emerald-400" />;
      case 'code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'desktop':
      default:
        return <Monitor className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono hacker-glow-hover">
            SKILLS & TECHNOLOGIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_DATA.skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 hacker-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800/80">
                  {getCategoryIcon(group.iconName)}
                  <h3 className="text-sm sm:text-base font-mono font-bold tracking-wider text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-3 font-mono">
                  {group.skills.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/70 transition-all hacker-card"
                    >
                      <div className="text-white font-bold text-sm sm:text-base hacker-glow-hover">{s.name}</div>
                      <div className="text-xs sm:text-sm text-slate-300 font-mono mt-0.5">{s.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
