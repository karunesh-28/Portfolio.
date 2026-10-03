import React from 'react';
import {
  Shield,
  Terminal,
  Cpu,
  Layers,
  Database,
  Cloud,
  Wrench,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const toolGroups = [
    {
      category: 'Languages & Core Systems',
      color: 'cyan',
      items: [
        { name: 'C++', icon: Cpu, label: 'Data Structures & Algo' },
        { name: 'Python', icon: Terminal, label: 'Automation & Sec' },
        { name: 'JavaScript', icon: Layers, label: 'Full-Stack Web' },
        { name: 'Java', icon: Cpu, label: 'OOP & Architecture' },
        { name: 'PHP', icon: Terminal, label: 'Backend / Laravel' },
      ],
    },
    {
      category: 'Frontend & Backend Development',
      color: 'purple',
      items: [
        { name: 'React.js', icon: Layers, label: 'Component UI' },
        { name: 'Node.js', icon: Terminal, label: 'Async Runtime' },
        { name: 'Express.js', icon: Terminal, label: 'RESTful Routing' },
        { name: 'Laravel', icon: Cpu, label: 'PHP Framework' },
        { name: 'Flutter', icon: Layers, label: 'Mobile UI' },
      ],
    },
    {
      category: 'Databases, Cloud & Security',
      color: 'cyan',
      items: [
        { name: 'MongoDB', icon: Database, label: 'NoSQL Document DB' },
        { name: 'MySQL / SQL', icon: Database, label: 'Relational DB' },
        { name: 'AWS', icon: Cloud, label: 'Cloud Infrastructure' },
        { name: 'Firebase', icon: Cloud, label: 'Realtime Backend' },
        { name: 'Cybersecurity', icon: Shield, label: 'Web Crypto & OWASP' },
      ],
    },
    {
      category: 'Testing & Developer Tools',
      color: 'purple',
      items: [
        { name: 'Git & GitHub', icon: Terminal, label: 'Version Control' },
        { name: 'VS Code', icon: Wrench, label: 'IDE & Extensions' },
        { name: 'Selenium', icon: Wrench, label: 'Automated Testing' },
        { name: 'Cypress', icon: Wrench, label: 'E2E Testing' },
        { name: 'Figma', icon: Layers, label: 'UI/UX Wireframing' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#020408]">
      {/* ── Background Cyber Microchip Motherboard Art ── */}
      <div
        className="hacker-bg-canvas"
        style={{ backgroundImage: "url('/bg-skills.jpg')" }}
      />
      <div className="hacker-vignette" />
      <div className="hacker-gradient-edges" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ── LEFT COLUMN: Text Description + Areas of Interest + Action ── */}
          <div className="lg:col-span-4 text-left space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TECHNICAL ARSENAL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Core Competencies &amp; Skills
              </h2>
            </div>

            <p className="text-sm font-sans text-slate-400 leading-relaxed">
              Hands-on development across frontend and backend technologies including React.js, Node.js, Laravel, and SQL/NoSQL databases, alongside deep interest in client-side cryptography, data structures, and cloud infrastructure.
            </p>

            {/* Core Concepts Badges */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">Areas of Focus</div>
              <div className="flex flex-wrap gap-2">
                {['Cybersecurity', 'Full-Stack Systems', 'Cloud & DevOps', 'Algorithms & DS', 'Cryptography'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-[#080f1e]/80 border border-white/[0.08] hover:border-cyan-500/30 text-cyan-300 font-mono text-xs rounded-lg transition-all"
                  >
                    #{interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-300 hover:text-black font-mono text-xs font-bold tracking-wider border border-cyan-500/30 transition-all shadow-[0_0_20px_rgba(0,240,255,0.15)] cursor-pointer"
              >
                <Shield className="w-4 h-4" />
                <span>Explore Technical Projects</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Framer-Style Category Cards ── */}
          <div className="lg:col-span-8 space-y-5">
            {toolGroups.map((group) => {
              const isPurple = group.color === 'purple';
              const dotColor = isPurple ? 'bg-purple-400 shadow-[0_0_10px_#a855f7]' : 'bg-cyan-400 shadow-[0_0_10px_#00f0ff]';
              const badgeStyle = isPurple
                ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';

              return (
                <div
                  key={group.category}
                  className="bg-[#070d1a]/75 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
                >
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></span>
                      <span className="font-sans font-bold text-sm sm:text-base text-white">{group.category}</span>
                    </div>
                    <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full border uppercase tracking-wider ${badgeStyle}`}>
                      {group.items.length} TECHNOLOGIES
                    </span>
                  </div>

                  {/* Tool Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.name}
                          className="bg-[#091122]/90 border border-white/[0.06] hover:border-cyan-500/40 rounded-xl p-3.5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,240,255,0.12)]"
                        >
                          <div className="w-10 h-10 rounded-xl bg-black/50 border border-white/[0.08] flex items-center justify-center mb-2.5 group-hover:border-cyan-500/30">
                            <Icon className={`w-5 h-5 ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`} />
                          </div>
                          <span className="font-sans text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {item.name}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400 mt-1 leading-tight">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

