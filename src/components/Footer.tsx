import React from 'react';
import { Github, Linkedin, Shield, ArrowUp } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    cyberSound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#010307] border-t border-white/[0.08] py-12 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <Shield className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="font-sans text-xs">
              <span className="block text-white font-extrabold tracking-tight text-sm">
                KARUNESH CHIKNE
              </span>
              <span className="text-slate-400 text-xs">
                © {new Date().getFullYear()} Karunesh Vijay Chikne. Designed &amp; Engineered for High Performance.
              </span>
            </div>
          </div>

          {/* System Status Pill */}
          <div className="font-mono text-xs text-slate-300 border border-white/[0.08] bg-[#070d1a] px-4 py-2 rounded-full text-left flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
            <span>SYSTEM ENCRYPTED // ONLINE</span>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-2.5">
            <a
              href="https://github.com/karunesh-28"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cyberSound.playClick()}
              className="w-10 h-10 rounded-xl border border-white/[0.08] hover:border-cyan-400/40 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-white/[0.03]"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/karuneshchikne/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cyberSound.playClick()}
              className="w-10 h-10 rounded-xl border border-white/[0.08] hover:border-cyan-400/40 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-white/[0.03]"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl border border-cyan-500/30 hover:border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all bg-cyan-500/10 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.15)]"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

