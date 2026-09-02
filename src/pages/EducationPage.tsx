import { useLanguage } from '../contexts/useLanguage'

export function EducationPage() {
  const { copy } = useLanguage()

  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-tight text-heading">
        {copy.education.heading}
      </h1>

      <p className="mt-3 text-lg font-medium italic text-heading">
        “{copy.education.tagline}”
      </p>

      <article className="mt-10 overflow-hidden rounded-2xl border border-line bg-canvas">
        <div className="border-b border-line bg-surface px-6 py-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-line-strong bg-canvas px-3 py-1 text-xs font-medium text-heading">
              {copy.education.status}
            </span>

            <span className="text-sm font-medium text-muted">
              {copy.education.period}
            </span>
          </div>
        </div>

        <div className="px-6 py-7 sm:px-8 sm:py-8">
          <p className="text-sm font-medium text-muted">
            {copy.education.school}
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-heading">
            {copy.education.degree}
          </h2>

          <p className="mt-2 text-sm font-semibold text-heading">
            {copy.education.gpa}
          </p>

          <p className="mt-5 max-w-2xl leading-7 text-body">
            {copy.education.description}
          </p>

          <div className="mt-7 border-t border-line pt-6">
            <h3 className="text-sm font-semibold text-heading">
              {copy.education.courseworkLabel}
            </h3>

            <ul className="mt-3 flex flex-wrap gap-2">
              {copy.education.coursework.map((course) => (
                <li
                  key={course}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-body"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}
