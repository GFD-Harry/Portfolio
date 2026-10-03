import {
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router'

import { PortfolioLayout } from './components/PortfolioLayout'
import { Sidebar } from './components/Sidebar'
import { LanguageProvider } from './contexts/LanguageProvider'
import { ProfileProvider } from './contexts/ProfileProvider'
import {
  defaultProfileId,
  getProfileSlug,
  profileContent,
} from './data/profiles'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { EducationPage } from './pages/EducationPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'

function PortfolioProfile() {
  const { profileId } = useParams()
  const profileSlug = getProfileSlug(profileId)

  if (!profileId || !profileSlug) {
    return <Navigate to={`/${defaultProfileId}`} replace />
  }

  return (
    <ProfileProvider
      profileId={profileId}
      profileSlug={profileSlug}
    >
      <LanguageProvider content={profileContent[profileSlug]}>
        <PortfolioLayout sidebar={<Sidebar />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route
              path="projects/:slug"
              element={<ProjectDetailPage />}
            />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<ProfileHomeRedirect />} />
          </Routes>
        </PortfolioLayout>
      </LanguageProvider>
    </ProfileProvider>
  )
}

function ProfileHomeRedirect() {
  const { profileId } = useParams()

  return (
    <Navigate
      to={`/${profileId ?? defaultProfileId}`}
      replace
    />
  )
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate to={`/${defaultProfileId}`} replace />
        }
      />
      <Route path="/:profileId/*" element={<PortfolioProfile />} />
      <Route
        path="*"
        element={
          <Navigate to={`/${defaultProfileId}`} replace />
        }
      />
    </Routes>
  )
}

export default App
