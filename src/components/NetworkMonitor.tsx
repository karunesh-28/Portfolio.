import React, { useState, useEffect, useRef } from 'react';
import { Network, Cpu, Radio, Shield } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

interface Packet {
  timestamp: string;
  proto: string;
  source: string;
  dest: string;
  info: string;
  status: 'info' | 'warn' | 'success';
}

export const NetworkMonitor: React.FC = () => {
  const [packets, setPackets] = useState<Packet[]>([]);
  const [selectedPacket, setSelectedPacket] = useState<Packet | null>(null);
  const packetContainerRef = useRef<HTMLDivElement>(null);

  const sources = ['192.168.1.104', '10.0.0.45', '172.16.2.8', 'localhost', 'secure-proxy.node'];
  const dests = ['api.github.com:443', 'mongodb-cluster:27017', 'auth-service:8080', 'cloudflare-dns:53'];
  const protocols = ['TCP', 'TLSv1.3', 'HTTP/2', 'AES-GCM', 'DNS'];

  const infos = [
    { text: 'GET /api/v1/projects HTTP/1.1 (Payload: 0 bytes)', status: 'info' },
    { text: 'TCP handshake established (SYN-ACK / TLS 1.3)', status: 'success' },
    { text: 'Inspecting inbound frame headers... Header integrity passed.', status: 'info' },
    { text: 'DB Query: SELECT projects FROM vendex_storefront', status: 'info' },
    { text: 'Cryptographic validation. Hash matched SHA-256.', status: 'success' },
    { text: 'Port scan audit triggered on subnet range 192.168.1.0/24', status: 'warn' },
    { text: 'Blocked unauthorized ping request from external IP', status: 'warn' },
    { text: 'API Gateway token authorization validation: VERIFIED', status: 'success' },
  ];

  const getHexDump = (packet: Packet | null) => {
    if (!packet) return 'NO_PACKET_SELECTED';
    if (packet.proto === 'TCP') {
      return `0000  02 42 ac 11 00 02 02 42  3b b2 ac 21 08 00 45 00  .B.....B;..!..E.\n` +
             `0010  00 3c 1c 46 40 00 64 06  b1 e6 0a 00 00 01 0a 00  .<.F@.d.........\n` +
             `0020  00 02 00 50 d4 31 00 00  00 00 00 00 00 00 a0 02  ...P.3..........\n` +
             `0030  7f fc 37 7a 00 00 02 04  05 b4 04 02 08 0a 00 00  ..7z............`;
    }
    if (packet.proto === 'HTTP/2') {
      return `0000  45 00 01 55 2d 1b 40 00  40 06 a0 ca 0a 00 02 0f  E..U-.@.@.......\n` +
             `0010  bc 53 1a 40 01 bb 96 a4  27 5b ca e2 d1 83 80 18  .S.@....'[......\n` +
             `0020  01 f5 b4 a0 00 00 01 01  08 0a b4 d8 00 00 00 00  ................\n` +
             `0030  47 45 54 20 2f 61 70 69  2f 76 31 2f 70 72 6f 6a  GET /api/v1/proj`;
    }
    if (packet.proto === 'TLSv1.3' || packet.proto === 'AES-GCM') {
      return `0000  16 03 03 00 46 02 00 00  42 03 03 9d 8d ed fd f2  ....F...B.......\n` +
             `0010  30 76 e3 b7 e2 a0 f4 f7  0f 94 dc c1 a6 fc c4 dc  0v..............\n` +
             `0020  a1 a6 fd cc d9 f0 a2 11  20 c7 e4 ca f6 ec f2 ec  ........ .......\n` +
             `0030  13 02 00 00 2e 00 2b 00  02 03 04 00 33 00 24 00  ......+.....3.$.`;
    }
    return `0000  45 00 00 2e c1 a4 00 00  40 11 4c c7 0a 00 00 01  E.......@.L.....\n` +
           `0010  08 08 08 08 a9 de 00 35  00 1a a4 3d 00 01 01 00  .......5...=....\n` +
           `0020  00 00 00 00 00 00 03 61  70 69 06 67 69 74 68 75  .......api.githu\n` +
           `0030  62 03 63 6f 6d 00 00 01  00 01                    b.com.....`;
  };

  useEffect(() => {
    if (packetContainerRef.current) {
      packetContainerRef.current.scrollTop = packetContainerRef.current.scrollHeight;
    }
  }, [packets]);

  useEffect(() => {
    const initialPackets: Packet[] = Array(6).fill(null).map((_, idx) => {
      const now = new Date();
      now.setSeconds(now.getSeconds() - (6 - idx) * 3);
      const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
      const randomInfo = infos[Math.floor(Math.random() * infos.length)];
      return {
        timestamp: timeStr,
        proto: protocols[Math.floor(Math.random() * protocols.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        dest: dests[Math.floor(Math.random() * dests.length)],
        info: randomInfo.text,
        status: randomInfo.status as 'info' | 'warn' | 'success',
      };
    });
    setPackets(initialPackets);
    if (initialPackets.length > 0) {
      setSelectedPacket(initialPackets[initialPackets.length - 1]);
    }

    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
      const randomInfo = infos[Math.floor(Math.random() * infos.length)];

      setPackets((prev) => {
        const next = [...prev];
        if (next.length > 25) next.shift();
        next.push({
          timestamp: timeStr,
          proto: protocols[Math.floor(Math.random() * protocols.length)],
          source: sources[Math.floor(Math.random() * sources.length)],
          dest: dests[Math.floor(Math.random() * dests.length)],
          info: randomInfo.text,
          status: randomInfo.status as 'info' | 'warn' | 'success',
        });
        return next;
      });
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="network-monitor" className="py-20 relative overflow-hidden bg-cyber-bg">
      {/* ── Background Cyber SOC Radar Command Room Art ── */}
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
            ./network_topology_monitor <span className="w-2.5 h-5 bg-cyber-cyan animate-cursor-blink inline-block"></span>
          </h2>
          <div className="w-20 h-1 bg-cyber-cyan mt-3 shadow-[0_0_10px_rgba(0,240,255,0.6)]"></div>
        </div>

        {/* Console & Diagram Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto text-left">
          
          {/* Animated SVG Network Diagram (Left) */}
          <div className="lg:col-span-5 bg-[#070c16] border-2 border-cyber-cyan/40 rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative shadow-[0_0_30px_rgba(0,240,255,0.08)]">
            <div>
              <div className="flex items-center justify-between border-b border-cyber-border pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <Network className="w-4 h-4 text-cyber-cyan" />
                  <span className="font-bold">TOPOLOGY_MAP</span>
                </div>
                <span className="font-mono text-[9px] px-2 py-0.5 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 rounded-full flex items-center gap-1">
                  <Radio className="w-2.5 h-2.5 animate-pulse text-cyber-cyan" /> LIVE_STREAM
                </span>
              </div>

              {/* Animated SVG Graph */}
              <div className="flex items-center justify-center p-2 relative h-64 bg-[#04070e] border border-cyber-cyan/25 rounded-xl">
                <svg className="w-full h-full" viewBox="0 0 200 160">
                  <defs>
                    <linearGradient id="line-glow-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Connective Lines */}
                  <path d="M 30 80 L 100 80" stroke="url(#line-glow-cyan)" strokeWidth="1.5" fill="none" />
                  <path d="M 100 80 L 170 80" stroke="url(#line-glow-cyan)" strokeWidth="1.5" fill="none" />
                  <path d="M 100 80 L 100 35" stroke="url(#line-glow-cyan)" strokeWidth="1.5" fill="none" />
                  <path d="M 100 80 L 100 125" stroke="url(#line-glow-cyan)" strokeWidth="1.5" fill="none" />

                  {/* Animated Data Packets */}
                  <circle r="3" fill="#00f0ff">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 30 80 L 100 80" />
                  </circle>
                  <circle r="3" fill="#38bdf8">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 100 80 L 170 80" />
                  </circle>
                  <circle r="2.5" fill="#a855f7">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 100 80 L 100 35" />
                  </circle>
                  <circle r="2.5" fill="#00f0ff">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 100 80 L 100 125" />
                  </circle>

                  {/* Node Drawings */}
                  <circle cx="30" cy="80" r="10" fill="#0c1524" stroke="#00f0ff" strokeWidth="1.5" />
                  <text x="30" y="96" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">CLIENT</text>

                  <circle cx="100" cy="80" r="12" fill="#0c1524" stroke="#00f0ff" strokeWidth="2" className="animate-pulse" />
                  <text x="100" y="98" fill="#00f0ff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ROUTER</text>

                  <circle cx="170" cy="80" r="10" fill="#0c1524" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="170" y="96" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">WAN_GW</text>

                  <rect x="88" y="25" width="24" height="10" rx="2" fill="#0c1524" stroke="#a855f7" strokeWidth="1.5" />
                  <text x="100" y="21" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">NODE_API</text>

                  <rect x="88" y="120" width="24" height="10" rx="2" fill="#0c1524" stroke="#00f0ff" strokeWidth="1.5" />
                  <text x="100" y="137" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">MONGODB</text>
                </svg>
              </div>
            </div>

            <div className="text-[10px] font-mono text-cyber-text-muted border-t border-cyber-border pt-3 mt-4 flex justify-between">
              <span>PACKET_RATE: 2.8 pkts/s</span>
              <span className="text-cyber-cyan font-bold">HEALTH: 100% OK</span>
            </div>
          </div>

          {/* Live Packet Sniffer Console (Right) */}
          <div className="lg:col-span-7 bg-[#070c16] border-2 border-cyber-cyan/40 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.08)]">
            <div>
              <div className="flex items-center justify-between border-b border-cyber-border pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <Cpu className="w-4 h-4 text-cyber-cyan" />
                  <span className="font-bold">PACKET_SNIFFER_CONSOLE</span>
                </div>
                <span className="font-mono text-[9px] text-cyber-cyan px-2 py-0.5 bg-[#0b1322] border border-cyber-cyan/30 rounded">
                  FILTER: TCP/TLS/HTTP
                </span>
              </div>

              {/* Packet Stream Console */}
              <div ref={packetContainerRef} className="bg-[#04070e] border border-cyber-cyan/25 rounded-xl p-4 font-mono text-[10px] md:text-xs text-left h-48 overflow-y-auto space-y-1.5 terminal-screen">
                <div className="terminal-scanline"></div>
                {packets.map((packet, index) => {
                  let alertClass = 'text-slate-300';
                  let prefix = '[INFO]';
                  const isSelected = selectedPacket === packet;
                  if (packet.status === 'warn') {
                    alertClass = 'text-amber-400 font-bold';
                    prefix = '[WARN]';
                  } else if (packet.status === 'success') {
                    alertClass = 'text-cyber-cyan font-bold';
                    prefix = '[OK]  ';
                  }

                  return (
                    <div
                      key={index}
                      onClick={() => {
                        cyberSound.playClick();
                        setSelectedPacket(packet);
                      }}
                      className={`leading-relaxed cursor-pointer p-1.5 rounded-lg transition-colors duration-150 border ${
                        isSelected 
                          ? 'bg-cyber-cyan/15 border-cyber-cyan text-white shadow-[0_0_10px_rgba(0,240,255,0.2)]' 
                          : 'border-transparent hover:bg-[#0b1322] hover:border-cyber-cyan/30'
                      }`}
                    >
                      <div className="flex justify-between items-center text-[9px] md:text-[10px]">
                        <div>
                          <span className="text-cyber-text-muted">{packet.timestamp}</span>{' '}
                          <span className="text-cyber-cyan font-bold">[{packet.proto}]</span>{' '}
                          <span className="text-slate-400">{packet.source}</span>
                          <span className="text-cyber-cyan font-bold"> -&gt; </span>
                          <span className="text-slate-400">{packet.dest}</span>
                        </div>
                        <span className="text-[8px] text-cyber-cyan">DECODE</span>
                      </div>
                      <div className={`pl-4 ${alertClass} text-[10px]`}>
                        {prefix} {packet.info}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Wireshark Hex Dump Inspection Panel */}
              <div className="mt-4 bg-[#03060c] border border-cyber-cyan/25 rounded-xl p-4 text-left">
                <div className="flex items-center justify-between border-b border-cyber-border pb-1.5 mb-2 font-mono text-[9px] text-cyber-cyan">
                  <span>HEX_PAYLOAD_DECODE (WIRESHARK_SIM)</span>
                  {selectedPacket && (
                    <span>
                      LEN: {selectedPacket.info.length}B | PROTO: {selectedPacket.proto}
                    </span>
                  )}
                </div>
                <pre className="font-mono text-[9px] md:text-[10px] text-cyber-text-muted leading-relaxed overflow-x-auto select-all whitespace-pre">
                  {getHexDump(selectedPacket)}
                </pre>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-cyber-text-muted">
              <span>* Socket frame inspector (Intrusion Detection System active)</span>
              <span className="text-cyber-cyan flex items-center gap-1">
                <Shield className="w-3 h-3" /> SECURE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
