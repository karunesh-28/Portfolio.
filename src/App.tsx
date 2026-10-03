import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CryptoPlayground } from './components/CryptoPlayground';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { CyberTerminal } from './components/CyberTerminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CyberMatrixBackground } from './components/CyberMatrixBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'crypto-lab',
        'experience',
        'education',
        'certifications',
        'github',
        'cyberlab',
        'network-monitor',
        'security-telemetry',
        'contact',
      ];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
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

  return (
    <div className="min-h-screen bg-[#020408] text-cyber-text-main relative selection:bg-cyber-cyan selection:text-black">
      {/* Global Interactive Matrix & Circuit Ambient Canvas */}
      <CyberMatrixBackground />

      {/* Main layout contents */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
          <Hero onViewProjects={handleScrollToProjects} />
          <About />
          <Skills />
          <Projects />
          <CryptoPlayground />
          <Experience />
          <Education />
          <Certifications />
          <CyberTerminal />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
