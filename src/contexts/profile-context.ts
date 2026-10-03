import { createContext } from 'react'

import type { ProfileSlug } from '../data/profiles'

export interface ProfileContextValue {
  profileId: string
  profileSlug: ProfileSlug
  buildPath: (path?: string) => string
}

export const ProfileContext =
  createContext<ProfileContextValue | null>(null)
