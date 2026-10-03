import { Link, useLocation } from 'react-router'

import { useLanguage } from '../contexts/useLanguage'
import { useProfile } from '../contexts/useProfile'

export function SectionNavigation() {
  const { pathname } = useLocation()
  const { language, copy } = useLanguage()
  const { buildPath } = useProfile()

  const sections = [
    { path: '/', label: copy.navigation.intro },
    { path: '/about', label: copy.navigation.about },
    { path: '/projects', label: copy.navigation.projects },
    { path: '/experience', label: copy.navigation.experience },
    { path: '/skills', label: copy.navigation.skills },
    { path: '/education', label: copy.navigation.education },
    { path: '/contact', label: copy.navigation.contact },
  ]

  const profileBasePath = buildPath()
  const relativePath = pathname.slice(profileBasePath.length) || '/'
  const currentPath = relativePath.startsWith('/projects/')
    ? '/projects'
    : relativePath
  const currentIndex = sections.findIndex(
    (section) => section.path === currentPath,
  )

  if (currentIndex === -1) {
    return null
  }

  const previous = sections[currentIndex - 1]
  const next = sections[currentIndex + 1]
  const backLabel = language === 'vi' ? 'Quay lại' : 'Back'
  const continueLabel = language === 'vi' ? 'Tiếp tục' : 'Continue'

  return (
    <nav
      aria-label={language === 'vi' ? 'Điều hướng phần' : 'Section navigation'}
      className="mt-20 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          to={buildPath(previous.path)}
          className="group justify-self-start py-2"
        >
          <span className="block text-sm font-medium uppercase tracking-wider text-muted">
            ← {backLabel}
          </span>
          <span className="mt-1 block text-lg font-semibold text-heading underline-offset-4 group-hover:underline">
            {previous.label}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" aria-hidden="true" />
      )}

      {next && (
        <Link
          to={buildPath(next.path)}
          className="group justify-self-end py-2 text-right"
        >
          <span className="block text-sm font-medium uppercase tracking-wider text-muted">
            {continueLabel} →
          </span>
          <span className="mt-1 block text-lg font-semibold text-heading underline-offset-4 group-hover:underline">
            {next.label}
          </span>
        </Link>
      )}
    </nav>
  )
}
