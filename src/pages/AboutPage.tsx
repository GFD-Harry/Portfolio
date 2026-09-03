import { useLanguage } from '../contexts/useLanguage'

export function AboutPage() {
  const { copy } = useLanguage()

  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-[-0.03em] text-heading sm:text-5xl">
        {copy.about.heading}
      </h1>

      <p className="mt-5 max-w-4xl border-l-4 border-emerald-500 pl-4 text-xl font-medium italic leading-8 text-heading">
        “{copy.about.tagline}”
      </p>

      <div className="mt-10 max-w-4xl space-y-7">
        {copy.about.description.map((paragraph) => (
          <p
            key={paragraph}
            className="text-lg leading-8 text-body"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
