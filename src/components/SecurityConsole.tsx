import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Play, RefreshCw, Cpu, Activity } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

export const SecurityConsole: React.FC = () => {
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [auditLogs, setAuditLogs] = useState<string[]>(['[SYSTEM] Security telemetry console initialized.']);
  const [cpuUsage, setCpuUsage] = useState<number[]>(Array(20).fill(12));
  const [ramUsage, setRamUsage] = useState<number>(38.4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCpuUsage((prev) => {
        const next = [...prev.slice(1)];
        const variance = Math.floor(Math.random() * 20) - 10;
        const current = Math.max(5, Math.min(95, prev[prev.length - 1] + variance));
        next.push(current);
        return next;
      });
      setRamUsage((prev) => {
        const variance = (Math.random() * 0.4) - 0.2;
        return Math.max(30.0, Math.min(80.0, Number((prev + variance).toFixed(1))));
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addLog = (msg: string, delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setAuditLogs((prev) => [...prev, msg]);
        resolve();
      }, delay);
    });
  };

  const startSecurityScan = async () => {
    if (scanStatus === 'scanning') return;
    cyberSound.playScan();
    setScanStatus('scanning');
    setScanProgress(5);
    setAuditLogs(['[INFO] Initializing system audit...']);

    await addLog('[INFO] Checking DOM element configurations...', 350);
    setScanProgress(20);
    await addLog('[OK] Semantic elements verified (Navbar, Main, Section, Footer).', 250);
    
    setScanProgress(40);
    await addLog('[INFO] Reviewing client-side memory safety...', 350);
    await addLog('[OK] LocalStorage/SessionStorage audit: SECURE (no exposed secrets).', 250);
    
    setScanProgress(60);
    await addLog('[INFO] Analyzing HTTP headers & SSL config...', 400);
    await addLog('[OK] TLS 1.3 active. Encrypted packet transfers verified (AES-256).', 250);

    setScanProgress(80);
    await addLog('[INFO] Evaluating routing layers & API gateways...', 400);
    await addLog('[OK] Route transitions optimized. Zero exposed backend routes.', 300);

    setScanProgress(95);
    await addLog('[INFO] Finalizing threat-model validation...', 350);
    await addLog('[SECURE] 0 vulnerabilities detected. Threat level: DEFCON 5 (ALL CLEAR).', 250);
    
    setScanProgress(100);
    setScanStatus('complete');
    cyberSound.playSuccess();
  };

  const resetScan = () => {
    cyberSound.playClick();
    setScanStatus('idle');
    setScanProgress(0);
    setAuditLogs(['[SYSTEM] Diagnostic console ready. Reset complete.']);
  };

  return (
    <section id="security-telemetry" className="py-20 relative overflow-hidden bg-cyber-bg">
      {/* ── Background Cyber SOC Radar Operations Art ── */}
      <div
        className="hacker-bg-canvas"
        style={{ backgroundImage: "url('/bg-security.jpg')" }}
      />
      <div className="hacker-vignette" />
      <div className="hacker-gradient-edges" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">

        {/* Section Title */}
        <div className="text-left mb-10">
          <div className="font-mono text-cyber-blue text-xs font-bold tracking-widest mb-1">&gt; sys.telemetry</div>
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-white flex items-center gap-2">
            ./security_diagnostics <span className="w-2.5 h-5 bg-cyber-cyan animate-cursor-blink inline-block"></span>
          </h2>
          <div className="w-20 h-1 bg-cyber-cyan mt-3 shadow-[0_0_10px_rgba(0,240,255,0.6)]"></div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto text-left">
          
          {/* Live Telemetry monitor (Left) */}
          <div className="lg:col-span-5 bg-[#070c16] border-2 border-cyber-cyan/40 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.08)]">
            <div>
              <div className="flex items-center justify-between border-b border-cyber-border pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <Activity className="w-4 h-4 text-cyber-cyan" />
                  <span className="font-bold">HARDWARE_TELEMETRY</span>
                </div>
                <span className="font-mono text-[9px] px-2 py-0.5 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 rounded-full">
                  LIVE_PROFILER
                </span>
              </div>

              {/* Resource stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#04070e] border border-cyber-cyan/30 p-3.5 rounded-xl">
                  <div className="flex items-center justify-between font-mono text-[10px] text-cyber-text-muted mb-1">
                    <span>CPU_LOAD</span>
                    <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />
                  </div>
                  <div className="font-mono text-lg font-bold text-white">
                    {cpuUsage[cpuUsage.length - 1]}%
                  </div>
                </div>

                <div className="bg-[#04070e] border border-cyber-cyan/30 p-3.5 rounded-xl">
                  <div className="flex items-center justify-between font-mono text-[10px] text-cyber-text-muted mb-1">
                    <span>RAM_USE</span>
                    <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
                  </div>
                  <div className="font-mono text-lg font-bold text-white">
                    {ramUsage} MB
                  </div>
                </div>
              </div>

              {/* SVG Sparkline chart for CPU load */}
              <div className="bg-[#04070e] border border-cyber-cyan/30 rounded-xl p-4 mb-4">
                <div className="font-mono text-[9px] text-cyber-cyan mb-2">// CPU_HISTORY_SPARK</div>
                <div className="h-20 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d={`M ${cpuUsage.map((val, idx) => `${(idx / (cpuUsage.length - 1)) * 100} ${30 - (val / 100) * 25}`).join(' L ')}`}
                      fill="none"
                      stroke="#00f0ff"
                      strokeWidth="1.5"
                    />
                    <path
                      d={`M 0 30 L ${cpuUsage.map((val, idx) => `${(idx / (cpuUsage.length - 1)) * 100} ${30 - (val / 100) * 25}`).join(' L ')} L 100 30 Z`}
                      fill="url(#sparkline-cyan-gradient)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="sparkline-cyan-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00f0ff" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-cyber-text-muted border-t border-cyber-border pt-3 flex justify-between">
              <span>NODE: LOCAL_SECURE_CLIENT</span>
              <span className="text-cyber-cyan">STATE: OPTIMAL</span>
            </div>
          </div>

          {/* Vulnerability Auditor (Right) */}
          <div className="lg:col-span-7 bg-[#070c16] border-2 border-cyber-cyan/40 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.08)]">
            <div>
              <div className="flex items-center justify-between border-b border-cyber-border pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <Terminal className="w-4 h-4 text-cyber-cyan" />
                  <span className="font-bold">VULNERABILITY_INSPECTOR</span>
                </div>
                <span className="font-mono text-[9px] px-2 py-0.5 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 rounded-full">
                  AUDIT_ENGINE
                </span>
              </div>

              {/* Progress Bar */}
              <div className="bg-[#04070e] border border-cyber-cyan/30 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className="text-white">AUDIT_PROGRESS:</span>
                  <span className="text-cyber-cyan font-bold">{scanProgress}%</span>
                </div>
                <div className="w-full bg-[#0b1322] h-2.5 border border-cyber-border rounded-full overflow-hidden">
                  <div
                    className="bg-cyber-cyan h-full transition-all duration-300 shadow-[0_0_12px_#00f0ff]"
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* Simulation Logging Console */}
              <div className="bg-[#04070e] border border-cyber-cyan/30 rounded-xl p-4 font-mono text-xs text-cyber-text-main h-44 overflow-y-auto space-y-1.5 terminal-screen">
                <div className="terminal-scanline"></div>
                {auditLogs.map((log, index) => {
                  let colorClass = 'text-slate-300';
                  if (log.includes('[SECURE]')) colorClass = 'text-cyber-cyan font-bold';
                  if (log.includes('[OK]')) colorClass = 'text-cyber-cyan';
                  if (log.includes('[INFO]')) colorClass = 'text-cyber-blue';

                  return (
                    <div key={index} className={`${colorClass} leading-relaxed`}>
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              {scanStatus === 'idle' && (
                <button
                  onClick={startSecurityScan}
                  className="font-mono text-xs px-5 py-2.5 bg-cyber-cyan text-black font-bold rounded-xl border border-cyber-cyan hover:bg-white transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  <Play className="w-3.5 h-3.5" /> RUN SECURITY AUDIT
                </button>
              )}
              {scanStatus === 'scanning' && (
                <div className="font-mono text-xs px-5 py-2.5 bg-[#0b1322] border border-cyber-cyan/40 text-cyber-cyan rounded-xl flex items-center gap-2 animate-pulse">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> AUDITING APPLICATION ROUTING &amp; HEADERS...
                </div>
              )}
              {scanStatus === 'complete' && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetScan}
                    className="font-mono text-xs px-5 py-2.5 bg-[#0b1322] border border-cyber-cyan/40 text-white rounded-xl hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-200 cursor-pointer flex items-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> RE-AUDIT
                  </button>
                  <div className="font-mono text-xs text-cyber-cyan flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4 shadow-[0_0_8px_#00f0ff]" />
                    <span>SYSTEM_SAFE</span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
