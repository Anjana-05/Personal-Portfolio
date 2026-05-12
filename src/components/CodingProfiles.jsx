import { useState, useEffect } from 'react'

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === null || value === undefined || isNaN(value)) return;
    
    let startTimestamp = null;
    const startValue = 0;
    const endValue = Number(value);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutSine
      const easeProgress = Math.sin((progress * Math.PI) / 2);
      setCount(Math.floor(easeProgress * (endValue - startValue) + startValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}</span>;
};

function CodingProfiles() {
  const [leetCodeStats, setLeetCodeStats] = useState(null)
  const [githubStats, setGithubStats] = useState(null)
  const [githubCommits, setGithubCommits] = useState(null)

  useEffect(() => {
    // Fetch LeetCode Stats
    fetch('https://alfa-leetcode-api.onrender.com/userProfile/Anjana_baskaran')
      .then(res => res.json())
      .then(data => {
        if (data && data.totalSolved !== undefined) {
          setLeetCodeStats(data)
        }
      })
      .catch(err => console.error('Error fetching LeetCode stats:', err))

    // Fetch GitHub Stats
    fetch('https://api.github.com/users/Anjana-05')
      .then(res => res.json())
      .then(data => {
        if (data && !data.message) {
          setGithubStats(data)
        }
      })
      .catch(err => console.error('Error fetching GitHub stats:', err))

    // Fetch GitHub Commits
    fetch('https://api.github.com/search/commits?q=author:Anjana-05', {
      headers: {
        'Accept': 'application/vnd.github.cloak-preview'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.total_count !== undefined) {
          setGithubCommits(data.total_count)
        }
      })
      .catch(err => console.error('Error fetching GitHub commits:', err))
  }, [])

  return (
    <section
      id="coding-profiles"
      className="pt-24 pb-20 bg-page"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 cursor-default">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-[0.18em] text-[0.68rem]">Competitive coding</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink">Coding Profiles</h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mt-4 opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LeetCode Card */}
          <a
            href="https://leetcode.com/u/Anjana_baskaran/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-section border border-border rounded-2xl p-6 hover:border-border-strong hover:bg-surface hover:scale-[1.01] transition-all duration-200 ease-out"
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary border border-primary/30 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m10 5-6 7 6 7" />
                    <path d="M8 12h10" />
                    <path d="m18 8 3 4-3 4" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-ink">LeetCode</h3>
              </div>
              <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
              <div className="relative h-40 w-40 shrink-0">
                <svg className="h-full w-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    className="text-surface"
                  />
                  {leetCodeStats && (
                    <>
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${(leetCodeStats.easySolved / leetCodeStats.totalSolved) * 283} 283`}
                        className="text-emerald-400 transition-all duration-1200 ease-out drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${(leetCodeStats.mediumSolved / leetCodeStats.totalSolved) * 283} 283`}
                        strokeDashoffset={-((leetCodeStats.easySolved / leetCodeStats.totalSolved) * 283)}
                        className="text-amber-400 transition-all duration-1200 ease-out drop-shadow-[0_0_8px_rgba(251,146,60,0.3)]"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${(leetCodeStats.hardSolved / leetCodeStats.totalSolved) * 283} 283`}
                        strokeDashoffset={-(((leetCodeStats.easySolved + leetCodeStats.mediumSolved) / leetCodeStats.totalSolved) * 283)}
                        className="text-rose-400 transition-all duration-1200 ease-out drop-shadow-[0_0_8px_rgba(248,113,113,0.3)]"
                      />
                    </>
                  )}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="flex items-baseline gap-0.5 animate-[scale_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-soft to-primary">
                      {leetCodeStats ? leetCodeStats.totalSolved : '-'}
                    </span>
                    <span className="text-xs text-muted font-medium">
                      /{leetCodeStats ? leetCodeStats.totalQuestions : '-'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-muted font-medium">Solved</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full space-y-3">
                <div className="flex flex-col p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-400/30 hover:border-emerald-400/60 hover:bg-emerald-500/15 transition-all duration-300 group/easy">
                  <span className="text-xs font-medium text-emerald-400 mb-1 group-hover/easy:text-emerald-300 transition-colors">Easy</span>
                  <div className="flex items-baseline gap-1 group-hover/easy:scale-105 transition-transform duration-300">
                    <span className="text-lg font-bold text-emerald-400">
                      {leetCodeStats ? leetCodeStats.easySolved : '-'}
                    </span>
                    <span className="text-xs text-muted">
                      /{leetCodeStats ? leetCodeStats.totalEasy : '-'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col p-3 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-400/30 hover:border-amber-400/60 hover:bg-amber-500/15 transition-all duration-300 group/medium">
                  <span className="text-xs font-medium text-amber-400 mb-1 group-hover/medium:text-amber-300 transition-colors">Med.</span>
                  <div className="flex items-baseline gap-1 group-hover/medium:scale-105 transition-transform duration-300">
                    <span className="text-lg font-bold text-amber-400">
                      {leetCodeStats ? leetCodeStats.mediumSolved : '-'}
                    </span>
                    <span className="text-xs text-muted">
                      /{leetCodeStats ? leetCodeStats.totalMedium : '-'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col p-3 rounded-xl bg-gradient-to-br from-rose-500/10 to-rose-500/5 border border-rose-400/30 hover:border-rose-400/60 hover:bg-rose-500/15 transition-all duration-300 group/hard">
                  <span className="text-xs font-medium text-rose-400 mb-1 group-hover/hard:text-rose-300 transition-colors">Hard</span>
                  <div className="flex items-baseline gap-1 group-hover/hard:scale-105 transition-transform duration-300">
                    <span className="text-lg font-bold text-rose-400">
                      {leetCodeStats ? leetCodeStats.hardSolved : '-'}
                    </span>
                    <span className="text-xs text-muted">
                      /{leetCodeStats ? leetCodeStats.totalHard : '-'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/Anjana-05"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-br from-section to-section/80 border border-border rounded-2xl p-6 hover:border-primary/50 hover:bg-surface hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ease-out overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary border border-primary/30 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-ink">GitHub</h3>
              </div>
              <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>

            <div className="flex flex-col gap-4 relative z-10">
              <div className="bg-gradient-to-r from-primary/10 to-primary-soft/10 rounded-xl p-5 border border-primary/20 flex items-center justify-between hover:border-primary/40 hover:bg-primary/15 transition-all duration-300 z-10 relative group/repos">
                <div className="text-sm font-medium text-muted group-hover/repos:text-primary/80 transition-colors">Public Repositories</div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-soft animate-[scale_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]">
                  {githubStats ? <AnimatedCounter value={githubStats.public_repos} /> : '-'}
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-primary/5 via-primary-soft/5 to-transparent rounded-xl p-8 border border-primary/20 flex flex-col items-center justify-center text-center overflow-hidden group/commits hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 min-h-45">
                <div className="absolute inset-0 opacity-30 group-hover/commits:opacity-60 transition-opacity duration-700 pointer-events-none">
                  <svg className="w-full h-full text-primary" viewBox="0 0 400 100" preserveAspectRatio="none" fill="none" stroke="currentColor">
                    <defs>
                      <linearGradient id="graph-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 L0,60 C 40,60 60,30 100,50 C 140,70 160,20 200,40 C 240,60 260,10 300,30 C 340,50 360,70 400,60 L400,80 Z"
                      fill="url(#graph-gradient)"
                      stroke="none"
                      className="animate-[dash_2s_ease-out_forwards]"
                    />
                    <path
                      d="M0,60 C 40,60 60,30 100,50 C 140,70 160,20 200,40 C 240,60 260,10 300,30 C 340,50 360,70 400,60"
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                      className="animate-[dash_2.5s_ease-in-out_forwards]"
                    />
                    <circle cx="100" cy="50" r="4" fill="currentColor" opacity="0" className="animate-[fade-in_0.5s_ease-out_1s_forwards]" />
                    <circle cx="200" cy="40" r="5" fill="currentColor" opacity="0" className="animate-[fade-in_0.5s_ease-out_1.5s_forwards]" />
                    <circle cx="300" cy="30" r="6" fill="currentColor" opacity="0" className="animate-[fade-in_0.5s_ease-out_2s_forwards] shadow-glow" />
                    <circle cx="300" cy="30" r="12" stroke="currentColor" strokeWidth="1" opacity="0" className="group-hover/commits:animate-ping" />
                  </svg>
                </div>

                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/commits:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-full bg-linear-to-r from-transparent via-primary/10 to-transparent flex -translate-x-full group-hover/commits:animate-[shimmer_1.5s_infinite]" />

                <div className="text-sm font-medium text-primary mb-2 flex items-center gap-2 relative z-10 backdrop-blur-sm px-3 py-1 rounded-full bg-surface/30">
                  <svg className="w-4 h-4 group-hover/commits:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Activity Pulse
                </div>
                <div className="text-6xl font-black text-gradient-primary relative z-10 drop-shadow-lg scale-100 group-hover/commits:scale-110 transition-transform duration-300 animate-[scale_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]">
                  {githubCommits !== null ? <AnimatedCounter value={githubCommits} /> : '-'}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted mt-2 relative z-10 font-bold">
                  Total Lifetime Commits
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles

