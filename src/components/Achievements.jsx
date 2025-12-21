function Achievements() {
  return (
    <section
      id="achievements"
      className="pt-24 pb-20 bg-page"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="uppercase tracking-[0.18em] text-[0.68rem]">Highlights</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink">Achievements</h2>
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
              className={`flex items-start gap-3 bg-section border border-border p-4 rounded-2xl transition-all duration-200 ease-out hover:shadow-md hover:shadow-primary/10 hover:scale-[1.01] opacity-0 translate-y-3 animate-[fade-up_${0.6 +
                index * 0.05}s_ease-out_forwards]`}
            >
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-surface text-primary border border-border-strong">
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
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

