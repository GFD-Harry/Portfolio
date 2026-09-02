import {
  Link,
  Navigate,
  useParams,
} from 'react-router'

import { useLanguage } from '../contexts/useLanguage'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const { language, copy } = useLanguage()

  const project = copy.projects.items.find(
    (item) => item.slug === slug,
  )

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const labels =
    language === 'vi'
      ? {
          back: 'Quay lại dự án',
          technologies: 'Công nghệ',
          features: 'Chức năng',
          challenges: 'Thách thức',
          learnings: 'Bài học',
          live: 'Xem sản phẩm',
          github: 'GitHub',
        }
      : {
          back: 'Back to projects',
          technologies: 'Tech Stack',
          features: 'Features',
          challenges: 'Challenges',
          learnings: 'Learnings',
          live: 'Live demo',
          github: 'GitHub',
        }

  return (
    <article>
      <Link
        to="/projects"
        className="text-sm text-muted hover:text-heading"
      >
        ← {labels.back}
      </Link>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-heading">
        {project.title}
      </h1>

      <p className="mt-4 text-lg leading-8 text-body">
        {project.summary}
      </p>

      <p className="mt-4 leading-7 text-body">
        {project.description}
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">
          {labels.technologies}
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-body"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-10 grid grid-cols-2 gap-8">
        <ProjectList
          title={labels.features}
          items={project.features}
        />

        <ProjectList
          title={labels.challenges}
          items={project.challenges}
        />

        <ProjectList
          title={labels.learnings}
          items={project.learnings}
        />
      </div>

      {(project.liveUrl || project.githubUrl) && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-heading">
            Links
          </h2>

          <div className="mt-4 flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white"
              >
                {labels.live} ↗
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-heading"
              >
                {labels.github} ↗
              </a>
            )}
          </div>
        </section>
      )}
    </article>
  )
}

interface ProjectListProps {
  title: string
  items: string[]
}

function ProjectList({
  title,
  items,
}: ProjectListProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-heading">
        {title}
      </h2>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}