import React from 'react';
import { GraduationCap, Calendar, Languages, CheckCircle2, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: 'Bachelor of Technology, Computer Science',
      institution: 'ITM Skills University, Mumbai',
      period: '2023 – 2027',
      status: 'UNDERGRADUATE',
      focus: 'Full-Stack Web Development, Data Structures, Algorithms, Cybersecurity, Cryptography, Database Management Systems',
    },
    {
      degree: 'Secondary Education (Higher Secondary)',
      institution: 'Golden Nest High College, Mumbai',
      period: '2021 – 2023',
      status: 'COMPLETED',
      focus: 'Computer Science & Science Stream, Mathematics, Foundational Programming',
    },
    {
      degree: 'Primary & High School Education',
      institution: 'St. Aloysius English High School, Mumbai',
      period: '2011 – 2021',
      status: 'COMPLETED',
      focus: 'Foundational Academics, English Language, Mathematics, Science',
    },
  ];

  const spokenLanguages = ['English', 'Hindi', 'Marathi', 'German'];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#020408]">
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm sm:text-base font-sans text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Formal computer science degree and educational background in Mumbai, India.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#070d1a]/85 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-6 md:p-8 text-left relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white font-sans">{edu.degree}</h3>
                    <p className="text-sm font-sans text-cyan-400 font-semibold mt-0.5">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-[#091122] px-3.5 py-1.5 border border-white/[0.08] rounded-xl self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="space-y-2 font-sans text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Key Focus:</strong> {edu.focus}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="text-cyan-300 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> VERIFIED RECORD
                </span>
                <span>STATUS: {edu.status}</span>
              </div>
            </div>
          ))}

          {/* Spoken Languages Card */}
          <div className="bg-[#070d1a]/85 backdrop-blur-2xl border border-white/[0.08] hover:border-purple-500/40 rounded-2xl p-6 text-left shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-sans">Spoken &amp; Written Languages</h4>
                <p className="text-xs text-slate-400 font-sans">Multilingual proficiency for global collaboration</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {spokenLanguages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 rounded-xl bg-[#091122] border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

