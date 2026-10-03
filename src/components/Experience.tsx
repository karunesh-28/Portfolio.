import React from 'react';
import { Calendar, Briefcase, ChevronRight, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Full-Stack Developer Intern',
      company: 'Fundcorps',
      location: 'Remote',
      period: 'Jul 2026 – Dec 2026',
      tech: ['PHP', 'Laravel', 'SQL', 'React.js', 'Responsive UI', 'REST APIs'],
      points: [
        'Contributed to a full-stack revamp of the company website using PHP and the Laravel framework, working across both frontend and backend layers.',
        'Developed and maintained web application features end-to-end, from UI implementation to backend logic and data handling.',
        'Designed responsive, user-friendly authentication interfaces, including login, signup, and dashboard screens, prioritizing usability and clarity.',
        'Integrated SQL database functionality for user authentication and account data management, ensuring secure and reliable data handling.',
        'Collaborated with a remote development team to plan, implement, test, and deploy website improvements on a regular release cadence.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#020408]">
      {/* ── Background Cyber Energy Data Stream Art ── */}
      <div
        className="hacker-bg-canvas"
        style={{ backgroundImage: "url('/bg-experience.jpg')" }}
      />
      <div className="hacker-vignette" />
      <div className="hacker-gradient-edges" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base font-sans text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Professional software development experience building production web applications and database workflows.
          </p>
        </div>

        {/* Experience log box */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#070d1a]/85 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-6 md:p-8 text-left relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all group"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]"></span>
                  <span className="font-sans font-semibold text-sm text-slate-200">Professional Internship Record</span>
                </div>
                <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED EXPERIENCE
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl mt-1">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-sans text-cyan-400 font-semibold mt-0.5">
                        {exp.company} <span className="text-slate-400 font-normal">({exp.location})</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-[#091122] px-3.5 py-1.5 rounded-xl border border-white/[0.08] self-start">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">Key Contributions &amp; Impact</div>
                  <ul className="space-y-2.5 font-sans text-sm text-slate-300">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-slate-400 mr-1">Stack:</span>
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-[#091122] border border-white/[0.06] text-cyan-300 font-mono text-[10px] rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Remote / India</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

