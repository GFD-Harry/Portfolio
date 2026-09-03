import {
  Link,
  Navigate,
  useParams,
} from 'react-router'

import { useLanguage } from '../contexts/useLanguage'
import type { ProjectContent } from '../types/content'

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
          live: 'Xem demo',
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

      <ProjectText
        text={project.summary}
        organization={project.organization}
        className="mt-5 border-l-4 border-emerald-500 pl-4 text-lg leading-8 text-body"
      />

      <ProjectText
        text={project.description}
        organization={project.organization}
        className="mt-5 text-lg leading-8 text-body"
      />

      <section className="mt-10">
        <h2 className="inline-block border-b-2 border-line-strong pb-1 text-2xl font-semibold text-heading">
          {labels.technologies}
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-line bg-surface px-3 py-1.5 text-base text-body"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-8 grid grid-cols-2 gap-6">
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

        {(project.liveUrl || project.githubUrl) && (
          <section>
            <h2 className="inline-block border-b-2 border-line-strong pb-1 text-2xl font-semibold text-heading">
              Links
            </h2>

            <div className="mt-4 flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-gray-300 px-4 py-2.5 text-base font-medium text-gray-700 transition hover:bg-gray-100"                >
                  {labels.live} ↗
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-line px-4 py-2.5 text-base font-medium text-heading"
                >
                  {labels.github} ↗
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}

interface ProjectTextProps {
  text: string
  organization?: ProjectContent['organization']
  className: string
}

function ProjectText({
  text,
  organization,
  className,
}: ProjectTextProps) {
  if (!organization || !text.includes(organization.name)) {
    return <p className={className}>{text}</p>
  }

  const [before, after] = text.split(organization.name, 2)

  return (
    <p className={className}>
      {before}
      <a
        href={organization.url}
        target="_blank"
        rel="noreferrer"
        className="font-medium italic !text-emerald-600 !underline decoration-emerald-300 underline-offset-4 transition-colors hover:!text-emerald-700"
      >
        {organization.name}
      </a>
      {after}
    </p>
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
      <h2 className="inline-block border-b-2 border-line-strong pb-1 text-2xl font-semibold text-heading">
        {title}
      </h2>

      <ul className="mt-4 list-disc space-y-3 pl-5 text-lg leading-8 text-body">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
