import React from 'react';
import { Linkedin, Github, Send, Mail, Terminal } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';

export const FooterSection: React.FC = () => {
  return (
    <footer className="py-14 border-t border-slate-800/80 bg-[#040608] font-mono text-sm sm:text-base text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={SITE_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all hacker-btn"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={SITE_DATA.personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all hacker-btn"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={SITE_DATA.personal.socials.telegram}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all hacker-btn"
            title="Telegram"
          >
            <Send className="w-5 h-5" />
          </a>

          <a
            href={SITE_DATA.personal.socials.email}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all hacker-btn"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-slate-300 text-sm sm:text-base">
          © 2026 Tamim Haider. All rights reserved.
        </p>

        {/* Quote */}
        <p className="text-emerald-400 text-sm sm:text-base flex items-center justify-center gap-2 font-mono italic hacker-glow-hover cursor-default">
          <Terminal className="w-4 h-4 shrink-0" />
          <span>{SITE_DATA.personal.quote}</span>
        </p>
      </div>
    </footer>
  );
};
