import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import type { ReactNode } from 'react'

import { content } from '../data/content'
import type { Language } from '../types/content'
import {
  LanguageContext,
  type LanguageContextValue,
} from './language-context'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

function getInitialLanguage(): Language {
  try {
    const savedLanguage = localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    )

    return savedLanguage === 'en' ? 'en' : 'vi'
  } catch {
    return 'vi'
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] =
    useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language

    try {
      localStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        language,
      )
    } catch {
      // Website vẫn hoạt động nếu localStorage bị chặn.
    }
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => {
        setLanguage((currentLanguage) =>
          currentLanguage === 'vi' ? 'en' : 'vi',
        )
      },
      copy: content[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}