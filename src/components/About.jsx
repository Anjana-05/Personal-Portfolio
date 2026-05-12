function About() {
  return (
    <section
      id="about"
      className="pt-24 pb-20 bg-page"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 cursor-default">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-[0.18em] text-xs">Who I am</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mt-4 opacity-80" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-base text-text leading-relaxed text-justify">
              I&apos;m a passionate full-stack developer with a love for creating beautiful, 
              functional web applications. My journey in web development started with curiosity 
              and has evolved into a deep passion for crafting digital experiences that make a difference.
            </p>
            <p className="text-base text-text leading-relaxed text-justify">
              I enjoy working on both frontend and backend technologies, always striving to learn 
              new tools and frameworks. My goal is to build scalable, maintainable applications 
              that provide exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface/40 border border-primary/20 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span className="text-sm text-text transition-colors duration-300 group-hover:text-primary">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface/40 border border-primary/20 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <span className="text-sm text-text transition-colors duration-300 group-hover:text-primary">Team Player</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface/40 border border-primary/20 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </span>
                <span className="text-sm text-text transition-colors duration-300 group-hover:text-primary">Continuous Learner</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="relative bg-surface/40 border border-primary/20 p-6 rounded-2xl transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] hover:border-primary/50 group">
              <div className="absolute top-4 right-4 inline-flex items-center rounded-full border border-[#8b5cf6]/50 bg-[#1b1226]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#e9d5ff] shadow-[0_0_16px_rgba(168,85,247,0.25)] transition-all duration-300 group-hover:border-[#a855f7]/70 group-hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]">
                2023–2027
              </div>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4 12 14.01l-3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-ink transition-all duration-300 hover:translate-x-1">B.Tech Information Technology</h3>
              <p className="text-text text-sm mb-2 transition-all duration-300">Kongu Engineering College</p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-[#8b5cf6]/50 bg-[#1b1226]/85 px-3 py-1 text-xs font-semibold text-[#e9d5ff] shadow-[0_0_16px_rgba(168,85,247,0.25)] transition-all duration-300 hover:border-[#a855f7]/70 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]">CGPA: 9.15</span>
              </div>
            </div>

            <div className="relative bg-surface/40 border border-primary/20 p-6 rounded-2xl transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] hover:border-primary/50 group">
              <div className="absolute top-4 right-4 inline-flex items-center rounded-full border border-[#8b5cf6]/50 bg-[#1b1226]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#e9d5ff] shadow-[0_0_16px_rgba(168,85,247,0.25)] transition-all duration-300 group-hover:border-[#a855f7]/70 group-hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]">
                2021–2022
              </div>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-ink transition-all duration-300 hover:translate-x-1">HSC</h3>
              <p className="text-text text-sm mb-2 transition-all duration-300">Kongu Kalvi Nilayam Hr.Sec.School</p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-[#8b5cf6]/50 bg-[#1b1226]/85 px-3 py-1 text-xs font-semibold text-[#e9d5ff] shadow-[0_0_16px_rgba(168,85,247,0.25)] transition-all duration-300 hover:border-[#a855f7]/70 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]">92.17%</span>
              </div>
            </div>

            <div className="relative bg-surface/40 border border-primary/20 p-6 rounded-2xl transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] hover:border-primary/50 group">
              <div className="absolute top-4 right-4 inline-flex items-center rounded-full border border-[#8b5cf6]/50 bg-[#1b1226]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#e9d5ff] shadow-[0_0_16px_rgba(168,85,247,0.25)] transition-all duration-300 group-hover:border-[#a855f7]/70 group-hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]">
                2019–2020
              </div>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3 13.5 8.5 19 10 13.5 11.5 12 17 10.5 11.5 5 10l5.5-1.5L12 3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-ink transition-all duration-300 hover:translate-x-1">SSLC</h3>
              <p className="text-text text-sm mb-2 transition-all duration-300">Kongu Kalvi Nilayam Hr.Sec.School</p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-[#8b5cf6]/50 bg-[#1b1226]/85 px-3 py-1 text-xs font-semibold text-[#e9d5ff] shadow-[0_0_16px_rgba(168,85,247,0.25)] transition-all duration-300 hover:border-[#a855f7]/70 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]">86.6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

