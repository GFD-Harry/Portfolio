import { Link } from 'react-router'

import { useLanguage } from '../contexts/useLanguage'
import type { ProjectContent } from '../types/content'

interface ProjectCardProps {
  project: ProjectContent
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  const { language } = useLanguage()

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block h-full rounded-2xl border border-line bg-canvas p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-surface hover:shadow-md"
    >
      <article className="flex h-full min-h-52 flex-col">
        <h2 className="text-xl font-semibold leading-7 text-heading">
          {project.title}
        </h2>

        <p className="mt-3 leading-7 text-muted">
          {project.summary}
        </p>

        <span className="mt-auto pt-6 text-sm font-medium text-muted transition-colors group-hover:text-heading">
          {language === 'vi' ? 'Xem chi tiết...' : 'Learn more...'}
        </span>
      </article>
    </Link>
  )
}
