import React from 'react';
import { Github, GitCommit, GitPullRequest, Folder, ExternalLink } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

export const GithubStats: React.FC = () => {
  const repoStats = {
    username: 'karunesh-28',
    publicRepos: 31,
    primaryLang: 'JavaScript / Python',
    commitsCount: '250+',
    pullRequests: '12',
  };

  const contributionLevels = [
    0, 2, 0, 1, 3, 0, 4, 0, 1, 2, 0, 1, 0, 3, 4, 1, 0, 0, 2, 3, 0, 1, 4, 0, 2, 0, 1, 0, 3, 2, 0, 4, 1, 2, 0, 3, 0, 1, 0, 2, 4, 0, 1, 3
  ];

  return (
    <section id="github" className="py-20 relative overflow-hidden bg-cyber-bg">
      {/* ── Background Cyber Git Neural Branching Art ── */}
      <div
        className="hacker-bg-canvas"
        style={{ backgroundImage: "url('/bg-github.jpg')" }}
      />
      <div className="hacker-vignette" />
      <div className="hacker-gradient-edges" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">

        {/* Title */}
        <div className="text-left mb-10">
          <div className="font-mono text-cyber-blue text-xs font-bold tracking-widest mb-1">&gt; sys.telemetry</div>
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-white flex items-center gap-2">
            ./github_activity <span className="w-2.5 h-5 bg-cyber-cyan animate-cursor-blink inline-block"></span>
          </h2>
          <div className="w-20 h-1 bg-cyber-cyan mt-3 shadow-[0_0_10px_rgba(0,240,255,0.6)]"></div>
        </div>

        {/* GitHub Stats Dashboard Panel */}
        <div className="bg-[#070c16] border-2 border-cyber-cyan/40 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto text-left relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.08)]">
          
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyber-border pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl border border-cyber-cyan/40 flex items-center justify-center bg-[#0b1322] shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Github className="w-6 h-6 text-cyber-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-mono">@{repoStats.username}</h3>
                <p className="text-xs text-cyber-text-muted mt-0.5">GitHub Developer Environment Telemetry</p>
              </div>
            </div>

            <a
              href={`https://github.com/${repoStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cyberSound.playClick()}
              className="font-mono text-xs px-4 py-2 bg-cyber-cyan/15 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black rounded-xl transition-all duration-200 flex items-center gap-1.5 self-start sm:self-auto shadow-[0_0_10px_rgba(0,240,255,0.2)]"
            >
              <span>Connect Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#04070e] border border-cyber-cyan/25 p-4 rounded-xl text-left">
              <div className="flex items-center gap-1.5 text-cyber-cyan mb-1">
                <Folder className="w-4 h-4" />
                <span className="font-mono text-[10px] text-cyber-text-muted">PUBLIC_REPOS</span>
              </div>
              <div className="font-mono text-xl font-bold text-white">{repoStats.publicRepos}</div>
            </div>

            <div className="bg-[#04070e] border border-cyber-cyan/25 p-4 rounded-xl text-left">
              <div className="flex items-center gap-1.5 text-cyber-cyan mb-1">
                <GitCommit className="w-4 h-4" />
                <span className="font-mono text-[10px] text-cyber-text-muted">COMMITS</span>
              </div>
              <div className="font-mono text-xl font-bold text-white">{repoStats.commitsCount}</div>
            </div>

            <div className="bg-[#04070e] border border-cyber-cyan/25 p-4 rounded-xl text-left">
              <div className="flex items-center gap-1.5 text-cyber-purple mb-1">
                <GitPullRequest className="w-4 h-4" />
                <span className="font-mono text-[10px] text-cyber-text-muted">PULL_REQUESTS</span>
              </div>
              <div className="font-mono text-xl font-bold text-white">{repoStats.pullRequests}</div>
            </div>

            <div className="bg-[#04070e] border border-cyber-cyan/25 p-4 rounded-xl text-left">
              <div className="flex items-center gap-1.5 text-cyber-cyan mb-1">
                <Github className="w-4 h-4" />
                <span className="font-mono text-[10px] text-cyber-text-muted">LANGUAGES</span>
              </div>
              <div className="font-mono text-xs font-bold text-white truncate">{repoStats.primaryLang}</div>
            </div>
          </div>

          {/* Styled Contribution Graph Grid */}
          <div className="bg-[#04070e] border border-cyber-cyan/25 rounded-xl p-5">
            <div className="flex items-center justify-between border-b border-cyber-border pb-2.5 mb-4">
              <span className="font-mono text-xs text-cyber-cyan">// contributions_index_feed</span>
              <span className="font-mono text-[9px] text-cyber-text-muted">UTC SYNCED</span>
            </div>

            {/* Grid display */}
            <div className="flex flex-wrap gap-1.5">
              {contributionLevels.map((level, idx) => {
                let colorClass = 'bg-[#0b1322]'; // Level 0
                if (level === 1) colorClass = 'bg-cyber-cyan/20';
                if (level === 2) colorClass = 'bg-cyber-cyan/45';
                if (level === 3) colorClass = 'bg-cyber-cyan/75';
                if (level === 4) colorClass = 'bg-cyber-cyan shadow-[0_0_8px_#00f0ff]';

                return (
                  <div
                    key={idx}
                    className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-125 ${colorClass}`}
                    title={`Activity weight: ${level}`}
                  ></div>
                );
              })}
            </div>

            <div className="flex justify-between items-center mt-4 text-[9px] font-mono text-cyber-text-muted">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 bg-[#0b1322] rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-cyber-cyan/20 rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-cyber-cyan/45 rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-cyber-cyan/75 rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-cyber-cyan rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
