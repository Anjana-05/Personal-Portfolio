import appointmentImage from '../assets/Appointment_Booking_Platform.png'
import yummySpotImage from '../assets/Yummy_Spot.png'
import expenseTrackerImage from '../assets/Personal_Expense_Tracker.png'
import hrmsPortalImage from '../assets/HRMS_Portal.png'

const projects = [
  {
    title: 'Appointment Booking Platform',
    description: 'A comprehensive appointment booking system that allows users to schedule, manage, and track appointments with an intuitive interface and admin dashboard.',
    tech: ['ReactJS', 'TailwindCSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Anjana-05/Online-Appointment-Scheduler',
    demo: 'https://prescripto-mern-nu.vercel.app/',
    image: appointmentImage
  },
  {
    title: 'HRMS Portal',
    description: 'A comprehensive Human Resource Management System portal designed to streamline HR operations, employee management, and organizational workflows with an intuitive dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/Anjana-05/workify',
    demo: 'https://workify-ochre.vercel.app/',
    image: hrmsPortalImage
  },
  {
    title: 'Personal Expense Tracker',
    description: 'A comprehensive expense tracking application with user authentication and dynamic expense dashboard. Easily manage, categorize, and visualize your personal finances.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Anjana-05/Personal-Expense-Tracke',
    demo: '',
    image: expenseTrackerImage
  },
  {
    title: 'Yummy Spot - Food Ordering UI',
    description: 'A modern and responsive food ordering user interface that provides an engaging experience for browsing menus, selecting items, and placing orders.',
    tech: ['HTML', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Anjana-05/Yummy-Spot',
    demo: 'https://anjana-05.github.io/Yummy-Spot/',
    image: yummySpotImage
  },
  {
    title: 'Portfolio Website',
    description: 'A modern and responsive personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and professional experience.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Anjana-05/Personal-Portfolio',
    demo: 'https://personal-portfolio-chi-gold.vercel.app/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
]

function ProjectCard({ project }) {
  return (
    <div className="group relative bg-section border border-border rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-primary/40 hover:bg-surface hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/15">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-surface/50">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-section via-section/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-ink flex items-center gap-2 leading-snug group-hover:text-primary transition-colors duration-300">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary border border-primary/30 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300 flex-shrink-0">
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
              <path d="M12 3 13.5 8.5 19 10 13.5 11.5 12 17 10.5 11.5 5 10l5.5-1.5L12 3Z" />
            </svg>
          </span>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed line-clamp-3 group-hover:text-text/80 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-text rounded-full text-[0.65rem] tracking-wider uppercase font-semibold group-hover:border-primary/50 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-border via-primary/30 to-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold tracking-wide hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-200 ease-out"
          >
            <span>GitHub</span>
            <svg
              className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.29 6.84 9.64.5.1.68-.22.68-.48 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.08 1.56 1.08.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.74 0 0 .84-.27 2.75 1.05A9.21 9.21 0 0 1 12 6.15c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.48.1 2.74.64.72 1.02 1.64 1.02 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.03 10.03 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
              />
            </svg>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 text-ink text-xs font-semibold tracking-wide hover:bg-primary/10 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 active:scale-95 transition-all duration-200 ease-out"
            >
              <span>Live Demo</span>
              <svg
                className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 17 17 8" />
                <path d="M9 7h8v8" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
    </div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="pt-24 pb-20 bg-page"
    >
      <div className="text-left">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 cursor-default">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="uppercase tracking-[0.18em] text-[0.68rem]">Selected work</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink text-left">Projects</h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mb-8 opacity-80"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

