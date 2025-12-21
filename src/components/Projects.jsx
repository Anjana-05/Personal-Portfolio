const projects = [
  {
    title: 'Appointment Booking System',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Anjana-05/Appointix-mern',
    demo: 'https://prescripto-mern-nu.vercel.app/',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Personal Expense Tracker',
    description: 'Collaborative task management tool with real-time updates and notifications.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Personal Expense Tracker',
    description: 'Real-time weather information dashboard with location-based forecasts.',
    tech: ['Angular', 'Tailwind', 'Node.js','MongoDB'],
    github: 'https://github.com/Anjana-05/Personal-Expense-Tracker',
    demo: 'https://personal-expense-tracker-mern.vercel.app/',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Blog Platform',
    description: 'Content management system for creating and managing blog posts.',
    tech: ['Django', 'PostgreSQL', 'HTML/CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Yummy Spot - Food Ordering UI',
    description: 'RESTful API for social media features with authentication and authorization.',
    tech: ['Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/Anjana-05/Yummy-Spot',
    demo: 'https://anjana-05.github.io/Yummy-Spot/',
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Anjana-05/Personal-Portfolio',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
]

function ProjectCard({ project }) {
  return (
    <div className="group bg-section border border-border rounded-2xl overflow-hidden transition-all duration-200 ease-out hover:shadow-md hover:shadow-primary/10 hover:scale-[1.01]">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition duration-300 ease-out group-hover:scale-105 group-hover:opacity-95"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 opacity-0 group-hover:opacity-100 transition duration-300 ease-out" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-ink flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-surface text-primary border border-border-strong group-hover:scale-105 transition-transform duration-200">
            {/* spark icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3 13.5 8.5 19 10 13.5 11.5 12 17 10.5 11.5 5 10l5.5-1.5L12 3Z" />
            </svg>
          </span>
          {project.title}
        </h3>
        <p className="text-muted mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 bg-surface border border-border-strong text-text rounded-full text-[0.68rem] tracking-wide uppercase"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-xs font-semibold tracking-wide hover:bg-primary-hover hover:scale-[1.01] transition-all duration-200 ease-out"
          >
            <span>GitHub</span>
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-hover text-white group-hover/btn:translate-x-0.5 transition-transform duration-150">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3"
                aria-hidden="true"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.29 6.84 9.64.5.1.68-.22.68-.48 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.08 1.56 1.08.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.74 0 0 .84-.27 2.75 1.05A9.21 9.21 0 0 1 12 6.15c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.48.1 2.74.64.72 1.02 1.64 1.02 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.03 10.03 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
                />
              </svg>
            </span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-section text-ink text-xs font-semibold tracking-wide hover:bg-surface hover:border-border-strong hover:scale-[1.01] transition-all duration-200 ease-out"
            >
              <span>Live Demo</span>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-surface text-primary group-hover/btn:translate-x-0.5 transition-transform duration-150">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 17 17 8" />
                  <path d="M9 7h8v8" />
                </svg>
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="pt-24 pb-20 bg-page"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="uppercase tracking-[0.18em] text-[0.68rem]">Selected work</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink">Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

