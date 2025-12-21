import { useState, useEffect } from 'react'

function CodingProfiles() {
  const [leetCodeStats, setLeetCodeStats] = useState(null)
  const [codeforcesStats, setCodeforcesStats] = useState(null)

  useEffect(() => {
    // Fetch LeetCode Stats
    fetch('https://leetcode-stats-api.herokuapp.com/Anjana_baskaran')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setLeetCodeStats(data)
        }
      })
      .catch(err => console.error('Error fetching LeetCode stats:', err))

    // Fetch Codeforces Stats
    fetch('https://codeforces.com/api/user.info?handles=Anjana_B')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'OK' && data.result.length > 0) {
          setCodeforcesStats(data.result[0])
        }
      })
      .catch(err => console.error('Error fetching Codeforces stats:', err))
  }, [])

  return (
    <section
      id="coding-profiles"
      className="pt-24 pb-20 bg-page"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="uppercase tracking-[0.18em] text-[0.68rem]">Competitive coding</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink">Coding Profiles</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LeetCode Card */}
          <a
            href="https://leetcode.com/u/Anjana_baskaran/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-section border border-border rounded-2xl p-6 hover:border-border-strong hover:bg-surface hover:scale-[1.01] transition-all duration-200 ease-out"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-primary border border-border-strong group-hover:scale-110 transition-transform duration-200">
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
              <span className="text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Circular Progress */}
              <div className="relative h-40 w-40 flex-shrink-0">
                <svg className="h-full w-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
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
                      {/* Easy Segment */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${(leetCodeStats.easySolved / leetCodeStats.totalSolved) * 283} 283`}
                        className="text-emerald-500 transition-all duration-1000 ease-out"
                      />
                      {/* Medium Segment */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${(leetCodeStats.mediumSolved / leetCodeStats.totalSolved) * 283} 283`}
                        strokeDashoffset={-((leetCodeStats.easySolved / leetCodeStats.totalSolved) * 283)}
                        className="text-yellow-500 transition-all duration-1000 ease-out"
                      />
                      {/* Hard Segment */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${(leetCodeStats.hardSolved / leetCodeStats.totalSolved) * 283} 283`}
                        strokeDashoffset={-(((leetCodeStats.easySolved + leetCodeStats.mediumSolved) / leetCodeStats.totalSolved) * 283)}
                        className="text-red-500 transition-all duration-1000 ease-out"
                      />
                    </>
                  )}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl font-bold text-ink">
                      {leetCodeStats ? leetCodeStats.totalSolved : '-'}
                    </span>
                    <span className="text-xs text-muted font-medium">
                      /{leetCodeStats ? leetCodeStats.totalQuestions : '-'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-muted font-medium">Solved</span>
                  </div>
                </div>
              </div>

              {/* Stats List */}
              <div className="flex-1 w-full space-y-3">
                <div className="flex flex-col p-3 rounded-xl bg-surface/50 border border-border hover:bg-surface transition-colors">
                  <span className="text-xs font-medium text-emerald-400 mb-1">Easy</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-ink">
                      {leetCodeStats ? leetCodeStats.easySolved : '-'}
                    </span>
                    <span className="text-xs text-muted">
                      /{leetCodeStats ? leetCodeStats.totalEasy : '-'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col p-3 rounded-xl bg-surface/50 border border-border hover:bg-surface transition-colors">
                  <span className="text-xs font-medium text-yellow-400 mb-1">Med.</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-ink">
                      {leetCodeStats ? leetCodeStats.mediumSolved : '-'}
                    </span>
                    <span className="text-xs text-muted">
                      /{leetCodeStats ? leetCodeStats.totalMedium : '-'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col p-3 rounded-xl bg-surface/50 border border-border hover:bg-surface transition-colors">
                  <span className="text-xs font-medium text-red-400 mb-1">Hard</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-ink">
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

          {/* Codeforces Card */}
          <a
            href="https://codeforces.com/profile/Anjana_B"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-section border border-border rounded-2xl p-6 hover:border-border-strong hover:bg-surface hover:scale-[1.01] transition-all duration-200 ease-out"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-primary border border-border-strong group-hover:scale-110 transition-transform duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <rect x="4" y="7" width="4" height="10" rx="1" />
                    <rect x="10" y="3" width="4" height="14" rx="1" />
                    <rect x="16" y="9" width="4" height="8" rx="1" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-ink">Codeforces</h3>
              </div>
              <span className="text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface/50 rounded-xl p-4 border border-border">
                <div className="text-xs text-muted mb-1">Current Rating</div>
                <div className="text-3xl font-bold text-ink">
                  {codeforcesStats ? codeforcesStats.rating : '-'}
                </div>
                <div className="text-xs text-primary mt-1 font-medium capitalize">
                  {codeforcesStats ? codeforcesStats.rank : '-'}
                </div>
              </div>
              <div className="bg-surface/50 rounded-xl p-4 border border-border">
                <div className="text-xs text-muted mb-1">Max Rating</div>
                <div className="text-3xl font-bold text-ink">
                  {codeforcesStats ? codeforcesStats.maxRating : '-'}
                </div>
                <div className="text-xs text-muted mt-1 font-medium capitalize">
                  {codeforcesStats ? codeforcesStats.maxRank : '-'}
                </div>
              </div>
            </div>

            <div className="mt-4 bg-surface/50 rounded-xl p-4 border border-border flex items-center justify-between">
              <div className="text-sm text-muted">Organization</div>
              <div className="text-sm font-medium text-ink text-right truncate max-w-[200px]">
                {codeforcesStats ? codeforcesStats.organization || 'N/A' : '-'}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles

