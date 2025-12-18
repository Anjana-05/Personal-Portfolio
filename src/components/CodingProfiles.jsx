function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="pt-24 pb-20 bg-[#FAFAFA]"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="uppercase tracking-[0.18em] text-[0.68rem]">Competitive coding</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0B1220]">Coding Profiles</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-3 bg-white border border-[#E5E7EB] text-[#0B1220] hover:text-[#0B1220] hover:border-[#D1D5DB] hover:bg-[#F4F6F8] hover:scale-[1.01] transition-all duration-200 ease-out"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#E5E7EB] group-hover:scale-110 transition-transform duration-200">
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
            <span className="text-sm font-medium tracking-wide">LeetCode</span>
          </a>

          <a
            href="https://codeforces.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-3 bg-white border border-[#E5E7EB] text-[#0B1220] hover:text-[#0B1220] hover:border-[#D1D5DB] hover:bg-[#F4F6F8] hover:scale-[1.01] transition-all duration-200 ease-out"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#E5E7EB] group-hover:scale-110 transition-transform duration-200">
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
            <span className="text-sm font-medium tracking-wide">Codeforces</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles

