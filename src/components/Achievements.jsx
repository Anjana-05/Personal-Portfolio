import kratorqImage from "../assets/KRATORQ'24.jpg"
import hackHorizonImage from "../assets/HackHorizon'24.jpg"

function Achievements() {
  const achievements = [
    {
      year: '2024',
      title: '2nd Place - KRATORQ-24 Paper Presentation',
      category: 'Paper Presentation',
      description: 'Recognized for presenting a strong technical paper and communicating the idea clearly during evaluation.',
      image: kratorqImage,
      imageClass: 'object-top',
      imageTransformClass: 'scale-y-[1.14] origin-top',
      imageHoverClass: 'group-hover:scale-x-[1.03] group-hover:scale-y-[1.17]',
      featured: true,
    },
    {
      year: '2024',
      title: '3rd Place - HACKHORIZON 12-hour Hackathon',
      category: 'Hackathon',
      description: 'Secured a podium finish by building and presenting a practical solution under intense time pressure.',
      image: hackHorizonImage,
      imageClass: 'object-center',
      featured: true,
    },
    {
      year: '2024-2025',
      title: 'Academic Excellence Award',
      category: 'Academics',
      description: 'Received for strong academic performance and standing in the top 5% of the department.',
      image: null,
      imageClass: 'object-center',
      featured: true,
    },
    {
      year: '2025-2026',
      title: 'Academic Excellence Award',
      category: 'Academics',
      description: 'Received for strong academic performance and standing in the top 5% of the department.',
      image: null,
      imageClass: 'object-center',
      featured: true,
    },
  ]

  const featuredAchievements = achievements.filter((item) => item.featured)
  const supportingAchievements = achievements.filter((item) => !item.featured)

  return (
    <section
      id="achievements"
      className="pt-24 pb-20 bg-page"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 cursor-default">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="uppercase tracking-[0.18em] text-[0.68rem]">Highlights</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mt-4 mb-4 opacity-80" />
          <p className="max-w-2xl text-sm sm:text-base text-muted leading-relaxed">
            A timeline of selected wins, certifications, and leadership moments that show progression across academics, technical work, and public presentation.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {featuredAchievements.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-section transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                {item.image ? (
                  <div className="relative mb-0 h-44 w-full overflow-hidden md:h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${item.imageHoverClass || 'group-hover:scale-105'} ${item.imageClass || 'object-center'} ${item.imageTransformClass || ''}`}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-page via-page/30 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      <span>{item.category}</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative mb-0 h-44 w-full overflow-hidden bg-surface flex items-center justify-center border-b border-border md:h-48">
                    <div className="text-center text-muted">
                      <div className="text-xs sm:text-sm font-medium">Image placeholder</div>
                    </div>
                  </div>
                )}

                <div className="p-3 md:p-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-semibold text-ink leading-tight flex-1">
                      {item.title}
                    </h3>
                    <span className="inline-flex shrink-0 items-center rounded-full border border-border bg-surface px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {supportingAchievements.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {supportingAchievements.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-section p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 md:col-span-2 md:max-w-md md:mx-auto xl:col-span-1 xl:col-start-2"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-muted">{item.year}</span>
                  </div>

                  <h3 className="text-base font-semibold text-ink leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-text leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Achievements

