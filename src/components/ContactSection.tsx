import React from 'react';
import { MapPin, Mail, Globe, Film, Laptop, Book } from 'lucide-react';
import { SITE_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  theme: 'matrix' | 'amber' | 'cyan' | 'red';
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const hobbyIcons = [Film, Laptop, Book];

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono hacker-glow-hover">
            CONTACT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Card: GET IN TOUCH */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6 hacker-card">
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white flex items-center gap-3">
              <Mail className="w-6 h-6 text-emerald-400" />
              <span>GET IN TOUCH</span>
            </h3>

            <p className="text-base text-slate-300 font-mono leading-relaxed">
              I'm always interested in hearing about new opportunities, collaborations, or just chatting about cybersecurity and technology.
            </p>

            <div className="space-y-4 font-mono text-sm sm:text-base text-slate-200">
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 transition-colors hacker-card">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="hacker-glow-hover">{SITE_DATA.personal.location}</span>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 transition-colors hacker-card">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${SITE_DATA.personal.email}`}
                  className="hover:underline text-slate-100 hacker-glow-hover"
                >
                  {SITE_DATA.personal.email}
                </a>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 transition-colors hacker-card">
                <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
                <a
                  href={SITE_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-slate-100 hacker-glow-hover"
                >
                  www.linkedin.com/in/tamimhaider/
                </a>
              </div>
            </div>

            {/* Terminal prompt line */}
            <div className="p-4 rounded-xl bg-[#04070b] border border-slate-800 font-mono text-xs sm:text-sm flex items-center gap-2.5 overflow-x-auto hacker-card">
              <span className="text-emerald-400 font-bold shrink-0">root@portfolio:~$</span>
              <span className="text-slate-100 truncate">
                echo "send_message --to tamimhaidercse@proton.me --subject 'Collaboration Opportunity'"
              </span>
            </div>
          </div>

          {/* Card: HOBBIES & INTERESTS */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6 hacker-card">
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white flex items-center gap-3">
              <Laptop className="w-6 h-6 text-emerald-400" />
              <span>HOBBIES & INTERESTS</span>
            </h3>

            <div className="space-y-4">
              {SITE_DATA.hobbies.map((hobby, idx) => {
                const Icon = hobbyIcons[idx] || Laptop;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2 transition-colors hacker-card"
                  >
                    <div className="flex items-center gap-2.5 font-mono font-bold text-base text-white">
                      <Icon className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="hacker-glow-hover">{hobby.title}</span>
                    </div>
                    <p className="text-sm text-slate-300 font-mono leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
