import { createContext } from 'react'

import type {
  Language,
  PortfolioContent,
} from '../types/content'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  copy: PortfolioContent
}

export const LanguageContext =
  createContext<LanguageContextValue | null>(null)