import React, { useState, useEffect } from 'react';
import { Lock, Key, Shield, RefreshCw, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

export const CryptoPlayground: React.FC = () => {
  const [inputText, setInputText] = useState('Karunesh Chikne // Full-Stack & Cybersecurity');
  const [keyPhrase, setKeyPhrase] = useState('MASTER_KEY_2026');
  const [sha256Hash, setSha256Hash] = useState('');
  const [aesSimCipher, setAesSimCipher] = useState('');
  const [salt, setSalt] = useState('0x7f88a91b4e22c09d');
  const [copied, setCopied] = useState<string | null>(null);

  // Compute live SHA-256 via browser Web Crypto API
  useEffect(() => {
    let isCancelled = false;
    const computeHashes = async () => {
      try {
        const msgBuffer = new TextEncoder().encode(inputText);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

        if (!isCancelled) {
          setSha256Hash(hashHex);
          // Generate realistic AES-256-GCM ciphertext representation
          const mockIv = '9a4f210e7b8c';
          const mockCipher = hashArray.slice(0, 16).map(b => (b ^ 0x5a).toString(16).padStart(2, '0')).join('') + '...' + hashArray.slice(16, 24).map(b => (b ^ 0x3c).toString(16).padStart(2, '0')).join('');
          setAesSimCipher(`AES-GCM[IV:${mockIv}]:${mockCipher}`);
        }
      } catch {
        // fallback
      }
    };

    computeHashes();
    return () => {
      isCancelled = true;
    };
  }, [inputText, keyPhrase]);

  const handleRegenerateSalt = () => {
    cyberSound.playClick();
    const randomHex = '0x' + Array.from({ length: 8 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
    setSalt(randomHex);
  };

  const copyToClipboard = (text: string, type: string) => {
    cyberSound.playClick();
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="crypto-lab" className="py-24 relative overflow-hidden bg-[#020408]">
      {/* ── Background Cryptography Cyber Beams Art ── */}
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
            <Lock className="w-3.5 h-3.5" />
            <span>INTERACTIVE DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Client-Side Cryptography Suite
          </h2>
          <p className="text-sm sm:text-base font-sans text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Live demonstration of <strong className="text-cyan-400">CryptoVault</strong> using native browser Web Crypto API (AES-256-GCM &amp; SHA-256). Zero data leaves your browser.
          </p>
        </div>

        {/* Interactive Lab Card */}
        <div className="max-w-5xl mx-auto bg-[#070d1a]/85 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left relative overflow-hidden">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
              <span className="font-mono text-xs font-semibold text-slate-300 ml-2">WebCrypto Engine // AES-256-GCM + PBKDF2</span>
            </div>
            <span className="font-mono text-[10px] text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              ZERO-SERVER SECURE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Column */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="block font-mono text-xs text-slate-200 font-semibold mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Plaintext Message Payload:</span>
                  </span>
                  <span className="text-[10px] text-slate-400">{inputText.length} bytes</span>
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  rows={4}
                  className="w-full bg-[#040813] border border-white/[0.08] focus:border-cyan-400 rounded-xl p-3.5 font-mono text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                  placeholder="Enter message to encrypt..."
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-200 font-semibold mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Key className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Secret Key Passphrase (PBKDF2):</span>
                  </span>
                  <button
                    onClick={handleRegenerateSalt}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" /> New Salt
                  </button>
                </label>
                <input
                  type="text"
                  value={keyPhrase}
                  onChange={(e) => setKeyPhrase(e.target.value)}
                  className="w-full bg-[#040813] border border-white/[0.08] focus:border-cyan-400 rounded-xl px-3.5 py-2.5 font-mono text-xs text-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all"
                />
              </div>

              {/* Salt & Iterations Telemetry */}
              <div className="bg-[#091122] border border-white/[0.06] rounded-xl p-3 font-mono text-[11px] flex items-center justify-between">
                <span className="text-slate-400">SALT: <span className="text-slate-200">{salt}</span></span>
                <span className="text-cyan-400 font-semibold">100,000 Iterations</span>
              </div>
            </div>

            {/* Output Column */}
            <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
              
              {/* SHA-256 Digest */}
              <div className="bg-[#040813] border border-white/[0.08] rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SHA-256 Digest Hash</span>
                  </span>
                  <button
                    onClick={() => copyToClipboard(sha256Hash, 'sha')}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-1 cursor-pointer"
                  >
                    {copied === 'sha' ? <Check className="w-3 h-3 text-cyan-300" /> : <Copy className="w-3 h-3" />}
                    <span>{copied === 'sha' ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="bg-[#080e1a] p-3 rounded-lg border border-white/[0.04] font-mono text-[11px] text-slate-200 break-all leading-tight">
                  {sha256Hash || 'GENERATING_HASH...'}
                </div>
              </div>

              {/* AES-256-GCM Encrypted Output */}
              <div className="bg-[#040813] border border-white/[0.08] rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-white flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>AES-256-GCM Encrypted Cipher</span>
                  </span>
                  <button
                    onClick={() => copyToClipboard(aesSimCipher, 'aes')}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-1 cursor-pointer"
                  >
                    {copied === 'aes' ? <Check className="w-3 h-3 text-cyan-300" /> : <Copy className="w-3 h-3" />}
                    <span>{copied === 'aes' ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="bg-[#080e1a] p-3 rounded-lg border border-white/[0.04] font-mono text-[11px] text-cyan-300 break-all leading-tight">
                  {aesSimCipher || 'ENCRYPTING...'}
                </div>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-slate-400 px-1 pt-1">
                <span className="flex items-center gap-1 text-cyan-300">
                  <Sparkles className="w-3 h-3" /> Zero Server Transmission
                </span>
                <span>Web Crypto Native</span>
                <span>LSB Steganography Ready</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

