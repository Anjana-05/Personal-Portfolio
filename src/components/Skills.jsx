function Skills() {
  const skillsData = {
    programmingLanguages: [
      { name: 'JavaScript', icon: 'JS' },
      { name: 'Python', icon: 'PY' },
      { name: 'Java', icon: 'JA' },
      { name: 'C', icon: 'C' },
    ],
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'HTML5', icon: '📄' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Tailwind', icon: '🌊' },
      { name: 'Next.js', icon: '▲' },
    ],
    backend: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🗄️' },
    ],
    tools: [
      { name: 'Git', icon: '📦' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Postman', icon: '📮' },
      { name: 'Docker', icon: '🐳' },
    ]
  }

  return (
    <section
      id="skills"
      className="pt-24 pb-20 bg-page"
    >
      <div className="text-left">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="uppercase tracking-[0.18em] text-[0.68rem]">Tech stack</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink text-left">Skills</h2>
          </div>
        </div>

        <div className="space-y-12">
          {/* Programming Languages */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white border-2 border-primary/30 shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M9 3c-2 0-3 1-3 3v2c0 1-1 2-2 2 1 0 2 1 2 2v2c0 2 1 3 3 3" />
                    <path d="M15 3c2 0 3 1 3 3v2c0 1 1 2 2 2-1 0-2 1-2 2v2c0 2-1 3-3 3" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-ink">Programming Languages</h3>
                  <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full shadow-md">
                    Core
                  </span>
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skillsData.programmingLanguages.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-surface border border-border rounded-xl p-4 transition-all duration-300 ease-out hover:bg-surface-hover hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                      <span className="text-xs font-bold">{skill.icon}</span>
                    </div>
                    <span className="text-sm font-medium text-text group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white border-2 border-primary/30 shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-ink">Frontend Technologies</h3>
                  <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full shadow-md">
                    UI
                  </span>
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skillsData.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-surface border border-border rounded-xl p-4 transition-all duration-300 ease-out hover:bg-surface-hover hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                      <span className="text-lg">{skill.icon}</span>
                    </div>
                    <span className="text-sm font-medium text-text group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white border-2 border-primary/30 shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-ink">Backend Technologies</h3>
                  <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full shadow-md">
                    API
                  </span>
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skillsData.backend.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-surface border border-border rounded-xl p-4 transition-all duration-300 ease-out hover:bg-surface-hover hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                      <span className="text-lg">{skill.icon}</span>
                    </div>
                    <span className="text-sm font-medium text-text group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white border-2 border-primary/30 shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-ink">Development Tools</h3>
                  <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full shadow-md">
                    Tools
                  </span>
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skillsData.tools.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-surface border border-border rounded-xl p-4 transition-all duration-300 ease-out hover:bg-surface-hover hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                      <span className="text-lg">{skill.icon}</span>
                    </div>
                    <span className="text-sm font-medium text-text group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
