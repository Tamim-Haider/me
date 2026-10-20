/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MatrixBackground } from './components/MatrixBackground';
import { TopNavigation } from './components/TopNavigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { setMuted } from './utils/audio';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [theme, setTheme] = useState<'matrix' | 'amber' | 'cyan' | 'red'>('matrix');
  // Sound FX mode on, CRT on, and Stream on with matrix palette by default
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scanlinesEnabled, setScanlinesEnabled] = useState(true);
  const [matrixEnabled, setMatrixEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Ensure audio synthesizer is unmuted by default
    setMuted(false);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcut to launch terminal (~ or Ctrl+`)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === '`') || e.key === '~') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    setMuted(!nextVal);
  };

  const handleToggleMatrix = () => {
    setMatrixEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#06090d] text-slate-100 relative selection:bg-emerald-500/30 selection:text-emerald-300 font-mono text-base">
      {/* Dynamic Digital Rain Stream Canvas with Matrix palette default */}
      <MatrixBackground enabled={matrixEnabled} theme={theme} />

      {/* CRT Scanline and Vignette filter (active by default) */}
      {scanlinesEnabled && (
        <div className="fixed inset-0 pointer-events-none z-30 scanline-pattern crt-vignette opacity-70" aria-hidden="true" />
      )}

      {/* Top Navigation conforming to exact tamimhaider.dev sections */}
      <TopNavigation
        onOpenTerminal={() => setTerminalOpen((prev) => !prev)}
        terminalOpen={terminalOpen}
        activeSection={activeSection}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <HeroSection
          onOpenTerminal={() => setTerminalOpen(true)}
          theme={theme}
        />

        <AboutSection theme={theme} />

        <SkillsSection theme={theme} />

        <EducationSection theme={theme} />

        <ExperienceSection theme={theme} />

        <ProjectsSection theme={theme} />

        <ContactSection theme={theme} />
      </main>

      {/* Footer matching exact tamimhaider.dev */}
      <FooterSection />

      {/* Interactive Hacker Terminal CLI */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        theme={theme}
        onThemeChange={setTheme}
        matrixEnabled={matrixEnabled}
        onToggleMatrix={handleToggleMatrix}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />
    </div>
  );
}
