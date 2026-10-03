import {
  useEffect,
  useRef,
  useState,
} from 'react'
import { NavLink } from 'react-router'

import { useLanguage } from '../contexts/useLanguage'
import { useProfile } from '../contexts/useProfile'

function formatElapsed(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
}

export function TopBar() {
  const { language } = useLanguage()
  const { buildPath } = useProfile()
  const [localTime, setLocalTime] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [hasAudioError, setHasAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(
        new Intl.DateTimeFormat(language === 'vi' ? 'vi-VN' : 'en-GB', {
          timeZone: 'Asia/Ho_Chi_Minh',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date()),
      )
    }

    updateTime()
    const timer = window.setInterval(updateTime, 30_000)

    return () => window.clearInterval(timer)
  }, [language])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.65
    }
  }, [])

  async function toggleSound() {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (!audio.paused) {
      audio.pause()
      return
    }

    try {
      setHasAudioError(false)
      await audio.play()
    } catch {
      setHasAudioError(true)
      setIsPlaying(false)
    }
  }

  const playerLabel = hasAudioError
    ? language === 'vi' ? 'Không thể phát nhạc' : 'Unable to play audio'
    : language === 'vi' ? 'Piano tập trung' : 'Focus piano'

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-24 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="flex h-full w-full items-center justify-between gap-4 px-8 text-sm">
        <NavLink
          to={buildPath()}
          style={{
            fontSize: '40px',
            fontWeight: 900,
            letterSpacing: '-0.055em',
            lineHeight: 1,
          }}
          className="group whitespace-nowrap text-heading"
        >
          Harry&apos;s <span className="text-emerald-500 transition-colors group-hover:text-emerald-600">Portfolio</span>
        </NavLink>

        <div className="ml-auto flex items-center justify-end gap-6">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap text-base font-bold text-heading">
              <span className="size-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
              {language === 'vi' ? 'Sẵn sàng cho cơ hội mới' : 'Available for opportunities'}
            </span>

            <span className="whitespace-nowrap text-muted">
              {language === 'vi' ? 'TP. Hồ Chí Minh, Việt Nam' : 'Ho Chi Minh City, Vietnam'}
            </span>

            <span className="whitespace-nowrap text-muted">{localTime} GMT+7</span>
          </div>

          <audio
            ref={audioRef}
            src="/audio/focus-piano.wav"
            preload="auto"
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={(event) => setElapsed(event.currentTarget.currentTime)}
            onError={() => setHasAudioError(true)}
          />

          <button
            type="button"
            onClick={() => void toggleSound()}
            aria-pressed={isPlaying}
            aria-label={
              language === 'vi'
                ? isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'
                : isPlaying ? 'Pause music' : 'Play music'
            }
            className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-surface px-4 py-2 font-semibold text-heading transition-colors hover:bg-surface-hover"
          >
            <span aria-hidden="true">{isPlaying ? '❚❚' : '♪'}</span>
            <span>{playerLabel}</span>
            <span className="font-normal tabular-nums text-muted">
              {isPlaying ? formatElapsed(elapsed) : '▶'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
