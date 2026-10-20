import React, { useState } from 'react';
import { ExternalLink, Github, ShieldAlert, Lock, Server, ShieldCheck, Bug, Keyboard, Code, Mic, Eye, BookOpen, FileText, Layout, Gamepad2, Car, Trophy, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';
import { playBlip, playKeyClick } from '../utils/audio';

interface ProjectsSectionProps {
  theme: 'matrix' | 'amber' | 'cyan' | 'red';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [filter, setFilter] = useState<'All' | 'Security & Systems' | 'Software & AI' | 'Games' | 'Web & Tools'>('All');

  const filteredProjects = filter === 'All'
    ? SITE_DATA.projects
    : SITE_DATA.projects.filter((p) => p.category === filter);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-emerald-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Bug':
        return <Bug className="w-5 h-5 text-emerald-400" />;
      case 'Keyboard':
        return <Keyboard className="w-5 h-5 text-emerald-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-emerald-400" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-emerald-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-emerald-400" />;
      case 'Car':
        return <Car className="w-5 h-5 text-emerald-400" />;
      case 'Trophy':
      default:
        return <Trophy className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono hacker-glow-hover">
              PROJECTS
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base font-mono">
              All 15 open-source security systems, tools, accessibility software, and games.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-950 rounded-xl border border-slate-800 overflow-x-auto">
            {(['All', 'Security & Systems', 'Software & AI', 'Games', 'Web & Tools'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  playKeyClick();
                }}
                className={`px-3.5 py-2 text-xs sm:text-sm font-mono font-medium rounded-lg transition-all whitespace-nowrap ${
                  filter === cat
                    ? 'bg-slate-900 text-[#00e5ff] border border-[#00e5ff]/60 shadow-[0_0_12px_rgba(0,229,255,0.25)]'
                    : 'text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-4 hacker-card"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-slate-400 pb-2 border-b border-slate-800/70">
                  <span className="text-emerald-400 font-semibold">{proj.category}</span>
                  <span className="text-slate-500">open-source</span>
                </div>

                <div className="flex items-center gap-2.5">
                  {renderIcon(proj.icon)}
                  <h3 className="text-lg font-bold font-mono text-white hacker-glow-hover">
                    {proj.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-200 font-mono leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-xs text-slate-400">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playBlip()}
                  className="text-sm font-mono font-bold text-white hover:text-[#00e5ff] flex items-center gap-1.5 hacker-glow-hover"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-[#00e5ff] hover:bg-slate-900 transition-colors hacker-btn"
                  title="GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
