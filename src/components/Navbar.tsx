import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, Shield, Send, Volume2, VolumeX } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(cyberSound.enabled);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'crypto-lab', label: 'Crypto Lab' },
    { id: 'experience', label: 'Experience' },
    { id: 'cyberlab', label: 'Terminal' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    cyberSound.playClick();
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleToggleSound = () => {
    const nextState = cyberSound.toggleSound();
    setSoundEnabled(nextState);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020408]/80 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          
          {/* Left Brand Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
            onMouseEnter={() => cyberSound.playHover()}
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mr-2.5 group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <Shield className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-sans text-base font-extrabold tracking-tight text-white flex items-center">
              KARUNESH<span className="text-cyan-400 font-mono text-sm ml-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">DEV</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1 bg-[#070d1a]/70 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => cyberSound.playHover()}
                className={`font-sans text-xs px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer font-medium ${
                  activeSection === link.id
                    ? 'text-black bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)] font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side Socials, Audio Toggle & Glowing Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* SFX Audio Engine Toggle Button */}
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-xl font-mono text-xs border transition-all flex items-center gap-1.5 cursor-pointer ${
                soundEnabled
                  ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20'
              }`}
              title={soundEnabled ? 'Disable Cyber Sound FX' : 'Enable Cyber Sound FX'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-semibold">SFX</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-[10px] text-slate-500">SFX</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/karunesh-28"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cyberSound.playClick()}
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-500/30 rounded-xl"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/karuneshchikne/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cyberSound.playClick()}
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-500/30 rounded-xl"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Glowing Hire Me Pill Button */}
            <button
              onClick={() => handleNavClick('contact')}
              onMouseEnter={() => cyberSound.playHover()}
              className="px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-sans font-bold tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-xl font-mono text-xs border ${
                soundEnabled
                  ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-400'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                cyberSound.playClick();
                setIsOpen(!isOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-xl text-cyan-400 bg-white/[0.04] border border-white/[0.08] focus:outline-none transition-all"
            >
              {isOpen ? <X className="h-5 h-5 text-cyan-400" /> : <Menu className="h-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide-Out */}
      <div
        className={`fixed inset-y-0 right-0 w-72 max-w-full bg-[#050a16]/95 backdrop-blur-2xl border-l border-white/[0.08] z-50 p-6 transition-transform duration-300 ease-in-out md:hidden shadow-[0_0_50px_rgba(0,0,0,0.95)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center">
            <Shield className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="font-sans text-sm font-bold text-white">Navigation</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.08]"
          >
            <X className="h-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-sans text-sm text-left py-2.5 px-3.5 rounded-xl transition-all duration-150 ${
                activeSection === link.id
                  ? 'text-black bg-cyan-400 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-around">
            <a
              href="https://github.com/karunesh-28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-150 flex items-center gap-2 font-sans text-xs"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karuneshchikne/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-150 flex items-center gap-2 font-sans text-xs"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

