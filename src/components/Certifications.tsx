import React from 'react';
import { Award, ShieldCheck, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

export const Certifications: React.FC = () => {
  const certificationsList = [
    {
      name: 'AWS Cloud Professional Essentials',
      issuer: 'Amazon Web Services (AWS)',
      platform: 'AWS Training & Certification',
      code: 'AWS-ESSENTIALS-CLOUD',
      credentialUrl: 'https://aws.amazon.com/training/',
    },
    {
      name: 'SQL and Relational Databases — 101',
      issuer: 'IBM Skills Network',
      platform: 'Cognitive Class',
      code: 'DB0101EN',
      credentialUrl: 'https://cognitiveclass.ai/',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#020408]">
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERIFIED ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Certifications &amp; Badges
          </h2>
          <p className="text-sm sm:text-base font-sans text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Officially verified industry credentials in cloud infrastructure and relational database systems.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
          {certificationsList.map((cert, index) => (
            <div
              key={index}
              className="bg-[#070d1a]/85 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-6 sm:p-7 text-left relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-sans leading-tight">{cert.name}</h3>
                      <p className="text-xs text-slate-400 mt-1 font-sans">
                        {cert.issuer} • <span className="text-cyan-400">{cert.platform}</span>
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] px-2.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED
                  </span>
                </div>

                {/* Certificate Metadata */}
                <div className="bg-[#091122] border border-white/[0.06] rounded-xl p-4 font-mono text-xs text-slate-300 space-y-2 mt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">CREDENTIAL ID:</span>
                    <span className="text-white font-semibold">{cert.code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">ISSUER:</span>
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">STATUS:</span>
                    <span className="text-cyan-400 font-semibold">PASSED &amp; VERIFIED</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Credential Active</span>
                </div>
                
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.playClick()}
                  className="font-mono text-xs text-cyan-300 hover:text-white flex items-center gap-1.5 bg-cyan-500/10 hover:bg-cyan-500 hover:text-black px-3 py-1.5 rounded-lg border border-cyan-500/20 transition-all cursor-pointer"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

