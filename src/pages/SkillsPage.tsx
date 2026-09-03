import { useLanguage } from '../contexts/useLanguage'

export function SkillsPage() {
  const { copy } = useLanguage()

  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-[-0.03em] text-heading sm:text-5xl">
        {copy.skills.heading}
      </h1>

      <p className="mt-5 border-l-4 border-emerald-500 pl-4 text-xl font-medium italic leading-8 text-heading">
        “{copy.skills.tagline}”
      </p>
{/* 
      {copy.skills.description && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-body">
          {copy.skills.description}
        </p>  
      )} */}

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {copy.skills.groups.map((group, index) => (
          <article
            key={group.title}
            className="group min-h-56 rounded-2xl border border-line bg-canvas p-8 transition-colors hover:bg-surface last:md:col-span-2"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-xs font-semibold text-muted transition-colors group-hover:border-line-strong group-hover:text-heading">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h2 className="text-lg font-semibold text-heading">
                {group.title}
              </h2>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2.5" aria-label={group.title}>
              {group.items.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-body transition-colors group-hover:bg-canvas">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
