import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Maximize2, Minimize2, X, CornerDownLeft } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';
import { playKeyClick, playSuccessChime, playAlertBuzz, playBlip } from '../utils/audio';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'matrix' | 'amber' | 'cyan' | 'red';
  onThemeChange: (theme: 'matrix' | 'amber' | 'cyan' | 'red') => void;
  matrixEnabled: boolean;
  onToggleMatrix: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

const WELCOME_ASCII = `
  ████████╗ █████╗ ███╗   ███╗██╗███╗   ███╗
  ╚══██╔══╝██╔══██╗████╗ ████║██║████╗ ████║
     ██║   ███████║██╔████╔██║██║██╔████╔██║
     ██║   ██╔══██║██║╚██╔╝██║██║██║╚██╔╝██║
     ██║   ██║  ██║██║ ╚═╝ ██║██║██║ ╚═╝ ██║
     ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝     ╚═╝
  -------------------------------------------
  TAMIM HAIDER | CYBERSECURITY & ETHICAL HACKER
  Type 'help' to inspect commands or 'whoami'
`;

export const InteractiveTerminal: React.FC<TerminalProps> = ({
  isOpen,
  onClose,
  theme,
  onThemeChange,
  matrixEnabled,
  onToggleMatrix,
  soundEnabled,
  onToggleSound
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHistory([
      {
        id: 'init-0',
        command: 'system --login',
        timestamp: new Date().toLocaleTimeString(),
        output: (
          <div className="space-y-2">
            <pre className="text-xs sm:text-sm font-mono text-emerald-400 whitespace-pre overflow-x-auto leading-none opacity-90">
              {WELCOME_ASCII}
            </pre>
            <p className="text-xs text-slate-300">
              Connected to <span className="text-emerald-400">tamimhaider.dev</span>. Type <span className="text-emerald-400 font-bold">help</span> to explore portfolio commands.
            </p>
          </div>
        )
      }
    ]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    playKeyClick();
    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    setPastCommands((prev) => [...prev, raw]);
    setHistoryIndex(null);

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        playBlip();
        output = (
          <div className="text-xs space-y-1.5 font-mono text-slate-300">
            <div className="text-emerald-400 font-semibold mb-1">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-emerald-400 font-bold">whoami</span> - Identity, title & location</div>
              <div><span className="text-emerald-400 font-bold">about</span> - Academic journey & goals</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - All security tools & tech</div>
              <div><span className="text-emerald-400 font-bold">education</span> - UGV B.Sc & certifications</div>
              <div><span className="text-emerald-400 font-bold">experience</span> - Deltaware & Cyberfox internships</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - All 15 open-source GitHub projects</div>
              <div><span className="text-emerald-400 font-bold">resume</span> - Open Google Drive resume link</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Email, location & LinkedIn</div>
              <div><span className="text-emerald-400 font-bold">interests</span> - Cybersecurity, AI & problem solving</div>
              <div><span className="text-emerald-400 font-bold">theme &lt;name&gt;</span> - matrix | amber | cyan | red</div>
              <div><span className="text-emerald-400 font-bold">matrix</span> - Toggle digital rain stream</div>
              <div><span className="text-emerald-400 font-bold">sound</span> - Toggle audio synthesizers</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal output</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        playSuccessChime();
        output = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p><span className="text-emerald-400 font-bold">NAME:</span> {SITE_DATA.personal.name}</p>
            <p><span className="text-emerald-400 font-bold">ROLE:</span> {SITE_DATA.personal.title}</p>
            <p><span className="text-emerald-400 font-bold">LOCATION:</span> {SITE_DATA.personal.location}</p>
            <p><span className="text-emerald-400 font-bold">EMAIL:</span> {SITE_DATA.personal.email}</p>
            <p className="pt-1 text-slate-400 leading-relaxed">{SITE_DATA.personal.bio}</p>
          </div>
        );
        break;

      case 'about':
        playBlip();
        output = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <div className="text-emerald-400 font-semibold">CYBERSECURITY ENTHUSIAST:</div>
            {SITE_DATA.personal.aboutExtended.map((p, i) => (
              <p key={i} className="text-slate-400 leading-relaxed">{p}</p>
            ))}
          </div>
        );
        break;

      case 'skills':
        playBlip();
        output = (
          <div className="text-xs font-mono space-y-3 text-slate-300">
            {SITE_DATA.skillGroups.map((group, idx) => (
              <div key={idx} className="border-l-2 border-emerald-500/40 pl-2">
                <div className="text-emerald-400 font-semibold">{group.category}:</div>
                <div className="flex flex-wrap gap-x-2 text-slate-300">
                  {group.skills.map((s, sIdx) => (
                    <span key={sIdx}>
                      <span className="text-white font-medium">{s.name}</span>
                      <span className="text-slate-500 text-[10px]"> ({s.description})</span>
                      {sIdx < group.skills.length - 1 && <span className="text-slate-600 ml-1">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        playBlip();
        output = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <div className="text-emerald-400 font-semibold">ACADEMIC BACKGROUND & CERTIFICATIONS:</div>
            {SITE_DATA.education.map((edu, idx) => (
              <div key={idx} className="pl-2 border-l border-slate-700">
                <div className="text-white font-bold">{edu.degree}</div>
                <div className="text-slate-400">{edu.institution} ({edu.period})</div>
                {edu.details && <div className="text-emerald-400 text-[11px]">{edu.details}</div>}
              </div>
            ))}
            <div className="pt-1 text-slate-400">
              <span className="text-white font-semibold">Certifications:</span>{' '}
              {SITE_DATA.certifications.map((c) => `${c.title} (${c.issuer})`).join(' · ')}
            </div>
          </div>
        );
        break;

      case 'experience':
        playBlip();
        output = (
          <div className="text-xs font-mono space-y-3 text-slate-300">
            <div className="text-emerald-400 font-semibold">WORK EXPERIENCE:</div>
            {SITE_DATA.experience.map((exp, idx) => (
              <div key={idx} className="pl-2 border-l border-emerald-500/40 space-y-1">
                <div className="text-white font-bold">{exp.role} @ {exp.company}</div>
                <div className="text-slate-500 text-[11px]">{exp.period}</div>
                <ul className="text-slate-400 text-[11px] space-y-0.5 list-disc list-inside">
                  {exp.details.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        playBlip();
        output = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <div className="text-emerald-400 font-semibold">ALL 15 OPEN-SOURCE PROJECTS (tamimhaider.dev):</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SITE_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-2 rounded bg-slate-900/80 border border-slate-800">
                  <div className="text-white font-bold">{proj.title}</div>
                  <div className="text-[10px] text-emerald-400">{proj.category}</div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-slate-400 hover:text-[#00e5ff] underline"
                  >
                    {proj.githubUrl}
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        playSuccessChime();
        window.open(SITE_DATA.personal.resumeUrl, '_blank');
        output = (
          <div className="text-xs font-mono text-emerald-400">
            Opening Resume PDF: <a href={SITE_DATA.personal.resumeUrl} target="_blank" rel="noreferrer" className="underline text-white">{SITE_DATA.personal.resumeUrl}</a>
          </div>
        );
        break;

      case 'contact':
        playBlip();
        output = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p><span className="text-emerald-400 font-bold">EMAIL:</span> {SITE_DATA.personal.email}</p>
            <p><span className="text-emerald-400 font-bold">LOCATION:</span> {SITE_DATA.personal.location}</p>
            <p><span className="text-emerald-400 font-bold">LINKEDIN:</span> {SITE_DATA.personal.socials.linkedin}</p>
            <p><span className="text-emerald-400 font-bold">GITHUB:</span> {SITE_DATA.personal.socials.github}</p>
            <p><span className="text-emerald-400 font-bold">TELEGRAM:</span> {SITE_DATA.personal.socials.telegram}</p>
          </div>
        );
        break;

      case 'interests':
        output = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <div className="text-emerald-400 font-semibold">INTERESTS:</div>
            {SITE_DATA.interests.map((it, i) => (
              <p key={i}><span className="text-white font-bold">{it.title}:</span> {it.description}</p>
            ))}
          </div>
        );
        break;

      case 'theme':
        const selectedTheme = args[0]?.toLowerCase() as 'matrix' | 'amber' | 'cyan' | 'red';
        if (['matrix', 'amber', 'cyan', 'red'].includes(selectedTheme)) {
          onThemeChange(selectedTheme);
          playSuccessChime();
          output = <span className="text-emerald-400">Palette updated to [{selectedTheme}].</span>;
        } else {
          output = <span className="text-amber-400">Available: matrix, amber, cyan, red. Example: theme cyan</span>;
        }
        break;

      case 'matrix':
        onToggleMatrix();
        playBlip();
        output = <span className="text-emerald-400">Matrix stream toggled {matrixEnabled ? 'OFF' : 'ON'}.</span>;
        break;

      case 'sound':
        onToggleSound();
        playBlip();
        output = <span className="text-emerald-400">Audio toggled {soundEnabled ? 'OFF' : 'ON'}.</span>;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        playAlertBuzz();
        output = (
          <span className="text-red-400">
            Command not found: '{cmd}'. Type <span className="text-emerald-400 font-bold">help</span> for commands.
          </span>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: raw,
        timestamp: new Date().toLocaleTimeString(),
        output
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length === 0) return;
      const nextIndex = historyIndex === null ? pastCommands.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(pastCommands[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (pastCommands.length === 0 || historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= pastCommands.length) {
        setHistoryIndex(null);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(pastCommands[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const available = ['help', 'whoami', 'about', 'skills', 'education', 'experience', 'projects', 'resume', 'contact', 'interests', 'theme', 'matrix', 'sound', 'clear'];
      const match = available.find((c) => c.startsWith(inputVal.trim().toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    } else {
      playKeyClick();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-200 ${
        isExpanded
          ? 'inset-2 sm:inset-6'
          : 'bottom-4 right-4 left-4 sm:left-auto sm:w-[680px] h-[480px]'
      }`}
    >
      <div className="w-full h-full flex flex-col bg-[#080d14]/95 backdrop-blur-md rounded-xl border border-emerald-500/40 shadow-2xl overflow-hidden font-mono text-sm">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors flex items-center justify-center text-[8px] text-black font-bold"
              title="Close terminal"
            >
              ✕
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors flex items-center justify-center text-[8px] text-black font-bold"
              title="Toggle size"
            >
              ±
            </button>
            <button
              onClick={() => setHistory([])}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors flex items-center justify-center text-[8px] text-black font-bold"
              title="Clear"
            >
              –
            </button>
            <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              root@portfolio:~$ (bash)
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-slate-400 hover:text-[#00e5ff] transition-colors rounded hover:bg-slate-800"
              title={isExpanded ? 'Restore' : 'Maximize'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-red-400 transition-colors rounded hover:bg-slate-800"
              title="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Scrollable Command Output */}
        <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 font-mono">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="text-emerald-400 font-bold">root@portfolio:~$</span>
                <span className="text-white font-medium">{item.command}</span>
                <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={terminalBottomRef} />
        </div>

        {/* Quick Command Shortcuts */}
        <div className="px-3 py-1.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] text-slate-400">
          <span className="text-slate-600 shrink-0 text-[10px]">Quick:</span>
          {['whoami', 'about', 'skills', 'education', 'experience', 'projects', 'resume', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hover:border-[#00e5ff]/60 hover:text-[#00e5ff] transition-colors whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Active Command Input Line */}
        <div className="px-3 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold shrink-0 text-xs sm:text-sm">root@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'whoami', 'skills', 'projects', 'resume'..."
            className="flex-1 bg-transparent text-white text-xs sm:text-sm outline-none placeholder:text-slate-600 font-mono"
            autoFocus
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-1 text-slate-400 hover:text-[#00e5ff] transition-colors"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
