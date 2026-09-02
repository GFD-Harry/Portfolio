import { useLanguage } from '../contexts/useLanguage'

export function AboutPage() {
  const { copy } = useLanguage()

  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-[-0.03em] text-heading sm:text-5xl">
        {copy.about.heading}
      </h1>

      <p className="mt-4 max-w-4xl text-xl font-medium italic leading-8 text-heading">
        “{copy.about.tagline}”
      </p>

      <div className="mt-10 grid max-w-5xl gap-x-12 gap-y-7 lg:grid-cols-2">
        {copy.about.description.map((paragraph, index) => (
          <p
            key={paragraph}
            className={[
              'text-lg leading-8 text-body',
              index === copy.about.description.length - 1
                ? 'lg:col-span-2 lg:max-w-4xl'
                : '',
            ].join(' ')}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
