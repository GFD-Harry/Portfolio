import { NavLink } from 'react-router'

import { useLanguage } from '../contexts/useLanguage'
import { LanguageToggle } from './LanguageToggle'

export function Sidebar() {
  const { copy } = useLanguage()

  const navigationItems = [
    {
      to: '/',
      label: copy.navigation.intro,
      end: true,
    },
    {
      to: '/about',
      label: copy.navigation.about,
      end: false,
    },
    {
      to: '/projects',
      label: copy.navigation.projects,
      end: false,
    },
    {
      to: '/experience',
      label: copy.navigation.experience,
      end: false,
    },
    {
      to: '/skills',
      label: copy.navigation.skills,
      end: false,
    },
    {
      to: '/education',
      label: copy.navigation.education,
      end: false,
    },
    {
      to: '/contact',
      label: copy.navigation.contact,
      end: false,
    },
  ]

  return (
    <div className="flex h-full flex-col">
      <div>
        <div className="group inline-block text-2xl font-black tracking-[-0.04em] text-heading">
          Sections
          <span
            className="mt-3 block h-1 w-12 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="h-10" />

      <nav aria-label="Portfolio pages">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                style={{ fontWeight: 700 }}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-sm transition-colors',
                    isActive
                    ? 'bg-surface-hover text-heading'
                    : 'text-heading hover:bg-surface'
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <div className="pt-6">
          <LanguageToggle />
        </div>

      </div>
    </div>
  )
}
