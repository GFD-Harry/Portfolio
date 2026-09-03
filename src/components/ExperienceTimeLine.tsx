import type { ExperienceItem } from '../types/content'

interface ExperienceTimelineProps {
  items: ExperienceItem[]
  latestLabel: string
}

export function ExperienceTimeline({
  items,
  latestLabel,
}: ExperienceTimelineProps) {
  return (
    <ol className="mt-12">
      {items.map((item, index) => (
        <li
          key={`${item.role}-${item.organization}-${item.period}`}
          className="group grid gap-5 border-t border-line py-8 sm:grid-cols-[4rem_minmax(0,1fr)]"
        >
          <div className="text-sm font-semibold tabular-nums text-muted">
            {String(index + 1).padStart(2, '0')}
          </div>

          <article>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">
                {item.role}
                <span className="font-normal text-muted">
                  {' '}· {item.organization}
                </span>
              </h2>

              {item.isLatest && (
                <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white">
                  {latestLabel}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm font-medium text-muted">
              {item.period}
            </p>

            <p className="mt-5 max-w-3xl leading-7 text-body">
              {item.description}
            </p>
          </article>
        </li>
      ))}
    </ol>
  )
}