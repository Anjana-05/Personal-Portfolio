function Achievements() {
  return (
    <section
      id="achievements"
      className="pt-24 pb-20 bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 text-sm font-semibold text-purple-300 hover:border-purple-400 hover:bg-purple-950/60 transition-all duration-200">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="uppercase tracking-[0.18em] text-xs">Highlights</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Achievements</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Won first place in regional coding competition',
            'Completed full-stack web development bootcamp',
            'Published open-source project with 100+ stars on GitHub',
            'Earned AWS Certified Cloud Practitioner certification',
            'Contributed to major open-source project',
            'Graduated with honors in Computer Science'
          ].map((text, index) => (
            <div
              key={text}
              className={`flex items-start gap-3 bg-black/40 border border-purple-500/20 p-5 rounded-2xl transition-all duration-200 ease-out hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] hover:border-purple-400/50 opacity-0 translate-y-3 animate-[fade-up_${0.6 +
                index * 0.05}s_ease-out_forwards]`}
            >
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-950/60 text-purple-400 border border-purple-500/30 hover:bg-purple-900/60 hover:scale-110 transition-all duration-200">
                {/* trophy icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 4h8v3a4 4 0 0 1-8 0V4Z" />
                  <path d="M10 14h4" />
                  <path d="M9 18h6" />
                  <path d="M7 4H5a2 2 0 0 0-2 2v1a3 3 0 0 0 3 3" />
                  <path d="M17 4h2a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3" />
                </svg>
              </span>
              <p className="text-gray-300 text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

