import { useMemo, type ReactNode } from 'react'

import type { ProfileSlug } from '../data/profiles'
import {
  ProfileContext,
  type ProfileContextValue,
} from './profile-context'

interface ProfileProviderProps {
  children: ReactNode
  profileId: string
  profileSlug: ProfileSlug
}

export function ProfileProvider({
  children,
  profileId,
  profileSlug,
}: ProfileProviderProps) {
  const value = useMemo<ProfileContextValue>(
    () => ({
      profileId,
      profileSlug,
      buildPath: (path = '') => {
        const normalizedPath = path.replace(/^\/+/, '')

        return normalizedPath
          ? `/${profileId}/${normalizedPath}`
          : `/${profileId}`
      },
    }),
    [profileId, profileSlug],
  )

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}
