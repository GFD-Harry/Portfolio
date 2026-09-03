import {ExperienceTimeline} from '../components/ExperienceTimeLine'
import { useLanguage } from '../contexts/useLanguage'

export function ExperiencePage() {
  const { language, copy } = useLanguage()

  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-[-0.03em] text-heading sm:text-5xl">
        {copy.experience.heading}
      </h1>

      <p className="mt-5 border-l-4 border-emerald-500 pl-4 text-xl font-medium italic leading-8 text-heading">
        “{copy.experience.tagline}”
      </p>

      <p className="mt-5 whitespace-pre-line text-lg leading-8 text-body">
          {copy.experience.description}  
      </p>

      <ExperienceTimeline
        items={copy.experience.items}
        latestLabel={
          language === 'vi' ? 'Mới nhất' : 'Latest'
        }
      />
    </section>
  )
}