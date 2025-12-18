function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="pt-24 pb-20 bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 text-sm font-semibold text-purple-300 hover:border-purple-400 hover:bg-purple-950/60 transition-all duration-200">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="uppercase tracking-[0.18em] text-xs">Competitive coding</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Coding Profiles</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <a
            href="https://leetcode.com/u/Anjana_baskaran/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-3 bg-black/40 border border-purple-500/30 text-white hover:bg-purple-950/60 hover:border-purple-400 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 ease-out"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-950/60 text-purple-400 border border-purple-500/30 group-hover:scale-110 group-hover:bg-purple-900/60 transition-transform duration-200">
              {/* LeetCode-like icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
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
            <span className="text-base font-medium tracking-wide">LeetCode</span>
          </a>

          <a
            href="https://codeforces.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-3 bg-black/40 border border-purple-500/30 text-white hover:bg-purple-950/60 hover:border-purple-400 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 ease-out"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-950/60 text-purple-400 border border-purple-500/30 group-hover:scale-110 group-hover:bg-purple-900/60 transition-transform duration-200">
              {/* Codeforces-like icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                aria-hidden="true"
                fill="currentColor"
              >
                <rect x="4" y="7" width="4" height="10" rx="1" />
                <rect x="10" y="3" width="4" height="14" rx="1" />
                <rect x="16" y="9" width="4" height="8" rx="1" />
              </svg>
            </span>
            <span className="text-base font-medium tracking-wide">Codeforces</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles

