import { useLanguage } from '../contexts/useLanguage'

export function ContactPage() {
  const { copy } = useLanguage()

  const contactLinks = [
    {
      label: copy.contact.emailLabel,
      value: copy.contact.email,
      href: `mailto:${copy.contact.email}`,
      external: false,
    },
    {
      label: copy.contact.githubLabel,
      value: 'github.com/ntdbouque',
      href: copy.contact.githubUrl,
      external: true,
    },
    {
      label: copy.contact.linkedinLabel,
      value: 'linkedin.com/in/duynguyen-ai',
      href: copy.contact.linkedinUrl,
      external: true,
    },
  ]

  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-tight text-heading">
        {copy.contact.heading}
      </h1>

      <p className="mt-5 border-l-4 border-emerald-500 pl-4 text-xl font-medium italic leading-8 text-heading">
        “{copy.contact.tagline}”
      </p>

      <p className="mt-5 max-w-2xl leading-7 text-body">
        {copy.contact.description}
      </p>

      <div className="mt-10 divide-y divide-line rounded-xl border border-line">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className="group flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="font-medium text-heading">
              {link.label}
            </span>

            <span className="break-all text-sm text-muted group-hover:text-heading">
              {link.value} {link.external && '↗'}
            </span>
          </a>
        ))}
      </div>

      <aside className="mt-10 rounded-2xl bg-brand px-6 py-8 text-white sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          {copy.contact.ctaHeading}
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
          {copy.contact.ctaDescription}
        </p>

        <a
          href={`mailto:${copy.contact.email}`}
          style={{ color: '#18181b' }}
          className="mt-6 inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-100"
        >
          {copy.contact.ctaButton} →
        </a>
      </aside>
    </section>
  )
}
