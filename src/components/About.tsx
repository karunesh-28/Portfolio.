import React, { useState } from 'react';
import { Terminal, Cpu, Fingerprint, Shield, Sparkles } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

export const About: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('Cybersecurity');

  const topicsDetails: Record<string, { desc: string; tools: string[]; status: string }> = {
    Cybersecurity: {
      desc: 'Exploring web vulnerability research, network auditing, penetration testing, and security configurations. Actively practicing OWASP Top 10 auditing.',
      tools: ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'OWASP Top 10'],
      status: 'AUDITING NETWORKS - SECURE DEV FOCUS',
    },
    Cloud: {
      desc: 'Deploying servers and backend microservices securely. Working with AWS services, identity access management, and cloud security architectures.',
      tools: ['AWS S3', 'EC2', 'IAM Policy Hardening', 'Route 53'],
      status: 'PROVISIONING ENVIRONMENT - IAM STRENGTHENING',
    },
    DevOps: {
      desc: 'Integrating CI/CD pipelines, containerizing applications, and configuring infrastructure as code, ensuring automated builds and tests.',
      tools: ['Docker', 'GitHub Actions', 'Linux Shell', 'Git Workflows'],
      status: 'PIPELINE ACTIVE - AUTOMATING DEPLOYMENTS',
    },
    'System Design': {
      desc: 'Studying architectural patterns, caching, database replication, server-side scaling strategies, load balancers, and highly available architectures.',
      tools: ['Microservices', 'RESTful APIs', 'Redis Caching', 'Schema Design'],
      status: 'OPTIMIZING THREADPOOL & SCHEMA NORMALIZATION',
    },
    AI: {
      desc: 'Exploring prompt engineering, custom AI agent integrations, API consumption, and incorporating LLMs into custom full-stack solutions.',
      tools: ['Gemini API', 'OpenAI SDK', 'Vercel AI SDK', 'Agentic Workflows'],
      status: 'AI ENGINE - SYNCHRONIZING AGENTIC WORKFLOWS',
    },
    'Backend Architecture': {
      desc: 'Building highly secure APIs, structuring controller layers, custom authentication middlewares (JWT, OAuth), and secure data access layers.',
      tools: ['Node.js', 'Express.js', 'Laravel', 'JWT Auth', 'Bcrypt Hashing'],
      status: 'MIDDLEWARE DEPLOYED - JWT PARSING ACTIVE',
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-bg">
      {/* ── Background Cyber Binary Stream Art ── */}
      <div
        className="hacker-bg-canvas"
        style={{ backgroundImage: "url('/bg-about.jpg')" }}
      />
      <div className="hacker-vignette" />
      <div className="hacker-gradient-edges" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-25"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Full-Stack Systems with a{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Security Mindset
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            Understanding how systems fail is the first step to building software that endures.
          </p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="bg-[#060b16]/85 border border-white/[0.08] hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl backdrop-blur-2xl text-left transition-all duration-300 flex-grow">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs text-slate-300 font-semibold">Development Philosophy</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                  <Fingerprint className="w-3 h-3" />
                  <span>AUTHENTICATED</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                I am a B.Tech Computer Science student at <strong className="text-white font-semibold">ITM Skills University</strong>, specializing in full-stack web and backend development with strong foundations in cybersecurity and networking.
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                My approach to coding is driven by security from day one: understanding how web applications are targeted, how cryptographic primitives operate, and how to structure robust, scalable APIs that withstand modern attack vectors.
              </p>
            </div>

            {/* Directive Quote Block */}
            <div className="bg-[#050914]/85 border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl text-left group hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CORE DIRECTIVE</span>
              </div>
              <blockquote className="font-sans text-base sm:text-lg font-semibold text-white border-l-2 border-cyan-400 pl-4 py-1 italic leading-relaxed">
                "Code is built. Systems are understood. Security is designed."
              </blockquote>
            </div>
          </div>

          {/* Right Dashboard Block ("Currently Exploring") */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-[#060b16]/85 border border-white/[0.08] hover:border-cyan-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl backdrop-blur-2xl text-left flex-grow">
              
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-white tracking-wide">SPECIALIZED DOMAINS</span>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full font-bold">
                    INTERACTIVE
                  </span>
                </div>

                {/* Topics Grid Selector */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.keys(topicsDetails).map((topic) => (
                    <button
                      key={topic}
                      onClick={() => {
                        cyberSound.playClick();
                        setSelectedTopic(topic);
                      }}
                      onMouseEnter={() => cyberSound.playHover()}
                      className={`font-mono text-left px-3 py-2 text-xs rounded-xl border transition-all duration-200 cursor-pointer ${
                        selectedTopic === topic
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)] font-bold'
                          : 'bg-[#03060c] border-white/[0.06] text-slate-400 hover:border-cyan-500/40 hover:text-white'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Console Output */}
              <div className="bg-[#03060c] border border-cyan-500/20 rounded-xl p-4 font-mono text-xs text-left space-y-3 min-h-[170px] flex flex-col justify-between">
                <div>
                  <div className="text-cyan-400 flex items-center justify-between text-[11px]">
                    <span>domain://{selectedTopic.toLowerCase().replace(' ', '_')}</span>
                    <span className="text-[10px] text-slate-400">status: ACTIVE</span>
                  </div>
                  <p className="text-slate-300 font-sans text-xs mt-2 leading-relaxed">
                    {topicsDetails[selectedTopic].desc}
                  </p>
                  
                  {/* Tool chips */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {topicsDetails[selectedTopic].tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] px-2.5 py-0.5 bg-[#080e1c] border border-cyan-500/30 text-cyan-300 rounded-md font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/[0.08] pt-2 flex items-center justify-between text-[10px] text-cyan-400">
                  <span className="text-slate-500">PIPELINE:</span>
                  <span className="animate-pulse font-semibold">{topicsDetails[selectedTopic].status}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
