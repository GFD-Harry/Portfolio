import { Link } from 'react-router'

import { useLanguage } from '../contexts/useLanguage'

export function Footer() {
  const { copy } = useLanguage()

  return (
    <footer className="mt-20 border-t border-line pt-8">
      <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-heading">
            © 2026 {copy.intro.name}
          </p>
          <p className="mt-1 text-xs">{copy.contact.footerText}</p>
        </div>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-5">
            <li>
              <a href={`mailto:${copy.contact.email}`} className="hover:text-heading">
                {copy.contact.emailLabel}
              </a>
            </li>
            <li>
              <a href={copy.contact.githubUrl} target="_blank" rel="noreferrer" className="hover:text-heading">
                {copy.contact.githubLabel} ↗
              </a>
            </li>
            <li>
              <a href={copy.contact.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-heading">
                {copy.contact.linkedinLabel} ↗
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-heading">
                {copy.navigation.contact}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
