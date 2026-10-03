import React from 'react';
import { ExternalLink, Sparkles, Github } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  tag: string;
}

export const Projects: React.FC = () => {
  const projectList: ProjectItem[] = [
    {
      id: 'vendex',
      title: 'Vendex',
      subtitle: 'B2B Procurement Platform',
      category: 'Enterprise SaaS',
      description: 'A comprehensive B2B procurement platform designed to streamline transactions between enterprise buyers and suppliers with responsive workflows and real-time data sync.',
      highlights: [
        'Designed & implemented backend services using Node.js & Express.js with MongoDB for application data management.',
        'Built responsive React.js interfaces focused on usability, business workflows, and overall user experience.',
        'Integrated Firebase services to support core application functionality and real-time user workflows.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
      githubUrl: 'https://github.com/karunesh-28',
      tag: 'FEATURED_B2B',
    },
    {
      id: 'sofi',
      title: 'Sofi',
      subtitle: 'Music Streaming Platform',
      category: 'Full-Stack Web App',
      description: 'A responsive music streaming platform focused on intuitive navigation, seamless audio playback, and responsive UI/UX architecture.',
      highlights: [
        'Designed and developed a responsive music streaming platform focused on intuitive navigation and user experience.',
        'Applied full-stack development concepts to structure scalable frontend and backend application workflows.',
        'Designed UI/UX components with an emphasis on usability, responsiveness, and performance.',
      ],
      tech: ['React.js', 'Node.js', 'REST APIs', 'UI/UX Design', 'Web Audio'],
      githubUrl: 'https://github.com/karunesh-28',
      tag: 'STREAMING_APP',
    },
    {
      id: 'cryptovault',
      title: 'CryptoVault',
      subtitle: 'Client-Side Cryptography Suite',
      category: 'Security & Steganography',
      description: 'A secure client-side cryptography application using the browser native Web Crypto API, ensuring zero application data is ever sent to a server.',
      highlights: [
        'Implemented AES-256-GCM encryption, PBKDF2 key derivation, RSA-4096 keypairs, and secure key exchange workflows.',
        'Implemented SHA-256 integrity verification and HTML5 Canvas-based LSB image steganography.',
        'Built with 100% zero-server zero-knowledge architecture for complete data privacy.',
      ],
      tech: ['JavaScript', 'Web Crypto API', 'AES-256-GCM', 'RSA-4096', 'SHA-256'],
      githubUrl: 'https://github.com/karunesh-28',
      tag: 'SECURITY_CRYPTO',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#020408]">
      {/* ── Background Cyber Holographic Code IDEs Art ── */}
      <div
        className="hacker-bg-canvas"
        style={{ backgroundImage: "url('/bg-projects.jpg')" }}
      />
      <div className="hacker-vignette" />
      <div className="hacker-gradient-edges" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base font-sans text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Production-grade web applications, client-side cryptography suites, and scalable backend services built with modern development standards.
          </p>
        </div>

        {/* ── 3-Column Grid for the 3 Featured Resume Projects ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-[#070d1a]/80 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,240,255,0.12)] group text-left relative overflow-hidden"
            >
              <div>
                {/* Top Tag & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-cyan-300 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full font-semibold">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    {project.tag}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold font-sans text-white group-hover:text-cyan-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5 mb-3 font-semibold">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="text-xs font-sans text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[#091122] border border-white/[0.06] text-slate-300 font-mono text-[10px] rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── Unified Single Action Button for GitHub ── */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/karunesh-28"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => cyberSound.playClick()}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/40 text-sm font-sans font-bold tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.18)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)] cursor-pointer group"
          >
            <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>More on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

