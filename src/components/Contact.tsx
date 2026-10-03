import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Terminal, CheckCircle2, Phone, MapPin, RotateCcw, AlertTriangle, Sparkles } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', acknowledged: true });
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [logs, setLogs] = useState<string[]>(['connection.status = READY']);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addLog = (msg: string, delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, msg]);
        resolve();
      }, delay);
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '1bf04122-c729-4791-b848-1dd3fc27e1e4';

    cyberSound.playScan();
    setStatus('transmitting');
    setLogs(['connection.status = INITIATING_WEB3FORMS_DISPATCH']);

    await addLog('> RESOLVING DESTINATION: api.web3forms.com...', 200);
    await addLog(`> SENDER IDENTITY: <${formData.email}>...`, 200);
    await addLog('> PACKAGING ENCRYPTED TELEMETRY PAYLOAD...', 250);

    if (!accessKey) {
      await addLog('> ERROR: Web3Forms access key is missing', 250);
      setErrorMessage('Web3Forms Access Key is missing.');
      setStatus('error');
      return;
    }

    try {
      await addLog('> TRANSMITTING TO WEB3FORMS ENDPOINT...', 300);

      const submissionData = new FormData();
      submissionData.append('access_key', accessKey);
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('message', formData.message);
      submissionData.append('subject', `New Portfolio Message from ${formData.name}`);
      submissionData.append('from_name', `${formData.name} via Portfolio`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData,
      });

      const responseText = await response.text();
      let data: { success?: boolean; message?: string } = {};
      try {
        data = JSON.parse(responseText);
      } catch {
        console.error('Web3Forms non-JSON response:', responseText);
        throw new Error('Web3Forms received an HTML response instead of JSON. Check browser console.');
      }

      console.log('Web3Forms API result:', data);

      if (data.success) {
        await addLog('> 200 OK: TRANSMISSION DELIVERED DIRECTLY TO INBOX', 250);
        setStatus('success');
        cyberSound.playSuccess();
        setFormData({ name: '', email: '', message: '', acknowledged: true });
      } else {
        throw new Error(data.message || 'Web3Forms rejected transmission');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Transmission failed';
      await addLog(`> TRANSMISSION ERROR: ${msg}`, 250);
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  const handleResetForm = () => {
    cyberSound.playClick();
    setStatus('idle');
    setErrorMessage('');
    setFormData({ name: '', email: '', message: '', acknowledged: true });
    setLogs(['connection.status = READY']);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020408]">
      {/* ── Background Cyber Encrypted Laser Transmission Art ── */}
      <div
        className="hacker-bg-canvas"
        style={{ backgroundImage: "url('/bg-contact.jpg')" }}
      />
      <div className="hacker-vignette" />
      <div className="hacker-gradient-edges" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base font-sans text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Interested in collaboration, internship opportunities, or discussing full-stack &amp; cybersecurity projects? Send a message directly.
          </p>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#070d1a]/85 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/30 rounded-2xl p-6 sm:p-7 text-left space-y-5 flex-grow shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]"></span>
                  <span>Contact Information</span>
                </h3>
                <p className="text-xs font-sans text-slate-400 leading-relaxed">
                  Direct channels for software engineering roles, internships, and queries.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <a
                  href="mailto:2023.karuneshc@isu.ac.in"
                  onClick={() => cyberSound.playClick()}
                  className="flex items-center gap-3.5 p-3.5 bg-[#091122] border border-white/[0.06] hover:border-cyan-400/40 rounded-xl transition-all group"
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block font-mono text-[10px] text-slate-400">PRIMARY EMAIL</span>
                    <span className="font-mono text-xs text-white group-hover:text-cyan-300 transition-colors">2023.karuneshc@isu.ac.in</span>
                  </div>
                </a>

                <a
                  href="tel:9004801975"
                  onClick={() => cyberSound.playClick()}
                  className="flex items-center gap-3.5 p-3.5 bg-[#091122] border border-white/[0.06] hover:border-cyan-400/40 rounded-xl transition-all group"
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block font-mono text-[10px] text-slate-400">PHONE NUMBER</span>
                    <span className="font-mono text-xs text-white group-hover:text-cyan-300 transition-colors">+91 9004801975</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 bg-[#091122] border border-white/[0.06] rounded-xl">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block font-mono text-[10px] text-slate-400">LOCATION</span>
                    <span className="font-mono text-xs text-white">Mumbai, Maharashtra, India</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="https://github.com/karunesh-28"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => cyberSound.playClick()}
                    className="flex items-center justify-center gap-2 p-3 bg-[#091122] border border-white/[0.06] hover:border-cyan-400/40 rounded-xl text-slate-200 hover:text-cyan-300 transition-all font-mono text-xs font-semibold"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/karuneshchikne/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => cyberSound.playClick()}
                    className="flex items-center justify-center gap-2 p-3 bg-[#091122] border border-white/[0.06] hover:border-cyan-400/40 rounded-xl text-slate-200 hover:text-cyan-300 transition-all font-mono text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Connection log screen */}
            <div className="bg-[#040813] border border-white/[0.08] rounded-2xl p-4 font-mono text-xs text-left min-h-[120px] flex flex-col justify-between shadow-inner">
              <div className="flex items-center gap-2 border-b border-white/[0.06] pb-2 mb-2 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>telemetry_status.log</span>
              </div>
              
              <div className="space-y-1 flex-grow overflow-auto">
                {logs.map((log, idx) => (
                  <div key={idx} className="text-cyan-300 text-[11px] leading-relaxed">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7">
            <div className="bg-[#070d1a]/85 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 text-left h-full shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                <div>
                  <label htmlFor="name" className="block font-sans text-xs text-slate-200 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={status === 'transmitting'}
                    placeholder="Enter your name"
                    className="w-full bg-[#040813] border border-white/[0.08] focus:border-cyan-400 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-sans text-xs text-slate-200 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={status === 'transmitting'}
                    placeholder="you@example.com"
                    className="w-full bg-[#040813] border border-white/[0.08] focus:border-cyan-400 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-xs text-slate-200 font-semibold mb-2">
                    Message Payload *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={status === 'transmitting'}
                    placeholder="Share your inquiry, opportunity, or project requirements..."
                    className="w-full bg-[#040813] border border-white/[0.08] focus:border-cyan-400 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none disabled:opacity-50"
                  />
                </div>

                {/* Checkbox Acknowledgment */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="ack"
                    checked={formData.acknowledged}
                    onChange={(e) => setFormData({ ...formData, acknowledged: e.target.checked })}
                    className="mt-1 accent-cyan-400 rounded"
                  />
                  <label htmlFor="ack" className="font-sans text-xs text-slate-400 cursor-pointer leading-tight">
                    I acknowledge and consent to the transmission of my submitted data across secure channels.
                  </label>
                </div>

                <div className="pt-2">
                  {status === 'success' && (
                    <div className="space-y-3">
                      <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-sans text-sm p-4 rounded-xl text-center space-y-2 shadow-[0_0_25px_rgba(0,240,255,0.15)]">
                        <div className="flex items-center justify-center gap-2 font-bold text-base text-cyan-400">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                          <span>Transmission Delivered Directly to Inbox</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          Your message has been securely sent via Web3Forms. I will get back to you shortly.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="w-full font-mono text-xs py-3 px-4 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black font-semibold transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="space-y-3">
                      <div className="bg-red-500/10 border border-red-500/30 text-red-300 font-sans text-xs p-4 rounded-xl text-left space-y-2">
                        <div className="flex items-center gap-2 font-bold text-sm text-red-400">
                          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                          <span>Transmission Failed</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {errorMessage || 'Unable to transmit message through Web3Forms.'}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="w-full font-mono text-xs py-3 px-4 rounded-xl bg-[#091122] border border-white/[0.08] hover:border-cyan-400/40 text-slate-200 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Try Again</span>
                      </button>
                    </div>
                  )}

                  {(status === 'idle' || status === 'transmitting') && (
                    <button
                      type="submit"
                      disabled={status === 'transmitting' || !formData.name || !formData.email || !formData.message}
                      className="w-full font-sans text-sm py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'transmitting' ? (
                        <span>Transmitting Encrypted Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

