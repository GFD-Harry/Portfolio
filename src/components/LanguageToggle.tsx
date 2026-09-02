import { useLanguage } from '../contexts/useLanguage'

export function LanguageToggle() {
  const {
    language,
    setLanguage,
  } = useLanguage()

  const baseButtonClass =
    'rounded-lg px-3.5 py-2 text-sm font-bold transition-colors'

  return (
    <div
      role="group"
      aria-label="Select language"
      className="inline-flex gap-1 bg-canvas p-1"
    >
      <button
        type="button"
        aria-pressed={language === 'vi'}
        onClick={() => setLanguage('vi')}
        style={{ fontWeight: 700 }}
        className={`${baseButtonClass} ${
          language === 'vi'
            ? 'bg-brand text-white'
            : 'text-heading hover:bg-surface'
        }`}
      >
        Tiếng Việt
      </button>

      <button
        type="button"
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
        style={{ fontWeight: 700 }}
        className={`${baseButtonClass} ${
          language === 'en'
            ? 'bg-brand text-white'
            : 'text-heading hover:bg-surface'
        }`}
      >
        English
      </button>
    </div>
  )
}
