import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Wifi, Shield, Sparkles } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success' | 'system';
}

export const CyberTerminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: '=====================================================', type: 'system' },
    { text: '   KARUNESH CHIKNE // DEVELOPER & SECURITY SHELL v3.2', type: 'system' },
    { text: '   HOST: secure-kernel-node (TLS 1.3 // AES-256-GCM)', type: 'system' },
    { text: '=====================================================', type: 'system' },
    { text: 'Type "help" to view authorized system commands.', type: 'output' },
    { text: '', type: 'output' },
    { text: '┌──(karunesh㉿cyber-archive)-[~/portfolio]', type: 'output' },
    { text: '└─$ whoami', type: 'input' },
    { text: 'Karunesh Chikne | Full-Stack Developer & CS Student', type: 'success' },
    { text: 'B.Tech Computer Science Engineering @ ITM Skills University, Mumbai', type: 'output' },
  ]);

  const [inputVal, setInputVal] = useState('');
  const consoleContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop = consoleContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = inputVal.trim();
    if (!cleanInput) return;

    cyberSound.playClick();

    const newHistory = [...history];
    newHistory.push({
      text: `┌──(karunesh㉿cyber-archive)-[~/portfolio]\n└─$ ${cleanInput}`,
      type: 'input',
    });

    const command = cleanInput.toLowerCase().split(' ')[0];
    const args = cleanInput.split(' ').slice(1).join(' ');

    switch (command) {
      case 'help':
        newHistory.push({
          text: `AVAILABLE TERMINAL COMMANDS:
  whoami        - Display full developer identity & academic profile
  skills        - Query full-stack technical competencies & tooling
  projects      - List featured production projects (Vendex, Sofi, CryptoVault)
  experience    - Display professional industry internship details
  cat <target>  - Inspect files (e.g., cat resume, cat certs, cat contact)
  nmap          - Simulate vulnerability and port audit on target node
  decrypt       - Execute AES-256-GCM block decryption algorithm
  clear         - Clear the terminal console buffer`,
          type: 'output',
        });
        break;

      case 'whoami':
        newHistory.push({
          text: `[IDENTITY VERIFIED]
Name:         Karunesh Chikne
Education:    B.Tech Computer Science Engineering (2023–2027)
Institution:  ITM Skills University, Mumbai, India
Focus:        Full-Stack Systems, React.js, Node.js, Laravel, Cybersecurity, Cryptography
Status:       Available for Software Engineering Internships & Full-Stack Roles`,
          type: 'success',
        });
        break;

      case 'skills':
        newHistory.push({
          text: `[TECHNICAL CAPABILITIES]
Languages:    C++, Python, Java, JavaScript, PHP, SQL
Frontend:     React.js, TailwindCSS, Responsive Design, UI/UX Wireframing (Figma)
Backend:      Node.js, Express.js, Laravel, RESTful APIs, JWT Auth
Databases:    MongoDB, MySQL, Firebase Firestore, PostgreSQL
DevOps/Cloud: AWS (Cloud Essentials), Git, GitHub, Docker, Automated Testing (Selenium, Cypress)
Security:     Web Crypto API, AES-256-GCM, RSA, SHA-256, OWASP Auditing`,
          type: 'success',
        });
        break;

      case 'projects':
        newHistory.push({
          text: `[PRODUCTION PROJECTS]
1. Vendex (B2B Procurement Platform)
   Stack: React.js, Node.js, Express.js, MongoDB, Firebase
   Desc:  Streamlines transactions between enterprise buyers and suppliers with real-time data sync.

2. Sofi (Music Streaming Platform)
   Stack: Full-Stack Development, React.js, Node.js, UI/UX
   Desc:  High-performance audio playback platform with intuitive navigation and responsive design.

3. CryptoVault (Client-Side Cryptography Suite)
   Stack: JavaScript, Web Crypto API, AES-256-GCM, RSA-4096, SHA-256, Canvas
   Desc:  Zero-server client-side cryptography and LSB steganography engine.`,
          type: 'output',
        });
        break;

      case 'experience':
        newHistory.push({
          text: `[EMPLOYMENT RECORD]
Role:         Full-Stack Developer Intern
Company:      Fundcorps (Remote, India)
Duration:     Jul 2026 – Dec 2026
Stack:        PHP, Laravel, SQL, React.js, Responsive UI, REST APIs
Impact:       Contributed to full-stack website revamp, engineered responsive authentication interfaces, and integrated secure SQL database pipelines.`,
          type: 'success',
        });
        break;

      case 'nmap':
      case 'scan':
        newHistory.push({
          text: `Starting Nmap 7.94 ( https://nmap.org )
Initiating SYN Stealth Scan against host (127.0.0.1)...
Scanning 1000 ports...
PORT     STATE SERVICE       REASON
22/tcp   open  ssh           syn-ack (RSA-4096 authorized)
80/tcp   open  http          syn-ack (Nginx Reverse Proxy)
443/tcp  open  https         syn-ack (TLSv1.3 / AES-256-GCM)
3000/tcp open  react-vite    syn-ack (Vite Dev Engine)
5000/tcp open  node-backend  syn-ack (Express REST API)

Nmap scan report: 0 vulnerabilities found. Threat rating: DEFCON 5 (ALL SECURE).`,
          type: 'success',
        });
        break;

      case 'decrypt':
        newHistory.push({
          text: `[CRYPTOGRAPHIC ENGINE INITIALIZING]
[+] Loading Web Crypto Key derivation (PBKDF2, 100,000 iterations)...
[+] Decrypting AES-256-GCM Block 1... [DONE]
[+] Verifying SHA-256 Payload Checksum... [MATCHED]
[+] RSA-4096 Signature Check... [VALID]

DECRYPTED PAYLOAD: "Keep learning. Keep building. Security is designed."`,
          type: 'success',
        });
        break;

      case 'cat':
        if (!args) {
          newHistory.push({ text: 'cat: missing operand. Example: cat resume, cat contact, cat certs', type: 'error' });
        } else {
          const target = args.toLowerCase();
          if (target.includes('resume')) {
            newHistory.push({
              text: `[RESUME: KARUNESH CHIKNE]
- Email:    2023.karuneshc@isu.ac.in
- Phone:    +91 9004801975
- College:  ITM Skills University (B.Tech CSE, 2023–2027)
- GitHub:   https://github.com/karunesh-28
- LinkedIn: https://www.linkedin.com/in/karuneshchikne/`,
              type: 'success',
            });
          } else if (target.includes('contact')) {
            newHistory.push({
              text: `Primary Email: 2023.karuneshc@isu.ac.in
Phone:         +91 9004801975
Location:      Mumbai, Maharashtra, India`,
              type: 'output',
            });
          } else if (target.includes('cert')) {
            newHistory.push({
              text: `1. AWS Cloud Professional Essentials (Amazon Web Services)
2. SQL and Relational Databases — 101 (IBM Skills Network / Cognitive Class)`,
              type: 'output',
            });
          } else {
            newHistory.push({ text: `cat: ${args}: File not found in archive. Try 'cat resume'`, type: 'error' });
          }
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          text: `bash: command not found: "${command}". Type "help" to see authorized commands.`,
          type: 'error',
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="cyberlab" className="py-24 relative overflow-hidden bg-[#020408]">
      {/* ── Background Cyber CRT Terminal Battlestation Art ── */}
      <div
        className="hacker-bg-canvas"
        style={{ backgroundImage: "url('/bg-terminal.jpg')" }}
      />
      <div className="hacker-vignette" />
      <div className="hacker-gradient-edges" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE CLI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Developer Terminal
          </h2>
          <p className="text-sm sm:text-base font-sans text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Execute interactive commands to explore my technical background, projects, security tests, and resume data.
          </p>
        </div>

        {/* Console Container */}
        <div
          className="bg-[#070d1a]/90 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden max-w-5xl mx-auto cursor-text text-left transition-all"
          onClick={focusInput}
        >
          {/* Terminal Title Bar */}
          <div className="bg-[#040813] border-b border-white/[0.06] px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
            </div>
            
            <div className="font-mono text-xs text-slate-300 flex items-center gap-2 font-medium">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>karunesh@portfolio-shell: ~ (zsh)</span>
            </div>
            
            {/* Status indicators */}
            <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
              <Wifi className="w-3 h-3 text-cyan-400" />
              <span>ONLINE</span>
            </div>
          </div>

          {/* Screen History */}
          <div ref={consoleContainerRef} className="p-6 font-mono text-xs md:text-sm text-left space-y-2.5 bg-[#03060f]/95 min-h-[360px] max-h-[480px] overflow-y-auto">
            {history.map((line, idx) => {
              let colorClass = 'text-slate-300';
              if (line.type === 'input') colorClass = 'text-white font-semibold';
              if (line.type === 'error') colorClass = 'text-red-400 font-semibold';
              if (line.type === 'success') colorClass = 'text-cyan-300 font-semibold';
              if (line.type === 'system') colorClass = 'text-sky-400 font-medium';

              return (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                  {line.type === 'input' ? (
                    <span>{line.text}</span>
                  ) : (
                    <span className={colorClass}>{line.text}</span>
                  )}
                </div>
              );
            })}
            
            {/* Interactive prompt line */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-cyan-400 flex-shrink-0 font-bold">└─$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="bg-transparent border-none outline-none text-white font-mono flex-grow focus:ring-0 p-0 text-xs md:text-sm"
                placeholder="Type command (try 'help', 'skills', 'projects', 'whoami')..."
                autoFocus={false}
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>

          {/* Terminal Footer Quick Buttons */}
          <div className="bg-[#040813] border-t border-white/[0.06] px-5 py-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
            <div className="flex flex-wrap items-center gap-1.5 text-slate-400">
              <span className="mr-1 text-xs text-slate-300">Quick:</span>
              {['help', 'whoami', 'skills', 'projects', 'experience', 'nmap', 'decrypt', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={(e) => {
                    e.stopPropagation();
                    setInputVal(cmd);
                    setTimeout(() => {
                      inputRef.current?.focus();
                    }, 50);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-[#091122] border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-mono">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>TLS 1.3 SECURED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

