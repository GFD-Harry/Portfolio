import { ProjectCard } from '../components/ProjectCard'
import { useLanguage } from '../contexts/useLanguage'

export function ProjectsPage() {
  const { copy } = useLanguage()

  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-[-0.03em] text-heading sm:text-5xl">
        {copy.projects.heading}
      </h1>

      <p className="mt-4 max-w-3xl text-xl font-medium italic leading-8 text-heading">
        “{copy.projects.tagline}”
      </p>

      {copy.projects.description && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-body">
          {copy.projects.description}
        </p>
      )}

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {copy.projects.items.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}
