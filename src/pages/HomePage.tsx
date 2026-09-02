import { Link } from 'react-router'

import { useLanguage } from '../contexts/useLanguage'

export function HomePage() {
  const { copy } = useLanguage()

  return (
    <section className="grid min-h-[36rem] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
      <div>
        <h1 className="text-5xl font-semibold tracking-[-0.04em] text-heading sm:text-6xl">
          {copy.intro.name}
        </h1>

        <p className="mt-4 text-2xl font-medium text-heading">
          {copy.intro.title}
        </p>

        <p className="mt-6 text-xl font-medium italic leading-8 text-heading">
          “{copy.intro.tagline}”
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-body">
          {copy.intro.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/about"
              className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold !text-white transition-colors hover:bg-brand-hover"          >
            {copy.intro.viewProjects} →
          </Link>

          <Link
            to="/contact"
            className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm font-medium text-heading transition-colors hover:bg-surface"
          >
            {copy.navigation.contact}
          </Link>

          <a
            href="/resume/nguyen-truong-duy-cv.pdf"
            download
            className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm font-medium text-heading transition-colors hover:bg-surface"
          >
            {copy.intro.downloadResume}
          </a>
        </div>
      </div>

      <div
        aria-label="Profile image placeholder"
        className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-line bg-surface"
      >
        <div className="text-center">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
              <img
                src="/resume/me.png"
                alt=''
                className="h-full w-full object-cover"
              />
            </div>
        </div>
      </div>
    </section>
  )
}
