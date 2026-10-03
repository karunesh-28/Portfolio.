import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
} from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

interface HeroProps {
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect with Karunesh's actual resume roles
  const typingTexts = [
    'Full-Stack & Backend Systems Developer',
    'React.js, Node.js & Laravel Developer',
    'Cybersecurity & Cryptography Learner',
    'B.Tech CSE @ ITM Skills University',
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentFullText = typingTexts[textIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(75);

        if (displayText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, typingSpeed]);

  // Matrix Digital Rain Canvas effect (Electric Cyan / Ice Blue streams)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const chars = '0123456789ABCDEFｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const renderMatrix = () => {
      ctx.fillStyle = 'rgba(4, 7, 14, 0.14)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (Math.random() > 0.88) {
          ctx.fillStyle = '#ffffff';
        } else if (Math.random() > 0.4) {
          ctx.fillStyle = '#00f0ff';
        } else {
          ctx.fillStyle = '#38bdf8';
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(renderMatrix);
    };

    animId = requestAnimationFrame(renderMatrix);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-cyber-bg">
      {/* ── Background Cyber Ambient Art ── */}
      <div
        className="hacker-bg-canvas"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="hacker-vignette" />
      <div className="hacker-gradient-edges" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-25"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        
        {/* ── Hero Headline & Introduction ── */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
            <span>AVAILABLE FOR FULL-STACK &amp; SECURITY ROLES</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.1]">
            Building Scalable Web Apps with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent text-glow-cyan">
              Hardened Security
            </span>
          </h1>

          {/* Typewriter Subheading */}
          <div className="h-8 sm:h-10 flex items-center justify-center">
            <span className="font-mono text-sm sm:text-base md:text-lg text-slate-300 font-semibold tracking-wide">
              &gt; <span className="text-cyan-400 font-bold">{displayText}</span>
              <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-cursor-blink"></span>
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Computer Science Developer specializing in full-stack web applications, backend API architecture, and practical cryptography using React.js, Node.js, Laravel, and modern cloud services.
          </p>

          {/* Action CTAs & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => {
                cyberSound.playClick();
                onViewProjects();
              }}
              onMouseEnter={() => cyberSound.playHover()}
              className="px-7 py-3 rounded-xl bg-cyan-400 text-black text-xs sm:text-sm font-mono font-bold tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              onClick={() => cyberSound.playClick()}
              onMouseEnter={() => cyberSound.playHover()}
              className="px-6 py-3 rounded-xl bg-[#060b16]/80 hover:bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-300 backdrop-blur-xl shadow-lg flex items-center gap-2 active:scale-95"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>GET IN TOUCH</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/karunesh-28"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => cyberSound.playClick()}
                className="p-3 rounded-xl bg-[#060b16]/80 border border-white/[0.08] hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all backdrop-blur-xl"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/karuneshchikne/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => cyberSound.playClick()}
                className="p-3 rounded-xl bg-[#060b16]/80 border border-white/[0.08] hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all backdrop-blur-xl"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Framer Bento Grid Showcase ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left / Center: Interactive macOS Cyber Glass Terminal */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="w-full bg-[#050914]/85 border border-cyan-500/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl flex flex-col flex-grow text-left">
              
              {/* Window Header Bar */}
              <div className="bg-[#03060c]/90 border-b border-white/[0.08] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>karunesh@workspace: ~/core-profile</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>v2.4.0</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] space-y-4 bg-[#050914]/90 flex-grow">
                <div>
                  <span className="text-cyan-400 font-bold">const</span>{' '}
                  <span className="text-purple-400 font-bold">developer</span> = &#123;
                  <div className="pl-4 sm:pl-6 space-y-1.5 mt-1.5 text-slate-300">
                    <div>
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-400">"Karunesh Vijay Chikne"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-emerald-400">"Full-Stack Developer &amp; Cybersecurity Enthusiast"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">education:</span>{' '}
                      <span className="text-emerald-400">"B.Tech Computer Science @ ITM Skills University"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">location:</span>{' '}
                      <span className="text-emerald-400">"Mumbai, Maharashtra, India"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">coreStack:</span> [
                      <span className="text-cyan-300">"React.js"</span>,{' '}
                      <span className="text-cyan-300">"Node.js"</span>,{' '}
                      <span className="text-cyan-300">"Laravel"</span>,{' '}
                      <span className="text-cyan-300">"Python"</span>,{' '}
                      <span className="text-cyan-300">"MySQL"</span>,{' '}
                      <span className="text-cyan-300">"AES-256"</span>],
                    </div>
                    <div>
                      <span className="text-slate-400">securityFocus:</span> [
                      <span className="text-purple-300">"OWASP Top 10"</span>,{' '}
                      <span className="text-purple-300">"Network Telemetry"</span>,{' '}
                      <span className="text-purple-300">"JWT Auth"</span>],
                    </div>
                  </div>
                  &#125;;
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="text-cyan-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>STATUS: READY_FOR_DEPLOYMENT</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Mumbai, IN</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Operative Profile Card & Credentials */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            {/* Holographic Avatar Card */}
            <div className="relative bg-[#060b16]/85 border border-cyan-500/20 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col items-center text-center group">
              <div className="relative w-36 h-36 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.25)] mb-4">
                <img
                  src="/hacker-avatar.jpg"
                  alt="Karunesh Chikne"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="cyber-scanner-laser"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b16] via-transparent to-transparent opacity-60"></div>
              </div>

              <h3 className="font-bold text-white text-base font-sans">Karunesh Chikne</h3>
              <p className="font-mono text-xs text-cyan-400 mt-0.5">Builder · Problem Solver · Creator</p>
              
              <div className="w-full grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/[0.08] text-left font-mono text-[11px]">
                <div className="bg-[#03060c] p-2.5 rounded-xl border border-white/[0.06]">
                  <span className="text-slate-400 text-[10px] block">AGE</span>
                  <span className="text-white font-bold text-sm">21 yrs</span>
                </div>
                <div className="bg-[#03060c] p-2.5 rounded-xl border border-white/[0.06]">
                  <span className="text-slate-400 text-[10px] block">CITY</span>
                  <span className="text-cyan-400 font-bold text-sm">Mumbai</span>
                </div>
              </div>
            </div>

            {/* Quick Skills Mini-Grid */}
            <div className="bg-[#060b16]/85 border border-white/[0.08] rounded-2xl p-4 backdrop-blur-xl text-left">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 mb-2.5">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Core Frameworks &amp; Tools</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React.js', 'Node.js', 'Laravel', 'Python', 'AWS', 'MySQL', 'MongoDB', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#03060c] border border-cyan-500/20 text-slate-200 font-mono text-[10px] font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
