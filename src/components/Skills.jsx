function Skills() {
  return (
    <section
      id="skills"
      className="pt-24 pb-20 bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 text-sm font-semibold text-purple-300 hover:border-purple-400 hover:bg-purple-950/60 transition-all duration-200">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="uppercase tracking-[0.18em] text-xs">Tech stack</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Skills</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black/40 border border-purple-500/20 p-6 rounded-2xl transition-all duration-200 ease-out hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] hover:border-purple-400/50">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30 hover:bg-purple-900/60 hover:scale-110 transition-all duration-200">
              {/* curly braces icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M9 3c-2 0-3 1-3 3v2c0 1-1 2-2 2 1 0 2 1 2 2v2c0 2 1 3 3 3" />
                <path d="M15 3c2 0 3 1 3 3v2c0 1 1 2 2 2-1 0-2 1-2 2v2c0 2-1 3-3 3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                Java
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                C
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                C++
              </span>
            </div>
          </div>

          <div className="bg-black/40 border border-purple-500/20 p-6 rounded-2xl transition-all duration-200 ease-out hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] hover:border-purple-400/50">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30 hover:bg-purple-900/60 hover:scale-110 transition-all duration-200">
              {/* monitor icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                HTML
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                CSS
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                React
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className="bg-black/40 border border-purple-500/20 p-6 rounded-2xl transition-all duration-200 ease-out hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] hover:border-purple-400/50">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30 hover:bg-purple-900/60 hover:scale-110 transition-all duration-200">
              {/* server icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="6" rx="1.5" />
                <rect x="3" y="14" width="18" height="6" rx="1.5" />
                <path d="M7 7h.01M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                Node.js
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                Express
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                REST API
              </span>
            </div>
          </div>

          <div className="bg-black/40 border border-purple-500/20 p-6 rounded-2xl transition-all duration-200 ease-out hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] hover:border-purple-400/50">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30 hover:bg-purple-900/60 hover:scale-110 transition-all duration-200">
              {/* database icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="12" cy="5" rx="7" ry="3" />
                <path d="M5 5v14c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
                <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Databases</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                MySQL
              </span>
            </div>
          </div>

          <div className="bg-black/40 border border-purple-500/20 p-6 rounded-2xl transition-all duration-200 ease-out hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] hover:border-purple-400/50">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30 hover:bg-purple-900/60 hover:scale-110 transition-all duration-200">
              {/* tools icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15.2 4.3 1.5-1.5 4 4-1.5 1.5" />
                <path d="M11 7 5 13l-2 6 6-2 6-6" />
                <path d="m12.5 5.5 6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                Git
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                VS Code
              </span>
              <span className="px-3 py-1 bg-purple-950/40 border border-purple-500/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/40 hover:border-purple-400/40 hover:text-white transition-all duration-200">
                Postman
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

