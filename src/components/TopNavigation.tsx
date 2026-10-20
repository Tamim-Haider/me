import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { playBlip } from '../utils/audio';

interface TopNavigationProps {
  onOpenTerminal: () => void;
  terminalOpen: boolean;
  activeSection: string;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  onOpenTerminal,
  terminalOpen,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#06090d]/90 backdrop-blur-md border-b border-slate-800/80 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-base sm:text-lg font-bold text-white hover:text-[#00e5ff] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>$TAMIM HAIDER</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => playBlip()}
              className={`hover:text-[#00e5ff] transition-all whitespace-nowrap py-1 ${
                activeSection === link.id
                  ? 'text-[#00e5ff] border-b-2 border-[#00e5ff] shadow-[0_4px_12px_rgba(0,229,255,0.25)]'
                  : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              playBlip();
              onOpenTerminal();
            }}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all whitespace-nowrap flex items-center gap-2 ${
              terminalOpen
                ? 'bg-[#00e5ff]/20 text-[#00e5ff] border-[#00e5ff]/60 shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-[#00e5ff] hover:text-[#00e5ff] hacker-btn'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">{terminalOpen ? 'CLI OPEN' : 'TERMINAL'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b10] border-b border-slate-800 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                playBlip();
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-xs font-semibold tracking-wider text-slate-300 hover:text-[#00e5ff]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
