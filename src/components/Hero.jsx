function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 min-h-screen flex items-center bg-[#FAFAFA]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          {/* badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#EFF6FF] px-3 py-1 text-xs font-medium text-[#2563EB]">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            <span className="uppercase tracking-[0.22em] text-[0.68rem]">
              Open to full‑stack roles
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight font-bold mb-3 text-[#0B1220] pb-1">
            Anjana
          </h1>

          <p className="text-lg sm:text-xl text-[#0B1220] mb-4 flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EFF6FF] border border-[#E5E7EB]">
              {/* laptop-code icon */}
              <svg
                className="h-4 w-4 text-[#2563EB]"
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
            <span>Student, actively looking for a full‑stack developer role</span>
          </p>

          <p className="text-base sm:text-lg text-[#4B5563] mb-9 max-w-2xl">
            Passionate about crafting delightful, performant web experiences — from pixel‑perfect
            interfaces to scalable backend systems. I love shipping products that feel fast,
            polished, and thoughtfully designed.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#2563EB] text-white text-sm font-semibold tracking-wide hover:bg-[#1D4ED8] hover:scale-[1.01] transition-all duration-200 ease-out"
            >
              <span>GitHub</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1D4ED8] text-white group-hover:translate-x-0.5 transition-transform duration-200">
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
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[#E5E7EB] bg-white text-[#0B1220] text-sm font-medium tracking-wide hover:bg-[#F4F6F8] hover:border-[#D1D5DB] hover:scale-[1.01] transition-all duration-200 ease-out"
            >
              <span>LinkedIn</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F4F6F8] text-[#2563EB] group-hover:translate-x-0.5 transition-transform duration-200">
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
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#2563EB] text-white text-sm font-medium tracking-wide hover:bg-[#1D4ED8] hover:scale-[1.01] transition-all duration-200 ease-out"
            >
              <span>View Resume</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1D4ED8] text-white group-hover:translate-x-0.5 transition-transform duration-200">
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
      </div>
    </section>
  )
}

export default Hero

