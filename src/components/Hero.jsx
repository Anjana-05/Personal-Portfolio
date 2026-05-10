import profileImage from '../assets/profile.jpeg'

function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 min-h-screen flex items-center bg-page"
    >
      <div className="text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 animate-in animate-delay-100 text-left">
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 cursor-default">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="uppercase tracking-[0.22em] text-[0.68rem] transition-colors duration-300">
                Open to full‑stack roles
              </span>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight font-bold text-ink text-left transition-all duration-300 hover:scale-105 cursor-default">
                Anjana B
              </h1>

              <p className="text-lg sm:text-xl text-text flex items-center gap-2 text-left transition-all duration-300 hover:translate-x-2 group">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-section border border-border transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:rotate-6">
                  {/* laptop-code icon */}
                  <svg
                    className="h-4 w-4 text-primary transition-colors duration-300 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="13" rx="2" />
                    <path d="M2 19h20" />
                    <path d="m10 9-2 3 2 3" />
                    <path d="m14 15 2-3-2-3" />
                  </svg>
                </span>
                <span className="transition-colors duration-300 group-hover:text-primary">Full Stack Developer</span>
              </p>

              <p className="text-base sm:text-lg text-muted mb-3 max-w-lg text-left">
                Passionate full stack developer with expertise in React, Node.js, and modern web technologies. 
                I build scalable applications and solve complex problems with clean, efficient code. 
                Always eager to learn new technologies and contribute to innovative projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Anjana-05"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-primary text-white text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:bg-primary/95 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-95"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">GitHub</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-white group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300 group-hover:bg-primary/40">
                  {/* GitHub mark-like icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
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

              <a
                href="https://www.linkedin.com/in/anjana-baskaran"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 border border-border bg-section text-ink text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:bg-surface hover:border-primary hover:text-primary hover:scale-110 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 active:scale-95"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">LinkedIn</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-surface text-primary group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  {/* LinkedIn icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <path d="M6.09 6.75A2.34 2.34 0 1 1 6.1 2a2.34 2.34 0 0 1-.01 4.75ZM4.26 8.42h3.67V22H4.26V8.42ZM10.2 8.42h3.52v1.84h.05c.49-.93 1.7-1.9 3.5-1.9 3.75 0 4.44 2.47 4.44 5.68V22h-3.66v-6.64c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H10.2V8.42Z" />
                  </svg>
                </span>
              </a>

              <a
                href="https://drive.google.com/file/d/1icJFbTufqYyDtbO7DtV2BFi4Lwv6wXLB/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-linear-to-r from-primary to-primary-hover text-white text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-95"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">View Resume</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300 group-hover:bg-white group-hover:text-primary">
                  {/* external-link icon */}
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
                    <path d="M14 5h5v5" />
                    <path d="M10 14 19 5" />
                    <path d="M19 14v5H5V5h5" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="lg:col-span-5 lg:pr-12 xl:pr-20 flex justify-center lg:justify-start lg:pl-10 items-center animate-in animate-delay-200 h-full">
            <div className="relative group w-48 h-48 sm:w-60 sm:h-60 lg:w-full lg:aspect-square lg:h-auto lg:max-w-70 xl:max-w-[320px]">
              {/* Formal profile image presentation */}
              <div className="w-full h-full rounded-2xl overflow-hidden border border-primary/20 bg-section shadow-xl shadow-black/10">
                <img
                  src={profileImage}
                  alt="Anjana B - Full Stack Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

